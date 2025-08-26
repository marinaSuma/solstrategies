<template>
  <footer id="footer" ref="el">
    <div class="scroll color-gray" @click="scrollToTop">
      <Text class="link color-gray" variant="body12">Back to Top</Text>
      <IconArrow />
    </div>

    <div class="top">
      <div class="logo">
        <TextLogo :is-footer="true" />
      </div>
    </div>

    <div class="center">
      <div class="links">
        <Text class="subtitle" variant="body18">Company</Text>

        <ul>
          <li><NuxtLink class="link" to="/">About SOL Strategies</NuxtLink></li>
          <li><NuxtLink class="link" to="/">Leadership Team</NuxtLink></li>
          <li><NuxtLink class="link" to="/">Careers</NuxtLink></li>
          <li><NuxtLink class="link" to="/">Contact Us</NuxtLink></li>
        </ul>
      </div>

      <div class="links">
        <Text class="subtitle" variant="body18">Solutions</Text>

        <ul>
          <li><NuxtLink class="link" to="/">Institutional Staking</NuxtLink></li>
          <li><NuxtLink class="link" to="/">Validator Services</NuxtLink></li>
          <li><NuxtLink class="link" to="/">White-Label Solutions</NuxtLink></li>
          <li><NuxtLink class="link" to="/">ETF Services</NuxtLink></li>
        </ul>
      </div>

      <div class="links">
        <Text class="subtitle" variant="body18">Resources</Text>

        <ul>
          <li><NuxtLink class="link" to="/">Press Releases</NuxtLink></li>
          <li><NuxtLink class="link" to="/">News</NuxtLink></li>
          <li><NuxtLink class="link" to="/">Research</NuxtLink></li>
          <li><NuxtLink class="link" to="/">Educational Content</NuxtLink></li>
        </ul>
      </div>

      <div class="links">
        <Text class="subtitle" variant="body18">Investors</Text>

        <ul>
          <li><NuxtLink class="link" to="/">Stock Information</NuxtLink></li>
          <li><NuxtLink class="link" to="/">Financial Reports</NuxtLink></li>
          <li><NuxtLink class="link" to="/">SEC Filings</NuxtLink></li>
          <li><NuxtLink class="link" to="/">IR Contact</NuxtLink></li>
        </ul>
      </div>

      <div class="links">
        <Text class="subtitle" variant="body18">Legal & Compliance</Text>

        <ul>
          <li><NuxtLink class="link" to="/">Trust Center</NuxtLink></li>
          <li><NuxtLink class="link" to="/">Privacy Policy</NuxtLink></li>
          <li><NuxtLink class="link" to="/">Terms of Service</NuxtLink></li>
          <li><NuxtLink class="link" to="/">Regulatory Disclosures</NuxtLink></li>
        </ul>
      </div>
    </div>

    <div class="separator">
      <Text class="copyright">© {{ new Date().getFullYear() }} SOL Strategies Inc</Text>

      <div class="address">
        <NuxtLink class="link active"> <b>Investor Relations Contact</b> </NuxtLink>
        <br >
        <br >
        <Text>
          ICR<br >
          <b>John Ragozzino, CFA</b><br >
          <a class="link active" href="mailto:solstrategies@icrinc.com">solstrategies@icrinc.com</a><br >
          Tel: 203-682-8284
        </Text>
      </div>

      <div class="social">
        <ul>
          <li>
            <NuxtLink to="/" :external="true" target="_blank" aria-label="Twitter"><IconTwitter /></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" :external="true" target="_blank" aria-label="LinkedIn"><IconLinkedin /></NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="bottom">
      <Text variant="body13" class="color-gray">
        Legal Disclaimer<br ><br >
        The information on the website is not intended to modify, qualify, supplement, or amend information disclosed under corporate and securities
        legislation of any jurisdiction applicable to Sol Strategies and should not be used or relied upon for the purpose of making investment
        decisions concerning any securities of Sol Strategies. If you are considering any investment in the securities of Sol Strategies, you are
        advised to seek independent professional advice and refer to Sol Strategies' official disclosure documents which are made available to the
        public in accordance with applicable securities laws and filed with the Canadian Securities Regulatory Authorities on SEDAR+ under Sol
        Strategies' profile at www.sedar.com. Printed copies of public disclosure documents may also be obtained from Sol Strategies, upon request.
        Sol Strategies assumes no responsibility for errors or omissions in the information or software or other documents which are referenced by or
        linked to the website. Therefore, the website may include technical or other inaccuracies. This website contains statistical data, market
        research and industry forecasts that were obtained, unless otherwise indicated, from independent industry and government publications and
        reports or based on estimates derived from such publications and reports. While Sol Strategies believes this data and information to be
        reliable, market and industry data and information is subject to variation and cannot be and therefore has not been verified due to limits on
        the availability and reliability of raw data, the voluntary nature of the data gathering process and other limitations and uncertainties
        inherent in any statistical survey. Sol Strategies has not participated in the preparation of such information contained herein.Sol Strategies
        is an independent organization in the Solana ecosystem. Sol Strategies is not affiliated with, owned by, or under common control with Solana
        Foundation (the "Foundation"), and the Foundation has not entered into any association, partnership, joint venture, employee, or agency
        relationship with Sol Strategies. None of the Foundation or its council members, officers, agents or advisors (collectively, the "Foundation
        Parties") make any representations or warranties, recommendations, endorsements or promises with the respect to the accuracy of any statements
        made, information provided or action taken by Sol Strategies and expressly disclaim any and all liability arising from or related to any such
        statements, information or action.<br ><br >

        Stock Quotes<br ><br >
        All stock quotes and historical stock price data provided on the Website are provided by third party service providers and are provided for
        informational purposes only and are not intended for trading purposes. If you are contemplating trading in the securities of Sol Strategies,
        we strongly advise you to seek independent professional advice before making any investment decision. Sol Strategies makes no representation
        or warranty regarding the accuracy or completeness of any such stock price quotes or historical stock price data and has not taken any steps
        to verify the adequacy, accuracy or completeness of the information provided herein.<br ><br >

        CAUTIONARY NOTE REGARDING FORWARD-LOOKING STATEMENTS
      </Text>
    </div>
  </footer>
</template>

<script setup>
const lenis = useNuxtApp().$lenis;

const scrollToTop = () => {
  lenis.scrollTo(0, { force: true });
};

const nuxtApp = useNuxtApp();

const el = useTemplateRef('el');

let ctx;
let ctxMotionFooter;

const motionFooter = () => {
  ctxMotionFooter = gsap.context(() => {
    ctxMotionFooter?.revert();

    if (IS_MOBILE.value) return;

    const tl = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: el.value,
        start: 'top bottom',
        end: 'bottom bottom',
        invalidateOnRefresh: true,
        scrub: true,
        refreshPriority: -1,
      },
    });

    tl.set(el.value, {
      yPercent: -50,
    });

    tl.to(el.value, {
      yPercent: 0,
    });
  }, el.value);
};

