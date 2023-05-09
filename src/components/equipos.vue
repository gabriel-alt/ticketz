<template>
    <!-- <v-card width="100%"> -->
    <v-container style="background-color: white; min-height: 100%;">
      <v-toolbar color="white" title="EQUIPOS">

        <v-btn @click="ir_a_consulta()" rounded="lg" color="white" class="styleList" style="background-color:rgba(1, 1, 17, 0.356);">
        <v-icon start icon="mdi-laptop"></v-icon>
        AGREGAR EQUIPO
      </v-btn>
       
      </v-toolbar>
      <v-tabs v-model="tabs" centered bg-color="rgba(232, 232, 232, 1)" color="rgba(10, 10, 10, 0.45)"
        id="estiloTab">
        <v-tab value="tab1"> Activos </v-tab>
        <v-tab value="tab2"> Pendientes por Asignar </v-tab>
        <v-tab value="tab3"> Bajas </v-tab>
        <v-tab value="tab4"> Legal </v-tab>
      </v-tabs>
  
      <v-window v-model="tabs">
        <v-window-item value="tab1">
          <activos></activos>
        </v-window-item>
        <v-window-item value="tab2">
          <ticketsSeguimiento></ticketsSeguimiento>
        </v-window-item>
        <v-window-item value="tab3">
          <ticketsAtendidos></ticketsAtendidos>
        </v-window-item>
       
      </v-window>
    </v-container>
  </template>
  
  <script>
  import router from "@/main";
  import activos from "@/components/children/activos.vue"; 
  
  
  export default {
    components: {
     activos,
    
    },
  
    data() {
      return {
        tabs: null,
      };
    },
  
  
    methods: {
  
      ir_a_consulta() {
        const id = this.$route.params.id
        let idInt = parseInt(id)
        console.log(id)
        router.push({ name: 'consulta', params: { id: idInt }})
      },
  
    },
  };
  </script>
  
  <style>
  #estiloTab {
    color:black;
    width: 100%;
  }

  .styleList {
  background: white;

}

.styleList:hover {
  background: rgba(1, 1, 17, 0.356);
  color: white;
  box-shadow: 0 0 10px rgb(39, 39, 39);

}

  </style>
  