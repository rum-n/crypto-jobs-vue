<script lang="ts">
import JobDetails from "./JobDetails.vue";
import { Job } from "../types/Job";

export default {
  name: "JobList",
  components: {
    JobDetails,
  },
  props: {
    jobsList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      jobIdSelected: 0,
      jobSelected: {},
      savedJobs: [],
    };
  },
  created() {
    this.savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");
  },
  methods: {
    handleJobClick(item: Job) {
      this.jobIdSelected = item.id;
      this.jobSelected = item;
    },
    handleSaveJob(item: Job) {
      this.savedJobs.push(item as never);
      localStorage.setItem("savedJobs", JSON.stringify(this.savedJobs));
    },
  },
};
</script>

<template>
  <div class="content">
    <div class="list-wrapper">
      <div
        v-for="item of jobsList as Job[]"
        :class="
          jobIdSelected && item.id === jobIdSelected
            ? 'job-selected'
            : 'job-listing'
        "
        @click="handleJobClick(item)"
      >
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
        <!-- Mobile job description -->
        <div v-if="jobIdSelected === item.id" class="mobile-job-details">
          <p>{{ item.description }}</p>
          <div class="buttons">
            <button class="apply-btn">Apply</button>
            <button class="save-btn" @click="handleSaveJob(item)">
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
    <JobDetails v-if="jobIdSelected" :details="jobSelected" />
  </div>
</template>

<style>
.list-wrapper {
  width: 48%;
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-height: 100vh;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}

.list-wrapper::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.job-listing-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.job-listing p,
.job-selected p {
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

.job-selected {
  border: 1px solid #2d6e7e;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #153b44;
  color: #fff;
}

.job-listing:hover {
  background-color: #153b44;
  color: #fff;
}

.job-listing h3,
.job-selected h3 {
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
.content {
  display: flex;
  margin: auto;
  width: 90%;
  justify-content: space-between;
  align-items: flex-start;
}
.mobile-job-details {
  display: none;
}
@media screen and (max-width: 768px) {
  .mobile-job-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .list-wrapper {
    width: auto;
  }
}
</style>