onMounted(() => {
  ctx = gsap.context(() => {
    callOnce(() => {
      motionFooter();
    });

    nuxtApp.hook('page:transition:finish', () => {
      motionFooter();
    });
  }, el.value);
});

onUnmounted(() => {
  ctxMotionFooter?.revert();
  ctx?.revert();
});
</script>

<style scoped lang="scss">
#footer {
  position: relative;

  overflow: hidden;

  width: calc(100% - (fn.toVw(38) * 2));
  margin-left: fn.toVw(38);
  padding: fn.toVw(96) fn.toVw(30) 0 fn.toVw(30);
  border-top-left-radius: fn.toVw(68);
  border-top-right-radius: fn.toVw(68);

  background-color: $color-neutral;

  @include mx.mobile {
    display: flex;
    flex-direction: column;

    width: calc(100% - (fn.toVw(35) * 2));
    margin-bottom: fn.toVw(35);
    padding: fn.toVw(32) fn.toVw(18) fn.toVw(50) fn.toVw(18);
    border-top-left-radius: fn.toVw(8);
    border-top-right-radius: fn.toVw(8);
  }
}

.scroll {
  cursor: pointer;

  position: absolute;
  top: fn.toVw(40);
  right: fn.toVw(90);

  display: flex;
  gap: fn.toVw(12);
  align-items: center;

  text-transform: uppercase;

  @include mx.mobile {
    display: none;
  }

  &:deep(svg) {
    width: fn.toVw(12.5);
  }
}

.top {
  padding-bottom: fn.toVw(63);

  @include mx.mobile {
    order: 2;
    padding: fn.toVw(50) 0 fn.toVw(20) 0;
  }

  .logo {
    width: 100%;
    margin: 0 auto;

    &:deep(.text-logo) {
      margin: 0 auto;
    }
  }
}

.center {
  display: flex;
  justify-content: space-between;
  padding: fn.toVw(28) fn.toVw(153) fn.toVw(78) fn.toVw(153);
  border-top: 1px solid $color-neutral02;

  @include mx.mobile {
    flex-wrap: wrap;
    row-gap: fn.toVw(26);
    order: 1;

    padding: 0;
    padding-bottom: fn.toVw(47);
    border-top: 0;
    border-bottom: 1px solid $color-neutral02;
  }
}

.separator {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: fn.toVw(15) fn.toVw(33);
  border-radius: fn.toVw(10);

  font-size: fn.toVw(14);
  font-weight: 300;

  background-color: $color-neutral02;

  @include mx.mobile {
    flex-direction: column;
    gap: fn.toVw(36);
    order: 3;

    padding: 0;
    border-radius: 0;

    text-align: center;

    background-color: initial;
  }

  .address {
    max-width: fn.toVw(200);
    font-size: fn.toVw(16);
    font-weight: 300;
    text-align: center;

    b,
    &:deep(b) {
      font-weight: 400;
    }
  }

  .copyright {
    width: 100%;
    max-width: fn.toVw(190);
    text-align: left;
  }

  .social {
    text-align: right;

    ul {
      display: flex;
      gap: fn.toVw(100);

      @include mx.mobile {
        gap: fn.toVw(37);
      }

      li {
        width: fn.toVw(20);
        transition: opacity $transition-default;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
}

.links {
  width: 100%;
  max-width: fn.toVw(180);

  @include mx.mobile {
    max-width: 50%;
    padding-top: fn.toVw(34);
    border-top: 1px solid $color-neutral02;

    &:nth-child(-n + 2) {
      padding-top: 0;
      border-top: 0;
    }

    &:last-child {
      max-width: 100%;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: fn.toVw(18);

    margin-top: fn.toVw(18);

    font-size: fn.toVw(16);
    color: $color-gray30;

    @include mx.mobile {
      gap: fn.toVw(9);
      margin-top: fn.toVw(9);
      font-size: fn.toVw(9);
    }
  }
}

.bottom {
  padding: fn.toVw(33);

  @include mx.mobile {
    order: 4;
    margin-top: fn.toVw(43);
    padding: 0;
  }
}
</style>
