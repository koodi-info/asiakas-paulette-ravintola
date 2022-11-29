
<template>
  <div class="covid19" v-if="!!public_info || public_info == null">
    <div class="covid19__container">
      <h5>{{ title }}</h5>
      <p>
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: String,
    body: String,
    public_info: Boolean
  },
  setup() {
    return {};
  },
};
</script>

<style lang="postcss">
.covid19 {
  @apply py-4 relative top-2;
  background-color: var(--color04);
  &__container {
    @apply container mx-auto text-center w-full text-black px-4;
    h5 {
      @apply mb-1 text-base font-medium font-sans uppercase;
    }
    p {
      @apply text-xs text-center max-w-screen-md m-auto;
    }
  }
}
</style>
