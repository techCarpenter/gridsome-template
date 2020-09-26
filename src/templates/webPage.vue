<template>
  <Layout>
    <main v-html="$page.webPage.content"></main>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    webPage(id: $id) {
      content
      pageName
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
        title: this.$page.webPage.pageName
    };
  },
};
</script>