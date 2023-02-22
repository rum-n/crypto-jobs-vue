<script lang="ts">
import { RouterLink } from "vue-router";

export default {
  name: "Nav",
  data() {
    return {
      showMobileMenu: false,
      savedJobs: JSON.parse(localStorage.getItem("savedJobs") || "[]").length,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
  watch: {
    savedJobs(oldNumber, newNumber) {
      this.savedJobs = newNumber;
    },
  },
};
</script>

<template>
  <div class="nav-wrapper">
    <div class="logo"><RouterLink to="/">Web3 Gigs</RouterLink></div>
    <svg
      class="hamburger"
      @click="showMenu()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        fill="#fff"
        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
      />
    </svg>
    <div class="nav-menu">
      <div
        class="nav-content"
        :class="showMobileMenu ? 'open-menu' : 'closed-menu'"
      >
        <ul class="nav-items">
          <li>
            <RouterLink active-class="active" to="companies">
              Companies
            </RouterLink>
          </li>
          <li>Newsletter</li>
          <li>Learn</li>
          <li>
            <RouterLink active-class="active" to="saved">
              Saved Jobs<span
                >{{ savedJobs ? `(${savedJobs})` : "" }}
              </span></RouterLink
            >
          </li>
        </ul>
        <button class="btn">Post a Job</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: space-between;
}
.nav-items li {
  padding: 0 20px;
  cursor: pointer;
  transition: 0.3s;
}

.nav-items li:hover {
  color: #c6de41;
  transition: 0.3s;
}

.active {
  color: #c6de41;
}

.hamburger {
  display: none;
}
.nav-wrapper {
  height: 4rem;
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
  justify-content: flex-end;
  width: 50%;
}
.btn {
  background-color: #c6de41;
  min-width: 7.5rem;
  color: #153b44;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 1rem;
}
.btn:hover {
  background-color: #2d6e7e;
  color: #c6de41;
  transition: 0.3s;
}

@media screen and (max-width: 768px) {
  .nav-menu {
    position: absolute;
    width: 100%;
    right: 0;
    top: 0;
  }

  .btn {
    margin-left: 0;
  }

  .open-menu {
    opacity: 1;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    background-color: #153b44;
    transition: all 0.2s ease-out;
    width: 100%;
    height: 10rem;
    padding: 2rem 0;
  }
  .nav-items {
    flex-direction: column;
  }
  .nav-items li {
    margin-bottom: 0.5rem;
  }
  .hamburger {
    display: block;
    position: absolute;
    padding: 0 10px 10px 0;
    width: 1.5rem;
    cursor: pointer;
    margin-top: 2rem;
    margin-right: 2rem;
    z-index: 200;
    top: 0;
    right: 0;
  }
}
</style>
