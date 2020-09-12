<template>
  <Layout>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=3882%20Hall%20St.%20SW%20Grand%20Rapids%2C%20MI%2049534&t=&z=12&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
    <div class="address-block">
      <Address />
    </div>
  </Layout>
</template>

<script>
import Address from "./../components/Address";

export default {
  components: {
    Address,
  },
  metaInfo() {
    return {
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Anna's Dog Grooming provides quality grooming services at a great price",
        },
      ],
    };
  },
};
</script>

<style scoped>
iframe {
  width: 100%;
  height: 100%;
}
.mapouter {
  position: relative;
  text-align: right;
  height: 12.5rem;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 12.5rem;
}
.address-block {
  margin-top: 1rem;
}
@media (min-width: 50rem) {
  .mapouter {
    height: 25rem;
  }
  .gmap_canvas {
      height: 25rem;
  }
}
</style>