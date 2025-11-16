# 🎨 Portafolio — Ragbert Polanco

Portafolio profesional moderno y responsivo que presenta proyectos, habilidades y contacto de forma elegante con glassmorphism, animaciones suaves y diseño oscuro.

## Descripción

**Portafolio** es una página web personal diseñada para showcasear proyectos y habilidades como desarrollador. Cuenta con una navegación sticky, animaciones fluidas, diseño glassmorphism con efectos visuales modernos, y enlaces directos a proyectos en GitHub y redes sociales.

La página está optimizada para desktop y móvil, utiliza gradientes oscuros, blur effects y se construyó con **HTML5**, **CSS3** puro y **JavaScript vanilla** (sin frameworks).

## Características

- ✅ **Navbar sticky** — Navegación fija con desplazamiento suave
- ✅ **Hero section** — Presentación con foto de perfil circular y efecto shadow
- ✅ **Glassmorphism** — Diseño moderno con transparencia y blur
- ✅ **Animaciones suaves** — Fade-in al cargar, hover effects
- ✅ **Grid responsivo** — Proyectos en grid auto-fit
- ✅ **Sección de contacto** — Enlaces a correo, GitHub, LinkedIn, Instagram con iconos
- ✅ **Iconos Feather** — SVG icons elegantes con feather-icons CDN
- ✅ **Tema oscuro** — Gradiente oscuro de fondo, colores claros
- ✅ **Scroll suave** — Desplazamiento smooth a secciones
- ✅ **Responsive design** — Mobile-first, ocultar nav en móvil

## Estructura del Proyecto

```
portfolio/
├── Index.html              (Página principal)
├── style.css               (Estilos CSS)
├── script.js               (JavaScript vanilla)
├── img/
│   └── yo.JPEG            (Foto de perfil)
└── README.md
```

## Archivos

### HTML

| Archivo | Descripción |
|---------|-----------|
| **Index.html** | Página única con todas las secciones: navbar, hero, sobre mí, proyectos, contacto |

### CSS

| Archivo | Descripción |
|---------|-----------|
| **style.css** | Estilos globales, navbar sticky, hero, cards, grid de proyectos, responsive |

### JavaScript

| Archivo | Descripción |
|---------|-----------|
| **script.js** | Scroll suave al hacer click en navegación, reemplazar iconos Feather |

### Imágenes

| Archivo | Descripción |
|---------|-----------|
| **img/yo.JPEG** | Foto de perfil circular en hero section |

## Secciones

### 1. **Navbar**
- Logo/nombre (Ragbert Polanco)
- Enlaces de navegación: Sobre mí, Proyectos, Contacto
- Sticky en el top
- Efecto blur y backdrop
- Responsive: oculta nav en móvil

### 2. **Hero**
- Foto de perfil circular con shadow cyan
- Título con nombre resaltado en cyan
- Subtítulo: "Desarrollador de Software • Aprendiendo cada día"
- Animación fade-in suave

### 3. **Sobre mí**
- Párrafo descriptivo sobre experiencia y pasión
- Card glassmorphism
- Animación fade-in con delay

### 4. **Proyectos**
- Grid responsivo con 3+ proyectos
- Cada proyecto es un link a GitHub
- Cards con hover effect (traducción y shadow aumentado)
- Proyectos incluyen:
  - **Personal Finance** — Gestión de finanzas con localStorage
  - **Simulación de Neuronas Cerebrales** — Redes neuronales con Brian2
  - **Clothing Store** — E-commerce de ropa

### 5. **Contacto**
- Enlaces con iconos Feather:
  - 📧 **Correo** — ragbertp@gmail.com
  - 🐙 **GitHub** — @Ragbert
  - 💼 **LinkedIn** — @ragbert-pdj
  - 📷 **Instagram** — @rfp.djesus

## Tecnologías

- **HTML5** — Estructura semántica
- **CSS3** — Flexbox, Grid, gradientes, backdrop-filter, animaciones keyframes
- **JavaScript Vanilla** — Scroll suave, manipulación de DOM
- **Feather Icons CDN** — Iconos SVG elegantes
- **Google Fonts** — Tipografía Inter

## Diseño Visual

### Colores Principales
- **Fondo:** Gradiente oscuro `linear-gradient(140deg, #0a0a0a, #101010, #0c0c0c)`
- **Texto:** #e5e5e5 (gris claro)
- **Acento:** #00C4FF (cyan/azul claro)
- **Fondo cards:** rgba(255, 255, 255, 0.03) con glassmorphism

### Efectos
- **Blur:** backdrop-filter: blur(8px) en navbar, blur(10px) en cards
- **Shadow:** Box-shadow con colores cyan para proyectos
- **Animaciones:** Fade-in 1-1.4s ease-in-out, translate 25px
- **Hover:** Color cyan, translateY(-7px), shadow aumentado

