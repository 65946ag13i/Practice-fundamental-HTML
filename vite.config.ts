import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // 添加这行
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  // 明确指定根目录
  root: ".",
});
