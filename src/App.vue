<script lang="ts">
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import JobList from "./components/JobList.vue";
import JobDetails from "./components/JobDetails.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    Nav,
    Header,
    JobList,
    JobDetails,
    Footer,
  },
  methods: {},
};
</script>

<template>
  <Nav />
  <Header />
  <JobList />
  <Footer />
</template>

<style scoped></style>
