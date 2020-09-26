<template>
  <div class="gallery-card">
    <g-image :src="entry.image" />
    <h2>{{entry.title}}</h2>
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

<style scoped>
.gallery-card {
  max-width: 25rem;
  width: 100%;
  border-radius: 1rem;
  margin: 1.5rem 0;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gallery-card img {
  box-shadow: 0 6px 3px rgba(0, 0, 0, 0.2);
  width: 100%;
}
.gallery-card p {
  align-self: flex-start;
  margin: 0.75rem 0;
}
h2 {
  align-self: flex-start;
  margin-bottom: 0;
  margin-top: 1rem;
}
@media (min-width: 50rem) {
  .gallery-card {
    width: 47%;
  }
}
</style>