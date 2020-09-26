<template>
  <Layout>
    <h1>Services</h1>
    <div v-if="false/*$page.services.edges.length > 0*/" class="service-container">
      <ServiceCard
        v-for="service in $page.services.edges"
        :key="service.node.id"
        :service="service.node"
      />
    </div>
  </Layout>
</template>
<!--
<page-query>
  query {
    services: allServiceEntry {
      edges {
        node {
          id
          price
          description
          name
          image
        }
      }
    }
  }
</page-query>
-->
<script>
import ServiceCard from "../components/ServiceCard";

export default {
  components: {
    ServiceCard,
  },
};
</script>