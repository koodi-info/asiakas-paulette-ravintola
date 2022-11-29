<template>
  <div class="info">
    <div class="info__container">
      <div class="info__container__location">
        <span itemscope itemtype="https://schema.org/LocalBusiness">
          <a
            href="https://goo.gl/maps/XsaFYWghQsTogcVV9"
            target="_blank"
            rel="noopener noreferrer"
            >{{ address }}</a
          >
        </span>
        <div>
          <a
            href="mailto:hello@paulettehelsinki.com?subject=Yhteydenotto ravintola Paulette"
            >{{ email }}</a
          >
          <br />
          <a :href="`tel:${phone}`"
            ><span itemprop="telephone">{{ phone }}</span></a
          >
        </div>
        <h4>Aukioloajat</h4>
        <ul>
          <li v-for="(hour, index) in opening" :key="index">
            {{ hour.item }}
          </li>
        </ul>
        <h4>Poikkeusaukioloajat</h4>
        <ul class="lg:max-w-md">
          <li v-for="(hour, index) in exception" :key="index">
            {{ hour.item }}
          </li>
        </ul>
      </div>
      <div class="info__container__current-info">
        <div class="info__container__current-info__content frame">
          <h4>Ajankohtaista</h4>
          <p>{{ news }}</p>
          <button
            class="button"
            onclick="window.open('https://v2.tableonline.fi/instabook/bookings/yUijLmr')"
          >
            Tee pöytävaraus
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["address", "email", "phone", "opening", "exception", "news"],
  setup() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
.info {
  @apply relative w-full mx-auto flex flex-col justify-center py-8 px-4 sm:py-16 sm:px-10;
  &__container {
    @apply container mx-auto max-w-6xl lg:grid z-10 items-center relative;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    grid-template-columns: auto 1fr;
    h4 {
      @apply mt-4 mb-2 font-fatface text-center lg:text-left;
      font-size: clamp(1.8rem, 2vw + 1rem, 1.25rem);
    }
    &__location {
      @apply text-center lg:text-left flex flex-col my-4 gap-4 font-serif-secondary;
      font-size: clamp(0.8rem, 2vw + 1rem, 1.25rem);
    }
    &__current-info {
      @apply flex flex-col my-4 gap-4 font-serif-secondary items-center text-center sm:text-left relative bg-white ;
      font-size: clamp(0.5rem, 1.5vw + 1rem, 1.25rem);
      &:before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0px;
        width: auto;
        height: auto;
        background-image: url(/assets/kasvis09.png);
        background-repeat: no-repeat;
        background-size: 110px;
        background-position: bottom 20px right 20px;
        }
      &__content {
        @apply relative block px-8 sm:px-16 py-8 sm:my-0;
        
        button {
          @apply mx-auto mt-4 sm:block md:mt-4 md:mx-0;
        }
      }
    }
  }
}
</style>
