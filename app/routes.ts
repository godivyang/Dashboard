import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;

export default [
  {
    path: "/", // container route
    file: "routes/home.tsx", // HomePage component
    children: [
      {
        path: "ultimate-utility",
        file: "routes/ultimate-utility.tsx",
      },
      {
        path: "typing-bliss",
        file: "routes/typing-bliss.tsx",
      },
      {
        path: "tracking-budget",
        file: "routes/tracking-budget.tsx",
      },
      {
        path: "diet-planner",
        file: "routes/diet-planner.tsx",
      },
      {
        path: "/",
        file: "routes/dashboard.tsx",
      },
    //   index("routes/home.tsx"),
    ],
  },
] satisfies RouteConfig;