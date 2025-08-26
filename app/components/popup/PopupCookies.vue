<template>
  <Transition :css="false" @leave="onLeave">
    <div v-if="!cookie && !isReject" ref="el" class="popup-cookies">
      <div ref="elContent" class="content">
        <div class="text">
          <Text class="title"> We value your privacy </Text>
          <Text>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All,"
            you consent to our use of cookies.
          </Text>
        </div>

        <div class="buttons">
          <button @click="handleOpenConfig()">Configure</button>
          <button @click="rejectCookies">Reject All</button>
          <button class="accept" @click="acceptCookies">Accept All</button>
        </div>
      </div>
    </div>
  </Transition>

  <ClientOnly>
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="popupConfig" class="cookies-config">
          <div class="content">
            <div class="modal-header">
              <Text class="title" variant="heading2">Cookies preferences</Text>
              <button class="close" type="button" aria-label="Close" @click="popupConfig = false">
                <IconClose />
              </button>
            </div>

            <Text>
              We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies
              under each consent category below.
              <br ><br >
              The cookies that are categorized as "Necessary" are stored on your browser as they are essential for enabling the basic functionalities
              of the site.
              <br ><br >
              We also use third-party cookies that help us analyze how you use this website, store your preferences, and provide the content and
              advertisements that are relevant to you. These cookies will only be stored in your browser with your prior consent.
              <br ><br >
              You can choose to enable or disable some or all of these cookies, but disabling some of them may affect your browsing experience.
            </Text>

            <div class="cookies-type">
              <div class="cookies-item">
                <div class="info">
                  <Text class="title" variant="body28">Necessary</Text>
                  <Text class="desc" variant="body14"
                    >Required for core site functionality such as security, network management, and accessibility.</Text
                  >
                </div>
                <Text class="color-purple">Always Active</Text>
              </div>

              <div v-if="gaId" class="cookies-item">
                <div class="info">
                  <Text class="title" variant="body28">Analytics</Text>
                  <Text class="desc" variant="body14">
                    Helps us understand how visitors interact with the site to improve content and performance.
                  </Text>
                </div>
                <button
                  class="switch"
                  :class="{ on: preferences.analytics }"
                  type="button"
                  role="switch"
                  :aria-checked="preferences.analytics"
                  @click="handleToggle('analytics')"
                  @keydown.enter.prevent="handleToggle('analytics')"
                  @keydown.space.prevent="handleToggle('analytics')">
                  <span class="knob" />
                </button>
              </div>
            </div>

            <div class="config-buttons">
              <button class="reject" type="button" @click="handleRejectAll">Reject All</button>
              <button class="accept" type="button" @click="handleSavePreferences">Accept</button>
            </div>
          </div>

          <div class="overlay-black" @click="popupConfig = false" />
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>

  <ClientOnly>
    <Teleport to="body">
      <Transition name="fade">
        <button
          v-if="cookie || isReject"
          class="cookies-settings-btn"
          type="button"
          aria-label="Open cookie settings"
          @click="handleOpenConfigFromFab">
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M39.766 10.454C40.2303 10.454 40.6052 10.831 40.6052 11.2933C40.6052 11.7595 40.2282 12.1366 39.766 12.1366C39.3017 12.1366 38.9267 11.7596 38.9267 11.2933C38.9267 10.829 39.3037 10.454 39.766 10.454ZM45.5519 23.6842C45.2642 35.7757 35.3733 45.4996 23.2326 45.4996C10.9091 45.4996 0.905273 35.4795 0.905273 23.1402C0.905273 11.5887 9.66921 2.07103 20.8992 0.904297C20.8734 1.15231 20.8595 1.4043 20.8595 1.66026C20.8595 5.15034 23.3119 8.06889 26.5819 8.78508C26.1355 9.73152 25.8855 10.7871 25.8855 11.9021C25.8855 15.9279 29.1514 19.1956 33.1693 19.1956C34.699 19.1956 36.1197 18.7234 37.2923 17.9159C37.961 21.2531 40.9074 23.7708 44.4349 23.7708C44.8159 23.7708 45.1889 23.7411 45.552 23.6835L45.5519 23.6842ZM7.82388 21.1962C6.80008 21.1962 5.96874 22.0275 5.96874 23.0553C5.96874 24.0791 6.80008 24.9104 7.82388 24.9104C8.84965 24.9104 9.68303 24.0791 9.68303 23.0553C9.68303 22.0295 8.85169 21.1962 7.82388 21.1962ZM16.0641 34.6067C15.0403 34.6067 14.209 35.44 14.209 36.4658C14.209 37.4896 15.0403 38.325 16.0641 38.325C17.0879 38.325 17.9233 37.4917 17.9233 36.4658C17.9233 35.442 17.09 34.6067 16.0641 34.6067ZM36.2983 32.7277C35.2745 32.7277 34.4391 33.5591 34.4391 34.5869C34.4391 35.6107 35.2725 36.442 36.2983 36.442C37.3221 36.442 38.1574 35.6107 38.1574 34.5869C38.1574 33.5611 37.3241 32.7277 36.2983 32.7277ZM15.2326 26.4065C14.7684 26.4065 14.3934 26.7835 14.3934 27.2457C14.3934 27.71 14.7704 28.085 15.2326 28.085C15.6989 28.085 16.0759 27.708 16.0759 27.2457C16.0759 26.7814 15.6989 26.4065 15.2326 26.4065ZM19.2108 16.7059C18.7465 16.7059 18.3715 17.0829 18.3715 17.5492C18.3715 18.0135 18.7485 18.3884 19.2108 18.3884C19.6771 18.3884 20.0541 18.0114 20.0541 17.5492C20.0541 17.0829 19.6771 16.7059 19.2108 16.7059ZM25.9369 35.9064C25.4726 35.9064 25.0976 36.2834 25.0976 36.7497C25.0976 37.214 25.4746 37.5889 25.9369 37.5889C26.4012 37.5889 26.7762 37.212 26.7762 36.7497C26.7762 36.2834 26.3992 35.9064 25.9369 35.9064ZM36.3674 25.0355C35.9031 25.0355 35.5241 25.4125 35.5241 25.8788C35.5241 26.3431 35.9031 26.7181 36.3674 26.7181C36.8316 26.7181 37.2066 26.3411 37.2066 25.8788C37.2066 25.4126 36.8296 25.0355 36.3674 25.0355ZM15.6588 9.25955C14.633 9.25955 13.7996 10.0909 13.7996 11.1187C13.7996 12.1425 14.631 12.9738 15.6588 12.9738C16.6826 12.9738 17.5139 12.1425 17.5139 11.1187C17.5139 10.0929 16.6826 9.25955 15.6588 9.25955ZM25.8531 23.6824C24.8293 23.6824 23.9939 24.5137 23.9939 25.5416C23.9939 26.5653 24.8273 27.3967 25.8531 27.3967C26.8769 27.3967 27.7122 26.5653 27.7122 25.5416C27.7122 24.5158 26.8789 23.6824 25.8531 23.6824ZM34.006 2.3572C35.3929 2.3572 36.5159 3.4802 36.5159 4.86712C36.5159 6.25206 35.3929 7.37505 34.006 7.37505C32.621 7.37505 31.498 6.25206 31.498 4.86712C31.498 3.4802 32.621 2.3572 34.006 2.3572ZM42.647 4.32149C43.2581 4.32149 43.7541 4.81752 43.7541 5.42666C43.7541 6.03578 43.2581 6.53183 42.647 6.53183C42.0379 6.53183 41.5418 6.0358 41.5418 5.42666C41.5418 4.81754 42.0378 4.32149 42.647 4.32149Z"
              fill="#6F72EE" />
          </svg>
        </button>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
