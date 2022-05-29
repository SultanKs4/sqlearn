module.exports = {
  apps: [
    {
      name: "sqlearn-be-web",
      cwd: "sultan/backend-web/",
      script: "./server.js",
    },
    {
      name: "sqlearn-be-assessment",
      cwd: "backend-assessment/",
      script: "./server.js",
    },
    {
      name: "sqlearn-fe",
      cwd: "ilham/frontend-web/",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 5000",
    },
  ],
};
