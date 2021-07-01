<template>
  <v-container>
    <v-sheet>
      <v-toolbar style="background: #00d173">
        <v-toolbar-title class="d-none d-sm-flex">
          <router-link to="/">
            <v-img
              max-height="60"
              max-width="140"
              src="@/assets/logo.png"
            ></v-img>
          </router-link>
        </v-toolbar-title>
        <v-row>
          <v-col cols="5" xs="2" sm="4" md="5">
            <div style="padding: 30px">
              <v-text-field
                v-model="que"
                label="¿Que?"
                background-color="white"
                required
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="5" xs="2" sm="4" md="5">
            <div style="padding: 30px">
              <v-text-field
                v-model="donde"
                label="¿Donde?"
                background-color="white"
                required
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-btn @click="Get">Buscar Vacante</v-btn>
      </v-toolbar>
    </v-sheet>
    <v-row>
      <v-col>
        <br />
        <h1>
          Nuestras vacantes
          <v-btn @click="New" v-if="admin == 1" dark color="#00D173">
            Crear nueva vacante
          </v-btn>
        </h1>
        <br />
        <v-card>
          <v-card-text>


            <h1 v-if="total==0">Lo sentimos, pero no encontramos ninguna vacante disponible.</h1>
            <v-simple-table v-else>
              <template v-slot:default>
                <tbody>
                  <tr v-for="item in Vacantes" :key="item.name">
                    <td v-if="admin == 1">
                      <a style="font-size: 26px" @click="Editvac(item.ID)"
                        ><i class="mdi mdi-pencil-box"></i
                      ></a>
                    </td>
                    <td @click="Showvac(item.ID)">
                      <h2>{{ item.VacancyName }}</h2>
                      <h4>{{ item.Location }}</h4>
                      {{ item.Description }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      admin: 1,
      que: "",
      queFlag: "",
      donde: "",
      dondeFlag: "",
      total:0,
      Vacantes: [
        {
          VacancyName: "",
          Description: "",
          VacancyName: "",
          Location: "",
          ID: "",
        },
      ],
    };
  },
  mounted() {
    this.que = this.$route.params.filter1;
    this.donde = this.$route.params.filter2;
    this.Get();
  },
  methods: {
    Get() {
      let postdata = {
        Filter1: this.que,
        Filter2: this.donde,
      };
      axios
        .get("http://localhost/reclu/api/Show.php", {
          params: postdata,
        })
        .then((response) => {
          this.Vacantes = JSON.parse(JSON.stringify(response.data));
          this.total = this.Vacantes.length;
        })
        .catch((error) => {
          console.log(response.data);
        });
    },
    Showvac(x) {
      this.$router.push({
        name: "view",
        params: {
          data: x,
        },
      });
    },
    Editvac(x) {
      this.$router.push({
        name: "edit",
        params: {
          data: x,
        },
      });
    },
    New() {
      this.$router.push("/New");
    },
  },
};
</script>
