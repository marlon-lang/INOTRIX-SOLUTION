// ===== CONFIGURACIÓN Y CONSTANTES =====
const CONFIG = {
    whatsapp: '573021087049',
    carrusel: {
        autoAdvance: true,
        interval: 5000
    }
};

// ===== DATOS DE PRODUCTOS COMPLETOS =====
const PRODUCTOS = [
    {
        id: 1,
        nombre: "Mouse LOGITECH G203 Prodigy Gaming Negro",
        categoria: "mouse",
        precio: 92000,
        color: "Blanco",
        descripcion: "Mouse G203 para juegos disponible en una variedad de vibrantes colores. Con la tecnología LIGHTSYNC, un sensor para juegos y un diseño clásico de 6 botones, animarás tu acción y tu espacio. 8.000 DPI MÁX. Lightsync Iluminación Rgb. Diseño Clásico. Con una sensibilidad ajustable de 200-8.000 dpi, puedes elegir el valor idóneo para tu estilo de juego. Utiliza el software Logitech G HUB para programar hasta 5 preajustes.",
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_651731-MLA93507874903_092025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_619080-MLA93091172840_092025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_978387-MLA93091677016_092025-F.webp",
        ],
        badge: "Logitech"
    },
    {
        id: 2,
        nombre: "Mouse LOGITECH G203 Lightsync Gaming Azul",
        categoria: "mouse",
        precio: 92000,
        descripcion: "Elige un color, combina tres, selecciona un divertido preajuste de animación o crea uno propio. ¡Tú decides! Incluso puedes sincronizar tu mouse con otros dispositivos y accesorios Logitech G LIGHTSYNC para lograr la combinación perfecta. Configura la iluminación como Muestra de pantalla para que se sincronice con la tuya. Configura el mouse para que reaccione a los cambios de color en juegos, películas, etc. Reproduce música, películas, juegos... prácticamente cualquier sonido: el G203 seguirá el ritmo con destellos de colores. Personaliza niveles y colores para dar a tus fiestas tu toque exclusivo.",
        imagenes: [
            "https://recursos.mps.com.co:9236/images/Productos/910-005792.jpg",
            "https://recursos.mps.com.co:9236/images/Productos/910-005792_1.jpg",
            "https://recursos.mps.com.co:9236/images/Productos/910-005792_2.jpg"
        ],
        badge: "Logitech"
    },
    {
        id: 3,
        nombre: "Diaema HS-810BT, Black",
        categoria: "accesorios",
        precio: 75000,
        descripcion: "Auriculares Bluetooth HS-810BT con altavoces de alta fidelidad, micrófono integrado, batería recargable de larga duración y diseño ergonómico. Compatibles con smartphones, tablets y PC. Alcance inalámbrico de hasta 10 m.",
        imagenes: [
            "https://recursos.mps.com.co:9236/images/Productos/31710029400.jpg",
            "https://recursos.mps.com.co:9236/images/Productos/31710029400_1.jpg",
            "https://recursos.mps.com.co:9236/images/Productos/31710029400_2.jpg",
        ],
        badge: "GENIUS"
    },
    {
        id: 4,
        nombre: "Diaoemas Headphones JBL Gaming Quantum 100 M2 Negros",
        categoria: "accesorios",
        precio: 129000,
        descripcion: "los auriculares JBL Quantum 100M2 te sitúan en el centro de la acción. Un sonido inmersivo y preciso que te permite apreciar todos los matices y sentir cada explosión, un micrófono vocal extraíble, y comodidad y ligereza gracias a las almohadillas elaboradas en tejido transpirable y espuma viscoelástica que garantizan una mayor comodidad incluso durante largas horas de uso. El micrófono vocal extraíble permite tener interacciones claras con varios jugadores. Además, estos auriculares son compatibles con todas las plataformas. Juega partidas inolvidables con los auriculares JBL Quantum 100M2.",
        imagenes: [
            "https://recursos.mps.com.co:9236/images/Productos/JBLQTUM100M2BLKAM.jpg",
            "https://recursos.mps.com.co:9236/images/Productos/JBLQTUM100M2BLKAM_1.jpg",
            "https://recursos.mps.com.co:9236/images/Productos/JBLQTUM100M2BLKAM_2.jpg"
        ],
        badge: "JBL"
    },
    {
        id: 5,
        nombre: "Audifonos JBL T500 Headphones Negros",
        categoria: "accesorios",
        precio: 84000,
        descripcion: "Audífonos JBL T500 con potente sonido Pure Bass, diseño ligero y acolchado para mayor comodidad. Cable plano antienredos y control integrado para manejar música y llamadas fácilmente.",
        imagenes: [
            "https://recursos.mps.com.co:9236/images/Productos/JBLT500BLKAM.jpg",
            "https://recursos.mps.com.co:9236/images/Productos/JBLT500BLKAM_1.jpg",
            "https://recursos.mps.com.co:9236/images/Productos/JBLT500BLKAM_2.jpg",
            "https://recursos.mps.com.co:9236/images/Productos/JBLT500BLKAM_3.jpg"
        ],
        badge: "JBL"
    },
    {
        id: 6,
        nombre: "Audifonos JBL T520 Headphones Blue",
        categoria: "accesorios",
        precio: 152000,
        descripcion: "Audífonos inalámbricos JBL T520BT con sonido Pure Bass, conexión Bluetooth 5.0 y batería de larga duración de hasta 57 horas. Diseño plegable, cómodo y moderno en color azul.",
        imagenes: [
            "https://recursos.mps.com.co:9236/images/Productos/JBLT520BTBLUAM.jpg",
            "https://recursos.mps.com.co:9236/images/Productos/JBLT520BTBLUAM_1.jpg",
            "https://recursos.mps.com.co:9236/images/Productos/JBLT520BTBLUAM_2.jpg",
            "https://recursos.mps.com.co:9236/images/Productos/JBLT520BTBLUAM_3.jpg"
        ],
        badge: "JBL"
    },
    {
        id: 7,
        nombre: "Auriculares JBL Tune 110 Negro",
        categoria: "accesorios",
        precio: 25000,
        descripcion: "Auriculares JBL Tune 110 con sonido JBL Pure Bass, diseño ergonómico y control integrado con micrófono. Perfectos para uso diario con una calidad de sonido excepcional.",
        imagenes: [
            "https://recursos.mps.com.co:9236/images/Productos/JBLT110BLKAM.jpg",
            "https://recursos.mps.com.co:9236/images/Productos/JBLT110BLKAM_1.jpg"
        ],
        badge: "JBL"
    },
    {
        id: 8,
        nombre: "TECLADO GAMING PRO SCORPION K7",
        categoria: "teclados",
        precio: 70000,
        descripcion: "El Teclado Gaming Pro Scorpion K7 combina estilo y rendimiento con retroiluminación RGB, teclas silenciosas de alta respuesta y diseño ergonómico. Perfecto para gamers que buscan comodidad, rapidez y una experiencia de juego envolvente.",
        imagenes: [
            "https://http2.mlstatic.com/D_Q_NP_861125-MLA92593815595_092025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_768390-MLA95674907776_102025-F.webp",
            "https://http2.mlstatic.com/D_Q_NP_613746-MLA92593580459_092025-F.webp",
            "https://http2.mlstatic.com/D_Q_NP_612517-MLA92830222469_092025-F.webp"
        ],
        badge: "GENIUS"
    },
    {
        id: 9,
        nombre: "Teclado Genius Scorpion K7 Plus",
        categoria: "teclados",
        precio: 75000,
        descripcion: "El Teclado Gaming Pro Scorpion K7 Plus ofrece un rendimiento superior para jugadores exigentes. Cuenta con retroiluminación RGB personalizable, teclas mecánicas de alta durabilidad, diseño ergonómico y base antideslizante. Ideal para sesiones de juego intensas con máxima precisión y comodidad.",
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_739175-MCO93068165906_092025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_833036-MCO90539903004_082025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_960730-MCO90540597366_082025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_680094-MCO90540626858_082025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_612253-MCO90540655854_082025-F.webp"
        ],
        badge: "GENIUS"
    },
    {
        id: 10,
        nombre: "STORM KL300",
        categoria: "accesorios",
        precio: 41000,
        descripcion: "Teclado retroiluminado RGB y mouse óptico de alta precisión. Diseño ergonómico, conexión USB plug & play y estilo moderno para tu setup gamer.",
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_625580-MCO93326330532_092025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_847702-MCO93326300554_092025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_809564-MCO93326310626_092025-F.webp",
        ],
        badge: "JERTECH"
    },
    {
        id: 11,
        nombre: "Gaming Mouse Pad GMS-X6",
        categoria: "accesorios",
        precio: 60000,
        descripcion: "Alfombrilla gamer de alta precisión con superficie antideslizante y bordes reforzados. Su base de goma garantiza estabilidad y control en cada movimiento. Ideal para sesiones intensas de juego.",
        imagenes: [
            "https://www.tecnologiamayorista.com/cdn/shop/products/GMS-X61.jpg?v=1681243451&width=720",
            "https://www.tecnologiamayorista.com/cdn/shop/products/GMS-X6-2.jpg?v=1681243451&width=720",
            "https://www.tecnologiamayorista.com/cdn/shop/products/GMS-X6-3.jpg?v=1681243451&width=720"
        ],
        badge: "PAD PARA MOUSE"
    },
    {
        id: 12,
        nombre: "Hub Usb 3.0 4 En 1 Con 4 Puertos E Interruptores De Alimenta",
        categoria: "accesorios",
        precio: 28000,
        descripcion: "Expande tus conexiones con 4 puertos USB 3.0 de alta velocidad. Cada puerto cuenta con interruptor individual de encendido, ideal para controlar dispositivos fácilmente. Diseño compacto, práctico y compatible con PC, laptop y más.",
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_751063-CBT82781065655_022025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_862427-CBT82781065659_022025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_751063-CBT82781065655_022025-F.webp",
            "https://http2.mlstatic.com/D_Q_NP_611436-CBT82781065657_022025-F.webp",

        ],
        badge: "PUETOS UBS"
    },
    {
        id: 13,
        nombre: "Audifonos Buetoohn Estereo Impermeables Casco Moto BT18 B2B",
        categoria: "accesorios",
        precio: 79900,
        descripcion: "Diseñados para casco de moto, ofrecen sonido estéreo claro y conexión Bluetooth estable. Resistentes al agua, con micrófono integrado y batería de larga duración para una comunicación segura y cómoda en tus recorridos.",
        imagenes: [
            "https://www.tecnologiamayorista.com/cdn/shop/files/BT18_11.jpg?v=1689706345&width=720",
            "https://www.tecnologiamayorista.com/cdn/shop/files/BT18_9.jpg?v=1689706345&width=720",
            "https://www.tecnologiamayorista.com/cdn/shop/files/BT18_12.jpg?v=1689706345&width=720",
            "https://www.tecnologiamayorista.com/cdn/shop/files/BT18_13.jpg?v=1689706345&width=720",
            "https://www.tecnologiamayorista.com/cdn/shop/files/BT18_13.webp?v=1689706345&width=720",
            "https://www.tecnologiamayorista.com/cdn/shop/files/BT18_14.webp?v=1689706345&width=720",
            ""
        ],
        badge: "INTERCOMUNICADOR"

    },
    {
        id: 14,
        nombre: "Multipuerto Usb Con Entrada MicroSD USB2.0TYPE-C 48 XL-5039 B2B",
        categoria: "accesorios",
        precio: 27999,
        descripcion: "Diseñados para casco de moto, ofrecen sonido estéreo claro y conexión Bluetooth estable. Resistentes al agua, con micrófono integrado y batería de larga duración para una comunicación segura y cómoda en tus recorridos.",
        imagenes: [
            "https://www.tecnologiamayorista.com/cdn/shop/files/MULTIPUERTO_XL-5039_1.webp?v=1750870981&width=720",
            "https://www.tecnologiamayorista.com/cdn/shop/files/MULTIPUERTO_XL-5039_1_30fca010-bec3-4cd5-b316-ea6033f89c5d.webp?v=1750870987&width=720",
            "https://www.tecnologiamayorista.com/cdn/shop/files/MULTIPUERTO_XL-5039_2.webp?v=1750870987&width=720",
            "https://www.tecnologiamayorista.com/cdn/shop/files/MULTIPUERTO_XL-5039_3.webp?v=1750870987&width=720",
        ],
        badge: "PUETOS UBS"

    },
    {
        id: 15,
        nombre: "Auriculares Gamer Sades Ps4 Vr Xbox Cel Nintendo Switch Spirits Violeta",
        categoria: "accesorios",
        precio: 50000,
        descripcion: "Compatibles con PS4, Xbox, Nintendo Switch, PC y celular. Ofrecen sonido envolvente, micrófono ajustable y diseño ergonómico con luces LED violeta. Comodidad y estilo para tus sesiones de juego.",
        imagenes: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_629418-MLU78047624953_072024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_934180-MLU78047223287_072024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_716650-MLU78047624971_072024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_758921-MLU78047624991_072024-F.webp",
        ],
        badge: "SADES"
    },
];

