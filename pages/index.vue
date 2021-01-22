<template>
    <div>
        <div class="container">
            <div class="text-center">
                <h1 class="">Bem-vindo(a) à PS Locação de Veículos</h1>
                <h1>Aqui você pode:</h1>
                <h3>Cadastrar um veículo</h3> 
                <h3>Editar cadastro de veículos</h3>
                <h3>Listar e filtrar os nossos veículos possíveis para locação</h3>
                <h3>Excluir cadastro de veículos</h3>
              
            </div>
        </div>
    </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
    components: {
        Logo,
    },
};
</script>

<style scoped> 
    h1{
        color: #ffb641;
    }
</style>