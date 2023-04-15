<template>
  <v-app id="inspire">

    <v-navigation-drawer style="position: fixed;" class="styleSidebar" v-model="drawer" app>
      <!----------------------------------------------------------- INICIO SIDEBAR---------------------------------->
      <v-sheet color=white class="pa-2">
        <!---------------------------------------------Logo de Vital Care---------------------------------------------------------->
        <v-img src="public\LogoDuxon.svg"></v-img>

      </v-sheet>
      <v-divider></v-divider>


      <v-list density="compact" nav>
        <!---------------------------------------------------------menu de navegación-------------------------------->
        <v-list-item @click="show_dash()" class="styleList" prepend-icon="mdi-clock" title="Dashboard"
          value="inicio"></v-list-item>
        <v-list-item @click="show_tickets()" class="styleList" prepend-icon="mdi-ticket" title="Tickets"
          value="calendario"></v-list-item>
        <v-list-item @click="show_equipos()" class="styleList" prepend-icon="mdi-laptop" title="Equipos"
          value="historial"></v-list-item>
        <v-list-item @click="showConsulta()" class="styleList" prepend-icon="mdi-human" title="Usuarios"
          value="consulta"></v-list-item>
        <v-list-item @click="showReportes()" class="styleList" prepend-icon="mdi-email" title="Correos"
          value="reportes"></v-list-item>
        <v-list-item @click="showHistorial()" class="styleList" prepend-icon="mdi-tools" title="Mantenimiento"
          value="historial"></v-list-item>
      </v-list>


    </v-navigation-drawer><!--fin de menu de navegación-------------------------------------------------------->


    <!---inicio de tool bar------------------------------------------------------------------------------------>



    <v-app-bar style="position: fixed; background:  #e8e8e8;">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>DUXON SEPIVER S.A DE C.V</v-toolbar-title>


      <v-btn stacked @click="salir()"> <!--boton de logout---------------------------------------->
        <v-icon icon="mdi-login"></v-icon>
        Salir
      </v-btn><!--fin de boton de logout---------------------------------------------------->

    </v-app-bar> <!--fin de tool bar--------------------------------------------------------------------------->

    <v-main> <!--AQUI VA EL CONTENIDO-------------------------------------------------------------------------->

      <router-view></router-view>
      <!-- <button class="d" @click="generarpdf()"> descargar</button> -->
    </v-main><!--fin de contenido----------------------------------------------------------------------------------------->

  </v-app>
</template>
  
<script>
import router from "@/main";
import dashboard from "@/components/dashboard.vue";
import tickets from "@/components/tickets.vue";
import equipos from "@/components/equipos.vue";





export default {

  name: 'soporte',
  components: {
  
  },

  children: [
    {
      path: 'dashboard',
      component: dashboard,
    },
    {
      path: 'tickets',
      component: tickets,
    },
    {
      path: 'equipos',
      component: equipos,
    }



  ],
  data: () => ({
    drawer: null,
    inicio: true,
    citas: false,
    pagBar: false,
    consulta: false,
    historial: false,
    reportes: false,
    polarizar: false,
    citasVepertinas: [],
    citasMatutinas: []


  }),



  methods: {

    show_dash() {
      router.push('dashboard')
    },

    show_tickets(){
      router.push('tickets')
    },

    show_equipos(){
      router.push('equipos')
    },


  },

}

</script>
  
  
<style>
.styleSidebar {

  background: white;
  color: rgb(27, 45, 84);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

}

.styleList {
  background: white;

}

.styleList:hover {
  background: rgba(1, 1, 17, 0.356);
  color: white;
  box-shadow: 0 0 10px rgb(39, 39, 39);

}


/* Estilo de boton switch matutino, vespertino */
.label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #394a56;
}

.label-text {
  margin-left: 16px;
}

.toggle {
  isolation: isolate;
  position: relative;
  height: 30px;
  width: 60px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: -8px -4px 8px 0px #ffffff,
    8px 4px 12px 0px #d1d9e6,
    4px 4px 4px 0px #d1d9e6 inset,
    -4px -4px 4px 0px #ffffff inset;
}

.toggle-state {
  display: none;
}

.indicator {
  height: 100%;
  width: 200%;
  background: rgba(0, 140, 143, 0.8);
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow: -8px -4px 8px 0px #ffffff,
    8px 4px 12px 0px #d1d9e6;
}

.toggle-state:checked~.indicator {
  transform: translate3d(25%, 0, 0);
}
</style>