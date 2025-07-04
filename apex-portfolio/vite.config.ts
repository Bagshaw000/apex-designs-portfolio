//import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

import path from "path"

export default defineConfig({
  plugins: [react(), ],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server:{
    host:true,
    port: 5173,
    watch: {
      usePolling:true
    },
  },
});

//  resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },