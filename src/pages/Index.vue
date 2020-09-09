<template>
  <Layout>
    <div class="image-box">
      <g-image src="./../assets/images/annas-dog.jpg" alt="Anna's dog Cody!" />
    </div>
    <h1>{{$page.metadata.siteName}}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores</p>
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteName
  }
}
</page-query>

<style>
.image-box {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
