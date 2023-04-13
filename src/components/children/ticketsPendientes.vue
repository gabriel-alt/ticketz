<template>
    <h3 style="text-align: center; margin:4%;">
        Elija el rango de fecha de consulta
    </h3>

    <v-row>
        <v-col>
            <v-text-field style="margin: 5%;" v-model="fecha_inicio" :readonly="loading" density="compact" type="date"
                :rules="[required]" class="mb-4" clearable label="Fecha de inicio" variant="outlined"
                placeholder="Comentarios..."></v-text-field>
        </v-col>
        <v-col>
            <v-text-field style="margin: 5%;" v-model="fecha_corte" :readonly="loading" density="compact" type="date"
                :rules="[required]" class="mb-4" clearable label="Fecha de corte" variant="outlined"
                placeholder="Comentarios..."></v-text-field>
        </v-col>
    </v-row>

    <v-row style="margin-top:1%;">
        <v-col></v-col>
        <v-col>
            <v-btn :loading="loading" style="color: white" block color="rgba(0,140,143,0.8)" size="large"
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
                    Nombre completo
                </th>
                <th>
                    Edad
                </th>
                <th>
                    Puesto actual de trabajo
                </th>
                <th>
                    Área actual de trabajo
                </th>
                <th>
                    Diagnóstico
                </th>
                <th>
                    Tipo de Consulta
                </th>
                <th>
                    Inicial/
                    Subsecuente
                </th>
                <th>
                    Fecha de atención
                </th>
                <th>
                    Estatus
                </th>
                <th>
                    Tratamiento otorgado
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="consulta in consulta">
                <td>{{ }}</td>
                <td>{{ }}</td>
                <td>{{  }}</td>
                <td>{{  }}</td>
                <td>{{  }}</td>
                <td>{{  }}</td>
                <td>{{  }}</td>
                <td>{{  }}</td>
                <td>{{  }}</td>
                <td>{{  }}</td>
            </tr>
        </tbody>
    </v-table>

    <v-row style="margin-top:5%;">
        <v-col></v-col>
        <v-col>
            <v-btn :loading="loading" style="color: white" block color="rgb(20, 49, 110)" size="large" @click="guardar()">
                Descargar reporte
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

<style></style>