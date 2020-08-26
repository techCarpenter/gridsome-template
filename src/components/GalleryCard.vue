<template>
  <div class="gallery-card">
    <g-image :src="entry.photo.src" />
    <p>{{entry.description}}</p>
  </div>
</template>

<script>
export default {
  props: {
    entry: Object,
  },
};
</script>