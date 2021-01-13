<!-- Arquivo padrão criado pelo vuetify e reaproveitado para layout do projeto a ser desenvolvido.-->

<template>
  <v-app dark> 

    <!-- Barra lateral hide/appear com listagem da navegação-->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <!-- Navegação da gaveta/drawer: -->
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Cria o ícone de clipped (3 riscos horizontais), esconde e mostrando a barra de menu lateral ao clicar: -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      
    <!-- Título da página com espaçamento até o final de ocupação: -->
    <v-toolbar-title v-text="title" />
    <v-spacer />
    </v-app-bar>

    <!-- Tela responsável pelo conteúdo da aplicação em si: -->
    <v-main>
      <v-container class="text-center">
        <img src="~/assets/chopper.png" style="width: 150px; height: 150px" />
        <nuxt /> <!-- Isso implica que o conteúdo das páginas/componentes que usam esse layout default.vue entram aqui-->
      </v-container>
    </v-main>

    <!-- Footer do layout:-->
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} - Geremias Corrêa - Com uso do template Vuetify.js</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-account-check',
          title: 'Cadastro de veículo',
          to: '/register'
        },
        {
          icon: 'mdi-account-edit',
          title: 'Alteração de veículo',
          to: '/alteration'
        },
        {
          icon: 'mdi-format-align-justify',
          title: 'Listagem de veículos',
          to: '/listing'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Locadora de veículos'
    }
  }
}
</script>
