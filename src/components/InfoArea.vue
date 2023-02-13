<template>
  <div class="info">
    <div class="info__container">
      <h3>{{restaurant}} {{name}}</h3>
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
        <h4>{{ opentimes }}</h4>
        <ul>
          <li v-for="(hour, index) in opening" :key="index">
            {{ hour.item }}
          </li>
        </ul>
        <span v-show="exception.length">
        <h4>{{ extraopentimes }}</h4>
        <ul>
          <li v-for="(hour, index) in exception" :key="index">
            {{ hour.item }}
          </li>
        </ul>
        </span>
      </div>
      <div class="info__container__current-info">
        <div class="info__container__current-info__content frame">
          <h4>{{ newstitle }}</h4>
          <p>{{ news }}</p>
          <button
            class="button"
            onclick="window.open('https://v2.tableonline.fi/instabook/bookings/yUijLmr')"
          >
            {{tablereservationtext}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
   props: {
    restaurant: String,
    name: String,
    address: String,
    email: String,
    phone: String,
    opening: [Object],
    exception: Object,
    news: String,
    tablereservationtext: String,
    opentimes: String,
    extraopentimes: String,
    newstitle: String
  },
};
</script>

<style lang="postcss" scoped>
.info {
  @apply relative w-full mx-auto flex flex-col justify-center py-8 px-4 sm:py-8 sm:px-10;
  &__container {
    @apply container mx-auto max-w-6xl lg:grid z-10 items-center relative;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    grid-template-columns: 1fr;
    h3{
      @apply text-center;
    }
    h4 {
      @apply mt-4 mb-2 font-fatface text-center;
      font-size: clamp(1.8rem, 2vw + 1rem, 1.25rem);
    }
    &__location {
      @apply text-center flex flex-col my-4 gap-4 font-serif-secondary;
      font-size: clamp(0.8rem, 2vw + 1rem, 1.25rem);
    }
    &__current-info {
      @apply flex flex-col 
      my-4 gap-4 
      font-serif-secondary 
      items-center text-center relative bg-white;
      font-size: clamp(0.5rem, 1.5vw + 1rem, 1.25rem);
      width: 100%;
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
        @apply relative w-full flex flex-col px-8 sm:px-16 py-8 sm:my-0 justify-center align-middle items-center;
        p{
          @apply max-w-xl;
        }
        button {
          @apply mx-auto mt-4 sm:block md:mt-4 md:mx-0 max-w-sm;
        }
      }
    }
  }
}
</style>
