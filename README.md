# Portafolio · Jose Rene Guarachi

Landing page personal como AI Engineer y Full Stack. Next.js 16 (App Router), Tailwind CSS 4 y Motion para las animaciones.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Cómo editar el contenido

Todos los textos, proyectos, experiencia, stack y links están en `src/data/profile.ts`.
Para agregar un proyecto, copia uno de la lista `projects` y cambia sus datos. Si un link no existe todavía, deja `href` vacío y se muestra como texto.

El CV descargable está en `public/jose-guarachi-cv.pdf`; reemplázalo con el mismo nombre para actualizarlo.

## Design system

- Colores en `src/app/globals.css` como variables CSS (`--bg`, `--accent`, etc.), expuestas a Tailwind como `bg-bg`, `text-accent-text`, `border-line`...
- Oscuro por defecto. El botón de tema guarda la elección en `localStorage` y la aplica con `data-theme` en `<html>` antes de pintar (sin parpadeo).
- Dos ajustes de contraste respecto al documento original, para cumplir WCAG AA en texto pequeño:
  - `--secondary-text` (#A08CFF en oscuro) para enlaces: el violeta #7C5CFF queda en 4.4:1 sobre tinta.
  - `--accent-text` en claro es #5A7500 en lugar de #5E7A00 (4.46:1 → 4.8:1 sobre papel).

## Animaciones y accesibilidad

- Titular con revelado por palabra, línea tipo terminal, contadores, barra de progreso de lectura y línea de tiempo que se dibuja con el scroll.
- Efectos 3D: la ventana de editor del hero se inclina con el puntero y el scroll con capas a distinta profundidad; las tarjetas de proyectos y stack se inclinan hacia el cursor.
- Con "reducir movimiento" activo en el sistema, se desactivan inclinaciones y desplazamientos y quedan solo fundidos.
- Enlace "Saltar al contenido", landmarks, foco visible, menú móvil con `aria-expanded` y cierre con Escape.

## Publicarlo

Sube el repo a GitHub e impórtalo en vercel.com: queda publicado con una URL gratis.
