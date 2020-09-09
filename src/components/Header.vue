<template>
  <header>
    <div class="header-top">
      <g-link class="icon" to="/">
        Home
        <!-- <g-image src="~/favicon.ico" /> -->
      </g-link>
      <nav>
        <g-link class="nav-link" to="/services/">Services</g-link>
        <g-link class="nav-link" to="/contact/">Contact</g-link>
        <g-link class="nav-link" to="/about/">About</g-link>
      </nav>
    </div>
    <div class="call-to-action">
      Call for an appointment!
      <a
        :href="'tel:' + $static.json.phone"
      >{{`(${$static.json.phone.substring(0,3)}) ${$static.json.phone.substring(3,6)}-${$static.json.phone.substring(6)}`}}</a>
    </div>
  </header>
</template>

<static-query>
query {
  json(id: "0") {
    phone
  }
}
</static-query>

<style scoped>
.header-top {
  padding: 0.65rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--theme-color);
}
nav {
  display: flex;
  flex-direction: row;
}
.icon {
  display: flex;
}
.nav-link {
  padding: 0.32rem 0.5rem;
  margin-right: 0.65rem;
  border-radius: 0.4rem;
  background-color: var(--theme-color);
  color: var(--cream);
  text-decoration: none;
}
.nav-link:last-of-type {
  margin-right: 0;
}
.call-to-action {
  text-align: center;
  padding: 0.65rem;
  color: black;
}
</style>