<template>
  <span>
    <v-row>
      <!-- cols é a quantidade de colunas de cada linha do v-row, sm a quantidade ocupada -->
      <!-- :items são usadas para v-select para iterar sobre objetos, havendo seleção de escolha ao invés de texto-->
      <!-- :rules são as funções chamadas para aplicação de restrições -->
      <v-col cols="12" sm="4">
        <div class="form-group">
          <v-text-field v-model="caraux.name" :rules="max_general" color="pink lighten-2" label="Nome" required></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="4">
        <div class="form-group">
            <v-text-field v-model="caraux.brand" :rules="max_general" color="pink lighten-2" label="Marca" required></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="4">
        <div class="form-group">
            <v-select v-model="caraux.quantity" :items="available_total" color="pink lighten-2" label="Quantidade disponível" required></v-select>    
        </div>
      </v-col>

      <v-col cols="12" sm="4">
        <div class="form-group">
            <v-text-field v-model="caraux.color" :rules="max_general" color="pink lighten-2" label="Cor" required></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="4">
        <div class="form-group">
            <v-select v-model="caraux.year" :items="yearss" color="pink lighten-2" label="Ano" required></v-select>    
        </div>
      </v-col>

      <v-col cols="12" sm="4">
        <div class="form-group">
            <v-text-field v-model="caraux.license_plate" :rules="max_license" color="pink lighten-2" label="Placa" required></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="4">
        <div class="form-group">
            <v-select v-model="caraux.type" :items="types" color="pink lighten-2" label="Tipo de veículo" required></v-select>          
        </div>
      </v-col>

      <v-col cols="12" sm="4">
        <div class="form-group">
            <v-text-field v-model="caraux.insurance" color="pink lighten-2" label="Valor do seguro" required></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="4">
        <div class="form-group">
            <v-text-field v-model="caraux.fipe" color="pink lighten-2" label="Valor da tabela FIPE" required></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="form-group">
            <v-text-field v-model="caraux.photo" color="pink lighten-2" label="Link da foto" required></v-text-field>
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="form-group">
          <v-text-field v-model="caraux.description"  :rules="max_description" color="pink lighten-2" label="Descrição" required></v-text-field>
        </div>
      </v-col>

      <!-- Outras meneiras válidas de exemplo (mais simples e menos vuejs):
        Para input de texto normal:
        <v-col cols="12" sm="4">
            <div class="form-group">
                <label for="edit-name">Marca</label>
                <input class="form-control" id="edit-brand" v-model="caraux.brand" placeholder="Insira a marca..." required/>
            </div>
        </v-col>

        Para select de opções (com v-for):
        <v-col cols="12" sm="4">
            <div class="form-group">
                <label for="edit-name">Ano</label>
                <select class="form-control" v-model="caraux.year">
                    <option value="0">{{caraux.year}}</option>
                    <option v-for="year in yearss" :value="year" :key="year">{{year}}</option>
                </select>
            </div>
        </v-col>

        Textarea:
        <label for="edit-name">Descrição</label>
        <textarea class="form-control" id="edit-description" rows="1" placeholder="Insira a descrição..." v-model="caraux.description"></textarea>
       -->
    </v-row>
  </span>
</template>

<script>
  export default {
    name: 'Forms',
    props: ['caraux'],
    computed : {   
        years () {
            const year = new Date().getFullYear()
            return Array.from({length: year - 1900}, (value, index) => 1901 + index)
        }
    },
    data(){
        return{
            types: ['Carro', 'Motocicleta'],
            yearss: Array.from(Array(new Date().getFullYear()+1).keys()).reverse(),
            available_total: Array.from(Array(101).keys()),
            max_description: [obj => obj.length <= 50 || "Descrição máxima de 50 caracteres"],
            max_license: [obj => obj.length == 7 || "Uma placa tem 7 dígitos "],
            max_general: [obj => obj.length <= 25 || "Limite de 25 caracteres"]
        }
    }
  }
</script>

