<template>
  <header>
    <div class="header-top">
      <div class="header-width-control">
        <g-link class="icon" to="/">
          <g-image src="../../static/android-chrome-192x192.png" />
        </g-link>
        <nav>
          <g-link class="nav-link" to="/services/">Services</g-link>
          <g-link class="nav-link" to="/contact/">Contact</g-link>
          <g-link class="nav-link" to="/about/">About</g-link>
        </nav>
      </div>
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
  margin: 0;
  background-color: var(--theme-color);
  display: flex;
}
.header-width-control {
  max-width: 50rem;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.icon {
  display: flex;
  background-color: var(--accent);
  border-radius: 6px;
  padding: 5px;
}
.icon img {
  width: 30px;
  height: 30px;
  border-radius: 0;
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
@media (min-width: 40rem) {
  .icon img {
    width: 40px;
    height: 40px;
  }
}
</style>