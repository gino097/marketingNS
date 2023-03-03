const asyncHandler = require("express-async-handler");
const objSql = require("../../kernel/cSql");
const objCombo = require("../../kernel/cCombo");
const objFechaAuditoria = require("../../kernel/cFechas");
const objToken = require("../../kernel/cToken");
const objUsu = require("../../kernel/cUsuario");
const objCad = require("../../kernel/cCadena");
const { user_token } = require("../../middleware/authMiddleware");
const tabla = "sy_salud_solicitud";
var fecha_auditoria = objFechaAuditoria.fecha_hora_actual();
var digitador = "DIGITADOR";
const crear = asyncHandler(async (req, res) => {
  var { userData } = req.body;
  console.log(userData)
  var valores = [];
  //console.log(valores);
  /*fecha_solicitud: "2022-07-22" SOLI_FECSOL
intermediario: "Empresa" SOLI_INTERM
literal_1_1: "Dependiente asegurado" SOLI_USTEDES
literal_1_1_parentesco: "Hijo" SOLI_PARENTESCO
SOLI_OTROPARENTESCO
literal_1_2_nombres: "Gino Alexander Gongora Ramos" SOLI_NOMBRES
literal_1_3_lugar_nacimiento: "Esmeraldas" SOLI_LUGARNACIMIENTO
literal_1_4_fecha_nacimiento: "1997-06-23" SOLI_FECNAC
literal_1_6_genero: "M" SOLI_GENERO
literal_1_7_estado_civil: "Soltero" SOLI_ESTADOCIVIL
literal_1_8_ocupacion: "Independiente" SOLI_OCUPACION
literal_1_9_nacionalidad: "Boliviana" SOLI_NACIONALIDAD
literal_1_10_cedula: "0808080088" SOLI_CEDULA
literal_1_11_ciudad: "SANTO DOMINGO" SOLI_CIUDAD
SOLI_NIT
literal_1_13_direccion: "SANTO DOMINGO" SOLI_DIRECCIONRESIDENCIA
literal_2_1_nombres: "Alexander Suco" SOLI_NOMBRESTOMADOR
literal_2_2_nit: "654654654654" SOLI_NITTOMADOR
literal_2_3_direccion: "av quito" SOLI_DIRECCIONTOMADOR
literal_2_4_telefono: "654654654654" SOLI_TELEFONOTOMADOR
literal_2_5_celular: "654654654654" SOLI_CELULARTOMADOR
literal_2_6_email: "65465465465" SOLI_EMAILTOMADOR
SOLI_NOMBRECONYUGE
SOLI_PROFESION
SOLI_CARGO
SOLI_PAISRESIDENCIA
SOLI_LUGARTRABAJO
SOLI_FECHAINGRESO
SOLI_INGRESOANUAL
SOLI_DIRECCIONCOMERCIAL
SOLI_REFERENCIASPERSONALES
PLAN_CODIGO
SOLI_VALORX
SOLI_DEDUCIBLE
SOLI_DETALLEDEDUCIBLE
SOLI_TIPOPOLIZA
SOLI_INICIOVIGENCIA
literal_4_1_1: "Si" SOLI_TIENESEGURO
literal_4_1_1_compania: "seguros Santo doming" SOLI_NOMBRECOMPANIA
literal_4_1_1_tiempo_servicio: "12" SOLI_TIEMPOSERVICIO
literal_4_1_2: "Si" SOLI_RECHAZADODEUNSEGURO
literal_4_1_2_detallar_enfermedad: "detalle de enfermeda" SOLI_EXCLUSIONDETALLEENFERMEDAD ######OJO
"SOLI_EXCLUSIONALTASINIESTRALIDAD"
"SOLI_EXCLUSIONCAMBIORESIDENCIA"
"SOLI_EXCLUSIONINCREMENTOPRIMA"
"SOLI_EXCLUSIONOTRA"
literal_4_1_3: "Si" SOLI_PRACTICADEPORTES
literal_4_1_3_deporte: "Montañismo" SOLI_PRACTICADEPORTESDETALLE
literal_4_1_4_estatura: "1.7" SOLI_ESTATURA
literal_4_1_4_peso: "70" SOLI_PESO
literal_4_1_5: "Normal" SOLI_PRESIONARTERIAL
literal_4_1_6: "Si" SOLI_FUMA
literal_4_1_6_cantidad: "Mayor cinco" SOLI_CUANTOFUMA
literal_4_1_6_tiempo: "Menor cinco" SOLI_CUANDOFUMA
literal_4_1_7: "Si" SOLI_DEJODEFUMAR
literal_4_1_7_cantidad: "Mayor cinco" SOLI_CUANTOFUMABADIARIO
literal_4_1_8: "Si" SOLI_INGIEREALCOHOL
literal_4_1_8_bebidas: "Frecuentemente" SOLI_DETALLEINGIEREALCOHOL
literal_4_1_8_frecuencia: "Mes" SOLI_FRECUENCIAALCOHOL
literal_4_1_8_veces_mes: "3 veces" SOLI_TIEMPOALCOHOL
literal_4_1_9: "Si" SOLI_TRATAMIENTOALCHOLODROGA
literal_4_1_9_alcoholismo: "true" SOLI_TRATAMIENTOALCOHOL
literal_4_1_9_drogadiccion: "true" SOLI_TRATAMIENTODROGA
literal_4_1_9_fecha_alcoholismo: "2022-06" SOLI_FECHATRATAMIENTOALCOHOL
literal_4_1_9_fecha_drogadiccion: "2022-08" SOLI_FECHATRATAMIENTODROGA
literal_4_1_9_tipo_drogadiccion: "cocaina" SOLI_TIPODEDROGA
literal_4_1_10: "Si" SOLI_PRACTICADOEXAMEN
literal_4_1_10_electrocardiograma: "true" SOLI_ELECTROCARDIOGRAMA
literal_4_1_10_electrocardiograma_fecha: "2022-06" SOLI_FECHAELECTROEXAMEN
literal_4_1_10_electrocardiograma_motivo: "Otros"
literal_4_1_10_electrocardiograma_motivo_detalle_otros: "trabajo electro" 
literal_4_1_10_electrocardiograma_resultado: "Enfermedad" SOLI_RESULTADOEXAMENELECTRO
literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad: "examen electro" SOLI_DETALLEEXAMENELECTRO
literal_4_1_10_orina: "true" SOLI_EXAMENORINA
literal_4_1_10_orina_fecha: "2022-06" SOLI_FECHAEXAMENORINA
literal_4_1_10_orina_motivo: "Otros"
literal_4_1_10_orina_motivo_detalle_otros: "trabajo orina" 
literal_4_1_10_orina_resultado: "Enfermedad" SOLI_RESULTADOEXAMENORINA
literal_4_1_10_orina_resultado_detalle_enfermedad: "examen de orina " SOLI_DETALLEEXAMENORINA 
literal_4_1_10_orina_resultado_detalle_otros: "examen "
literal_4_1_10_otros: "true" SOLI_OTROSEXAMENES
literal_4_1_10_otros_detalle_otros: "otros examenes medicos en ultimos 5 años"
literal_4_1_10_rayosx: "true" SOLI_RAYOSX
literal_4_1_10_rayosx_fecha: "2022-06" SOLI_FECHARAYOSXEXAMEN
literal_4_1_10_rayosx_motivo: "Otros"
literal_4_1_10_rayosx_motivo_detalle_otros: "trabajo electro"
literal_4_1_10_rayosx_resultado: "Enfermedad" SOLI_RESULTADOEXAMENRAYOSX
literal_4_1_10_rayosx_resultado_detalle_enfermedad: "enfermedad examen rayos x" SOLI_DETALLEEXAMENRAYOSX
literal_4_1_10_sangre: "true" SOLI_EXAMENSANGRE
literal_4_1_10_sangre_motivo: "Otros"
literal_4_1_10_sangre_motivo_detalle_otros: "trabajo sangre"
literal_4_1_10_sangre_resultado: "Enfermedad" SOLI_RESULTADOEXAMENSANGRE
literal_4_1_10_sangre_resultado_detalle_enfermedad: "enfermedad examen de sangre" SOLI_DETALLEEXAMENSANGRE
"SOLI_MOTIVOEXAMENES"
SOLI_DETALLEMOTIVOEXAMENES
literal_4_1_11: "Si" SOLI_HOSPITALIZADO
literal_4_1_11_diagnostico: "diagnostico hospitalizado" SOLI_DIAGNOSTICOHOSPITALIZADO
literal_4_1_11_fecha: "2022-06" SOLI_FECHAHOSPITALIZADO
literal_4_1_12: "Si" SOLI_ACCIDENTE
literal_4_1_12_detallar: "sufrí un accidente que requirió trato medico" SOLI_DETALLEACCIDENTE
literal_4_1_12_fecha: "2022-08" SOLI_FECHAACCIDENTE
literal_4_1_13: "Si" SOLI_INTERVENCIONQUIRURGICA
literal_4_1_13_especifique: "intervencion quirurjica" SOLI_INDICARINTERVENCION
literal_4_1_13_fecha: "2022-06"  SOLI_FECHAINTERVENCION
literal_4_1_14: "Si" SOLI_HOSPITALIZACIONPENDIENTE
literal_4_1_14_fecha: "2022-05" SOLI_FECHAHOSPITALIZACIONPENDIENTE
literal_4_1_14_indicar: "hospitalziacion pendiente" SOLI_DETALLEHOSPITALIZACIONPENDIENTE
literal_4_1_15: "Si" SOLI_ACTUALTRATAMIENTO
literal_4_1_15_especifique: "sometido a tratamiento o terapia medica o medicamentos" SOLI_DETALLEACTUALTRATAMIENTO
literal_4_1_15_fecha: "2022-06" SOLI_FECHAACTUALTRATAMIENTO
literal_4_2_1: "Si" SOLI_HAPADECIDOENFERMEDADES
literal_4_2_1_convulsiones: "true" SOLI_CONVULSIONESENFERMEDAD
literal_4_2_1_convulsiones_fecha: "2022-06"
literal_4_2_1_convulsiones_tratamiento: "convulsiones tratamiento"
literal_4_2_1_dolores_cabeza: "true" SOLI_DOLORESCABEZASEVEROS
literal_4_2_1_dolores_cabeza_fecha: "2022-06"
literal_4_2_1_dolores_cabeza_tratamiento: "dolores de cabeza severos tratamiento"
literal_4_2_1_enfermedades_mentales: "true" SOLI_ENFERMEDADESMENTALES
literal_4_2_1_enfermedades_mentales_fecha: "2022-05"
literal_4_2_1_enfermedades_mentales_tratamiento: "mentales tratamiento"
literal_4_2_1_epilepsia: "true" SOLI_EPILEPSIAENFERMEDAD
literal_4_2_1_epilepsia_fecha: "2022-02"
literal_4_2_1_epilepsia_tratamiento: "epilepsia tratamiento"
literal_4_2_1_jaquecas: "true"
literal_4_2_1_jaquecas_fecha: "2022-02"
literal_4_2_1_jaquecas_tratamiento: "jaquecas tratamiento"
literal_4_2_1_paralisis: "true" SOLI_PARALISISENFERMEDAD
literal_4_2_1_paralisis_fecha: "2022-07"
literal_4_2_1_paralisis_tratamiento: "paralisis tratamiento"
literal_4_2_1_vertigos: "true" SOLI_VERTIGOENFERMEDAD
literal_4_2_1_vertigos_fecha: "2022-06"
literal_4_2_1_vertigos_tratamiento: "vertigos tratamiento"
SOLI_FECHAENFERMEDADES
SOLI_TRATAMIENTOENFERMEDADES
literal_4_2_2: "Si" SOLI_TOSENFERMEDADESRESPIRATORIAS
literal_4_2_2_cansancio_caminar: "true" SOLI_CANSANCIOCAMINAR
literal_4_2_2_cansancio_caminar_fecha: "2022-05"
literal_4_2_2_cansancio_caminar_tratamiento: "cansancio al caminar tratamiento"
literal_4_2_2_enfisema: "true" SOLI_ENFISEMA
literal_4_2_2_enfisema_fecha: "2022-02"
literal_4_2_2_enfisema_tratamiento: "enfisema tratamiento"
literal_4_2_2_pulmones: "true" SOLI_OTRASENFERMEDADESRESPIRATORIA
literal_4_2_2_pulmones_fecha: "2022-06" SOLI_FECHAENFERMEDADESRESPIRATORIAS
literal_4_2_2_pulmones_tratamiento: "enfermedad de los pulmones tratamiento" SOLI_DETALLETOSENFERMEDADESRESPIRATORIAS
literal_4_2_2_tos_cronica: "true" SOLI_TOSCRONICA
literal_4_2_2_tos_cronica_fecha: "2022-06"
literal_4_2_2_tos_cronica_tratamiento: "tos cronica tratamiento"
literal_4_2_3: "Si" SOLI_ENFERMEDADESCORAZON
literal_4_2_3_arritmias: "true" SOLI_ARITMIAS
literal_4_2_3_arritmias_fecha: "2022-02"
literal_4_2_3_arritmias_tratamiento: "arritmias tratamiento"
literal_4_2_3_enfermedad_corazon: "true" SOLI_OTRASENFERMEDADESCORAZON
literal_4_2_3_enfermedad_corazon_fecha: "2022-06" SOLI_FECHAENFERMEDADCORAZON
literal_4_2_3_enfermedad_corazon_tratamiento: "enfermedades del corazon tratamiento" SOLI_DETALLEENFERMEDADESCORAZON
literal_4_2_3_presion_alta: "true" SOLI_PRESIONALTA
literal_4_2_3_presion_alta_fecha: "2022-02"
literal_4_2_3_presion_alta_tratamiento: "presion alta  tratamiento"
literal_4_2_3_soplos_corazon: "true" SOLI_SOPLOSCORAZON
literal_4_2_3_soplos_corazon_fecha: "2022-02"
literal_4_2_3_soplos_corazon_tratamiento: "soplos al corazon tratamiento"
literal_4_2_4: "Si" SOLI_ENFERMEDADESRINION
literal_4_2_4_calculo_prostata: "true" SOLI_PROSTATA
literal_4_2_4_calculo_prostata_fecha: "2022-06"
literal_4_2_4_calculo_prostata_tratamiento: "calculo en prostata tratamiento"
literal_4_2_4_calculo_rinion: "true" SOLI_CALCULORINION
literal_4_2_4_calculo_rinion_fecha: "2022-01"
literal_4_2_4_calculo_rinion_tratamiento: "calculo en riñon tratamiento"
literal_4_2_4_calculo_urinarias: "true"
literal_4_2_4_calculo_urinarias_fecha: "2022-02"
literal_4_2_4_calculo_urinarias_tratamiento: "calculo en vias urinarias tratamiento"
literal_4_2_4_enfermedad_vejiga: "true" SOLI_OTRAENFERMEDADRINION
literal_4_2_4_enfermedad_vejiga_fecha: "2022-03" SOLI_FECHAENFERMEDADRINION
literal_4_2_4_enfermedad_vejiga_tratamiento: "enfermedades relacionadas vias urinarias o vejiga tratamiento" SOLI_DETALLEENFERMEDADESRINION
literal_4_2_5: "Si" SOLI_ENFERMEDADESARTICULACIONES
literal_4_2_5_articulaciones: "true" SOLI_OTRASENFERMEDADESARTICULACIONES
literal_4_2_5_articulaciones_fecha: "2022-06" SOLI_FECHAENFERMEDADARTICULACIONES
literal_4_2_5_articulaciones_tratamiento: "enfermedades relacionadas con articulaciones tratamiento" SOLI_DETALLEENFERMEDADESARTICULACIONES
SOLI_ARTICULACIONES
literal_4_2_5_artritis: "true" 
literal_4_2_5_artritis_fecha: "2022-05"
literal_4_2_5_artritis_tratamiento: "atritits tratamiento"
literal_4_2_5_columna: "true" SOLI_COLUMNA
literal_4_2_5_columna_fecha: "2022-09"
literal_4_2_5_columna_tratamiento: "columna tratamiento"
literal_4_2_5_extremidades: "true"
literal_4_2_5_extremidades_fecha: "2022-04"
literal_4_2_5_extremidades_tratamiento: "extremidades tratamiento"
literal_4_2_5_huesos: "true" SOLI_HUESOS
literal_4_2_5_huesos_fecha: "2022-08"
literal_4_2_5_huesos_tratamiento: "huesos tratamiento"
literal_4_2_5_musculos: "true" SOLI_MUSCULOS
literal_4_2_5_musculos_fecha: "2022-04"
literal_4_2_5_musculos_tratamiento: "musculos tratamiento"
literal_4_2_5_reumatismo: "true" SOLI_REUMATISMO
literal_4_2_5_reumatismo_fecha: "2022-06"
literal_4_2_5_reumatismo_tratamiento: "reumatismo tratamiento"
literal_4_2_6: "Si" SOLI_ENFERMEDADESSANGRE
literal_4_2_6_alteraciones_coagulacion: "true" SOLI_COAGULACION
literal_4_2_6_alteraciones_coagulacion_fecha: "2022-06"
literal_4_2_6_alteraciones_coagulacion_tratamiento: "alteraciones de coagulacion tratamiento"
literal_4_2_6_enfermedad_sangre: "true" SOLI_OTROENFERMEDADSANGRE
literal_4_2_6_enfermedad_sangre_fecha: "2022-04" SOLI_FECHAENFERMEDADSANGRE
literal_4_2_6_enfermedad_sangre_tratamiento: "enfermedades de la sangre tratamiento" SOLI_DETALLEENFERMEDADESSANGRE
literal_4_2_6_hemofilia: "true" SOLI_HEMOFILIA
literal_4_2_6_hemofilia_fecha: "2022-06"
literal_4_2_6_hemofilia_tratamiento: "hemofilia tratamiento"
literal_4_2_6_hemorragias_persistentes: "true" SOLI_HEMORRAGIASPERSISTENTES
literal_4_2_6_hemorragias_persistentes_fecha: "2022-03"
literal_4_2_6_hemorragias_persistentes_tratamiento: "hemorragias persistentes tratamiento"
literal_4_2_7: "Si" SOLI_ENFERMEDADESCOLESTEROL
literal_4_2_7_bocio: "true" SOLI_BOCIO
literal_4_2_7_bocio_fecha: "2022-08"
literal_4_2_7_bocio_tratamiento: "bocio tratamiento"
literal_4_2_7_colesterol_elevado: "true" SOLI_COLESTEROLELEVADO
literal_4_2_7_colesterol_elevado_fecha: "2022-03"
literal_4_2_7_colesterol_elevado_tratamiento: "colesterol elevado tratamiento"
literal_4_2_7_enfermedad_glandulas: "true" SOLI_GLANDULASENDOCRINAS
literal_4_2_7_enfermedad_glandulas_fecha: "2022-03"
literal_4_2_7_enfermedad_glandulas_tratamiento: "enfermedades de las glandulas endocrinas tratamiento"
SOLI_FECHAENFERMEDADCOLESTEROL
SOLI_DETALLEENFERMEDADESCOLESTEROL
literal_4_2_8: "Si" SOLI_ENFERMEDADESDECANCER
literal_4_2_8_cancer: "true" SOLI_CANCER
literal_4_2_8_cancer_fecha: "2022-03"
literal_4_2_8_cancer_tratamiento: "cancer tratamiento"
literal_4_2_8_hernias: "true" SOLI_HERNIAS
literal_4_2_8_hernias_fecha: "2022-03"
literal_4_2_8_hernias_tratamiento: "hernias de cualquier tipo tratamiento"
literal_4_2_8_quistes: "true" SOLI_QUISTES
literal_4_2_8_quistes_fecha: "2022-03"
literal_4_2_8_quistes_tratamiento: "quistes tratamiento"
literal_4_2_8_ulceras: "true" SOLI_ULSERAS
literal_4_2_8_ulceras_fecha: "2022-03"
literal_4_2_8_ulceras_tratamiento: "ulceras varicosas u otras enfermedades de igual naturaleza tratamiento"
SOLI_FECHAENFERMEDADCANCER
SOLI_DETALLECANCER
literal_4_2_9: "Si" SOLI_SIDA
literal_4_2_10: "Si" SOLI_TESTSIDA
literal_4_2_10_fecha: "2022-03" SOLI_FECHAEXAMENSIDA
literal_4_2_10_resultado: "Positivo" SOLI_RESULTADOSIDA
literal_4_3: "Si" SOLI_TIENEANORMALIDAD
SOLI_DETALLEANORMALIDAD
literal_4_3_amputacion: "true"
literal_4_3_amputacion_fecha: "2022-02"
literal_4_3_amputacion_tratamiento: "anormalidad de amputacion tratamiento"
literal_4_3_constitucion: "true"
literal_4_3_constitucion_fecha: "2022-03"
literal_4_3_constitucion_tratamiento: "anormalidad de constitucion tratamiento"
literal_4_3_defecto_fisico: "true"
literal_4_3_defecto_fisico_fecha: "2022-03"
literal_4_3_defecto_fisico_tratamiento: "otro defecto fisico tratamiento"
literal_4_3_deformacion: "true"
literal_4_3_deformacion_fecha: "2022-06"
literal_4_3_deformacion_tratamiento: "anormalidad de deformacion tratamiento"
literal_4_4: "Si" SOLI_TIENEALGUNAOTRAENFERMEDAD
literal_4_4_enfermedad: "true"
literal_4_4_enfermedad_fecha: "2022-06"
literal_4_4_enfermedad_tratamiento: "enfermedad tratamiento"
literal_4_4_lesion: "true"
literal_4_4_lesion_fecha: "2022-02"
literal_4_4_lesion_tratamiento: "lesion tratamiento"
lugar: "Santa Cruz" SOLI_LUGARX */


  campos = ["SOLI_FECSOL",
    "SOLI_INTERM",
    "SOLI_USTEDES",
    "SOLI_PARENTESCO",
    "SOLI_OTROPARENTESCO", //
    "SOLI_NOMBRES",
    "SOLI_LUGARNACIMIENTO",
    "SOLI_FECNAC",
    "SOLI_GENERO",
    "SOLI_ESTADOCIVIL",
    "SOLI_OCUPACION",
    "SOLI_NACIONALIDAD",
    "SOLI_CEDULA",
    "SOLI_CIUDAD",
    "SOLI_NIT",
    "SOLI_DIRECCIONRESIDENCIA",
    "SOLI_NOMBRESTOMADOR",
    "SOLI_NITTOMADOR",
    "SOLI_DIRECCIONTOMADOR",
    "SOLI_TELEFONOTOMADOR",
    "SOLI_CELULARTOMADOR",
    "SOLI_EMAILTOMADOR",
    "SOLI_NOMBRECONYUGE",
    //
    "SOLI_PROFESION",
    "SOLI_CARGO",
    "SOLI_PAISRESIDENCIA",
    "SOLI_LUGARTRABAJO",
    "SOLI_FECHAINGRESO",
    "SOLI_INGRESOANUAL",
    "SOLI_DIRECCIONCOMERCIAL",
    "SOLI_REFERENCIASPERSONALES",
    //
    "SOLI_TIENESEGURO",
    "SOLI_NOMBRECOMPANIA",
    "SOLI_TIEMPOSERVICIO",
    "SOLI_RECHAZADODEUNSEGURO",
    "SOLI_MOTIVOEXCLUSION",
    "SOLI_EXCLUSIONDETALLE",
    "SOLI_EXCLUSIONDETALLEENFERMEDAD",
    "SOLI_PRACTICADEPORTES",
    "SOLI_PRACTICADEPORTESDETALLE",
    "SOLI_ESTATURA",
    "SOLI_PESO",
    "SOLI_PRESIONARTERIAL",
    "SOLI_FUMA",
    "SOLI_CUANTOFUMA",
    "SOLI_CUANDOFUMA",
    "SOLI_DEJODEFUMAR",
    "SOLI_CUANTOFUMABADIARIO",
    "SOLI_INGIEREALCOHOL",//"literal_4_1_8",
    "SOLI_DETALLEINGIEREALCOHOL",//"literal_4_1_8_bebidas",
    "SOLI_FRECUENCIAALCOHOL",//"literal_4_1_8_frecuencia",
    "SOLI_TIEMPOALCOHOL",//"literal_4_1_8_veces_mes","literal_4_1_8_veces_semana"
    "SOLI_TIEMPOALCOHOLSEM",
    "SOLI_TRATAMIENTOALCHOLODROGA",
    "SOLI_TRATAMIENTOALCOHOL",
    "SOLI_TRATAMIENTODROGA",
    "SOLI_FECHATRATAMIENTOALCOHOL",
    "SOLI_FECHATRATAMIENTODROGA",
    "SOLI_TIPODEDROGA",
    "SOLI_PRACTICADOEXAMEN",
    "SOLI_ELECTROCARDIOGRAMA",
    "SOLI_FECHAELECTROEXAMEN",
    "SOLI_RESULTADOEXAMENELECTRO",
    "SOLI_DETALLEEXAMENELECTRO",
    "SOLI_EXAMENORINA",
    "SOLI_FECHAEXAMENORINA",
    "SOLI_RESULTADOEXAMENORINA",
    "SOLI_DETALLEEXAMENORINA",
    "SOLI_OTROSEXAMENES",
    "SOLI_RAYOSX",
    "SOLI_FECHARAYOSXEXAMEN",
    "SOLI_RESULTADOEXAMENRAYOSX",
    "SOLI_DETALLEEXAMENRAYOSX",
    "SOLI_EXAMENSANGRE",
    "SOLI_RESULTADOEXAMENSANGRE",
    "SOLI_DETALLEEXAMENSANGRE",
    "SOLI_HOSPITALIZADO",
    "SOLI_DIAGNOSTICOHOSPITALIZADO",
    "SOLI_FECHAHOSPITALIZADO",
    "SOLI_ACCIDENTE",
    "SOLI_DETALLEACCIDENTE",
    "SOLI_FECHAACCIDENTE",
    "SOLI_INTERVENCIONQUIRURGICA",
    "SOLI_INDICARINTERVENCION",
    "SOLI_FECHAINTERVENCION",
    "SOLI_HOSPITALIZACIONPENDIENTE",
    "SOLI_FECHAHOSPITALIZACIONPENDIENTE",
    "SOLI_DETALLEHOSPITALIZACIONPENDIENTE",
    "SOLI_ACTUALTRATAMIENTO",
    "SOLI_DETALLEACTUALTRATAMIENTO",
    "SOLI_FECHAACTUALTRATAMIENTO",
    "SOLI_HAPADECIDOENFERMEDADES",
    "SOLI_CONVULSIONESENFERMEDAD",
    "SOLI_DOLORESCABEZASEVEROS",
    "SOLI_ENFERMEDADESMENTALES",
    "SOLI_EPILEPSIAENFERMEDAD",
    "SOLI_PARALISISENFERMEDAD",
    "SOLI_VERTIGOENFERMEDAD",
    "SOLI_TOSENFERMEDADESRESPIRATORIAS",
    "SOLI_CANSANCIOCAMINAR",
    "SOLI_ENFISEMA",
    "SOLI_OTRASENFERMEDADESRESPIRATORIA",
    "SOLI_FECHAENFERMEDADESRESPIRATORIAS",
    "SOLI_DETALLETOSENFERMEDADESRESPIRATORIAS",
    "SOLI_TOSCRONICA",
    "SOLI_ENFERMEDADESCORAZON",
    "SOLI_ARITMIAS",
    "SOLI_OTRASENFERMEDADESCORAZON",
    "SOLI_FECHAENFERMEDADCORAZON",
    "SOLI_DETALLEENFERMEDADESCORAZON",
    "SOLI_PRESIONALTA",
    "SOLI_SOPLOSCORAZON",
    "SOLI_ENFERMEDADESRINION",
    "SOLI_PROSTATA",
    "SOLI_CALCULORINION",
    "SOLI_OTRAENFERMEDADRINION",
    "SOLI_FECHAENFERMEDADRINION",
    "SOLI_DETALLEENFERMEDADESRINION",
    "SOLI_ENFERMEDADESARTICULACIONES",
    "SOLI_OTRASENFERMEDADESARTICULACIONES",
    "SOLI_FECHAENFERMEDADARTICULACIONES",
    "SOLI_DETALLEENFERMEDADESARTICULACIONES",
    "SOLI_COLUMNA",
    "SOLI_HUESOS",
    "SOLI_MUSCULOS",
    "SOLI_REUMATISMO",
    "SOLI_ENFERMEDADESSANGRE",
    "SOLI_COAGULACION",
    "SOLI_OTROENFERMEDADSANGRE",
    "SOLI_FECHAENFERMEDADSANGRE",
    "SOLI_DETALLEENFERMEDADESSANGRE",
    "SOLI_HEMOFILIA",
    "SOLI_HEMORRAGIASPERSISTENTES",
    "SOLI_ENFERMEDADESCOLESTEROL",
    "SOLI_BOCIO",
    "SOLI_COLESTEROLELEVADO",
    "SOLI_GLANDULASENDOCRINAS",
    "SOLI_ENFERMEDADESDECANCER",
    "SOLI_CANCER",
    "SOLI_HERNIAS",
    "SOLI_QUISTES",
    "SOLI_ULSERAS",
    "SOLI_SIDA",
    "SOLI_TESTSIDA",
    "SOLI_FECHAEXAMENSIDA",
    "SOLI_RESULTADOSIDA",
    "SOLI_TIENEANORMALIDAD",
    "SOLI_TIENEALGUNAOTRAENFERMEDAD",
    "SOLI_LUGARX",
    "USUA_CODIGO",
    "SOLI_ELECTROCARDIOCRAMA_MOTIVO_OTROS",
    "SOLI_ELECTROCARDIOCRAMA_MOTIVO_DETALLEOTROS",
    "SOLI_ORINA_MOTIVO_OTROS",
    "SOLI_ORINA_MOTIVO_DETALLEOTROS",
    "SOLI_ORINA_RESULTADO_DETALLEOTROS",
    "SOLI_OTROSDETALLESOTROS",
    "SOLI_RAYOSX_MOTIVO",
    "SOLI_RAYOSX_MOTIVODETALLE",
    "SOLI_SANGREMOTIVO_OTROS",
    "SOLI_SANGREMOTIVODETALLEOTROS",
    "SOLI_SANGREMOTIVODETALLEOTROSFECHA",
    "SOLI_CONVULSIONESFECHA",
    "SOLI_CONVULSIONESTRATAMIENTO",
    "SOLI_DOLORESCABEZAFECHA",
    "SOLI_DOLORESCABEZATRATAMIENTO",
    "SOLI_ENFERMEDADESMENTALES_FECHA",
    "SOLI_ENFERMEDADESMENTALES_TRATAMIENTO",
    "SOLI_EPILEPSIA_FECHA",
    "SOLI_EPILEPSIA_TRATAMIENTO",
    "SOLI_JAQUECAS",
    "SOLI_JAQUECAS_FECHA",
    "SOLI_JAQUECAS_TRATAMIENTO",
    "SOLI_PARALISIS_FECHA",
    "SOLI_PARALISIS_TRATAMIENTO",
    "SOLI_VERTIGOSFECHA",
    "SOLI_VERTIGOSTRATAMIENTO",
    "SOLI_CANSANCIOCAMINARFECHA",
    "SOLI_CANSANCIOCAMINARTRATAMIENTO",
    "SOLI_ENFISEMAFECHA",
    "SOLI_ENFISEMATRATAMIENTO",
    "SOLI_TOSCRONICAFECHA",
    "SOLI_TOSCRONICATRATAMIENTO",
    "SOLI_ARRITMIASFECHA",
    "SOLI_ARRITMIASTRATAMIENTO",
    "SOLI_PRESIONALTAFECHA",
    "SOLI_PRESIONALTATRATAMIENTO",
    "SOLI_SOPLOSCORAZONFECHA",
    "SOLI_SOPLOSCORAZONTRATAMIENTO",
    "SOLI_CALCULOPROSTATAFECHA",
    "SOLI_CALCULOPROSTATATRATAMIENTO",
    "SOLI_CALCULORINIONFECHA",
    "SOLI_CALCULORINIONTRATAMIENTO",
    "SOLI_CALCULOURINARIAS",
    "SOLI_CALCULOURINARIASFECHA",
    "SOLI_CALCULOURINARIASTRATAMIENTO",
    "SOLI_ARTRITIS",
    "SOLI_ARTRITISFECHA",
    "SOLI_ARTRITISTRATAMIENTO",
    "SOLI_COLUMNAFECHA",
    "SOLI_COLUMNATRATAMIENTO",
    "SOLI_EXTREMIDADES",
    "SOLI_EXTREMIDADESFECHA",
    "SOLI_EXTREMIDADESTRATAMIENTO",
    "SOLI_HUESOSFECHA",
    "SOLI_HUESOSTRATAMIENTO",
    "SOLI_MUSCULOSFECHA",
    "SOLI_MUSCULOSTRATAMIENTO",
    "SOLI_REUMATISMOFECHA",
    "SOLI_REUMATISMOTRATAMIENTO",
    "SOLI_ALTERACIONESCOAGULACIONFECHA",
    "SOLI_ALTERACIONESCOAGULACIONTRATAMIENTO",
    "SOLI_HEMOFILIAFECHA",
    "SOLI_HEMOFILIATRATAMIENTO",
    "SOLI_HEMORRAGIASFECHA",
    "SOLI_HEMORRAGIASTRATAMIENTO",
    "SOLI_BOCIOFECHA",
    "SOLI_BOCIOTRATAMIENTO",
    "SOLI_COLESTEROLFECHA",
    "SOLI_COLESTEROLTRATAMIENTO",
    "SOLI_ENFERMEDADGLANDULASFECHA",
    "SOLI_ENFERMEDADGLANDULASTRATAMIENTO",
    "SOLI_CANCERFECHA",
    "SOLI_CANCERTRATAMIENTO",
    "SOLI_HERNIASFECHA",
    "SOLI_HERNIASTRATAMIENTO",
    "SOLI_QUISTESFECHA",
    "SOLI_QUISTESTRATAMIENTO",
    "SOLI_ULCERASFECHA",
    "SOLI_ULCERASTRATAMIENTO",
    "SOLI_AMPUTACION",
    "SOLI_AMPUTACIONFECHA",
    "SOLI_AMPUTACIONTRATAMIENTO",
    "SOLI_CONSTITUCION",
    "SOLI_CONSTITUCIONFECHA",
    "SOLI_CONSTITUCIONTRATAMIENTO",
    "SOLI_DEFECTOFISICO",
    "SOLI_DEFECTOFISICOFECHA",
    "SOLI_DEFECTOFISICOTRATAMIENTO",
    "SOLI_DEFORMACION",
    "SOLI_DEFORMACIONFECHA",
    "SOLI_DEFORMACIONTRATAMIENTO",
    "SOLI_ENFERMEDAD",
    "SOLI_ENFERMEDADFECHA",
    "SOLI_ENFERMEDADTRATAMIENTO",
    "SOLI_LESION",
    "SOLI_LESIONFECHA",
    "SOLI_LESIONTRATAMIENTO",
    "SOLI_ELECTRORESULTDETALLEOTROS",//
    "SOLI_RAYOSXRESULTDETALLEOTROS",//
    "SOLI_SANGRERESULTOTROS",//
    "SOLI_EMBARAZO",//
    "SOLI_MESESEMBARAZO",//
    "SOLI_EVOLUCIONEMBARAZO",//
    "SOLI_RIESGOEMBARAZO",//
    "SOLI_PARTOSCESAREAS",//
    "SOLI_NUMEROPARTOSCESAREA",//
    "SOLI_NUMEROPARTOSNORMALES",//
    "SOLI_FECHAULTIMOCESAREA",//
    "SOLI_FECHAULTIMOPARTO",//
    "SOLI_PAPANICOLAOSINO",//
    "SOLI_FECHAULTIMOPAPANICOLAOU",//
    "SOLI_RESULTADOPAPANICOLAOU",//
    "SOLI_DETALLERESULTADOPAPANICOLAU",//
    "SOLI_CESAREAS",//
    "SOLI_PARTOS",//
    "SOLI_CIUDAD"//
    ];
    //231







  var nombresC = ["fecha_solicitud",
    "intermediario",
    "literal_1_1",
    "literal_1_1_parentesco",
    "literal_1_1_otros_parentescos", //
    "literal_1_2_nombres",
    "literal_1_3_lugar_nacimiento",
    "literal_1_4_fecha_nacimiento",
    "literal_1_6_genero",
    "literal_1_7_estado_civil",
    "literal_1_8_ocupacion",
    "literal_1_9_nacionalidad",
    "literal_1_10_cedula",
    "literal_1_11_ciudad",
    "literal_1_12_nit",//##################
    "literal_1_13_direccion",
    "literal_2_1_nombres",
    "literal_2_2_nit",
    "literal_2_3_direccion",
    "literal_2_4_telefono",
    "literal_2_5_celular",
    "literal_2_6_email",
    "literal_1_7_conyuge",
    //
    "literal_3_2_profesion",
    "literal_3_3_cargo_actual",
    "literal_3_4_pais_residencia",
    "literal_3_5_lugar_trabajo",
    "literal_3_6_fecha_ingreso",
    "literal_3_7_ingreso_anual",
    "literal_3_8_direccion_comercial",
    "literal_3_9_referencias",
    //
    "literal_4_1_1",
    "literal_4_1_1_compania",
    "literal_4_1_1_tiempo_servicio",
    "literal_4_1_2",
    "literal_4_1_2_motivo_exclusion",
    "literal_4_1_2_detallar_exclusion",
    "literal_4_1_2_detallar_enfermedad",
    "literal_4_1_3",
    "literal_4_1_3_deporte" ,
    "literal_4_1_4_estatura",
    "literal_4_1_4_peso",
    "literal_4_1_5",
    "literal_4_1_6",
    "literal_4_1_6_cantidad",
    "literal_4_1_6_tiempo",
    "literal_4_1_7",
    "literal_4_1_7_cantidad",
    "literal_4_1_8",//"SOLI_INGIEREALCOHOL"
    "literal_4_1_8_bebidas",//"SOLI_DETALLEINGIEREALCOHOL"
    "literal_4_1_8_frecuencia",//"SOLI_FRECUENCIAALCOHOL"
    "literal_4_1_8_veces_mes",//"SOLI_TIEMPOALCOHOL"
    "literal_4_1_8_veces_semana",//"SOLI_TIEMPOALCOHOLSEM"
    "literal_4_1_9",
    "literal_4_1_9_alcoholismo",
    "literal_4_1_9_drogadiccion",
    "literal_4_1_9_fecha_alcoholismo",
    "literal_4_1_9_fecha_drogadiccion",
    "literal_4_1_9_tipo_drogadiccion",
    "literal_4_1_10",
    "literal_4_1_10_electrocardiograma",
    "literal_4_1_10_electrocardiograma_fecha",
    "literal_4_1_10_electrocardiograma_resultado",
    "literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad",
    "literal_4_1_10_orina",
    "literal_4_1_10_orina_fecha",
    "literal_4_1_10_orina_resultado",
    "literal_4_1_10_orina_resultado_detalle_enfermedad",
    "literal_4_1_10_otros",
    "literal_4_1_10_rayosx",
    "literal_4_1_10_rayosx_fecha",
    "literal_4_1_10_rayosx_resultado",
    "literal_4_1_10_rayosx_resultado_detalle_enfermedad",
    "literal_4_1_10_sangre",
    "literal_4_1_10_sangre_resultado",
    "literal_4_1_10_sangre_resultado_detalle_enfermedad",
    "literal_4_1_11",
    "literal_4_1_11_diagnostico",
    "literal_4_1_11_fecha",
    "literal_4_1_12",
    "literal_4_1_12_detallar",
    "literal_4_1_12_fecha",
    "literal_4_1_13",
    "literal_4_1_13_especifique",
    "literal_4_1_13_fecha",
    "literal_4_1_14",
    "literal_4_1_14_fecha",
    "literal_4_1_14_indicar",
    "literal_4_1_15",
    "literal_4_1_15_especifique",
    "literal_4_1_15_fecha",
    "literal_4_2_1",
    "literal_4_2_1_convulsiones",
    "literal_4_2_1_dolores_cabeza",
    "literal_4_2_1_enfermedades_mentales",
    "literal_4_2_1_epilepsia",
    "literal_4_2_1_paralisis",
    "literal_4_2_1_vertigos",
    "literal_4_2_2",
    "literal_4_2_2_cansancio_caminar",
    "literal_4_2_2_enfisema",
    "literal_4_2_2_pulmones",
    "literal_4_2_2_pulmones_fecha",
    "literal_4_2_2_pulmones_tratamiento",
    "literal_4_2_2_tos_cronica",
    "literal_4_2_3",
    "literal_4_2_3_arritmias",
    "literal_4_2_3_enfermedad_corazon",
    "literal_4_2_3_enfermedad_corazon_fecha",
    "literal_4_2_3_enfermedad_corazon_tratamiento",
    "literal_4_2_3_presion_alta",
    "literal_4_2_3_soplos_corazon",
    "literal_4_2_4",
    "literal_4_2_4_calculo_prostata",
    "literal_4_2_4_calculo_rinion",
    "literal_4_2_4_enfermedad_vejiga",
    "literal_4_2_4_enfermedad_vejiga_fecha",
    "literal_4_2_4_enfermedad_vejiga_tratamiento",
    "literal_4_2_5",
    "literal_4_2_5_articulaciones",
    "literal_4_2_5_articulaciones_fecha",
    "literal_4_2_5_articulaciones_tratamiento",
    "literal_4_2_5_columna",
    "literal_4_2_5_huesos",
    "literal_4_2_5_musculos",
    "literal_4_2_5_reumatismo",
    "literal_4_2_6",
    "literal_4_2_6_alteraciones_coagulacion",
    "literal_4_2_6_enfermedad_sangre",
    "literal_4_2_6_enfermedad_sangre_fecha",
    "literal_4_2_6_enfermedad_sangre_tratamiento",
    "literal_4_2_6_hemofilia",
    "literal_4_2_6_hemorragias_persistentes",
    "literal_4_2_7",
    "literal_4_2_7_bocio",
    "literal_4_2_7_colesterol_elevado",
    "literal_4_2_7_enfermedad_glandulas",
    "literal_4_2_8",
    "literal_4_2_8_cancer",
    "literal_4_2_8_hernias",
    "literal_4_2_8_quistes",
    "literal_4_2_8_ulceras",
    "literal_4_2_9",
    "literal_4_2_10",
    "literal_4_2_10_fecha",
    "literal_4_2_10_resultado",
    "literal_4_3",
    "literal_4_4",
    "lugar",
    "z_usuario",
    "literal_4_1_10_electrocardiograma_motivo",
    "literal_4_1_10_electrocardiograma_motivo_detalle_otros",
    "literal_4_1_10_orina_motivo",
    "literal_4_1_10_orina_motivo_detalle_otros",
    "literal_4_1_10_orina_resultado_detalle_otros",
    "literal_4_1_10_otros_detalle_otros",
    "literal_4_1_10_rayosx_motivo",
    "literal_4_1_10_rayosx_motivo_detalle_otros",
    "literal_4_1_10_sangre_motivo",
    "literal_4_1_10_sangre_motivo_detalle_otros",
    "literal_4_1_10_sangre_fecha",
    "literal_4_2_1_convulsiones_fecha",
    "literal_4_2_1_convulsiones_tratamiento",
    "literal_4_2_1_dolores_cabeza_fecha",
    "literal_4_2_1_dolores_cabeza_tratamiento",
    "literal_4_2_1_enfermedades_mentales_fecha",
    "literal_4_2_1_enfermedades_mentales_tratamiento",
    "literal_4_2_1_epilepsia_fecha",
    "literal_4_2_1_epilepsia_tratamiento",
    "literal_4_2_1_jaquecas",
    "literal_4_2_1_jaquecas_fecha",
    "literal_4_2_1_jaquecas_tratamiento",
    "literal_4_2_1_paralisis_fecha",
    "literal_4_2_1_paralisis_tratamiento",
    "literal_4_2_1_vertigos_fecha",
    "literal_4_2_1_vertigos_tratamiento",
    "literal_4_2_2_cansancio_caminar_fecha",
    "literal_4_2_2_cansancio_caminar_tratamiento",
    "literal_4_2_2_enfisema_fecha",
    "literal_4_2_2_enfisema_tratamiento",
    "literal_4_2_2_tos_cronica_fecha",
    "literal_4_2_2_tos_cronica_tratamiento",
    "literal_4_2_3_arritmias_fecha",
    "literal_4_2_3_arritmias_tratamiento",
    "literal_4_2_3_presion_alta_fecha",
    "literal_4_2_3_presion_alta_tratamiento",
    "literal_4_2_3_soplos_corazon_fecha",
    "literal_4_2_3_soplos_corazon_tratamiento",
    "literal_4_2_4_calculo_prostata_fecha",
    "literal_4_2_4_calculo_prostata_tratamiento",
    "literal_4_2_4_calculo_rinion_fecha",
    "literal_4_2_4_calculo_rinion_tratamiento",
    "literal_4_2_4_calculo_urinarias",
    "literal_4_2_4_calculo_urinarias_fecha",
    "literal_4_2_4_calculo_urinarias_tratamiento",
    "literal_4_2_5_artritis",
    "literal_4_2_5_artritis_fecha",
    "literal_4_2_5_artritis_tratamiento",
    "literal_4_2_5_columna_fecha",
    "literal_4_2_5_columna_tratamiento",
    "literal_4_2_5_extremidades",
    "literal_4_2_5_extremidades_fecha",
    "literal_4_2_5_extremidades_tratamiento",
    "literal_4_2_5_huesos_fecha",
    "literal_4_2_5_huesos_tratamiento",
    "literal_4_2_5_musculos_fecha",
    "literal_4_2_5_musculos_tratamiento",
    "literal_4_2_5_reumatismo_fecha",
    "literal_4_2_5_reumatismo_tratamiento",
    "literal_4_2_6_alteraciones_coagulacion_fecha",
    "literal_4_2_6_alteraciones_coagulacion_tratamiento",
    "literal_4_2_6_hemofilia_fecha",
    "literal_4_2_6_hemofilia_tratamiento",
    "literal_4_2_6_hemorragias_persistentes_fecha",
    "literal_4_2_6_hemorragias_persistentes_tratamiento",
    "literal_4_2_7_bocio_fecha",
    "literal_4_2_7_bocio_tratamiento",
    "literal_4_2_7_colesterol_elevado_fecha",
    "literal_4_2_7_colesterol_elevado_tratamiento",
    "literal_4_2_7_enfermedad_glandulas_fecha",
    "literal_4_2_7_enfermedad_glandulas_tratamiento",
    "literal_4_2_8_cancer_fecha",
    "literal_4_2_8_cancer_tratamiento",
    "literal_4_2_8_hernias_fecha",
    "literal_4_2_8_hernias_tratamiento",
    "literal_4_2_8_quistes_fecha",
    "literal_4_2_8_quistes_tratamiento",
    "literal_4_2_8_ulceras_fecha",
    "literal_4_2_8_ulceras_tratamiento",
    "literal_4_3_amputacion",
    "literal_4_3_amputacion_fecha",
    "literal_4_3_amputacion_tratamiento",
    "literal_4_3_constitucion",
    "literal_4_3_constitucion_fecha",
    "literal_4_3_constitucion_tratamiento",
    "literal_4_3_defecto_fisico",
    "literal_4_3_defecto_fisico_fecha",
    "literal_4_3_defecto_fisico_tratamiento",
    "literal_4_3_deformacion",
    "literal_4_3_deformacion_fecha",
    "literal_4_3_deformacion_tratamiento",
    "literal_4_4_enfermedad",
    "literal_4_4_enfermedad_fecha",
    "literal_4_4_enfermedad_tratamiento",
    "literal_4_4_lesion",
    "literal_4_4_lesion_fecha",
    "literal_4_4_lesion_tratamiento",
    "literal_4_1_10_electrocardiograma_resultado_detalle_otros",//SOLI_ELECTRORESULTDETALLEOTROS
    "literal_4_1_10_rayosx_resultado_detalle_otros",//SOLI_RAYOSXRESULTDETALLEOTROS
    "literal_4_1_10_sangre_resultado_detalle_otros",//SOLI_SANGRERESULTOTROS
    "literal_4_5_1",//SOLI_EMBARAZO
    "literal_4_5_1_meses_embarazo",//SOLI_MESESEMBARAZO
    "literal_4_5_1_problemas_embarazo",//SOLI_EVOLUCIONEMBARAZO
    "literal_4_5_1_riesgos_embarazo",//SOLI_RIESGOEMBARAZO
    "literal_4_5_2",//SOLI_PARTOSCESAREAS
    "literal_4_5_2_cesareas_cantidad",//SOLI_NUMEROPARTOSCESAREA
    "literal_4_5_2_partos_cantidad",//SOLI_NUMEROPARTOSNORMALES
    "literal_4_5_2_ultima_cesarea_fecha",//SOLI_FECHAULTIMOCESAREA
    "literal_4_5_2_ultimo_parto_fecha",//SOLI_FECHAULTIMOPARTO
    "literal_4_5_3",//SOLI_PAPANICOLAOSINO
    "literal_4_5_3_fecha",//SOLI_FECHAULTIMOPAPANICOLAOU
    "literal_4_5_3_resultados",//SOLI_RESULTADOPAPANICOLAOU
    "literal_4_5_3_resultados_otros_especifique",//SOLI_DETALLERESULTADOPAPANICOLAU
    "literal_4_5_2_cesareas",//SOLI_CESAREAS
    "literal_4_5_2_partos",//SOLI_PARTOS
    "literal_1_11_expedicion"//SOLI_CIUDAD
    
    
  ];
  var camposFin = [];
  if(userData["intermediario"]==="Empresa"){
    objSql.consulta_codigo_PS_callback("sy_seguridad_usuario", ["USUA_CODIGO"], ["USUA_REGION","PERF_CODIGO"], [userData["lugar"],27], result =>{
      console.log(result.USUA_CODIGO);
      userData.z_usuario=result.USUA_CODIGO;
      Object.keys(userData).map(nombre => {
        if (nombresC.includes(nombre.toString())) {
          const indice = nombresC.indexOf(nombre);
          camposFin.push(campos[indice])
          if (userData[nombre] === "true" || userData[nombre] === true) { userData[nombre] = "Si" }
          else if (userData[nombre] === "false" || userData[nombre] === false) { userData[nombre] = "No" }
          else if (userData[nombre] === "otros" || userData[nombre] === "Otros") { userData[nombre] = "Otros" }
          valores.push(userData[nombre]);
        }
      });
      valores.push(fecha_auditoria)
      camposFin.push("SOLI_FECHAINGRESOSOLICITUD")
      objSql.insertar_formulariodesalud(userData["literal_2_6_email"], tabla, camposFin, valores, ["SOLI_FECHAEXAMENSIDA", "SOLI_FECHAENFERMEDADSANGRE", "SOLI_FECHAENFERMEDADARTICULACIONES",
        "SOLI_FECHAENFERMEDADRINION", "SOLI_FECHAENFERMEDADCORAZON", "SOLI_FECHAENFERMEDADESRESPIRATORIAS", "SOLI_FECHAACTUALTRATAMIENTO",
        "SOLI_FECHAHOSPITALIZACIONPENDIENTE", "SOLI_FECHAINTERVENCION", "SOLI_FECHAACCIDENTE", "SOLI_FECHAHOSPITALIZADO", "SOLI_FECHARAYOSXEXAMEN",
        "SOLI_FECHAEXAMENORINA", "SOLI_FECHAELECTROEXAMEN", "SOLI_FECHATRATAMIENTODROGA", "SOLI_FECHATRATAMIENTOALCOHOL", "SOLI_FECNAC", "SOLI_FECSOL", "SOLI_FECHAINGRESOSOLICITUD",
        "SOLI_CONVULSIONESFECHA", "SOLI_DOLORESCABEZAFECHA", "SOLI_ENFERMEDADESMENTALES_FECHA", "SOLI_EPILEPSIA_FECHA", "SOLI_JAQUECAS_FECHA", "SOLI_PARALISIS_FECHA",
        "SOLI_VERTIGOSFECHA", "SOLI_CANSANCIOCAMINARFECHA", "SOLI_ENFISEMAFECHA", "SOLI_TOSCRONICAFECHA", "SOLI_ARRITMIASFECHA", "SOLI_PRESIONALTAFECHA", "SOLI_SOPLOSCORAZONFECHA",
        "SOLI_CALCULOPROSTATAFECHA", "SOLI_CALCULORINIONFECHA", "SOLI_CALCULOURINARIASFECHA", "SOLI_ARTRITISFECHA", "SOLI_COLUMNAFECHA", "SOLI_EXTREMIDADESFECHA", "SOLI_HUESOSFECHA",
        "SOLI_MUSCULOSFECHA", "SOLI_REUMATISMOFECHA", "SOLI_ALTERACIONESCOAGULACIONFECHA", "SOLI_HEMOFILIAFECHA", "SOLI_HEMORRAGIASFECHA", "SOLI_BOCIOFECHA", "SOLI_COLESTEROLFECHA",
        "SOLI_ENFERMEDADGLANDULASFECHA", "SOLI_CANCERFECHA", "SOLI_HERNIASFECHA", "SOLI_QUISTESFECHA", "SOLI_ULCERASFECHA", "SOLI_AMPUTACIONFECHA", "SOLI_CONSTITUCIONFECHA",
        "SOLI_DEFECTOFISICOFECHA", "SOLI_DEFORMACIONFECHA", "SOLI_ENFERMEDADFECHA", "SOLI_LESIONFECHA", "SOLI_SANGREMOTIVODETALLEOTROSFECHA",
        "SOLI_FECHAULTIMOCESAREA", "SOLI_FECHAULTIMOPARTO", "SOLI_FECHAULTIMOPAPANICOLAOU"
      ], ['', ''], res);
    })
  }else{
    Object.keys(userData).map(nombre => {
      if (nombresC.includes(nombre.toString())) {
        const indice = nombresC.indexOf(nombre);
        camposFin.push(campos[indice])
        if (userData[nombre] === "true" || userData[nombre] === true) { userData[nombre] = "Si" }
        else if (userData[nombre] === "false" || userData[nombre] === false) { userData[nombre] = "No" }
        else if (userData[nombre] === "otros" || userData[nombre] === "Otros") { userData[nombre] = "Otros" }
        valores.push(userData[nombre]);
      }
    });
    valores.push(fecha_auditoria)
    camposFin.push("SOLI_FECHAINGRESOSOLICITUD")
    objSql.insertar_formulariodesalud(userData["literal_2_6_email"], tabla, camposFin, valores, ["SOLI_FECHAEXAMENSIDA", "SOLI_FECHAENFERMEDADSANGRE", "SOLI_FECHAENFERMEDADARTICULACIONES",
      "SOLI_FECHAENFERMEDADRINION", "SOLI_FECHAENFERMEDADCORAZON", "SOLI_FECHAENFERMEDADESRESPIRATORIAS", "SOLI_FECHAACTUALTRATAMIENTO",
      "SOLI_FECHAHOSPITALIZACIONPENDIENTE", "SOLI_FECHAINTERVENCION", "SOLI_FECHAACCIDENTE", "SOLI_FECHAHOSPITALIZADO", "SOLI_FECHARAYOSXEXAMEN",
      "SOLI_FECHAEXAMENORINA", "SOLI_FECHAELECTROEXAMEN", "SOLI_FECHATRATAMIENTODROGA", "SOLI_FECHATRATAMIENTOALCOHOL", "SOLI_FECNAC", "SOLI_FECSOL", "SOLI_FECHAINGRESOSOLICITUD",
      "SOLI_CONVULSIONESFECHA", "SOLI_DOLORESCABEZAFECHA", "SOLI_ENFERMEDADESMENTALES_FECHA", "SOLI_EPILEPSIA_FECHA", "SOLI_JAQUECAS_FECHA", "SOLI_PARALISIS_FECHA",
      "SOLI_VERTIGOSFECHA", "SOLI_CANSANCIOCAMINARFECHA", "SOLI_ENFISEMAFECHA", "SOLI_TOSCRONICAFECHA", "SOLI_ARRITMIASFECHA", "SOLI_PRESIONALTAFECHA", "SOLI_SOPLOSCORAZONFECHA",
      "SOLI_CALCULOPROSTATAFECHA", "SOLI_CALCULORINIONFECHA", "SOLI_CALCULOURINARIASFECHA", "SOLI_ARTRITISFECHA", "SOLI_COLUMNAFECHA", "SOLI_EXTREMIDADESFECHA", "SOLI_HUESOSFECHA",
      "SOLI_MUSCULOSFECHA", "SOLI_REUMATISMOFECHA", "SOLI_ALTERACIONESCOAGULACIONFECHA", "SOLI_HEMOFILIAFECHA", "SOLI_HEMORRAGIASFECHA", "SOLI_BOCIOFECHA", "SOLI_COLESTEROLFECHA",
      "SOLI_ENFERMEDADGLANDULASFECHA", "SOLI_CANCERFECHA", "SOLI_HERNIASFECHA", "SOLI_QUISTESFECHA", "SOLI_ULCERASFECHA", "SOLI_AMPUTACIONFECHA", "SOLI_CONSTITUCIONFECHA",
      "SOLI_DEFECTOFISICOFECHA", "SOLI_DEFORMACIONFECHA", "SOLI_ENFERMEDADFECHA", "SOLI_LESIONFECHA", "SOLI_SANGREMOTIVODETALLEOTROSFECHA",
      "SOLI_FECHAULTIMOCESAREA", "SOLI_FECHAULTIMOPARTO", "SOLI_FECHAULTIMOPAPANICOLAOU"
    ], ['', ''], res);
  }
  

  /*const { nombre_dispositivo, funcionamiento, sucursal, observacion } = req.body;
    let token = req.headers.authorization.split(" ")[1];
    let id_usuario = objToken.obtener_id_usuario(token);
    objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
      digitador = datos_usuario["USUA_NOMBRE"];
      var valores = [nombre_dispositivo, funcionamiento, sucursal, observacion, "ACTIVO", digitador, fecha_auditoria, digitador, fecha_auditoria];
      const campos = ["DISP_NOMBRE", "DISP_VALFUN", "DISP_SUCURS", "DISP_OBSERV", "DISP_ESTADO", "DISP_USUING", "DISP_FECING", "DISP_USUMOD", "DISP_FECMOD"];
      const campos_F=["DISP_FECPOL", "DISP_FECENT", "DISP_FECINS","DISP_FECMOD", "DISP_FECING", "DISP_FECMOD"]
      objSql.insertar_PS(tabla, campos, valores, campos_F, ['',''], res);
    });*/
});

