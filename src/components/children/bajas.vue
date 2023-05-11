<template>
    <h3 style="text-align: center; margin:4%;">
        Filtrar
    </h3>

    <v-row>
            <v-col>
                <v-text-field v-model="nombre" :readonly="loading" density="compact" type="text" :rules="[required]"
                    class="mb-2"  label="Busqueda por usuario" variant="outlined"
                    placeholder="Comentarios..."></v-text-field>
            </v-col>

            <v-col>
                <v-text-field v-model="apellidoPaterno" :readonly="loading" density="compact" type="text"
                    :rules="[required]" class="mb-2"  label="Departamento" variant="outlined"
                    placeholder="Comentarios..."></v-text-field>
            </v-col>

            <v-col>
                <v-text-field v-model="apellidoMaterno" :readonly="loading" density="compact" type="text"
                    :rules="[required]" class="mb-2"  label="Caracteristicas del equipo" variant="outlined"
                    placeholder="Comentarios..."></v-text-field>
            </v-col>

        </v-row>

        <v-row style="margin-top:1%;">
        <v-col></v-col>
        <v-col>
            <v-btn :loading="loading" block color="rgba(1, 1, 17, 0.356)" class="styleList" size="large" @click="buscar()">
                BUSCAR
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
                    Serie
                </th>
                <th>
                    Marca
                </th>
                <th>
                    Tipo
                </th>
                <th>
                    Fecha de baja
                </th>
                <th>
                    Comentarios
                </th>
                <th>
                    Accines
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
  color: white ;

}

.styleList:hover {
  background: rgba(1, 1, 17, 0.356);
  color: white;
  box-shadow: 0 0 10px rgb(39, 39, 39);

}
</style>