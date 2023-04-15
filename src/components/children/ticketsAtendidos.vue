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

    <v-row>
        <v-col>
            <v-text-field  v-model="fecha_inicio" :readonly="loading" density="compact" type="date"
                :rules="[required]" class="mb-4" clearable label="Fecha de inicio" variant="outlined"
                placeholder="Comentarios..."></v-text-field>
        </v-col>
        <v-col>
            <v-text-field  v-model="fecha_corte" :readonly="loading" density="compact" type="date"
                :rules="[required]" class="mb-4" clearable label="Fecha de corte" variant="outlined"
                placeholder="Comentarios..."></v-text-field>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <v-text-field  v-model="fecha_inicio" :readonly="loading" density="compact" type="text"
                :rules="[required]" class="mb-4" clearable label="Nombre" variant="outlined"
                placeholder="Comentarios..."></v-text-field>
        </v-col>
        <v-col>
            <v-text-field  v-model="fecha_corte" :readonly="loading" density="compact" type="text"
                :rules="[required]" class="mb-4" clearable label="Equipo" variant="outlined"
                placeholder="Comentarios..."></v-text-field>
        </v-col>
    </v-row>

    <v-row style="margin-top:1%;">
        <v-col></v-col>
        <v-col>
            <v-btn :loading="loading" style="color: white" block color="rgba(1, 1, 17, 0.356)" class="styleList" size="large"
                @click="consultar()">
                Consultar
            </v-btn>
            <br />
        </v-col>
        <v-col> </v-col>
    </v-row><br>

    <v-table density="comfortable" style="margin: 2%;">
        <thead>
            <tr>
                <th>
                    #
                </th>
                <th>
                    Reportó 
                </th>
                <th>
                    Fecha
                </th>
                <th>
                    Fecha de atención
                </th>
                <th>
                    Tiempo de espera (Hrs)
                </th>
                <th>
                    Acciones
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