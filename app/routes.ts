import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;

export default [
  {
    path: "/", // container route
    file: "routes/home.tsx", // HomePage component
    children: [
      {
        path: "typing-bliss",
        file: "routes/typing-bliss.tsx",
      },
    //   index("routes/home.tsx"),
    ],
  },
] satisfies RouteConfig;