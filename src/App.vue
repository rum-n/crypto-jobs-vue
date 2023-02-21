<script lang="ts">
import Nav from "./components/Nav.vue";
import Header from "./components/Header.vue";
import JobList from "./components/JobList.vue";
import JobDetails from "./components/JobDetails.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {
      jobSelected: {},
      listingClicked: false,
    };
  },
  components: {
    Nav,
    Header,
    JobList,
    JobDetails,
    Footer,
  },
  methods: {
    onJobSelected(job: any) {
      this.jobSelected = job;
      this.listingClicked = true;
    },
  },
};
</script>

<template>
  <Nav />
  <Header />
  <div class="content">
    <JobList @clicked="onJobSelected" />
    <JobDetails v-if="listingClicked" :details="jobSelected" />
  </div>
  <Footer />
</template>

<style scoped>
.content {
  display: flex;
  margin: auto;
  width: 90%;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
