<template>
  <v-sheet >
    <v-toolbar style="background: #00D173">
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
              background-color = "white"
              required
            ></v-text-field>
          </div>
        </v-col>
        <v-col cols="5" xs="2" sm="4" md="5">
          <div style="padding: 30px">
            <v-text-field
              v-model="donde"
              label="¿Donde?"
              background-color = "white"
              required
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-btn @click="filter">Buscar Vacante</v-btn>
    </v-toolbar>
  </v-sheet>
</template>

<script>
export default {
  Name: "Sidebar",
  data() {
    return {
      que:"",
      donde:""
    }
  },
  methods: {
    filter(){
      this.$router.push({
        name:"Home",
        params:{
          Que:this.que,
          Donde:this.donde
        }
      });
    }
  },
  computed: {},
};
</script>
<style scoped>
  .v-toolbar .v-input{
    padding-top: unset;
    padding-bottom: unset;
    margin-top:25px;
    margin-bottom:unset;
  }
</style>
