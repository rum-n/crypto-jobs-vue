<script lang="ts">
import JobList from "../components/JobList.vue";
import { Job } from "../types/Job";

export default {
  data() {
    return {
      savedJobs: [] as Job[],
    };
  },
  components: {
    JobList,
  },
  created() {
    this.savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
  },
  methods: {},
};
</script>

<template>
  <h1 class="title">My saved jobs</h1>
  <JobList :jobsList="savedJobs" />
</template>

<style scoped>
.title {
  margin-left: 4rem;
}
</style>
