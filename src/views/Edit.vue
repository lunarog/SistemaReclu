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
                v-model="filtro1"
                label="¿Que?"
                background-color="white"
                required
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="5" xs="2" sm="4" md="5">
            <div style="padding: 30px">
              <v-text-field
                v-model="filtro1"
                label="¿Donde?"
                background-color="white"
                required
              ></v-text-field>
            </div>
          </v-col>
        </v-row>
        <v-btn @click="filter">Buscar Vacante</v-btn>
      </v-toolbar>
    </v-sheet>
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12">
        <h2>
          <p class="text-left">
            <v-icon x-large color="blue">{{ icon }}</v-icon>
            {{ page }}
          </p>
        </h2>
        <v-card elevation="10">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-card-text>
              <v-row>
                <v-col cols="12" xs="12" sm="12" md="12">
                  <v-row>
                    <v-col cols="12" xs="12" sm="12" md="12">
                      <v-text-field
                        v-model="Vacantes.VacancyName"
                        :label="$t('New.Field1')"
                        counter
                        maxlength="100"
                        :rules="RulesG"
                        required
                      ></v-text-field>
                      <v-textarea
                        v-model="Vacantes.Description"
                        :rules="RulesG"
                        :label="$t('New.Field11')"
                        rows="2"
                        counter
                        maxlength="2500"
                        required
                      ></v-textarea>
                      <v-select
                        v-model="Vacantes.Location"
                        :items="statesitems"
                        :label="$t('New.Field2')"
                        :rules="[(v) => !!v || 'Campo requerido']"
                        required
                      ></v-select>
                      <v-switch
                        v-model="Vacantes.ShowSalary"
                        label="Mostrar salario"
                      ></v-switch>
                      <v-text-field
                        v-model="Vacantes.MinSalary"
                        :rules="RulesG"
                        :label="$t('New.Field3')"
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="Vacantes.MaxSalary"
                        :rules="RulesG"
                        :label="$t('New.Field4')"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-select
                    v-model="Vacantes.EnglishLevel"
                    :items="englishlvlitems"
                    item-value="value"
                    item-text="text"
                    :label="$t('New.Field5')"
                    :rules="[(v) => !!v || 'Campo requerido']"
                    required
                  ></v-select>
                </v-col>
                <v-col>
                  <v-rating
                    empty-icon=""
                    color="green"
                    full-icon="mdi-color-helper"
                    length="5"
                    size="35"
                    :value="Vacantes.EnglishLevel"
                    required
                  ></v-rating>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-row>
                    <v-col>
                      <v-textarea
                        v-model="Vacantes.LaborExperience"
                        :label="$t('New.Field6')"
                        rows="2"
                        counter
                        maxlength="250"
                        :rules="RulesG"
                        required
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-textarea
                        v-model="Vacantes.Scholarship"
                        :label="$t('New.Field7')"
                        rows="2"
                        counter
                        maxlength="250"
                        :rules="RulesG"
                        required
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="10" xs="10" sm="10" md="10">
                  <label style="font-size: 18px">Conocimientos</label>
                </v-col>
                <v-col cols="1" xs="1" sm="1" md="1">
                  <a
                    ><i
                      style="font-size: 28px"
                      @click="Addmore(1)"
                      class="mdi mdi-minus"
                    ></i
                  ></a>
                </v-col>
                <v-col cols="1" xs="1" sm="1" md="1">
                  <a
                    ><i
                      style="font-size: 28px"
                      @click="Addmore(2)"
                      class="mdi mdi-plus"
                    ></i
                  ></a>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="5"
                  xs="5"
                  sm="5"
                  md="5"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-text-field
                    v-model="Perfil[0].Description"
                    :placeholder="$t('New.Field9')"
                    :rules="RulesG"
                    required
                  ></v-text-field></v-col
                ><v-col
                  cols="3"
                  xs="3"
                  sm="3"
                  md="3"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-text-field
                    v-model="Perfil[0].Percentage"
                    :placeholder="$t('New.Field10')"
                    :rules="RulesG"
                    required
                  ></v-text-field></v-col
                ><v-col
                  cols="4"
                  xs="4"
                  sm="4"
                  md="4"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-select
                    v-model="ptypeK1"
                    :items="TypeK"
                    item-value="value"
                    item-text="text"
                    :label="$t('New.Field8')"
                  ></v-select></v-col
              ></v-row>
              <v-row v-if="vshow >= 2">
                <v-col
                  cols="5"
                  xs="5"
                  sm="5"
                  md="5"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-text-field
                    v-model="Perfil[1].Description"
                    :placeholder="$t('New.Field9')"
                    :rules="RulesG"
                    required
                  ></v-text-field></v-col
                ><v-col
                  cols="3"
                  xs="3"
                  sm="3"
                  md="3"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-text-field
                    v-model="Perfil[1].Percentage"
                    :placeholder="$t('New.Field10')"
                    :rules="RulesG"
                    required
                  ></v-text-field></v-col
                ><v-col
                  cols="4"
                  xs="4"
                  sm="4"
                  md="4"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-select
                    v-model="ptypeK2"
                    :items="TypeK"
                    item-value="value"
                    item-text="text"
                    :label="$t('New.Field8')"
                  ></v-select></v-col
              ></v-row>
              <v-row v-if="vshow >= 3">
                <v-col
                  cols="5"
                  xs="5"
                  sm="5"
                  md="5"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-text-field
                    v-model="Perfil[2].Description"
                    :placeholder="$t('New.Field9')"
                    :rules="RulesG"
                    required
                  ></v-text-field></v-col
                ><v-col
                  cols="3"
                  xs="3"
                  sm="3"
                  md="3"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-text-field
                    v-model="Perfil[2].Percentage"
                    :placeholder="$t('New.Field10')"
                    :rules="RulesG"
                    required
                  ></v-text-field></v-col
                ><v-col
                  cols="4"
                  xs="4"
                  sm="4"
                  md="4"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-select
                    v-model="ptypeK3"
                    :items="TypeK"
                    item-value="value"
                    item-text="text"
                    :label="$t('New.Field8')"
                  ></v-select></v-col
              ></v-row>
              <v-row v-if="vshow >= 4">
                <v-col
                  cols="5"
                  xs="5"
                  sm="5"
                  md="5"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-text-field
                    v-model="Perfil[3].Description"
                    :placeholder="$t('New.Field9')"
                    :rules="RulesG"
                    required
                  ></v-text-field></v-col
                ><v-col
                  cols="3"
                  xs="3"
                  sm="3"
                  md="3"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-text-field
                    v-model="Perfil[3].Percentage"
                    :placeholder="$t('New.Field10')"
                    :rules="RulesG"
                    required
                  ></v-text-field></v-col
                ><v-col
                  cols="4"
                  xs="4"
                  sm="4"
                  md="4"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-select
                    v-model="ptypeK4"
                    :items="TypeK"
                    item-value="value"
                    item-text="text"
                    :label="$t('New.Field8')"
                  ></v-select></v-col
              ></v-row>
              <v-row v-if="vshow >= 5">
                <v-col
                  cols="5"
                  xs="5"
                  sm="5"
                  md="5"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-text-field
                    v-model="Perfil[4].Description"
                    :placeholder="$t('New.Field9')"
                    :rules="RulesG"
                    required
                  ></v-text-field></v-col
                ><v-col
                  cols="3"
                  xs="3"
                  sm="3"
                  md="3"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-text-field
                    v-model="Perfil[4].Percentage"
                    :placeholder="$t('New.Field10')"
                    :rules="RulesG"
                    required
                  ></v-text-field></v-col
                ><v-col
                  cols="4"
                  xs="4"
                  sm="4"
                  md="4"
                  style="padding-bottom: unset; padding-top: unset"
                >
                  <v-select
                    v-model="ptypeK5"
                    :items="TypeK"
                    item-value="value"
                    item-text="text"
                    :label="$t('New.Field8')"
                  ></v-select></v-col
              ></v-row>

              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="Savevac"
              >
                Guardar
              </v-btn>
              <v-btn color="error" class="mr-4" @click="Delete">
                Eliminar vacante
              </v-btn>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" color="green">
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      filtro1: "",
      filtro2: "",
      valid: true,
      idvac: 0,
      page: this.$route.meta.breadcrum[0].name,
      icon: this.$route.meta.breadcrum[0].icon,
      Vacantes: [],
      Perfil: [],
      dialog: false,
      dialogTerm: false,
      vshow: 1,
      Cnombre: "",
      Capellidos: "",
      Cestado: "",
      Ccorreo: "",
      Cdireccion: "",
      Ctelefono: "",
      Cimagen: "",
      file: "",
      dragging: false,
      Terminosycondiciones: "Terminos y condiciones",
      snackbar: "",
      snackbarText: "",
      pcompetencia1: "",
      pponderacion1: "",
      ptypeK1: "1",
      pcompetencia2: "",
      pponderacion2: "",
      ptypeK2: "1",
      pcompetencia3: "",
      pponderacion3: "",
      ptypeK3: "1",
      pcompetencia4: "",
      pponderacion4: "",
      ptypeK4: "1",
      pcompetencia5: "",
      pponderacion5: "",
      ptypeK5: "1",
      englishlvlitems: [
        { value: "1", text: "No aplica" },
        { value: "2", text: "Principiante" },
        { value: "3", text: "Elemental" },
        { value: "4", text: "Pre-intermedio" },
        { value: "5", text: "Intermedio avanzado" },
        { value: "6", text: "Avanzado" },
      ],
      TypeK: [
        { value: "1", text: "Competencia Hard" },
        { value: "2", text: "Competencia Soft" },
      ],
      statesitems: [
        { text: "Aguascalientes" },
        { text: "Baja California" },
        { text: "Baja California Sur" },
        { text: "Campeche" },
        { text: "Chiapas" },
        { text: "Chihuahua" },
        { text: "Coahuila" },
        { text: "Colima" },
        { text: "Ciudad de México" },
        { text: "Durango" },
        { text: "Estado de México" },
        { text: "Guanajuato" },
        { text: "Guerrero" },
        { text: "Hidalgo" },
        { text: "Jalisco" },
        { text: "Michoacán" },
        { text: "Morelos" },
        { text: "Nayarit" },
        { text: "Nuevo León" },
        { text: "Oaxaca" },
        { text: "Puebla" },
        { text: "Querétaro" },
        { text: "Quintana Roo" },
        { text: "San Luis Potosí" },
        { text: "Sinaloa" },
        { text: "Sonora" },
        { text: "Tabasco" },
        { text: "Tamaulipas" },
        { text: "Tlaxcala" },
        { text: "Veracruz" },
        { text: "Yucatán" },
        { text: "Zacatecas" },
      ],
      RulesG: [(v) => !!v || "Campo requerido"],
    };
  },
  mounted() {
    this.idvac = this.$route.params.data;
    this.Getpos(this.idvac);
    this.Getprofile(this.idvac);
  },
  methods: {
    Getpos(idv) {
      let postdata = {
        id: idv,
      };
      axios
        .get("http://localhost/reclu/api/Showdetails.php", {
          params: postdata,
        })
        .then((response) => {
          this.Vacantes = response.data[0];
          if (this.Vacantes.ShowSalary == 1) {
            this.Vacantes.ShowSalary = true;
          } else {
            this.Vacantes.ShowSalary = false;
          }
        })
        .catch((error) => {
          console.log(response.data);
        });
    },
    Getprofile(idv) {
      let postdata = {
        id: idv,
      };
      axios
        .get("http://localhost/reclu/api/apego.php", {
          params: postdata,
        })
        .then((response) => {
          this.Perfil = JSON.parse(JSON.stringify(response.data));
          this.vshow = this.Perfil.length;
        })
        .catch((error) => {
          console.log(response.data);
        });
    },
    Delete() {
      let postdata = {
        id: this.idvac,
      };
      axios
        .get("http://localhost/reclu/api/Delete.php", {
          params: postdata,
        })
        .then((response) => {
          alert("La vacante fue eliminada");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.data);
        });
    },
    Savevac() {
      let postdata = {
        value1: this.Vacantes.VacancyName,
        value2: this.Vacantes.Description,
        value3: this.Vacantes.Location,
        value4: this.Vacantes.MinSalary,
        value5: this.Vacantes.MaxSalary,
        value6: this.Vacantes.EnglishLevel,
        value7: this.Vacantes.LaborExperience,
        value8: this.Vacantes.Scholarship,
        value9:
          this.pcompetencia1 +
          "&&" +
          this.pponderacion1 +
          "&&" +
          this.ptypeK1 +
          "||" +
          this.pcompetencia2 +
          "&&" +
          this.pponderacion2 +
          "&&" +
          this.ptypeK2 +
          "||" +
          this.pcompetencia3 +
          "&&" +
          this.pponderacion3 +
          "&&" +
          this.ptypeK3 +
          "||" +
          this.pcompetencia4 +
          "&&" +
          this.pponderacion4 +
          "&&" +
          this.ptypeK4 +
          "||" +
          this.pcompetencia5 +
          "&&" +
          this.pponderacion5 +
          "&&" +
          this.ptypeK5,
        value10: this.vshow,
        value11: this.idvac,
        value12: this.Vacantes.ShowSalary,
      };
      axios
        .get("http://localhost/reclu/api/Update.php", {
          params: postdata,
        })
        .then((response) => {
          this.snackbar = true;
          this.snackbarText = "Vacante modificada";
        })
        .catch((error) => {
          console.log(response.data);
        });
    },
    Addmore(x) {
      if (x == 1 && this.vshow > 1) {
        this.vshow--;
      }
      if (x == 2 && this.vshow < 5) {
        this.vshow++;
      }
    },
    filter() {
      this.$router.push({
        name: "Home",
        params: {
          filter1: this.filtro1,
          filter2: this.filtro2,
        },
      });
    },
  },
};
</script>
