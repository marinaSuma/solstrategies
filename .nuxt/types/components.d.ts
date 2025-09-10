
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
      'BaseCursor': typeof import("../../app/components/base/BaseCursor.vue")['default']
    'BaseError': typeof import("../../app/components/base/BaseError.vue")['default']
    'BaseFooter': typeof import("../../app/components/base/BaseFooter.vue")['default']
    'BaseHeader': typeof import("../../app/components/base/BaseHeader.vue")['default']
    'BaseIndicator': typeof import("../../app/components/base/BaseIndicator.vue")['default']
    'BasePreloader': typeof import("../../app/components/base/BasePreloader.vue")['default']
    'ButtonCta': typeof import("../../app/components/button/ButtonCta.vue")['default']
    'ButtonIcon': typeof import("../../app/components/button/ButtonIcon.vue")['default']
    'ButtonMenu': typeof import("../../app/components/button/ButtonMenu.vue")['default']
    'ButtonText': typeof import("../../app/components/button/ButtonText.vue")['default']
    'CardMilestone': typeof import("../../app/components/card/CardMilestone.vue")['default']
    'CardTeam': typeof import("../../app/components/card/CardTeam.vue")['default']
    'CardWhy': typeof import("../../app/components/card/CardWhy.vue")['default']
    'CardWhyInvestors': typeof import("../../app/components/card/CardWhyInvestors.vue")['default']
    'LayoutGrid': typeof import("../../app/components/layout/LayoutGrid.vue")['default']
    'LayoutGridItem': typeof import("../../app/components/layout/LayoutGridItem.vue")['default']
    'MediaDynamic': typeof import("../../app/components/media/MediaDynamic.vue")['default']
    'MediaImg': typeof import("../../app/components/media/MediaImg.vue")['default']
    'MediaVideo': typeof import("../../app/components/media/MediaVideo.vue")['default']
    'MotionCarousel': typeof import("../../app/components/motion/MotionCarousel.vue")['default']
    'MotionLogoMarquee': typeof import("../../app/components/motion/MotionLogoMarquee.vue")['default']
    'MotionSlider': typeof import("../../app/components/motion/MotionSlider.vue")['default']
    'PopupCookies': typeof import("../../app/components/popup/PopupCookies.vue")['default']
    'SectionCopia de SectionAboutMeetTeamNO': typeof import("../../app/components/section/Copia de SectionAboutMeetTeam-NO.vue")['default']
    'SectionCopia de SectionAboutSingleTeam': typeof import("../../app/components/section/Copia de SectionAboutSingleTeam.vue")['default']
    'SectionCopia de SectionTeam': typeof import("../../app/components/section/Copia de SectionTeam.vue")['default']
    'SectionAboutHero': typeof import("../../app/components/section/SectionAboutHero.vue")['default']
    'SectionAboutMeetTeam': typeof import("../../app/components/section/SectionAboutMeetTeam.vue")['default']
    'SectionAboutProgramable': typeof import("../../app/components/section/SectionAboutProgramable.vue")['default']
    'SectionAboutSingleTeam': typeof import("../../app/components/section/SectionAboutSingleTeam.vue")['default']
    'SectionAboutTeam': typeof import("../../app/components/section/SectionAboutTeam.vue")['default']
    'SectionAudio': typeof import("../../app/components/section/SectionAudio.vue")['default']
    'SectionBlog': typeof import("../../app/components/section/SectionBlog.vue")['default']
    'SectionContact': typeof import("../../app/components/section/SectionContact.vue")['default']
    'SectionCta': typeof import("../../app/components/section/SectionCta.vue")['default']
    'SectionEvents': typeof import("../../app/components/section/SectionEvents.vue")['default']
    'SectionGrowth': typeof import("../../app/components/section/SectionGrowth.vue")['default']
    'SectionHero': typeof import("../../app/components/section/SectionHero.vue")['default']
    'SectionHeroInvestors': typeof import("../../app/components/section/SectionHeroInvestors.vue")['default']
    'SectionMilestones': typeof import("../../app/components/section/SectionMilestones.vue")['default']
    'SectionMilestonesInvestors': typeof import("../../app/components/section/SectionMilestonesInvestors.vue")['default']
    'SectionOverview': typeof import("../../app/components/section/SectionOverview.vue")['default']
    'SectionOverviewInvestors': typeof import("../../app/components/section/SectionOverviewInvestors.vue")['default']
    'SectionPress': typeof import("../../app/components/section/SectionPress.vue")['default']
    'SectionTestimonial': typeof import("../../app/components/section/SectionTestimonial.vue")['default']
    'SectionVideo': typeof import("../../app/components/section/SectionVideo.vue")['default']
    'SectionWhy': typeof import("../../app/components/section/SectionWhy.vue")['default']
    'SectionWhyInvestors': typeof import("../../app/components/section/SectionWhyInvestors.vue")['default']
    'SeparationLine': typeof import("../../app/components/separation/SeparationLine.vue")['default']
    'Text': typeof import("../../app/components/text/Text.vue")['default']
    'TextLogo': typeof import("../../app/components/text/TextLogo.vue")['default']
    'TextMarquee': typeof import("../../app/components/text/TextMarquee.vue")['default']
    'TextNumber': typeof import("../../app/components/text/TextNumber.vue")['default']
    'IconAppstore': typeof import("../../app/assets/icon/appstore")['default']
    'IconArrow': typeof import("../../app/assets/icon/arrow")['default']
    'IconArrowslide': typeof import("../../app/assets/icon/arrowslide")['default']
    'IconChevron': typeof import("../../app/assets/icon/chevron")['default']
    'IconCirclecenter': typeof import("../../app/assets/icon/circlecenter")['default']
    'IconCircleleft': typeof import("../../app/assets/icon/circleleft")['default']
    'IconCircleright': typeof import("../../app/assets/icon/circleright")['default']
    'IconClose': typeof import("../../app/assets/icon/close")['default']
    'IconGoogleplay': typeof import("../../app/assets/icon/googleplay")['default']
    'IconHamburger': typeof import("../../app/assets/icon/hamburger")['default']
    'IconLinkedin': typeof import("../../app/assets/icon/linkedin")['default']
    'IconLogotext': typeof import("../../app/assets/icon/logotext")['default']
    'IconQuote': typeof import("../../app/assets/icon/quote")['default']
    'IconTwitter': typeof import("../../app/assets/icon/twitter")['default']
    'ScriptAriaLoadingIndicator': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']
    'ScriptCarbonAds': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']
    'ScriptCrisp': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']
    'ScriptGoogleAdsense': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']
    'ScriptGoogleMaps': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']
    'ScriptIntercom': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']
    'ScriptLemonSqueezy': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']
    'ScriptLoadingIndicator': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']
    'ScriptStripePricingTable': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']
    'ScriptVimeoPlayer': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']
    'ScriptYouTubePlayer': typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']
    'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
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
    'NuxtIcon': typeof import("../../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']
    'SymbolInfo': typeof import("../../node_modules/nuxt-tradingview/dist/runtime/components/SymbolInfo.vue")['default']
    'TickerTape': typeof import("../../node_modules/nuxt-tradingview/dist/runtime/components/TickerTape.vue")['default']
    'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyBaseCursor': LazyComponent<typeof import("../../app/components/base/BaseCursor.vue")['default']>
    'LazyBaseError': LazyComponent<typeof import("../../app/components/base/BaseError.vue")['default']>
    'LazyBaseFooter': LazyComponent<typeof import("../../app/components/base/BaseFooter.vue")['default']>
    'LazyBaseHeader': LazyComponent<typeof import("../../app/components/base/BaseHeader.vue")['default']>
    'LazyBaseIndicator': LazyComponent<typeof import("../../app/components/base/BaseIndicator.vue")['default']>
    'LazyBasePreloader': LazyComponent<typeof import("../../app/components/base/BasePreloader.vue")['default']>
    'LazyButtonCta': LazyComponent<typeof import("../../app/components/button/ButtonCta.vue")['default']>
    'LazyButtonIcon': LazyComponent<typeof import("../../app/components/button/ButtonIcon.vue")['default']>
    'LazyButtonMenu': LazyComponent<typeof import("../../app/components/button/ButtonMenu.vue")['default']>
    'LazyButtonText': LazyComponent<typeof import("../../app/components/button/ButtonText.vue")['default']>
    'LazyCardMilestone': LazyComponent<typeof import("../../app/components/card/CardMilestone.vue")['default']>
    'LazyCardTeam': LazyComponent<typeof import("../../app/components/card/CardTeam.vue")['default']>
    'LazyCardWhy': LazyComponent<typeof import("../../app/components/card/CardWhy.vue")['default']>
    'LazyCardWhyInvestors': LazyComponent<typeof import("../../app/components/card/CardWhyInvestors.vue")['default']>
    'LazyLayoutGrid': LazyComponent<typeof import("../../app/components/layout/LayoutGrid.vue")['default']>
    'LazyLayoutGridItem': LazyComponent<typeof import("../../app/components/layout/LayoutGridItem.vue")['default']>
    'LazyMediaDynamic': LazyComponent<typeof import("../../app/components/media/MediaDynamic.vue")['default']>
    'LazyMediaImg': LazyComponent<typeof import("../../app/components/media/MediaImg.vue")['default']>
    'LazyMediaVideo': LazyComponent<typeof import("../../app/components/media/MediaVideo.vue")['default']>
    'LazyMotionCarousel': LazyComponent<typeof import("../../app/components/motion/MotionCarousel.vue")['default']>
    'LazyMotionLogoMarquee': LazyComponent<typeof import("../../app/components/motion/MotionLogoMarquee.vue")['default']>
    'LazyMotionSlider': LazyComponent<typeof import("../../app/components/motion/MotionSlider.vue")['default']>
    'LazyPopupCookies': LazyComponent<typeof import("../../app/components/popup/PopupCookies.vue")['default']>
    'LazySectionCopia de SectionAboutMeetTeamNO': LazyComponent<typeof import("../../app/components/section/Copia de SectionAboutMeetTeam-NO.vue")['default']>
    'LazySectionCopia de SectionAboutSingleTeam': LazyComponent<typeof import("../../app/components/section/Copia de SectionAboutSingleTeam.vue")['default']>
    'LazySectionCopia de SectionTeam': LazyComponent<typeof import("../../app/components/section/Copia de SectionTeam.vue")['default']>
    'LazySectionAboutHero': LazyComponent<typeof import("../../app/components/section/SectionAboutHero.vue")['default']>
    'LazySectionAboutMeetTeam': LazyComponent<typeof import("../../app/components/section/SectionAboutMeetTeam.vue")['default']>
    'LazySectionAboutProgramable': LazyComponent<typeof import("../../app/components/section/SectionAboutProgramable.vue")['default']>
    'LazySectionAboutSingleTeam': LazyComponent<typeof import("../../app/components/section/SectionAboutSingleTeam.vue")['default']>
    'LazySectionAboutTeam': LazyComponent<typeof import("../../app/components/section/SectionAboutTeam.vue")['default']>
    'LazySectionAudio': LazyComponent<typeof import("../../app/components/section/SectionAudio.vue")['default']>
    'LazySectionBlog': LazyComponent<typeof import("../../app/components/section/SectionBlog.vue")['default']>
    'LazySectionContact': LazyComponent<typeof import("../../app/components/section/SectionContact.vue")['default']>
    'LazySectionCta': LazyComponent<typeof import("../../app/components/section/SectionCta.vue")['default']>
    'LazySectionEvents': LazyComponent<typeof import("../../app/components/section/SectionEvents.vue")['default']>
    'LazySectionGrowth': LazyComponent<typeof import("../../app/components/section/SectionGrowth.vue")['default']>
    'LazySectionHero': LazyComponent<typeof import("../../app/components/section/SectionHero.vue")['default']>
    'LazySectionHeroInvestors': LazyComponent<typeof import("../../app/components/section/SectionHeroInvestors.vue")['default']>
    'LazySectionMilestones': LazyComponent<typeof import("../../app/components/section/SectionMilestones.vue")['default']>
    'LazySectionMilestonesInvestors': LazyComponent<typeof import("../../app/components/section/SectionMilestonesInvestors.vue")['default']>
    'LazySectionOverview': LazyComponent<typeof import("../../app/components/section/SectionOverview.vue")['default']>
    'LazySectionOverviewInvestors': LazyComponent<typeof import("../../app/components/section/SectionOverviewInvestors.vue")['default']>
    'LazySectionPress': LazyComponent<typeof import("../../app/components/section/SectionPress.vue")['default']>
    'LazySectionTestimonial': LazyComponent<typeof import("../../app/components/section/SectionTestimonial.vue")['default']>
    'LazySectionVideo': LazyComponent<typeof import("../../app/components/section/SectionVideo.vue")['default']>
    'LazySectionWhy': LazyComponent<typeof import("../../app/components/section/SectionWhy.vue")['default']>
    'LazySectionWhyInvestors': LazyComponent<typeof import("../../app/components/section/SectionWhyInvestors.vue")['default']>
    'LazySeparationLine': LazyComponent<typeof import("../../app/components/separation/SeparationLine.vue")['default']>
    'LazyText': LazyComponent<typeof import("../../app/components/text/Text.vue")['default']>
    'LazyTextLogo': LazyComponent<typeof import("../../app/components/text/TextLogo.vue")['default']>
    'LazyTextMarquee': LazyComponent<typeof import("../../app/components/text/TextMarquee.vue")['default']>
    'LazyTextNumber': LazyComponent<typeof import("../../app/components/text/TextNumber.vue")['default']>
    'LazyIconAppstore': LazyComponent<typeof import("../../app/assets/icon/appstore")['default']>
    'LazyIconArrow': LazyComponent<typeof import("../../app/assets/icon/arrow")['default']>
    'LazyIconArrowslide': LazyComponent<typeof import("../../app/assets/icon/arrowslide")['default']>
    'LazyIconChevron': LazyComponent<typeof import("../../app/assets/icon/chevron")['default']>
    'LazyIconCirclecenter': LazyComponent<typeof import("../../app/assets/icon/circlecenter")['default']>
    'LazyIconCircleleft': LazyComponent<typeof import("../../app/assets/icon/circleleft")['default']>
    'LazyIconCircleright': LazyComponent<typeof import("../../app/assets/icon/circleright")['default']>
    'LazyIconClose': LazyComponent<typeof import("../../app/assets/icon/close")['default']>
    'LazyIconGoogleplay': LazyComponent<typeof import("../../app/assets/icon/googleplay")['default']>
    'LazyIconHamburger': LazyComponent<typeof import("../../app/assets/icon/hamburger")['default']>
    'LazyIconLinkedin': LazyComponent<typeof import("../../app/assets/icon/linkedin")['default']>
    'LazyIconLogotext': LazyComponent<typeof import("../../app/assets/icon/logotext")['default']>
    'LazyIconQuote': LazyComponent<typeof import("../../app/assets/icon/quote")['default']>
    'LazyIconTwitter': LazyComponent<typeof import("../../app/assets/icon/twitter")['default']>
    'LazyScriptAriaLoadingIndicator': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']>
    'LazyScriptCarbonAds': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']>
    'LazyScriptCrisp': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']>
    'LazyScriptGoogleAdsense': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']>
    'LazyScriptGoogleMaps': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']>
    'LazyScriptIntercom': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']>
    'LazyScriptLemonSqueezy': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']>
    'LazyScriptLoadingIndicator': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']>
    'LazyScriptStripePricingTable': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']>
    'LazyScriptVimeoPlayer': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']>
    'LazyScriptYouTubePlayer': LazyComponent<typeof import("../../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
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
    'LazyNuxtIcon': LazyComponent<typeof import("../../node_modules/nuxt-svgo/dist/runtime/components/nuxt-icon.vue")['default']>
    'LazySymbolInfo': LazyComponent<typeof import("../../node_modules/nuxt-tradingview/dist/runtime/components/SymbolInfo.vue")['default']>
    'LazyTickerTape': LazyComponent<typeof import("../../node_modules/nuxt-tradingview/dist/runtime/components/TickerTape.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
