<template>
    <v-dialog
    v-model="dialog"
    width="800px"
    >
        <template v-slot:activator="{ on, attrs }">
            <!-- x-small, small, medium, large, x-large -->
            <v-btn small class="btn btn-primary btn-xs" 
            v-bind="attrs"
            v-on="on"
            >
            Info
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
            <span class="headline">Sobre o carro:</span>
            </v-card-title>
            <v-card-text>
                <!-- Envia-se com v-bind o dado do nó pai e aqui pego com props e uso faço tal acesso ao objeto: -->
                <v-row>
                    <v-col cols="12" sm="4">
                        <h4> Nome: {{car.name}} </h4>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <h4> Marca: {{car.brand}} </h4>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <h4> Placa: {{car.license_plate}} </h4>
                    </v-col>

                    <v-col cols="12" sm="4">
                        <h5> Cor: {{car.color}} </h5>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <h5> Ano: {{car.year}} </h5>
                    </v-col>
                    <v-col cols="12" sm="4">
                        <h5> Tipo: {{car.type}} </h5>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <h5> Valor do seguro anual: {{car.insurance}} </h5>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <h5> Valor da tabela FIPE: {{car.fipe}} </h5>
                    </v-col>

                    <v-col cols="12" sm="12">
                        <h5> Descrição: {{car.description}} </h5>
                    </v-col>

                    <v-col cols="12" sm="12">
                        <h6> Quantidade disponível: {{car.quantity}} </h6>
                    </v-col>

                    <h5> Foto: </h5>
                    <img v-bind:src='car.photo' alt style="width:100px;height:100px;">
                    <img src="/assets/corsa-2003.jpg"> <!-- Funciona, porém estático-->
                    <img :src="car.photo" alt style="width:50px;height:50px;"> <!-- Era para funcionar :/-->
                    


                </v-row>

                
                
                <!-- etcc -->
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                
                <v-btn
                    color="red darken-1"
                    text
                    @click="dialog = false"
                >
                    Voltar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    props: ['car']
  }
</script>

<style scoped>
span{
    color: white;
    font: bold;
}
h6{
    color: rgb(8, 80, 8);
    font-size: 1.6em;
}
h4, h5{
    color: #b88c0b;
    font-size: 1.3em;
}
</style>