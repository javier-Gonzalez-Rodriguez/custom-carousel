<template>
    <div class="carousel-body" :ref="identitify">
        <!--BOTON DESPLAZAMIENTO IZQUIERDA-->
        <div :style="{'max-width': arraow_width + 'px', 'aspect-ratio': 1}">
            <svg width="100%" height="100%" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <g id="grupo-despl-izq" class="grupo-despl" @mouseover="insertarAnimLeave('izq')" @click="ajustarItems(true)">
                    <circle id="circulo-desplazamiento-izq" class="circulo-desplazamiento"/>
                    <path d="M80 60 L40 60 L60 50 M40 60 L60 70 " class="flecha-desplazamiento" />
                </g>
            </svg>
        </div>

        <div class="carousel-content">
            <div class="carousel-container carousel-container-anim">
                <div class="carousel-element" v-for="(elemento, index) in data_carrousel">
                    <slot name="body" :item="elemento" :index="index"></slot>
                </div>
            </div>
        </div>
        
        <!--BOTON DESPLAZAMIENTO DERECHA-->
        <div :style="{'max-width': arraow_width + 'px', 'aspect-ratio': 1}">
            <svg width="100%" height="100%" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <g id="grupo-despl-der" class="grupo-despl" @mouseover="insertarAnimLeave('der')"  @click="ajustarItems(false)">
                    <circle id="circulo-desplazamiento-der" class="circulo-desplazamiento"/>
                    <path d=" M40 60 L80 60 L60 50 M80 60 L60 70 " class="flecha-desplazamiento" />
                </g>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            data_carrousel: {
                type: Array,
                default: () => [],
            },
            item_slots: {
                type: Number,
                default: 1
            },
            arraow_width:{
                type: Number,
                default: 50
            },
            identitify:{
                type: String,
                default: () => 'custom-carousel',
            }
        },
        data(){
            return {
                carrousel: null,
                carrousel_position: 0,
                carrousel_items_width: 0,
                index_elements: 0,
                resizeTimeout: null,
            }
        },
        mounted(){
            this.resizeElements();

            window.addEventListener('resize', () => {
                const root = this.$refs[this.identitify];

                const container = root.querySelector('.carousel-container');
                
                container.classList.remove('carousel-container-anim');

                this.resizeElements()

                // Reinicia el temporizador si el usuario sigue redimensionando
                clearTimeout(this.resizeTimeout);

                // Espera 200ms tras el último evento para volver a activar la animación
                this.resizeTimeout = setTimeout(() => {
                    container.classList.add('carousel-container-anim');
                }, 200); // Puedes ajustar el tiempo si lo necesitas
            });
        },
        methods: {
            resizeElements(){
                const root = this.$refs[this.identitify];
                const container_raiz = root.querySelector('.carousel-content');
                const container = root.querySelector('.carousel-container');
                
                const items = container.querySelectorAll('.carousel-element');

                //se recupera el ancho del contenedor raiz y se le quita lo que ocupan los botones laterales y el gap entre elementos
                var containerWidth = container_raiz.offsetWidth;
                
                //container_raiz.style.width = containerWidth + 'px';
                
                const itemWidth = containerWidth / this.item_slots; //(containerWidth - ((this.item_slots + 1) * 9)) / this.item_slots;//tamaño del elemento menos tres veces el margen entre los elementos dividido entre el nº de elementos visibles
                // se usa el margen 3 veces poque hay que contar cada margen entre elemento mostrado
                
                this.carrousel_items_width = itemWidth;

                items.forEach((item, i) => {
                    item.style.width = itemWidth + 'px';
                });


                this.carrousel_position = -((this.item_slots * (this.carrousel_items_width)) * this.index_elements);

                container.style.transform  =  `translateX(${this.carrousel_position}px)`;
            },
            ajustarItems(direct){
                const root = this.$refs[this.identitify];

                this.carrousel = root.querySelector('.carousel-container');
                
                if (direct) {
                    // posicion del carrousel + numero item mostrados * (ancho carrousel + (numeros item mostrados * margen entre elementos))
                    this.carrousel_position += this.item_slots * (this.carrousel_items_width);
                    this.index_elements--;
                    if(this.carrousel_position > 0){
                        this.carrousel_position = 0;
                        this.index_elements = 0;
                    }
                    this.carrousel.style.transform  =  `translateX(${this.carrousel_position}px)`;
                } else {
                    // posicion del carrousel - numero item mostrados * (ancho carrousel + (numeros item mostrados * margen entre elementos))
                    var next = this.carrousel_position - (this.item_slots * this.carrousel_items_width);

                    if(next > (this.data_carrousel.length * -(this.carrousel_items_width))){
                        this.index_elements++;
                        this.carrousel_position = next;
                        this.carrousel.style.transform  =  `translateX(${this.carrousel_position}px)`;
                    }
                }
            },
            /**
             * añade la animacion a los svg de vuelta a su estado inicial cuando se pone el cursos sobre el elemento para el momento en el que se quite el mouse del svg
             * @param flecha 'izq' o 'der'
             */
            insertarAnimLeave(flecha){
                const root = this.$refs[this.identitify];
                
                var circulo = root.querySelector('#circulo-desplazamiento-' + flecha);
                var grupoDespl = root.querySelector('#grupo-despl-' + flecha);

                if(!grupoDespl.classList.contains('grupo-despl-encoger')){
                    circulo.classList.add('circulo-desplazamiento-rotar-inicio');
                    grupoDespl.classList.add('grupo-despl-encoger');
                }
            },
        }
    }
</script>

<style scoped>

    .carousel-content{
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: row;
    }

    .carousel-container{
      position: relative;
      display: grid;
      width: 80%;
      grid-auto-flow: column;
      padding: 5px;
      right: 0px;
    }

    .carousel-container-anim{
        transition: transform 1s ease; /* animación suave */
    }

    .carousel-element{
      height: 100%;
    }

    .carousel-body{
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      padding: 10px;
      align-items: center;
    }

    .selectable{
      cursor: pointer;
    }

    .grupo-despl{
        transform-origin: 50% 50%;
        cursor: pointer;
        pointer-events: bounding-box;
    }

    .grupo-despl-encoger{
        animation: nothoverElement 0.5s forwards;
    }

    .grupo-despl:hover{
        transform-origin: 50% 50%;
        animation: hoverElement 0.5s forwards;
    }

    .circulo-desplazamiento{
        cy: 60;
        cx: 60;
        r: 30;
        fill: #a3a3a33b;
        stroke: black;
        stroke-width: 1;
        stroke-dasharray: 5, 2;
        transform-origin: 50% 50%;
    }

    .circulo-desplazamiento-rotar-inicio{
        animation: rotarizquierda 0.5s forwards;
    }

    .grupo-despl:hover .circulo-desplazamiento{
        animation: rotarderecha 0.5s  forwards;
    }

    .flecha-desplazamiento{
        stroke: black;
        stroke-width: 2;
        fill: none;
        stroke-linecap: round;
    }

    @keyframes hoverElement {
        0%{
            transform: scale(1);
        }

        100%{
            transform: scale(1.1);
        }
    }

    @keyframes nothoverElement {
        0%{
            transform: scale(1.1);
        }

        100%{
            transform: scale(1);
        }
    }

    @keyframes rotarderecha {
        0%{
            transform: rotate(0deg)
        }

        100%{
            transform: rotate(30deg);
        }
    }

    @keyframes rotarizquierda  {
        0%{
            transform: rotate(30deg)
        }

        100%{
            transform: rotate(0deg);
        }
    }
</style>