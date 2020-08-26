<template>
  <footer>
    <SocialLinks />
    <nav>
      <g-link to="/contact/">Contact</g-link>
      <g-link to="/gallery/">Gallery</g-link>
      <g-link to="/about/">About</g-link>
    </nav>
    <!-- <Address /> -->
    <p class="copyright">
      &copy; {{new Date().getFullYear().toString()}}
      <g-link to="/">{{$static.metadata.siteName}}</g-link>
    </p>
  </footer>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
import SocialLinks from "../components/SocialLinks";
import Address from "../components/Address";

export default {
  components: {
    SocialLinks,
    Address,
  },
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.copyright {
  text-align: center;
}
.copyright a {
  color: slategray;
}
</style>