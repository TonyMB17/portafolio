# Portfolio Sci-Fi HUD

Portafolio frontend construido con React, Vite y Tailwind CSS.

Tematica visual: interfaz tactica sci-fi inspirada en videojuegos tipo Halo, sin usar logos, arte o recursos oficiales protegidos.

## Stack

- React
- Vite
- Tailwind CSS
- gh-pages (deploy)

## Comandos

- Desarrollo: npm run dev
- Build: npm run build
- Preview local de build: npm run preview
- Deploy a GitHub Pages: npm run deploy

## Personalizacion Rapida

Edita todos los datos principales en:

- src/data/portfolioData.js

Desde ese archivo puedes cambiar:

- Datos de perfil
- Texto de resumen
- Logs de la seccion sobre mi
- Proyectos
- Habilidades
- Canales de contacto

## Deploy en GitHub Pages

1. Crea el repositorio en GitHub (ejemplo: portafolio).
2. Sube el proyecto a la rama principal.
3. Verifica que en vite.config.js la propiedad base coincida con el nombre del repo:

- /portafolio/

4. Ejecuta:

- npm run deploy

5. En GitHub, activa Pages para publicar desde la rama gh-pages.

## Nota de base path

Si cambias el nombre del repositorio, actualiza la propiedad base en vite.config.js para evitar rutas rotas en produccion.
