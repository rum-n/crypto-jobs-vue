<script lang="ts">
import Header from "./../components/Header.vue";
import JobList from "./../components/JobList.vue";
import JobDetails from "./../components/JobDetails.vue";
import axios from "axios";

export default {
  data() {
    return {
      jobsList: [],
    };
  },
  components: {
    Header,
    JobList,
    JobDetails,
  },
  methods: {},
  mounted() {
    axios.get(`https//web3gigs.onrender.com/api/jobs`).then((res) => {
      this.jobsList = res.data.data;
    });
  },
};
</script>

<template>
  <Header />
  <JobList :jobsList="jobsList" />
</template>

<style scoped></style>
