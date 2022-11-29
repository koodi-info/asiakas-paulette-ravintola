<template>
  <div class="about">
    <div class="relative">
      <PhotoTextItem
        alignment="right"
        :headingText="data.about_content[0].title"
        :bodyText="data.about_content[0].body"
        :imageLeft="data.about_content[0].leftImage"
        :imageRight="data.about_content[0].rightImage"
      />
    </div>
    <div class="relative">
      <PhotoTextItem
        alignment="left"
        :headingText="data.about_content[1].title"
        :bodyText="data.about_content[1].body"
        :imageLeft="data.about_content[1].leftImage"
        :imageRight="data.about_content[1].rightImage"
      />
    </div>
    <div class="relative">
      <PhotoTextItem
        alignment="right"
        :headingText="data.about_content[2].title"
        :bodyText="data.about_content[2].body"
        :imageLeft="data.about_content[2].leftImage"
        :imageRight="data.about_content[2].rightImage"
      />
    </div>
    <div class="relative">
      <PhotoTextItem
        alignment="left"
        :headingText="data.about_content[3].title"
        :bodyText="data.about_content[3].body"
        :imageLeft="data.about_content[3].leftImage"
        :imageRight="data.about_content[3].rightImage"
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