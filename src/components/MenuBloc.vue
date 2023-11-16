<template>
  <div class="menu">
    <div class="menu__container frame">
      <div class="menu__container__left" :style="{width: Object.keys(sortedDrinks).length === 0 ? '100%': '50%', borderRightWidth: Object.keys(sortedDrinks).length === 0 ? '0': ''}">
        <div v-for="(group, index) in sortedPortions" :key="index">
          <h3 v-if="group[0].type">{{ index }}:</h3>
          <div class="menu__item" v-for="(item, index) in group" :key="index" :class="group[0].choice ? 'menu__item__choise':'menu__item'" data-content="Tai">
            <div class="menu__item__container">
              <p class="menu__item__name">{{ item.title }}</p>
              <div class="menu__item__price" v-if="!!item.price_public || item.price_public == null">
                {{ item.price }}€
              </div>
            </div>
            <div class="menu__item__decription">
              <p>
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="menu__container__right" v-if="sortedDrinks">
       
       <!--div v-for="(group, index) in sortedWinePackage" :key="index">
        <h3>{{ index }}:</h3>
          <div class="menu__item" v-for="(item, index) in group" :key="index">
            <div class="menu__item__container">
              <p class="menu__item__name">
                {{ item.title }}
              </p>
             <div
                class="menu__item__price"
                v-if="!!item.price_public || (item.price_public == null && item.price !== '')"
              >
                {{ item.price }}€
              </div>
            </div>
            <div class="menu__item__decription">
              <p>
                {{ item.info }}
              </p>
            </div>
          </div>
       </div-->

        <div v-for="(group, index) in sortedDrinks" :key="index">
          <h3>{{ index }}:</h3>
          <div class="menu__item" v-for="(item, index) in group" :key="index">
            <div class="menu__item__container">
              <p class="menu__item__name">
                {{ item.title }}<br />
                <span>{{ item.description }}</span>
              </p>
             <div
                class="menu__item__price"
                v-if="!!item.price_public || (item.price_public == null && item.price !== '')"
              >
                {{ item.price }}€
              </div>
            </div>
            <div class="menu__item__decription">
              <p>
                {{ item.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    food: {
      type: Array, 
      default: () => []
    },
    drink: {
      type: Array,
      default: () => []
    }
    /*
    winepack: {
      type: Array,
      default: () => []
    }
    */
  },
  setup(props) {

    const sortedPortions = props.food.reduce((newGroup, obj) => {
      if (!newGroup[obj.type]) {
        newGroup[obj.type] = [];
      }
      newGroup[obj.type].push(obj);
      return newGroup;
    }, {});

    const sortedDrinks = props.drink.reduce((drinks, items) => {
      if (!drinks[items.type]) {
        drinks[items.type] = [];
      }
      drinks[items.type].push(items);
      return drinks;
    },{});

    /*
    const sortedWinePackage = props.winepack.reduce((newGroup, obj) => {
      if (!newGroup[obj.type]) {
        newGroup[obj.type] = [];
      }
      newGroup[obj.type].push(obj);
      return newGroup
    },{});
    */

    return {
      sortedPortions,
      sortedDrinks
      //sortedWinePackage
    };
  },
};
</script>

<style lang="postcss">
.menu {
  @apply py-12 px-4;
  &__container {
    @apply relative container mx-auto max-w-6xl flex justify-start flex-wrap bg-white p-4 sm:p-8 z-10;
    h3 {
      @apply font-serif font-bold mb-6;
      color: var(--color02);
      font-size: clamp(1rem, 1vw + 1.2rem, 1.2rem);
      text-align: left;
    }
    h4 {
      @apply font-serif font-bold mb-4;
      color: var(--color02);
      font-size: clamp(1.2rem, 2vw + 1.5rem, 1.5rem);
    }
    &__left {
      @apply w-full sm:w-1/2 sm:border-r sm:pr-5;
      border-color: var(--color12);
    }
    &__right {
      @apply w-full sm:w-1/2 sm:pl-5;
    }
  }
  &__item {
    @apply mb-5 sm:pr-3 pb-6 border-b z-10 relative;
    border-color: var(--color12);
    &__container {
      @apply flex flex-1 justify-between;
      @media (max-width: theme("screens.sm")) {
        flex-direction: column;
      }
    }
    &__name {
      @apply font-fatface mb-4 text-gray-900;
      font-size: clamp(0.7rem, 1vw + 1rem, 1rem);

      span {
        @apply italic font-serif font-thin;
        font-size: clamp(1.2rem, 1vw + 1rem, 1rem);
      }
    }
    &__price {
      @apply font-serif text-gray-900;
      font-size: clamp(1.2rem, 1vw + 1rem, 1rem);
      @media (max-width: theme("screens.sm")) {
        margin-bottom: 16px;
      }
    }
    &__decription {
      @apply font-sans text-gray-700;
      font-size: clamp(1rem, 1vw + 1rem, 0.4rem);
    }
  }
  &__item__choise{
     &:not(:last-child):before {
      position: absolute;
      content: attr(data-content);
      width: 32px;
      height: 23px;
      background: #ffffff;
      top: 91%;
      left: auto;
      bottom: 0;
      right: 50%;
      padding-left: 5px;
    }
  }
}
</style>
