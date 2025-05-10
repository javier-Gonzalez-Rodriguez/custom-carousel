<template>
    <div>
        <h1>Carrusel simple</h1>

        <custom-carousel :data_carrousel="simple_data" :identitify="'simple-carousel'">
            <template #body="{item, index}">
                <div class="card">
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.description }}</p>
                </div>
            </template>
        </custom-carousel>


        <h1>Carrusel con numero de elementos personalizado</h1>
        <custom-carousel :data_carrousel="complex_data" :item_slots="5" :identitify="'carousel-cusomt-item-slots'">
            <template #body="{item, index}">
                <div class="card-2">
                    <div class="card-header">
                        <img :src="item.image" alt="Imagen de tarjeta" class="card-image">
                        <div class="card-header-content">
                        <h3 class="card-name">{{ item.name }}</h3>
                        <p class="card-title">{{ item.title }}</p>
                        <span class="card-date">{{ item.date }}</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="card-description">{{ item.description }}</p>
                        <p class="card-location"><strong>Ubicación:</strong> {{ item.location }}</p>
                    </div>
                    <div class="card-footer">
                        <button class="card-button" @click="handleClick(index)">Ver Más</button>
                    </div>
                </div>
            </template>
        </custom-carousel>

        <h1>Carrusel con tamaño botones de desplazamiento personalizados</h1>
        <custom-carousel :data_carrousel="complex_data2" :item_slots="3" :identitify="'carousel-cusomt-arrows'" arraow_width="160">
            <template #body="{item, index}">
                <div class="card-3">
                    <div class="card-header-3">
                        <img :src="item.image" alt="Imagen de tarjeta" class="card-image-3">
                        <div class="card-header-content-3">
                        <h3 class="card-name-3">{{ item.name }}</h3>
                        <p class="card-title-3">{{ item.title }}</p>
                        <span class="card-date-3">{{ item.date }}</span>
                        </div>
                    </div>
                    <div class="card-body-3">
                        <p class="card-description-3">{{ item.description }}</p>
                        <p class="card-location-3"><strong>Ubicación:</strong> {{ item.location }}</p>
                    </div>
                    <div class="card-footer-3">
                        <button class="card-button-3">Ver Más</button>
                    </div>
                </div>
            </template>
        </custom-carousel>

    </div>
</template>

