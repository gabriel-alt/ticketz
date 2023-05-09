<template>
    <h3 style="text-align: center; margin:4%;">
        Elija el rango de fecha de consulta
    </h3>

    <v-row style="margin-top:1%;">
        <v-col></v-col>
        <v-col>
            <v-btn :loading="loading" style="color: white" block color="rgba(0,140,143,0.8)" class="styleList" size="large" @click="guardar()">
                EXPORTAR A EXCEL
            </v-btn>
            <br />
        </v-col>
        <v-col> </v-col>
    </v-row>

   


    <v-table density="comfortable" style="margin: 2%;">
        <thead>
            <tr>
                <th>
                    #
                </th>
                <th>
                    Usuario
                </th>
                <th>
                    Tipo
                </th>
                <th>
                    Puesto
                </th>
                <th>
                    Departamento
                </th>
                <th>
                    Zona
                </th>
                <th>
                    AnyDesk
                </th>
                <th>
                    Correo
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="consulta in consulta">
                <td>{{ }}</td>
                <td>{{ }}</td>
                <td>{{ }}</td>
                <td>{{ }}</td>
                <td>{{ }}</td>
                <td>{{ }}</td>
                <td>{{ }}</td>
                <td>{{ }}</td>
                <td>{{ }}</td>
                
            </tr>
        </tbody>
    </v-table>

   
</template>



<script>


export default {

    data() {
        return {
          
        };
    },

    methods: {



    },

}

</script>

<style>
.styleList {
  background: white;

}

.styleList:hover {
  background: rgba(1, 1, 17, 0.356);
  color: white;
  box-shadow: 0 0 10px rgb(39, 39, 39);

}
</style>