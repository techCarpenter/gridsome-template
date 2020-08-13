<template>
  <div class="layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default {
  components: {
    Header,
    Footer
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.nav__link {
  margin-left: 20px;
}
</style>