// ===== ESTADO GLOBAL =====
const Estado = {
    imagenActual: 0,
    productoActual: null,
    intervalosCarrusel: new Map()
};

// ===== UTILIDADES =====
const Utilidades = {
    /**
     * Formatea un número como precio en pesos colombianos
     */
    formatearPrecio: (precio) => {
        return `$${precio.toLocaleString('es-CO')}`;
    },

    /**
     * Normaliza texto para búsquedas (elimina acentos y convierte a minúsculas)
     */
    normalizarTexto: (texto) => {
        return texto.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    },

    /**
     * Genera mensaje de WhatsApp predefinido
     */
    generarMensajeWhatsApp: (producto) => {
        return `Hola InnoTrix, me interesa el ${encodeURIComponent(producto.nombre)}`;
    },

    /**
     * Valida si un elemento existe en el DOM
     */
    elementoExiste: (selector) => {
        return document.querySelector(selector) !== null;
    }
};

// ===== GESTIÓN DE PRODUCTOS =====
const GestorProductos = {
    /**
     * Renderiza todos los productos en el contenedor
     */
    mostrarProductos: () => {
        console.log('🔄 Renderizando productos...');

        const contenedor = document.getElementById('productos-container');
        if (!contenedor) {
            console.error('❌ ERROR: Contenedor de productos no encontrado');
            return;
        }

        try {
            contenedor.innerHTML = PRODUCTOS.map(producto => GestorProductos._crearHTMLProducto(producto)).join('');
            GestorCarruseles.inicializar();
            console.log('✅ Productos renderizados correctamente');
        } catch (error) {
            console.error('❌ Error al renderizar productos:', error);
        }
    },

    /**
     * Crea el HTML para un producto individual
     */
    /**
 * Crea el HTML para un producto individual con descripción optimizada
 */
    _crearHTMLProducto: (producto) => {
        // Acortar descripción si es muy larga
        const descripcionCorta = producto.descripcion.length > 120
            ? producto.descripcion.substring(0, 120) + '...'
            : producto.descripcion;

        const esDescripcionLarga = producto.descripcion.length > 120;

        return `
        <div class="producto" data-category="${producto.categoria}" data-id="${producto.id}">
            <div class="producto-imagen">
                <div class="carrusel-imagenes">
                    ${producto.imagenes.map((imagen, index) => `
                        <img src="${imagen}" 
                             alt="${producto.nombre} - Vista ${index + 1}" 
                             class="imagen-producto ${index === 0 ? 'activa' : ''}" 
                             loading="lazy"
                             data-index="${index}">
                    `).join('')}
                </div>
                
                <!-- Badge de marca -->
                ${producto.badge ? `<div class="producto-badge">${producto.badge}</div>` : ''}
                
                <!-- Categoría visible -->
                <div class="producto-categoria">${producto.categoria}</div>
                
                <!-- Controles del carrusel -->
                <div class="controles-carrusel">
                    <button class="btn-carrusel btn-anterior" aria-label="Imagen anterior">‹</button>
                    <button class="btn-carrusel btn-siguiente" aria-label="Imagen siguiente">›</button>
                </div>
                
                <!-- Indicadores -->
                <div class="indicadores">
                    ${producto.imagenes.map((_, index) => `
                        <span class="indicador ${index === 0 ? 'activo' : ''}" 
                              data-index="${index}"
                              aria-label="Ver imagen ${index + 1}"></span>
                    `).join('')}
                </div>
            </div>
            
            <div class="producto-info">
                <!-- Nombre del producto -->
                <h3 title="${producto.nombre}">${producto.nombre}</h3>
                
                <!-- Descripción optimizada -->
                <div class="producto-descripcion-container">
                    <p class="producto-descripcion descripcion-corta" 
                       data-descripcion-completa="${producto.descripcion}">
                       ${descripcionCorta}
                    </p>
                    ${esDescripcionLarga ? `
                        <button class="btn-ver-mas" onclick="GestorProductos.mostrarDescripcionCompleta(this)">
                            Ver más
                        </button>
                    ` : ''}
                </div>
                
                <!-- Precio -->
                <div class="producto-precio">
                    <span class="precio">${Utilidades.formatearPrecio(producto.precio)}</span>
                </div>
                
                <!-- Botones de acción -->
                <div class="producto-actions">
                    <a href="https://wa.me/${CONFIG.whatsapp}?text=${Utilidades.generarMensajeWhatsApp(producto)}" 
                       class="btn btn-rog btn-producto"
                       target="_blank"
                       rel="noopener noreferrer">
                        <i class="fab fa-whatsapp" aria-hidden="true"></i>
                        Consultar
                    </a>
                    <button class="btn btn-galeria btn-producto" 
                            onclick="Galeria.abrir(${producto.id})"
                            aria-label="Abrir galería de imágenes">
                        <i class="fas fa-images" aria-hidden="true"></i>
                        Galería
                    </button>
                </div>
            </div>
        </div>
    `;
    },

    /**
     * Muestra/oculta la descripción completa
     */
    mostrarDescripcionCompleta: (boton) => {
        const contenedor = boton.parentElement;
        const descripcion = contenedor.querySelector('.producto-descripcion');
        const textoCompleto = descripcion.getAttribute('data-descripcion-completa');

        if (descripcion.classList.contains('descripcion-corta')) {
            // Mostrar completo
            descripcion.textContent = textoCompleto;
            descripcion.classList.remove('descripcion-corta');
            boton.textContent = 'Ver menos';
            descripcion.style.maxHeight = 'none';
        } else {
            // Mostrar corto
            const textoCorto = textoCompleto.length > 120
                ? textoCompleto.substring(0, 120) + '...'
                : textoCompleto;
            descripcion.textContent = textoCorto;
            descripcion.classList.add('descripcion-corta');
            boton.textContent = 'Ver más';
            descripcion.style.maxHeight = '80px';
        }
    },

    /**
     * Configura un carrusel individual
     */
    _configurarCarrusel: (producto, productoIndex) => {
        const imagenes = producto.querySelectorAll('.imagen-producto');
        const indicadores = producto.querySelectorAll('.indicador');
        const btnAnterior = producto.querySelector('.btn-anterior');
        const btnSiguiente = producto.querySelector('.btn-siguiente');

        let imagenActual = 0;

        const mostrarImagen = (index) => {
            // Validar índice
            if (index < 0 || index >= imagenes.length) return;

            // Ocultar todas las imágenes
            imagenes.forEach(img => img.classList.remove('activa'));
            indicadores.forEach(ind => ind.classList.remove('activo'));

            // Mostrar imagen seleccionada
            imagenes[index].classList.add('activa');
            indicadores[index].classList.add('activo');
            imagenActual = index;
        };

        // Configurar eventos de navegación
        if (btnSiguiente) {
            btnSiguiente.addEventListener('click', () => {
                const siguiente = (imagenActual + 1) % imagenes.length;
                mostrarImagen(siguiente);
            });
        }

        if (btnAnterior) {
            btnAnterior.addEventListener('click', () => {
                const anterior = (imagenActual - 1 + imagenes.length) % imagenes.length;
                mostrarImagen(anterior);
            });
        }

        // Configurar eventos de indicadores
        indicadores.forEach((indicador, index) => {
            indicador.addEventListener('click', () => {
                mostrarImagen(index);
            });
        });

        // Auto-avance opcional
        if (CONFIG.carrusel.autoAdvance) {
            GestorCarruseles._iniciarAutoAvance(producto, productoIndex, mostrarImagen, imagenes.length);
        }
    },

    /**
     * Inicia el auto-avance del carrusel
     */
    _iniciarAutoAvance: (producto, productoIndex, mostrarImagen, totalImagenes) => {
        let intervalo = setInterval(() => {
            const imagenes = producto.querySelectorAll('.imagen-producto');
            const imagenActual = Array.from(imagenes).findIndex(img => img.classList.contains('activa'));
            const siguiente = (imagenActual + 1) % totalImagenes;
            mostrarImagen(siguiente);
        }, CONFIG.carrusel.interval);

        // Guardar referencia del intervalo
        Estado.intervalosCarrusel.set(productoIndex, intervalo);

        // Pausar al interactuar
        producto.addEventListener('mouseenter', () => {
            clearInterval(intervalo);
        });

        producto.addEventListener('mouseleave', () => {
            intervalo = setInterval(() => {
                const imagenes = producto.querySelectorAll('.imagen-producto');
                const imagenActual = Array.from(imagenes).findIndex(img => img.classList.contains('activa'));
                const siguiente = (imagenActual + 1) % totalImagenes;
                mostrarImagen(siguiente);
            }, CONFIG.carrusel.interval);
            Estado.intervalosCarrusel.set(productoIndex, intervalo);
        });
    },

    /**
     * Limpia todos los intervalos de carruseles
     */
    limpiarIntervalos: () => {
        Estado.intervalosCarrusel.forEach(intervalo => clearInterval(intervalo));
        Estado.intervalosCarrusel.clear();
    }
};

