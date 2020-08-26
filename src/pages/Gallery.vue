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
  allGalleryEntry(sortBy: "date") {
    edges {
      node {
        id
        photo
        date
        description
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