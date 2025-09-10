import { NuxtModule, ModuleDependencyMeta } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface ModuleDependencies {
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/image"]?: ModuleDependencyMeta<typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/device"]?: ModuleDependencyMeta<typeof import("@nuxtjs/device").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@vueuse/nuxt"]?: ModuleDependencyMeta<typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-purgecss"]?: ModuleDependencyMeta<typeof import("nuxt-purgecss").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/critters"]?: ModuleDependencyMeta<typeof import("@nuxtjs/critters").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module"]?: ModuleDependencyMeta<typeof import("/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/robots"]?: ModuleDependencyMeta<typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/sitemap"]?: ModuleDependencyMeta<typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-schema-org"]?: ModuleDependencyMeta<typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-link-checker"]?: ModuleDependencyMeta<typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-seo-utils"]?: ModuleDependencyMeta<typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/seo"]?: ModuleDependencyMeta<typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-svgo"]?: ModuleDependencyMeta<typeof import("nuxt-svgo").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-mcp"]?: ModuleDependencyMeta<typeof import("nuxt-mcp").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-tradingview"]?: ModuleDependencyMeta<typeof import("nuxt-tradingview").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/scripts"]?: ModuleDependencyMeta<typeof import("@nuxt/scripts").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/device`
     */
    ["device"]: typeof import("@nuxtjs/device").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-purgecss`
     */
    ["purgecss"]: typeof import("nuxt-purgecss").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/critters`
     */
    ["critters"]: typeof import("@nuxtjs/critters").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     */
    ["linkChecker"]: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     */
    ["seo"]: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-svgo`
     */
    ["svgo"]: typeof import("nuxt-svgo").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-mcp`
     */
    ["mcp"]: typeof import("nuxt-mcp").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-tradingview`
     */
    ["tradingview"]: typeof import("nuxt-tradingview").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/scripts`
     */
    ["scripts"]: typeof import("@nuxt/scripts").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/device`
     */
    ["device"]?: typeof import("@nuxtjs/device").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-purgecss`
     */
    ["purgecss"]?: typeof import("nuxt-purgecss").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/critters`
     */
    ["critters"]?: typeof import("@nuxtjs/critters").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     */
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     */
    ["seo"]?: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-svgo`
     */
    ["svgo"]?: typeof import("nuxt-svgo").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-mcp`
     */
    ["mcp"]?: typeof import("nuxt-mcp").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-tradingview`
     */
    ["tradingview"]?: typeof import("nuxt-tradingview").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/scripts`
     */
    ["scripts"]?: typeof import("@nuxt/scripts").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/device", Exclude<NuxtConfig["device"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["nuxt-purgecss", Exclude<NuxtConfig["purgecss"], boolean>] | ["@nuxtjs/critters", Exclude<NuxtConfig["critters"], boolean>] | ["/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-seo-utils", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["nuxt-svgo", Exclude<NuxtConfig["svgo"], boolean>] | ["nuxt-mcp", Exclude<NuxtConfig["mcp"], boolean>] | ["nuxt-tradingview", Exclude<NuxtConfig["tradingview"], boolean>] | ["@nuxt/scripts", Exclude<NuxtConfig["scripts"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface ModuleDependencies {
    ["@nuxt/devtools"]?: ModuleDependencyMeta<typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/image"]?: ModuleDependencyMeta<typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/device"]?: ModuleDependencyMeta<typeof import("@nuxtjs/device").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@vueuse/nuxt"]?: ModuleDependencyMeta<typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-purgecss"]?: ModuleDependencyMeta<typeof import("nuxt-purgecss").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/critters"]?: ModuleDependencyMeta<typeof import("@nuxtjs/critters").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module"]?: ModuleDependencyMeta<typeof import("/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/robots"]?: ModuleDependencyMeta<typeof import("@nuxtjs/robots").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/sitemap"]?: ModuleDependencyMeta<typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-og-image"]?: ModuleDependencyMeta<typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-schema-org"]?: ModuleDependencyMeta<typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-link-checker"]?: ModuleDependencyMeta<typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-seo-utils"]?: ModuleDependencyMeta<typeof import("nuxt-seo-utils").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxtjs/seo"]?: ModuleDependencyMeta<typeof import("@nuxtjs/seo").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-svgo"]?: ModuleDependencyMeta<typeof import("nuxt-svgo").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-mcp"]?: ModuleDependencyMeta<typeof import("nuxt-mcp").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["nuxt-tradingview"]?: ModuleDependencyMeta<typeof import("nuxt-tradingview").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/scripts"]?: ModuleDependencyMeta<typeof import("@nuxt/scripts").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
    ["@nuxt/telemetry"]?: ModuleDependencyMeta<typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, unknown>>
  }
  interface NuxtOptions {
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/device`
     * @see https://www.npmjs.com/package/@nuxtjs/device
     */
    ["device"]: typeof import("@nuxtjs/device").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-purgecss`
     * @see https://www.npmjs.com/package/nuxt-purgecss
     */
    ["purgecss"]: typeof import("nuxt-purgecss").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/critters`
     * @see https://www.npmjs.com/package/@nuxtjs/critters
     */
    ["critters"]: typeof import("@nuxtjs/critters").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     * @see https://www.npmjs.com/package/nuxt-link-checker
     */
    ["linkChecker"]: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     * @see https://www.npmjs.com/package/nuxt-seo-utils
     */
    ["seo"]: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-svgo`
     * @see https://www.npmjs.com/package/nuxt-svgo
     */
    ["svgo"]: typeof import("nuxt-svgo").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-mcp`
     * @see https://www.npmjs.com/package/nuxt-mcp
     */
    ["mcp"]: typeof import("nuxt-mcp").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-tradingview`
     * @see https://www.npmjs.com/package/nuxt-tradingview
     */
    ["tradingview"]: typeof import("nuxt-tradingview").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/scripts`
     * @see https://www.npmjs.com/package/@nuxt/scripts
     */
    ["scripts"]: typeof import("@nuxt/scripts").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/device`
     * @see https://www.npmjs.com/package/@nuxtjs/device
     */
    ["device"]?: typeof import("@nuxtjs/device").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-purgecss`
     * @see https://www.npmjs.com/package/nuxt-purgecss
     */
    ["purgecss"]?: typeof import("nuxt-purgecss").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/critters`
     * @see https://www.npmjs.com/package/@nuxtjs/critters
     */
    ["critters"]?: typeof import("@nuxtjs/critters").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/robots`
     * @see https://www.npmjs.com/package/@nuxtjs/robots
     */
    ["robots"]?: typeof import("@nuxtjs/robots").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/sitemap`
     * @see https://www.npmjs.com/package/@nuxtjs/sitemap
     */
    ["sitemap"]?: typeof import("@nuxtjs/sitemap").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-schema-org`
     * @see https://www.npmjs.com/package/nuxt-schema-org
     */
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-link-checker`
     * @see https://www.npmjs.com/package/nuxt-link-checker
     */
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-seo-utils`
     * @see https://www.npmjs.com/package/nuxt-seo-utils
     */
    ["seo"]?: typeof import("nuxt-seo-utils").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/seo`
     * @see https://www.npmjs.com/package/@nuxtjs/seo
     */
    ["nuxtseo"]?: typeof import("@nuxtjs/seo").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-svgo`
     * @see https://www.npmjs.com/package/nuxt-svgo
     */
    ["svgo"]?: typeof import("nuxt-svgo").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-mcp`
     * @see https://www.npmjs.com/package/nuxt-mcp
     */
    ["mcp"]?: typeof import("nuxt-mcp").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-tradingview`
     * @see https://www.npmjs.com/package/nuxt-tradingview
     */
    ["tradingview"]?: typeof import("nuxt-tradingview").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/scripts`
     * @see https://www.npmjs.com/package/@nuxt/scripts
     */
    ["scripts"]?: typeof import("@nuxt/scripts").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O, unknown, boolean> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@nuxtjs/device", Exclude<NuxtConfig["device"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["nuxt-purgecss", Exclude<NuxtConfig["purgecss"], boolean>] | ["@nuxtjs/critters", Exclude<NuxtConfig["critters"], boolean>] | ["/Users/marina/Trabajos/Pia/solstrategies/repository/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["@nuxtjs/robots", Exclude<NuxtConfig["robots"], boolean>] | ["@nuxtjs/sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-seo-utils", Exclude<NuxtConfig["seo"], boolean>] | ["@nuxtjs/seo", Exclude<NuxtConfig["nuxtseo"], boolean>] | ["nuxt-svgo", Exclude<NuxtConfig["svgo"], boolean>] | ["nuxt-mcp", Exclude<NuxtConfig["mcp"], boolean>] | ["nuxt-tradingview", Exclude<NuxtConfig["tradingview"], boolean>] | ["@nuxt/scripts", Exclude<NuxtConfig["scripts"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}