<script>
    export default{
        data(){
            return {
                simple_data: [
                    { id: 1, title: 'Artículo A', description: 'Descripción del artículo A' },
                    { id: 2, title: 'Artículo B', description: 'Descripción del artículo B' },
                    { id: 3, title: 'Artículo C', description: 'Descripción del artículo C' },
                    { id: 4, title: 'Artículo D', description: 'Descripción del artículo D' },
                    { id: 5, title: 'Artículo E', description: 'Descripción del artículo E' },
                    { id: 6, title: 'Artículo F', description: 'Descripción del artículo F' },
                    { id: 7, title: 'Artículo G', description: 'Descripción del artículo G' },
                    { id: 8, title: 'Artículo H', description: 'Descripción del artículo H' },
                    { id: 9, title: 'Artículo I', description: 'Descripción del artículo I' },
                    { id: 10, title: 'Artículo J', description: 'Descripción del artículo J' }
                ],

                complex_data: [
                    { id: 0, title: 'Curso A', description: 'Aprende los fundamentos del curso A.', image: './images/course_0.jpg', price: '$10.00', tags: ['Tecnología 0', 'Curso 0', 'Online'] },
                    { id: 1, title: 'Curso B', description: 'Aprende los fundamentos del curso B.', image: './images/course_1.jpg', price: '$11.00', tags: ['Tecnología 1', 'Curso 1', 'Online'] },
                    { id: 2, title: 'Curso C', description: 'Aprende los fundamentos del curso C.', image: './images/course_2.jpg', price: '$12.00', tags: ['Tecnología 2', 'Curso 2', 'Online'] },
                    { id: 3, title: 'Curso D', description: 'Aprende los fundamentos del curso D.', image: './images/course_3.png', price: '$13.00', tags: ['Tecnología 3', 'Curso 3', 'Online'] },
                    { id: 4, title: 'Curso E', description: 'Aprende los fundamentos del curso E.', image: './images/course_4.jpg', price: '$14.00', tags: ['Tecnología 4', 'Curso 4', 'Online'] },
                    { id: 5, title: 'Curso F', description: 'Aprende los fundamentos del curso F.', image: './images/course_5.jpg', price: '$15.00', tags: ['Tecnología 5', 'Curso 5', 'Online'] },
                    { id: 6, title: 'Curso G', description: 'Aprende los fundamentos del curso G.', image: './images/course_6.jpg', price: '$16.00', tags: ['Tecnología 6', 'Curso 6', 'Online'] },
                    { id: 7, title: 'Curso H', description: 'Aprende los fundamentos del curso H.', image: './images/course_7.jpg', price: '$17.00', tags: ['Tecnología 7', 'Curso 7', 'Online'] },
                    { id: 8, title: 'Curso I', description: 'Aprende los fundamentos del curso I.', image: './images/course_8.jpg', price: '$18.00', tags: ['Tecnología 8', 'Curso 8', 'Online'] },
                    { id: 9, title: 'Curso J', description: 'Aprende los fundamentos del curso J.', image: './images/course_9.jpg', price: '$19.00', tags: ['Tecnología 9', 'Curso 9', 'Online'] },
                    { id: 10, title: 'Curso K', description: 'Aprende los fundamentos del curso K.', image: './images/course_10.png', price: '$20.00', tags: ['Tecnología 10', 'Curso 10', 'Online'] },
                    { id: 11, title: 'Curso L', description: 'Aprende los fundamentos del curso L.', image: './images/course_11.jpg', price: '$21.00', tags: ['Tecnología 11', 'Curso 11', 'Online'] },
                    { id: 12, title: 'Curso M', description: 'Aprende los fundamentos del curso M.', image: './images/course_12.jpg', price: '$22.00', tags: ['Tecnología 12', 'Curso 12', 'Online'] },
                    { id: 13, title: 'Curso N', description: 'Aprende los fundamentos del curso N.', image: './images/course_13.jpg', price: '$23.00', tags: ['Tecnología 13', 'Curso 13', 'Online'] },
                    { id: 14, title: 'Curso O', description: 'Aprende los fundamentos del curso O.', image: './images/course_14.jpg', price: '$24.00', tags: ['Tecnología 14', 'Curso 14', 'Online'] }
                ],

                complex_data2:[
                    {
                        name: 'Juan Pérez',
                        title: 'Desarrollador Frontend',
                        description: 'Juan es un experto en Vue.js y React, con experiencia en diseño responsivo y creación de interfaces modernas.',
                        location: 'Madrid, España',
                        image: 'https://randomuser.me/api/portraits/men/1.jpg',
                        date: '2025-05-01'
                    },
                    {
                        name: 'Ana Gómez',
                        title: 'Diseñadora Gráfica',
                        description: 'Ana tiene un ojo agudo para el diseño y la creatividad, trabajando con Photoshop y Illustrator en proyectos internacionales.',
                        location: 'Barcelona, España',
                        image: 'https://randomuser.me/api/portraits/women/1.jpg',
                        date: '2025-04-15'
                    },
                    {
                        name: 'Carlos López',
                        title: 'Product Manager',
                        description: 'Carlos gestiona proyectos de tecnología, asegurándose de que todo funcione sin problemas y se entregue a tiempo.',
                        location: 'Valencia, España',
                        image: 'https://randomuser.me/api/portraits/men/2.jpg',
                        date: '2025-03-10'
                    },
                    {
                        name: 'Lucía Fernández',
                        title: 'UX/UI Designer',
                        description: 'Lucía se especializa en mejorar la experiencia del usuario, creando interfaces intuitivas y fáciles de usar.',
                        location: 'Sevilla, España',
                        image: 'https://randomuser.me/api/portraits/women/2.jpg',
                        date: '2025-02-22'
                    },
                    {
                        name: 'Pedro Martínez',
                        title: 'Backend Developer',
                        description: 'Pedro es un ingeniero de software enfocado en arquitecturas escalables y soluciones de backend eficientes.',
                        location: 'Bilbao, España',
                        image: 'https://randomuser.me/api/portraits/men/3.jpg',
                        date: '2025-01-30'
                    },
                    {
                        name: 'Sofia Ruiz',
                        title: 'Data Scientist',
                        description: 'Sofia es experta en análisis de datos, utilizando machine learning para resolver problemas complejos en el sector financiero.',
                        location: 'Alicante, España',
                        image: 'https://randomuser.me/api/portraits/women/3.jpg',
                        date: '2024-12-05'
                    },
                    {
                        name: 'David Sánchez',
                        title: 'SEO Specialist',
                        description: 'David se dedica a mejorar el posicionamiento web mediante estrategias avanzadas de SEO y marketing digital.',
                        location: 'Zaragoza, España',
                        image: 'https://randomuser.me/api/portraits/men/4.jpg',
                        date: '2024-11-18'
                    },
                    {
                        name: 'María López',
                        title: 'Content Manager',
                        description: 'María supervisa la creación de contenido digital, asegurando que sea relevante y atractivo para la audiencia.',
                        location: 'Granada, España',
                        image: 'https://randomuser.me/api/portraits/women/4.jpg',
                        date: '2024-10-22'
                    },
                    {
                        name: 'Fernando García',
                        title: 'Marketing Specialist',
                        description: 'Fernando ayuda a las marcas a llegar a su público objetivo mediante estrategias de marketing digital y análisis de datos.',
                        location: 'Málaga, España',
                        image: 'https://randomuser.me/api/portraits/men/5.jpg',
                        date: '2024-09-14'
                    },
                    {
                        name: 'Carmen Martínez',
                        title: 'HR Specialist',
                        description: 'Carmen se encarga de los procesos de contratación y gestión del talento, asegurándose de que las empresas tengan el mejor equipo.',
                        location: 'Palma de Mallorca, España',
                        image: 'https://randomuser.me/api/portraits/women/5.jpg',
                        date: '2024-08-30'
                    }
                ],

            }
        }
    }