module.exports = {
  crear,
};



/*literal_4_1_10_electrocardiograma_motivo: "Otros" SOLI_ELECTROCARDIOCRAMA_MOTIVO_OTROS
literal_4_1_10_electrocardiograma_motivo_detalle_otros: "trabajo electro" SOLI_ELECTROCARDIOCRAMA_MOTIVO_DETALLEOTROS
literal_4_1_10_orina_motivo: "Otros" SOLI_ORINA_MOTIVO_OTROS
literal_4_1_10_orina_motivo_detalle_otros: "trabajo orina"  SOLI_ORINA_MOTIVO_DETALLEOTROS
literal_4_1_10_orina_resultado_detalle_otros: "examen " SOLI_ORINA_RESULTADO_DETALLEOTROS
literal_4_1_10_otros_detalle_otros: "otros examenes medicos en ultimos 5 años" SOLI_OTROSDETALLESOTROS
literal_4_1_10_rayosx_motivo: "Otros" SOLI_RAYOSX_MOTIVO
literal_4_1_10_rayosx_motivo_detalle_otros: "trabajo electro" SOLI_RAYOSX_MOTIVODETALLE
literal_4_1_10_sangre_motivo: "Otros" SOLI_SANGREMOTIVO_OTROS
literal_4_1_10_sangre_motivo_detalle_otros: "trabajo sangre"
literal_4_2_1_convulsiones_fecha: "2022-06" SOLI_CONVULSIONESFECHA
literal_4_2_1_convulsiones_tratamiento: "convulsiones tratamiento" SOLI_CONVULSIONESTRATAMIENTO
literal_4_2_1_dolores_cabeza_fecha: "2022-06" SOLI_DOLORESCABEZAFECHA
literal_4_2_1_dolores_cabeza_tratamiento: "dolores de cabeza severos tratamiento" SOLI_DOLORESCABEZATRATAMIENTO
literal_4_2_1_enfermedades_mentales_fecha: "2022-05" SOLI_ENFERMEDADESMENTALES_FECHA
literal_4_2_1_enfermedades_mentales_tratamiento: "mentales tratamiento" SOLI_ENFERMEDADESMENTALES_TRATAMIENTO
literal_4_2_1_epilepsia_fecha: "2022-02" SOLI_EPILEPSIA_FECHA
literal_4_2_1_epilepsia_tratamiento: "epilepsia tratamiento" SOLI_EPILEPSIA_TRATAMIENTO
literal_4_2_1_jaquecas: "true" SOLI_JAQUECAS
literal_4_2_1_jaquecas_fecha: "2022-02" SOLI_JAQUECAS_FECHA
literal_4_2_1_jaquecas_tratamiento: "jaquecas tratamiento" SOLI_JAQUECAS_TRATAMIENTO
literal_4_2_1_paralisis_fecha: "2022-07" SOLI_PARALISIS_FECHA
literal_4_2_1_paralisis_tratamiento: "paralisis tratamiento" SOLI_PARALISIS_TRATAMIENTO
literal_4_2_1_vertigos_fecha: "2022-06" SOLI_VERTIGOSFECHA
literal_4_2_1_vertigos_tratamiento: "vertigos tratamiento" SOLI_VERTIGOSTRATAMIENTO
literal_4_2_2_cansancio_caminar_fecha: "2022-05" SOLI_CANSANCIOCAMINARFECHA
literal_4_2_2_cansancio_caminar_tratamiento: "cansancio al caminar tratamiento" SOLI_CANSANCIOCAMINARTRATAMIENTO
literal_4_2_2_enfisema_fecha: "2022-02" SOLI_ENFISEMAFECHA
literal_4_2_2_enfisema_tratamiento: "enfisema tratamiento" SOLI_ENFISEMATRATAMIENTO
literal_4_2_2_tos_cronica_fecha: "2022-06" SOLI_TOSCRONICAFECHA
literal_4_2_2_tos_cronica_tratamiento: "tos cronica tratamiento" SOLI_TOSCRONICATRATAMIENTO
literal_4_2_3_arritmias_fecha: "2022-02" SOLI_ARRITMIASFECHA
literal_4_2_3_arritmias_tratamiento: "arritmias tratamiento" SOLI_ARRITMIASTRATAMIENTO
literal_4_2_3_presion_alta_fecha: "2022-02" SOLI_PRESIONALTAFECHA
literal_4_2_3_presion_alta_tratamiento: "presion alta  tratamiento" SOLI_PRESIONALTATRATAMIENTO
literal_4_2_3_soplos_corazon_fecha: "2022-02" SOLI_SOPLOSCORAZONFECHA
literal_4_2_3_soplos_corazon_tratamiento: "soplos al corazon tratamiento" SOLI_SOPLOSCORAZONTRATAMIENTO
literal_4_2_4_calculo_prostata_fecha: "2022-06" SOLI_CALCULOPROSTATAFECHA
literal_4_2_4_calculo_prostata_tratamiento: "calculo en prostata tratamiento" SOLI_CALCULOPROSTATATRATAMIENTO
literal_4_2_4_calculo_rinion_fecha: "2022-01" SOLI_CALCULORINIONFECHA
literal_4_2_4_calculo_rinion_tratamiento: "calculo en riñon tratamiento" SOLI_CALCULORINIONTRATAMIENTO
literal_4_2_4_calculo_urinarias: "true" SOLI_CALCULOURINARIAS
literal_4_2_4_calculo_urinarias_fecha: "2022-02" SOLI_CALCULOURINARIASFECHA
literal_4_2_4_calculo_urinarias_tratamiento: "calculo en vias urinarias tratamiento" SOLI_CALCULOURINARIASTRATAMIENTO
literal_4_2_5_artritis: "true" SOLI_ARTRITIS
literal_4_2_5_artritis_fecha: "2022-05" SOLI_ARTRITISFECHA
literal_4_2_5_artritis_tratamiento: "atritits tratamiento" SOLI_ARTRITISTRATAMIENTO
literal_4_2_5_columna_fecha: "2022-09" SOLI_COLUMNAFECHA
literal_4_2_5_columna_tratamiento: "columna tratamiento" SOLI_COLUMNATRATAMIENTO
literal_4_2_5_extremidades: "true" SOLI_EXTREMIDADES
literal_4_2_5_extremidades_fecha: "2022-04" SOLI_EXTREMIDADESFECHA
literal_4_2_5_extremidades_tratamiento: "extremidades tratamiento" SOLI_EXTREMIDADESTRATAMIENTO
literal_4_2_5_huesos_fecha: "2022-08" SOLI_HUESOSFECHA
literal_4_2_5_huesos_tratamiento: "huesos tratamiento" SOLI_HUESOSTRATAMIENTO
literal_4_2_5_musculos_fecha: "2022-04" SOLI_MUSCULOSFECHA
literal_4_2_5_musculos_tratamiento: "musculos tratamiento" SOLI_MUSCULOSTRATAMIENTO
literal_4_2_5_reumatismo_fecha: "2022-06" SOLI_REUMATISMOFECHA
literal_4_2_5_reumatismo_tratamiento: "reumatismo tratamiento" SOLI_REUMATISMOTRATAMIENTO
literal_4_2_6_alteraciones_coagulacion_fecha: "2022-06" SOLI_ALTERACIONESCOAGULACIONFECHA
literal_4_2_6_alteraciones_coagulacion_tratamiento: "alteraciones de coagulacion tratamiento" SOLI_ALTERACIONESCOAGULACIONTRATAMIENTO
literal_4_2_6_hemofilia_fecha: "2022-06" SOLI_HEMOFILIAFECHA
literal_4_2_6_hemofilia_tratamiento: "hemofilia tratamiento" SOLI_HEMOFILIATRATAMIENTO
literal_4_2_6_hemorragias_persistentes_fecha: "2022-03" SOLI_HEMORRAGIASFECHA
literal_4_2_6_hemorragias_persistentes_tratamiento: "hemorragias persistentes tratamiento" SOLI_HEMORRAGIASTRATAMIENTO
literal_4_2_7_bocio_fecha: "2022-08" SOLI_BOCIOFECHA
literal_4_2_7_bocio_tratamiento: "bocio tratamiento" SOLI_BOCIOTRATAMIENTO
literal_4_2_7_colesterol_elevado_fecha: "2022-03" SOLI_COLESTEROLFECHA
literal_4_2_7_colesterol_elevado_tratamiento: "colesterol elevado tratamiento" SOLI_COLESTEROLTRATAMIENTO
literal_4_2_7_enfermedad_glandulas_fecha: "2022-03" SOLI_ENFERMEDADGLANDULASFECHA
literal_4_2_7_enfermedad_glandulas_tratamiento: "enfermedades de las glandulas endocrinas tratamiento" SOLI_ENFERMEDADGLANDULASTRATAMIENTO
literal_4_2_8_cancer_fecha: "2022-03" SOLI_CANCERFECHA
literal_4_2_8_cancer_tratamiento: "cancer tratamiento" SOLI_CANCERTRATAMIENTO
literal_4_2_8_hernias_fecha: "2022-03" SOLI_HERNIASFECHA
literal_4_2_8_hernias_tratamiento: "hernias de cualquier tipo tratamiento" SOLI_HERNIASTRATAMIENTO
literal_4_2_8_quistes_fecha: "2022-03" SOLI_QUISTESFECHA
literal_4_2_8_quistes_tratamiento: "quistes tratamiento" SOLI_QUISTESTRATAMIENTO
literal_4_2_8_ulceras_fecha: "2022-03" SOLI_ULCERASFECHA
literal_4_2_8_ulceras_tratamiento: "ulceras varicosas u otras enfermedades de igual naturaleza tratamiento" SOLI_ULCERASTRATAMIENTO
literal_4_3_amputacion: "true" SOLI_AMPUTACION
literal_4_3_amputacion_fecha: "2022-02" SOLI_AMPUTACIONFECHA
literal_4_3_amputacion_tratamiento: "anormalidad de amputacion tratamiento" SOLI_AMPUTACIONTRATAMIENTO
literal_4_3_constitucion: "true" SOLI_CONSTITUCION
literal_4_3_constitucion_fecha: "2022-03" SOLI_CONSTITUCIONFECHA
literal_4_3_constitucion_tratamiento: "anormalidad de constitucion tratamiento" SOLI_CONSTITUCIONTRATAMIENTO
literal_4_3_defecto_fisico: "true" SOLI_DEFECTOFISICO
literal_4_3_defecto_fisico_fecha: "2022-03" SOLI_DEFECTOFISICOFECHA
literal_4_3_defecto_fisico_tratamiento: "otro defecto fisico tratamiento" SOLI_DEFECTOFISICOTRATAMIENTO
literal_4_3_deformacion: "true" SOLI_DEFORMACION
literal_4_3_deformacion_fecha: "2022-06" SOLI_DEFORMACIONFECHA
literal_4_3_deformacion_tratamiento: "anormalidad de deformacion tratamiento" SOLI_DEFORMACIONTRATAMIENTO
literal_4_4_enfermedad: "true" SOLI_ENFERMEDAD
literal_4_4_enfermedad_fecha: "2022-06" SOLI_ENFERMEDADFECHA
literal_4_4_enfermedad_tratamiento: "enfermedad tratamiento" SOLI_ENFERMEDADTRATAMIENTO
literal_4_4_lesion: "true" SOLI_LESION
literal_4_4_lesion_fecha: "2022-02" SOLI_LESIONFECHA
literal_4_4_lesion_tratamiento: "lesion tratamiento" SOLI_LESIONTRATAMIENTO
 */
