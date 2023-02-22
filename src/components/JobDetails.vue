<script lang="ts">
export default {
  name: "JobDetails",
  props: {
    details: {
      type: Object,
      required: true,
    },
    savedJobs: {
      type: Array,
      required: false,
    },
  },
  updated() {
    // (this.savedJobs as []) = JSON.parse(
    //   localStorage.getItem("savedJobs") || "[]"
    // );
    console.log(this.details);
  },
  methods: {
    handleSaveJob() {
      if (this.savedJobs) this.savedJobs.push(this.details);
      localStorage.setItem("savedJobs", JSON.stringify(this.details));
    },
  },
};
</script>

<template>
  <div class="details-wrapper">
    <div class="header">
      <h2>{{ details.title }}</h2>
      <p>{{ details.datePosted }}</p>
    </div>
    <h3>{{ details.company }}</h3>
    <div class="details">
      <p>Salary: {{ details.salary ? details.salary : "" }}</p>
      <p>Location: {{ details.location }}</p>
      <p>Type: {{ details.type }}</p>
    </div>

    <p>{{ details.description }}</p>
    <div class="buttons">
      <button class="apply-btn">Apply</button>
      <button class="save-btn" @click="handleSaveJob">Save for later</button>
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
  max-height: 100vh;
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

.save-btn {
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

.apply-btn:hover,
.save-btn:hover {
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
