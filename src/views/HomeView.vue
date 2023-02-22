<script lang="ts">
import Header from "./../components/Header.vue";
import JobList from "./../components/JobList.vue";
import JobDetails from "./../components/JobDetails.vue";

export default {
  data() {
    return {
      jobsList: [
        {
          id: 1,
          title: "Senior Frontend Developer",
          company: "Company Name",
          location: "Remote",
          salary: "$100,000",
          type: "Full Time",
          tags: ["Frontend", "React", "Vue", "Angular"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem.",
          datePosted: "1d ago",
        },
        {
          id: 2,
          title: "Senior Frontend Developer",
          company: "Company Name",
          location: "Remote",
          salary: "$100,000",
          type: "Full Time",
          tags: ["Frontend", "React", "Vue", "Angular"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem.",
          datePosted: "5d ago",
        },
        {
          id: 3,
          title: "Senior Frontend Developer",
          company: "Company Name",
          location: "Remote",
          salary: "$100,000",
          type: "Full Time",
          tags: ["Frontend", "React", "Vue", "Angular"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem.",
          datePosted: "1w ago",
        },
        {
          id: 4,
          title: "Senior Frontend Developer",
          company: "Company Name",
          location: "Remote",
          salary: "$100,000",
          type: "Full Time",
          tags: ["Frontend", "React", "Vue", "Angular"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem.",
          datePosted: "5w ago",
        },
        {
          id: 5,
          title: "Senior Frontend Developer",
          company: "Company Name",
          location: "Remote",
          salary: "$100,000",
          type: "Full Time",
          tags: ["Frontend", "React", "Vue", "Angular"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem.",
          datePosted: "10d ago",
        },
        {
          id: 6,
          title: "Senior Frontend Developer",
          company: "Company Name",
          location: "Remote",
          salary: "$100,000",
          type: "Full Time",
          tags: ["Frontend", "React", "Vue", "Angular"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem.",
          datePosted: "15d ago",
        },
        {
          id: 7,
          title: "Senior Frontend Developer",
          company: "Company Name",
          location: "Remote",
          salary: "$100,000",
          type: "Full Time",
          tags: ["Frontend", "React", "Vue", "Angular"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem.",
          datePosted: "45d ago",
        },
        {
          id: 8,
          title: "Senior Frontend Developer",
          company: "Company Name",
          location: "Remote",
          salary: "$100,000",
          type: "Full Time",
          tags: ["Frontend", "React", "Vue", "Angular"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem.",
          datePosted: "3d ago",
        },
        {
          id: 9,
          title: "Senior Frontend Developer",
          company: "Company Name",
          location: "Remote",
          salary: "$100,000",
          type: "Full Time",
          tags: ["Frontend", "React", "Vue", "Angular"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nunc aliquet elit, vitae aliquam nunc nisl sit amet lorem.",
          datePosted: "2d ago",
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
};
</script>

<template>
  <Header />
  <JobList :jobsList="jobsList" />
</template>

<style scoped></style>
