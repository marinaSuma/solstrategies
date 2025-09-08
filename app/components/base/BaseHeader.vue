<template>
   <SectionContact />
  <header
    id="header"
    ref="el"
    :class="{
      'is--hidden': isHeaderHidden,
      active: headerActive,
    }">
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <TextLogo />
        </div>

        <ul class="nav__list">
          <template v-for="(menu, key, idx) in menus" :key="key">
            <li
              :ref="(el) => setLiRef(key as MenuKey, el as HTMLElement)"
              class="has-dropdown"
              @mouseenter="handleOpen(key as MenuKey)"
              @mouseleave="handleClose">
              <NuxtLink
                class="nav__item"
                :class="{ active: openMenuKey === (key as MenuKey) }"
                to="/"
                :aria-expanded="openMenuKey === (key as MenuKey)">
                <span class="text">{{ menu.label }}</span>
                <span class="placeholder">{{ menu.label }}</span>
                <IconChevron :class="{ open: openMenuKey === (key as MenuKey) }" />
              </NuxtLink>

              <div
                :ref="(el) => setPanelRef(key as MenuKey, el as HTMLElement)"
                class="dropdown"
                role="menu"
                :aria-label="menu.label"
                :class="{ 'is-open': openMenuKey === (key as MenuKey), 'is-closing': closingKey === (key as MenuKey) }"
                :style="panelStyles[key as MenuKey]">
                <ul class="dropdown__list">
                  <div :ref="(el) => setBgSelectorRef(key as MenuKey, el as HTMLElement)" class="bg-selector" aria-label="hidden">
                    <IconChevron class="submenu-icon" />
                  </div>

                  <li
                    v-for="(item, idx) in menu.items"
                    :key="idx"
                    :ref="(el) => setItemRef(key as MenuKey, idx, el as HTMLLIElement)"
                    @mouseenter="handleItemEnter(key as MenuKey, idx)">
                    <NuxtLink class="dropdown__item" :to="item.to">
                      {{ item.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
            <li v-if="idx === 2">
              <NuxtLink class="nav__item" to="/">
                <span class="text">Investor Relations</span>
                <span class="placeholder">Investor Relations</span>
              </NuxtLink>
            </li>
          </template>
        </ul>

        <div class="cta">
          <ButtonCta> Contact Us </ButtonCta>

        </div>

        <!-- Mobile: Menu Toggle -->
        <ButtonMenu :active-class="isMenuOpen" @click="handleToggleMenu" />

        <ClientOnly>
          <Teleport to="body">
            <div ref="elMobileMenu" class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
              <div class="mobile-menu__overlay" />
              <aside ref="elMobilePanel" class="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Main navigation">
                <div class="mobile-menu__top">
                  <div class="logo">
                    <TextLogo />
                  </div>

                  <ButtonMenu :active-class="isMenuOpen" @click="handleToggleMenu" />
                </div>

                <ul class="mobile-menu__list">
                  <li v-for="(menu, key) in menus" :key="key">
                    <button
                      type="button"
                      class="mobile-menu__item"
                      :aria-expanded="mobileOpenKey === (key as MenuKey)"
                      :aria-controls="`submenu-${String(key)}`"
                      @click="handleMobileToggle(key as MenuKey)">
                      <span>{{ menu.label }}</span>
                      <IconChevron class="arrow" :class="{ open: mobileOpenKey === (key as MenuKey) }" />
                    </button>
                    <Transition name="accordion">
                      <ul v-if="mobileOpenKey === (key as MenuKey)" :id="`submenu-${String(key)}`" class="mobile-submenu">
                        <li v-for="(item, idx) in menu.items" :key="idx">
                          <NuxtLink class="mobile-submenu__item" :to="item.to" @click="handleCloseMenu">
                            {{ item.label }}
                          </NuxtLink>
                        </li>
                      </ul>
                    </Transition>
                  </li>
                  <li>
                    <NuxtLink class="mobile-menu__item" to="/">
                      <span>Investor Relations</span>
                    </NuxtLink>
                  </li>
                </ul>

                <div class="mobile-menu__cta">
                  <ButtonCta @click="handleCloseMenu"> Contact Us </ButtonCta>
                </div>
              </aside>
            </div>
          </Teleport>
        </ClientOnly>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
interface ScrollEvent {
  isLocked: boolean;
  actualScroll: number;
  direction: number;
}

const el = useTemplateRef('el');
const headerActive = ref<boolean>(false);
const isHeaderHidden = useHeaderHidden();
const isMenuOpen = ref<boolean>(false);
const mobileOpenKey = ref<MenuKey | null>(null);
const elMobileMenu = useTemplateRef<HTMLElement>('elMobileMenu');
const elMobilePanel = useTemplateRef<HTMLElement>('elMobilePanel');

const nuxtApp = useNuxtApp();
const lenis = nuxtApp.$lenis;

type MenuKey = 'about' | 'solutions' | 'technology' | 'resources';

const menus: Record<MenuKey, { label: string; items: { label: string; to: string }[] }> = {
  about: {
    label: 'About',
    items: [
      { label: 'Leadership & Vision', to: '/' },
      { label: 'Technology Arm', to: '/' },
      { label: 'Company Timeline', to: '/' },
      { label: 'Investment Thesis', to: '/' },
      { label: 'Leadership Team', to: '/' },
    ],
  },
  solutions: {
    label: 'Solutions',
    items: [
      { label: 'Portfolio Management', to: '/' },
      { label: 'Research & Analytics', to: '/' },
      { label: 'Risk Management', to: '/' },
      { label: 'Advisory Services', to: '/' },
      { label: 'Education Hub', to: '/' },
    ],
  },
  technology: {
    label: 'Technology',
    items: [
      { label: 'Platform Overview', to: '/' },
      { label: 'Data Pipeline', to: '/' },
      { label: 'Security & Compliance', to: '/' },
      { label: 'API & Integrations', to: '/' },
      { label: 'Infrastructure', to: '/' },
    ],
  },
  resources: {
    label: 'Resources',
    items: [
      { label: 'Blog', to: '/' },
      { label: 'Case Studies', to: '/' },
      { label: 'Press', to: '/' },
      { label: 'FAQs', to: '/' },
      { label: 'Support', to: '/' },
    ],
  },
};

const openMenuKey = ref<MenuKey | null>(null);
const closingKey = ref<MenuKey | null>(null);

const liRefs = reactive<Record<MenuKey, HTMLElement | null>>({
  about: null,
  solutions: null,
  technology: null,
  resources: null,
});
const panelRefs = reactive<Record<MenuKey, HTMLElement | null>>({
  about: null,
  solutions: null,
  technology: null,
  resources: null,
});

const bgSelectorRefs = reactive<Record<MenuKey, HTMLElement | null>>({
  about: null,
  solutions: null,
  technology: null,
  resources: null,
});

const itemRefs = reactive<Record<MenuKey, (HTMLLIElement | null)[]>>({
  about: [],
  solutions: [],
  technology: [],
  resources: [],
});

const panelStyles = reactive<Record<MenuKey, any>>({
  about: {},
  solutions: {},
  technology: {},
  resources: {},
});

const setLiRef = (key: MenuKey, el: HTMLElement | null) => (liRefs[key] = el);
const setPanelRef = (key: MenuKey, el: HTMLElement | null) => (panelRefs[key] = el);
const setBgSelectorRef = (key: MenuKey, el: HTMLElement | null) => (bgSelectorRefs[key] = el);
const setItemRef = (key: MenuKey, index: number, el: HTMLLIElement | null) => {
  if (!itemRefs[key]) itemRefs[key] = [];
  itemRefs[key][index] = el;
};

function handleOpen(key: MenuKey): void {
  openMenuKey.value = key;
  nextTick(() => positionPanel(key));
}

function handleClose(): void {
  openMenuKey.value = null;
}

// hover only; no click toggle

Object.keys(menus).forEach((k) => {
  const key = k as MenuKey;
  const elRef = computed(() => liRefs[key]);
  onClickOutside(elRef, () => {
    if (openMenuKey.value === key) openMenuKey.value = null;
  });
});

useEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape') openMenuKey.value = null;
});

