<template>
  <div class="service-card">
    <g-image :src="service.icon.src" />
    <h3>{{service.title}}</h3>
    <h5>{{service.price}}</h5>
    <p>{{service.description}}</p>
  </div>
</template>

<script>
export default {
  props: {
    service: Object,
  },
};
</script>