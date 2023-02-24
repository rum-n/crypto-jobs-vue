<script lang="ts">
import Header from "./../components/Header.vue";
import JobList from "./../components/JobList.vue";
import JobDetails from "./../components/JobDetails.vue";
import axios from "axios";

export default {
  data() {
    return {
      jobsList: [
        {
          id: 1,
          title: "Senior Frontend Developer",
          company: "Frontend Inc.",
          location: "Remote",
          type: "Full Time",
          description:
            "We are looking for a senior frontend developer to join our team. You will be responsible for building the next generation of our frontend applications. You should have experience with Vue.js and be able to write clean, maintainable code.",
          url: "https://www.frontend.com/jobs/senior-frontend-developer",
          publishedAt: "2021-04-01T00:00:00Z",
          companyLogo:
            "https://res.cloudinary.com/mhmd/image/upload/v1564960395/image_rbuocq.svg",
        },
        {
          id: 2,
          title: "Junior Backend Developer",
          company: "Backend Inc.",
          location: "Remote",
          type: "Full Time",
          description:
            "We are looking for a junior backend developer to join our team. You will be responsible for building the next generation of our backend applications. You should have experience with Node.js and be able to write clean, maintainable code.",
          url: "https://www.backend.com/jobs/junior-backend-developer",
          publishedAt: "2021-04-02T00:00:00Z",
          companyLogo:
            "https://res.cloudinary.com/mhmd/image/upload/v1564960395/image_rbuocq.svg",
        },
        {
          id: 3,
          title: "Senior Backend Developer",
          company: "Backend Inc.",
          location: "Remote",
          type: "Full Time",
          description:
            "We are looking for a senior backend developer to join our team. You will be responsible for building the next generation of our backend applications. You should have experience with Node.js and be able to write clean, maintainable code.",
          url: "https://www.backend.com/jobs/senior-backend-developer",
          publishedAt: "2021-04-03T00:00:00Z",
          companyLogo:
            "https://res.cloudinary.com/mhmd/image/upload/v1564960395/image_rbuocq.svg",
        },
        {
          id: 4,
          title: "Junior Frontend Developer",
          company: "Frontend Inc.",
          location: "Remote",
          type: "Full Time",
          description:
            "We are looking for a senior backend developer to join our team. You will be responsible for building the next generation of our backend applications. You should have experience with Node.js and be able to write clean, maintainable code.",
          url: "https://www.backend.com/jobs/senior-backend-developer",
          publishedAt: "2021-04-03T00:00:00Z",
          companyLogo:
            "https://res.cloudinary.com/mhmd/image/upload/v1564960395/image_rbuocq.svg",
        },
      ],
    };
  },
  components: {
    Header,
    JobList,
    JobDetails,
  },
  methods: {},
  // mounted() {
  //   axios.get(`api/jobs`).then((res) => {
  //     this.jobsList = res.data.data;
  //   });
  // },
};
</script>

<template>
  <Header />
  <JobList :jobsList="jobsList" />
</template>

<style scoped></style>
