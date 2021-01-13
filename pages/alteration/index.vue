<!-- Aqui seria a ideia de ter um campo de texto, você digita o id do carro a ser modificado e então vai para alteration/id para edit-->
<template>
  <div>
    <div class="container">
      <div class="text-center">
        <!-- <img src="~/assets/car.png" style="width:250px;height:250px;"> -->
        <h1 class=""> Alteração de veículo</h1>

        <input border="1" type="text" v-model="productID" color="white" placeholder="Digite o ID do veículo">
          <nuxt-link class="btn btn-warning btn-xs" :to="{name: 'alteration-id-edit', params: {id: productID}}">Editar veículo</nuxt-link>

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
      productID: '', products: this.$store.state.products
    }
  },
  onLoadCar(){
      // Método para navegação para cada carro em específico
      this.$router.push('/alteration/' + this.productID + '/edit')
  }
}
</script>
