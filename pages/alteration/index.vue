<!-- Aqui seria a ideia de ter um campo de texto, você digita o id do carro a ser modificado e então vai para alteration/id para edit-->
<template>
  <div>
    <div class="container">
      <div class="text-center">
        <img src="~/assets/car.png" style="width:250px;height:250px;">
        <h1 class=""> Alteração de veículo</h1>

        <!-- NÃO TÁ OKKK -->

        <input border="1" type="text" v-model="carID"> <!--o que for digitado aqui, grava na variavel carID declarada no vue-->
          <button @click="onLoadCar">Load Car Number</button> <!--executa a função onLoadCar-->

        <!-- abaixo inserir todo o menu de cadastro -->
      </div>
    </div>
  </div>

</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo
  },
  data(){
    return {
      carID: ''
    }
  },
  onLoadCar(){
      // Método para navegação para cada carro em específico
      this.$router.push('/listing/' +this.carID)
  }
}
</script>
