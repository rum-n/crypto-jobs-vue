<script lang="ts">
export default {
  name: "JobList",
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
};
</script>

<template>
  <div class="list-wrapper">
    <div class="job-listing" v-for="item of jobsList">
      <div class="job-listing-header">
        <h3>{{ item.title }}</h3>
        <p>{{ item.datePosted }}</p>
      </div>
      <p>{{ item.company }}</p>
      <div class="job-details">
        <p>Location: {{ item.location }}</p>
        <p>Type: {{ item.type }}</p>
        <p>Salary: {{ item.salary }}</p>
      </div>
      <div class="tags">
        <span class="tag" v-for="tag of item.tags">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-wrapper {
  width: 48%;
  margin-top: 2rem;
}
.job-listing-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.job-listing p {
  margin: 0;
  padding: 0;
}

.tags {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.tag {
  background-color: #2d6e7e;
  color: #c6de41;
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}
.job-listing {
  border: 1px solid #2d6e7e;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.job-listing:hover {
  background-color: #153b44;
  color: #fff;
}

.job-listing h3 {
  margin: 0;
  padding: 0;
}

.job-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}
</style>
