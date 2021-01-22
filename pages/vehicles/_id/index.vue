

<template>
    <!-- Tela de edição: -->
    <section class="text-center">
        <h2>Edição de veículo</h2>
        <form v-on:submit.prevent="updateVehicle">
            <!-- Chama o component Formulario.vue, com passagem de valor props car_aux recebendo o objeto do veículo clonado -->
            <Forms :caraux="vehicle"></Forms>
            <button type="submit" class="btn btn-primary">Salvar</button> <!-- Submit, aciona o v-on acima -->
            <nuxt-link to="/listing" class="btn btn-danger">Cancelar</nuxt-link> <!-- Volta à listagem, sem alteração -->
        </form>

        <v-snackbar
            v-model="snackbar"
            bottom
            left
            :color="typeAlert"
            :timeout="4000"
            >
            <b>{{msgAlert}}</b>
            <v-btn
                color="black"
                text
                @click="redirect"
            >
                Voltar à listagem
            </v-btn>
        </v-snackbar>

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
            snackbar: false,
            msgAlert: '',
            typeAlert: '',
            titleAlert: ''
        };
    },
    
    methods: {
        updateVehicle(){
          //this.$axios.put('vehicles/'+ this.vehicle.id, this.vehicle); // Formato sem service
            vehicleService.update(this.vehicle.id, this.vehicle).then(
                () => {
                    this.alert("Veículo editado com sucesso!", "success");
                }
            ).catch(e => {
                let msg = "Ocorreu algum erro inesperado.";
                if (e.response && e.response.status === 400){
                    msg = e.response.data.message;
                }
                this.alert(msg, "error");
            });
            //this.$router.push('/listing');
        },
        alert(msg, type){
            this.msgAlert = msg;
            this.typeAlert = type;
            this.snackbar = true;
        }, 
        redirect(){
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
    },
    }
</script>

