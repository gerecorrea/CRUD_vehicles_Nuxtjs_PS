<template>
  <div>
    <div class="container">
      <div class="text-center">
        <img src="~/assets/car.png" style="width:250px;height:250px;">
        <h1 class=""> Listagem de veículos</h1>

        <!-- v-for="(sale, index) in salesByProduct"-->
            <!-- <div> </div> ??? -->
            <h1> Chamada carro </h1>
            <h3> Foto carro?? Acho que só na listagem específica do carro </h3>
            <h3> Descrição do carro (lista) </h3>
            <!-- acesso a todos os dados de um carro:-->
            <input type="text" v-model="carID"> <!--o que for digitado aqui, grava na variavel carID declarada no vue-->
            <button @click="onLoadCar">Load Car Number</button> <!--executa a função onLoadCar-->
            <!-- <nuxt-link :to="'/listing/' + 1" </nuxt-link>
                <article class="post-preview">
                        <div class="post-thumbnail"> imagem de fundo </div>
                    </article>
            -->
            <ul>
                <li v-for="index in 10" :key="index">
                    <!-- {{ shoppingItems[index].name }} - {{ shoppingItems[index].price }} -->
                    <div>
                        Hello {{index}}
                    </div>
                </li>
            </ul>

            <!-- Após adicionar isso abaixo ele começou a ficar tudo preto na tela de listagem. Ver dpeoiss. -->

            <!-- Caso use o componente criado ficaria algo assim, mas passando os parâmetro via v-for para cada um dos criados -->
            <CarsPreview id="1" photo="~/assets/cars.png" name="corsa" description="hey" brand="chevrolet" quantity="2" />

        <!-- abaixo inserir todo o menu de cadastro -->
      </div>
    </div>
  </div>

</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import CarPreview from '~/components/Cars/CarsPreview.vue'

export default {
    components: {
        Logo,
        CarsPreview
    },
    data(){
        return{
            carID: ''
        }
    },
    methods: {
        onLoadCar(){
            // Método para navegação para cada carro em específico
            this.$router.push('/listing/' +this.carID)
        }
    },
    name: 'Listagem',

}
</script>
