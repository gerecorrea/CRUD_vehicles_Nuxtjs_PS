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

import vehicleService from '@/services/vehicleService'

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
            vehicleService.delete(this.$route.params.id).then(
                () => {
                    this.alert("Veículo excluído com sucesso!", "success");
                }
            ).catch(e => {
                let msg = "Ocorreu algum erro inesperado.";
                if (e.response && e.response.status === 400){
                    msg = e.response.data.message;
                }
                this.alert(msg, "error");
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
