<script lang="ts">
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import JobList from "./components/JobList.vue";
import JobDetails from "./components/JobDetails.vue";

export default {
  components: {
    Nav,
    Header,
    JobList,
    JobDetails,
  },
};
</script>

<template>
  <Nav />
  <Header />
  <div class="content">
    <JobList />
    <JobDetails />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  margin: auto;
  width: 90%;
  justify-content: space-between;
}
</style>
