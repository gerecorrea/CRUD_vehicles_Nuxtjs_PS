<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            type="submit" 
            class="btn btn-primary"
          v-bind="attrs"
          v-on="on"
        >
          Cadastrar2
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Veículo cadastrado com sucesso!
        </v-card-title>

        <v-card-text>
          Cadastrado com sucesso!
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    }
  }
</script>