<template>
  <div class="social-links">
    <a :href="$static.json.facebook">
      <img class="icon" src="../assets/images/facebook.svg" height="40" width="40" />
    </a>
    <a :href="$static.json.instagram">
      <img class="icon" src="../assets/images/instagram.svg" height="40" width="40" />
    </a>
  </div>
</template>

<static-query>
query {
  json(id: "0") {
    facebook
    instagram
  }
}
</static-query>

<style scoped>
.social-links {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.social-links a {
  display: flex;
  margin: 10px;
}
</style>