nuxtApp.hook('page:transition:finish', () => {
  if (!isHeaderHidden.value) return;
  isHeaderHidden.value = false;
});

const isPreloadDone = usePreloadDone();

let ctx: gsap.Context;

onMounted(() => {
  const scrollLock = useScrollLock(document?.body as unknown as HTMLElement);

  watch(isMenuOpen, (open) => {
    scrollLock.value = open;
  });

  const animateOpen = (target: HTMLElement) => {
    gsap.killTweensOf(target);
    gsap.fromTo(target, { opacity: 0, y: 8, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: 'power2.out' });
  };

  const animateClose = (target: HTMLElement) => {
    gsap.killTweensOf(target);
    gsap.to(target, { opacity: 0, y: 8, scale: 0.98, duration: 0.24, ease: 'power2.inOut' });
  };

  watch(openMenuKey, (key, prev) => {
    // Pause/resume Lenis when dropdown opens/closes
    if (key) {
      lenis.pause();
    } else {
      lenis.resume();
    }

    // close previous
    if (prev) {
      const prevEl = panelRefs[prev];
      if (prevEl) {
        closingKey.value = prev;
        animateClose(prevEl);
        // after close animation, clear closing flag
        setTimeout(() => {
          if (closingKey.value === prev) closingKey.value = null;
        }, 260);
      }
      const prevBg = bgSelectorRefs[prev];
      if (prevBg) {
        gsap.to(prevBg, { opacity: 0, duration: 0.18, ease: 'power2.out' });
      }
    }

    // open next
    if (key) {
      const nextEl = panelRefs[key];
      if (nextEl) animateOpen(nextEl);
      nextTick(() => {
        initializeBgSelectorPosition(key as MenuKey);
      });
    }
  });

  useWindowResize(() => {
    if (openMenuKey.value) positionPanel(openMenuKey.value as MenuKey);
  });

  lenis.on('scroll', (e: ScrollEvent) => {
    if (!el.value) return;
    if (e.isLocked) return;

    if (e.actualScroll <= 130) return;
    if (e.direction === 1) {
      isHeaderHidden.value = true;
    } else if (e.direction === -1) {
      isHeaderHidden.value = false;
    }
  });

  ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: document.body,
      start: `${window.innerHeight - 300}px`,
      invalidateOnRefresh: true,
      onEnter: () => {
        headerActive.value = true;
      },
      onLeaveBack: () => {
        headerActive.value = false;
      },
    });

    const tlIntro = gsap.timeline({
      paused: !isPreloadDone.value,
    });

    tlIntro.from('.nav > *', {
      yPercent: -190,
      stagger: 0.15,
      willChange: 'transform',
    });

    const { trigger } = watchTriggerable(isPreloadDone, (value) => {
      if (value) {
        tlIntro.play();
      }
    });

    trigger();
  }, el.value);

  useEventListener(window, 'keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isMenuOpen.value) handleCloseMenu();
  });

  // Drag-to-close: allow dragging the mobile panel downward to close
  const menuEl = elMobileMenu;
  const panelEl = elMobilePanel;

  let isDraggingMenu = false;
  let dragStartY = 0;
  let currentDragY = 0;
  const DRAG_CLOSE_THRESHOLD = 120;

  useEventListener(panelEl, 'pointerdown', (e: PointerEvent) => {
    if (!isMenuOpen.value) return;
    const panel = panelEl.value;
    if (!panel) return;
    // Only start drag when scrolled to top to avoid conflicting with content scroll
    if (panel.scrollTop > 0) {
      isDraggingMenu = false;
      return;
    }
    isDraggingMenu = true;
    dragStartY = e.clientY;
    currentDragY = 0;
  });

  useEventListener(panelEl, 'pointermove', (e: PointerEvent) => {
    if (!isDraggingMenu) return;
    const delta = e.clientY - dragStartY;
    currentDragY = Math.max(0, delta);
    const menu = menuEl.value;
    if (!menu) return;
    if (currentDragY === 0) return;
    gsap.set(menu, { y: currentDragY });
  });

  const endDrag = () => {
    if (!isDraggingMenu) return;
    const menu = menuEl.value;
    isDraggingMenu = false;
    if (!menu) return;
    if (currentDragY > DRAG_CLOSE_THRESHOLD) {
      gsap.to(menu, {
        y: '100%',
        duration: 0.22,
        ease: 'power3.out',
        onComplete: () => {
          gsap.set(menu, { clearProps: 'transform' });
          handleCloseMenu();
        },
      });
    } else {
      gsap.to(menu, {
        y: 0,
        duration: 0.22,
        ease: 'power3.out',
        onComplete: () => {
          gsap.set(menu, { clearProps: 'transform' });
        },
      });
    }
    currentDragY = 0;
  };

  useEventListener(panelEl, 'pointerup', endDrag);
  useEventListener(panelEl, 'pointercancel', endDrag);
});

