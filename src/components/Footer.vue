<script lang="ts">
export default {
  name: "Footer",
};
</script>

<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-left">
        <div class="footer-logo">Web3 Gigs</div>
      </div>
      <div class="footer-right">
        <p>
          Created by
          <a href="https://rmanev.com" target="”_blank”">Rumen Manev</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  height: 4rem;
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
  font-size: 0.8rem;
  color: #2d6e7e;
  text-align: center;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  display: flex;
  align-items: center;
}

.footer-right a {
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .footer-wrapper {
    flex-direction: column;
  }
}
</style>
