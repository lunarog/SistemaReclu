(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa22f"],{1071:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-container",[l("v-sheet",[l("v-toolbar",{staticStyle:{background:"#00d173"}},[l("v-toolbar-title",{staticClass:"d-none d-sm-flex"},[l("router-link",{attrs:{to:"/"}},[l("v-img",{attrs:{"max-height":"60","max-width":"140",src:a("cf05")}})],1)],1),l("v-row",[l("v-col",{attrs:{cols:"5",xs:"2",sm:"4",md:"5"}},[l("div",{staticStyle:{padding:"30px"}},[l("v-text-field",{attrs:{label:"¿Que?","background-color":"white",required:""},model:{value:e.filtro1,callback:function(t){e.filtro1=t},expression:"filtro1"}})],1)]),l("v-col",{attrs:{cols:"5",xs:"2",sm:"4",md:"5"}},[l("div",{staticStyle:{padding:"30px"}},[l("v-text-field",{attrs:{label:"¿Donde?","background-color":"white",required:""},model:{value:e.filtro1,callback:function(t){e.filtro1=t},expression:"filtro1"}})],1)])],1),l("v-btn",{on:{click:e.filter}},[e._v("Buscar Vacante")])],1)],1),l("v-row",[l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[l("h2",[l("p",{staticClass:"text-left"},[l("v-icon",{attrs:{"x-large":"",color:"blue"}},[e._v(e._s(e.icon))]),e._v(" "+e._s(e.page)+" ")],1)]),l("v-card",{attrs:{elevation:"10"}},[l("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[l("v-card-text",[l("v-row",[l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[l("v-row",[l("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[l("v-text-field",{attrs:{label:e.$t("New.Field1"),counter:"",maxlength:"100",rules:e.RulesG,required:""},model:{value:e.Vacantes.VacancyName,callback:function(t){e.$set(e.Vacantes,"VacancyName",t)},expression:"Vacantes.VacancyName"}}),l("v-textarea",{attrs:{rules:e.RulesG,label:e.$t("New.Field11"),rows:"2",counter:"",maxlength:"2500",required:""},model:{value:e.Vacantes.Description,callback:function(t){e.$set(e.Vacantes,"Description",t)},expression:"Vacantes.Description"}}),l("v-select",{attrs:{items:e.statesitems,label:e.$t("New.Field2"),rules:[function(e){return!!e||"Campo requerido"}],required:""},model:{value:e.Vacantes.Location,callback:function(t){e.$set(e.Vacantes,"Location",t)},expression:"Vacantes.Location"}}),l("v-switch",{attrs:{label:"Mostrar salario"},model:{value:e.Vacantes.ShowSalary,callback:function(t){e.$set(e.Vacantes,"ShowSalary",t)},expression:"Vacantes.ShowSalary"}}),l("v-text-field",{attrs:{rules:e.RulesG,label:e.$t("New.Field3"),required:""},model:{value:e.Vacantes.MinSalary,callback:function(t){e.$set(e.Vacantes,"MinSalary",t)},expression:"Vacantes.MinSalary"}}),l("v-text-field",{attrs:{rules:e.RulesG,label:e.$t("New.Field4"),required:""},model:{value:e.Vacantes.MaxSalary,callback:function(t){e.$set(e.Vacantes,"MaxSalary",t)},expression:"Vacantes.MaxSalary"}})],1)],1)],1)],1),l("v-row",[l("v-col",[l("v-select",{attrs:{items:e.englishlvlitems,"item-value":"value","item-text":"text",label:e.$t("New.Field5"),rules:[function(e){return!!e||"Campo requerido"}],required:""},model:{value:e.Vacantes.EnglishLevel,callback:function(t){e.$set(e.Vacantes,"EnglishLevel",t)},expression:"Vacantes.EnglishLevel"}})],1),l("v-col",[l("v-rating",{attrs:{"empty-icon":"",color:"green","full-icon":"mdi-color-helper",length:"5",size:"35",value:e.Vacantes.EnglishLevel,required:""}})],1)],1),l("v-row",[l("v-col",[l("v-row",[l("v-col",[l("v-textarea",{attrs:{label:e.$t("New.Field6"),rows:"2",counter:"",maxlength:"250",rules:e.RulesG,required:""},model:{value:e.Vacantes.LaborExperience,callback:function(t){e.$set(e.Vacantes,"LaborExperience",t)},expression:"Vacantes.LaborExperience"}})],1)],1),l("v-row",[l("v-col",[l("v-textarea",{attrs:{label:e.$t("New.Field7"),rows:"2",counter:"",maxlength:"250",rules:e.RulesG,required:""},model:{value:e.Vacantes.Scholarship,callback:function(t){e.$set(e.Vacantes,"Scholarship",t)},expression:"Vacantes.Scholarship"}})],1)],1)],1)],1),l("v-row",[l("v-col",{attrs:{cols:"10",xs:"10",sm:"10",md:"10"}},[l("label",{staticStyle:{"font-size":"18px"}},[e._v("Conocimientos")])]),l("v-col",{attrs:{cols:"1",xs:"1",sm:"1",md:"1"}},[l("a",[l("i",{staticClass:"mdi mdi-minus",staticStyle:{"font-size":"28px"},on:{click:function(t){return e.Addmore(1)}}})])]),l("v-col",{attrs:{cols:"1",xs:"1",sm:"1",md:"1"}},[l("a",[l("i",{staticClass:"mdi mdi-plus",staticStyle:{"font-size":"28px"},on:{click:function(t){return e.Addmore(2)}}})])])],1),l("v-row",[l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"5",xs:"5",sm:"5",md:"5"}},[l("v-text-field",{attrs:{placeholder:e.$t("New.Field9"),rules:e.RulesG,required:""},model:{value:e.Perfil[0].Description,callback:function(t){e.$set(e.Perfil[0],"Description",t)},expression:"Perfil[0].Description"}})],1),l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"3",xs:"3",sm:"3",md:"3"}},[l("v-text-field",{attrs:{placeholder:e.$t("New.Field10"),rules:e.RulesG,required:""},model:{value:e.Perfil[0].Percentage,callback:function(t){e.$set(e.Perfil[0],"Percentage",t)},expression:"Perfil[0].Percentage"}})],1),l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"4",xs:"4",sm:"4",md:"4"}},[l("v-select",{attrs:{items:e.TypeK,"item-value":"value","item-text":"text",label:e.$t("New.Field8")},model:{value:e.ptypeK1,callback:function(t){e.ptypeK1=t},expression:"ptypeK1"}})],1)],1),e.vshow>=2?l("v-row",[l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"5",xs:"5",sm:"5",md:"5"}},[l("v-text-field",{attrs:{placeholder:e.$t("New.Field9"),rules:e.RulesG,required:""},model:{value:e.Perfil[1].Description,callback:function(t){e.$set(e.Perfil[1],"Description",t)},expression:"Perfil[1].Description"}})],1),l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"3",xs:"3",sm:"3",md:"3"}},[l("v-text-field",{attrs:{placeholder:e.$t("New.Field10"),rules:e.RulesG,required:""},model:{value:e.Perfil[1].Percentage,callback:function(t){e.$set(e.Perfil[1],"Percentage",t)},expression:"Perfil[1].Percentage"}})],1),l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"4",xs:"4",sm:"4",md:"4"}},[l("v-select",{attrs:{items:e.TypeK,"item-value":"value","item-text":"text",label:e.$t("New.Field8")},model:{value:e.ptypeK2,callback:function(t){e.ptypeK2=t},expression:"ptypeK2"}})],1)],1):e._e(),e.vshow>=3?l("v-row",[l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"5",xs:"5",sm:"5",md:"5"}},[l("v-text-field",{attrs:{placeholder:e.$t("New.Field9"),rules:e.RulesG,required:""},model:{value:e.Perfil[2].Description,callback:function(t){e.$set(e.Perfil[2],"Description",t)},expression:"Perfil[2].Description"}})],1),l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"3",xs:"3",sm:"3",md:"3"}},[l("v-text-field",{attrs:{placeholder:e.$t("New.Field10"),rules:e.RulesG,required:""},model:{value:e.Perfil[2].Percentage,callback:function(t){e.$set(e.Perfil[2],"Percentage",t)},expression:"Perfil[2].Percentage"}})],1),l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"4",xs:"4",sm:"4",md:"4"}},[l("v-select",{attrs:{items:e.TypeK,"item-value":"value","item-text":"text",label:e.$t("New.Field8")},model:{value:e.ptypeK3,callback:function(t){e.ptypeK3=t},expression:"ptypeK3"}})],1)],1):e._e(),e.vshow>=4?l("v-row",[l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"5",xs:"5",sm:"5",md:"5"}},[l("v-text-field",{attrs:{placeholder:e.$t("New.Field9"),rules:e.RulesG,required:""},model:{value:e.Perfil[3].Description,callback:function(t){e.$set(e.Perfil[3],"Description",t)},expression:"Perfil[3].Description"}})],1),l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"3",xs:"3",sm:"3",md:"3"}},[l("v-text-field",{attrs:{placeholder:e.$t("New.Field10"),rules:e.RulesG,required:""},model:{value:e.Perfil[3].Percentage,callback:function(t){e.$set(e.Perfil[3],"Percentage",t)},expression:"Perfil[3].Percentage"}})],1),l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"4",xs:"4",sm:"4",md:"4"}},[l("v-select",{attrs:{items:e.TypeK,"item-value":"value","item-text":"text",label:e.$t("New.Field8")},model:{value:e.ptypeK4,callback:function(t){e.ptypeK4=t},expression:"ptypeK4"}})],1)],1):e._e(),e.vshow>=5?l("v-row",[l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"5",xs:"5",sm:"5",md:"5"}},[l("v-text-field",{attrs:{placeholder:e.$t("New.Field9"),rules:e.RulesG,required:""},model:{value:e.Perfil[4].Description,callback:function(t){e.$set(e.Perfil[4],"Description",t)},expression:"Perfil[4].Description"}})],1),l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"3",xs:"3",sm:"3",md:"3"}},[l("v-text-field",{attrs:{placeholder:e.$t("New.Field10"),rules:e.RulesG,required:""},model:{value:e.Perfil[4].Percentage,callback:function(t){e.$set(e.Perfil[4],"Percentage",t)},expression:"Perfil[4].Percentage"}})],1),l("v-col",{staticStyle:{"padding-bottom":"unset","padding-top":"unset"},attrs:{cols:"4",xs:"4",sm:"4",md:"4"}},[l("v-select",{attrs:{items:e.TypeK,"item-value":"value","item-text":"text",label:e.$t("New.Field8")},model:{value:e.ptypeK5,callback:function(t){e.ptypeK5=t},expression:"ptypeK5"}})],1)],1):e._e(),l("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.Savevac}},[e._v(" Guardar ")]),l("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:e.Delete}},[e._v(" Eliminar vacante ")])],1)],1)],1)],1)],1),l("v-snackbar",{attrs:{color:"green"},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[l("v-btn",e._b({attrs:{color:"white",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",a,!1),[e._v(" Cerrar ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.snackbarText)+" ")])],1)},s=[],i=(a("b0c0"),a("bc3a")),o=a.n(i),n={name:"Home",data:function(){return{filtro1:"",filtro2:"",valid:!0,idvac:0,page:this.$route.meta.breadcrum[0].name,icon:this.$route.meta.breadcrum[0].icon,Vacantes:[],Perfil:[],dialog:!1,dialogTerm:!1,vshow:1,Cnombre:"",Capellidos:"",Cestado:"",Ccorreo:"",Cdireccion:"",Ctelefono:"",Cimagen:"",file:"",dragging:!1,Terminosycondiciones:"Terminos y condiciones",snackbar:"",snackbarText:"",pcompetencia1:"",pponderacion1:"",ptypeK1:"1",pcompetencia2:"",pponderacion2:"",ptypeK2:"1",pcompetencia3:"",pponderacion3:"",ptypeK3:"1",pcompetencia4:"",pponderacion4:"",ptypeK4:"1",pcompetencia5:"",pponderacion5:"",ptypeK5:"1",englishlvlitems:[{value:"1",text:"No aplica"},{value:"2",text:"Principiante"},{value:"3",text:"Elemental"},{value:"4",text:"Pre-intermedio"},{value:"5",text:"Intermedio avanzado"},{value:"6",text:"Avanzado"}],TypeK:[{value:"1",text:"Competencia Hard"},{value:"2",text:"Competencia Soft"}],statesitems:[{text:"Aguascalientes"},{text:"Baja California"},{text:"Baja California Sur"},{text:"Campeche"},{text:"Chiapas"},{text:"Chihuahua"},{text:"Coahuila"},{text:"Colima"},{text:"Ciudad de México"},{text:"Durango"},{text:"Estado de México"},{text:"Guanajuato"},{text:"Guerrero"},{text:"Hidalgo"},{text:"Jalisco"},{text:"Michoacán"},{text:"Morelos"},{text:"Nayarit"},{text:"Nuevo León"},{text:"Oaxaca"},{text:"Puebla"},{text:"Querétaro"},{text:"Quintana Roo"},{text:"San Luis Potosí"},{text:"Sinaloa"},{text:"Sonora"},{text:"Tabasco"},{text:"Tamaulipas"},{text:"Tlaxcala"},{text:"Veracruz"},{text:"Yucatán"},{text:"Zacatecas"}],RulesG:[function(e){return!!e||"Campo requerido"}]}},mounted:function(){this.idvac=this.$route.params.data,this.Getpos(this.idvac),this.Getprofile(this.idvac)},methods:{Getpos:function(e){var t=this,a={id:e};o.a.get("http://localhost/reclu/api/Showdetails.php",{params:a}).then((function(e){t.Vacantes=e.data[0],1==t.Vacantes.ShowSalary?t.Vacantes.ShowSalary=!0:t.Vacantes.ShowSalary=!1})).catch((function(e){console.log(response.data)}))},Getprofile:function(e){var t=this,a={id:e};o.a.get("http://localhost/reclu/api/apego.php",{params:a}).then((function(e){t.Perfil=JSON.parse(JSON.stringify(e.data)),t.vshow=t.Perfil.length})).catch((function(e){console.log(response.data)}))},Delete:function(){var e=this,t={id:this.idvac};o.a.get("http://localhost/reclu/api/Delete.php",{params:t}).then((function(t){alert("La vacante fue eliminada"),e.$router.push("/")})).catch((function(e){console.log(e.data)}))},Savevac:function(){var e=this,t={value1:this.Vacantes.VacancyName,value2:this.Vacantes.Description,value3:this.Vacantes.Location,value4:this.Vacantes.MinSalary,value5:this.Vacantes.MaxSalary,value6:this.Vacantes.EnglishLevel,value7:this.Vacantes.LaborExperience,value8:this.Vacantes.Scholarship,value9:this.pcompetencia1+"&&"+this.pponderacion1+"&&"+this.ptypeK1+"||"+this.pcompetencia2+"&&"+this.pponderacion2+"&&"+this.ptypeK2+"||"+this.pcompetencia3+"&&"+this.pponderacion3+"&&"+this.ptypeK3+"||"+this.pcompetencia4+"&&"+this.pponderacion4+"&&"+this.ptypeK4+"||"+this.pcompetencia5+"&&"+this.pponderacion5+"&&"+this.ptypeK5,value10:this.vshow,value11:this.idvac,value12:this.Vacantes.ShowSalary};o.a.get("http://localhost/reclu/api/Update.php",{params:t}).then((function(t){e.snackbar=!0,e.snackbarText="Vacante modificada"})).catch((function(e){console.log(response.data)}))},Addmore:function(e){1==e&&this.vshow>1&&this.vshow--,2==e&&this.vshow<5&&this.vshow++},filter:function(){this.$router.push({name:"Home",params:{filter1:this.filtro1,filter2:this.filtro2}})}}},c=n,r=a("2877"),d=a("6544"),p=a.n(d),u=a("8336"),v=a("b0af"),m=a("99d9"),x=a("62ad"),f=a("a523"),h=a("4bd4"),b=a("132d"),g=a("adda"),y=a("1d4d"),w=a("0fd9"),V=a("b974"),S=a("8dd9"),k=a("2db4"),P=a("b73d"),$=a("8654"),C=a("a844"),N=a("71d9"),K=a("2a7f"),F=Object(r["a"])(c,l,s,!1,null,null,null);t["default"]=F.exports;p()(F,{VBtn:u["a"],VCard:v["a"],VCardText:m["b"],VCol:x["a"],VContainer:f["a"],VForm:h["a"],VIcon:b["a"],VImg:g["a"],VRating:y["a"],VRow:w["a"],VSelect:V["a"],VSheet:S["a"],VSnackbar:k["a"],VSwitch:P["a"],VTextField:$["a"],VTextarea:C["a"],VToolbar:N["a"],VToolbarTitle:K["a"]})}}]);
//# sourceMappingURL=chunk-2d0aa22f.2d1e9c0b.js.map