import { defineConfig } from "vite";
import { compression } from 'vite-plugin-compression2'
import react from "@vitejs/plugin-react";
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        compression(
            {
                include: [/\.(js|css|html|json|svg)$/],
                deleteOriginalAssets: true
            }
        )
    ],
    build: {
        // ...
        minify: true,
        sourcemap: false
    },
});