</script>

<style scoped>

/**
*
*  SIMPLE CAROUSEL CSS
*
**/

/* Estilos para la tarjeta */
.card {
    margin: 10px;
    padding: 1.5rem; /* Espaciado interno */
    max-width: 100%; /* Ancho máximo */
    background-color: white; /* Fondo blanco */
    border: 2px solid #e2e8f0; /* Borde gris claro */
    border-radius: 0.5rem; /* Bordes redondeados */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra moderada */
    transition: box-shadow 0.3s ease-in-out; /* Transición suave para el hover */
}

/* Efecto hover */
.card:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra más grande al pasar el mouse */
}

/* Título de la tarjeta */
.card h2 {
    font-size: 1.25rem; /* Tamaño de fuente */
    font-weight: 600; /* Peso de fuente */
    color: #2d3748; /* Color gris oscuro */
}

/* Descripción de la tarjeta */
.card p {
    color: #718096; /* Color de texto gris */
    margin-top: 0.5rem; /* Separación del título */
}

/* Opcional: Puedes usar esta clase para mejorar la apariencia general */
.card-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

/**
*
*  CAROUSEL WITH CUSTOM NOMBER OF ELEMENTS CSS
*
**/

/* Estilo principal de la tarjeta */
.card-2 {
    background-color: #ffffff;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    margin: 10px;
    display: flex;
    flex-direction: column;
    height: 96%;
}

/* Efecto de hover */
.card-2:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Imagen de la tarjeta */
.card-image-2 {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 1px solid #e2e8f0;
}

/* Contenido de la tarjeta */
.card-content-2 {
    padding: 1rem;
}

/* Título */
.card-title-2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.5rem;
}

/* Descripción */
.card-description-2 {
    font-size: 1rem;
    color: #4a5568;
    margin-bottom: 1rem;
}

/* Precio */
.card-price-2 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #38a169; /* Verde */
    margin-bottom: 0.75rem;
}

/* Etiquetas (tags) */
.card-tags-2 {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 0.5rem;
}

.card-tags-2 .tag-2 {
    background-color: #edf2f7;
    color: #4a5568;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
}


/**
*
*  CAROUSEL WITH CUSTOM ARROWS CSS
*
**/

.card-container-3 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card-3 {    
  margin: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-3:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.card-image-3 {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #f0f0f0;
}

.card-content-3 {
  padding: 15px;
}

.card-title-3 {
  font-size: 1.5em;
  margin: 0;
  color: #333;
}

.card-subtitle-3 {
  font-size: 1.2em;
  color: #777;
}

.card-description3 {
  font-size: 1em;
  color: #555;
  margin-top: 10px;
  line-height: 1.5;
}


</style>
