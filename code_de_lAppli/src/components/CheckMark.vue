<script setup>
const props = defineProps({
  size: {
    type: String,
    default: "small",
  },
});
</script>
<template>
  <svg
    class="checkmark icon"
    :class="props.size"
    viewBox="0 0 298 316"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 127.204L113.422 257L273 47L113.422 198.224L25 127.204Z"
      stroke="black"
    />
  </svg>
</template>
<style>
.checkmark {
  aspect-ratio: 1/1;
  fill: rgb(116, 165, 18);
}
</style>