import gsap from 'gsap';

const runtimeConfig = useRuntimeConfig();
const gaId = computed(() => runtimeConfig.public.scripts.googleAnalytics.id);

const cookie = useCookie('accept-cookies');
const isReject = ref(false);

const popupConfig = ref(false);

const cookiePreferences = gaId.value
  ? useCookie('cookie-preferences', {
      default: () => ({ analytics: false }),
      path: '/',
    })
  : ref({ analytics: null });

const preferences = reactive({
  necessary: true,
  analytics: gaId.value ? (cookiePreferences.value?.analytics ?? false) : null,
});

if (gaId.value) {
  const consentTrigger = useScriptTriggerConsent();

  const ga = useScriptGoogleAnalytics({
    scriptOptions: {
      trigger: consentTrigger,
    },
  });

  watch(cookiePreferences, (value) => {
    if (value.analytics) {
      consentTrigger.accept();
      ga?.load();
    } else {
      ga?.remove();
    }
  });
}

const nuxtApp = useNuxtApp();
const lenis = nuxtApp.$lenis;

watch(popupConfig, (isOpen) => {
  if (!lenis) return;
  if (isOpen) {
    lenis.pause();
  } else {
    lenis.resume();
  }
});

function handleToggle(key) {
  if (key === 'necessary') return;
  preferences[key] = !preferences[key];
  cookiePreferences.value = {
    analytics: preferences.analytics,
  };
}

