<template>
    <!-- <v-card width="100%"> -->
    <v-container style="background-color: white; min-height: 100%;">
      <v-toolbar color="white" title="Dashboard">
       
        <v-btn @click="ir_a_consulta()" rounded="lg" color="white" style="background-color:rgb(20, 49, 110);">
          <v-icon start icon="mdi-arrow-right"></v-icon>
          Ir a consulta
        </v-btn>
      </v-toolbar>
      <v-tabs v-model="tabs" centered bg-color="rgba(232, 232, 232, 1)" color="white"
        id="estiloTab">
        <v-tab value="tab1"> Tickets </v-tab>
        <v-tab value="tab2"> Equipos </v-tab>
        <v-tab value="tab3"> Correos </v-tab>
      </v-tabs>
  
      <v-window v-model="tabs">
        <v-window-item value="tab1">
          <fichaId></fichaId>
        </v-window-item>
        <v-window-item value="tab2">
          <historialaboral></historialaboral>
        </v-window-item>
        <v-window-item value="tab3">
          <historialFamiliar></historialFamiliar>
        </v-window-item>
      
      </v-window>
    </v-container>
  </template>
  
  <script>
  import router from "@/main";
  
  
  export default {
    components: {
     
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
  </style>
  