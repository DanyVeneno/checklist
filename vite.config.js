import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Importa el plugin oficial

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Añade el plugin aquí
  ],
});
