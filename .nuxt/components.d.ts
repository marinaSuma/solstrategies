
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'BaseCursor': typeof import("../app/components/base/BaseCursor.vue")['default']
    'BaseError': typeof import("../app/components/base/BaseError.vue")['default']
    'BaseFooter': typeof import("../app/components/base/BaseFooter.vue")['default']
    'BaseHeader': typeof import("../app/components/base/BaseHeader.vue")['default']
    'BaseIndicator': typeof import("../app/components/base/BaseIndicator.vue")['default']
    'BasePreloader': typeof import("../app/components/base/BasePreloader.vue")['default']
    'ButtonCta': typeof import("../app/components/button/ButtonCta.vue")['default']
    'ButtonIcon': typeof import("../app/components/button/ButtonIcon.vue")['default']
    'ButtonMenu': typeof import("../app/components/button/ButtonMenu.vue")['default']
    'ButtonText': typeof import("../app/components/button/ButtonText.vue")['default']
    'CardMilestone': typeof import("../app/components/card/CardMilestone.vue")['default']
    'CardWhy': typeof import("../app/components/card/CardWhy.vue")['default']
    'LayoutGrid': typeof import("../app/components/layout/LayoutGrid.vue")['default']
    'LayoutGridItem': typeof import("../app/components/layout/LayoutGridItem.vue")['default']
    'MediaDynamic': typeof import("../app/components/media/MediaDynamic.vue")['default']
    'MediaImg': typeof import("../app/components/media/MediaImg.vue")['default']
    'MediaVideo': typeof import("../app/components/media/MediaVideo.vue")['default']
    'MotionCarousel': typeof import("../app/components/motion/MotionCarousel.vue")['default']
    'MotionLogoMarquee': typeof import("../app/components/motion/MotionLogoMarquee.vue")['default']
    'MotionSlider': typeof import("../app/components/motion/MotionSlider.vue")['default']
    'PopupCookies': typeof import("../app/components/popup/PopupCookies.vue")['default']
    'SectionBlog': typeof import("../app/components/section/SectionBlog.vue")['default']
    'SectionCta': typeof import("../app/components/section/SectionCta.vue")['default']
    'SectionGrowth': typeof import("../app/components/section/SectionGrowth.vue")['default']
    'SectionHero': typeof import("../app/components/section/SectionHero.vue")['default']
    'SectionHeroInvestors': typeof import("../app/components/section/SectionHeroInvestors.vue")['default']
    'SectionMilestones': typeof import("../app/components/section/SectionMilestones.vue")['default']
    'SectionMilestonesInvestors': typeof import("../app/components/section/SectionMilestonesInvestors.vue")['default']
    'SectionOverview': typeof import("../app/components/section/SectionOverview.vue")['default']
    'SectionOverviewInvestors': typeof import("../app/components/section/SectionOverviewInvestors.vue")['default']
    'SectionTestimonial': typeof import("../app/components/section/SectionTestimonial.vue")['default']
    'SectionWhy': typeof import("../app/components/section/SectionWhy.vue")['default']
    'SectionWhyInvestors': typeof import("../app/components/section/SectionWhyInvestors.vue")['default']
    'SeparationLine': typeof import("../app/components/separation/SeparationLine.vue")['default']
    'Text': typeof import("../app/components/text/Text.vue")['default']
    'TextLogo': typeof import("../app/components/text/TextLogo.vue")['default']
    'TextMarquee': typeof import("../app/components/text/TextMarquee.vue")['default']
    'TextNumber': typeof import("../app/components/text/TextNumber.vue")['default']
    'IconAppstore': typeof import("../app/assets/icon/appstore")['default']
    'IconArrow': typeof import("../app/assets/icon/arrow")['default']
    'IconArrowslide': typeof import("../app/assets/icon/arrowslide")['default']
    'IconChevron': typeof import("../app/assets/icon/chevron")['default']
    'IconCirclecenter': typeof import("../app/assets/icon/circlecenter")['default']
    'IconCircleleft': typeof import("../app/assets/icon/circleleft")['default']
    'IconCircleright': typeof import("../app/assets/icon/circleright")['default']
    'IconClose': typeof import("../app/assets/icon/close")['default']
    'IconGoogleplay': typeof import("../app/assets/icon/googleplay")['default']
    'IconHamburger': typeof import("../app/assets/icon/hamburger")['default']
    'IconLinkedin': typeof import("../app/assets/icon/linkedin")['default']
    'IconLogotext': typeof import("../app/assets/icon/logotext")['default']
    'IconQuote': typeof import("../app/assets/icon/quote")['default']
    'IconTwitter': typeof import("../app/assets/icon/twitter")['default']
    'ScriptAriaLoadingIndicator': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']
    'ScriptCarbonAds': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']
    'ScriptCrisp': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']
    'ScriptGoogleAdsense': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']
    'ScriptGoogleMaps': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']
    'ScriptIntercom': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']
    'ScriptLemonSqueezy': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']
    'ScriptLoadingIndicator': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']
    'ScriptStripePricingTable': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']
    'ScriptVimeoPlayer': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']
    'ScriptYouTubePlayer': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'SchemaOrgDebug': typeof import("@unhead/schema-org/vue")['SchemaOrgDebug']
    'SchemaOrgArticle': typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']
    'SchemaOrgBreadcrumb': typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']
    'SchemaOrgComment': typeof import("@unhead/schema-org/vue")['SchemaOrgComment']
    'SchemaOrgEvent': typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']
    'SchemaOrgFoodEstablishment': typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']
    'SchemaOrgHowTo': typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']
    'SchemaOrgImage': typeof import("@unhead/schema-org/vue")['SchemaOrgImage']
    'SchemaOrgJobPosting': typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']
    'SchemaOrgLocalBusiness': typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']
    'SchemaOrgOrganization': typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']
    'SchemaOrgPerson': typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']
    'SchemaOrgProduct': typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']
    'SchemaOrgQuestion': typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']
    'SchemaOrgRecipe': typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']
    'SchemaOrgReview': typeof import("@unhead/schema-org/vue")['SchemaOrgReview']
    'SchemaOrgVideo': typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']
    'SchemaOrgWebPage': typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']
    'SchemaOrgWebSite': typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']
    'SchemaOrgMovie': typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']
    'SchemaOrgCourse': typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']
    'SchemaOrgItemList': typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']
    'SchemaOrgBook': typeof import("@unhead/schema-org/vue")['SchemaOrgBook']
    'SchemaOrgSoftwareApp': typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']
    'NuxtIcon': typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
    'SymbolInfo': typeof import("../node_modules/nuxt-tradingview/dist/runtime/components/SymbolInfo.vue")['default']
    'TickerTape': typeof import("../node_modules/nuxt-tradingview/dist/runtime/components/TickerTape.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyBaseCursor': LazyComponent<typeof import("../app/components/base/BaseCursor.vue")['default']>
    'LazyBaseError': LazyComponent<typeof import("../app/components/base/BaseError.vue")['default']>
    'LazyBaseFooter': LazyComponent<typeof import("../app/components/base/BaseFooter.vue")['default']>
    'LazyBaseHeader': LazyComponent<typeof import("../app/components/base/BaseHeader.vue")['default']>
    'LazyBaseIndicator': LazyComponent<typeof import("../app/components/base/BaseIndicator.vue")['default']>
    'LazyBasePreloader': LazyComponent<typeof import("../app/components/base/BasePreloader.vue")['default']>
    'LazyButtonCta': LazyComponent<typeof import("../app/components/button/ButtonCta.vue")['default']>
    'LazyButtonIcon': LazyComponent<typeof import("../app/components/button/ButtonIcon.vue")['default']>
    'LazyButtonMenu': LazyComponent<typeof import("../app/components/button/ButtonMenu.vue")['default']>
    'LazyButtonText': LazyComponent<typeof import("../app/components/button/ButtonText.vue")['default']>
    'LazyCardMilestone': LazyComponent<typeof import("../app/components/card/CardMilestone.vue")['default']>
    'LazyCardWhy': LazyComponent<typeof import("../app/components/card/CardWhy.vue")['default']>
    'LazyLayoutGrid': LazyComponent<typeof import("../app/components/layout/LayoutGrid.vue")['default']>
    'LazyLayoutGridItem': LazyComponent<typeof import("../app/components/layout/LayoutGridItem.vue")['default']>
    'LazyMediaDynamic': LazyComponent<typeof import("../app/components/media/MediaDynamic.vue")['default']>
    'LazyMediaImg': LazyComponent<typeof import("../app/components/media/MediaImg.vue")['default']>
    'LazyMediaVideo': LazyComponent<typeof import("../app/components/media/MediaVideo.vue")['default']>
    'LazyMotionCarousel': LazyComponent<typeof import("../app/components/motion/MotionCarousel.vue")['default']>
    'LazyMotionLogoMarquee': LazyComponent<typeof import("../app/components/motion/MotionLogoMarquee.vue")['default']>
    'LazyMotionSlider': LazyComponent<typeof import("../app/components/motion/MotionSlider.vue")['default']>
    'LazyPopupCookies': LazyComponent<typeof import("../app/components/popup/PopupCookies.vue")['default']>
    'LazySectionBlog': LazyComponent<typeof import("../app/components/section/SectionBlog.vue")['default']>
    'LazySectionCta': LazyComponent<typeof import("../app/components/section/SectionCta.vue")['default']>
    'LazySectionGrowth': LazyComponent<typeof import("../app/components/section/SectionGrowth.vue")['default']>
    'LazySectionHero': LazyComponent<typeof import("../app/components/section/SectionHero.vue")['default']>
    'LazySectionHeroInvestors': LazyComponent<typeof import("../app/components/section/SectionHeroInvestors.vue")['default']>
    'LazySectionMilestones': LazyComponent<typeof import("../app/components/section/SectionMilestones.vue")['default']>
    'LazySectionMilestonesInvestors': LazyComponent<typeof import("../app/components/section/SectionMilestonesInvestors.vue")['default']>
    'LazySectionOverview': LazyComponent<typeof import("../app/components/section/SectionOverview.vue")['default']>
    'LazySectionOverviewInvestors': LazyComponent<typeof import("../app/components/section/SectionOverviewInvestors.vue")['default']>
    'LazySectionTestimonial': LazyComponent<typeof import("../app/components/section/SectionTestimonial.vue")['default']>
    'LazySectionWhy': LazyComponent<typeof import("../app/components/section/SectionWhy.vue")['default']>
    'LazySectionWhyInvestors': LazyComponent<typeof import("../app/components/section/SectionWhyInvestors.vue")['default']>
    'LazySeparationLine': LazyComponent<typeof import("../app/components/separation/SeparationLine.vue")['default']>
    'LazyText': LazyComponent<typeof import("../app/components/text/Text.vue")['default']>
    'LazyTextLogo': LazyComponent<typeof import("../app/components/text/TextLogo.vue")['default']>
    'LazyTextMarquee': LazyComponent<typeof import("../app/components/text/TextMarquee.vue")['default']>
    'LazyTextNumber': LazyComponent<typeof import("../app/components/text/TextNumber.vue")['default']>
    'LazyIconAppstore': LazyComponent<typeof import("../app/assets/icon/appstore")['default']>
    'LazyIconArrow': LazyComponent<typeof import("../app/assets/icon/arrow")['default']>
    'LazyIconArrowslide': LazyComponent<typeof import("../app/assets/icon/arrowslide")['default']>
    'LazyIconChevron': LazyComponent<typeof import("../app/assets/icon/chevron")['default']>
    'LazyIconCirclecenter': LazyComponent<typeof import("../app/assets/icon/circlecenter")['default']>
    'LazyIconCircleleft': LazyComponent<typeof import("../app/assets/icon/circleleft")['default']>
    'LazyIconCircleright': LazyComponent<typeof import("../app/assets/icon/circleright")['default']>
    'LazyIconClose': LazyComponent<typeof import("../app/assets/icon/close")['default']>
    'LazyIconGoogleplay': LazyComponent<typeof import("../app/assets/icon/googleplay")['default']>
    'LazyIconHamburger': LazyComponent<typeof import("../app/assets/icon/hamburger")['default']>
    'LazyIconLinkedin': LazyComponent<typeof import("../app/assets/icon/linkedin")['default']>
    'LazyIconLogotext': LazyComponent<typeof import("../app/assets/icon/logotext")['default']>
    'LazyIconQuote': LazyComponent<typeof import("../app/assets/icon/quote")['default']>
    'LazyIconTwitter': LazyComponent<typeof import("../app/assets/icon/twitter")['default']>
    'LazyScriptAriaLoadingIndicator': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']>
    'LazyScriptCarbonAds': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']>
    'LazyScriptCrisp': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']>
    'LazyScriptGoogleAdsense': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']>
    'LazyScriptGoogleMaps': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']>
    'LazyScriptIntercom': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']>
    'LazyScriptLemonSqueezy': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']>
    'LazyScriptLoadingIndicator': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']>
    'LazyScriptStripePricingTable': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']>
    'LazyScriptVimeoPlayer': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']>
    'LazyScriptYouTubePlayer': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazySchemaOrgDebug': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgDebug']>
    'LazySchemaOrgArticle': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']>
    'LazySchemaOrgBreadcrumb': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']>
    'LazySchemaOrgComment': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgComment']>
    'LazySchemaOrgEvent': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']>
    'LazySchemaOrgFoodEstablishment': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']>
    'LazySchemaOrgHowTo': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']>
    'LazySchemaOrgImage': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgImage']>
    'LazySchemaOrgJobPosting': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']>
    'LazySchemaOrgLocalBusiness': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']>
    'LazySchemaOrgOrganization': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']>
    'LazySchemaOrgPerson': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']>
    'LazySchemaOrgProduct': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']>
    'LazySchemaOrgQuestion': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']>
    'LazySchemaOrgRecipe': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']>
    'LazySchemaOrgReview': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgReview']>
    'LazySchemaOrgVideo': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']>
    'LazySchemaOrgWebPage': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']>
    'LazySchemaOrgWebSite': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']>
    'LazySchemaOrgMovie': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']>
    'LazySchemaOrgCourse': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']>
    'LazySchemaOrgItemList': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']>
    'LazySchemaOrgBook': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBook']>
    'LazySchemaOrgSoftwareApp': LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']>
    'LazyNuxtIcon': LazyComponent<typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']>
    'LazySymbolInfo': LazyComponent<typeof import("../node_modules/nuxt-tradingview/dist/runtime/components/SymbolInfo.vue")['default']>
    'LazyTickerTape': LazyComponent<typeof import("../node_modules/nuxt-tradingview/dist/runtime/components/TickerTape.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const BaseCursor: typeof import("../app/components/base/BaseCursor.vue")['default']
export const BaseError: typeof import("../app/components/base/BaseError.vue")['default']
export const BaseFooter: typeof import("../app/components/base/BaseFooter.vue")['default']
export const BaseHeader: typeof import("../app/components/base/BaseHeader.vue")['default']
export const BaseIndicator: typeof import("../app/components/base/BaseIndicator.vue")['default']
export const BasePreloader: typeof import("../app/components/base/BasePreloader.vue")['default']
export const ButtonCta: typeof import("../app/components/button/ButtonCta.vue")['default']
export const ButtonIcon: typeof import("../app/components/button/ButtonIcon.vue")['default']
export const ButtonMenu: typeof import("../app/components/button/ButtonMenu.vue")['default']
export const ButtonText: typeof import("../app/components/button/ButtonText.vue")['default']
export const CardMilestone: typeof import("../app/components/card/CardMilestone.vue")['default']
export const CardWhy: typeof import("../app/components/card/CardWhy.vue")['default']
export const LayoutGrid: typeof import("../app/components/layout/LayoutGrid.vue")['default']
export const LayoutGridItem: typeof import("../app/components/layout/LayoutGridItem.vue")['default']
export const MediaDynamic: typeof import("../app/components/media/MediaDynamic.vue")['default']
export const MediaImg: typeof import("../app/components/media/MediaImg.vue")['default']
export const MediaVideo: typeof import("../app/components/media/MediaVideo.vue")['default']
export const MotionCarousel: typeof import("../app/components/motion/MotionCarousel.vue")['default']
export const MotionLogoMarquee: typeof import("../app/components/motion/MotionLogoMarquee.vue")['default']
export const MotionSlider: typeof import("../app/components/motion/MotionSlider.vue")['default']
export const PopupCookies: typeof import("../app/components/popup/PopupCookies.vue")['default']
export const SectionBlog: typeof import("../app/components/section/SectionBlog.vue")['default']
export const SectionCta: typeof import("../app/components/section/SectionCta.vue")['default']
export const SectionGrowth: typeof import("../app/components/section/SectionGrowth.vue")['default']
export const SectionHero: typeof import("../app/components/section/SectionHero.vue")['default']
export const SectionHeroInvestors: typeof import("../app/components/section/SectionHeroInvestors.vue")['default']
export const SectionMilestones: typeof import("../app/components/section/SectionMilestones.vue")['default']
export const SectionMilestonesInvestors: typeof import("../app/components/section/SectionMilestonesInvestors.vue")['default']
export const SectionOverview: typeof import("../app/components/section/SectionOverview.vue")['default']
export const SectionOverviewInvestors: typeof import("../app/components/section/SectionOverviewInvestors.vue")['default']
export const SectionTestimonial: typeof import("../app/components/section/SectionTestimonial.vue")['default']
export const SectionWhy: typeof import("../app/components/section/SectionWhy.vue")['default']
export const SectionWhyInvestors: typeof import("../app/components/section/SectionWhyInvestors.vue")['default']
export const SeparationLine: typeof import("../app/components/separation/SeparationLine.vue")['default']
export const Text: typeof import("../app/components/text/Text.vue")['default']
export const TextLogo: typeof import("../app/components/text/TextLogo.vue")['default']
export const TextMarquee: typeof import("../app/components/text/TextMarquee.vue")['default']
export const TextNumber: typeof import("../app/components/text/TextNumber.vue")['default']
export const IconAppstore: typeof import("../app/assets/icon/appstore")['default']
export const IconArrow: typeof import("../app/assets/icon/arrow")['default']
export const IconArrowslide: typeof import("../app/assets/icon/arrowslide")['default']
export const IconChevron: typeof import("../app/assets/icon/chevron")['default']
export const IconCirclecenter: typeof import("../app/assets/icon/circlecenter")['default']
export const IconCircleleft: typeof import("../app/assets/icon/circleleft")['default']
export const IconCircleright: typeof import("../app/assets/icon/circleright")['default']
export const IconClose: typeof import("../app/assets/icon/close")['default']
export const IconGoogleplay: typeof import("../app/assets/icon/googleplay")['default']
export const IconHamburger: typeof import("../app/assets/icon/hamburger")['default']
export const IconLinkedin: typeof import("../app/assets/icon/linkedin")['default']
export const IconLogotext: typeof import("../app/assets/icon/logotext")['default']
export const IconQuote: typeof import("../app/assets/icon/quote")['default']
export const IconTwitter: typeof import("../app/assets/icon/twitter")['default']
export const ScriptAriaLoadingIndicator: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']
export const ScriptCarbonAds: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']
export const ScriptCrisp: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']
export const ScriptGoogleAdsense: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']
export const ScriptGoogleMaps: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']
export const ScriptIntercom: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']
export const ScriptLemonSqueezy: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']
export const ScriptLoadingIndicator: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']
export const ScriptStripePricingTable: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']
export const ScriptVimeoPlayer: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']
export const ScriptYouTubePlayer: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const SchemaOrgDebug: typeof import("@unhead/schema-org/vue")['SchemaOrgDebug']
export const SchemaOrgArticle: typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']
export const SchemaOrgBreadcrumb: typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']
export const SchemaOrgComment: typeof import("@unhead/schema-org/vue")['SchemaOrgComment']
export const SchemaOrgEvent: typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']
export const SchemaOrgFoodEstablishment: typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']
export const SchemaOrgHowTo: typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']
export const SchemaOrgImage: typeof import("@unhead/schema-org/vue")['SchemaOrgImage']
export const SchemaOrgJobPosting: typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']
export const SchemaOrgLocalBusiness: typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']
export const SchemaOrgOrganization: typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']
export const SchemaOrgPerson: typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']
export const SchemaOrgProduct: typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']
export const SchemaOrgQuestion: typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']
export const SchemaOrgRecipe: typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']
export const SchemaOrgReview: typeof import("@unhead/schema-org/vue")['SchemaOrgReview']
export const SchemaOrgVideo: typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']
export const SchemaOrgWebPage: typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']
export const SchemaOrgWebSite: typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']
export const SchemaOrgMovie: typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']
export const SchemaOrgCourse: typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']
export const SchemaOrgItemList: typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']
export const SchemaOrgBook: typeof import("@unhead/schema-org/vue")['SchemaOrgBook']
export const SchemaOrgSoftwareApp: typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']
export const NuxtIcon: typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
export const SymbolInfo: typeof import("../node_modules/nuxt-tradingview/dist/runtime/components/SymbolInfo.vue")['default']
export const TickerTape: typeof import("../node_modules/nuxt-tradingview/dist/runtime/components/TickerTape.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyBaseCursor: LazyComponent<typeof import("../app/components/base/BaseCursor.vue")['default']>
export const LazyBaseError: LazyComponent<typeof import("../app/components/base/BaseError.vue")['default']>
export const LazyBaseFooter: LazyComponent<typeof import("../app/components/base/BaseFooter.vue")['default']>
export const LazyBaseHeader: LazyComponent<typeof import("../app/components/base/BaseHeader.vue")['default']>
export const LazyBaseIndicator: LazyComponent<typeof import("../app/components/base/BaseIndicator.vue")['default']>
export const LazyBasePreloader: LazyComponent<typeof import("../app/components/base/BasePreloader.vue")['default']>
export const LazyButtonCta: LazyComponent<typeof import("../app/components/button/ButtonCta.vue")['default']>
export const LazyButtonIcon: LazyComponent<typeof import("../app/components/button/ButtonIcon.vue")['default']>
export const LazyButtonMenu: LazyComponent<typeof import("../app/components/button/ButtonMenu.vue")['default']>
export const LazyButtonText: LazyComponent<typeof import("../app/components/button/ButtonText.vue")['default']>
export const LazyCardMilestone: LazyComponent<typeof import("../app/components/card/CardMilestone.vue")['default']>
export const LazyCardWhy: LazyComponent<typeof import("../app/components/card/CardWhy.vue")['default']>
export const LazyLayoutGrid: LazyComponent<typeof import("../app/components/layout/LayoutGrid.vue")['default']>
export const LazyLayoutGridItem: LazyComponent<typeof import("../app/components/layout/LayoutGridItem.vue")['default']>
export const LazyMediaDynamic: LazyComponent<typeof import("../app/components/media/MediaDynamic.vue")['default']>
export const LazyMediaImg: LazyComponent<typeof import("../app/components/media/MediaImg.vue")['default']>
export const LazyMediaVideo: LazyComponent<typeof import("../app/components/media/MediaVideo.vue")['default']>
export const LazyMotionCarousel: LazyComponent<typeof import("../app/components/motion/MotionCarousel.vue")['default']>
export const LazyMotionLogoMarquee: LazyComponent<typeof import("../app/components/motion/MotionLogoMarquee.vue")['default']>
export const LazyMotionSlider: LazyComponent<typeof import("../app/components/motion/MotionSlider.vue")['default']>
export const LazyPopupCookies: LazyComponent<typeof import("../app/components/popup/PopupCookies.vue")['default']>
export const LazySectionBlog: LazyComponent<typeof import("../app/components/section/SectionBlog.vue")['default']>
export const LazySectionCta: LazyComponent<typeof import("../app/components/section/SectionCta.vue")['default']>
export const LazySectionGrowth: LazyComponent<typeof import("../app/components/section/SectionGrowth.vue")['default']>
export const LazySectionHero: LazyComponent<typeof import("../app/components/section/SectionHero.vue")['default']>
export const LazySectionHeroInvestors: LazyComponent<typeof import("../app/components/section/SectionHeroInvestors.vue")['default']>
export const LazySectionMilestones: LazyComponent<typeof import("../app/components/section/SectionMilestones.vue")['default']>
export const LazySectionMilestonesInvestors: LazyComponent<typeof import("../app/components/section/SectionMilestonesInvestors.vue")['default']>
export const LazySectionOverview: LazyComponent<typeof import("../app/components/section/SectionOverview.vue")['default']>
export const LazySectionOverviewInvestors: LazyComponent<typeof import("../app/components/section/SectionOverviewInvestors.vue")['default']>
export const LazySectionTestimonial: LazyComponent<typeof import("../app/components/section/SectionTestimonial.vue")['default']>
export const LazySectionWhy: LazyComponent<typeof import("../app/components/section/SectionWhy.vue")['default']>
export const LazySectionWhyInvestors: LazyComponent<typeof import("../app/components/section/SectionWhyInvestors.vue")['default']>
export const LazySeparationLine: LazyComponent<typeof import("../app/components/separation/SeparationLine.vue")['default']>
export const LazyText: LazyComponent<typeof import("../app/components/text/Text.vue")['default']>
export const LazyTextLogo: LazyComponent<typeof import("../app/components/text/TextLogo.vue")['default']>
export const LazyTextMarquee: LazyComponent<typeof import("../app/components/text/TextMarquee.vue")['default']>
export const LazyTextNumber: LazyComponent<typeof import("../app/components/text/TextNumber.vue")['default']>
export const LazyIconAppstore: LazyComponent<typeof import("../app/assets/icon/appstore")['default']>
export const LazyIconArrow: LazyComponent<typeof import("../app/assets/icon/arrow")['default']>
export const LazyIconArrowslide: LazyComponent<typeof import("../app/assets/icon/arrowslide")['default']>
export const LazyIconChevron: LazyComponent<typeof import("../app/assets/icon/chevron")['default']>
export const LazyIconCirclecenter: LazyComponent<typeof import("../app/assets/icon/circlecenter")['default']>
export const LazyIconCircleleft: LazyComponent<typeof import("../app/assets/icon/circleleft")['default']>
export const LazyIconCircleright: LazyComponent<typeof import("../app/assets/icon/circleright")['default']>
export const LazyIconClose: LazyComponent<typeof import("../app/assets/icon/close")['default']>
export const LazyIconGoogleplay: LazyComponent<typeof import("../app/assets/icon/googleplay")['default']>
export const LazyIconHamburger: LazyComponent<typeof import("../app/assets/icon/hamburger")['default']>
export const LazyIconLinkedin: LazyComponent<typeof import("../app/assets/icon/linkedin")['default']>
export const LazyIconLogotext: LazyComponent<typeof import("../app/assets/icon/logotext")['default']>
export const LazyIconQuote: LazyComponent<typeof import("../app/assets/icon/quote")['default']>
export const LazyIconTwitter: LazyComponent<typeof import("../app/assets/icon/twitter")['default']>
export const LazyScriptAriaLoadingIndicator: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']>
export const LazyScriptCarbonAds: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']>
export const LazyScriptCrisp: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']>
export const LazyScriptGoogleAdsense: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']>
export const LazyScriptGoogleMaps: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']>
export const LazyScriptIntercom: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']>
export const LazyScriptLemonSqueezy: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']>
export const LazyScriptLoadingIndicator: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']>
export const LazyScriptStripePricingTable: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']>
export const LazyScriptVimeoPlayer: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']>
export const LazyScriptYouTubePlayer: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazySchemaOrgDebug: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgDebug']>
export const LazySchemaOrgArticle: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgArticle']>
export const LazySchemaOrgBreadcrumb: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBreadcrumb']>
export const LazySchemaOrgComment: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgComment']>
export const LazySchemaOrgEvent: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgEvent']>
export const LazySchemaOrgFoodEstablishment: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgFoodEstablishment']>
export const LazySchemaOrgHowTo: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgHowTo']>
export const LazySchemaOrgImage: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgImage']>
export const LazySchemaOrgJobPosting: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgJobPosting']>
export const LazySchemaOrgLocalBusiness: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgLocalBusiness']>
export const LazySchemaOrgOrganization: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgOrganization']>
export const LazySchemaOrgPerson: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgPerson']>
export const LazySchemaOrgProduct: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgProduct']>
export const LazySchemaOrgQuestion: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgQuestion']>
export const LazySchemaOrgRecipe: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgRecipe']>
export const LazySchemaOrgReview: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgReview']>
export const LazySchemaOrgVideo: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgVideo']>
export const LazySchemaOrgWebPage: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebPage']>
export const LazySchemaOrgWebSite: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgWebSite']>
export const LazySchemaOrgMovie: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgMovie']>
export const LazySchemaOrgCourse: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgCourse']>
export const LazySchemaOrgItemList: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgItemList']>
export const LazySchemaOrgBook: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgBook']>
export const LazySchemaOrgSoftwareApp: LazyComponent<typeof import("@unhead/schema-org/vue")['SchemaOrgSoftwareApp']>
export const LazyNuxtIcon: LazyComponent<typeof import("../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']>
export const LazySymbolInfo: LazyComponent<typeof import("../node_modules/nuxt-tradingview/dist/runtime/components/SymbolInfo.vue")['default']>
export const LazyTickerTape: LazyComponent<typeof import("../node_modules/nuxt-tradingview/dist/runtime/components/TickerTape.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
