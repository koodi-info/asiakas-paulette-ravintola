<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__actions">
        <div class="navbar__brand">
          <a href="#paulette">
            <img src="/assets/logo-color.svg" alt="" />
          </a>
        </div>
        <div class="navbar__togglebutton" @click="navigationToggle()">
          <span v-if="navigation">{{`${data.menuclose} ` + `${data.menu}`}}</span>
          <span v-else>{{`${data.menuopen} ` + `${data.menu}`}}</span>
        </div>
      </div>
      <div class="navbar__items" :class="{ navbar__mobile: navigation }">
        <a href="#about-us" @click="navigationToggle()">{{data.we}}</a>
        <a href="#lounaslista" @click="navigationToggle()">{{data.lunch}}</a>
        <a href="#alacartelista" @click="navigationToggle()">{{data.alacarte}}</a>
        <a href="#restaurants" @click="navigationToggle()">{{data.restaurants}}</a>
        <a href="#catering" @click="navigationToggle()">{{data.catering}}</a>
        <a href="https://v2.tableonline.fi/instabook/bookings/yUijLmr" target="_blank">{{data.tablereservation}}</a>
        <a href="#yhteydenotto">{{data.giftcard}}</a>
        <slot></slot> 
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
  props: {
    data: Object,
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
    @apply md:container md:mx-auto flex flex-col md:flex-row justify-center md:justify-between md:items-center px-4 py-2;
  }
  &__actions {
    @apply flex flex-row items-center w-full justify-between md:w-0;
  }
  &__items {
    @apply md:flex md:space-x-4  font-serif font-extrabold md:text-xs uppercase;
    @media (max-width: theme("screens.md")) {
      @apply opacity-0 hidden; 
    }
    color: var(--color03);
    a {
      @apply my-4;
      &:hover {
        color: var(--color02);
      }
    }
  }
  &__brand {
    @apply flex flex-col flex-shrink-0 order-first text-center md:text-left;
    img {
      @apply w-28 my-2;
    }
  }
  &__togglebutton {
    @apply md:hidden font-serif font-extrabold md:text-xs md:text-base uppercase;
    color: var(--color03);
  }
  &__mobile {
    @media (max-width: theme("screens.md")) {
      @apply opacity-100 block;
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
