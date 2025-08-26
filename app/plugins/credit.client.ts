import seo from '~~/config/seo.json';

export default defineNuxtPlugin({
  name: 'credit',
  parallel: true,
  async setup() {
    if (DEV) return;

    let logMessage = '';
    const styles: string[] = [];

    seo.credit.forEach((entry, index) => {
      logMessage += `%c${entry.title} ― ${entry.name} // ${entry.site}`;
      styles.push('background-color: black; color: white; font-weight: bold;');

      // Add a newline except for the last entry
      if (index < seo.credit.length - 1) {
        logMessage += '\n';
      }
    });

    console.log(logMessage, ...styles);
  },
});
