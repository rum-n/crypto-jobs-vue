<script lang="ts">
import { Job } from "../types/Job";
import { mapState, mapMutations } from "vuex";

export default {
  name: "JobDetails",
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      savedJobs: JSON.parse(localStorage.getItem("savedJobs") || "[]"),
      inSavedJobs:
        this.$router.currentRoute.value.name === "savedJobs" ? true : false,
      today: new Date(),
    };
  },
  computed: {
    ...mapState(["numberOfSavedJobs"]),
  },
  methods: {
    ...mapMutations(["increment", "decrement"]),
    handleSaveJob() {
      if (this.savedJobs.find((item: Job) => item.id === this.details.id)) {
        return;
      }
      this.savedJobs.push(this.details as never);
      localStorage.setItem("savedJobs", JSON.stringify(this.savedJobs));
      this.increment();
    },
    handleRemoveJob() {
      const index = this.savedJobs.findIndex(
        (item: Job) => item.id === this.details.id
      );
      this.savedJobs.splice(index, 1);
      localStorage.setItem("savedJobs", JSON.stringify(this.savedJobs));
      this.decrement();
      this.$router.go(0);
    },
    calculatePublishTime(publishedAt) {
      const pubDate = new Date(publishedAt);
      const today = new Date();
      const timeDiff = today.getTime() - pubDate.getTime();
      const dayDiff = timeDiff / (1000 * 3600 * 24);
      if (dayDiff < 1) {
        return "Today";
      } else if (dayDiff < 2) {
        return "Yesterday";
      } else {
        return `${Math.floor(dayDiff)} days ago`;
      }
    },
  },
};
</script>

<template>
  <div class="details-wrapper">
    <div class="header">
      <h2>{{ details.title }}</h2>
      <p>{{ calculatePublishTime(details.publishedAt) }}</p>
    </div>
    <h3>{{ details.company }}</h3>
    <div class="details">
      <p>Salary: {{ details.salary ? details.salary : "" }}</p>
      <p>Location: {{ details.location }}</p>
      <p>Type: {{ details.type }}</p>
    </div>
    <p>{{ details.description }}</p>
    <div class="buttons">
      <a :href="details.url" target="_blank"
        ><button class="apply-btn">Apply</button></a
      >
      <button
        v-if="!inSavedJobs"
        :class="savedJobs.find((item: Job)=>item.id === details.id) ? 'already-saved' : 'save-btn'"
        @click="handleSaveJob"
      >
        {{
          savedJobs.find((item: Job) => item.id === details.id)
            ? "Saved"
            : "Save for later"
        }}
      </button>
      <button class="remove-btn" v-if="inSavedJobs" @click="handleRemoveJob">
        Remove Job
      </button>
    </div>
  </div>
</template>

<style>
.details-wrapper {
  background-color: #153b44;
  width: 48%;
  padding: 1rem;
  border: 1px solid #2d6e7e;
  border-radius: 0.5rem;
  margin-top: 2rem;
}

.details-wrapper h2,
p {
  margin: 0;
  padding: 0;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.details {
  margin: 2rem 0;
}

.apply-btn {
  background-color: #c6de41;
  color: #153b44;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  margin-right: 1rem;
  cursor: pointer;
  transition: 0.3s;
}

.save-btn,
.already-saved,
.remove-btn {
  background-color: transparent;
  color: #c6de41;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #2d6e7e;
  cursor: pointer;
  transition: 0.3s;
}

.already-saved {
  background-color: #5d5d5d;
  color: #153b44;
  cursor: default;
}

.remove-btn {
  color: #f84848;
}

.apply-btn:hover,
.save-btn:hover,
.remove-btn:hover {
  box-shadow: 2px 2px 1px 1px #2d6e7e;
  transition: 0.3s;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 4rem;
}

@media screen and (max-width: 768px) {
  .details-wrapper {
    display: none;
  }
}
</style>
