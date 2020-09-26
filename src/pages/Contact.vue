<template>
  <Layout>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          id="gmap_canvas"
          :src="`https://maps.google.com/maps?q=${$page.json.address.address1} ${$page.json.address.address2}&t=&z=12&ie=UTF8&iwloc=&output=embed`"
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

<page-query>
query {
  json(id: "0") {
    address {
        address1
        address2
    }
  }
}
</page-query>

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