onUnmounted(() => {
  ctx?.revert();
});

function positionPanel(key: MenuKey): void {
  const liEl = liRefs[key];
  const panelEl = panelRefs[key];
  if (!liEl || !panelEl) return;

  const liRect = liEl.getBoundingClientRect();
  const navRect = liEl.closest('.nav__list')?.getBoundingClientRect();
  if (!navRect) return;

  const panelRect = panelEl.getBoundingClientRect();
  const navWidth = navRect.width;

  const liLeftWithinNav = liRect.left - navRect.left;
  const liCenterWithinNav = liLeftWithinNav + liRect.width / 2;

  // Desired panel left so its center aligns with the li center
  const desiredLeftWithinNav = liCenterWithinNav - panelRect.width / 2;
  // Clamp to stay within nav bounds
  const clampedLeftWithinNav = Math.max(0, Math.min(desiredLeftWithinNav, navWidth - panelRect.width));
  // Convert to left relative to li (since panel is absolutely positioned inside li)
  const leftRelativeToLi = clampedLeftWithinNav - liLeftWithinNav;

  // Caret should point to li center relative to the panel
  const caretLeft = liCenterWithinNav - clampedLeftWithinNav;
  const caretClamped = Math.max(12, Math.min(caretLeft, panelRect.width - 12));

  panelStyles[key] = {
    left: `${leftRelativeToLi}px`,
    '--caret-left': `${caretClamped}px`,
  };
}

