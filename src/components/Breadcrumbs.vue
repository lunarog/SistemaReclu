<template>
    <v-breadcrumbs :items="items" style="padding: 18px 12px 1px;"> </v-breadcrumbs>
</template>

<script>
export default {
  props: ["page", "icon"],
  data() {
    return {
      items: [
        {
          text: "Inicio",
          disabled: false,
          href: "/",
        },
        {
          text: this.page,
          disabled: false,
          href: "",
        },
      ],
    };
  },
};
</script>
