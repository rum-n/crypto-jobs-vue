<script lang="ts">
export default {
  name: "Footer",
};
</script>

<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-left">
        <div class="footer-logo">Remote Web3 Jobs</div>
      </div>
      <div class="footer-right">
        <p>Created by Rumen Manev</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  height: 4rem;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
}

.footer-left {
  font-size: 1.5rem;
  font-weight: 700;
  color: #c6de41;
  text-align: center;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #c6de41;
  text-align: center;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.footer-right {
  font-size: 1rem;
  font-weight: 700;
  color: #2d6e7e;
  text-align: center;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  display: flex;
  align-items: center;
}
</style>
