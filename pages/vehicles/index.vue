<template>

    <!-- Tela de cadastro!! -->

  <div>
    <div class="container">
      <div class="text-center">
        <!-- <img src="~/assets/car.png" style="width:250px;height:250px;"> -->
        <h1 class=""> Cadastro de veículo</h1>
        <!-- Forms no submit chama o método updateCar, que chama o mutation-->
        <form v-on:submit.prevent="createCar">
            <!-- Chama o component Formulario.vue, com passagem de valor props car_aux recebendo o objeto do veículo clonado -->
            <Forms :caraux="vehicle"></Forms>
            <button type="submit" class="btn btn-primary">Cadastrar</button>
            <ConfirmButton type="submit" class="btn btn-primary">CadastrarDialog</ConfirmButton> <!-- Submit, aciona o v-on acima -->
            <nuxt-link to="/home" class="btn btn-danger">Cancelar</nuxt-link> <!-- Volta à listagem, sem alteração -->
        </form>

        <!-- abaixo inserir todo o menu de cadastro -->
      </div>
    </div>
  </div>

</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Forms from '~/components/Formulario.vue'
import ConfirmButton from '~/components/ConfirmButton.vue'

export default {
  components: {
    Logo,
    Forms,
    ConfirmButton
  },
  data(){
      return{
        "vehicle": {id: null, name: '', description: '', brand: '', quantity: null, license_plate: '', year: null, type: '', color: '', fipe: null, insurance: null, photo: ''} 
      }
  },
  methods:{
        createCar (e) {
            //this.$store.commit('UPDATE_CAR', this.vehicle) // Commit na mutation responsável o objeto atual.
            this.$router.push('/listing') // Volta página ao menu de listagem
        }
  }
}
</script>