// ===== GESTIÓN DE GALERÍA =====
const Galeria = {
    /**
     * Abre la galería con las imágenes del producto
     */
    abrir: (productoId) => {
        const producto = PRODUCTOS.find(p => p.id === productoId);
        if (!producto) {
            console.error('❌ Producto no encontrado:', productoId);
            return;
        }

        Estado.productoActual = producto;
        Estado.imagenActual = 0;

        // Actualizar información en la galería
        Galeria._actualizarInformacion(producto);
        Galeria._generarMiniaturas(producto);
        Galeria._mostrarImagen(0);

        // Mostrar overlay
        const overlay = document.getElementById('galeriaOverlay');
        overlay.classList.add('activo');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        console.log('🖼️ Galería abierta para:', producto.nombre);
    },

    /**
     * Cierra la galería
     */
    cerrar: () => {
        const overlay = document.getElementById('galeriaOverlay');
        overlay.classList.remove('activo');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
        Estado.productoActual = null;

        console.log('🔒 Galería cerrada');
    },

    /**
     * Navega a la siguiente/anterior imagen
     */
    navegar: (direccion) => {
        if (!Estado.productoActual) return;

        const totalImagenes = Estado.productoActual.imagenes.length;
        Estado.imagenActual = (Estado.imagenActual + direccion + totalImagenes) % totalImagenes;
        Galeria._mostrarImagen(Estado.imagenActual);
    },

    /**
     * Cambia directamente a una imagen específica
     */
    cambiarAImagen: (index) => {
        if (!Estado.productoActual) return;

        Estado.imagenActual = index;
        Galeria._mostrarImagen(index);
    },

    /**
     * Actualiza la información del producto en la galería
     */
    _actualizarInformacion: (producto) => {
        document.getElementById('galeriaTitulo').textContent = producto.nombre;
        document.getElementById('galeriaDescripcion').textContent = producto.descripcion;
        document.getElementById('galeriaPrecio').textContent = Utilidades.formatearPrecio(producto.precio);
        document.getElementById('totalImagenes').textContent = producto.imagenes.length;
    },

    /**
     * Genera las miniaturas de la galería
     */
    _generarMiniaturas: (producto) => {
        const miniaturasContainer = document.getElementById('galeriaMiniaturas');
        miniaturasContainer.innerHTML = '';

        producto.imagenes.forEach((imagen, index) => {
            const miniatura = document.createElement('img');
            miniatura.src = imagen;
            miniatura.className = 'galeria-miniatura';
            miniatura.alt = `Miniatura ${index + 1} de ${producto.nombre}`;
            miniatura.setAttribute('data-index', index);
            miniatura.addEventListener('click', () => Galeria.cambiarAImagen(index));

            if (index === 0) {
                miniatura.classList.add('activa');
            }

            miniaturasContainer.appendChild(miniatura);
        });
    },

    /**
     * Muestra una imagen específica en la galería
     */
    _mostrarImagen: (index) => {
        if (!Estado.productoActual) return;

        const imagen = Estado.productoActual.imagenes[index];
        const imagenGrande = document.getElementById('galeriaImagenGrande');

        imagenGrande.src = imagen;
        imagenGrande.alt = `${Estado.productoActual.nombre} - Imagen ${index + 1}`;

        // Actualizar contador
        document.getElementById('contadorImagen').textContent = index + 1;

        // Actualizar miniaturas activas
        const miniaturas = document.querySelectorAll('.galeria-miniatura');
        miniaturas.forEach((miniatura, i) => {
            miniatura.classList.toggle('activa', i === index);
        });
    }
};

