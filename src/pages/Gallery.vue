<template>
  <Layout>
    <h1>Some of my work</h1>
    <main class="gallery-container">
      <GalleryCard
        v-for="entry in $page.allGalleryEntry.edges"
        :key="entry.node.id"
        :entry="entry.node"
      />
    </main>
  </Layout>
</template>

<page-query>
query {
  allGalleryEntry {
    edges {
      node {
        id
        description
        image
        date (format: "MM/DD/YYYY")
        title
      }
    }
  }
}
</page-query>

<script>
import GalleryCard from "~/components/GalleryCard";

export default {
  components: {
    GalleryCard,
  },
};
</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (min-width: 50rem) {
  .gallery-container {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }
}
</style>