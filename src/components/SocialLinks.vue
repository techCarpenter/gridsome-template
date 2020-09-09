<template>
  <div class="social-links">
    <a :href="$static.json.facebook">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-facebook"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </a>
    <a :href="$static.json.instagram">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-instagram"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
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
  margin: 0.65rem;
}
.social-links a svg {
  height: 30px;
  width: 30px;
  stroke: var(--theme-color);
}
</style>