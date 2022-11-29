<template>
  <div class="backgroundImage">
    <div id="image01"></div>
    <div id="image02"></div>
  </div>
</template>

<script>
export default {
  props: {
    imageLeft: String,
    imageRight: String,
  },
  setup(props) {
    const imageLeft = props.imageLeft;
    return {
      imageLeft,
    };
  },
};
</script>

<style lang="postcss">
.backgroundImage {
  @apply absolute inset-0 w-full grid z-0;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 2fr 2fr 2fr 2fr 2fr;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . . . ."
    ". image1 image1 . . ."
    ". image1 image1 . . ."
    ". . . . . image2"
    ". . . . . image2";
  pointer-events: none;
}

#image01 {
  @apply relative w-full h-full;
  grid-area: image1;
  &::after {
    content: "";
    display: block;
    background-image: url("/assets/kasvis05.png");
    background-repeat: no-repeat;
    width: auto;
    height: 350px;
    position: relative;
    top: 0;
    right: 150px;
    pointer-events: none;
    @media (max-width: theme("screens.lg")) {
      background-size: 40%;
    }
  }
}

#image02 {
  @apply relative w-full h-full z-0;
  grid-area: image2;
  &:after {
    content: "";
    display: block;
    background-image: url("/assets/kasvis11.png");
    background-repeat: no-repeat;
    width: auto;
    height: 350px;
    position: relative;
    bottom: 0;
    pointer-events: none;
    @media (max-width: theme("screens.lg")) {
      background-size: 40%;
    }
  }
}
</style>