// ===== GESTIÓN DE FILTROS =====
const GestorFiltros = {
    /**
     * Configura los filtros de búsqueda y categoría
     */
    configurar: () => {
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('cat');

        if (!searchInput || !categoryFilter) {
            console.error('❌ Elementos de filtro no encontrados');
            return;
        }

        // Event listeners
        searchInput.addEventListener('input', GestorFiltros._filtrarProductos);
        categoryFilter.addEventListener('change', GestorFiltros._filtrarProductos);

        // Filtrar inicialmente si hay valores
        GestorFiltros._filtrarProductos();
    },

    /**
     * Filtra los productos según los criterios
     */
    _filtrarProductos: () => {
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('cat');

        const texto = Utilidades.normalizarTexto(searchInput.value);
        const categoria = categoryFilter.value;
        const productos = document.querySelectorAll('.producto');

        let productosVisibles = 0;

        productos.forEach(prod => {
            const nombre = Utilidades.normalizarTexto(prod.querySelector('h3').textContent);
            const descripcion = Utilidades.normalizarTexto(prod.querySelector('.producto-descripcion').textContent);
            const cat = prod.getAttribute('data-category');

            const coincideTexto = texto === '' || nombre.includes(texto) || descripcion.includes(texto);
            const coincideCategoria = categoria === 'all' || cat === categoria;

            if (coincideTexto && coincideCategoria) {
                prod.style.display = 'block';
                productosVisibles++;
            } else {
                prod.style.display = 'none';
            }
        });

        GestorFiltros._mostrarMensajeSinResultados(productosVisibles === 0 && texto !== '');
    },

    /**
     * Muestra u oculta el mensaje de sin resultados
     */
    _mostrarMensajeSinResultados: (mostrar) => {
        const mensajeAnterior = document.getElementById('mensaje-sin-resultados');
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }

        if (mostrar) {
            const mensaje = document.createElement('div');
            mensaje.id = 'mensaje-sin-resultados';
            mensaje.innerHTML = `
                <div class="no-results-message">
                    <h3>No se encontraron productos</h3>
                    <p>Intenta con otros términos de búsqueda</p>
                </div>
            `;
            document.getElementById('productos-container').appendChild(mensaje);
        }
    }
};

