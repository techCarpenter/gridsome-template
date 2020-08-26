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
  height: 200px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 200px;
}
.address-block {
  margin-top: 1em;
}
</style>