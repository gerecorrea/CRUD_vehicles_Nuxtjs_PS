

<template>
    <!-- Tela de edit, feita adiantadamente. Fica em STANDBY para finalização da listagem e início do backend, como requisitado
    Apesar disso, o usado aqui será o usado posteriormente, dado que ficou interessante o layout e funcional também.
    Na prática, a edição e a ligação com o store (index.js) para isso estão ok, tá funfando -->

    <section class="text-center">
        <h2>Edição de veículo</h2>
        <!-- Forms no submit chama o método updateCar, que chama o mutation-->
        <form v-on:submit.prevent="updateCar">
            <!-- Chama o component Formulario.vue, com passagem de valor props car_aux recebendo o objeto do veículo clonado -->
            <Forms :caraux="vehicle"></Forms>
            <button type="submit" class="btn btn-primary">Salvar</button> <!-- Submit, aciona o v-on acima -->
            <nuxt-link to="/listing" class="btn btn-danger">Cancelar</nuxt-link> <!-- Volta à listagem, sem alteração -->
        </form>
    </section>
</template>

<script>
    // Ver melhor tudo sobre esse script.

import Forms from '../../../components/Formulario.vue'

export default {
    components: { 
        Forms
    },
    data () {
        // Clona o produto com stringify e parse do mesmo, modificando-o apenas via mutations no index.js:
        return {
            // É feito internamente um find do produto de mesmo id em cima de lista completa deles,
            // Ao encontrar, é feito um stringify para transfomar a string em JSON, por último o parse para separar os dados.
            "vehicle": JSON.parse(JSON.stringify(this.$store.state.products.find(car => car.id === this.$route.params.id)))
        };
    },
    methods: {
        updateCar (e) {
            this.$store.commit('UPDATE_CAR', this.vehicle) // Commit na mutation responsável o objeto atual.
            this.$router.push('/listing') // Volta página ao menu de listagem
        }
    }
}
</script>

