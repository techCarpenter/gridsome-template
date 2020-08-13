<template>
  <footer>
    <SocialLinks />
    <Address />
    <ul>
      <li>
        <g-link to="/contact/">Contact</g-link>
      </li>
      <li>
        <g-link to="/gallery/">Gallery</g-link>
      </li>
      <li>
        <g-link to="/about/">About Us</g-link>
      </li>
    </ul>
  </footer>
</template>

<script>
import SocialLinks from "../components/SocialLinks";
import Address from "../components/Address";

export default {
  components: {
    SocialLinks,
    Address
  },
};
</script>