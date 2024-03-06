<template>
  <div class="about">
    <div class="relative" :id="data[0].navlink">
      <PhotoTextItem
        alignment="right"
        :headingText="data[0].title"
        :bodyText="data[0].body"
        :imageLeft="data[0].leftImage"
        :imageRight="data[0].rightImage"
      />
    </div>
    <div class="relative" :id="data[1].navlink">
      <PhotoTextItem
        alignment="left"
        :headingText="data[1].title"
        :bodyText="data[1].body"
        :imageLeft="data[1].leftImage"
        :imageRight="data[1].rightImage"
      />
    </div>
    <div class="relative" :id="data[2].navlink">
      <PhotoTextItem
        alignment="right"
        :headingText="data[2].title"
        :bodyText="data[2].body"
        :imageLeft="data[2].leftImage"
        :imageRight="data[2].rightImage"
      />
    </div>
    <div class="relative" :id="data[3].navlink">
      <PhotoTextItem
        alignment="left"
        :headingText="data[3].title"
        :bodyText="data[3].body"
        :imageLeft="data[3].leftImage"
        :imageRight="data[3].rightImage"
      />
    </div>
    <div class="relative" :id="data[4].navlink">
      <PhotoTextItem
        alignment="full"
        :headingText="data[4].title"
        :bodyText="data[4].body"
        :imageLeft="data[4].leftImage"
        :imageRight="data[4].rightImage"
      />
    </div>
    <div class="relative" :id="data[5].navlink">
      <PhotoTextItem
        alignment="right"
        :headingText="data[5].title"
        :bodyText="data[5].body"
        :imageLeft="data[5].leftImage"
        :imageRight="data[5].rightImage"
      />
    </div>
  </div>
</template>

<script>
import PhotoTextItem from "../components/PhotoTextItem.vue";
import ImageGridBg from "../components/ImageGridBg.vue";
export default {
  props: {
    data: Object,
  },
  setup() {
    return {};
  },
  components: {
    PhotoTextItem,
    ImageGridBg,
  },
};
</script>

<style lang="postcss">
.about {
  @apply py-12 px-4;
}
</style>