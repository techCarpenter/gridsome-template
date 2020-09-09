<template>
  <Layout>
    <main class="page" v-html="$page.pageMarkdown.content"></main>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    pageMarkdown(id: $id) {
      content
      fileInfo {
          name
        }
    }
  }
</page-query>

<script>
export default {
  metaInfo() {
    return {
        title: this.$page.pageMarkdown.fileInfo.name
    };
  },
};
</script>