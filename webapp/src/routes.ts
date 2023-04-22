import Landing from "./pages/Home";
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
    key: "home-route",
    title: "SignIn",
    path: "/signin",
    enabled: true,
    component: SignIn,
  },
];
