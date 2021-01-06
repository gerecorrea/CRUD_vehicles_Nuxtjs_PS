<template>
    <div class="container">
        <div>
            <h3> Descrição completa do carro </h3>
            <h3> Id deste: {{$route.params.id}} </h3>

        </div>
    </div>
</template>

<script>
export default {
    validate(data){
        //validate é um metodo que você obtém um argumento e valida o mesmo
        // console.log(data) // retorna o dado validado como um todo
        // return data.params.id == 1 //apenas irá careregar a página se id igual a 1, se não a página não é encontrado
        return /^\d+$/.test(data.params.id) // verifica se o id é um número, apenas retorna a página se for composto por digitos apenas
    }
}
</script>
    
<style>

</style>