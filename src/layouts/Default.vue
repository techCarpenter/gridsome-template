<template>
  <div>
    <Header />
    <div class="layout">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.layout {
  max-width: 50rem;
  margin: 0 auto 3rem;
  padding: 0 0.65rem;
}
</style>
