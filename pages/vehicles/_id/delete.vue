<template>
    <!-- Tela de confirmação de exclusão: -->
    <section>
        <h2>Excluir veículo?</h2>
        <form v-on:submit.prevent="deleteVehicle">
            <p>Aviso: esta ação não pode ser desfeita!</p>
            <button type="submit" class="btn btn-success btn-lg">Sim</button>
            <nuxt-link to="/listing" class="btn btn-danger btn-lg">Não</nuxt-link>
        </form>

        <v-snackbar
            v-model="snackbar"
            absolute
            center
            outlined
            :color="typeAlert"
            :timeout="3000"
            >
            <b>{{msgAlert}}</b>
            <v-btn
                color="black"
                text
                @click="redirect"
            >
                <h6>Voltar à listagem</h6>
            </v-btn>
        </v-snackbar>
    </section>
</template>

<script>

import VehicleService from '@/services/VehicleService'

export default {
    data () {
        return {
            snackbar: false,
            msgAlert: '',
            typeAlert: '',
            titleAlert: ''
        }
        
    },
    methods: {
        deleteVehicle() {
            VehicleService.delete(this.$route.params.id).then(
                () => {
                    this.alert("Veículo excluído com sucesso!", "success");
                }
            ).catch(e => {
                this.alert("Ocorreu um erro na exclusão.", "error");
            });
        },
        alert(msg, type){
            this.msgAlert = msg;
            this.typeAlert = type;
            this.snackbar = true;
        },
        redirect(){
            this.$router.push('/listing');
        },
    }
}
</script>

<style scoped>
h6{
    color: white;
}
</style>
