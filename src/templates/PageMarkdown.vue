<template>
  <Layout>
    <main class="page" v-html="$page.page.content"></main>
  </Layout>
</template>

<page-query>
  query Page ($id: ID!) {
    page: pageMarkdown(id: $id) {
      title
      content
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
        title: this.$page.page.title
    };
  },
};
</script>