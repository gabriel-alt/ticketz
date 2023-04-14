<template>
    <!-- <v-card width="100%"> -->
    <v-container style="background-color: white; min-height: 100%;">
      <v-toolbar color="white" title="Tickets">
       
       
      </v-toolbar>
      <v-tabs v-model="tabs" centered bg-color="rgba(232, 232, 232, 1)" color="rgba(10, 10, 10, 0.45)"
        id="estiloTab">
        <v-tab value="tab1"> Tickets pendientes </v-tab>
        <v-tab value="tab2"> Tickets en seguimiento </v-tab>
        <v-tab value="tab3"> Tickets atendidos </v-tab>
      </v-tabs>
  
      <v-window v-model="tabs">
        <v-window-item value="tab1">
          <ticketsPendientes></ticketsPendientes>
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
  import ticketsPendientes from "@/components/children/ticketsPendientes.vue";
  import ticketsSeguimiento from "@/components/children/ticketsSeguimiento.vue";
  import ticketsAtendidos from "@/components/children/ticketsAtendidos.vue";
  
  
  export default {
    components: {
     ticketsPendientes,
     ticketsSeguimiento,
     ticketsAtendidos,
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
  