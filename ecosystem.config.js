module.exports = {
  apps: [
    {
      name: "sqlearn-be-web",
      cwd: "backend-web/",
      script: "./server.js",
      instances: "max",
      exec_mode: "cluster",
    },
    {
      name: "sqlearn-be-assessment",
      cwd: "backend-assessment/",
      script: "./server.js",
      instances: "max",
      exec_mode: "cluster",
    },
    {
      name: "sqlearn-fe",
      cwd: "frontend-web/",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 5000",
      instances: "-1",
      exec_mode: "cluster",
    },
  ],
};
