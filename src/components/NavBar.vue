<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__actions">
        <div class="navbar__brand">
          <a href="#paulette">
            <img src="/assets/logo-color.svg" alt="Ravintola Paulette Logo" />
          </a>
        </div>
        <div class="navbar__togglebutton" @click="navigationToggle()">
          <span v-if="navigation">Sulje valikko</span>
          <span v-else>Näytä valikko</span>
        </div>
      </div>

      <div class="navbar__items" :class="{ navbar__mobile: navigation }">
        <a href="#ravintolasta" @click="navigationToggle()" rel="">Me</a>
        <a href="#lounaslista" @click="navigationToggle()" rel=""
          >Lounaslista</a
        >
        <a href="#alacartelista" @click="navigationToggle()" rel=""
          >A la carte</a
        >
        <a
          href="https://v2.tableonline.fi/instabook/bookings/yUijLmr"
          target="_blank"
          rel=""
          >Pöytävaraus</a
        >
        <a href="#yhteydenotto" rel="">Lahjakortit</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navigation: false,
    };
  },
  setup() {
    return {};
  },
  methods: {
    navigationToggle() {
      this.navigation = !this.navigation;
    },
    gotoAnchore(link) {
      this.navigation = !this.navigation;
    },
  },
};
</script>

<style lang="postcss">
.navbar {
  @apply z-50 w-full fixed;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  background-color: var(--color05);
  &__container {
    @apply container sm:mx-auto flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center px-4 py-2;
  }
  &__actions {
    @apply flex flex-row items-center w-full justify-between sm:w-0;
  }
  &__items {
    @apply hidden sm:flex sm:space-x-4  font-serif font-extrabold sm:text-xs md:text-base uppercase;
    color: var(--color03);
    a {
      @apply my-4;
      &:hover {
        color: var(--color02);
      }
    }
  }
  &__brand {
    @apply flex flex-col flex-shrink-0 order-first text-center sm:text-left;
    img {
      @apply w-28 my-2;
    }
  }
  &__togglebutton {
    @apply sm:hidden font-serif font-extrabold sm:text-xs md:text-base uppercase;
    color: var(--color03);
  }
  &__mobile {
    @apply block;
    @media (max-width: theme("screens.sm")) {
      margin-top: 16px;
      border-top-width: 1px;
      border-color: var(--color04);
      a {
        display: block;
      }
    }
  }
}
</style>
