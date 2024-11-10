import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/_layout.tsx", () => {
            route("", "routes/index.tsx", { index: true });
            route("products", "routes/products.tsx");
            route("product/:id", "routes/product.$id.tsx");
          });
          route("/admin", "routes/admin/_layout.tsx", () => {
            route("", "routes/admin/index.tsx", { index: true });
            route("products", "routes/admin/products/index.tsx", () => {
              route("new", "routes/admin/products/new-product.tsx");
              // route(":id/edit", "routes/admin/products/edit-product.$id.tsx");
            });

            route("categories", "routes/admin/categories/index.tsx", () => {
              // route("new", "routes/admin/categories/new-category.tsx");
              // route(":id/edit", "routes/admin/categories/edit-category.$id.tsx");
            });

            route("orders", "routes/admin/orders/index.tsx", () => {
              // route(":id", "routes/admin/orders/order.$id.tsx");
              // route(":id/edit", "routes/admin/orders/edit-order.$id.tsx");
            });

            route("customers", "routes/admin/customers/index.tsx", () => {
              // route(":id", "routes/admin/customers/customer.$id.tsx");
              // route(":id/edit", "routes/admin/customers/edit-customer.$id.tsx");
            });

            route("inventory", "routes/admin/inventory/index.tsx", () => {
              // route(":id", "routes/admin/inventory/inventory.$id.tsx");
              // route(":id/edit", "routes/admin/inventory/edit-inventory.$id.tsx");
            });
          });
        });
      },
    }),
    tsconfigPaths(),
  ],
});
