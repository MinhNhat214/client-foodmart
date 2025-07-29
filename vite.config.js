// import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   // plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ⬅️ Mở comment
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
});