function initializeBgSelectorPosition(key: MenuKey): void {
  const items = itemRefs[key];
  const bg = bgSelectorRefs[key];
  if (!items || !items.length || !bg) return;
  const firstItem = items[0];
  if (!firstItem) return;
  const top = firstItem.offsetTop;
  const height = firstItem.offsetHeight;
  gsap.set(bg, { y: top, height, opacity: 1 });

  gsap.to(bg, {
    scale: 0,
  });
}

function handleItemEnter(key: MenuKey, index: number): void {
  moveBgToItem(key, index);
}

function moveBgToItem(key: MenuKey, index: number): void {
  const bg = bgSelectorRefs[key];
  const items = itemRefs[key];
  if (!bg || !items || !items[index]) return;

  const item = items[index] as HTMLLIElement;
  const top = item.offsetTop;
  const height = item.offsetHeight;

  gsap.killTweensOf(bg);

  gsap.to(bg, {
    y: top,
    height,
    opacity: 1,
    scale: 1,
    duration: 0.3,
  });
}

function handleToggleMenu(): void {
  isMenuOpen.value = !isMenuOpen.value;
}

function handleCloseMenu(): void {
  isMenuOpen.value = false;
  mobileOpenKey.value = null;
}

function handleMobileToggle(key: MenuKey): void {
  mobileOpenKey.value = mobileOpenKey.value === key ? null : key;
}
</script>

<style scoped lang="scss">
#header {
  will-change: transform;

  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;

  width: 100%;
  padding: fn.toVw(20) 0;

  transition:
    transform 0.6s $transition-ease,
    background-color 0.6s $transition-ease;

  &.is--hidden {
    transform: translate3d(0, -120%, 0) !important;
  }

  &.active {
    background-color: $color-background;
  }
}

.nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav__list {
    display: flex;
    gap: fn.toVw(57);
    align-items: center;

    padding: fn.toVw(15) fn.toVw(40);
    border-radius: fn.toVw(10);

    font-size: fn.toVw(16);

    background: rgb(255 255 255 / 60%);

    @include mx.mobile {
      display: none;
    }

    > li {
      position: relative;
    }

    .has-dropdown::after {
      content: '';

      position: absolute;
      top: 100%;
      right: 0;
      left: 0;

      height: fn.toVw(28);
    }

    .nav__item {
      position: relative;

      overflow: hidden;
      display: flex;
      gap: fn.toVw(6);
      align-items: center;

      &:deep(svg) {
        width: fn.toVw(12);
        opacity: 1;
        transition:
          opacity 0.2s ease,
          transform 0.2s ease;
      }

      &:hover,
      &.active {
        font-weight: 500;

        .text {
          transform: translateY(-101%);
        }

        .placeholder {
          transform: translateY(0);
        }
      }

      :deep(.open) {
        transform: rotate(180deg);
        opacity: 1;
        transition:
          opacity 0.2s ease,
          transform 0.2s ease;
      }

      .text {
        will-change: transform;
        position: absolute;
        inset: 0;
        transition: transform $transition-default;
      }

      .placeholder {
        pointer-events: none;
        will-change: transform;

        transform: translateY(100%);

        font-weight: 500;

        transition: transform $transition-default;
      }
    }

    .dropdown {
      pointer-events: none;

      position: absolute;
      z-index: 10;
      top: calc(100% + fn.toVw(30));
      left: 0;
      transform-origin: top left;
      transform: none;

      min-width: fn.toVw(300);
      padding: fn.toVw(30) fn.toVw(27);
      border-radius: fn.toVw(15);

      font-size: fn.toVw(16);
      font-weight: 300;

      visibility: hidden;
      opacity: 0;
      background: $color-background;
      box-shadow: 0 fn.toVw(20) fn.toVw(60) rgb(16 24 40 / 8%);

      &::before {
        content: '';

        position: absolute;
        top: fn.toVw(-8);
        left: var(--caret-left, fn.toVw(28));
        transform: translateX(-50%) rotate(45deg);

        width: fn.toVw(16);
        height: fn.toVw(16);

        background: $color-background;
        box-shadow: -1px -1px 1px rgb(16 24 40 / 3%);
      }

      &.is-open {
        pointer-events: auto;
        visibility: visible;
        opacity: 1;
      }

      &.is-closing {
        pointer-events: none;
        visibility: visible;
      }

      .dropdown__list {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: fn.toVw(6);
      }

      .bg-selector {
        pointer-events: none;

        position: absolute;
        z-index: -1;
        transform: scale(0);

        display: flex;
        justify-content: flex-end;

        width: 100%;
        height: fn.toVw(50);
        padding: fn.toVw(16) fn.toVw(18);
        border-radius: fn.toVw(10);

        background-color: $color-neutral;

        .submenu-icon {
          transform: rotate(270deg) translateY(-4px);
          width: fn.toVw(12);
        }
      }

      .dropdown__item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: fn.toVw(16) fn.toVw(18);
        border-radius: fn.toVw(10);

        color: inherit;

        background: transparent;
      }
    }
  }

  .cta {
    @include mx.mobile {
      display: none;
    }
  }
}

.mobile-menu {
  pointer-events: none;

  position: fixed;
  z-index: 10001;
  bottom: 0;
  left: fn.toVw(10);
  transform: translateY(100%);

  overflow: hidden;

  width: calc(100% - fn.toVw(20));
  height: calc(100dvh - 14px);
  border-radius: fn.toVw(13);

  transition: transform 0.6s $transition-easegsap-power4-out;

  @include mx.desktop {
    display: none;
  }

  &.is-open {
    pointer-events: auto;
    transform: translateY(0);
  }

  .mobile-menu__overlay {
    pointer-events: none;
    position: absolute;
    inset: 0;
  }

  .mobile-menu__panel {
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: fn.toVw(15);

    background-color: $color-background;
  }

  .mobile-menu__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: fn.toSvh(65);
  }

  .mobile-menu__list {
    display: flex;
    flex-direction: column;
    gap: fn.toVw(30);

    margin-bottom: fn.toVw(30);
    padding: 0 fn.toVw(16);

    font-size: fn.toVw(22);
    font-weight: 300;
  }

  .mobile-menu__item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: fn.toVw(8) 0;
    border-radius: fn.toVw(10);

    color: inherit;
    text-align: left;

    background: transparent;

    &:deep(.arrow) {
      transform: rotate(-90deg);
      width: fn.toVw(12);
      opacity: 1;
    }

    &:deep(.arrow.open) {
      transform: rotate(0deg);
      transition: transform 0.2s ease;
    }
  }

  .mobile-submenu {
    display: flex;
    flex-direction: column;
    gap: fn.toVw(16);

    margin-top: fn.toVw(12);
    padding-left: fn.toVw(12);
    border-left: 1px solid rgb(0 0 0 / 6%);
  }

  .mobile-submenu__item {
    display: block;
    padding: fn.toVw(6) 0;
    color: inherit;
  }

  :deep(.accordion-enter-active),
  :deep(.accordion-leave-active) {
    transition: all 0.2s ease;
  }

  :deep(.accordion-enter-from),
  :deep(.accordion-leave-to) {
    transform: translateY(-6px);
    opacity: 0;
  }

  .mobile-menu__cta {
    margin-top: auto;
    margin-bottom: calc(fn.toVw(27) - fn.toVw(15));

    &:deep(.btn) {
      background:
        linear-gradient($color-neutral, $color-neutral) padding-box,
        linear-gradient(0deg, #f2f2f2, #818181 80%, $color-neutral) border-box;
    }
  }
}
</style>
