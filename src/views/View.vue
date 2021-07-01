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
                v-model="filtro2"
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
      <v-col
        ><br />
        <h1>{{ Vacantes.VacancyName }}</h1>
        <br />
        <v-card>
          <v-card-title style="background: #d6faea">
            <v-row justify="center" align="center">
              <v-col cols="12" xs="12" sm="12" md="2">
                <center>
                  <h4><b>¿Donde?</b></h4>
                  {{ Vacantes.Location }}
                </center>
              </v-col>
              <v-col
                cols="12"
                xs="12"
                sm="12"
                md="3"
                v-if="Vacantes.ShowSalary == 1"
              >
                <center>
                  <h4><b>Sueldo mensual</b></h4>
                  ${{ Vacantes.MinSalary }} - ${{ Vacantes.MaxSalary }}
                </center>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="3">
                <center>
                  <h4><b>Nivel de ingles</b></h4>
                  {{ Vacantes.Dingles }}
                </center>
              </v-col>
              <v-col cols="12" xs="12" sm="12" md="4">
                <center>
                  <template>
                    <v-btn color="#00D173" @click="dialog = true" dark>
                      Postularme a la vacante
                    </v-btn>
                  </template>
                </center>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text
            ><br />
            <v-row>
              <v-col>
                <h2>Descripción  de actividades</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h3>{{ Vacantes.Description }}</h3>
              </v-col>
            </v-row>
          </v-card-text>
          <hr />
          <v-card-text
            ><br />
            <v-row>
              <v-col>
                <h2>Experiencia laboral.</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{
                      Vacantes.LaborExperience
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h2>Escolaridad.</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{
                      Vacantes.Scholarship
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h2>Conocimientos requeridos.</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-list-item v-for="(item, i) in Perfil" :key="i">
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="item.Description"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!----------------modal para postulacion---------------->
    <v-dialog v-model="dialog" persistent width="800">
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-title class="text-h5">
            Completa el siguiente información.
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col style="padding-top: 0; padding-bottom: 0">
                <v-text-field
                  v-model="Cnombre"
                  label="Nombre"
                  counter
                  maxlength="100"
                  :rules="RulesG"
                  required
                ></v-text-field>
              </v-col>
              <v-col style="padding-top: 0; padding-bottom: 0">
                <v-text-field
                  v-model="Capellidos"
                  label="Apellidos"
                  counter
                  maxlength="100"
                  :rules="RulesG"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col style="padding-top: 0; padding-bottom: 0">
                <v-text-field
                  v-model="Cestado"
                  label="Estado"
                  counter
                  maxlength="100"
                  :rules="RulesG"
                  required
                ></v-text-field>
              </v-col>
              <v-col style="padding-top: 0; padding-bottom: 0">
                <v-text-field
                  v-model="Ccorreo"
                  label="Correo Electrónico"
                  counter
                  maxlength="100"
                  :rules="RulesG"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col style="padding-top: 0; padding-bottom: 0">
                <v-text-field
                  v-model="Cdireccion"
                  label="Dirección"
                  counter
                  maxlength="100"
                  :rules="RulesG"
                  required
                ></v-text-field>
              </v-col>
              <v-col style="padding-top: 0; padding-bottom: 0">
                <v-text-field
                  v-model="Ctelefono"
                  label="Teléfono  de contacto"
                  counter
                  maxlength="10"
                  :rules="RulesG"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col style="padding-top: 0; padding-bottom: 0">
                <v-text-field
                  v-model="Cemp"
                  label="¿Cual fue tu ultimo empleo?"
                  :rules="RulesG"
                  required
                ></v-text-field>
              </v-col>
              <v-col style="padding-top: 0; padding-bottom: 0">
                <v-text-field
                  v-model="Csal"
                  label="Salario deseado"
                  :rules="RulesG"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col style="padding-top: 0; padding-bottom: 0">
                <v-textarea
                  v-model="Ccomentarios"
                  label="Cuéntanos algo sobre ti"
                  counter
                  rows="3"
                  maxlength="1500"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col style="padding-top: 0; padding-bottom: 0">
                <center>
                  <h3>Carga tu curriculum</h3>
                  <div v-if="!file">
                    <div
                      :class="['dropZone', dragging ? 'dropZone-over' : '']"
                      @dragenter="dragging = true"
                      @dragleave="dragging = false"
                    >
                      <div class="dropZone-info" @drag="onChange">
                        <span class="fa fa-cloud-upload dropZone-title"></span>
                        <span class="dropZone-title"
                          >Drop file or click to upload</span
                        >
                        <div class="dropZone-upload-limit-info">
                          <div>Archivos soportados: PDF</div>
                          <div>Tamaño maximo soportado: 5 MB</div>
                        </div>
                      </div>
                      <input type="file" @change="onChange" />
                    </div>
                  </div>
                  <div v-else class="dropZone-uploaded">
                    <div class="dropZone-uploaded-info">
                      <span class="dropZone-title">Uploaded</span>
                      <button
                        type="button"
                        class="btn btn-primary removeFile"
                        @click="removeFile"
                      >
                        Remove File
                      </button>
                    </div>
                  </div>
                </center>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" @click="dialog = false" dark>
              Cancelar
            </v-btn>
            <v-btn
              :disabled="!valid"
              dark
              color="green darken-1"
              @click="
                dialog = false;
                dialogTerm = true;
              "
            >
              Completar postulación
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogTerm" persistent max-width="350">
      <v-card>
        <v-card-title class="text-h5"> Términos y condiciones </v-card-title>
        <v-card-text>{{ Terminosycondiciones }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialogTerm = false">
            Rechazar
          </v-btn>
          <v-btn color="green darken-1" text @click="Savecand"> Acepto </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
      filtro1:"",
      filtro2:"",
      valid: true,
      idvac: 0,
      Vacantes: [],
      Perfil: [],
      dialog: false,
      dialogTerm: false,
      Cnombre: "",
      Capellidos: "",
      Cestado: "",
      Ccorreo: "",
      Cdireccion: "",
      Ctelefono: "",
      Cimagen: "",
      file: "",
      Cemp:"",
      Csal:"",
      Ccomentarios:"",
      dragging: false,
      Terminosycondiciones: "Terminos y condiciones",
      snackbar: "",
      snackbarText: "",
      RulesG: [(v) => !!v || "Campo requerido"],
    };
  },
  mounted() {
    this.idvac = this.$route.params.data;
    this.Getpos(this.idvac);
    this.Getprofile(this.idvac);
  },
  computed: {
    extension() {
      return this.file ? this.file.name.split(".").pop() : "";
    },
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
        })
        .catch((error) => {
          console.log(response.data);
        });
    },
    onChange(e) {
      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) {
        this.dragging = false;
        return;
      }

      this.createFile(files[0]);
    },
    createFile(file) {
      if (!file.type.match("application/pdf")) {
        alert("Por favor selecciona un archivo PDF");
        this.dragging = false;
        return;
      }

      if (file.size > 5000000) {
        alert("El tamaño del archivo no debe ser mayor a 5MB");
        this.dragging = false;
        return;
      }

      this.file = file;
      console.log(this.file);
      this.dragging = false;
    },
    removeFile() {
      this.file = "";
    },
    Savecand() {
      this.dialogTerm = false;
      let postdata = {
        value1: this.Cnombre,
        value2: this.Capellidos,
        value3: this.Cestado,
        value4: this.Ccorreo,
        value5: this.Cdireccion,
        value6: this.Ctelefono,
        value7: this.idvac,
        value8: this.Cemp,
        value9: this.Csal,
        value10: this.Ccomentarios,
      };
      axios
        .get("http://localhost/reclu/api/Savecandidate.php", {
          params: postdata,
        })
        .then((response) => {
          this.snackbar = true;
          this.snackbarText =
            "Tu postulación ha sido creada con éxito, pronto nos pondremos en contacto contigo";
        })
        .catch((error) => {
          console.log(response.data);
        });
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
<style scoped>
.dropZone {
  width: 80%;
  height: 200px;
  position: relative;
  border: 2px dashed #eee;
}

.dropZone:hover {
  border: 2px solid #2e94c4;
}

.dropZone:hover .dropZone-title {
  color: #1975a0;
}

.dropZone-info {
  color: #a8a8a8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.dropZone-title {
  color: #787878;
}

.dropZone input {
  position: absolute;
  cursor: pointer;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.dropZone-upload-limit-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.dropZone-over {
  background: #5c5c5c;
  opacity: 0.8;
}

.dropZone-uploaded {
  width: 80%;
  height: 200px;
  position: relative;
  border: 2px dashed #eee;
}

.dropZone-uploaded-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a8a8a8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.removeFile {
  width: 200px;
}
</style>