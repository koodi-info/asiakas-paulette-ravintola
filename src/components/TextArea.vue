<template>
  <div class="textarea">
    <div class="textarea__container">
      <div class="textarea__container__content frame">
        <h4>{{ heading }}</h4>
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["heading", "content"],
  setup() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
.textarea {
  @apply relative w-full mx-auto flex flex-col justify-center py-8 px-4 sm:py-16 sm:px-10;
  &__container {
    @apply container mx-auto max-w-6xl relative;
    h4 {
      @apply mt-4 mb-2 font-fatface text-center lg:text-left;
      font-size: clamp(1.8rem, 2vw + 1rem, 1.25rem);
    }

    &__content {
      @apply relative bg-white block px-8 sm:px-16 py-8 sm:my-0;
      @apply flex flex-col my-4 gap-4 font-serif-secondary items-center text-center sm:text-left;
      font-size: clamp(0.5rem, 1.5vw + 1rem, 1.25rem);
      &:before {
        position: absolute;
        content: "";
        top: 300px;
        left: 300px;
        right: 0;
        bottom: 100px;
        width: auto;
        height: 251px;
        background-repeat: no-repeat;
        background-size: 70%;
        @media (max-width: theme("screens.sm")) {
          top: 350px;
          left: -20px;
          width: 50%;
          background-size: 50%;
        }
      }
      button {
        @apply mx-auto mt-4 sm:block md:mt-4 md:mx-0;
      }
    }
  }
}
</style>
