import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

import TaskList from "./components/tasklist";
import TaskDetail from "./components/taskdetail";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: TaskList,
});

const taskRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/task/$id",
  component: TaskDetail,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  taskRoute,
]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}