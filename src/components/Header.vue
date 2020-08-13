<template>
  <header>
    <div class="icon">
      <!-- <g-image src="~/favicon.png" /> -->
    </div>
    <nav class="nav">
      <g-link class="nav__link" to="/contact/">Contact</g-link>
      <g-link class="nav__link" to="/about/">About</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  json {
    email
  }
}
</static-query>