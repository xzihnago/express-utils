import { defineConfig } from "tsup";

export default defineConfig({
  format: "esm",
  entry: ["src/**/*.ts", "!src/**/*.d.ts"],
  outDir: "lib",
  clean: true,
  minify: true,
  treeshake: true,
  splitting: false,
  dts: true,
});
