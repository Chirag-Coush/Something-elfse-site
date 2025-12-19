import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "decap-admin-rewrite",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url) return next();

          if (req.url === "/admin") {
            res.statusCode = 302;
            res.setHeader("Location", "/admin/");
            res.end();
            return;
          }

          if (req.url === "/admin/") {
            req.url = "/admin/index.html";
          }

          next();
        });
      },
    },
  ],
});
