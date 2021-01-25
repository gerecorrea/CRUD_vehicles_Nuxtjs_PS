<template>
    <!-- Tela de cadastro: -->
    <div>
        <div class="container">
            <div class="text-center">
                <h1 class="">Cadastro de veículo</h1>
                    <form v-on:submit.prevent="createVehicle">
                        <Forms :caraux="vehicle"></Forms>
                        <button type="submit" class="btn btn-primary">Cadastrar</button>
                        <nuxt-link to="/listing" class="btn btn-danger">Cancelar</nuxt-link>
                    </form>
            </div>
        </div>

        <v-snackbar
            v-model="snackbar"
            absolute
            center
            outlined
            :color="typeAlert"
            :timeout="3000"
        >
            <b>{{ msgAlert }}</b>
            <v-btn color="black" text @click="redirect"> <h6>Voltar à listagem</h6> </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
import Forms from "~/components/Form.vue";
import VehicleService from "@/services/VehicleService";

export default {
    components: {
        Forms,
    },
    data() {
        return {
            vehicle: {
                name: "",
                description: "",
                brand: "",
                quantity: null,
                license_plate: "",
                year: null,
                type: "",
                color: "",
                fipe: null,
                insurance: null,
                photo: "",
            },
            snackbar: false,
            msgAlert: "",
            typeAlert: "",
            titleAlert: "",
          };
    },
    methods: {
        createVehicle() {
            VehicleService
                .create(this.vehicle)
                .then(() => {
                    this.clean();
                    this.alert("Veículo cadastrado com sucesso!", "success");
                })
                .catch((e) => {
                    this.alert("Ocorreu um erro no cadastro.", "error");
                }
          );
        },
        alert(msg, type) {
            this.msgAlert = msg;
            this.typeAlert = type;
            this.snackbar = true;
        },
        redirect() {
            this.$router.push("/listing");
        },
        clean(){
            this.vehicle.name = "";
            this.vehicle.description = "";
            this.vehicle.brand = "";
            this.vehicle.quantity = null;
            this.vehicle.color = "";
            this.vehicle.year = null;
            this.vehicle.license_plate = "";
            this.vehicle.type = "";
            this.vehicle.insurance = null;
            this.vehicle.fipe = null;
            this.vehicle.photo = "";
        }
    },
};
</script>

<style scoped>
h6{
    color: white;
}
</style>