const acceptCookies = () => {
  cookie.value = true;
  // Accept all optional categories
  preferences.analytics = true;
  cookiePreferences.value = { analytics: true };
};

const rejectCookies = () => {
  cookie.value = false;
  isReject.value = true;
  // Reject all optional categories
  preferences.analytics = false;
  cookiePreferences.value = { analytics: false };
};

function handleOpenConfig() {
  popupConfig.value = true;
}

function handleOpenConfigFromFab() {
  popupConfig.value = true;
}

const handleSavePreferences = () => {
  cookie.value = true;
  cookiePreferences.value = {
    analytics: preferences.analytics,
  };
  popupConfig.value = false;
};

const handleRejectAll = () => {
  rejectCookies();
  popupConfig.value = false;
};

const el = useTemplateRef('el');

const isPreloadDone = usePreloadDone();

let ctx;

const onLeave = (el, done) => {
  ctx = gsap.context(() => {
    if (el) {
      gsap.to(el, {
        yPercent: 120,
        duration: 1.2,
        ease: 'expo.inOut',
        overwrite: true,
        onComplete: done,
      });
    }
  }, el.value);
};

onKeyStroke('Escape', () => {
  if (!popupConfig.value) return;
  popupConfig.value = false;
});

onMounted(() => {
  if (cookie.value === true) return;

  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      paused: true,
      delay: 1.3,
    });

    tl.from(el.value, {
      yPercent: 120,
      duration: 1.4,
      ease: 'expo.out',
    });

    watch(isPreloadDone, (value) => {
      if (value) {
        tl.play();
      }
    });
  }, el.value);
});

onUnmounted(() => {
  ctx?.revert();
  // Ensure scrolling is resumed if component unmounts while paused
  if (lenis) {
    lenis.resume();
  }
});
</script>

<style scoped lang="scss">
.popup-cookies {
  position: fixed;
  z-index: 50;
  bottom: calc(fn.toVw(15) * 2);
  left: fn.toVw(15);

  width: calc(100% - fn.toVw(15) * 2);
  border-radius: fn.toVw(10);

  font-size: fn.toVw(16);
  font-weight: 300;
  line-height: calc(24 / 16);

  &:hover {
    .content {
      background-color: $color-secondary;
    }

    .link {
      &::before {
        transform-origin: right;
        transform: scale3d(0, 1, 1);
      }
    }
  }

  .content {
    overflow: hidden;
    display: flex;
    gap: fn.toVw(20);
    align-items: flex-start;
    justify-content: space-between;

    padding: fn.toVw(43) fn.toVw(60);
    border-radius: fn.toVw(10);

    background: $color-background;
    box-shadow: 0 fn.toVw(20) fn.toVw(60) rgb(16 24 40 / 8%);

    @include mx.mobile {
      flex-direction: column;
      padding: fn.toVw(20) fn.toVw(30);
    }

    .text {
      width: 100%;
      max-width: fn.toVw(1300);

      .title {
        font-weight: 400;
      }
    }
  }

  .buttons {
    display: flex;
    gap: fn.toVw(10);
    font-weight: 400;

    @include mx.mobile {
      flex-direction: column;
      width: 100%;
    }

    button {
      cursor: pointer;

      padding: fn.toVw(13) fn.toVw(44);
      border: 1px solid #c0c0c0;
      border-radius: fn.toVw(8.7);

      font-size: fn.toVw(14);
      white-space: nowrap;

      transition: background-color 0.3s ease;

      @include mx.mobile {
        width: 100%;
      }

      &:hover {
        background-color: #eeeeee;
      }

      &.accept {
        border-color: #6f72ee;
        color: $color-background;
        background: #6f72ee;

        &:hover {
          background-color: #6567da;
        }
      }
    }
  }
}

