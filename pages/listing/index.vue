<template>
    <div class="container text-center"> 
        <!-- Agora a listagem de maneira válida: --> 
        <!-- Esta div mais ao topo, atnes da table, preciso rever melhorrr-->
        <div class="container text-center">
            <!-- <img src="~/assets/car.png" style="width:250px;height:250px;"> -->
            <h1 class=""> Listagem de veículos</h1>

        </div>

        <!-- Para busca e adição de novo produto: -->
        <div class="padding" >
            <v-row>
                <v-col cols="12" sm="9">
                    <!-- <label for="search-element">Buscar carro</label> -->
                    <input v-model="searchKey" class="form-control" id="search-element" placeholder="Buscar carro" requred/>
                </v-col>

                <v-col cols="12" sm="3">
                    <nuxt-link class="btn btn-success" :to="{path: '/register'}">
                        <span class="glyphicon glyphicon-plus"></span>
                        Cadastrar novo veículo
                    </nuxt-link>
                </v-col>
            </v-row>
        </div>

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
               
                <td> {{car.id}} </td>
                <td> {{car.name}}
                <!-- <nuxt-link :to="{name: 'product-id-edit', params: {id: car.id}}">{{ car.name }}</nuxt-link> -->
                </td>
                <td>{{ car.description }}</td>
                <td>
                {{ car.brand }}
                </td>
                <td> {{car.quantity}} </td>
                <td>

                <!-- Edit: -->
                <nuxt-link class="btn btn-warning btn-xs" :to="{name: 'alteration-id-edit', params: {id: car.id, product: products}}">Editar</nuxt-link>

                <!-- INFO - v-dialog: -->
                <MoreDialog2 v-bind:car="car" class="btn btn-primary btn-xs" />

                <!-- <nuxt-link class="btn btn-primary btn-xs" :to="{name: 'alteration/id', params: {id: car.id}}">See</nuxt-link> -->
                <!-- <button class="btn btn-primary btn-xs" @click="onLoadCar">See</button> executa a função onLoadCar -->
                <!-- <nuxt-link class="btn btn-primary btn-xs" :to="{name: 'listing-id-index', params: {id: car.id}}">See</nuxt-link> -->
                
                <!-- <nuxt-link class="btn btn-danger btn-xs" :to="{name: 'product-id-delete', params: {id: car.id}}">Delete</nuxt-link> -->

                <!-- <nuxt-link :to="{ path: '/listing',hash:'car.id'}">Contact</nuxt-link> -->
                <!-- <nuxt-link class="btn btn-primary btn-xs" to="/listing/_id">See</nuxt-link> -->

                </td>
                <td>
                    <!-- <img src="~/assets/corsa-2003.jpg" style="width:25px;height:25px;"> -->
                    <!-- uso de imagem com v-bind implicito para interpolar atributos-->
                    <img :src="car.photo" alt style="width:30px;height:30px;"> 
                </td>
            </tr>
            </tbody>
        </table>

    </div>

</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import MoreDialog from '~/components/MoreDialog.vue'
import MoreDialog2 from '~/components/MoreDialog2.vue'

export default {
    components: {
        Logo,
        MoreDialog,
        MoreDialog2
    },
    data() {
        // Dados instanciados inicialmente para uso:
        return{
            searchKey: '', products: this.$store.state.products
        }
    },
    methods: {

    },
    computed: {
        carsProducts(){
            // Retorna os carros adicionados:
            // return this.products
            // Retorna os carros pelo filtro de busca:
            return this.products.filter(product => product.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1)
        }
    },
    name: 'Listagem',

}
</script>

<style>

    .form-group {
        max-width: 500px;
    }

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