// ===== GESTIÓN DE NAVEGACIÓN =====
const Navegacion = {
    /**
     * Configura el scroll suave al catálogo
     */
    configurarScroll: () => {
        const botonCatalogo = document.getElementById('verCatalogo');
        const catalogo = document.getElementById('catalogo');

        if (botonCatalogo && catalogo) {
            botonCatalogo.addEventListener('click', () => {
                catalogo.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
    }
};

// ===== EVENT LISTENERS GLOBALES =====
const EventManager = {
    /**
     * Configura event listeners globales
     */
    inicializar: () => {
        // Cerrar galería con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && Estado.productoActual) {
                Galeria.cerrar();
            }
        });

        // Cerrar galería al hacer clic fuera
        const galeriaOverlay = document.getElementById('galeriaOverlay');
        if (galeriaOverlay) {
            galeriaOverlay.addEventListener('click', (e) => {
                if (e.target === e.currentTarget) {
                    Galeria.cerrar();
                }
            });
        }

        // Limpiar recursos al salir
        window.addEventListener('beforeunload', () => {
            GestorCarruseles.limpiarIntervalos();
        });
    }
};

// ===== INICIALIZACIÓN DE LA APLICACIÓN =====
const App = {
    /**
     * Inicializa toda la aplicación
     */
    inicializar: () => {
        console.log('🚀 Iniciando aplicación InnoTrix...');

        try {
            // 1. Mostrar productos
            GestorProductos.mostrarProductos();

            // 2. Configurar filtros
            GestorFiltros.configurar();

            // 3. Configurar navegación
            Navegacion.configurarScroll();

            // 4. Configurar eventos globales
            EventManager.inicializar();

            console.log('✅ Aplicación iniciada correctamente');
        } catch (error) {
            console.error('❌ Error al inicializar la aplicación:', error);
        }
    }
};

// ===== INICIALIZACIÓN AL CARGAR EL DOM =====
document.addEventListener('DOMContentLoaded', App.inicializar);

// ===== EXPORTAR FUNCIONES GLOBALES =====
window.abrirGaleria = Galeria.abrir;
window.cerrarGaleria = Galeria.cerrar;
window.cambiarImagen = Galeria.navegar;
window.cambiarAImagen = Galeria.cambiarAImagen;