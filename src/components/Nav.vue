<script lang="ts">
export default {
  name: "Nav",
};
</script>

<template>
  <div class="nav-wrapper">
    <div class="logo">Remote Web3 Jobs</div>
    <div class="nav-menu">
      <ul>
        <li>Jobs</li>
        <li>Companies</li>
        <li>Learn</li>
        <li>Sign In</li>
      </ul>
      <button class="btn">Post a Job</button>
    </div>
  </div>
</template>

<style scoped>
.nav-wrapper {
  height: 4rem;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
}
.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #c6de41;
  text-align: center;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
.nav-menu {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  display: flex;
  align-items: center;
}

.nav-menu ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
}

.nav-menu ul li {
  cursor: pointer;
  transition: 0.3s;
}
.nav-menu ul li:hover {
  color: #c6de41;
  transition: 0.3s;
}
.btn {
  background-color: #c6de41;
  color: #153b44;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 2rem;
}
.btn:hover {
  background-color: #2d6e7e;
  color: #c6de41;
  transition: 0.3s;
}
</style>
