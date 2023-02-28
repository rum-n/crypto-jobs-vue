import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CompaniesView from "../views/CompaniesView.vue";
import SavedJobsView from "../views/SavedJobsView.vue";
import TalentView from "../views/TalentView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/companies",
      name: "companies",
      component: CompaniesView,
    },
    {
      path: "/saved",
      name: "savedJobs",
      component: SavedJobsView,
    },
    {
      path: "/talent",
      name: "talent",
      component: TalentView,
    },
  ],
});

export default router;
