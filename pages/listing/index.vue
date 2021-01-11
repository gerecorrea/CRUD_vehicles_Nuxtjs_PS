<template>
    <div class="container text-center"> 
        <!-- Agora a listagem de maneira válida: --> 
        <!-- Esta div mais ao topo, atnes da table, preciso rever melhorrr-->
        <div class="container text-center">
            <img src="~/assets/car.png" style="width:250px;height:250px;">
            <h1 class=""> Listagem de veículos</h1>

        </div>

        <table class="table" border="1">
            <thead>
            <tr>
                <th><center>ID</center></th>
                <th><center>Name</center></th>
                <th><center>Description</center></th>
                <th><center>Brand</center></th>
                <th><center>Quantity</center></th>
                <th class="col-sm-3"><center>Actions</center></th> <!-- O que é possível fazer em cada veíuculo-->
                <th><center>Photo</center></th>
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
                <!-- <span class="glyphicon glyphicon-euro" aria-hidden="true"></span> -->
                </td>
                <td> {{car.quantity}} </td>
                <td>
                <!-- Falta arrumar bem esses links para onde vão.  Ver melhor -->
                <!-- <nuxt-link class="btn btn-primary btn-xs" :to="{name: 'alteration/id', params: {id: car.id}}">See</nuxt-link> -->
                <!-- <button class="btn btn-primary btn-xs" @click="onLoadCar">See</button> executa a função onLoadCar -->
                <!-- <nuxt-link class="btn btn-primary btn-xs" :to="{name: 'listing-id-index', params: {id: car.id}}">See</nuxt-link> -->
                <nuxt-link class="btn btn-warning btn-xs" :to="{name: 'alteration', params: {id: car.id}}">Editar</nuxt-link>
                <!-- <nuxt-link class="btn btn-danger btn-xs" :to="{name: 'product-id-delete', params: {id: car.id}}">Delete</nuxt-link> -->

                <!-- <nuxt-link :to="{ path: '/listing',hash:'car.id'}">Contact</nuxt-link> -->
                <!-- <nuxt-link class="btn btn-primary btn-xs" to="/listing/_id">See</nuxt-link> -->

                <!-- Just a test (it's ok, buttt how to send the object to the component?): -->
                <MoreDialog v-bind:car="car"/>
                <!-- <MoreDialog /> -->

                </td>
                <td>
                    <img src="~/assets/car.png" style="width:25px;height:25px;">
                </td>
            </tr>
            </tbody>
        </table>

        <!-- abaixo inserir todo o menu de cadastro -->
        <!-- Botão de cadastro de veículo -->
        <div class="actions">
            <nuxt-link class="btn btn-success" :to="{path: '/register'}">
                <span class="glyphicon glyphicon-plus"></span>
                Cadastrar novo veículo
            </nuxt-link>
        </div>
    </div>

</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import CarsPreview from '~/components/Cars/CarsPreview.vue'
import MoreDialog from '~/components/MoreDialog.vue'

export default {
    components: {
        Logo,
        CarsPreview,
        MoreDialog
    },
    data() {
        // Dados instanciados para uso:
        return{
            searchKey: '', products: this.$store.state.products, carID: ''
        }
    },
    methods: {
        onLoadCar(){
            // Método para navegação para cada carro em específico
            this.$router.push('/listing/' +this.car.id)
        }
        
    },
    computed: {
        carsProducts(){
            // Retorna os carros adicionados
            return this.products
        }
    },
    name: 'Listagem',

}
</script>

<style>

    .form-group {
        max-width: 500px;
    }

    .actions {
        padding: 10px 0;
    }

    .glyphicon-euro {
        font-size: 12px;
    }
</style>