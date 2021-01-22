<template>
    <!-- Tela de cadastro: -->
    <div>
        <div class="container">
            <div class="text-center">
                <h1 class="">Cadastro de veículo</h1>
                    <form v-on:submit.prevent="createVehicle">
                        <Forms :caraux="vehicle"></Forms>
                        <button type="submit" class="btn btn-primary">Cadastrar</button>
                        <nuxt-link to="/home" class="btn btn-danger">Cancelar</nuxt-link>
                    </form>
            </div>
        </div>

        <v-snackbar
            v-model="snackbar"
            bottom
            left
            :color="typeAlert"
            :timeout="4000"
        >
            <b>{{ msgAlert }}</b>
            <v-btn color="black" text @click="redirect"> Voltar à listagem </v-btn>
        </v-snackbar>
    </div>
</template>

<script>
import Forms from "~/components/Formulario.vue";
import vehicleService from "@/services/vehicleService";

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
            vehicleService
                .create(this.vehicle)
                .then(() => {
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
                  this.alert("Veículo cadastrado com sucesso!", "success");
                })
                .catch((e) => {
                  let msg = "Ocorreu algum erro inesperado.";
                  if (e.response && e.response.status === 400) {
                    msg = e.response.data.message;
                  }
                  this.alert(msg, "error");
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
    },
};
</script>

<style scoped>
</style>