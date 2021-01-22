<template>
    <!-- V-dialog com layout padronizado com foco no que foi realizado no edit.vue -->
    <!-- Fiz uso do v-bind em value para acesso às variáveis do objeto 'car' que recebo. 
    Tudo como v-text-field, porém com opção readonly (tem tbm 'disabled', fica escuro), apenas para amostragem-->
    <v-dialog
    v-model="dialog"
    width="800px"
    >
        <template v-slot:activator="{ on, attrs }">
            <!-- x-small, small, medium, large, x-large -->
            <v-btn small class="btn btn-info btn-xs" 
            v-bind="attrs"
            v-on="on"
            >
            Info
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
            <span class="headline">Informação completo(a) do(a) {{car.name}}:</span>
            </v-card-title>
            <v-card-text>
                <!-- Envia-se com v-bind o dado do nó pai e aqui pego com props e uso faço tal acesso ao objeto: -->
                <v-row>
                    <!-- cols é a quantidade de colunas de cada linha do v-row, sm a quantidade ocupada -->
                    <!-- :items são usadas para v-select para iterar sobre objetos, havendo seleção de escolha ao invés de texto-->
                    <!-- :rules são as funções chamadas para aplicação de restrições -->
                    <v-col cols="12" sm="4">
                        <div class="form-group">
                        <v-text-field :value=car.name color="yellow darken-3" label="Nome" readonly></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="4">
                        <div class="form-group">
                            <v-text-field :value=car.brand color="yellow darken-3" label="Marca" readonly></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="4">
                        <div class="form-group">
                            <v-text-field :value=car.quantity color="yellow darken-3" label="Quantidade disponível" readonly></v-text-field>    
                        </div>
                    </v-col>

                    <v-col cols="12" sm="4">
                        <div class="form-group">
                            <v-text-field :value=car.color color="yellow darken-3" label="Cor" readonly></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="4">
                        <div class="form-group">
                            <v-text-field :value=car.year color="yellow darken-3" label="Ano" readonly></v-text-field>    
                        </div>
                    </v-col>

                    <v-col cols="12" sm="4">
                        <div class="form-group">
                            <v-text-field :value=car.license_plate color="yellow darken-3" label="Placa" readonly></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="4">
                        <div class="form-group">
                            <v-text-field :value=car.type color="yellow darken-3" label="Tipo de veículo" readonly></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="4">
                        <div class="form-group">
                            <v-text-field :value=car.insurance color="yellow darken-3" label="Valor do seguro" readonly></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="4">
                        <div class="form-group">
                            <v-text-field :value=car.fipe color="yellow darken-3" label="Valor da tabela FIPE" readonly></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="12">
                        <div class="form-group">
                        <v-text-field :value=car.description  color="yellow darken-3" label="Descrição" readonly></v-text-field>
                        </div>
                    </v-col>

                    <v-col cols="12" sm="12">
                        <div class="form-group">
                            <center><img :src="car.photo" alt style="width:450px;height:330px;"> </center>
                        </div>
                    </v-col>
                </v-row>
 
                <!-- etcc -->
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                
                <v-btn
                    color="yellow darken-3"
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
    color: #F9A825;
    font: bold;
    padding: 25px;
}
</style>