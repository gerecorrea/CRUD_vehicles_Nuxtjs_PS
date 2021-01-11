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
            <span class="headline">Sobre o carro</span>
            </v-card-title>
            <v-card-text>
                <!-- Envia-se com v-bind o dado do nó pai e aqui pego com props e uso faço tal acesso ao objeto: -->
                <h5> Nome: {{car.name}} </h5>
                <h5> Marca: {{car.brand}} </h5>
                <h5> Descrição: {{car.description}} </h5>
                <h5> Cor: {{car.color}} </h5>
                <h5> Ano: {{car.year}} </h5>
                <h5> Placa: {{car.license_plate}} </h5>
                <h5> Tipo: {{car.type}} </h5>
                <h5> Valor do seguro anual: {{car.insurance}} </h5>
                <h5> Valor da tabela FIPE: {{car.fipe}} </h5>
                <h5> Quantidade: {{car.quantity}} </h5>
                <h5> Foto: 
                    <img v-bind:src="'https://br.pinterest.com/pin/373798837803616441/'">
                    <img src="https://br.pinterest.com/pin/373798837803616441/">
                </h5>
                
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