### Tipografía
- **Fuente:** Inter (Google Fonts)
- **Pesos:** 300, 400, 600, 800
- **Logo:** 28px, weight 800
- **Título:** 34px, weight 700

## Cómo Usar

### 1. **Abrir en navegador**
- Simplemente abre `Index.html` en tu navegador favorito
- Compatible con Chrome, Firefox, Safari, Edge

### 2. **Navegar**
- Haz clic en el logo o enlaces del navbar para desplazamiento suave
- Navega a secciones: "Sobre mí", "Proyectos", "Contacto"
- En móvil, la navbar se oculta (usa scroll normal)

### 3. **Ver Proyectos**
- Las tarjetas de proyecto son clickeables
- Abren el repositorio en GitHub en nueva pestaña
- Efecto hover: se eleva ligeramente y brilla más

### 4. **Contacto**
- Haz clic en correo para abrir cliente de correo
- GitHub, LinkedIn, Instagram abren en nueva pestaña
- Todos tienen iconos Feather ilustrativos

### 5. **Personalizar**
- Edita `Index.html` para cambiar nombre, descripción, proyectos
- Edita `style.css` para cambiar colores, fuentes, espaciados
- Reemplaza `img/yo.JPEG` con tu propia foto
- Actualiza enlaces en sección contacto

## Ejemplo de Estructura HTML

```html
<!-- Navbar -->
<header class="navbar">
    <h1 class="logo"> Ragbert Polanco </h1>
    <nav>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
    </nav>
</header>

<!-- Proyecto -->
<a href="https://github.com/Ragbert/personal-finance-app" class="proyecto">
    <h3> Personal Finance </h3>
    <p> Descripción del proyecto... </p>
</a>
```

## Animaciones CSS

```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(25px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Aplicado a hero (1.1s) y cards (1.4s) */
```

## JavaScript

### Scroll Suave
```javascript
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const seccion = document.querySelector(link.getAttribute("href"));
        seccion.scrollIntoView({ behavior: "smooth" });
    });
});
```

### Feather Icons
```javascript
<script src="https://unpkg.com/feather-icons"></script>
<script>
    feather.replace(); // Reemplaza <i data-feather="..."> con SVG
</script>
```

## Responsive Design

**Desktop (>600px):**
- Navbar visible con navegación
- Proyectos en grid 3 columnas
- Espaciado normal

**Móvil (<600px):**
- Navbar oculta
- Logo centrado
- Padding reducido (10px)
- Grid de proyectos en 1 columna
- Scroll manual a secciones

## Tamaños y Spacing

| Elemento | Tamaño |
|----------|--------|
| Logo | 28px |
| Título | 34px |
| Cards | padding 30px, margin 60px top |
| Gap proyectos | 25px |
| Foto perfil | 160x160px, circular |
| Border radius | 12-14px |

## Notas Técnicas

- **Sin dependencias:** Solo HTML, CSS, JavaScript vanilla
- **CDN:** Feather Icons y Google Fonts vía CDN (requiere internet)
- **Optimizado:** Animaciones usando `will-change` implícitamente (CSS nativo)
- **Performance:** Minimal; sin JavaScript heavy, scroll suave nativo del navegador
- **Accesibilidad:** Enlaces semánticos, alt text en imágenes, colores contrastados

## 🚀 Mejoras Futuras

- [ ] **Tema claro** — Toggle entre tema oscuro/claro con persistencia
- [ ] **Dark mode automático** — Según preferencia del sistema
- [ ] **Más proyectos** — Expandir galería de proyectos
- [ ] **Blog de artículos** — Publicar posts sobre desarrollo
- [ ] **Página de habilidades** — Listar tecnologías con niveles (HTML, CSS, JS, etc.)
- [ ] **Efectos 3D** — Three.js o similar para efectos avanzados
- [ ] **PWA** — Offline first, instalable en móvil
- [ ] **Animaciones avanzadas** — GSAP, Framer Motion (requeriría framework)
- [ ] **Formulario de contacto** — Con validación y backend
- [ ] **Analytics** — Google Analytics o similar
- [ ] **SEO mejorado** — Meta tags, Open Graph, Schema.org
- [ ] **Velocidad** — Minificar CSS/JS, optimizar imágenes
- [ ] **Accesibilidad (WCAG)** — Screen reader, keyboard navigation
- [ ] **Multiidioma** — i18n para ES, EN, FR, PT
- [ ] **Certificados y educación** — Sección de estudios completados
- [ ] **Experiencia laboral** — Timeline de trabajos/proyectos freelance
- [ ] **Testimonios** — Reviews de clientes o colegas
- [ ] **Newsletter** — Suscripción para actualizaciones
- [ ] **Dark/Light mode persistente** — localStorage para preferencia
- [ ] **Descargar CV** — Botón para descargar PDF

## Licencia

MIT License © 2024 Ragbert Polanco

Permiso libre para usar, copiar, modificar y distribuir este software bajo los términos de la licencia MIT.
