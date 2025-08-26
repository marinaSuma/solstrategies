#!/usr/bin/env node

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createServer } from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Function to check if a port is in use on specific host
const isPortInUse = (port, host = 'localhost') => {
  return new Promise((resolve) => {
    const server = createServer();

    server
      .listen(port, host, () => {
        server.close(() => resolve(false));
      })
      .on('error', () => resolve(true));
  });
};

// Function to check if port is in use via netstat/ss (more reliable)
const checkPortWithNetstat = (port) => {
  try {
    const command = process.platform === 'win32' ? `netstat -an | findstr :${port}` : `netstat -an | grep :${port} || ss -an | grep :${port}`;

    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    return result.includes(`:${port}`) && (result.includes('LISTEN') || result.includes('LISTENING'));
  } catch {
    return false;
  }
};

// Function to detect running Nuxt/Nitro port
const getRunningPort = async () => {
  console.log('🔍 Detecting running Nuxt server...');

  // Check common Nuxt development ports (3000-3010)
  for (let port = 3000; port <= 3010; port++) {
    // First check with netstat (more reliable)
    if (checkPortWithNetstat(port)) {
      console.log(`✓ Found running server on port ${port} (detected via netstat)`);
      return port.toString();
    }

    // Then check localhost and 0.0.0.0 interfaces
    const hosts = ['localhost', '127.0.0.1', '0.0.0.0'];

    for (const host of hosts) {
      if (await isPortInUse(port, host)) {
        console.log(`✓ Found running server on port ${port} (host: ${host})`);
        return port.toString();
      }
    }
  }

  console.warn('⚠️  No running server detected on ports 3000-3010');
  console.warn('   Make sure your Nuxt dev server is running first!');
  console.warn('   Try running: npm run dev');
  return '3000';
};

const main = async () => {
  const port = await getRunningPort();
  console.log(`🚀 Starting cloudflared tunnel for localhost:${port}...`);

  try {
    execSync(`cloudflared tunnel --url http://localhost:${port}`, {
      stdio: 'inherit',
      cwd: __dirname,
    });
  } catch (error) {
    console.error('❌ Failed to start tunnel:', error.message);
    process.exit(1);
  }
};

main().catch((error) => {
  console.error('❌ Failed to start tunnel:', error.message);
  process.exit(1);
});
