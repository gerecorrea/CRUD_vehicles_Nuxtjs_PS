<template>
    <div class="container text-center"> 
        <!-- Agora a listagem de maneira válida: --> 
        <!-- Esta div mais ao topo, atnes da table, preciso rever melhorrr-->
        <div class="container text-center">
            <!-- <img src="~/assets/car.png" style="width:250px;height:250px;"> -->
            <h1 class=""> Listagem de veículos</h1>

        </div>

        <!-- Força atualização de veículos -->
        <div class="container">
            <button @click="getVehicles" id="edit-button" title="Edit" class="btn btn-warning btn-sm" role="button">
                <span class="glyphicon glyphicon-th-list"></span>    
                Atualizar listagem
            </button>
        </div>

        <!-- Para busca e adição de novo carro: -->
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
                        <button @click="editVehicle(props.row.id)" id="edit-button" title="Edit" class="btn btn-warning btn-sm" role="button">Editar</button>
                        <MoreDialog2 v-bind:car="props.row" class="btn btn-primary btn-xs" />
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
                        <button @click="editVehicle(car.id)" id="edit-button" title="Edit" class="btn btn-warning btn-sm" role="button">Editar</button>                
                        <MoreDialog2 v-bind:car="car" class="btn btn-primary btn-xs" />
                        <button @click="deleteVehicle(car.id) " id="delete-button" title="Delete" class="btn btn-danger btn-sm" role="button">Excluir</button>
                    </div>
                </td>
                <td>
                    <img :src="car.photo" alt style="width:65px;height:45px;"> 
                </td>
            </tr>
            </tbody>
        </table> -->

        


    </div>

</template>

<script>
import Logo from '~/components/Logo.vue'
//import VuetifyLogo from '~/components/VuetifyLogo.vue'
//import MoreDialog from '~/components/MoreDialog.vue'
import MoreDialog2 from '~/components/MoreDialog2.vue'
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
//import {backendHost} from '../../api/config.js'

import vehicleService from '@/services/vehicleService' //service para backend

export default {
    components: {
        Logo,
        //MoreDialog,
        MoreDialog2,
        VueGoodTable
    },
    data() {
        // Dados instanciados inicialmente para uso:
        return{
            searchKey: '',
            //vehicles_list: this.$store.state.car_list,
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
        }
    },
    methods: {
        getVehicles(){
            // Função requisitando do backend que tá funcionando e listando
            // Precisa tratar possíveiserros (sucesso/erro) nela ainda.
            vehicleService.list().then(res => {
                this.vehicles_list = res.data
                //console.log(this.vehicles_list)
                //() => {
                //this.alert.isOpen = true;
                  //  this.alert.msg = "Problema ao requisitar os dados!"
            //});
            })
        },

        editVehicle(id){
            // Apenas enviando o id para pagina de edição
            this.$router.push('/vehicles/' + id)
        },

        deleteVehicle(id){
            //Teste do delete, 
            vehicleService.delete(id); //agora tá funfando!
            //this.$axios.$delete('vehicles/' + id); // Formato sem service
            //this.getVehicles();
            //this.$router.push('/');
            this.$router.push('/listing');
            //vm.$forceUpdate();
        }      
    },
    mounted(){
        // Mounted é uma função para efetuar a execução automática sem que o usuário precise efetuar qlqr ação. Ele roda ao carregar a página.
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