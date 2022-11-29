<template>
  <div class="welcome">
    <div class="welcome__container">
      <div class="welcome__container__image">
        <span class="welcome__container__logo">
          <img
            src="/assets/logo-white.svg"
            alt="Ravintola Paulette Logo"
            class="drop-shadow-xl"
          />
          <p>Ravintola</p>
        </span>
        <div class="welcome__container__image__background frame">
          <img :src="image" alt="Ravintolakuva" />
        </div>
      </div>
      <div class="welcome__container__text frame">
        <h1>{{ title }}</h1>
        <div class="divider"></div>
        <h2>
          {{ body }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "body", "image"],
  setup() {
    return {};
  },
};
</script>

<style lang="postcss">
.welcome {
  @apply relative w-full mx-auto flex flex-col justify-center overflow-hidden py-8 px-4 sm:py-16 sm:px-10;
  &__container {
    @apply relative grid container mx-auto mb-6 justify-end items-end auto-cols-fr;
    @media (min-width: theme("screens.md")) {
      grid-column-gap: 24px;
      grid-row-gap: 24px;
      grid-template-columns: 2fr 1fr;
    }
    &__logo {
      @apply absolute inset-0 text-white flex flex-col justify-center items-center z-10;
      img {
        @apply pb-2 w-48 sm:w-48;
      }
      p {
        @apply text-white font-serif font-extrabold text-base uppercase;
      }
    }
    &__image {
      @apply relative;
      height: 240px;
      @media (min-width: theme("screens.md")) {
        height: 440px;
      }
      @media (min-width: theme("screens.lg")) {
        height: 640px;
      }
      &__background {
        @apply relative w-full h-full;
        img {
          @apply object-cover relative w-full h-full;
        }
      }
    }
    &__text {
      @apply relative p-4 text-center my-8 px-4 md:my-0;
      color: var(--color03);
      background-color: var(--color01);
      pointer-events: none;
      &:before {
        position: absolute;
        content: "";
        top: -130px;
        left: 0px;
        right: 0;
        bottom: 100px;
        width: 100%;
        height: 100%;
        background-image: url("/assets/kasvis11.png");
        background-repeat: no-repeat;
        background-size: 20%;
        background-position: center;
        @media (max-width: theme("screens.md")) {
          top: -80px;
          left: 0px;
          background-size: 15%;
        }
      }

      @media (min-width: theme("screens.md")) {
        left: -15%;
        top: -40px;
        width: 115%;
        padding: 40px 40px 32px;
      }

      h1 {
        @apply relative text-brand-dark font-fatface mb-4 tracking-wide z-10;
        font-size: clamp(2.5rem, 2.5vw + 2rem, 3.25rem);
      }
      h2 {
        @apply relative font-serif text-xl mb-4 z-10;
        font-size: clamp(0.367rem, 0.5vw + 0.8rem, 1.333rem);
      }
    }
  }
}
</style>
