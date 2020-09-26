<template>
  <Layout>
    <main v-html="$page.markdownPage.content"></main>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    markdownPage(id: $id) {
      content
      pageName
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
        title: this.$page.markdownPage.pageName
    };
  },
};
</script>