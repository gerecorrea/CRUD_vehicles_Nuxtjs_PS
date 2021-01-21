

<template>
    <!-- Tela de edit. -->

    <section class="text-center">
        <h2>Edição de veículo</h2>
        <!-- Forms no submit chama o método updateVehicle, que chama o backend-->
        <form v-on:submit.prevent="updateVehicle">
            <!-- Chama o component Formulario.vue, com passagem de valor props car_aux recebendo o objeto do veículo clonado -->
            <Forms :caraux="vehicle"></Forms>
            <button type="submit" class="btn btn-primary">Salvar</button> <!-- Submit, aciona o v-on acima -->
            <nuxt-link to="/listing" class="btn btn-danger">Cancelar</nuxt-link> <!-- Volta à listagem, sem alteração -->
        </form>
    </section>
</template>

<script>

import Forms from '~/components/Formulario.vue'
import vehicleService from '@/services/vehicleService'

export default {
    components: { 
        Forms
    },
    data () {
        return {
            "vehicle": {
                id: this.$route.params.id,
                name: '',
                description: '',
                brand: '',
                quantity: null,
                color: '',
                year: null,
                license_plate: '',
                type: '',
                insurance: null,
                fipe: null,
                photo: '',
            },
            alert: {
                isOpen: false,
                msg: ""
            }
        };
    },
    
    methods: {
        updateVehicle(){
          vehicleService.update(this.vehicle.id, this.vehicle);
          //this.$axios.put('vehicles/'+ this.vehicle.id, this.vehicle); // Formato sem service
          this.$router.push('/listing');
        },
        editVehicle(){
            //Tentativa com tratativa de erros. Ainda não utilizada
            vehicleService.update(this.vehicle.id, this.vehicle).then(
                response => {
                    this.alert.isOpen= true;
                    this.alert.msg="Alteração efetuada com sucesso!";
                },
                error => {
                    this.alert.isOpen= true;
                    this.alert.msg="Não foi possível alterar o veículo!";
                }
            );
            this.$router.push('/listing');
        },
        init(){
            vehicleService.listById(this.$route.params.id).then(response => {
                this.vehicle = response.data
            });
        }
    },
    mounted(){
        this.init();
    }
}
</script>

