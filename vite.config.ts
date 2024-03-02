import { defineConfig } from "vite";
import path from "path";
import tsconfigPaths from 'vite-tsconfig-paths'
import reactRefresh from "@vitejs/plugin-react-refresh"; 




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});
