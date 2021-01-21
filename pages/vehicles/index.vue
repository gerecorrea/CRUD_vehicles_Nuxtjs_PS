<template>

    <!-- Tela de cadastro!! -->

  <div>
    <div class="container">
      <div class="text-center">
        <!-- <img src="~/assets/car.png" style="width:250px;height:250px;"> -->
        <h1 class=""> Cadastro de veículo</h1>
        <!-- Forms no submit chama o método updateCar, que chama o mutation-->
        <form v-on:submit.prevent="createVehicle">
            <!-- Chama o component Formulario.vue, com passagem de valor props car_aux recebendo o objeto do veículo clonado -->
            <Forms :caraux="vehicle"></Forms>
            <button type="submit" class="btn btn-primary">Cadastrar</button><!-- Submit, aciona o v-on acima -->
            <!-- <ConfirmButton type="submit" class="btn btn-primary">CadastrarDialog</ConfirmButton>  -->
            <nuxt-link to="/home" class="btn btn-danger">Cancelar</nuxt-link> <!-- Volta à listagem, sem alteração -->
        </form>

        <!-- abaixo inserir todo o menu de cadastro -->
      </div>
    </div>
  </div>

</template>

<script>
import Logo from '~/components/Logo.vue'
//import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Forms from '~/components/Formulario.vue'
import ConfirmButton from '~/components/ConfirmButton.vue'
import vehicleService from '@/services/vehicleService'

export default {
  components: {
    Logo,
    Forms,
    ConfirmButton
  },
  data(){
      return{
        vehicle: {name: '', description: '', brand: '', quantity: null, license_plate: '', year: null, type: '', color: '', fipe: null, insurance: null, photo: ''},
      }
  },
  methods:{
        createVehicle(){
          vehicleService.create(this.vehicle);
          //this.$axios.post('vehicles', this.vehicle); // Formato sem service
          //this.$router.push('/listing');
          
          
          // A resp é para limpar os dados!
          //vehicleService.create(this.vehicle).then(resp => {
            //this.vehicle = resp.data;
            
            //this.vehicle.name = ''
            // this.vehicle.description = ''
            // this.vehicle.brand= ''
            // this.vehicle.quantity= null
            // this.vehicle.color= ''
            // this.vehicle.year= null
            // this.vehicle.license_plate= ''
            // this.vehicle.type= ''
            // this.vehicle.insurance= null
            // this.vehicle.fipe= null
            // this.vehicle.photo= ''
          //});
        },
        async create_vehicle_async(){
          await vehicleService.create(this.vehicle)
        }
  }
}
</script>
