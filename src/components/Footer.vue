<template>
    <v-sheet>
        <v-card class="d-none d-md-flex footerper" aling="center">
            <v-card-text align="center" justify="center" class="footerper">
                 <v-footer class="font-weight-medium footerper" style = "padding:unset">
                     <v-col class="text-center footerper" cols=12 >
                        <p class="text--secondary footerper" style="font-size:12px">Información confidencial, prohibida su reproducción o divulgación total o parcial, así como su uso o aprovechamiento sin autorización escrita por MAYASA.<br>
                            Política de {{ new Date().getFullYear() }}  MAYASA.
                        </p>
                     </v-col>
                </v-footer>
            </v-card-text>
        </v-card>
    </v-sheet>
</template>
<style>
    .footerper{
        margin-bottom:unset!important;
        padding:unset!important;
        background: white;
    }
</style>