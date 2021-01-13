/* Script de armazenamento e alteração dos dados. 
O foco no primeiro momento é só a listagem, pois a alteração e cadastramento será feito via backend
No momento foi realizado adiantadamente as mutations básicas de cadastro e add, porém ficam em standby.*/

// Poderia ser:
/*
  import Vuex from 'vuex'

  const store = new Vuex.Store({
    state: {
      ...
    },
    mutations:{
      ...
    },
    actions: {
      ...
    }
  })
*/

export const state = () => ({
    products: [
        {id: 1, name: 'Corsa', description: 'Motor 1.0, hatch, pequeno, consumo médio', brand: 'Chevrolet', quantity: 2, license_plate: "MHE5467", year: 2003, type: "Carro", color: "Preto", fipe: 5980, insurance: 344, photo: '/assets/corsa-2003.jpg'},
        {id: 2, name: 'Polo', description: 'Motor 1.6, sedan, grande, confortline, bom para viagens', brand: 'Volkswagen', quantity: 3, license_plate: "MHE5467", year: 2003, type: "Carro", color: "Preto", fipe: 5980, insurance: 344, photo: '/assets/car.png'},
        {id: 3, name: 'Uno', description: 'Motor 1.0, hatch, pequeno e econômico', brand: 'Fiat', quantity: 6, license_plate: "MHE5467", year: 2003, type: "Carro", color: "Preto", fipe: 5980, insurance: 344, photo: '/assets/car.png'},
        {id: 4, name: 'Charger R/T', description: 'Motor 3.4, potência, alto consumo, baixo conforto, estilo', brand: 'Dodge', quantity: 1, license_plate: "MHE5467", year: 2003, type: "Carro", color: "Preto", fipe: 5980, insurance: 344, photo: '/assets/car.png'}
    ]
})

export const mutations = {
    ADD_CAR (state, car_aux) {
        /* Função para adição de um novo veículo*/

        // Pega o ID de todos os veículos cadastrados para saber o próximo:
        let id_aux = state.products.map( (prod) => prod.id );
        id_aux.push(0); //Caso não haja nenhum, insere o 0 para retornar ID 1.
        
        // Calculado o novo ID:
        let newId = Math.max(...id_aux) + 1; //Novo ID é o máximo do vertor id_aux + 1
        state.products.push({
            id: newId
          , name: car_aux.name
          , description: car_aux.description
          , brand: car_aux.brand
          , quantity: car_aux.quantity
          , color: car_aux.color
          , year: car_aux.year
          , license_plate: car_aux.license_plate
          , type: car_aux.type
          , insurance: car_aux.insurance
          , fipe: car_aux.fipe
          , photo: car_aux.photo
        });
    },
    UPDATE_CAR (state, car_aux) {
        /* Função para edição de um veículo já existente */

        // Procura no vetor de produtos um o com o id igual ao recebido:
        let car_product = state.products.find(p => p.id === car_aux.id); 

        car_product.name = car_aux.name
        car_product.description = car_aux.description
        car_product.brand = car_aux.brand
        car_product.quantity = car_aux.quantity
        car_product.color = car_aux.color
        car_product.year = car_aux.year
        car_product.license_plate = car_aux.license_plate
        car_product.type = car_aux.type
        car_product.insurance = car_aux.insurance
        car_product.fipe = car_aux.fipe
        car_product.photo = car_aux.photo
    }
}

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
        commit('ADD_CAR', {name: 'Palio', description: 'Motor 1.0, horrível', brand: 'Fiat', quantity: 2, color: 'Preto', year: 2009, license_plate: 'MHE7865', type: 'Carro', insurance: 4312, fipe: 321, photo: "/assets/car.png"})
      }
}