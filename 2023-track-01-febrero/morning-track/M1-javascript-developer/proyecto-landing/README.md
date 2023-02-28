**Documento HTML**

---

1. Explicación documento HTML5:
    - `<!DOCTYPE html>` Es la primera línea del documento y sirve para marcar el tipo de dicho documento.
    - El `<html>`es el elemento raíz de una página HTML. Además, es la etiqueta en la que podemos seleccionar el idioma a través del atributo lang.
    - El `<head>`contiene metainformación sobre la página HTML. Se usa para insertar diferentes metadatos, es decir información que no será renderizada por el navegador.
    - El `<body>`define el cuerpo del documento y es un contenedor de todos los contenidos visibles, como encabezados, párrafos, imágenes, hipervínculos, tablas, listas, etc.
2. Explicación etiquetas de Cabecera: Las etiquetas de cabecera o head no tienen representación o visualización en el contenido que renderiza el  navegador. Por ello son meta-información adicional.
    
    ```html
    	<!-- META -->
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="Thunderbolt ⚡️" content="Made with HTML & CSS">
      <meta name="author" content="Alberto Rivera Mérida">
      <meta name="description" content="Music Landing">
      <meta name="referrer" content="unsafe-url">
      <meta name="robots" content="index, follow">
      <!-- SPEED -->
      <link rel="preconnect" href="https://res.cloudinary.com">
      <link rel="dns-prefetch" href="https://res.cloudinary.com">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="dns-prefetch" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link rel="dns-prefetch" href="https://fonts.gstatic.com">
      <!-- LINK -->
      <link rel="me" href="#">
      <link rel="canonical" href="#">
      <link rel="icon" type="image/png" href="#" sizes="48x48">
      <!-- PERFORMANCE -->
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
      <link rel="preload" as="style" href="style.css">
      <link rel="stylesheet" href="style.css">
      <!-- TITLE -->
      <title>Thunderbolt ⚡️: Free Music Page</title>
    ```
    
    - **`<meta charset="UTF-8">`** establece la codificación de caracteres de la página en UTF-8.
    - **`<meta name="viewport" content="width=device-width, initial-scale=1">`** establece el ancho del viewport a la anchura del dispositivo y una escala inicial de 1.
    - **`<meta name="Thunderbolt ⚡️" content="Made with HTML & CSS">`** es una etiqueta personalizada para describir el contenido de la página.
    - **`<meta name="author" content="Alberto Rivera Mérida">`** establece el autor de la página.
    - **`<meta name="description" content="Music Landing">`** establece una descripción de la página para ser utilizada por motores de búsqueda.
    - **`<meta name="referrer" content="unsafe-url">`** establece la política de referer para la página.
    - **`<meta name="robots" content="index, follow">`** indica a los motores de búsqueda que indexen y sigan los enlaces de la página.
    - **`<link rel="preconnect" href="https://res.cloudinary.com">`** y **`<link rel="dns-prefetch" href="https://res.cloudinary.com">`** mejoran la velocidad al realizar una conexión y una búsqueda DNS previa al servidor especificado.
    - **`<link rel="me" href="#">`** establece un enlace relacionado con el autor o propietario del sitio web.
    - **`<link rel="canonical" href="#">`** establece una URL canónica para la página.
    - **`<link rel="icon" type="image/png" href="#" sizes="48x48">`** especifica una imagen que será utilizada como icono del sitio.
    - **`<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">`** carga una hoja de estilos externa para la fuente Roboto.
    - **`<link rel="preload" as="style" href="style.css">`** y **`<link rel="stylesheet" href="style.css">`** cargan una hoja de estilos para la página. La primera permite cargarla de forma anticipada para mejorar el rendimiento.
