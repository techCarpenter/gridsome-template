<template>
  <div class="service-card">
    <g-image :src="service.image" />
    <h3>{{service.name}}</h3>
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