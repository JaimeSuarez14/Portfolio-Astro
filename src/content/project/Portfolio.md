---
title: 'Personalizacion - Guia'
subtitle: 'Portfolio para devs'
description: 'Este es un pequeño proyecto personal en el que desarrollé una plantilla de portfolio responsive hecha en Astro con Tailwind para desarrolladores que quieran mostrar sus proyectos y no tengan mucho tiempo. Además, es de código abierto por si alguien quiere crear algo, mejorarlo o simplemente adaptarlo según su preferencia.'
utils: ['Astro', 'Tailwind', 'React']
heroImage: /images/Portfolio/portfolio1.png
pubDate: 'Feb 09 2025'
---

# Portafolio Web Personal

## ¿Qué es este proyecto?

Este es mi **portafolio web**, un sitio desarrollado con **Astro** para mostrar mi experiencia, habilidades y proyectos realizados. En él encontrarás una presentación clara de quién soy, qué tecnologías manejo, y cómo puedes contactarme. La estructura está pensada para ser intuitiva y visualmente atractiva, adaptándose a cualquier dispositivo.


<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center h-auto">
  <div className="flex flex-col ">
   <div class="flex flex-col text-center">
    <img src="/images/Portfolio/portfolio1.png" alt="Panadería Astro 1" className="w-full mx-auto object-cover shadow-lg hover:scale-105 transform transition-all  p-1 rounded-lg"/>
    <span class="-mt-7 dark:text-paragraph-dark text-paragraph-light">Hero / Banner Days</span>
   </div>
   <div class="flex flex-col text-center">
     <img src="/images/Portfolio/portfolio2.png" alt="Panadería Astro 2" className=" w-full h-full object-cover shadow-lg hover:scale-105 transform transition-all  p-1 rounded-lg"/>
     <span class="-mt-7 dark:text-paragraph-dark text-paragraph-light">Managment Days</span>
  </div>
  </div>
  <div className="flex flex-col overflow-hidden min-h-full mx-auto
  ">
    <img src="/images/Portfolio/portfolio3.png" alt="Panadería Astro 3" className=" flex hover:scale-105 transform transition-all  flex-col items-center rounded-lg justify-center my-auto object-cover p-1 shadow-lg"/>
    <span class="-mt-7 text-nowrap text-center dark:text-paragraph-dark text-paragraph-light">Responsive Days</span>
  </div>
</div>

### ¿Por qué es importante este proyecto?

Este proyecto representa mi carta de presentación en línea. Me permite mostrar de manera profesional:

- Mis datos personales y de contacto.
- Mi stack tecnológico.
- Proyectos destacados.
- Experiencia laboral y académica.
- Redes sociales y enlaces relevantes.

Además, funciona como una demostración en vivo de mis conocimientos en desarrollo frontend y buenas prácticas en diseño responsivo.

## Tecnologías utilizadas

- **Astro**: Framework moderno para construir sitios rápidos y accesibles.
- **TailwindCSS**: Librería de utilidades para estilizar con rapidez y consistencia.
- **Markdown + MDX**: Para estructurar contenido de forma flexible.
- **Imágenes optimizadas**: Cargadas con `img` y efectos suaves para una navegación moderna.

## ¿Cómo adaptarlo?

Para personalizar este portafolio, modifica las siguientes variables en el archivo `.env` que deberas crear:


```env
NOMBRE_USUARIO_PORTFOLIO=
ALIAS_USUARIO_PORTFOLIO=
PRIMERA_CARACTERISTICA_PORTFOLIO=
SEGUNDA_CARACTERISTICA_PORTFOLIO=
EXPERIENCIA_PORTFOLIO=
GITHUB_USUARIO_PORTFOLIO=
LINKEDIN_USUARIO_PORTFOLIO=
SPOTIFY_USUARIO_PORTFOLIO=
TWITTER_USUARIO_PORTFOLIO=
```

## ¿Cómo mostrar tus propios proyectos?

Los proyectos que quieras mostrar deberán ser agregados en la carpeta `src/content/project/` en formato .md .

```
---
title: 'Proyecto 1'
subtitle: 'Portafolio Web'
description: 'Este proyecto corresponde a mi portafolio profesional como desarrollador web. Está construido con Astro e incluye herramientas modernas como TailwindCSS y otras tecnologías pensadas para una navegación fluida y una experiencia interactiva.'
utils: ['Astro', 'Tailwind']
heroImage: /images/Donas/Donas1.png
pubDate: 'Jul 09 2022'
deployed: true
url: 'https://tusitio.com/proyecto1'
urlGithub: 'https://github.com/tuusuario/proyecto1'
---
```

### Campos obligatorios:

- title: Título del proyecto.

- subtitle: Subtítulo o categoría.

- description: Breve explicación del proyecto.

- utils: Tecnologías utilizadas.

- heroImage: Imagen destacada del proyecto.

- pubDate: Fecha del proyecto.

- deployed: true si está online, false si no.

- url: Enlace al sitio si está publicado.
  
- urlGithub: Enlace al repositorio.

## Con estos pasos ya puedes comenzar a construir y personalizar tu propio portafolio para mostrar tu trabajo como desarrollador.