3. Explicación etiqueta body: define el cuerpo del documento y es un contenedor de todos los contenidos visibles, como encabezados, párrafos, imágenes, hipervínculos, tablas, listas, etc.
    1. **`header`**: El elemento de HTML Header **representa un grupo de ayudas introductorias o de navegación**. Puede contener algunos elementos de encabezado, así como también un logo, un formulario de búsqueda, un nombre de autor y otros componentes.
        - Creamos un **`div`**  contenedor para agrupar el contenido del header. De este modo podemos dotarle de la clase **`layout-container`** para estilar los bloques iguales
        - Dentro establecemos otro `**div**` contenedor que tendrá la posibilidad de ser **`layout-flex`** o `**layout-grid**` de manera específica.
            - **`anchor`** con el logotipo en **`svg`**
            - Un **`input`** y **`label`** para establecer nuestro menu de hamburguesa en mobile.
            - Establecemos un **`nav`** con tantos anchor como elementos de navegación tengamos.
    
    ```html
    <header class="rc-section-header">
        <div class="rc-layout-container">
          <div class="rc-section-header__layout rc-layout-flex">
            <!-- LOGO -->
            <a href="#" role="link" aria-label="#" class="rc-section-header--logo">
              <svg viewBox="0 0 338.044 338.045" height="18" width="18" role="img" aria-label="#">
                <path fill="#353535" d="M269.016,0h-99.652c-13.583,0-30.204,9.476-37.122,21.164L59.188,144.599c-6.917,11.688-1.513,21.164,12.07,21.164h73.511
                l-78.183,56.613c-11.007,7.962-8.911,14.423,4.672,14.423h43.061l-49.11,90.049c-6.506,11.919-3.123,14.777,7.551,6.371
                l125.996-99.26c10.664-8.406,8.593-15.469-4.648-15.769c-13.229-0.3-23.962-0.553-23.962-0.553l82.798-75.837
                c10.016-9.176,7.127-16.369-6.456-16.066l-76.342,1.696L276.499,17.666C285.95,7.908,282.599,0,269.016,0z" />
              </svg>
            </a>
            <!-- HAMBURGER -->
            <input type="checkbox" id="rc-section-header--menu-id">
            <label for="rc-section-header--menu-id" class="rc-section-header--menu-icon"></label>
            <!-- MENU -->
            <nav role="navigation" class="rc-section-header--nav rc-layout-flex">
              <a href="#" role="link" aria-label="#" class="rc-section-header--nav-link">Artist</a>
              <a href="#" role="link" aria-label="#" class="rc-section-header--nav-link">Songs</a>
              <a href="#" role="link" aria-label="#" class="rc-section-header--nav-link">About</a>
            </nav>
          </div>
        </div>
      </header>
    ```
    
    1. **`main`**: El elemento HTML <main> **representa el contenido principal del <body> de un documento o aplicación**. El área principal del contenido consiste en el contenido que está directamente relacionado, o se expande sobre el tema central de un documento o la funcionalidad central de una aplicación.
        1. Definimos tantas secciones como tengamos que representar en nuestra aplicación.
            - section hero → Representa la primera información de nuestro contenido.
                
                ```html
                <section class="rc-section-hero">
                      <div class="rc-layout-container">
                        <div class="rc-section-hero__layout rc-layout-grid rc-layout-grid-2">
                          <!-- COPYWRITING -->
                          <div>
                            <h1>Lorem Ipsum.</h1>
                            <p class="rc-text-intro">Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut
                              labore et dolore magna aliqua ullamco laboris nisi.</p>
                            <!-- CTA -->
                            <div class="rc-component-cta rc-layout-flex">
                              <a href="#" role="link" aria-label="#"
                                class="rc-component-button rc-component-button-normal rc-component-button-primary">Get Started for
                                Free</a>
                              <p class="rc-text-note"><small>Lorem ipsum.</small></p>
                            </div>
                          </div>
                          <!-- IMAGE -->
                          <img src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png" loading="lazy" alt="#"
                            class="rc-image-half-right">
                        </div>
                      </div>
                    </section>
                ```
                
            - section costumer → Representa la información de nuestros clientes.
                
                ```html
                <section class="rc-section-customer">
                      <div class="rc-layout-container">
                        <div class="rc-section-customer__layout rc-layout-flex">
                          <img src="fb" alt="#"
                            class="rc-section-customer--logo">
                          <img src="pinterest" alt="#"
                            class="rc-section-customer--logo">
                          <img src="stripe" alt="#"
                            class="rc-section-customer--logo">
                          <img src="dribble" alt="#"
                            class="rc-section-customer--logo">
                          <img src="behance" alt="#"
                            class="rc-section-customer--logo">
                        </div>
                      </div>
                    </section>
                ```
                
            - section feature → Representa la información sobre las características de nuestro producto.
                
                ```html
                <section class="rc-section-feature">
                      <div class="rc-layout-container">
                        <div class="rc-section-feature__layout rc-layout-grid rc-layout-grid-2">
                          <!-- IMAGE -->
                          <img src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png" alt="#"
                            class="rc-image-half-left">
                          <!-- FEATURE -->
                          <div>
                            <h2>Features</h2>
                            <p class="rc-text-intro">Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, qrcs nostrud exercitation ullamco nisi
                              eqrc.</p>
                            <ul class="rc-component-list rc-component-list-feature rc-layout-grid">
                              <li class="rc-component-list--item rc-component-list--item-check">Lorem ipsum.</li>
                              <li class="rc-component-list--item rc-component-list--item-check">Lorem ipsum.</li>
                              <li class="rc-component-list--item rc-component-list--item-check">Lorem ipsum.</li>
                              <li class="rc-component-list--item rc-component-list--item-check">Lorem ipsum.</li>
                            </ul>
                          </div>
                        </div>
                        <div class="rc-section-feature__layout rc-layout-grid rc-layout-grid-2">
                          <!-- FEATURE -->
                          <div>
                            <h2>Features</h2>
                            <p class="rc-text-intro">Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor
                              incididunt ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco nisi
                              equi.</p>
                            <ul class="rc-component-list rc-component-list-feature rc-layout-grid">
                              <li class="rc-component-list--item rc-component-list--item-check">Lorem ipsum.</li>
                              <li class="rc-component-list--item rc-component-list--item-check">Lorem ipsum.</li>
                              <li class="rc-component-list--item rc-component-list--item-check">Lorem ipsum.</li>
                              <li class="rc-component-list--item rc-component-list--item-check">Lorem ipsum.</li>
                            </ul>
                          </div>
                          <!-- IMAGE -->
                          <img src="https://liftlearning.com/wp-content/uploads/2020/09/default-image.png" alt="#"
                            class="ui-image-half-right">
                        </div>
                      </div>
                    </section>
                ```
                
            - section pricing → Representa la información sobre los precios de nuestras aplicación.
                
                ```html
                <section class="rc-section-pricing">
                      <div class="rc-layout-container">
                        <h2>Fair Prices</h2>
                        <p class="rc-text-intro">Lorem ipsum dolor sit amet.</p>
                        <!-- TOGGLE -->
                        <input type="radio" name="toggle" id="rc-component-toggle__monthly" checked>
                        <input type="radio" name="toggle" id="rc-component-toggle__yearly">
                        <div class="rc-component-toggle rc-layout-flex">
                          <label for="rc-component-toggle__monthly" class="rc-component-toggle--label">Billed Monthly</label>
                          <label for="rc-component-toggle__yearly" class="rc-component-toggle--label">Billed Yearly</label>
                        </div>
                        <p class="rc-text-note"><small>Save 15% with a yearly plan.</small></p>
                        <!-- PRICING -->
                        <div class="rc-section-pricing__layout rc-layout-grid rc-layout-grid-3">
                          <div class="rc-component-card rc-component-card--pricing">
                            <span><strong>Basic</strong></span>
                            <!-- AMOUNT -->
                            <div class="rc-component-card--pricing-price">
                              <span class="rc-component-card--pricing-amount rc-component-card--pricing-amount-1"></span>
                              <span>/</span>
                              <span>month</span>
                            </div>
                            <span><small>Perfect for early-stage startups.</small></span>
                            <!-- LIST -->
                            <ul class="rc-component-list rc-component-list--pricing rc-layout-grid">
                              <li class="rc-component-list--item rc-component-list--item-check">1 domain name.</li>
                              <li class="rc-component-list--item rc-component-list--item-check">HTML components.</li>
                              <li class="rc-component-list--item rc-component-list--item-cross">Priority support.</li>
                            </ul>
                            <!-- CTA -->
                            <a href="#" class="rc-component-button rc-component-button-big rc-component-button-secondary" role="link"
                              aria-label="#">Get Started</a>
                          </div>
                          <div class="rc-component-card rc-component-card--pricing">
                            <span><strong>Standard</strong></span>
                            <!-- AMOUNT -->
                            <div class="rc-component-card--pricing-price">
                              <span class="rc-component-card--pricing-amount rc-component-card--pricing-amount-2"></span>
                              <span>/</span>
                              <span>month</span>
                            </div>
                            <span><small>Perfect for early-stage startups.</small></span>
                            <!-- LIST -->
                            <ul class="rc-component-list rc-component-list--pricing rc-layout-grid">
                              <li class="rc-component-list--item rc-component-list--item-check">1 domain name.</li>
                              <li class="rc-component-list--item rc-component-list--item-check">HTML components.</li>
                              <li class="rc-component-list--item rc-component-list--item-check">Priority support.</li>
                            </ul>
                            <!-- CTA -->
                            <a href="#" class="rc-component-button rc-component-button-big rc-component-button-primary" role="link"
                              aria-label="#">Get Started</a>
                          </div>
                          <div class="rc-component-card rc-component-card--pricing">
                            <span><strong>Special</strong></span>
                            <!-- AMOUNT -->
                            <div class="rc-component-card--pricing-price">
                              <span class="rc-component-card--pricing-amount rc-component-card--pricing-amount-3"></span>
                              <span>/</span>
                              <span>month</span>
                            </div>
                            <span><small>Perfect for early-stage startups.</small></span>
                            <!-- LIST -->
                            <ul class="rc-component-list rc-component-list--pricing rc-layout-grid">
                              <li class="rc-component-list--item rc-component-list--item-check">1 domain name.</li>
                              <li class="rc-component-list--item rc-component-list--item-check">HTML components.</li>
                              <li class="rc-component-list--item rc-component-list--item-check">Priority support.</li>
                            </ul>
                            <!-- CTA -->
                            <a href="#" class="rc-component-button rc-component-button-big rc-component-button-secondary" role="link"
                              aria-label="#">Get Started</a>
                          </div>
                        </div>
                        <!-- NOTE -->
                        <p>Have questions? <a href="#" role="link" aria-label="#">Contact us</a>.</p>
                      </div>
                    </section>
                ```
                
            - section testimonial → Representa la información de los testimonios de algunos usuarios de la aplicación.
                
                ```html
                <section class="rc-section-testimonial">
                      <div class="rc-layout-container">
                        <div class="rc-section-testimonial__layout rc-layout-grid rc-layout-grid-2">
                          <div class="rc-layout-column-4">
                            <img src="avatar" alt="#" class="rc-section-testimonial--avatar">
                            <p class="rc-section-testimonial--quote rc-text-intro">&ldquo;Lorem ipsum dolor sit amet, consec adipiscing
                              elit, sed do eiusmod tempor incididunt labore dolore magna.&rdquo;</p>
                            <p class="rc-section-testimonial--author"><strong>Jane Doe</strong><br><small class="rc-text-note">CEO of
                                Company</small></p>
                          </div>
                          <div class="rc-layout-column-4">
                            <img src="avatar" alt="#" class="rc-section-testimonial--avatar">
                            <p class="rc-section-testimonial--quote rc-text-intro">&ldquo;Lorem ipsum dolor sit amet, consec adipiscing
                              elit, sed do eiusmod tempor incididunt labore dolore magna.&rdquo;</p>
                            <p class="rc-section-testimonial--author"><strong>Jane Doe</strong><br><small class="rc-text-note">CEO of
                                Company</small></p>
                          </div>
                        </div>
                      </div>
                    </section>
                ```
                
            - section close → Representa la información final en la que llamamos a un Call to Action.
                
                ```html
                <section class="rc-section-close">
                      <div class="rc-layout-container">
                        <div class="rc-layout-column-6 rc-layout-column-center">
                          <h2>Ready to start?</h2>
                          <p class="rc-text-intro">Lorem ipsum dolor sit amet consectetur.</p>
                          <!-- CTA -->
                          <div class="rc-component-cta rc-layout-flex">
                            <a href="#" role="link" aria-label="#"
                              class="rc-component-button rc-component-button-normal rc-component-button-primary">Get Started for
                              Free</a>
                            <p class="rc-text-note"><small>30 days free trial.</small></p>
                          </div>
                        </div>
                      </div>
                    </section>
                ```
                
    2. **`footer`**: El Elemento HTML Footer **representa un pie de página para el contenido de sección más cercano o el elemento raíz de sección**
     (p.e, su ancestro mas cercano <article> , <aside> , <nav> , <section> , <blockquote> , <body> , <details> , <fieldset> , <figure> , <td> ).
    
    ```html
    <footer class="rc-section-footer">
        <div class="rc-layout-container">
          <div class="rc-section-footer__layout rc-layout-flex">
            <!-- COPYRIGHT -->
            <p class="rc-section-footer--copyright rc-text-note"><small>&copy; 2023 Rock{the code}</small></p>
            <!-- MENU -->
            <a href="#" role="link" aria-label="#">
              <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="#AEAEAE" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" role="img" aria-label="#">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" role="link" aria-label="#">
              <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="#AEAEAE" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" role="img" aria-label="#">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
              </svg>
            </a>
            <a href="#" role="link" aria-label="#">
              <svg viewBox="0 0 24 24" height="16" width="16" fill="none" stroke="#AEAEAE" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" role="img" aria-label="#">
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    ```
    
    **Estilos**
    
    ---
    
    En nuestros estilos vamos a establecer un orden que sirva como referencia en todos nuestros proyectos. Para ello tendremos el siguiente orden:
    
    1. Definición de variables.
        1. Colors → Marcamos la paletta de colores con la que vamos a trabajar.
            1. Palette
            2. Background Color
            3. Border Color
            4. Typhography Color
            
            ```css
            	--rc-color-brand: #353535;
            
              /* COLOR PALETTE */
            
              --rc-color-n-000: #fff;
              --rc-color-n-050: #f5f5f5;
              --rc-color-n-100: #ebebeb;
              --rc-color-n-300: #aeaeae;
              --rc-color-n-500: #353535;
              --rc-color-n-700: #282828;
              --rc-color-n-900: #1a1a1a;
            
              /* BACKGROUND COLOR */
              
              --rc-color-background-primary  : var(--rc-color-n-000);
              --rc-color-background-secondary: var(--rc-color-n-050);
              --rc-color-background-tertiary : var(--rc-color-n-100);
            
              /* BORDER COLOR */
            
              --rc-color-border: var(--rc-color-n-100);
            
              /* TYPOGRAPHY COLOR */
            
              --rc-color-typography-heading: var(--rc-color-n-500);
              --rc-color-typography-body   : var(--rc-color-n-900);
              --rc-color-typography-note   : var(--rc-color-n-300);
              --rc-color-typography-button : var(--rc-color-n-000);
            ```
            
        2. Typography → Estilos específicos asociados a la font
            1. Fuente
            2. Tamaños
            3. Line Height
            4. Margins
            
            ```css
            	--rc-typography-typeface: "Roboto", sans-serif;
            
              /* FONT SIZE */
            
              --rc-typography-h1: 1.9375rem;
              --rc-typography-h2: 1.5625rem;
              --rc-typography-h3: 1.25rem;
              --rc-typography-p : 1rem;
              --rc-typography-s : .8125rem;
            
              /* LEADING */
            
              --rc-typography-h1-leading: 1.2;
              --rc-typography-h2-leading: 1.2;
              --rc-typography-p-leading : 1.5;
            
              /* MARGIN */
            
              --rc-typography-margin-heading: .75rem;
              --rc-typography-margin-body   : 1.125rem;
            ```
            
        3. Layout → Tamaños de nuestros elementos que son comunes
            1. grid
            2. gaps & padings - gutter
            3. gaps specifics
            
            ```css
            	--rc-layout-container: 1.25rem;
              --rc-layout-grid     : 3.625rem;
              --rc-layout-gutter   : 1rem;
            
              /* GAP */
              
              --rc-gap-header     : 1rem;
              --rc-gap-cta        : .75rem;
              --rc-gap-hero       : 2rem;
              --rc-gap-customer   : 2rem;
              --rc-gap-feature    : 2rem;
              --rc-gap-card       : 1.25rem;
              --rc-gap-pricing    : 2rem;
              --rc-gap-testimonial: 3rem;
            
              /* BORDER RADIUS */
              
              --rc-radius-avatar: 5rem;
              --rc-radius-button: 5rem;
              --rc-radius-card  : .5rem;
            ```
            
    2. Foundation → Son los estilos genéricos de nuestro documento **`html`** y el **`body`**
    
    ```css
    html { box-sizing: border-box; }
    
    *,
    *:before,
    *:after { box-sizing: inherit; }
    
    body {
      background-color: var(--rc-color-background-primary);
      color: var(--rc-color-typography-body);
      font-family: var(--rc-typography-typeface);
      font-feature-settings: "liga", "kern";
      font-size: var(--rc-typography-p);
      font-weight: 400;
      line-height: var(--rc-typography-p-leading);
      margin: 0 auto;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }
    ```
    
    - La primera regla establece el "box-sizing" en "border-box" para el elemento HTML, lo que significa que el ancho y alto de un elemento incluirán tanto su contenido como su borde y relleno.
    - La segunda regla establece el "box-sizing" en "inherit" para todos los elementos (*) y sus pseudo-elementos (:before y :after), lo que significa que heredarán el valor de "box-sizing" de su elemento padre.
    - La tercera regla establece los estilos para el elemento body, incluyendo el color de fondo, el tipo de letra, el tamaño de la fuente, la altura de línea, la margen, etc. Estos estilos están definidos en términos de variables CSS para permitir una fácil personalización.
    1. Typography → Establecemos los tamaños de todos los elementos que puedan contemplar un texto.
        
        ```css
        a {
          color: var(--rc-color-brand);
          text-decoration-color: var(--rc-color-typography-note);
        }
        
        h1,
        h2,
        p,
        ul { margin-top: 0; }
        
        h1,
        h2 {
          color: var(--rc-color-typography-heading);
          margin-bottom: var(--rc-typography-margin-heading);
        }
        
        h1 {
          font-size: var(--rc-typography-h1);
          line-height: var(--rc-typography-h1-leading);
        }
        
        h2 {
          font-size: var(--rc-typography-h2);
          line-height: var(--rc-typography-h2-leading);
        }
        
        p,
        ul { margin-bottom: var(--rc-typography-margin-body); }
        
        p:last-child,
        ul:last-child { margin-bottom: 0; }
        
        ul { padding-left: 0; }
        
        strong { font-weight: 700; }
        
        small { font-size: var(--rc-typography-s); }
        
        .rc-text-note {
          color: var(--rc-color-typography-note);
          line-height: 1;
        }
        ```
        
    2. Image → Tratamiento genérico de todas nuestras imgs o svgs.
        
        ```css
        img,
        svg {
          display: block;
          height: auto;
          margin: 0 auto;
          max-width: 100%;
        }
        ```
        
    3. Layout → Establecemos los elementos de layout y las propiedades básicas que tendrán estos. Para concretar cada uno tendrá los modificadores necesarios.
        
        ```css
        .rc-layout-container {
          padding-left: var(--rc-layout-container);
          padding-right: var(--rc-layout-container);
        }
        
        .rc-layout-flex,
        .rc-layout-grid {
          align-items: center;
          justify-content: center;
        }
        
        .rc-layout-flex { display: flex; }
        
        .rc-layout-grid { display: grid; }
        ```
        
    4. Component
        1. CTA → Denominado Call To Action | Suele estar compuesto de un anchor y un texto de acompañamiento pese que su visualización es como un botón
            
            ```css
            <div class="rc-component-cta rc-layout-flex">
              <a href="#" role="link" aria-label="#"
                 class="rc-component-button rc-component-button-normal rc-component-button-primary">
            			Get Started for Free
            	</a>
              <p class="rc-text-note"><small>Lorem ipsum.</small></p>
            </div>
            
            .rc-component-cta {
              flex-direction: column;
              row-gap: var(--rc-gap-cta);
            }
            ```
            
        2. Button → Es nuestro Botón en cada uno de ellos definimos los posibles combinaciones que puede tener o modificadores. Es decir podemos tener un elemento **`primary`** | **`secondary`** | **`normal`** | **`big`** …
            
            ```css
            .rc-component-button {
              border: .0625rem solid var(--rc-color-brand);
              border-radius: var(--rc-radius-button);
              display: block;
              font-weight: 700;
              line-height: 1;
              text-align: center;
              text-decoration: none;
            }
            
            .rc-component-button-primary {
              background-color: var(--rc-color-brand);
              color: var(--rc-color-typography-button);
            }
            
            .rc-component-button-secondary {
              background-color: var(--rc-color-background-primary);
              color: var(--rc-color-brand);
            }
            
            .rc-component-button-big,
            .rc-component-button-normal { padding: .75rem 1rem .875rem; }
            
            .rc-component-button-big { width: 100%; }
            
            .rc-component-button-normal { width: fit-content; }
            ```
            
        3. Toggle → el componente toggle suele usarse cuando tenemos dos opciones o queremos activar un campo.
            
            ```css
            input[name="toggle"] { display: none; }
            
            .rc-component-toggle {
              background-color: var(--rc-color-background-tertiary);
              border-radius: var(--rc-radius-button);
              color: var(--rc-color-typography-note);
              font-size: var(--rc-typography-s);
              font-weight: 700;
              line-height: 1;
              margin: var(--rc-gap-pricing) auto .5rem;
              padding: .25rem;
              width: max-content;
            }
            
            .rc-component-toggle--label {
              border-radius: var(--rc-radius-button);
              cursor: pointer;
              padding: .5rem .625rem;
            }
            
            #rc-component-toggle__monthly:checked ~
            div label[for=rc-component-toggle__monthly],
            #rc-component-toggle__yearly:checked ~
            div label[for=rc-component-toggle__yearly] {
              background-color: var(--rc-color-background-primary);
              color: var(--rc-color-typography-body);
            }
            ```
            
            - La primera regla oculta los elementos "**`input`**" con el atributo "**`name`**" igual a "**`toggle`**".
            - La segunda regla establece los estilos para un elemento con la clase "**`.rc-component-toggle`**", incluyendo el color de fondo, el tipo de letra, el tamaño de la fuente, la margen, etc. Estos estilos están definidos en términos de variables CSS para permitir una fácil personalización.
            - La tercera regla establece los estilos para un elemento con la clase "**`.rc-component-toggle--label`**", incluyendo la forma redondeada de los bordes, el cursor como una mano para hacer clic, y los márgenes internos.
            - La cuarta regla establece los estilos para el elemento de etiqueta que está seleccionado o marcado como "**`checked`**" y es un hermano inmediato de un elemento "**`div`**". El estilo cambia el color de fondo y el color del texto para indicar que la opción está seleccionada.
        4. Card → Es un elemento básico para mostrar información
            
            ```css
            .rc-component-card {
              border: .0625rem solid var(--rc-color-border);
              border-radius: var(--rc-radius-card);
              overflow: hidden;
              width: 100%;
            }
            ```
            
        5. List → Estilos genéricos para las listas de nuestra aplicación.
            
            ```css
            .rc-component-list {
              grid-template-columns: 1fr;
              row-gap: .75rem;
            }
            
            .rc-component-list--item {
              background-position: left center;
              background-repeat: no-repeat;
              background-size: 1.125rem;
              list-style: none;
              padding-left: 1.875rem;
            }
            
            .rc-component-list--item-check {
              background-image: url(check);
            }
            
            .rc-component-list--item-cross {
              background-image: url(check);
            }
            ```
            
    5. Section
        1. Header → Esta compuesto de dos bloques por lo que le dotaremos del mismo espaciado arriba y abajo | Separamos los dos principal blocks justificando el contenido.
            
            ```css
            .rc-section-header {
              padding-bottom: 1.25rem;
              padding-top: 1.25rem;
            }
            
            .rc-section-header__layout { justify-content: space-between; }
            ```
            
            - Logo → establecemos una profundidad superior de logotipo
            
            ```css
            .rc-section-header--logo { z-index: 1; }
            ```
            
            - Hamburger → Menu hamburguesa solo con CSS - tenemos que tener en cuenta que la carga del CSS mejora frente a realizar este tipo de elementos vía JS.
                
                ```css
                #rc-section-header--menu-id { display: none; }
                
                .rc-section-header--menu-icon {
                  cursor: pointer;
                  display: block;
                  height: 1.125rem;
                  padding-bottom: .25rem;
                  padding-top: .25rem;
                  position: relative;
                  width: 1.125rem;
                  z-index: 1;
                }
                
                .rc-section-header--menu-icon::before,
                .rc-section-header--menu-icon::after {
                  background: var(--rc-color-brand);
                  content: "";
                  height: .125rem;
                  left: 0;
                  position: absolute;
                  transition: all 250ms cubic-bezier(.785, .135, .15, .86);
                  width: 1.125rem;
                }
                
                .rc-section-header--menu-icon::before { top: .3125rem; }
                
                .rc-section-header--menu-icon::after { top: .6875rem; }
                
                #rc-section-header--menu-id:checked ~
                .rc-section-header--menu-icon::before {
                  transform: translateY(3px) rotate(135deg);
                }
                
                #rc-section-header--menu-id:checked ~
                .rc-section-header--menu-icon::after {
                  transform: translateY(-3px) rotate(45deg);
                }
                ```
                
                - La primera regla oculta un elemento con el id "`**#rc-section-header--menu-id**`".
                - La segunda regla establece los estilos para un elemento con la clase "**`.rc-section-header--menu-icon`**", incluyendo el cursor como una mano, la posición relativa y la altura y el ancho.
                - La tercera y cuarta regla establecen los estilos para los pseudo-elementos "**`::before`**" y "**`::afte`**r" del elemento "**`.rc-section-header--menu-icon`**". Estos pseudo-elementos crean las dos barras horizontales que representan el icono de menú.
                - La quinta y sexta regla establecen las transformaciones para los pseudo-elementos cuando el elemento con id "**`#rc-section-header--menu-id`**" está marcado como "**`checked`**". Estas transformaciones cambian la posición y el ángulo de las barras horizontales para simular el efecto de un menú abierto.
            - Menu → Elementos de navegación que componen nuestra navbar
            
            ```css
            rc-section-header--nav {
              background-color: var(--rc-color-background-primary);
              box-shadow: 0 .5rem 1rem rgba(0,0,0,.05);
              flex-direction: column;
              gap: var(--rc-gap-header);
              left: 0;
              opacity: 0;
              padding: 7.375rem var(--rc-layout-container) 5rem;
              position: absolute;
              right: 0;
              top: -1rem;
              transition: all 250ms cubic-bezier(.785, .135, .15, .86);
              visibility: hidden;
            }
            
            #rc-section-header--menu-id:checked ~
            .rc-section-header--nav {
              opacity: 1;
              top: 0;
              visibility: visible;
            }
            
            .rc-section-header--nav-link {
              font-size: var(--rc-typography-h3);
              padding: .5rem;
              text-decoration: none;
            }
            ```
            
            El código CSS define los estilos para un elemento con clase **`.rc-section-header--nav`**. Este elemento tiene un fondo de color **`var(--rc-color-background-primary)`**, una sombra de caja de **`0 .5rem 1rem rgba(0,0,0,.05)`**, dirección de flexión **`column`**, un espaciado **`var(--rc-gap-header)`**, ubicación **`absolute`** y una opacidad inicial de **`0`** y visibilidad inicial de **`hidden`**.
            
            Además, tiene una transición de todas las propiedades que dura 250 milisegundos y utiliza una curva de **`cubic-bezier(.785, .135, .15, .86)`**.
            
            Cuando un elemento con ID **`rc-section-header--menu-id`** está marcado (checked), el elemento con clase **`.rc-section-header--nav`** cambia su opacidad a **`1`** y su visibilidad a **`visible`**, y su posición **`top`** a **`0`**.
            
            Además, el código define un estilo para los enlaces dentro del elemento **`.rc-section-header--nav`**. Tienen un tamaño de fuente **`var(--rc-typography-h3)`**, un espaciado de **`.5rem`** y un estilo de decoración de texto sin subrayado (**`text-decoration: none`**).
            
            `**cubic-beizer**` 
            
            Esta regla de transición especifica una animación que aplica a todas las propiedades CSS del elemento que la tenga. Durará 250 milisegundos y seguirá una curva "cubic-bezier" con valores específicos de (.785, .135, .15, .86).
            
            Una curva "cubic-bezier" es una forma de describir la velocidad de una transición en CSS. Los cuatro valores que se proporcionan describen cómo se acelera o desacelera la transición.
            
            En este caso, la curva de transición especificada hará que la animación comience lenta y acelerada hasta alcanzar un pico y luego desacelera para finalizar suavemente. Esto crea un efecto suave y controlado para la animación.
            
        2. Hero → Es la primera información que tenemos dentro de nuestra aplicación.
            
            ```css
            .rc-section-hero {
              padding-bottom: 5rem;
              padding-top: 5rem;
              text-align: center;
            }
            
            .rc-section-hero__layout { row-gap: var(--rc-gap-hero); }
            ```
            
        3. Customer → Sección sobre nuestros colaboradores
            
            ```css
            .rc-section-customer__layout {
              flex-direction: column;
              row-gap: var(--rc-gap-customer);
            }
            
            .rc-section-customer--logo {
              height: 1.5rem;
              width: auto;
            }
            
            .rc-section-customer--logo-str { height: 1.75rem; }
              
            .rc-section-customer--logo-bhn { height: 1.375rem; }
            ```
            
        4. Feature → Explicación de las características de nuestro producto
            
            ```css
            .rc-section-feature {
              padding-bottom: 5rem;
              padding-top: 5rem;
            }
            
            .rc-section-feature__layout { row-gap: var(--rc-gap-feature); }
            
            .rc-section-feature__layout:first-of-type div {
              grid-row-start: 1;
            }
            
            .rc-section-feature__layout:last-of-type { margin-top: 5rem; }
            ```
            
        5. Pricing → Precio de nuestro producto
            
            ```css
            .rc-section-pricing {
              background-color: var(--rc-color-background-secondary);
              padding-bottom: 5rem;
              padding-top: 5rem;
              text-align: center;
            }
            
            .rc-section-pricing__layout {
              justify-content: initial;
              margin-bottom: var(--rc-gap-pricing);
              margin-top: var(--rc-gap-pricing);
              row-gap: var(--rc-gap-card);
            }
            
            /* CARD */
            
            .rc-component-card--pricing {
              background-color: var(--rc-color-background-primary);
              padding: 1.5rem 1.5rem 1.75rem;
              text-align: left;
            }
            
            .rc-component-card--pricing-price {
              line-height: 1;
              margin-bottom: 1.25rem;
              margin-top: 1.25rem;
            }
            
            .rc-component-card--pricing-amount {
              font-size: var(--rc-typography-h1);
              font-weight: 700;
            }
            
            /* AMOUNT */
            
            .rc-component-card--pricing-amount-1::before { content: "$5"; }
            
            #rc-component-toggle__yearly:checked ~ div
            .rc-component-card--pricing-amount-1::before { content: "$3"; }
            
            .rc-component-card--pricing-amount-2::before { content: "$15"; }
            
            #rc-component-toggle__yearly:checked ~ div
            .rc-component-card--pricing-amount-2::before { content: "$13"; }
            
            .rc-component-card--pricing-amount-3::before { content: "$25"; }
            
            #rc-component-toggle__yearly:checked ~ div
            .rc-component-card--pricing-amount-3::before { content: "$23"; }
            ```
            
        6. Testimonial → Personas que cuentan su experiencia con nuestro producto.
            
            ```css
            .rc-section-testimonial {
              padding-bottom: 5rem;
              padding-top: 5rem;
              text-align: center;
            }
            
            .rc-section-testimonial__layout {
              row-gap: var(--rc-gap-testimonial);
            }
            
            .rc-section-testimonial--avatar {
              border-radius: var(--rc-radius-avatar);
              height: 5rem;
              width: 5rem;
            }
            
            .rc-section-testimonial--quote {
              margin-bottom: 1rem;
              margin-top: 1rem;
            }
            
            .rc-section-testimonial--author { line-height: 1.25; }
            ```
            
        7. Close → Elemento de despedida en el que se vuelve a llamar a un CTA.
            
            ```css
            .rc-section-close {
              background-color: var(--rc-color-background-secondary);
              padding-bottom: 5rem;
              padding-top: 5rem;
              text-align: center;
            }
            ```
            
        8. Footer → Representa info adicional que no es imprescindible sobre la empresa pero nunca sobre el producto.
            
            ```css
            .rc-section-footer {
              padding-bottom: 1.25rem;
              padding-top: 1.25rem;
            }
            
            .rc-section-footer__layout {
              column-gap: var(--rc-layout-gutter);
            }
            
            .rc-section-footer--copyright {
              margin-bottom: 0;
              margin-right: auto;
            }
            ```
            
    6. Media
        1. 768px
            
            ```css
            @media screen and (min-width: 48rem) {
            
              /*------------------------------------------------------------
              VARIABLE
              ------------------------------------------------------------*/
              
              :root {
            
                /*----------------------------------------------------------
                |
                | TYPOGRAPHY
                |
                ----------------------------------------------------------*/
            
                /* FONT SIZE */
            
                --rc-typography-h1: 2.1875rem;
                --rc-typography-h2: 1.75rem;
                --rc-typography-p : 1.125rem;
                --rc-typography-s : .875rem;
            
                /* MARGIN */
            
                --rc-typography-margin-body: 1.25rem;
            
                /*----------------------------------------------------------
                |
                | LAYOUT
                |
                ----------------------------------------------------------*/
            
                --rc-layout-container: 4.25rem;
                --rc-layout-gutter   : 1.5rem;
            
                /* GAP */
            
                --rc-gap-header: 1.5rem;
                --rc-gap-card  : 1.5rem;
            
              }
            
              /*------------------------------------------------------------
              IMAGE
              ------------------------------------------------------------*/
            
              .rc-image-half-left {
                padding-right: var(--rc-layout-gutter);
              }
            
              .rc-image-half-right {
                padding-left: var(--rc-layout-gutter);
              }
            
              /*------------------------------------------------------------
              LAYOUT
              ------------------------------------------------------------*/
            
              .rc-layout-container,
              .rc-layout-column-center {
                margin-left: auto;
                margin-right: auto;
              }
            
              .rc-layout-grid-2,
              .rc-layout-grid-3 {
                column-gap: var(--rc-layout-gutter);
                grid-template-columns: repeat(2, 1fr);
                justify-items: center;
              }
            
              .rc-layout-grid-3 div:nth-of-type(3) {
                left: calc(50% + (var(--rc-layout-gutter) / 2));
                position: relative;
              }
            
              .rc-layout-column-4 {
                width: calc((var(--rc-layout-grid) * 4) +
                       (var(--rc-layout-gutter) * 3));
              }
            
              /*------------------------------------------------------------
              COMPONENT
              ------------------------------------------------------------*/
            
              /*------------------------------------------------------------
              |
              | LIST
              |
              ------------------------------------------------------------*/
            
              .rc-component-list--item {
                background-size: 1.25rem;
                padding-left: 2rem;
              }
            
              /*------------------------------------------------------------
              SECTION
              ------------------------------------------------------------*/
            
              /*------------------------------------------------------------
              |
              | HEADER
              |
              ------------------------------------------------------------*/
            
              .rc-section-header {
                padding-bottom: 0;
                padding-top: 2rem;
              }
            
              /* ICON */
            
              .rc-section-header--menu-icon { display: none; }
            
              /* NAV */
            
              .rc-section-header--nav {
                background-color: transparent;
                box-shadow: none;
                flex-direction: row;
                opacity: 1;
                padding: 0;
                position: static;
                visibility: visible;
              }
              
              .rc-section-header--nav-link {
                font-size: var(--rc-typography-p);
                padding: 0;
              }
            
              /*------------------------------------------------------------
              |
              | HERO
              |
              ------------------------------------------------------------*/
            
              .rc-section-hero { text-align: left; }
            
              .rc-section-hero .rc-component-cta { align-items: start; }
            
              /*------------------------------------------------------------
              |
              | CUSTOMER
              |
              ------------------------------------------------------------*/
            
              .rc-section-customer__layout {
                column-gap: var(--rc-gap-customer);
                flex-direction: row;
              }
              
              .rc-section-customer--logo {
                margin-left: 0;
                margin-right: 0;
              }
            
              /*------------------------------------------------------------
              |
              | FEATURE
              |
              ------------------------------------------------------------*/
            
              .rc-section-feature__layout:first-of-type div {
                grid-row-start: initial;
              }
            
              /*------------------------------------------------------------
              |
              | PRICING
              |
              ------------------------------------------------------------*/
            
              .rc-component-card--pricing { padding: 2rem 2rem 2.25rem; }
            
              /*------------------------------------------------------------
              |
              | FOOTER
              |
              ------------------------------------------------------------*/
            
              .rc-section-footer {
                padding-bottom: 2rem;
                padding-top: 2rem;
              }
              
            }
            ```
            
        2. 1024px
            
            ```css
            @media screen and (min-width: 64rem) {
            
              /*------------------------------------------------------------
              VARIABLE
              ------------------------------------------------------------*/
            
              :root {
            
                /*----------------------------------------------------------
                |
                | LAYOUT
                |
                ----------------------------------------------------------*/
            
                --rc-layout-container: 0;
              
              }
            
              /*------------------------------------------------------------
              LAYOUT
              ------------------------------------------------------------*/
              
              .rc-layout-container { width: 60rem; }
            
              .rc-layout-grid-3 { grid-template-columns: repeat(3, 1fr); }
            
              .rc-layout-grid-3 div:nth-of-type(3) { position: static; }
            
              /*------------------------------------------------------------
              SECTION
              ------------------------------------------------------------*/
            
              /*------------------------------------------------------------
              |
              | HERO
              |
              ------------------------------------------------------------*/
            
              .rc-section-hero .rc-component-cta {
                align-items: center;
                column-gap: var(--rc-gap-cta);
                flex-direction: row;
                justify-content: start;
              }
            
            }
            ```
            
        3. 1200px
            
            ```css
            @media screen and (min-width: 75rem) {
            
              /*------------------------------------------------------------
              VARIABLE
              ------------------------------------------------------------*/
            
              :root {
            
                /*----------------------------------------------------------
                |
                | TYPOGRAPHY
                |
                ----------------------------------------------------------*/
            
                /* FONT SIZE */
            
                --rc-typography-h1: 2.75rem;
                --rc-typography-h2: 2.1875rem;
                --rc-typography-h4: 1.4375rem;
            
                /* MARGIN */
            
                --rc-typography-margin-heading: 1rem;
                --rc-typography-margin-body   : 1.75rem;
            
                /*----------------------------------------------------------
                |
                | LAYOUT
                |
                ----------------------------------------------------------*/
            
                --rc-layout-grid  : 4rem;
                --rc-layout-gutter: 2rem;
            
                /* GAP */
            
                --rc-gap-header  : 2rem;
                --rc-gap-customer: 4rem;
                --rc-gap-card    : 2rem;
                --rc-gap-pricing : 3rem;
                
              }
            
              /*------------------------------------------------------------
              TYPOGRAPHY
              ------------------------------------------------------------*/
            
              .rc-text-intro { font-size: var(--rc-typography-h4); }
            
              /*------------------------------------------------------------
              LAYOUT
              ------------------------------------------------------------*/
              
              .rc-layout-container { width: 70rem; }
            
              /*------------------------------------------------------------
              COMPONENT
              ------------------------------------------------------------*/
            
              /*------------------------------------------------------------
              |
              | BUTTON
              |
              ------------------------------------------------------------*/
            
              .rc-component-button-big,
              .rc-component-button-normal {
                padding-bottom: 1.125rem;
                padding-top: 1rem;
              }
            
              /*------------------------------------------------------------
              SECTION
              ------------------------------------------------------------*/
            
              /*------------------------------------------------------------
              |
              | HEADER
              |
              ------------------------------------------------------------*/
            
              .rc-section-header { padding-top: 3rem; }
            
              /*------------------------------------------------------------
              |
              | HERO
              |
              ------------------------------------------------------------*/
            
              .rc-section-hero {
                padding-bottom: 7.5rem;
                padding-top: 7.5rem;
              }
            
              /*------------------------------------------------------------
              |
              | CUSTOMER
              |
              ------------------------------------------------------------*/
            
              .rc-section-customer--logo { height: 2rem; }
              
              .rc-section-customer--logo-str { height: 2.25rem; }
              
              .rc-section-customer--logo-bhn { height: 1.75rem; }
            
              /*------------------------------------------------------------
              |
              | FEATURE
              |
              ------------------------------------------------------------*/
            
              .rc-section-feature {
                padding-bottom: 7.5rem;
                padding-top: 7.5rem;
              }
            
              .rc-section-feature__layout:last-of-type {
                margin-top: 7.5rem;
              }
            
              /* LIST */
            
              .rc-component-list-feature {
                column-gap: var(--rc-layout-gutter);
                grid-template-columns: repeat(2, 1fr);
              }
            
              /*------------------------------------------------------------
              |
              | PRICING
              |
              ------------------------------------------------------------*/
            
              .rc-section-pricing {
                padding-bottom: 7.5rem;
                padding-top: 7.5rem;
              }
            
              .rc-component-card--pricing { padding: 3rem; }
            
              /*------------------------------------------------------------
              |
              | TESTIMONIAL
              |
              ------------------------------------------------------------*/
            
              .rc-section-testimonial {
                padding-bottom: 7.5rem;
                padding-top: 7.5rem;
              }
            
              /*------------------------------------------------------------
              |
              | CLOSE
              |
              ------------------------------------------------------------*/
            
              .rc-section-close {
                padding-bottom: 7.5rem;
                padding-top: 7.5rem;
              }
              
              /*------------------------------------------------------------
              |
              | FOOTER
              |
              ------------------------------------------------------------*/
            
              .rc-section-footer {
                padding-bottom: 3rem;
                padding-top: 3rem;
              }
            
            }
            ```
            
    
    **Assets para su subida a CLoudinary**
    
    ---
    
 