# Portafolio de Anthony MB

Portafolio construido con React, Vite y Tailwind CSS, con una estética sci-fi inspirada en Halo.

## Desarrollo y validación

Requiere una versión de Node.js compatible con Vite 8 (22.12 o superior).

```sh
npm ci
npm run dev
npm run check
npm run preview
```

`check` ejecuta ESLint y genera la versión de producción. La vista previa se abre en `http://localhost:4173/portafolio/`.

## Contenido

- `src/data/portfolioData.js`: perfil, proyectos, tecnologías y canales de contacto.
- `src/sections/`: presentación y contenido de cada sección.
- `public/images/`: imágenes; preferir WebP optimizado.
- LinkedIn es el enlace al perfil profesional; el CV no se publica.

Todo archivo de `public/` se incluye en la publicación aunque no tenga un enlace visible. No colocar documentos con información personal en esta carpeta.

Las animaciones de entrada y los efectos del cursor respetan la preferencia de movimiento reducido. El fondo pausa sus animaciones cuando la pestaña está oculta.

## Publicar en GitHub Pages

1. Subir los cambios de código a la rama principal del repositorio `TonyMB17/portafolio`.
2. Ejecutar `npm run deploy` desde una sesión con acceso al repositorio. El comando valida el código, compila y publica `dist/` en la rama `gh-pages`.
3. En GitHub → Settings → Pages, seleccionar **Deploy from a branch**, rama **gh-pages**, carpeta **/ (root)**.
4. Revisar `https://tonymb17.github.io/portafolio/` después de completar el despliegue.

La base de producción en `vite.config.js` es `/portafolio/`. Debe cambiarse si se cambia el nombre del repositorio. No subir `node_modules/`, `dist/` ni archivos `.env`.

## Comprobaciones después de publicar

- Abrir la web en móvil y escritorio; comprobar navegación, imágenes y vista ampliada de los proyectos.
- Revisar los enlaces de proyectos que dependen de servicios externos.
- Comprobar con un envío real autorizado la recepción del formulario de FormSubmit y completar su activación si la solicita. Una compilación correcta no confirma la entrega de correos.
- Ejecutar `npm audit` periódicamente. Quedan avisos en dependencias de desarrollo de Tailwind 3 y gh-pages; resolverlos puede requerir una migración mayor. Evitar `npm audit fix --force` sin revisar y probar esa migración.
