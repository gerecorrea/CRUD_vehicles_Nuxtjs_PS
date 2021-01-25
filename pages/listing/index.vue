<template>
    <div class="container text-center"> 
        <div class="container text-center">
            <h1 class=""> Listagem de veículos</h1>
        </div>

        <!-- Para busca e adição de novo veículo: -->
        <div class="padding" >
            <v-row>
                <v-col cols="12" sm="9">
                    <input v-model="searchKey" class="form-control" id="search-element" placeholder="Buscar veículo por nome" required/>
                </v-col>

                <v-col cols="12" sm="3">
                    <nuxt-link class="btn btn-success" :to="{path: '/vehicles'}">
                        <span class="glyphicon glyphicon-plus"></span>
                        Cadastrar novo veículo
                    </nuxt-link>
                </v-col>

                
            </v-row>
        </div>

        <!-- Listagem oficial, usando vue-good-table: -->
        <div>
            <vue-good-table
            :columns="columns"
            :rows="vehiclesListFiltered"
            styleClass="vgt-table striped"
            theme="black-rhino">
                <template slot="table-row" slot-scope="props">
                    <!-- Obs - reparei (pode estar errado): 
                                Para verificar qual o campo e fazer caso especial: colum.field. 
                                Para acessar determinado campo em envio (botão etc) ou algo especial: row.nomeCampo 
                                Para printar campo na tabela formatado: props.formattedRow[props.columns.field]            
                    -->
                    <span v-if="props.column.field == 'actions'">
                        <!-- Caso o campo seja actions, quero mostrar os botões de ação: -->
                        <MoreInformation v-bind:car="props.row" class="btn btn-primary btn-xs" />
                        <button @click="editVehicle(props.row.id)" id="edit-button" title="Edit" class="btn btn-warning btn-sm" role="button">Editar</button>
                        <button @click="deleteVehicle(props.row.id) " id="delete-button" title="Delete" class="btn btn-danger btn-sm" role="button">Excluir</button>
                    </span>
                    <span v-else-if="props.column.field == 'photo'">
                        <!-- Caso o campo seja foto, queremos mostrar uma imagem, não string: -->
                        <img :src="props.row.photo" alt style="width:45px;height:35px;"> 
                    </span>
                    <span v-else>
                        <!-- Demonstração normal do atributo: -->
                        {{props.formattedRow[props.column.field]}}
                    </span>
                </template>
            </vue-good-table>
        </div>

        <!-- Outra possibilidade de listagem FUNCIONAL, usando v-for, tabela minha mesmo feita, sem vue-good-table: -->
        <!-- <table class="table" border="1">
            <thead>
            <tr>
                <th><center>Nome</center></th>
                <th><center>Descrição</center></th>
                <th><center>Marca</center></th>
                <th><center>Tipo</center></th>
                <th><center>Quantidade</center></th>
                <th><center>Ações</center></th>
                <th><center>Foto</center></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="car in vehiclesListFiltered" :key="car.id">
                <td> {{car.name}} </td>
                <td> {{car.description}} </td>
                <td> {{car.brand}} </td>
                <td> {{car.type}} </td>
                <td> {{car.quantity}} </td>
                <td>
                    <div>
                        <MoreInformation v-bind:car="car" class="btn btn-primary btn-xs" />
                        <button @click="editVehicle(car.id)" id="edit-button" title="Edit" class="btn btn-warning btn-sm" role="button">Editar</button>                
                        <button @click="deleteVehicle(car.id) " id="delete-button" title="Delete" class="btn btn-danger btn-sm" role="button">Excluir</button>
                    </div>
                </td>
                <td>
                    <img :src="car.photo" alt style="width:65px;height:45px;"> 
                </td>
            </tr>
            </tbody>
        </table> -->
    
    <v-snackbar
            v-model="snackbar"
            absolute
            center
            outlined
            :color="typeAlert"
            :timeout="3000"
        >
            <b>{{ msgAlert }}</b>
            <v-btn color="black" text @click="snackbar = false"> <h6>X</h6> </v-btn>
        </v-snackbar>
    
    </div>

    

</template>

<script>
import MoreInformation from '~/components/MoreInformation.vue'
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import VehicleService from '@/services/VehicleService' // Service para backend

export default {
    components: {
        MoreInformation,
        VueGoodTable
    },
    data() {
        return{
            searchKey: '',
            vehicles_list: [],
            columns: [
                {
                    label: 'Nome',
                    field: 'name',
                },
                {
                    label: 'Descrição',
                    field: 'description',
                },
                {
                    label: 'Marca',
                    field: 'brand',
                },
                {
                    label: 'Tipo',
                    field: 'type',
                },
                {
                    label: 'Quantidade',
                    field: 'quantity',
                    type: 'number',
                },
                {
                    label: 'Ações',
                    field: 'actions',
                },
                {
                    label: 'Foto',
                    field: 'photo',
                },
            ],
            snackbar: false,
            msgAlert: "",
            typeAlert: "",
            titleAlert: "",
        }
    },
    methods: {
        getVehicles(){
            VehicleService.list()
                .then(res => {
                    this.vehicles_list = res.data
                })
                .catch((e) => {
                    this.alert("Ocorreu um erro na listagem.", "error");
                }
            );
            
        },
        editVehicle(id){
            // Redireciona para tela de edição apenas:
            this.$router.push('/vehicles/' + id);
        },
        deleteVehicle(id){
            // Redireciona para tela de delete apenas:
            this.$router.push('/vehicles/' + id + '/delete'); // Caso em vehicles/_id/delete.vue
            //this.$router.push('/delete/' + id); // Caso em vehicle/_id/index.vue
        },
        alert(msg, type){
            this.msgAlert = msg;
            this.typeAlert = type;
            this.snackbar = true;
        },     
    },
    mounted(){
        // Com mounted() executa automaticamente o especificado ao iniciar.
        this.getVehicles();
    },
    computed: {
        vehiclesListFiltered(){
            return this.vehicles_list.filter(car => car.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1)
        }
    },
    name: 'Listagem',
}
</script>

<style>
    .padding {
        padding: 25px 0;
    }

    td, th{
        border: 2px solid white;
    }
    
    td:hover, th:hover{
        background-color:#222;
        /* font-size: 1.15em; */
        color: #F9A825;
    }
</style>