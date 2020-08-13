<template>
  <div>
    <a :href="$static.json.facebook">
      <img class="icon" src="../assets/images/facebook.svg" height="50" width="50" />
    </a>
    <a :href="$static.json.instagram">
      <img class="icon" src="../assets/images/instagram.svg" height="50" width="50" />
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