.cookies-config {
  position: fixed;
  z-index: 9999;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100dvh;

  .overlay-black {
    pointer-events: inherit;
  }

  .content {
    position: relative;
    z-index: 2;

    overflow-y: auto;

    width: 80%;
    max-height: 80%;
    padding: fn.toVw(30) fn.toVw(50);
    border-radius: fn.toVw(30);

    background-color: $color-background;

    @include mx.mobile {
      width: 94%;
      max-height: 90%;
      padding: fn.toVw(16) fn.toVw(20);
      border-radius: fn.toVw(18);

      font-size: fn.toVw(12);
    }

    .title {
      margin-bottom: fn.toVw(10);
    }

    .modal-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: fn.toVw(20);

      .close {
        cursor: pointer;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        width: fn.toVw(24);
        height: fn.toVw(24);

        background: $color-background;

        transition: background-color 0.3s ease;
      }
    }

    .cookies-type {
      display: flex;
      flex-direction: column;
      gap: fn.toVw(14);
      margin-top: fn.toVw(30);

      .cookies-item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: fn.toVw(14) fn.toVw(18);
        border: 1px solid #e9e9e9;
        border-radius: fn.toVw(12);

        @include mx.mobile {
          flex-direction: column;
          gap: fn.toVw(10);
          align-items: flex-start;
        }

        .info {
          display: flex;
          flex-direction: column;

          .desc {
            max-width: fn.toVw(880);
            color: $color-gray;
          }
        }
      }

      .switch {
        cursor: pointer;

        position: relative;

        width: fn.toVw(52);
        height: fn.toVw(30);
        border-radius: fn.toVw(20);

        background-color: #d9d9d9;

        transition: background-color 0.25s ease;

        &.on {
          background-color: #6f72ee;
        }

        &.disabled {
          cursor: not-allowed;
          background-color: #bfbfbf;
        }

        .knob {
          position: absolute;
          top: 50%;
          left: fn.toVw(4);
          transform: translateY(-50%);

          width: fn.toVw(22);
          height: fn.toVw(22);
          border-radius: 50%;

          background-color: $color-background;
          box-shadow: 0 2px 6px rgb(0 0 0 / 20%);

          transition: left 0.25s ease;
        }

        &.on .knob {
          left: calc(100% - fn.toVw(26));
        }

        @include mx.mobile {
          align-self: flex-start;
        }
      }
    }

    .config-buttons {
      display: flex;
      gap: fn.toVw(10);
      justify-content: flex-end;
      margin-top: fn.toVw(24);

      button {
        cursor: pointer;

        padding: fn.toVw(13) fn.toVw(44);
        border: 1px solid #c0c0c0;
        border-radius: fn.toVw(8.7);

        font-size: fn.toVw(14);
        white-space: nowrap;

        transition: background-color 0.3s ease;

        &:hover {
          background-color: #eeeeee;
        }

        &.accept {
          border-color: #6f72ee;
          color: $color-background;
          background: #6f72ee;

          &:hover {
            background-color: #6567da;
          }
        }
      }

      @include mx.mobile {
        gap: fn.toVw(8);
        justify-content: stretch;

        button {
          flex: 1;
          padding: fn.toVw(12) fn.toVw(16);
        }
      }
    }
  }
}

.cookies-settings-btn {
  cursor: pointer;

  position: fixed;
  z-index: 60;
  bottom: fn.toVw(20);
  left: fn.toVw(20);

  display: flex;
  align-items: center;
  justify-content: center;

  width: fn.toVw(60);
  height: fn.toVw(60);
  border: 1px solid #e9e9e9;
  border-radius: 50%;

  background: $color-background;

  svg {
    width: fn.toVw(30);
  }

  @include mx.mobile {
    bottom: fn.toVw(14);
    left: fn.toVw(14);
    width: fn.toVw(52);
    height: fn.toVw(52);

    svg {
      width: fn.toVw(28);
    }
  }
}
</style>
