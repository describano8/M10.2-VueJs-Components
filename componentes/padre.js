Vue.component('padre', {
    template: //html
    `
    <div class="p-5 bg-warning">
    <h2>{{ mensajePadre }}</h2>
    <hijo :mensaje="mensajeHijo"></hijo>
    </div>
    `,
    data() {
        return{
            mensajePadre: 'Yo, soy tu padre',
            mensajeHijo: 'Pues yo soy tu hijo'
        }
    }
});