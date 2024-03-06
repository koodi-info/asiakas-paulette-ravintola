<template>
  <div class="photoTextItem">
    <div class="photoTextItem__container" :class="alignment">
      <div class="photoTextItem__text">
        <h4>{{ headingText }}</h4>
        <p v-html="handleNewLine(bodyText)"></p>
      </div>
      <div class="photoTextItem__images" v-if="imageRight && imageLeft">
        <img
          v-if="imageRight"
          :src="imageRight"
          alt="Kuva annoksesta tai ravintolasta"
          role="presentation"
        />
        <img
          v-if="imageLeft"
          :src="imageLeft"
          alt="Kuva annoksesta tai ravintolasta"
          role="presentation"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headingText: String,
    bodyText: String,
    imageLeft: String,
    imageRight: String,
    alignment: String,
  },
  setup() {
    return {};
  },
  methods: {
    handleNewLine(str) {
      return str.replace(/(?:\r\n|\r|\n)/g, "<br />");
    },
  },
};
</script>

<style lang="postcss" scoped>
.right {
  @apply flex-row-reverse;
}
.left {
  @apply flex-row;
}
.full {
  @apply flex-row w-10/12;
}
.photoTextItem {
  @apply container mx-auto px-4;
  &__container {
    @apply flex content-center items-center z-10;
    @media (max-width: theme("screens.lg")) {
      flex-direction: column;
    }
  }
  &__text {
    @apply flex-1 md:px-24 mb-16 whitespace-pre-line break-words relative;
  }
  &__images {
    @apply flex-1 z-10 mb-16;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    img:first-of-type {
      grid-row: 1;
      grid-column: 1 / span 8;
      padding-top: 10%;
      z-index: 1;
    }
    img:last-of-type {
      grid-column: 7 / -1;
      grid-row: 1;
    }
  }
}
img {
  object-fit: cover;
  aspect-ratio: 1 / 1;
}
h4 {
  @apply font-serif text-3xl font-bold mb-4 text-left;
  color: var(--color02);
}
p {
  @apply font-sans text-base text-gray-800 leading-loose mb-4;
}
::v-deep a {
  @apply underline;
  color: var(--color02);
}
</style>
