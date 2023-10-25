import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "@/components/pages/ErrorPage";
import HomePage from "@/components/pages/HomePage";
import RegisterPage from "@/components/pages/RegisterPage";
import LoginPage from "@/components/pages/LoginPage";
import IndexListPage from "@/components/pages/IndexListPage";
import IntroListPage from "@/components/pages/IntroListPage";
import PostPage from "@/components/pages/PostPage";
const routes = [
  { path: "/", name: "HomePage", component: HomePage },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
    meta: { hideSidebar: true, hideHeader: true },
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
    meta: { hideSidebar: true, hideHeader: true },
  },
  { path: "/index/:Index", name: "IndexListPage", component: IndexListPage },
  { path: "/intro/:Intro", name: "IntroListPage", component: IntroListPage },
  { path: "/intro/:Intro/post/:Post", name: "PostPage", component: PostPage },
  { path: "/:catchAll(.*)", name: "ErrorPage", component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
