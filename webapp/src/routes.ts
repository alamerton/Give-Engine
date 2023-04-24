import Landing from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { FC } from "react";

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Landing,
  },
  {
    key: "sign-in-route",
    title: "SignIn",
    path: "/signin",
    enabled: true,
    component: SignIn,
  },
  {
    key: "register-route",
    title: "Register",
    path: "/register",
    enabled: true,
    component: Register,
  },
  {
    key: "criteria-selection-route",
    title: "Criteria Selection",
    path: "/criteria",
    enabled: true,
    component: Register,
  },
];
