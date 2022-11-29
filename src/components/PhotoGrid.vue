<template>
  <div class="photo-grid">
    <div class="photo-grid__container">
      <div class="photo-grid__container__item">
        <img :src="imageOne" alt="Kuva annoksesta tai ravintolasta" />
      </div>
      <div
        class="photo-grid__container__item photo-grid__container__item--large"
      >
        <img :src="imageTwo" alt="Kuva annoksesta tai ravintolasta" />
      </div>
      <div class="photo-grid__container__item">
        <img :src="imageThree" alt="Kuva annoksesta tai ravintolasta" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageOne: String,
    imageTwo: String,
    imageThree: String,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="postcss">
.photo-grid {
  @apply py-16 px-4;
  &__container {
    @apply lg:container lg:mx-auto;
    width: 100%;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    display: -ms-grid;
    display: grid;
    grid-auto-columns: 1fr;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
    &__item {
      @apply relative overflow-hidden;
      height: 300px;
      &:nth-of-type(1) {
        @apply row-span-1;
      }
      &:nth-of-type(2) {
        @apply row-span-2;
      }
      &:nth-of-type(3) {
        @apply row-span-1;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        @apply object-center;
      }
      &--large {
        height: 620px;
      }
    }
  }
}
</style>
