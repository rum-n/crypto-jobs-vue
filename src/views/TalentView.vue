<script lang="ts">
import JobList from "../components/JobList.vue";
import { Job } from "../types/Job";

export default {
  data() {
    return {};
  },
  components: {
    JobList,
  },
  created() {},
  methods: {},
};
</script>

<template>
  <div class="talent-wrapper">
    <h1>Hire some of the best talent in Web 3</h1>
    <p class="title">Coming soon...</p>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 1.5rem;
}
.talent-wrapper {
  margin: 2rem auto;
  width: 90%;
  text-align: center;
}
</style>
