module.exports = {
  apps: [
    {
      name: "sqlearn-be-web",
      cwd: "sultan/backend-web/",
      script: "./server.js",
      watch: true,
      watch_delay: 1000,
      ignore_watch: ["node_modules", "uploads"],
    },
    {
      name: "sqlearn-be-assessment",
      cwd: "backend-assessment/",
      script: "./server.js",
      watch: true,
      watch_delay: 1000,
      ignore_watch: ["node_modules"],
    },
    {
      name: "sqlearn-fe",
      cwd: "ilham/frontend-web/",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 5000",
      watch: true,
      watch_delay: 1000,
      ignore_watch: ["node_modules"],
    },
  ],
};
