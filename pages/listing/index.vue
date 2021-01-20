<template>
    <div class="container text-center"> 
        <!-- Agora a listagem de maneira válida: --> 
        <!-- Esta div mais ao topo, atnes da table, preciso rever melhorrr-->
        <div class="container text-center">
            <!-- <img src="~/assets/car.png" style="width:250px;height:250px;"> -->
            <h1 class=""> Listagem de veículos</h1>

        </div>

        <!-- Botão para listar os carros: -->
        <div>
            <button @click="getVehicles" class="btn btn-primary btn-xs">Listar carros</button>
        </div>

        <!-- Para busca e adição de novo carro: -->
        <div class="padding" >
            <v-row>
                <v-col cols="12" sm="9">
                    <input v-model="searchKey" class="form-control" id="search-element" placeholder="Buscar carro por nome" required/>
                </v-col>

                <v-col cols="12" sm="3">
                    <nuxt-link class="btn btn-success" :to="{path: '/vehicles'}">
                        <span class="glyphicon glyphicon-plus"></span>
                        Cadastrar novo veículo
                    </nuxt-link>
                </v-col>
            </v-row>
        </div>

        <!-- Table real e final que será utilizado, com vehicles_list puxando do backend: -->
        <table class="table" border="1">
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
            <tr v-for="car in vehicles_list" :key="car.id">
                <!-- Aqui poderia ser car in products, porém como quero aplicação de filtro itero sobre o computed carsProducts -->
                <td> {{car.name}} </td>
                <td> {{car.description}} </td>
                <td> {{car.brand}} </td>
                <td> {{car.type}} </td>
                <td> {{car.quantity}} </td>
                <td>
                    <div>
                        <!-- Editar - FUNFANDO: -->
                        <nuxt-link class="btn btn-warning btn-sm" :to="{name: 'vehicles-id', params: {id: car.id}}">Editar</nuxt-link>

                        <!-- Novo botão de edit, vendo se assim fica melhor - FUNFANDO-->
                        <!-- <button id="action-button" title="Edit" class="btn btn-warning btn-xs" role="button" @click="editVehicle(car.id)">Editar2</button> -->
                        
                        <!-- Botão INFO - v-dialog v-bind:(props que recebe (car) = "objeto lançado daqui (car)"): -->
                        <MoreDialog2 v-bind:car="car" class="btn btn-primary btn-xs" />

                        <!-- Botão de delete - somente teste ainda -->
                        <button @click="deleteVehicle(car.id) " id="action-button" title="Delete" class="btn btn-danger btn-sm" role="button">Excluir</button>
                    </div>
                </td>
                <td>
                    <!-- <img src="~/assets/corsa-2003.jpg" style="width:25px;height:25px;"> -->
                    <!-- uso de imagem com v-bind implicito para interpolar atributos-->
                    <img :src="car.photo" alt style="width:30px;height:30px;"> 
                </td>
            </tr>
            </tbody>
        </table>



        <!-- Aqui uma imeplmentação via uso de tabelas normais de html, usando componentes v-for para iteração,
        assim como outros para navegação e envios de dados. Está tudo certo. -->
        <table class="table" border="1">
            <thead>
            <tr>
                <th><center>ID</center></th>
                <th><center>Nome</center></th>
                <th><center>Descrição</center></th>
                <th><center>Marca</center></th>
                <th><center>Quantidade</center></th>
                <th><center>Ações</center></th> <!--class="col-sm-2" -->
                <th><center>Foto</center></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="car in carsProducts" :key="car.id">
                <!-- Aqui poderia ser car in products, porém como quero aplicação de filtro itero sobre o computed carsProducts -->
                <td> {{car.id}} </td>
                <td> {{car.name}} </td>
                <td> {{car.description}} </td>
                <td> {{car.brand}} </td>
                <td> {{car.quantity}} </td>
                <td>
                    <div>
                        <!-- Editar: -->
                        <!-- <nuxt-link class="btn btn-warning btn-xs" :to="{name: 'alteration-id-edit', params: {id: car.id}}">Editar</nuxt-link> -->
                        <nuxt-link class="btn btn-warning btn-xs" :to="{name: 'vehicles-id', params: {id: car.id}}">Editar</nuxt-link>
                        <!-- Botão INFO - v-dialog v-bind:(props que recebe (car) = "objeto lançado daqui (car)"): -->
                        <MoreDialog2 v-bind:car="car" class="btn btn-primary btn-xs" />
                    </div>
                </td>
                <td>
                    <!-- <img src="~/assets/corsa-2003.jpg" style="width:25px;height:25px;"> -->
                    <!-- uso de imagem com v-bind implicito para interpolar atributos-->
                    <img :src="car.photo" alt style="width:30px;height:30px;"> 
                </td>
            </tr>
            </tbody>
        </table>

        <button @click="teste" class="btn btn-primary btn-xs">Teste listagem axios</button>

        <!-- Abaixo a listagem via vue-good-table, uma tentativa de implementação. Os botões de navegação não estão chegando aos alvos: -->
        <div>
            <vue-good-table
            :columns="columns"
            :rows="carsProducts"
            styleClass="vgt-table striped"
            theme="default">
                <!-- Aqui poderia ser car in products, porém como quero aplicação de filtro itero sobre o computed carsProducts -->
                <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'actions'">
                        <!-- Caso o campo seja actions, quero mostrar os botões de ação: -->
                        <nuxt-link class="btn btn-warning btn-xs" :to="{name: 'vehicles-id', params: {id: props.column.id}}">Editar</nuxt-link>
                        <MoreDialog2 v-bind:car="products" class="btn btn-primary btn-xs" />
                    </span>
                    <span v-else-if="props.column.field == 'photo'">
                        <!-- Caso o campo seja foto, queremos mostrar uma imagem, não string: -->
                        <img :src="props.column.photo" alt style="width:45px;height:35px;"> 
                    </span>
                    <span v-else>
                        <!-- Demonstração normal do atributo: -->
                        {{props.formattedRow[props.column.field]}} 
                    </span>
                    

                </template>
            </vue-good-table>
        </div>

        <!-- ################# Parte da ligação com backend - Still not working: ############## -->

        <!-- <div>
            <button v-on:click="list_all" class="btn btn-primary btn-xs">Lista normal</button>
            <button v-on:click="list_all_service" class="btn btn-primary btn-xs">Lista pelo service</button>
             <button v-on:click="list_moreonetry" class="btn btn-primary btn-xs">Lista pelo service Listagem4</button> -->
            <!-- <button v-on:click="list_springboottutorial" class="btn btn-primary btn-xs">Lista pelo service Listagem5</button> -->
            <!--
            <h4>Listagem: {{list_data}}</h4>
            <h4>Listagem2: {{list_test}}</h4>
            <h4>Listagem3: {{data_anothertry}}</h4>
            <h4> Listagem5 - {{list_sbt}} </h4>
        </div> -->
        


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
            products: this.$store.state.products, 
            searchKey: '',
            //vehicles_list: this.$store.state.car_list,
            vehicles_list: [],
            columns: [
                {
                label: 'ID',
                field: 'id',
                type: 'number',
                },
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
            rows: [
                {id: 1, name: 'Corsa', description: 'Motor 1.0, hatch, pequeno, consumo médio', brand: 'Chevrolet', quantity: 2, license_plate: "MHE5467", year: 2003, type: "Carro", color: "Preto", fipe: 5980, insurance: 344, photo: '/assets/corsa-2003.jpg'},
                {id: 2, name: 'Polo', description: 'Motor 1.6, sedan, grande, confortline, bom para viagens', brand: 'Volkswagen', quantity: 3, license_plate: "MHE5467", year: 2003, type: "Carro", color: "Preto", fipe: 5980, insurance: 344, photo: '/assets/car.png'},
                {id: 3, name: 'Uno', description: 'Motor 1.0, hatch, pequeno e econômico', brand: 'Fiat', quantity: 6, license_plate: "MHE5467", year: 2003, type: "Carro", color: "Preto", fipe: 5980, insurance: 344, photo: '/assets/car.png'},
                {id: 4, name: 'Charger R/T', description: 'Motor 3.4, potência, alto consumo, baixo conforto, estilo', brand: 'Dodge', quantity: 1, license_plate: "MHE5467", year: 2003, type: "Carro", color: "Preto", fipe: 5980, insurance: 344, photo: '/assets/car.png'}
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
            // No momento não estou usando, pois a outa está sendo mais efetiva.
            this.$router.push('/vehicles/' + id)
        },

        deleteVehicle(id){
            //Teste do delete, tá retornando 405 - método não permitido
            vehicleService.delete(id);
            this.$router.push('/listing')
        },


        teste(){
            console.log("I'm here");
            vehicleService.list();
        }
        // async list_anothertry(){
        //     let data_anothertry = (await $axios.get(backendHost+'/vehicles')).data
        //     this.data_anothertry = data_anothertry
        
    },
    mounted(){
        // Mounted é uma função para efetuar a execução automática sem que o usuário precise efetuar qlqr ação. Ele roda ao carregar a página.
        this.getVehicles();
    },
    created() {
        //this.list_springboottutorial();
        //this.list_anothertest();
        //this.list_veiculoss();
    },
    computed: {
        carsProducts(){
            // Retorna os carros pelo filtro de busca (fórmula padrão de filtragem):
            return this.products.filter(car => car.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1)
        },
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