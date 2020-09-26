<template>
  <Layout>
    <div class="image-box">
      <g-image src="./../../static/uploads/annas-dog.jpg" alt="Anna's dog Cody!" />
    </div>
    <h1>{{$page.metadata.siteName}}</h1>
    <p>Looking for a dog groomer who knows her stuff? You've come to the right place!</p>
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteName
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.metadata.siteName,
      meta: [
        {
          key: "description",
          name: "description",
          content:
            "Anna's Dog Grooming provides quality grooming services at a great price",
        },
      ],
    };
  },
};
</script>

<style>
.image-box {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
