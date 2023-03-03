import { useContext, useState } from 'react';
import { StepperContext } from '../../../contexts/StepperContext';

import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

import validator from 'validator';
import { LeyendaError } from "../../../components/form/cssElementsForm";

export default function DatosDeclaracion() {
    const { userData, setUserData } = useContext(StepperContext);
    const { datos_declaracion, setDatosDeclaracion } = useContext(StepperContext);
    // if (datos_declaracion !== true) {
    //     setDatosDeclaracion(false);
    //     //console.log("%%%%%%%%%%%%%%%%",datos_UIF)
    // }
    //Guarda los datos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        setDatosDeclaracion(validarCampos());
    }

    const objvalidar = require("../../../utils/Validator");

    const [validacion, setValidacion] = useState(false);
    // setDatosDeclaracion(true);

    /************************************************************ VALIDACIONES ************************************************************/
    {/* Variables */ }
    /*************** APARTADO 4.1 ***************/
    // SECCIÓN 4.1.1
    const [literal_4_1_1_compania, set_literal_4_1_1_compania] = useState(userData["literal_4_1_1_compania"] || "");
    const [literal_4_1_1_tiempo_servicio, set_literal_4_1_1_tiempo_servicio] = useState(userData["literal_4_1_1_tiempo_servicio"] || "");
    // SECCIÓN 4.1.2
    const [literal_4_1_2_motivo_exclusion, set_literal_4_1_2_motivo_exclusion] = useState(userData["literal_4_1_2_motivo_exclusion"] || "");
    const [literal_4_1_2_detallar_enfermedad, set_literal_4_1_2_detallar_enfermedad] = useState(userData["literal_4_1_2_detallar_enfermedad"] || "");
    const [literal_4_1_2_detallar_exclusion, set_literal_4_1_2_detallar_exclusion] = useState(userData["literal_4_1_2_detallar_exclusion"] || "");
    // SECCIÓN 4.1.3
    const [literal_4_1_3_deporte, set_literal_4_1_3_deporte] = useState(userData["literal_4_1_3_deporte"] || "");
    // SECCIÓN 4.1.4
    const [literal_4_1_4_estatura, set_literal_4_1_4_estatura] = useState(userData["literal_4_1_4_estatura"] || "");
    const [literal_4_1_4_peso, set_literal_4_1_4_peso] = useState(userData["literal_4_1_4_peso"] || "");
    // SECCIÓN 4.1.8
    const [literal_4_1_8_veces_mes, set_literal_4_1_8_veces_mes] = useState(userData["literal_4_1_8_veces_mes"] || "");
    const [literal_4_1_8_veces_semana, set_literal_4_1_8_veces_semana] = useState(userData["literal_4_1_8_veces_semana"] || "");
    // SECCIÓN 4.1.9
    const [literal_4_1_9_fecha_alcoholismo, set_literal_4_1_9_fecha_alcoholismo] = useState(userData["literal_4_1_9_fecha_alcoholismo"] || "");
    const [literal_4_1_9_tipo_drogadiccion, set_literal_4_1_9_tipo_drogadiccion] = useState(userData["literal_4_1_9_tipo_drogadiccion"] || "");
    const [literal_4_1_9_fecha_drogadiccion, set_literal_4_1_9_fecha_drogadiccion] = useState(userData["literal_4_1_9_fecha_drogadiccion"] || "");
    // SECCIÓN 4.1.10
    const [literal_4_1_10_sangre_fecha, set_literal_4_1_10_sangre_fecha] = useState(userData["literal_4_1_10_sangre_fecha"] || "");
    const [literal_4_1_10_sangre_resultado_detalle_enfermedad, set_literal_4_1_10_sangre_resultado_detalle_enfermedad] = useState(userData["literal_4_1_10_sangre_resultado_detalle_enfermedad"] || "");
    const [literal_4_1_10_sangre_resultado_detalle_otros, set_literal_4_1_10_sangre_resultado_detalle_otros] = useState(userData["literal_4_1_10_sangre_resultado_detalle_otros"] || "");
    const [literal_4_1_10_sangre_motivo_detalle_otros, set_literal_4_1_10_sangre_motivo_detalle_otros] = useState(userData["literal_4_1_10_sangre_motivo_detalle_otros"] || "");
    const [literal_4_1_10_orina_fecha, set_literal_4_1_10_orina_fecha] = useState(userData["literal_4_1_10_orina_fecha"] || "");
    const [literal_4_1_10_orina_resultado_detalle_enfermedad, set_literal_4_1_10_orina_resultado_detalle_enfermedad] = useState(userData["literal_4_1_10_orina_resultado_detalle_enfermedad"] || "");
    const [literal_4_1_10_orina_resultado_detalle_otros, set_literal_4_1_10_orina_resultado_detalle_otros] = useState(userData["literal_4_1_10_orina_resultado_detalle_otros"] || "");
    const [literal_4_1_10_orina_motivo_detalle_otros, set_literal_4_1_10_orina_motivo_detalle_otros] = useState(userData["literal_4_1_10_orina_motivo_detalle_otros"] || "");
    const [literal_4_1_10_electrocardiograma_fecha, set_literal_4_1_10_electrocardiograma_fecha] = useState(userData["literal_4_1_10_electrocardiograma_fecha"] || "");
    const [literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad, set_literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad] = useState(userData["literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad"] || "");
    const [literal_4_1_10_electrocardiograma_resultado_detalle_otros, set_literal_4_1_10_electrocardiograma_resultado_detalle_otros] = useState(userData["literal_4_1_10_electrocardiograma_resultado_detalle_otros"] || "");
    const [literal_4_1_10_electrocardiograma_motivo_detalle_otros, set_literal_4_1_10_electrocardiograma_motivo_detalle_otros] = useState(userData["literal_4_1_10_electrocardiograma_motivo_detalle_otros"] || "");
    const [literal_4_1_10_rayosx_fecha, set_literal_4_1_10_rayosx_fecha] = useState(userData["literal_4_1_10_rayosx_fecha"] || "");
    const [literal_4_1_10_rayosx_resultado_detalle_enfermedad, set_literal_4_1_10_rayosx_resultado_detalle_enfermedad] = useState(userData["literal_4_1_10_rayosx_resultado_detalle_enfermedad"] || "");
    const [literal_4_1_10_rayosx_resultado_detalle_otros, set_literal_4_1_10_rayosx_resultado_detalle_otros] = useState(userData["literal_4_1_10_rayosx_resultado_detalle_otros"] || "");
    const [literal_4_1_10_rayosx_motivo_detalle_otros, set_literal_4_1_10_rayosx_motivo_detalle_otros] = useState(userData["literal_4_1_10_rayosx_motivo_detalle_otros"] || "");
    const [literal_4_1_10_otros_detalle_otros, set_literal_4_1_10_otros_detalle_otros] = useState(userData["literal_4_1_10_otros_detalle_otros"] || "");
    // SECCIÓN 4.1.11
    const [literal_4_1_11_diagnostico, set_literal_4_1_11_diagnostico] = useState(userData["literal_4_1_11_diagnostico"] || "");
    const [literal_4_1_11_fecha, set_literal_4_1_11_fecha] = useState(userData["literal_4_1_11_fecha"] || "");
    // SECCIÓN 4.1.12
    const [literal_4_1_12_detallar, set_literal_4_1_12_detallar] = useState(userData["literal_4_1_12_detallar"] || "");
    const [literal_4_1_12_fecha, set_literal_4_1_12_fecha] = useState(userData["literal_4_1_12_fecha"] || "");
    // SECCIÓN 4.1.13
    const [literal_4_1_13_especifique, set_literal_4_1_13_especifique] = useState(userData["literal_4_1_13_especifique"] || "");
    const [literal_4_1_13_fecha, set_literal_4_1_13_fecha] = useState(userData["literal_4_1_13_fecha"] || "");
    // SECCIÓN 4.1.14
    const [literal_4_1_14_indicar, set_literal_4_1_14_indicar] = useState(userData["literal_4_1_14_indicar"] || "");
    const [literal_4_1_14_fecha, set_literal_4_1_14_fecha] = useState(userData["literal_4_1_14_fecha"] || "");
    // SECCIÓN 4.1.15
    const [literal_4_1_15_especifique, set_literal_4_1_15_especifique] = useState(userData["literal_4_1_15_especifique"] || "");
    const [literal_4_1_15_fecha, set_literal_4_1_15_fecha] = useState(userData["literal_4_1_15_fecha"] || "");

    /*************** APARTADO 4.2 ***************/
    // SECCIÓN 4.2.1
    const [literal_4_2_1_vertigos_fecha, set_literal_4_2_1_vertigos_fecha] = useState(userData["literal_4_2_1_vertigos_fecha"] || "");
    const [literal_4_2_1_vertigos_tratamiento, set_literal_4_2_1_vertigos_tratamiento] = useState(userData["literal_4_2_1_vertigos_tratamiento"] || "");
    const [literal_4_2_1_convulsiones_fecha, set_literal_4_2_1_convulsiones_fecha] = useState(userData["literal_4_2_1_convulsiones_fecha"] || "");
    const [literal_4_2_1_convulsiones_tratamiento, set_literal_4_2_1_convulsiones_tratamiento] = useState(userData["literal_4_2_1_convulsiones_tratamiento"] || "");
    const [literal_4_2_1_epilepsia_fecha, set_literal_4_2_1_epilepsia_fecha] = useState(userData["literal_4_2_1_epilepsia_fecha"] || "");
    const [literal_4_2_1_epilepsia_tratamiento, set_literal_4_2_1_epilepsia_tratamiento] = useState(userData["literal_4_2_1_epilepsia_tratamiento"] || "");
    const [literal_4_2_1_paralisis_fecha, set_literal_4_2_1_paralisis_fecha] = useState(userData["literal_4_2_1_paralisis_fecha"] || "");
    const [literal_4_2_1_paralisis_tratamiento, set_literal_4_2_1_paralisis_tratamiento] = useState(userData["literal_4_2_1_paralisis_tratamiento"] || "");
    const [literal_4_2_1_enfermedades_mentales_fecha, set_literal_4_2_1_enfermedades_mentales_fecha] = useState(userData["literal_4_2_1_enfermedades_mentales_fecha"] || "");
    const [literal_4_2_1_enfermedades_mentales_tratamiento, set_literal_4_2_1_enfermedades_mentales_tratamiento] = useState(userData["literal_4_2_1_enfermedades_mentales_tratamiento"] || "");
    const [literal_4_2_1_dolores_cabeza_fecha, set_literal_4_2_1_dolores_cabeza_fecha] = useState(userData["literal_4_2_1_dolores_cabeza_fecha"] || "");
    const [literal_4_2_1_dolores_cabeza_tratamiento, set_literal_4_2_1_dolores_cabeza_tratamiento] = useState(userData["literal_4_2_1_dolores_cabeza_tratamiento"] || "");
    const [literal_4_2_1_jaquecas_fecha, set_literal_4_2_1_jaquecas_fecha] = useState(userData["literal_4_2_1_jaquecas_fecha"] || "");
    const [literal_4_2_1_jaquecas_tratamiento, set_literal_4_2_1_jaquecas_tratamiento] = useState(userData["literal_4_2_1_jaquecas_tratamiento"] || "");
    // SECCIÓN 4.2.2
    const [literal_4_2_2_tos_cronica_fecha, set_literal_4_2_2_tos_cronica_fecha] = useState(userData["literal_4_2_2_tos_cronica_fecha"] || "");
    const [literal_4_2_2_tos_cronica_tratamiento, set_literal_4_2_2_tos_cronica_tratamiento] = useState(userData["literal_4_2_2_tos_cronica_tratamiento"] || "");
    const [literal_4_2_2_enfisema_fecha, set_literal_4_2_2_enfisema_fecha] = useState(userData["literal_4_2_2_enfisema_fecha"] || "");
    const [literal_4_2_2_enfisema_tratamiento, set_literal_4_2_2_enfisema_tratamiento] = useState(userData["literal_4_2_2_enfisema_tratamiento"] || "");
    const [literal_4_2_2_cansancio_caminar_fecha, set_literal_4_2_2_cansancio_caminar_fecha] = useState(userData["literal_4_2_2_cansancio_caminar_fecha"] || "");
    const [literal_4_2_2_cansancio_caminar_tratamiento, set_literal_4_2_2_cansancio_caminar_tratamiento] = useState(userData["literal_4_2_2_cansancio_caminar_tratamiento"] || "");
    const [literal_4_2_2_pulmones_fecha, set_literal_4_2_2_pulmones_fecha] = useState(userData["literal_4_2_2_pulmones_fecha"] || "");
    const [literal_4_2_2_pulmones_tratamiento, set_literal_4_2_2_pulmones_tratamiento] = useState(userData["literal_4_2_2_pulmones_tratamiento"] || "");
    // SECCIÓN 4.2.3
    const [literal_4_2_3_presion_alta_fecha, set_literal_4_2_3_presion_alta_fecha] = useState(userData["literal_4_2_3_presion_alta_fecha"] || "");
    const [literal_4_2_3_presion_alta_tratamiento, set_literal_4_2_3_presion_alta_tratamiento] = useState(userData["literal_4_2_3_presion_alta_tratamiento"] || "");
    const [literal_4_2_3_soplos_corazon_fecha, set_literal_4_2_3_soplos_corazon_fecha] = useState(userData["literal_4_2_3_soplos_corazon_fecha"] || "");
    const [literal_4_2_3_soplos_corazon_tratamiento, set_literal_4_2_3_soplos_corazon_tratamiento] = useState(userData["literal_4_2_3_soplos_corazon_tratamiento"] || "");
    const [literal_4_2_3_arritmias_fecha, set_literal_4_2_3_arritmias_fecha] = useState(userData["literal_4_2_3_arritmias_fecha"] || "");
    const [literal_4_2_3_arritmias_tratamiento, set_literal_4_2_3_arritmias_tratamiento] = useState(userData["literal_4_2_3_arritmias_tratamiento"] || "");
    const [literal_4_2_3_enfermedad_corazon_fecha, set_literal_4_2_3_enfermedad_corazon_fecha] = useState(userData["literal_4_2_3_enfermedad_corazon_fecha"] || "");
    const [literal_4_2_3_enfermedad_corazon_tratamiento, set_literal_4_2_3_enfermedad_corazon_tratamiento] = useState(userData["literal_4_2_3_enfermedad_corazon_tratamiento"] || "");
    // SECCIÓN 4.2.4
    const [literal_4_2_4_calculo_rinion_fecha, set_literal_4_2_4_calculo_rinion_fecha] = useState(userData["literal_4_2_4_calculo_rinion_fecha"] || "");
    const [literal_4_2_4_calculo_rinion_tratamiento, set_literal_4_2_4_calculo_rinion_tratamiento] = useState(userData["literal_4_2_4_calculo_rinion_tratamiento"] || "");
    const [literal_4_2_4_calculo_prostata_fecha, set_literal_4_2_4_calculo_prostata_fecha] = useState(userData["literal_4_2_4_calculo_prostata_fecha"] || "");
    const [literal_4_2_4_calculo_prostata_tratamiento, set_literal_4_2_4_calculo_prostata_tratamiento] = useState(userData["literal_4_2_4_calculo_prostata_tratamiento"] || "");
    const [literal_4_2_4_calculo_urinarias_fecha, set_literal_4_2_4_calculo_urinarias_fecha] = useState(userData["literal_4_2_4_calculo_urinarias_fecha"] || "");
    const [literal_4_2_4_calculo_urinarias_tratamiento, set_literal_4_2_4_calculo_urinarias_tratamiento] = useState(userData["literal_4_2_4_calculo_urinarias_tratamiento"] || "");
    const [literal_4_2_4_enfermedad_vejiga_fecha, set_literal_4_2_4_enfermedad_vejiga_fecha] = useState(userData["literal_4_2_4_enfermedad_vejiga_fecha"] || "");
    const [literal_4_2_4_enfermedad_vejiga_tratamiento, set_literal_4_2_4_enfermedad_vejiga_tratamiento] = useState(userData["literal_4_2_4_enfermedad_vejiga_tratamiento"] || "");
    // SECCIÓN 4.2.5
    const [literal_4_2_5_artritis_fecha, set_literal_4_2_5_artritis_fecha] = useState(userData["literal_4_2_5_artritis_fecha"] || "");
    const [literal_4_2_5_artritis_tratamiento, set_literal_4_2_5_artritis_tratamiento] = useState(userData["literal_4_2_5_artritis_tratamiento"] || "");
    const [literal_4_2_5_reumatismo_fecha, set_literal_4_2_5_reumatismo_fecha] = useState(userData["literal_4_2_5_reumatismo_fecha"] || "");
    const [literal_4_2_5_reumatismo_tratamiento, set_literal_4_2_5_reumatismo_tratamiento] = useState(userData["literal_4_2_5_reumatismo_tratamiento"] || "");
    const [literal_4_2_5_columna_fecha, set_literal_4_2_5_columna_fecha] = useState(userData["literal_4_2_5_columna_fecha"] || "");
    const [literal_4_2_5_columna_tratamiento, set_literal_4_2_5_columna_tratamiento] = useState(userData["literal_4_2_5_columna_tratamiento"] || "");
    const [literal_4_2_5_huesos_fecha, set_literal_4_2_5_huesos_fecha] = useState(userData["literal_4_2_5_huesos_fecha"] || "");
    const [literal_4_2_5_huesos_tratamiento, set_literal_4_2_5_huesos_tratamiento] = useState(userData["literal_4_2_5_huesos_tratamiento"] || "");
    const [literal_4_2_5_musculos_fecha, set_literal_4_2_5_musculos_fecha] = useState(userData["literal_4_2_5_musculos_fecha"] || "");
    const [literal_4_2_5_musculos_tratamiento, set_literal_4_2_5_musculos_tratamiento] = useState(userData["literal_4_2_5_musculos_tratamiento"] || "");
    const [literal_4_2_5_extremidades_fecha, set_literal_4_2_5_extremidades_fecha] = useState(userData["literal_4_2_5_extremidades_fecha"] || "");
    const [literal_4_2_5_extremidades_tratamiento, set_literal_4_2_5_extremidades_tratamiento] = useState(userData["literal_4_2_5_extremidades_tratamiento"] || "");
    const [literal_4_2_5_articulaciones_fecha, set_literal_4_2_5_articulaciones_fecha] = useState(userData["literal_4_2_5_articulaciones_fecha"] || "");
    const [literal_4_2_5_articulaciones_tratamiento, set_literal_4_2_5_articulaciones_tratamiento] = useState(userData["literal_4_2_4_enfermedad_vejiga_tratamiento"] || "");
    // SECCIÓN 4.2.6
    const [literal_4_2_6_hemofilia_fecha, set_literal_4_2_6_hemofilia_fecha] = useState(userData["literal_4_2_6_hemofilia_fecha"] || "");
    const [literal_4_2_6_hemofilia_tratamiento, set_literal_4_2_6_hemofilia_tratamiento] = useState(userData["literal_4_2_6_hemofilia_tratamiento"] || "");
    const [literal_4_2_6_alteraciones_coagulacion_fecha, set_literal_4_2_6_alteraciones_coagulacion_fecha] = useState(userData["literal_4_2_6_alteraciones_coagulacion_fecha"] || "");
    const [literal_4_2_6_alteraciones_coagulacion_tratamiento, set_literal_4_2_6_alteraciones_coagulacion_tratamiento] = useState(userData["literal_4_2_6_alteraciones_coagulacion_tratamiento"] || "");
    const [literal_4_2_6_hemorragias_persistentes_fecha, set_literal_4_2_6_hemorragias_persistentes_fecha] = useState(userData["literal_4_2_6_hemorragias_persistentes_fecha"] || "");
    const [literal_4_2_6_hemorragias_persistentes_tratamiento, set_literal_4_2_6_hemorragias_persistentes_tratamiento] = useState(userData["literal_4_2_6_hemorragias_persistentes_tratamiento"] || "");
    const [literal_4_2_6_enfermedad_sangre_fecha, set_literal_4_2_6_enfermedad_sangre_fecha] = useState(userData["literal_4_2_6_enfermedad_sangre_fecha"] || "");
    const [literal_4_2_6_enfermedad_sangre_tratamiento, set_literal_4_2_6_enfermedad_sangre_tratamiento] = useState(userData["literal_4_2_6_enfermedad_sangre_tratamiento"] || "");
    // SECCIÓN 4.2.7
    const [literal_4_2_7_bocio_fecha, set_literal_4_2_7_bocio_fecha] = useState(userData["literal_4_2_7_bocio_fecha"] || "");
    const [literal_4_2_7_bocio_tratamiento, set_literal_4_2_7_bocio_tratamiento] = useState(userData["literal_4_2_7_bocio_tratamiento"] || "");
    const [literal_4_2_7_colesterol_elevado_fecha, set_literal_4_2_7_colesterol_elevado_fecha] = useState(userData["literal_4_2_7_colesterol_elevado_fecha"] || "");
    const [literal_4_2_7_colesterol_elevado_tratamiento, set_literal_4_2_7_colesterol_elevado_tratamiento] = useState(userData["literal_4_2_7_colesterol_elevado_tratamiento"] || "");
    const [literal_4_2_7_enfermedad_glandulas_fecha, set_literal_4_2_7_enfermedad_glandulas_fecha] = useState(userData["literal_4_2_7_enfermedad_glandulas_fecha"] || "");
    const [literal_4_2_7_enfermedad_glandulas_tratamiento, set_literal_4_2_7_enfermedad_glandulas_tratamiento] = useState(userData["literal_4_2_7_enfermedad_glandulas_tratamiento"] || "");
    // SECCIÓN 4.2.8
    const [literal_4_2_8_cancer_fecha, set_literal_4_2_8_cancer_fecha] = useState(userData["literal_4_2_8_cancer_fecha"] || "");
    const [literal_4_2_8_cancer_tratamiento, set_literal_4_2_8_cancer_tratamiento] = useState(userData["literal_4_2_8_cancer_tratamiento"] || "");
    const [literal_4_2_8_quistes_fecha, set_literal_4_2_8_quistes_fecha] = useState(userData["literal_4_2_8_quistes_fecha"] || "");
    const [literal_4_2_8_quistes_tratamiento, set_literal_4_2_8_quistes_tratamiento] = useState(userData["literal_4_2_8_quistes_tratamiento"] || "");
    const [literal_4_2_8_ulceras_fecha, set_literal_4_2_8_ulceras_fecha] = useState(userData["literal_4_2_8_ulceras_fecha"] || "");
    const [literal_4_2_8_ulceras_tratamiento, set_literal_4_2_8_ulceras_tratamiento] = useState(userData["literal_4_2_8_ulceras_tratamiento"] || "");
    const [literal_4_2_8_hernias_fecha, set_literal_4_2_8_hernias_fecha] = useState(userData["literal_4_2_8_hernias_fecha"] || "");
    const [literal_4_2_8_hernias_tratamiento, set_literal_4_2_8_hernias_tratamiento] = useState(userData["literal_4_2_8_hernias_tratamiento"] || "");
    // SECCIÓN 4.2.10
    const [literal_4_2_10_fecha, set_literal_4_2_10_fecha] = useState(userData["literal_4_2_10_fecha"] || "");
    const [literal_4_2_10_resultado, set_literal_4_2_10_resultado] = useState(userData["literal_4_2_10_resultado"] || "");

    /*************** APARTADO 4.3 ***************/
    const [literal_4_3_constitucion_fecha, set_literal_4_3_constitucion_fecha] = useState(userData["literal_4_3_constitucion_fecha"] || "");
    const [literal_4_3_constitucion_tratamiento, set_literal_4_3_constitucion_tratamiento] = useState(userData["literal_4_3_constitucion_tratamiento"] || "");
    const [literal_4_3_deformacion_fecha, set_literal_4_3_deformacion_fecha] = useState(userData["literal_4_3_deformacion_fecha"] || "");
    const [literal_4_3_deformacion_tratamiento, set_literal_4_3_deformacion_tratamiento] = useState(userData["literal_4_3_deformacion_tratamiento"] || "");
    const [literal_4_3_amputacion_fecha, set_literal_4_3_amputacion_fecha] = useState(userData["literal_4_3_amputacion_fecha"] || "");
    const [literal_4_3_amputacion_tratamiento, set_literal_4_3_amputacion_tratamiento] = useState(userData["literal_4_3_amputacion_tratamiento"] || "");
    const [literal_4_3_defecto_fisico_fecha, set_literal_4_3_defecto_fisico_fecha] = useState(userData["literal_4_3_defecto_fisico_fecha"] || "");
    const [literal_4_3_defecto_fisico_tratamiento, set_literal_4_3_defecto_fisico_tratamiento] = useState(userData["literal_4_3_defecto_fisico_tratamiento"] || "");

    /*************** APARTADO 4.4 ***************/
    const [literal_4_4_enfermedad_fecha, set_literal_4_4_enfermedad_fecha] = useState(userData["literal_4_4_enfermedad_fecha"] || "");
    const [literal_4_4_enfermedad_tratamiento, set_literal_4_4_enfermedad_tratamiento] = useState(userData["literal_4_4_enfermedad_tratamiento"] || "");
    const [literal_4_4_lesion_fecha, set_literal_4_4_lesion_fecha] = useState(userData["literal_4_4_lesion_fecha"] || "");
    const [literal_4_4_lesion_tratamiento, set_literal_4_4_lesion_tratamiento] = useState(userData["literal_4_4_lesion_tratamiento"] || "");

    /*************** APARTADO 4.5 ***************/
    // SECCIÓN 4.5.1
    const [literal_4_5_1_meses_embarazo, set_literal_4_5_1_meses_embarazo] = useState(userData["literal_4_5_1_meses_embarazo"] || "");
    const [literal_4_5_1_riesgos_embarazo, set_literal_4_5_1_riesgos_embarazo] = useState(userData["literal_4_5_1_riesgos_embarazo"] || "");
    // SECCIÓN 4.5.2
    const [literal_4_5_2_ultimo_parto_fecha, set_literal_4_5_2_ultimo_parto_fecha] = useState(userData["literal_4_5_2_ultimo_parto_fecha"] || "");
    const [literal_4_5_2_ultima_cesarea_fecha, set_literal_4_5_2_ultima_cesarea_fecha] = useState(userData["literal_4_5_2_ultima_cesarea_fecha"] || "");
    // SECCIÓN 4.5.3
    const [literal_4_5_3_fecha, set_literal_4_5_3_fecha] = useState(userData["literal_4_5_3_fecha"] || "");
    const [literal_4_5_3_resultados, set_literal_4_5_3_resultados] = useState(userData["literal_4_5_3_resultados"] || "");
    const [literal_4_5_3_resultados_otros_especifique, set_literal_4_5_3_resultados_otros_especifique] = useState(userData["literal_4_5_3_resultados_otros_especifique"] || "");


    {/* Mensajes */ }
    /*************** APARTADO 4.1 ***************/
    // SECCIÓN 4.1.1
    const [msg_literal_4_1_1, setMsg_literal_4_1_1] = useState(" ");
    const [msg_literal_4_1_1_compania, setMsg_literal_4_1_1_compania] = useState(" ");
    const [msg_literal_4_1_1_tiempo_servicio, setMsg_literal_4_1_1_tiempo_servicio] = useState(" ");
    // SECCIÓN 4.1.2
    const [msg_literal_4_1_2, setMsg_literal_4_1_2] = useState(" ");
    const [msg_literal_4_1_2_motivo_exclusion, setMsg_literal_4_1_2_motivo_exclusion] = useState(" ");
    const [msg_literal_4_1_2_detallar_enfermedad, setMsg_literal_4_1_2_detallar_enfermedad] = useState(" ");
    const [msg_literal_4_1_2_detallar_exclusion, setMsg_literal_4_1_2_detallar_exclusion] = useState(" ");
    // SECCIÓN 4.1.3
    const [msg_literal_4_1_3, setMsg_literal_4_1_3] = useState(" ");
    const [msg_literal_4_1_3_deporte, setMsg_literal_4_1_3_deporte] = useState(" ");
    // SECCIÓN 4.1.4
    const [msg_literal_4_1_4_estatura, setMsg_literal_4_1_4_estatura] = useState(" ");
    const [msg_literal_4_1_4_peso, setMsg_literal_4_1_4_peso] = useState(" ");
    // SECCIÓN 4.1.5
    const [msg_literal_4_1_5, setMsg_literal_4_1_5] = useState(" ");
    // SECCIÓN 4.1.6
    const [msg_literal_4_1_6, setMsg_literal_4_1_6] = useState(" ");
    const [msg_literal_4_1_6_tiempo, setMsg_literal_4_1_6_tiempo] = useState(" ");
    const [msg_literal_4_1_6_cantidad, setMsg_literal_4_1_6_cantidad] = useState(" ");
    // SECCIÓN 4.1.7
    const [msg_literal_4_1_7, setMsg_literal_4_1_7] = useState(" ");
    const [msg_literal_4_1_7_cantidad, setMsg_literal_4_1_7_cantidad] = useState(" ");
    // SECCIÓN 4.1.8
    const [msg_literal_4_1_8, setMsg_literal_4_1_8] = useState(" ");
    const [msg_literal_4_1_8_bebidas, setMsg_literal_4_1_8_bebidas] = useState(" ");
    const [msg_literal_4_1_8_frecuencia, setMsg_literal_4_1_8_frecuencia] = useState(" ");
    const [msg_literal_4_1_8_veces_mes, setMsg_literal_4_1_8_veces_mes] = useState(" ");
    const [msg_literal_4_1_8_veces_semana, setMsg_literal_4_1_8_veces_semana] = useState(" ");
    // SECCIÓN 4.1.9 ñaqui
    const [msg_literal_4_1_9, setMsg_literal_4_1_9] = useState(" ");
    const [msg_literal_4_1_9_alcoholismo, setMsg_literal_4_1_9_alcoholismo] = useState(" ");
    const [msg_literal_4_1_9_fecha_alcoholismo, setMsg_literal_4_1_9_fecha_alcoholismo] = useState(" ");
    const [msg_literal_4_1_9_drogadiccion, setMsg_literal_4_1_9_drogadiccion] = useState(" ");
    const [msg_literal_4_1_9_tipo_drogadiccion, setMsg_literal_4_1_9_tipo_drogadiccion] = useState(" ");
    const [msg_literal_4_1_9_fecha_drogadiccion, setMsg_literal_4_1_9_fecha_drogadiccion] = useState(" ");
    // SECCIÓN 4.1.10
    const [msg_literal_4_1_10_sangre_fecha, setMsg_literal_4_1_10_sangre_fecha] = useState(" ");
    const [msg_literal_4_1_10_sangre_resultado_detalle_enfermedad, setMsg_literal_4_1_10_sangre_resultado_detalle_enfermedad] = useState(" ");
    const [msg_literal_4_1_10_sangre_resultado_detalle_otros, setMsg_literal_4_1_10_sangre_resultado_detalle_otros] = useState(" ");
    const [msg_literal_4_1_10_sangre_motivo_detalle_otros, setMsg_literal_4_1_10_sangre_motivo_detalle_otros] = useState(" ");
    const [msg_literal_4_1_10_orina_fecha, setMsg_literal_4_1_10_orina_fecha] = useState(" ");
    const [msg_literal_4_1_10_orina_resultado_detalle_enfermedad, setMsg_literal_4_1_10_orina_resultado_detalle_enfermedad] = useState(" ");
    const [msg_literal_4_1_10_orina_resultado_detalle_otros, setMsg_literal_4_1_10_orina_resultado_detalle_otros] = useState(" ");
    const [msg_literal_4_1_10_orina_motivo_detalle_otros, setMsg_literal_4_1_10_orina_motivo_detalle_otros] = useState(" ");
    const [msg_literal_4_1_10_electrocardiograma_fecha, setMsg_literal_4_1_10_electrocardiograma_fecha] = useState(" ");
    const [msg_literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad, setMsg_literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad] = useState(" ");
    const [msg_literal_4_1_10_electrocardiograma_resultado_detalle_otros, setMsg_literal_4_1_10_electrocardiograma_resultado_detalle_otros] = useState(" ");
    const [msg_literal_4_1_10_electrocardiograma_motivo_detalle_otros, setMsg_literal_4_1_10_electrocardiograma_motivo_detalle_otros] = useState(" ");
    const [msg_literal_4_1_10_rayosx_fecha, setMsg_literal_4_1_10_rayosx_fecha] = useState(" ");
    const [msg_literal_4_1_10_rayosx_resultado_detalle_enfermedad, setMsg_literal_4_1_10_rayosx_resultado_detalle_enfermedad] = useState(" ");
    const [msg_literal_4_1_10_rayosx_resultado_detalle_otros, setMsg_literal_4_1_10_rayosx_resultado_detalle_otros] = useState(" ");
    const [msg_literal_4_1_10_rayosx_motivo_detalle_otros, setMsg_literal_4_1_10_rayosx_motivo_detalle_otros] = useState(" ");
    const [msg_literal_4_1_10_otros_detalle_otros, setMsg_literal_4_1_10_otros_detalle_otros] = useState(" ");
    // SECCIÓN 4.1.11
    const [msg_literal_4_1_11_diagnostico, setMsg_literal_4_1_11_diagnostico] = useState(" ");
    const [msg_literal_4_1_11_fecha, setMsg_literal_4_1_11_fecha] = useState(" ");
    // SECCIÓN 4.1.12
    const [msg_literal_4_1_12_detallar, setMsg_literal_4_1_12_detallar] = useState(" ");
    const [msg_literal_4_1_12_fecha, setMsg_literal_4_1_12_fecha] = useState(" ");
    // SECCIÓN 4.1.13
    const [msg_literal_4_1_13_especifique, setMsg_literal_4_1_13_especifique] = useState(" ");
    const [msg_literal_4_1_13_fecha, setMsg_literal_4_1_13_fecha] = useState(" ");
    // SECCIÓN 4.1.14
    const [msg_literal_4_1_14_indicar, setMsg_literal_4_1_14_indicar] = useState(" ");
    const [msg_literal_4_1_14_fecha, setMsg_literal_4_1_14_fecha] = useState(" ");
    // SECCIÓN 4.1.15
    const [msg_literal_4_1_15_especifique, setMsg_literal_4_1_15_especifique] = useState(" ");
    const [msg_literal_4_1_15_fecha, setMsg_literal_4_1_15_fecha] = useState(" ");

    /*************** APARTADO 4.2 ***************/
    // SECCIÓN 4.2.1
    const [msg_literal_4_2_1_vertigos_fecha, setMsg_literal_4_2_1_vertigos_fecha] = useState(" ");
    const [msg_literal_4_2_1_vertigos_tratamiento, setMsg_literal_4_2_1_vertigos_tratamiento] = useState(" ");
    const [msg_literal_4_2_1_convulsiones_fecha, setMsg_literal_4_2_1_convulsiones_fecha] = useState(" ");
    const [msg_literal_4_2_1_convulsiones_tratamiento, setMsg_literal_4_2_1_convulsiones_tratamiento] = useState(" ");
    const [msg_literal_4_2_1_epilepsia_fecha, setMsg_literal_4_2_1_epilepsia_fecha] = useState(" ");
    const [msg_literal_4_2_1_epilepsia_tratamiento, setMsg_literal_4_2_1_epilepsia_tratamiento] = useState(" ");
    const [msg_literal_4_2_1_paralisis_fecha, setMsg_literal_4_2_1_paralisis_fecha] = useState(" ");
    const [msg_literal_4_2_1_paralisis_tratamiento, setMsg_literal_4_2_1_paralisis_tratamiento] = useState(" ");
    const [msg_literal_4_2_1_enfermedades_mentales_fecha, setMsg_literal_4_2_1_enfermedades_mentales_fecha] = useState(" ");
    const [msg_literal_4_2_1_enfermedades_mentales_tratamiento, setMsg_literal_4_2_1_enfermedades_mentales_tratamiento] = useState(" ");
    const [msg_literal_4_2_1_dolores_cabeza_fecha, setMsg_literal_4_2_1_dolores_cabeza_fecha] = useState(" ");
    const [msg_literal_4_2_1_dolores_cabeza_tratamiento, setMsg_literal_4_2_1_dolores_cabeza_tratamiento] = useState(" ");
    const [msg_literal_4_2_1_jaquecas_fecha, setMsg_literal_4_2_1_jaquecas_fecha] = useState(" ");
    const [msg_literal_4_2_1_jaquecas_tratamiento, setMsg_literal_4_2_1_jaquecas_tratamiento] = useState(" ");
    // SECCIÓN 4.2.2
    const [msg_literal_4_2_2_tos_cronica_fecha, setMsg_literal_4_2_2_tos_cronica_fecha] = useState(" ");
    const [msg_literal_4_2_2_tos_cronica_tratamiento, setMsg_literal_4_2_2_tos_cronica_tratamiento] = useState(" ");
    const [msg_literal_4_2_2_enfisema_fecha, setMsg_literal_4_2_2_enfisema_fecha] = useState(" ");
    const [msg_literal_4_2_2_enfisema_tratamiento, setMsg_literal_4_2_2_enfisema_tratamiento] = useState(" ");
    const [msg_literal_4_2_2_cansancio_caminar_fecha, setMsg_literal_4_2_2_cansancio_caminar_fecha] = useState(" ");
    const [msg_literal_4_2_2_cansancio_caminar_tratamiento, setMsg_literal_4_2_2_cansancio_caminar_tratamiento] = useState(" ");
    const [msg_literal_4_2_2_pulmones_fecha, setMsg_literal_4_2_2_pulmones_fecha] = useState(" ");
    const [msg_literal_4_2_2_pulmones_tratamiento, setMsg_literal_4_2_2_pulmones_tratamiento] = useState(" ");
    // SECCIÓN 4.2.3
    const [msg_literal_4_2_3_presion_alta_fecha, setMsg_literal_4_2_3_presion_alta_fecha] = useState(" ");
    const [msg_literal_4_2_3_presion_alta_tratamiento, setMsg_literal_4_2_3_presion_alta_tratamiento] = useState(" ");
    const [msg_literal_4_2_3_soplos_corazon_fecha, setMsg_literal_4_2_3_soplos_corazon_fecha] = useState(" ");
    const [msg_literal_4_2_3_soplos_corazon_tratamiento, setMsg_literal_4_2_3_soplos_corazon_tratamiento] = useState(" ");
    const [msg_literal_4_2_3_arritmias_fecha, setMsg_literal_4_2_3_arritmias_fecha] = useState(" ");
    const [msg_literal_4_2_3_arritmias_tratamiento, setMsg_literal_4_2_3_arritmias_tratamiento] = useState(" ");
    const [msg_literal_4_2_3_enfermedad_corazon_fecha, setMsg_literal_4_2_3_enfermedad_corazon_fecha] = useState(" ");
    const [msg_literal_4_2_3_enfermedad_corazon_tratamiento, setMsg_literal_4_2_3_enfermedad_corazon_tratamiento] = useState(" ");
    // SECCIÓN 4.2.4
    const [msg_literal_4_2_4_calculo_rinion_fecha, setMsg_literal_4_2_4_calculo_rinion_fecha] = useState(" ");
    const [msg_literal_4_2_4_calculo_rinion_tratamiento, setMsg_literal_4_2_4_calculo_rinion_tratamiento] = useState(" ");
    const [msg_literal_4_2_4_calculo_prostata_fecha, setMsg_literal_4_2_4_calculo_prostata_fecha] = useState(" ");
    const [msg_literal_4_2_4_calculo_prostata_tratamiento, setMsg_literal_4_2_4_calculo_prostata_tratamiento] = useState(" ");
    const [msg_literal_4_2_4_calculo_urinarias_fecha, setMsg_literal_4_2_4_calculo_urinarias_fecha] = useState(" ");
    const [msg_literal_4_2_4_calculo_urinarias_tratamiento, setMsg_literal_4_2_4_calculo_urinarias_tratamiento] = useState(" ");
    const [msg_literal_4_2_4_enfermedad_vejiga_fecha, setMsg_literal_4_2_4_enfermedad_vejiga_fecha] = useState(" ");
    const [msg_literal_4_2_4_enfermedad_vejiga_tratamiento, setMsg_literal_4_2_4_enfermedad_vejiga_tratamiento] = useState(" ");
    // SECCIÓN 4.2.5
    const [msg_literal_4_2_5_artritis_fecha, setMsg_literal_4_2_5_artritis_fecha] = useState(" ");
    const [msg_literal_4_2_5_artritis_tratamiento, setMsg_literal_4_2_5_artritis_tratamiento] = useState(" ");
    const [msg_literal_4_2_5_reumatismo_fecha, setMsg_literal_4_2_5_reumatismo_fecha] = useState(" ");
    const [msg_literal_4_2_5_reumatismo_tratamiento, setMsg_literal_4_2_5_reumatismo_tratamiento] = useState(" ");
    const [msg_literal_4_2_5_columna_fecha, setMsg_literal_4_2_5_columna_fecha] = useState(" ");
    const [msg_literal_4_2_5_columna_tratamiento, setMsg_literal_4_2_5_columna_tratamiento] = useState(" ");
    const [msg_literal_4_2_5_huesos_fecha, setMsg_literal_4_2_5_huesos_fecha] = useState(" ");
    const [msg_literal_4_2_5_huesos_tratamiento, setMsg_literal_4_2_5_huesos_tratamiento] = useState(" ");
    const [msg_literal_4_2_5_musculos_fecha, setMsg_literal_4_2_5_musculos_fecha] = useState(" ");
    const [msg_literal_4_2_5_musculos_tratamiento, setMsg_literal_4_2_5_musculos_tratamiento] = useState(" ");
    const [msg_literal_4_2_5_extremidades_fecha, setMsg_literal_4_2_5_extremidades_fecha] = useState(" ");
    const [msg_literal_4_2_5_extremidades_tratamiento, setMsg_literal_4_2_5_extremidades_tratamiento] = useState(" ");
    const [msg_literal_4_2_5_articulaciones_fecha, setMsg_literal_4_2_5_articulaciones_fecha] = useState(" ");
    const [msg_literal_4_2_5_articulaciones_tratamiento, setMsg_literal_4_2_5_articulaciones_tratamiento] = useState(" ");
    // SECCIÓN 4.2.6
    const [msg_literal_4_2_6_hemofilia_fecha, setMsg_literal_4_2_6_hemofilia_fecha] = useState(" ");
    const [msg_literal_4_2_6_hemofilia_tratamiento, setMsg_literal_4_2_6_hemofilia_tratamiento] = useState(" ");
    const [msg_literal_4_2_6_alteraciones_coagulacion_fecha, setMsg_literal_4_2_6_alteraciones_coagulacion_fecha] = useState(" ");
    const [msg_literal_4_2_6_alteraciones_coagulacion_tratamiento, setMsg_literal_4_2_6_alteraciones_coagulacion_tratamiento] = useState(" ");
    const [msg_literal_4_2_6_hemorragias_persistentes_fecha, setMsg_literal_4_2_6_hemorragias_persistentes_fecha] = useState(" ");
    const [msg_literal_4_2_6_hemorragias_persistentes_tratamiento, setMsg_literal_4_2_6_hemorragias_persistentes_tratamiento] = useState(" ");
    const [msg_literal_4_2_6_enfermedad_sangre_fecha, setMsg_literal_4_2_6_enfermedad_sangre_fecha] = useState(" ");
    const [msg_literal_4_2_6_enfermedad_sangre_tratamiento, setMsg_literal_4_2_6_enfermedad_sangre_tratamiento] = useState(" ");
    // SECCIÓN 4.2.7
    const [msg_literal_4_2_7_bocio_fecha, setMsg_literal_4_2_7_bocio_fecha] = useState(" ");
    const [msg_literal_4_2_7_bocio_tratamiento, setMsg_literal_4_2_7_bocio_tratamiento] = useState(" ");
    const [msg_literal_4_2_7_colesterol_elevado_fecha, setMsg_literal_4_2_7_colesterol_elevado_fecha] = useState(" ");
    const [msg_literal_4_2_7_colesterol_elevado_tratamiento, setMsg_literal_4_2_7_colesterol_elevado_tratamiento] = useState(" ");
    const [msg_literal_4_2_7_enfermedad_glandulas_fecha, setMsg_literal_4_2_7_enfermedad_glandulas_fecha] = useState(" ");
    const [msg_literal_4_2_7_enfermedad_glandulas_tratamiento, setMsg_literal_4_2_7_enfermedad_glandulas_tratamiento] = useState(" ");
    // SECCIÓN 4.2.8
    const [msg_literal_4_2_8_cancer_fecha, setMsg_literal_4_2_8_cancer_fecha] = useState(" ");
    const [msg_literal_4_2_8_cancer_tratamiento, setMsg_literal_4_2_8_cancer_tratamiento] = useState(" ");
    const [msg_literal_4_2_8_quistes_fecha, setMsg_literal_4_2_8_quistes_fecha] = useState(" ");
    const [msg_literal_4_2_8_quistes_tratamiento, setMsg_literal_4_2_8_quistes_tratamiento] = useState(" ");
    const [msg_literal_4_2_8_ulceras_fecha, setMsg_literal_4_2_8_ulceras_fecha] = useState(" ");
    const [msg_literal_4_2_8_ulceras_tratamiento, setMsg_literal_4_2_8_ulceras_tratamiento] = useState(" ");
    const [msg_literal_4_2_8_hernias_fecha, setMsg_literal_4_2_8_hernias_fecha] = useState(" ");
    const [msg_literal_4_2_8_hernias_tratamiento, setMsg_literal_4_2_8_hernias_tratamiento] = useState(" ");
    // SECCIÓN 4.2.10
    const [msg_literal_4_2_10_fecha, setMsg_literal_4_2_10_fecha] = useState(" ");
    const [msg_literal_4_2_10_resultado, setMsg_literal_4_2_10_resultado] = useState(" ");

    /*************** APARTADO 4.3 ***************/
    const [msg_literal_4_3_constitucion_fecha, setMsg_literal_4_3_constitucion_fecha] = useState(" ");
    const [msg_literal_4_3_constitucion_tratamiento, setMsg_literal_4_3_constitucion_tratamiento] = useState(" ");
    const [msg_literal_4_3_deformacion_fecha, setMsg_literal_4_3_deformacion_fecha] = useState(" ");
    const [msg_literal_4_3_deformacion_tratamiento, setMsg_literal_4_3_deformacion_tratamiento] = useState(" ");
    const [msg_literal_4_3_amputacion_fecha, setMsg_literal_4_3_amputacion_fecha] = useState(" ");
    const [msg_literal_4_3_amputacion_tratamiento, setMsg_literal_4_3_amputacion_tratamiento] = useState(" ");
    const [msg_literal_4_3_defecto_fisico_fecha, setMsg_literal_4_3_defecto_fisico_fecha] = useState(" ");
    const [msg_literal_4_3_defecto_fisico_tratamiento, setMsg_literal_4_3_defecto_fisico_tratamiento] = useState(" ");

    /*************** APARTADO 4.4 ***************/
    const [msg_literal_4_4_enfermedad_fecha, setMsg_literal_4_4_enfermedad_fecha] = useState(" ");
    const [msg_literal_4_4_enfermedad_tratamiento, setMsg_literal_4_4_enfermedad_tratamiento] = useState(" ");
    const [msg_literal_4_4_lesion_fecha, setMsg_literal_4_4_lesion_fecha] = useState(" ");
    const [msg_literal_4_4_lesion_tratamiento, setMsg_literal_4_4_lesion_tratamiento] = useState(" ");

    /*************** APARTADO 4.5 ***************/
    // SECCIÓN 4.5.1
    const [msg_literal_4_5_1_meses_embarazo, setMsg_literal_4_5_1_meses_embarazo] = useState(" ");
    const [msg_literal_4_5_1_riesgos_embarazo, setMsg_literal_4_5_1_riesgos_embarazo] = useState(" ");
    // SECCIÓN 4.5.2
    const [msg_literal_4_5_2_ultimo_parto_fecha, setMsg_literal_4_5_2_ultimo_parto_fecha] = useState(" ");
    const [msg_literal_4_5_2_ultima_cesarea_fecha, setMsg_literal_4_5_2_ultima_cesarea_fecha] = useState(" ");
    // SECCIÓN 4.5.3
    const [msg_literal_4_5_3_fecha, setMsg_literal_4_5_3_fecha] = useState(" ");
    const [msg_literal_4_5_3_resultados, setMsg_literal_4_5_3_resultados] = useState(" ");
    const [msg_literal_4_5_3_resultados_otros_especifique, setMsg_literal_4_5_3_resultados_otros_especifique] = useState(" ");

    {/* Colores */ }
    /*************** APARTADO 4.1 ***************/
    // SECCIÓN 4.1.1
    const [color_literal_4_1_1_compania, setColor_literal_4_1_1_compania] = useState("indigo");
    const [color_literal_4_1_1_tiempo_servicio, setColor_literal_4_1_1_tiempo_servicio] = useState("indigo");
    // SECCIÓN 4.1.2
    const [color_literal_4_1_2_motivo_exclusion, setColor_literal_4_1_2_motivo_exclusion] = useState("indigo");
    const [color_literal_4_1_2_detallar_enfermedad, setColor_literal_4_1_2_detallar_enfermedad] = useState("indigo");
    const [color_literal_4_1_2_detallar_exclusion, setColor_literal_4_1_2_detallar_exclusion] = useState("indigo");
    // SECCIÓN 4.1.3
    const [color_literal_4_1_3_deporte, setColor_literal_4_1_3_deporte] = useState("indigo");
    // SECCIÓN 4.1.4
    const [color_literal_4_1_4_estatura, setColor_literal_4_1_4_estatura] = useState("indigo");
    const [color_literal_4_1_4_peso, setColor_literal_4_1_4_peso] = useState("indigo");
    // SECCIÓN 4.1.8
    const [color_literal_4_1_8_veces_mes, setColor_literal_4_1_8_veces_mes] = useState("indigo");
    const [color_literal_4_1_8_veces_semana, setColor_literal_4_1_8_veces_semana] = useState("indigo");
    // SECCIÓN 4.1.9
    const [color_literal_4_1_9_fecha_alcoholismo, setColor_literal_4_1_9_fecha_alcoholismo] = useState("indigo");
    const [color_literal_4_1_9_tipo_drogadiccion, setColor_literal_4_1_9_tipo_drogadiccion] = useState("indigo");
    const [color_literal_4_1_9_fecha_drogadiccion, setColor_literal_4_1_9_fecha_drogadiccion] = useState("indigo");
    // SECCIÓN 4.1.10
    const [color_literal_4_1_10_sangre_fecha, setColor_literal_4_1_10_sangre_fecha] = useState("indigo");
    const [color_literal_4_1_10_sangre_resultado_detalle_enfermedad, setColor_literal_4_1_10_sangre_resultado_detalle_enfermedad] = useState("indigo");
    const [color_literal_4_1_10_sangre_resultado_detalle_otros, setColor_literal_4_1_10_sangre_resultado_detalle_otros] = useState("indigo");
    const [color_literal_4_1_10_sangre_motivo_detalle_otros, setColor_literal_4_1_10_sangre_motivo_detalle_otros] = useState("indigo");
    const [color_literal_4_1_10_orina_fecha, setColor_literal_4_1_10_orina_fecha] = useState("indigo");
    const [color_literal_4_1_10_orina_resultado_detalle_enfermedad, setColor_literal_4_1_10_orina_resultado_detalle_enfermedad] = useState("indigo");
    const [color_literal_4_1_10_orina_resultado_detalle_otros, setColor_literal_4_1_10_orina_resultado_detalle_otros] = useState("indigo");
    const [color_literal_4_1_10_orina_motivo_detalle_otros, setColor_literal_4_1_10_orina_motivo_detalle_otros] = useState("indigo");
    const [color_literal_4_1_10_electrocardiograma_fecha, setColor_literal_4_1_10_electrocardiograma_fecha] = useState("indigo");
    const [color_literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad, setColor_literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad] = useState("indigo");
    const [color_literal_4_1_10_electrocardiograma_resultado_detalle_otros, setColor_literal_4_1_10_electrocardiograma_resultado_detalle_otros] = useState("indigo");
    const [color_literal_4_1_10_electrocardiograma_motivo_detalle_otros, setColor_literal_4_1_10_electrocardiograma_motivo_detalle_otros] = useState("indigo");
    const [color_literal_4_1_10_rayosx_fecha, setColor_literal_4_1_10_rayosx_fecha] = useState("indigo");
    const [color_literal_4_1_10_rayosx_resultado_detalle_enfermedad, setColor_literal_4_1_10_rayosx_resultado_detalle_enfermedad] = useState("indigo");
    const [color_literal_4_1_10_rayosx_resultado_detalle_otros, setColor_literal_4_1_10_rayosx_resultado_detalle_otros] = useState("indigo");
    const [color_literal_4_1_10_rayosx_motivo_detalle_otros, setColor_literal_4_1_10_rayosx_motivo_detalle_otros] = useState("indigo");
    const [color_literal_4_1_10_otros_detalle_otros, setColor_literal_4_1_10_otros_detalle_otros] = useState("indigo");
    // SECCIÓN 4.1.11
    const [color_literal_4_1_11_diagnostico, setColor_literal_4_1_11_diagnostico] = useState("indigo");
    const [color_literal_4_1_11_fecha, setColor_literal_4_1_11_fecha] = useState("indigo");
    // SECCIÓN 4.1.12
    const [color_literal_4_1_12_detallar, setColor_literal_4_1_12_detallar] = useState("indigo");
    const [color_literal_4_1_12_fecha, setColor_literal_4_1_12_fecha] = useState("indigo");
    // SECCIÓN 4.1.13
    const [color_literal_4_1_13_especifique, setColor_literal_4_1_13_especifique] = useState("indigo");
    const [color_literal_4_1_13_fecha, setColor_literal_4_1_13_fecha] = useState("indigo");
    // SECCIÓN 4.1.14
    const [color_literal_4_1_14_indicar, setColor_literal_4_1_14_indicar] = useState("indigo");
    const [color_literal_4_1_14_fecha, setColor_literal_4_1_14_fecha] = useState("indigo");
    // SECCIÓN 4.1.15
    const [color_literal_4_1_15_especifique, setColor_literal_4_1_15_especifique] = useState("indigo");
    const [color_literal_4_1_15_fecha, setColor_literal_4_1_15_fecha] = useState("indigo");

    /*************** APARTADO 4.2 ***************/
    // SECCIÓN 4.2.1
    const [color_literal_4_2_1_vertigos_fecha, setColor_literal_4_2_1_vertigos_fecha] = useState("indigo");
    const [color_literal_4_2_1_vertigos_tratamiento, setColor_literal_4_2_1_vertigos_tratamiento] = useState("indigo");
    const [color_literal_4_2_1_convulsiones_fecha, setColor_literal_4_2_1_convulsiones_fecha] = useState("indigo");
    const [color_literal_4_2_1_convulsiones_tratamiento, setColor_literal_4_2_1_convulsiones_tratamiento] = useState("indigo");
    const [color_literal_4_2_1_epilepsia_fecha, setColor_literal_4_2_1_epilepsia_fecha] = useState("indigo");
    const [color_literal_4_2_1_epilepsia_tratamiento, setColor_literal_4_2_1_epilepsia_tratamiento] = useState("indigo");
    const [color_literal_4_2_1_paralisis_fecha, setColor_literal_4_2_1_paralisis_fecha] = useState("indigo");
    const [color_literal_4_2_1_paralisis_tratamiento, setColor_literal_4_2_1_paralisis_tratamiento] = useState("indigo");
    const [color_literal_4_2_1_enfermedades_mentales_fecha, setColor_literal_4_2_1_enfermedades_mentales_fecha] = useState("indigo");
    const [color_literal_4_2_1_enfermedades_mentales_tratamiento, setColor_literal_4_2_1_enfermedades_mentales_tratamiento] = useState("indigo");
    const [color_literal_4_2_1_dolores_cabeza_fecha, setColor_literal_4_2_1_dolores_cabeza_fecha] = useState("indigo");
    const [color_literal_4_2_1_dolores_cabeza_tratamiento, setColor_literal_4_2_1_dolores_cabeza_tratamiento] = useState("indigo");
    const [color_literal_4_2_1_jaquecas_fecha, setColor_literal_4_2_1_jaquecas_fecha] = useState("indigo");
    const [color_literal_4_2_1_jaquecas_tratamiento, setColor_literal_4_2_1_jaquecas_tratamiento] = useState("indigo");
    // SECCIÓN 4.2.2
    const [color_literal_4_2_2_tos_cronica_fecha, setColor_literal_4_2_2_tos_cronica_fecha] = useState("indigo");
    const [color_literal_4_2_2_tos_cronica_tratamiento, setColor_literal_4_2_2_tos_cronica_tratamiento] = useState("indigo");
    const [color_literal_4_2_2_enfisema_fecha, setColor_literal_4_2_2_enfisema_fecha] = useState("indigo");
    const [color_literal_4_2_2_enfisema_tratamiento, setColor_literal_4_2_2_enfisema_tratamiento] = useState("indigo");
    const [color_literal_4_2_2_cansancio_caminar_fecha, setColor_literal_4_2_2_cansancio_caminar_fecha] = useState("indigo");
    const [color_literal_4_2_2_cansancio_caminar_tratamiento, setColor_literal_4_2_2_cansancio_caminar_tratamiento] = useState("indigo");
    const [color_literal_4_2_2_pulmones_fecha, setColor_literal_4_2_2_pulmones_fecha] = useState("indigo");
    const [color_literal_4_2_2_pulmones_tratamiento, setColor_literal_4_2_2_pulmones_tratamiento] = useState("indigo");
    // SECCIÓN 4.2.3
    const [color_literal_4_2_3_presion_alta_fecha, setColor_literal_4_2_3_presion_alta_fecha] = useState("indigo");
    const [color_literal_4_2_3_presion_alta_tratamiento, setColor_literal_4_2_3_presion_alta_tratamiento] = useState("indigo");
    const [color_literal_4_2_3_soplos_corazon_fecha, setColor_literal_4_2_3_soplos_corazon_fecha] = useState("indigo");
    const [color_literal_4_2_3_soplos_corazon_tratamiento, setColor_literal_4_2_3_soplos_corazon_tratamiento] = useState("indigo");
    const [color_literal_4_2_3_arritmias_fecha, setColor_literal_4_2_3_arritmias_fecha] = useState("indigo");
    const [color_literal_4_2_3_arritmias_tratamiento, setColor_literal_4_2_3_arritmias_tratamiento] = useState("indigo");
    const [color_literal_4_2_3_enfermedad_corazon_fecha, setColor_literal_4_2_3_enfermedad_corazon_fecha] = useState("indigo");
    const [color_literal_4_2_3_enfermedad_corazon_tratamiento, setColor_literal_4_2_3_enfermedad_corazon_tratamiento] = useState("indigo");
    // SECCIÓN 4.2.4
    const [color_literal_4_2_4_calculo_rinion_fecha, setColor_literal_4_2_4_calculo_rinion_fecha] = useState("indigo");
    const [color_literal_4_2_4_calculo_rinion_tratamiento, setColor_literal_4_2_4_calculo_rinion_tratamiento] = useState("indigo");
    const [color_literal_4_2_4_calculo_prostata_fecha, setColor_literal_4_2_4_calculo_prostata_fecha] = useState("indigo");
    const [color_literal_4_2_4_calculo_prostata_tratamiento, setColor_literal_4_2_4_calculo_prostata_tratamiento] = useState("indigo");
    const [color_literal_4_2_4_calculo_urinarias_fecha, setColor_literal_4_2_4_calculo_urinarias_fecha] = useState("indigo");
    const [color_literal_4_2_4_calculo_urinarias_tratamiento, setColor_literal_4_2_4_calculo_urinarias_tratamiento] = useState("indigo");
    const [color_literal_4_2_4_enfermedad_vejiga_fecha, setColor_literal_4_2_4_enfermedad_vejiga_fecha] = useState("indigo");
    const [color_literal_4_2_4_enfermedad_vejiga_tratamiento, setColor_literal_4_2_4_enfermedad_vejiga_tratamiento] = useState("indigo");
    // SECCIÓN 4.2.5
    const [color_literal_4_2_5_artritis_fecha, setColor_literal_4_2_5_artritis_fecha] = useState("indigo");
    const [color_literal_4_2_5_artritis_tratamiento, setColor_literal_4_2_5_artritis_tratamiento] = useState("indigo");
    const [color_literal_4_2_5_reumatismo_fecha, setColor_literal_4_2_5_reumatismo_fecha] = useState("indigo");
    const [color_literal_4_2_5_reumatismo_tratamiento, setColor_literal_4_2_5_reumatismo_tratamiento] = useState("indigo");
    const [color_literal_4_2_5_columna_fecha, setColor_literal_4_2_5_columna_fecha] = useState("indigo");
    const [color_literal_4_2_5_columna_tratamiento, setColor_literal_4_2_5_columna_tratamiento] = useState("indigo");
    const [color_literal_4_2_5_huesos_fecha, setColor_literal_4_2_5_huesos_fecha] = useState("indigo");
    const [color_literal_4_2_5_huesos_tratamiento, setColor_literal_4_2_5_huesos_tratamiento] = useState("indigo");
    const [color_literal_4_2_5_musculos_fecha, setColor_literal_4_2_5_musculos_fecha] = useState("indigo");
    const [color_literal_4_2_5_musculos_tratamiento, setColor_literal_4_2_5_musculos_tratamiento] = useState("indigo");
    const [color_literal_4_2_5_extremidades_fecha, setColor_literal_4_2_5_extremidades_fecha] = useState("indigo");
    const [color_literal_4_2_5_extremidades_tratamiento, setColor_literal_4_2_5_extremidades_tratamiento] = useState("indigo");
    const [color_literal_4_2_5_articulaciones_fecha, setColor_literal_4_2_5_articulaciones_fecha] = useState("indigo");
    const [color_literal_4_2_5_articulaciones_tratamiento, setColor_literal_4_2_5_articulaciones_tratamiento] = useState("indigo");
    // SECCIÓN 4.2.6
    const [color_literal_4_2_6_hemofilia_fecha, setColor_literal_4_2_6_hemofilia_fecha] = useState("indigo");
    const [color_literal_4_2_6_hemofilia_tratamiento, setColor_literal_4_2_6_hemofilia_tratamiento] = useState("indigo");
    const [color_literal_4_2_6_alteraciones_coagulacion_fecha, setColor_literal_4_2_6_alteraciones_coagulacion_fecha] = useState("indigo");
    const [color_literal_4_2_6_alteraciones_coagulacion_tratamiento, setColor_literal_4_2_6_alteraciones_coagulacion_tratamiento] = useState("indigo");
    const [color_literal_4_2_6_hemorragias_persistentes_fecha, setColor_literal_4_2_6_hemorragias_persistentes_fecha] = useState("indigo");
    const [color_literal_4_2_6_hemorragias_persistentes_tratamiento, setColor_literal_4_2_6_hemorragias_persistentes_tratamiento] = useState("indigo");
    const [color_literal_4_2_6_enfermedad_sangre_fecha, setColor_literal_4_2_6_enfermedad_sangre_fecha] = useState("indigo");
    const [color_literal_4_2_6_enfermedad_sangre_tratamiento, setColor_literal_4_2_6_enfermedad_sangre_tratamiento] = useState("indigo");
    // SECCIÓN 4.2.7
    const [color_literal_4_2_7_bocio_fecha, setColor_literal_4_2_7_bocio_fecha] = useState("indigo");
    const [color_literal_4_2_7_bocio_tratamiento, setColor_literal_4_2_7_bocio_tratamiento] = useState("indigo");
    const [color_literal_4_2_7_colesterol_elevado_fecha, setColor_literal_4_2_7_colesterol_elevado_fecha] = useState("indigo");
    const [color_literal_4_2_7_colesterol_elevado_tratamiento, setColor_literal_4_2_7_colesterol_elevado_tratamiento] = useState("indigo");
    const [color_literal_4_2_7_enfermedad_glandulas_fecha, setColor_literal_4_2_7_enfermedad_glandulas_fecha] = useState("indigo");
    const [color_literal_4_2_7_enfermedad_glandulas_tratamiento, setColor_literal_4_2_7_enfermedad_glandulas_tratamiento] = useState("indigo");
    // SECCIÓN 4.2.8
    const [color_literal_4_2_8_cancer_fecha, setColor_literal_4_2_8_cancer_fecha] = useState("indigo");
    const [color_literal_4_2_8_cancer_tratamiento, setColor_literal_4_2_8_cancer_tratamiento] = useState("indigo");
    const [color_literal_4_2_8_quistes_fecha, setColor_literal_4_2_8_quistes_fecha] = useState("indigo");
    const [color_literal_4_2_8_quistes_tratamiento, setColor_literal_4_2_8_quistes_tratamiento] = useState("indigo");
    const [color_literal_4_2_8_ulceras_fecha, setColor_literal_4_2_8_ulceras_fecha] = useState("indigo");
    const [color_literal_4_2_8_ulceras_tratamiento, setColor_literal_4_2_8_ulceras_tratamiento] = useState("indigo");
    const [color_literal_4_2_8_hernias_fecha, setColor_literal_4_2_8_hernias_fecha] = useState("indigo");
    const [color_literal_4_2_8_hernias_tratamiento, setColor_literal_4_2_8_hernias_tratamiento] = useState("indigo");
    // SECCIÓN 4.2.10
    const [color_literal_4_2_10_fecha, setColor_literal_4_2_10_fecha] = useState("indigo");
    const [color_literal_4_2_10_resultado, setColor_literal_4_2_10_resultado] = useState("indigo");

    /*************** APARTADO 4.3 ***************/
    const [color_literal_4_3_constitucion_fecha, setColor_literal_4_3_constitucion_fecha] = useState("indigo");
    const [color_literal_4_3_constitucion_tratamiento, setColor_literal_4_3_constitucion_tratamiento] = useState("indigo");
    const [color_literal_4_3_deformacion_fecha, setColor_literal_4_3_deformacion_fecha] = useState("indigo");
    const [color_literal_4_3_deformacion_tratamiento, setColor_literal_4_3_deformacion_tratamiento] = useState("indigo");
    const [color_literal_4_3_amputacion_fecha, setColor_literal_4_3_amputacion_fecha] = useState("indigo");
    const [color_literal_4_3_amputacion_tratamiento, setColor_literal_4_3_amputacion_tratamiento] = useState("indigo");
    const [color_literal_4_3_defecto_fisico_fecha, setColor_literal_4_3_defecto_fisico_fecha] = useState("indigo");
    const [color_literal_4_3_defecto_fisico_tratamiento, setColor_literal_4_3_defecto_fisico_tratamiento] = useState("indigo");

    /*************** APARTADO 4.4 ***************/
    const [color_literal_4_4_enfermedad_fecha, setColor_literal_4_4_enfermedad_fecha] = useState("indigo");
    const [color_literal_4_4_enfermedad_tratamiento, setColor_literal_4_4_enfermedad_tratamiento] = useState("indigo");
    const [color_literal_4_4_lesion_fecha, setColor_literal_4_4_lesion_fecha] = useState("indigo");
    const [color_literal_4_4_lesion_tratamiento, setColor_literal_4_4_lesion_tratamiento] = useState("indigo");

    /*************** APARTADO 4.5 ***************/
    // SECCIÓN 4.5.1
    const [color_literal_4_5_1_meses_embarazo, setColor_literal_4_5_1_meses_embarazo] = useState("indigo");
    const [color_literal_4_5_1_riesgos_embarazo, setColor_literal_4_5_1_riesgos_embarazo] = useState("indigo");
    // SECCIÓN 4.5.2
    const [color_literal_4_5_2_ultimo_parto_fecha, setColor_literal_4_5_2_ultimo_parto_fecha] = useState("indigo");
    const [color_literal_4_5_2_ultima_cesarea_fecha, setColor_literal_4_5_2_ultima_cesarea_fecha] = useState("indigo");
    // SECCIÓN 4.5.3
    const [color_literal_4_5_3_fecha, setColor_literal_4_5_3_fecha] = useState("indigo");
    const [color_literal_4_5_3_resultados, setColor_literal_4_5_3_resultados] = useState("indigo");
    const [color_literal_4_5_3_resultados_otros_especifique, setColor_literal_4_5_3_resultados_otros_especifique] = useState("indigo");

    // TODO FALTA ESTA VALIDACIÓN GENERAL
    //Función final que válida
    const listmsg = [msg_literal_4_1_1_compania];
    function validarCampos() {

         if (userData.hasOwnProperty('literal_4_1_1') && userData.hasOwnProperty('literal_4_1_2') && userData.hasOwnProperty('literal_4_1_3') &&
             validator.isEmpty(msg_literal_4_1_4_estatura) && validator.isEmpty(msg_literal_4_1_4_peso) && userData.hasOwnProperty('literal_4_1_5') &&
             userData.hasOwnProperty('literal_4_1_6') && userData.hasOwnProperty('literal_4_1_7') && userData.hasOwnProperty('literal_4_1_8') &&
            userData.hasOwnProperty('literal_4_1_9')) {
           /*************** APARTADO 4.1 ***************/
           // SECCIÓN 4.1.1
           if (userData.literal_4_1_1 === "Si" && !validator.isEmpty(msg_literal_4_1_1_compania)) return false;
            if (userData.literal_4_1_1 === "Si" && !validator.isEmpty(msg_literal_4_1_1_tiempo_servicio)) return false;
             // SECCIÓN 4.1.2
            if (userData.literal_4_1_2 === "Si" && !validator.isEmpty(msg_literal_4_1_2_motivo_exclusion)) return false;
           if (userData.literal_4_1_2_motivo_exclusion === "Enfermedad grave" && !validator.isEmpty(msg_literal_4_1_2_detallar_enfermedad)) return false;
            if (userData.literal_4_1_2_motivo_exclusion === "Exclusion" && !validator.isEmpty(msg_literal_4_1_2_detallar_exclusion)) return false;
           // SECCIÓN 4.1.3
           if ((userData.literal_4_1_3 === "Si" || userData.literal_4_1_3 === "Otros") && !validator.isEmpty(msg_literal_4_1_3_deporte)) return false;
         // SECCIÓN 4.1.6
            if (userData.literal_4_1_6 === "Si" && (!userData.hasOwnProperty('literal_4_1_6_tiempo') || userData.literal_4_1_6_tiempo === "")) return false;
            if (userData.literal_4_1_6 === "Si" && (!userData.hasOwnProperty('literal_4_1_6_cantidad') || userData.literal_4_1_6_cantidad === "")) return false;
            // SECCIÓN 4.1.7
            if (userData.literal_4_1_7 === "Si" && (!userData.hasOwnProperty('literal_4_1_7_cantidad') || userData.literal_4_1_7_cantidad === "")) return false;
            // SECCIÓN 4.1.8
            if (userData.literal_4_1_8 === "Si" && (!userData.hasOwnProperty('literal_4_1_8_bebidas') || userData.literal_4_1_8_bebidas === "")) return false;
            if (userData.literal_4_1_8_bebidas === "Frecuentemente" && (!userData.hasOwnProperty('literal_4_1_8_frecuencia') || userData.literal_4_1_8_frecuencia === "")) return false;
            if (userData.literal_4_1_8_frecuencia === "Mes" && !validator.isEmpty(msg_literal_4_1_8_veces_mes)) return false;
            if (userData.literal_4_1_8_frecuencia === "Semana" && !validator.isEmpty(msg_literal_4_1_8_veces_semana)) return false;
            // SECCIÓN 4.1.9 ñaqui
             if (userData.literal_4_1_9 === "Si" && !userData.hasOwnProperty('literal_4_1_9_alcoholismo') && !userData.hasOwnProperty('literal_4_1_9_drogadicción')) return false;
            if (userData.literal_4_1_9 === "Si" && userData.literal_4_1_9_alcoholismo === "false" && userData.literal_4_1_9_drogadiccion === "false") return false;
            if (userData.literal_4_1_9_alcoholismo === "true" && !validator.isEmpty(msg_literal_4_1_9_fecha_alcoholismo)) return false;

             return true;
         } else {
        //     /*************** APARTADO 4.1 ***************/
            // SECCIÓN 4.1.1
             if (!userData.hasOwnProperty('literal_4_1_1')) setMsg_literal_4_1_1("Seleccione");
            if (!validator.isEmpty(msg_literal_4_1_1_compania)) setMsg_literal_4_1_1_compania("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_4_1_1_tiempo_servicio)) setMsg_literal_4_1_1_tiempo_servicio("Campo inválido/vacío");
             // SECCIÓN 4.1.2
            if (!userData.hasOwnProperty('literal_4_1_2')) setMsg_literal_4_1_2("Seleccione");
            if (!validator.isEmpty(msg_literal_4_1_2_motivo_exclusion)) setMsg_literal_4_1_2_motivo_exclusion("Elija una opción válida");
            if (userData.literal_4_1_2_motivo_exclusion === "Enfermedad grave" && !validator.isEmpty(msg_literal_4_1_2_detallar_enfermedad)) setMsg_literal_4_1_2_detallar_enfermedad("Campo inválido/vacío");
            if (userData.literal_4_1_2_motivo_exclusion === "Exclusion" && !validator.isEmpty(msg_literal_4_1_2_detallar_exclusion)) setMsg_literal_4_1_2_detallar_exclusion("Campo inválido/vacío");
            // SECCIÓN 4.1.3
         if (!userData.hasOwnProperty('literal_4_1_3')) setMsg_literal_4_1_3("Seleccione");
             if (!validator.isEmpty(msg_literal_4_1_3_deporte)) setMsg_literal_4_1_3_deporte("Campo inválido/vacío");
         // SECCIÓN 4.1.4
            if (!validator.isEmpty(msg_literal_4_1_4_estatura)) setMsg_literal_4_1_4_estatura("Campo inválido/vacío");
            if (!validator.isEmpty(msg_literal_4_1_4_peso)) setMsg_literal_4_1_4_peso("Campo inválido/vacío");
            // SECCIÓN 4.1.5
             if (!userData.hasOwnProperty('literal_4_1_5')) setMsg_literal_4_1_5("Seleccione una respuesta");
            // SECCIÓN 4.1.6
            if (!userData.hasOwnProperty('literal_4_1_6')) setMsg_literal_4_1_6("Seleccione");
            if (!userData.hasOwnProperty('literal_4_1_6_tiempo')) setMsg_literal_4_1_6_tiempo("Seleccione una respuesta");
            if (!userData.hasOwnProperty('literal_4_1_6_cantidad')) setMsg_literal_4_1_6_cantidad("Seleccione una respuesta");
            // SECCIÓN 4.1.7
             if (!userData.hasOwnProperty('literal_4_1_7')) setMsg_literal_4_1_7("Seleccione");
             if (!userData.hasOwnProperty('literal_4_1_7_cantidad')) setMsg_literal_4_1_7_cantidad("Seleccione una respuesta");
            // SECCIÓN 4.1.8
            if (!userData.hasOwnProperty('literal_4_1_8')) setMsg_literal_4_1_8("Seleccione");
            if (!userData.hasOwnProperty('literal_4_1_8_bebidas')) setMsg_literal_4_1_8_bebidas("Seleccione una respuesta");
            if (!userData.hasOwnProperty('literal_4_1_8_frecuencia')) setMsg_literal_4_1_8_frecuencia("Seleccione una respuesta");
            if (!validator.isEmpty(msg_literal_4_1_8_veces_mes)) setMsg_literal_4_1_8_veces_mes("Elija una opción válida");
            if (!validator.isEmpty(msg_literal_4_1_8_veces_semana)) setMsg_literal_4_1_8_veces_semana("Elija una opción válida");
             // SECCIÓN 4.1.9 ñaqui
             if (!userData.hasOwnProperty('literal_4_1_9')) setMsg_literal_4_1_9("Seleccione");
             if (userData.hasOwnProperty('literal_4_1_9_alcoholismo')) setMsg_literal_4_1_9_alcoholismo("Seleccione al menos una respuesta");
            if (!validator.isEmpty(msg_literal_4_1_9_fecha_alcoholismo)) setMsg_literal_4_1_9_fecha_alcoholismo("Elija una opción válida");
          return false;
       }
    }

    /*function validarCampos() {
        return true;
    }*/
    /*************** APARTADO 4.1 ***************/
    // SECCIÓN 4.1.1
    function validar_literal_4_1_1_compania(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_1_compania(result.msg);
        setColor_literal_4_1_1_compania(result.color);
        set_literal_4_1_1_compania(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_1_tiempo_servicio(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_1_tiempo_servicio(result.msg);
        setColor_literal_4_1_1_tiempo_servicio(result.color);
        set_literal_4_1_1_tiempo_servicio(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.1.2
    function validar_literal_4_1_2_motivo_exclusion(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setMsg_literal_4_1_2_motivo_exclusion(result.msg);
        set_literal_4_1_2_motivo_exclusion(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_2_detallar_enfermedad(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_2_detallar_enfermedad(result.msg);
        setColor_literal_4_1_2_detallar_enfermedad(result.color);
        set_literal_4_1_2_detallar_enfermedad(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_2_detallar_exclusion(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_2_detallar_exclusion(result.msg);
        setColor_literal_4_1_2_detallar_exclusion(result.color);
        set_literal_4_1_2_detallar_exclusion(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.1.3
    function validar_literal_4_1_3_deporte(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_3_deporte(result.msg);
        setColor_literal_4_1_3_deporte(result.color);
        set_literal_4_1_3_deporte(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.1.4
    function validar_literal_4_1_4_estatura(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_4_estatura(result.msg);
        setColor_literal_4_1_4_estatura(result.color);
        set_literal_4_1_4_estatura(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_4_peso(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_4_peso(result.msg);
        setColor_literal_4_1_4_peso(result.color);
        set_literal_4_1_4_peso(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.1.8
    function validar_literal_4_1_8_veces_mes(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setMsg_literal_4_1_8_veces_mes(result.msg);
        set_literal_4_1_8_veces_mes(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_8_veces_semana(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setMsg_literal_4_1_8_veces_semana(result.msg);
        set_literal_4_1_8_veces_semana(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.1.9
    function validar_literal_4_1_9_fecha_alcoholismo(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_9_fecha_alcoholismo(result.msg);
        setColor_literal_4_1_9_fecha_alcoholismo(result.color);
        set_literal_4_1_9_fecha_alcoholismo(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_9_tipo_drogadiccion(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_9_tipo_drogadiccion(result.msg);
        setColor_literal_4_1_9_tipo_drogadiccion(result.color);
        set_literal_4_1_9_tipo_drogadiccion(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_9_fecha_drogadiccion(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_9_fecha_drogadiccion(result.msg);
        setColor_literal_4_1_9_fecha_drogadiccion(result.color);
        set_literal_4_1_9_fecha_drogadiccion(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.1.10
    function validar_literal_4_1_10_sangre_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_sangre_fecha(result.msg);
        setColor_literal_4_1_10_sangre_fecha(result.color);
        set_literal_4_1_10_sangre_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_sangre_resultado_detalle_enfermedad(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_sangre_resultado_detalle_enfermedad(result.msg);
        setColor_literal_4_1_10_sangre_resultado_detalle_enfermedad(result.color);
        set_literal_4_1_10_sangre_resultado_detalle_enfermedad(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_sangre_resultado_detalle_otros(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_sangre_resultado_detalle_otros(result.msg);
        setColor_literal_4_1_10_sangre_resultado_detalle_otros(result.color);
        set_literal_4_1_10_sangre_resultado_detalle_otros(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_sangre_motivo_detalle_otros(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_sangre_motivo_detalle_otros(result.msg);
        setColor_literal_4_1_10_sangre_motivo_detalle_otros(result.color);
        set_literal_4_1_10_sangre_motivo_detalle_otros(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_orina_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_orina_fecha(result.msg);
        setColor_literal_4_1_10_orina_fecha(result.color);
        set_literal_4_1_10_orina_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_orina_resultado_detalle_enfermedad(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_orina_resultado_detalle_enfermedad(result.msg);
        setColor_literal_4_1_10_orina_resultado_detalle_enfermedad(result.color);
        set_literal_4_1_10_orina_resultado_detalle_enfermedad(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_orina_resultado_detalle_otros(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_orina_resultado_detalle_otros(result.msg);
        setColor_literal_4_1_10_orina_resultado_detalle_otros(result.color);
        set_literal_4_1_10_orina_resultado_detalle_otros(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_orina_motivo_detalle_otros(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_orina_motivo_detalle_otros(result.msg);
        setColor_literal_4_1_10_orina_motivo_detalle_otros(result.color);
        set_literal_4_1_10_orina_motivo_detalle_otros(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_electrocardiograma_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_electrocardiograma_fecha(result.msg);
        setColor_literal_4_1_10_electrocardiograma_fecha(result.color);
        set_literal_4_1_10_electrocardiograma_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad(result.msg);
        setColor_literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad(result.color);
        set_literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_electrocardiograma_resultado_detalle_otros(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_electrocardiograma_resultado_detalle_otros(result.msg);
        setColor_literal_4_1_10_electrocardiograma_resultado_detalle_otros(result.color);
        set_literal_4_1_10_electrocardiograma_resultado_detalle_otros(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_electrocardiograma_motivo_detalle_otros(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_electrocardiograma_motivo_detalle_otros(result.msg);
        setColor_literal_4_1_10_electrocardiograma_motivo_detalle_otros(result.color);
        set_literal_4_1_10_electrocardiograma_motivo_detalle_otros(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_rayosx_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_rayosx_fecha(result.msg);
        setColor_literal_4_1_10_rayosx_fecha(result.color);
        set_literal_4_1_10_rayosx_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_rayosx_resultado_detalle_enfermedad(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_rayosx_resultado_detalle_enfermedad(result.msg);
        setColor_literal_4_1_10_rayosx_resultado_detalle_enfermedad(result.color);
        set_literal_4_1_10_rayosx_resultado_detalle_enfermedad(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_rayosx_resultado_detalle_otros(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_rayosx_resultado_detalle_otros(result.msg);
        setColor_literal_4_1_10_rayosx_resultado_detalle_otros(result.color);
        set_literal_4_1_10_rayosx_resultado_detalle_otros(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_rayosx_motivo_detalle_otros(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_rayosx_motivo_detalle_otros(result.msg);
        setColor_literal_4_1_10_rayosx_motivo_detalle_otros(result.color);
        set_literal_4_1_10_rayosx_motivo_detalle_otros(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_10_otros_detalle_otros(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_10_otros_detalle_otros(result.msg);
        setColor_literal_4_1_10_otros_detalle_otros(result.color);
        set_literal_4_1_10_otros_detalle_otros(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.1.11
    function validar_literal_4_1_11_diagnostico(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_11_diagnostico(result.msg);
        setColor_literal_4_1_11_diagnostico(result.color);
        set_literal_4_1_11_diagnostico(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_11_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_11_fecha(result.msg);
        setColor_literal_4_1_11_fecha(result.color);
        set_literal_4_1_11_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.1.12
    function validar_literal_4_1_12_detallar(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_12_detallar(result.msg);
        setColor_literal_4_1_12_detallar(result.color);
        set_literal_4_1_12_detallar(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_12_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_12_fecha(result.msg);
        setColor_literal_4_1_12_fecha(result.color);
        set_literal_4_1_12_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.1.13
    function validar_literal_4_1_13_especifique(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_13_especifique(result.msg);
        setColor_literal_4_1_13_especifique(result.color);
        set_literal_4_1_13_especifique(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_13_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_13_fecha(result.msg);
        setColor_literal_4_1_13_fecha(result.color);
        set_literal_4_1_13_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.1.14
    function validar_literal_4_1_14_indicar(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_14_indicar(result.msg);
        setColor_literal_4_1_14_indicar(result.color);
        set_literal_4_1_14_indicar(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_14_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_14_fecha(result.msg);
        setColor_literal_4_1_14_fecha(result.color);
        set_literal_4_1_14_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.1.15
    function validar_literal_4_1_15_especifique(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_15_especifique(result.msg);
        setColor_literal_4_1_15_especifique(result.color);
        set_literal_4_1_15_especifique(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_1_15_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_1_15_fecha(result.msg);
        setColor_literal_4_1_15_fecha(result.color);
        set_literal_4_1_15_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }

    /*************** APARTADO 4.2 ***************/
    // SECCIÓN 4.2.1
    function validar_literal_4_2_1_vertigos_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_vertigos_fecha(result.msg);
        setColor_literal_4_2_1_vertigos_fecha(result.color);
        set_literal_4_2_1_vertigos_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_1_vertigos_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_vertigos_tratamiento(result.msg);
        setColor_literal_4_2_1_vertigos_tratamiento(result.color);
        set_literal_4_2_1_vertigos_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_1_convulsiones_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_convulsiones_fecha(result.msg);
        setColor_literal_4_2_1_convulsiones_fecha(result.color);
        set_literal_4_2_1_convulsiones_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_1_convulsiones_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_convulsiones_tratamiento(result.msg);
        setColor_literal_4_2_1_convulsiones_tratamiento(result.color);
        set_literal_4_2_1_convulsiones_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_1_epilepsia_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_epilepsia_fecha(result.msg);
        setColor_literal_4_2_1_epilepsia_fecha(result.color);
        set_literal_4_2_1_epilepsia_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_1_epilepsia_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_epilepsia_tratamiento(result.msg);
        setColor_literal_4_2_1_epilepsia_tratamiento(result.color);
        set_literal_4_2_1_epilepsia_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_1_paralisis_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_paralisis_fecha(result.msg);
        setColor_literal_4_2_1_paralisis_fecha(result.color);
        set_literal_4_2_1_paralisis_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_1_paralisis_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_paralisis_tratamiento(result.msg);
        setColor_literal_4_2_1_paralisis_tratamiento(result.color);
        set_literal_4_2_1_paralisis_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_1_enfermedades_mentales_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_enfermedades_mentales_fecha(result.msg);
        setColor_literal_4_2_1_enfermedades_mentales_fecha(result.color);
        set_literal_4_2_1_enfermedades_mentales_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_1_enfermedades_mentales_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_enfermedades_mentales_tratamiento(result.msg);
        setColor_literal_4_2_1_enfermedades_mentales_tratamiento(result.color);
        set_literal_4_2_1_enfermedades_mentales_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_1_dolores_cabeza_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_dolores_cabeza_fecha(result.msg);
        setColor_literal_4_2_1_dolores_cabeza_fecha(result.color);
        set_literal_4_2_1_dolores_cabeza_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_1_dolores_cabeza_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_dolores_cabeza_tratamiento(result.msg);
        setColor_literal_4_2_1_dolores_cabeza_tratamiento(result.color);
        set_literal_4_2_1_dolores_cabeza_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_1_jaquecas_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_jaquecas_fecha(result.msg);
        setColor_literal_4_2_1_jaquecas_fecha(result.color);
        set_literal_4_2_1_jaquecas_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_1_jaquecas_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_1_jaquecas_tratamiento(result.msg);
        setColor_literal_4_2_1_jaquecas_tratamiento(result.color);
        set_literal_4_2_1_jaquecas_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.2.2
    function validar_literal_4_2_2_tos_cronica_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_2_tos_cronica_fecha(result.msg);
        setColor_literal_4_2_2_tos_cronica_fecha(result.color);
        set_literal_4_2_2_tos_cronica_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_2_tos_cronica_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_2_tos_cronica_tratamiento(result.msg);
        setColor_literal_4_2_2_tos_cronica_tratamiento(result.color);
        set_literal_4_2_2_tos_cronica_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_2_enfisema_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_2_enfisema_fecha(result.msg);
        setColor_literal_4_2_2_enfisema_fecha(result.color);
        set_literal_4_2_2_enfisema_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_2_enfisema_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_2_enfisema_tratamiento(result.msg);
        setColor_literal_4_2_2_enfisema_tratamiento(result.color);
        set_literal_4_2_2_enfisema_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_2_cansancio_caminar_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_2_cansancio_caminar_fecha(result.msg);
        setColor_literal_4_2_2_cansancio_caminar_fecha(result.color);
        set_literal_4_2_2_cansancio_caminar_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_2_cansancio_caminar_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_2_cansancio_caminar_tratamiento(result.msg);
        setColor_literal_4_2_2_cansancio_caminar_tratamiento(result.color);
        set_literal_4_2_2_cansancio_caminar_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_2_pulmones_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_2_pulmones_fecha(result.msg);
        setColor_literal_4_2_2_pulmones_fecha(result.color);
        set_literal_4_2_2_pulmones_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_2_pulmones_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_2_pulmones_tratamiento(result.msg);
        setColor_literal_4_2_2_pulmones_tratamiento(result.color);
        set_literal_4_2_2_pulmones_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.2.3
    function validar_literal_4_2_3_presion_alta_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_3_presion_alta_fecha(result.msg);
        setColor_literal_4_2_3_presion_alta_fecha(result.color);
        set_literal_4_2_3_presion_alta_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_3_presion_alta_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_3_presion_alta_tratamiento(result.msg);
        setColor_literal_4_2_3_presion_alta_tratamiento(result.color);
        set_literal_4_2_3_presion_alta_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_3_soplos_corazon_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_3_soplos_corazon_fecha(result.msg);
        setColor_literal_4_2_3_soplos_corazon_fecha(result.color);
        set_literal_4_2_3_soplos_corazon_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_3_soplos_corazon_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_3_soplos_corazon_tratamiento(result.msg);
        setColor_literal_4_2_3_soplos_corazon_tratamiento(result.color);
        set_literal_4_2_3_soplos_corazon_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_3_arritmias_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_3_arritmias_fecha(result.msg);
        setColor_literal_4_2_3_arritmias_fecha(result.color);
        set_literal_4_2_3_arritmias_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_3_arritmias_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_3_arritmias_tratamiento(result.msg);
        setColor_literal_4_2_3_arritmias_tratamiento(result.color);
        set_literal_4_2_3_arritmias_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_3_enfermedad_corazon_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_3_enfermedad_corazon_fecha(result.msg);
        setColor_literal_4_2_3_enfermedad_corazon_fecha(result.color);
        set_literal_4_2_3_enfermedad_corazon_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_3_enfermedad_corazon_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_3_enfermedad_corazon_tratamiento(result.msg);
        setColor_literal_4_2_3_enfermedad_corazon_tratamiento(result.color);
        set_literal_4_2_3_enfermedad_corazon_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.2.4
    function validar_literal_4_2_4_calculo_rinion_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_4_calculo_rinion_fecha(result.msg);
        setColor_literal_4_2_4_calculo_rinion_fecha(result.color);
        set_literal_4_2_4_calculo_rinion_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_4_calculo_rinion_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_4_calculo_rinion_tratamiento(result.msg);
        setColor_literal_4_2_4_calculo_rinion_tratamiento(result.color);
        set_literal_4_2_4_calculo_rinion_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_4_calculo_prostata_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_4_calculo_prostata_fecha(result.msg);
        setColor_literal_4_2_4_calculo_prostata_fecha(result.color);
        set_literal_4_2_4_calculo_prostata_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_4_calculo_prostata_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_4_calculo_prostata_tratamiento(result.msg);
        setColor_literal_4_2_4_calculo_prostata_tratamiento(result.color);
        set_literal_4_2_4_calculo_prostata_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_4_calculo_urinarias_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_4_calculo_urinarias_fecha(result.msg);
        setColor_literal_4_2_4_calculo_urinarias_fecha(result.color);
        set_literal_4_2_4_calculo_urinarias_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_4_calculo_urinarias_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_4_calculo_urinarias_tratamiento(result.msg);
        setColor_literal_4_2_4_calculo_urinarias_tratamiento(result.color);
        set_literal_4_2_4_calculo_urinarias_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_4_enfermedad_vejiga_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_4_enfermedad_vejiga_fecha(result.msg);
        setColor_literal_4_2_4_enfermedad_vejiga_fecha(result.color);
        set_literal_4_2_4_enfermedad_vejiga_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_4_enfermedad_vejiga_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_4_enfermedad_vejiga_tratamiento(result.msg);
        setColor_literal_4_2_4_enfermedad_vejiga_tratamiento(result.color);
        set_literal_4_2_4_enfermedad_vejiga_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.2.5
    function validar_literal_4_2_5_artritis_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_artritis_fecha(result.msg);
        setColor_literal_4_2_5_artritis_fecha(result.color);
        set_literal_4_2_5_artritis_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_5_artritis_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_artritis_tratamiento(result.msg);
        setColor_literal_4_2_5_artritis_tratamiento(result.color);
        set_literal_4_2_5_artritis_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_5_reumatismo_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_reumatismo_fecha(result.msg);
        setColor_literal_4_2_5_reumatismo_fecha(result.color);
        set_literal_4_2_5_reumatismo_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_5_reumatismo_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_reumatismo_tratamiento(result.msg);
        setColor_literal_4_2_5_reumatismo_tratamiento(result.color);
        set_literal_4_2_5_reumatismo_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_5_columna_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_columna_fecha(result.msg);
        setColor_literal_4_2_5_columna_fecha(result.color);
        set_literal_4_2_5_columna_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_5_columna_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_columna_tratamiento(result.msg);
        setColor_literal_4_2_5_columna_tratamiento(result.color);
        set_literal_4_2_5_columna_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_5_huesos_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_huesos_fecha(result.msg);
        setColor_literal_4_2_5_huesos_fecha(result.color);
        set_literal_4_2_5_huesos_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_5_huesos_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_huesos_tratamiento(result.msg);
        setColor_literal_4_2_5_huesos_tratamiento(result.color);
        set_literal_4_2_5_huesos_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_5_musculos_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_musculos_fecha(result.msg);
        setColor_literal_4_2_5_musculos_fecha(result.color);
        set_literal_4_2_5_musculos_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_5_musculos_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_musculos_tratamiento(result.msg);
        setColor_literal_4_2_5_musculos_tratamiento(result.color);
        set_literal_4_2_5_musculos_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_5_extremidades_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_extremidades_fecha(result.msg);
        setColor_literal_4_2_5_extremidades_fecha(result.color);
        set_literal_4_2_5_extremidades_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_5_extremidades_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_extremidades_tratamiento(result.msg);
        setColor_literal_4_2_5_extremidades_tratamiento(result.color);
        set_literal_4_2_5_extremidades_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_5_articulaciones_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_articulaciones_fecha(result.msg);
        setColor_literal_4_2_5_articulaciones_fecha(result.color);
        set_literal_4_2_5_articulaciones_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_5_articulaciones_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_5_articulaciones_tratamiento(result.msg);
        setColor_literal_4_2_5_articulaciones_tratamiento(result.color);
        set_literal_4_2_5_articulaciones_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.2.6
    function validar_literal_4_2_6_hemofilia_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_6_hemofilia_fecha(result.msg);
        setColor_literal_4_2_6_hemofilia_fecha(result.color);
        set_literal_4_2_6_hemofilia_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_6_hemofilia_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_6_hemofilia_tratamiento(result.msg);
        setColor_literal_4_2_6_hemofilia_tratamiento(result.color);
        set_literal_4_2_6_hemofilia_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_6_alteraciones_coagulacion_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_6_alteraciones_coagulacion_fecha(result.msg);
        setColor_literal_4_2_6_alteraciones_coagulacion_fecha(result.color);
        set_literal_4_2_6_alteraciones_coagulacion_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_6_alteraciones_coagulacion_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_6_alteraciones_coagulacion_tratamiento(result.msg);
        setColor_literal_4_2_6_alteraciones_coagulacion_tratamiento(result.color);
        set_literal_4_2_6_alteraciones_coagulacion_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_6_hemorragias_persistentes_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_6_hemorragias_persistentes_fecha(result.msg);
        setColor_literal_4_2_6_hemorragias_persistentes_fecha(result.color);
        set_literal_4_2_6_hemorragias_persistentes_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_6_hemorragias_persistentes_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_6_hemorragias_persistentes_tratamiento(result.msg);
        setColor_literal_4_2_6_hemorragias_persistentes_tratamiento(result.color);
        set_literal_4_2_6_hemorragias_persistentes_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_6_enfermedad_sangre_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_6_enfermedad_sangre_fecha(result.msg);
        setColor_literal_4_2_6_enfermedad_sangre_fecha(result.color);
        set_literal_4_2_6_enfermedad_sangre_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_6_enfermedad_sangre_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_6_enfermedad_sangre_tratamiento(result.msg);
        setColor_literal_4_2_6_enfermedad_sangre_tratamiento(result.color);
        set_literal_4_2_6_enfermedad_sangre_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.2.7
    function validar_literal_4_2_7_bocio_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_7_bocio_fecha(result.msg);
        setColor_literal_4_2_7_bocio_fecha(result.color);
        set_literal_4_2_7_bocio_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_7_bocio_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_7_bocio_tratamiento(result.msg);
        setColor_literal_4_2_7_bocio_tratamiento(result.color);
        set_literal_4_2_7_bocio_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_7_colesterol_elevado_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_7_colesterol_elevado_fecha(result.msg);
        setColor_literal_4_2_7_colesterol_elevado_fecha(result.color);
        set_literal_4_2_7_colesterol_elevado_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_7_colesterol_elevado_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_7_colesterol_elevado_tratamiento(result.msg);
        setColor_literal_4_2_7_colesterol_elevado_tratamiento(result.color);
        set_literal_4_2_7_colesterol_elevado_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_7_enfermedad_glandulas_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_7_enfermedad_glandulas_fecha(result.msg);
        setColor_literal_4_2_7_enfermedad_glandulas_fecha(result.color);
        set_literal_4_2_7_enfermedad_glandulas_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_7_enfermedad_glandulas_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_7_enfermedad_glandulas_tratamiento(result.msg);
        setColor_literal_4_2_7_enfermedad_glandulas_tratamiento(result.color);
        set_literal_4_2_7_enfermedad_glandulas_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.2.8
    function validar_literal_4_2_8_cancer_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_8_cancer_fecha(result.msg);
        setColor_literal_4_2_8_cancer_fecha(result.color);
        set_literal_4_2_8_cancer_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_8_cancer_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_8_cancer_tratamiento(result.msg);
        setColor_literal_4_2_8_cancer_tratamiento(result.color);
        set_literal_4_2_8_cancer_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_8_quistes_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_8_quistes_fecha(result.msg);
        setColor_literal_4_2_8_quistes_fecha(result.color);
        set_literal_4_2_8_quistes_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_8_quistes_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_8_quistes_tratamiento(result.msg);
        setColor_literal_4_2_8_quistes_tratamiento(result.color);
        set_literal_4_2_8_quistes_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_8_ulceras_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_8_ulceras_fecha(result.msg);
        setColor_literal_4_2_8_ulceras_fecha(result.color);
        set_literal_4_2_8_ulceras_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_8_ulceras_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_8_ulceras_tratamiento(result.msg);
        setColor_literal_4_2_8_ulceras_tratamiento(result.color);
        set_literal_4_2_8_ulceras_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_8_hernias_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_8_hernias_fecha(result.msg);
        setColor_literal_4_2_8_hernias_fecha(result.color);
        set_literal_4_2_8_hernias_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_8_hernias_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_8_hernias_tratamiento(result.msg);
        setColor_literal_4_2_8_hernias_tratamiento(result.color);
        set_literal_4_2_8_hernias_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.2.10
    function validar_literal_4_2_10_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_2_10_fecha(result.msg);
        setColor_literal_4_2_10_fecha(result.color);
        set_literal_4_2_10_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_2_10_resultado(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setMsg_literal_4_2_10_resultado(result.msg);
        setColor_literal_4_2_10_resultado(result.color);
        set_literal_4_2_10_resultado(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }

    /*************** APARTADO 4.3 ***************/
    function validar_literal_4_3_constitucion_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_3_constitucion_fecha(result.msg);
        setColor_literal_4_3_constitucion_fecha(result.color);
        set_literal_4_3_constitucion_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_3_constitucion_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_3_constitucion_tratamiento(result.msg);
        setColor_literal_4_3_constitucion_tratamiento(result.color);
        set_literal_4_3_constitucion_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_3_deformacion_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_3_deformacion_fecha(result.msg);
        setColor_literal_4_3_deformacion_fecha(result.color);
        set_literal_4_3_deformacion_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_3_deformacion_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_3_deformacion_tratamiento(result.msg);
        setColor_literal_4_3_deformacion_tratamiento(result.color);
        set_literal_4_3_deformacion_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_3_amputacion_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_3_amputacion_fecha(result.msg);
        setColor_literal_4_3_amputacion_fecha(result.color);
        set_literal_4_3_amputacion_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_3_amputacion_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_3_amputacion_tratamiento(result.msg);
        setColor_literal_4_3_amputacion_tratamiento(result.color);
        set_literal_4_3_amputacion_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_3_defecto_fisico_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_3_defecto_fisico_fecha(result.msg);
        setColor_literal_4_3_defecto_fisico_fecha(result.color);
        set_literal_4_3_defecto_fisico_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_3_defecto_fisico_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_3_defecto_fisico_tratamiento(result.msg);
        setColor_literal_4_3_defecto_fisico_tratamiento(result.color);
        set_literal_4_3_defecto_fisico_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }

    /*************** APARTADO 4.4 ***************/
    function validar_literal_4_4_enfermedad_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_4_enfermedad_fecha(result.msg);
        setColor_literal_4_4_enfermedad_fecha(result.color);
        set_literal_4_4_enfermedad_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_4_enfermedad_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_4_enfermedad_tratamiento(result.msg);
        setColor_literal_4_4_enfermedad_tratamiento(result.color);
        set_literal_4_4_enfermedad_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_4_lesion_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_4_lesion_fecha(result.msg);
        setColor_literal_4_4_lesion_fecha(result.color);
        set_literal_4_4_lesion_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_4_lesion_tratamiento(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_4_lesion_tratamiento(result.msg);
        setColor_literal_4_4_lesion_tratamiento(result.color);
        set_literal_4_4_lesion_tratamiento(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }

    /*************** APARTADO 4.5 ***************/
    // SECCIÓN 4.5.1
    function validar_literal_4_5_1_meses_embarazo(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarNumerosMax(entrada, 1, listmsg)
        setMsg_literal_4_5_1_meses_embarazo(result.msg);
        setColor_literal_4_5_1_meses_embarazo(result.color);
        set_literal_4_5_1_meses_embarazo(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_5_1_riesgos_embarazo(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setMsg_literal_4_5_1_riesgos_embarazo(result.msg);
        setColor_literal_4_5_1_riesgos_embarazo(result.color);
        set_literal_4_5_1_riesgos_embarazo(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.5.2
    function validar_literal_4_5_2_ultimo_parto_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_5_2_ultimo_parto_fecha(result.msg);
        setColor_literal_4_5_2_ultimo_parto_fecha(result.color);
        set_literal_4_5_2_ultimo_parto_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_5_2_ultima_cesarea_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_5_2_ultima_cesarea_fecha(result.msg);
        setColor_literal_4_5_2_ultima_cesarea_fecha(result.color);
        set_literal_4_5_2_ultima_cesarea_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    // SECCIÓN 4.5.3
    function validar_literal_4_5_3_fecha(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_5_3_fecha(result.msg);
        setColor_literal_4_5_3_fecha(result.color);
        set_literal_4_5_3_fecha(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_5_3_resultados(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarCombo(entrada, "-1", listmsg)
        setMsg_literal_4_5_3_resultados(result.msg);
        setColor_literal_4_5_3_resultados(result.color);
        set_literal_4_5_3_resultados(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }
    function validar_literal_4_5_3_resultados_otros_especifique(event) {
        const entrada = event.target.value;
        var result = objvalidar.validarVacio(entrada, listmsg)
        setMsg_literal_4_5_3_resultados_otros_especifique(result.msg);
        setColor_literal_4_5_3_resultados_otros_especifique(result.color);
        set_literal_4_5_3_resultados_otros_especifique(result.data);
        setValidacion(result.validacion);

        handleChange(event);
    }

    /************************************************************ CHECKBOXES ************************************************************/
    /*************** APARTADO 4.1 ***************/
    //LITERAL 4.1.9
    const [isChecked_Alcoholismo, setIsChecked_Alcoholismo] = useState(true);
    const [isChecked_Drogadiccion, setIsChecked_Drogadiccion] = useState(true);
    //LITERAL 4.1.10
    const [isChecked_Sangre, setIsChecked_Sangre] = useState(true);
    const [isChecked_Orina, setIsChecked_Orina] = useState(true);
    const [isChecked_Electrocardiograma, setIsChecked_Electrocardiograma] = useState(true);
    const [isChecked_RayosX, setIsChecked_RayosX] = useState(true);
    const [isChecked_Otros, setIsChecked_Otros] = useState(true);

    /*************** APARTADO 4.2 ***************/
    //LITERAL 4.2.1
    const [isChecked_Vertigos, setIsChecked_Vertigos] = useState(true);
    const [isChecked_Convulsiones, setIsChecked_Convulsiones] = useState(true);
    const [isChecked_Epilepsia, setIsChecked_Epilepsia] = useState(true);
    const [isChecked_Paralisis, setIsChecked_Paralisis] = useState(true);
    const [isChecked_EnfermedadesMentales, setIsChecked_EnfermedadesMentales] = useState(true);
    const [isChecked_DoloresCabeza, setIsChecked_DoloresCabeza] = useState(true);
    const [isChecked_Jaquecas, setIsChecked_Jaquecas] = useState(true);
    //LITERAL 4.2.2
    const [isChecked_TosCronica, setIsChecked_TosCronica] = useState(true);
    const [isChecked_Enfisema, setIsChecked_Enfisema] = useState(true);
    const [isChecked_CansancioCaminar, setIsChecked_CansancioCaminar] = useState(true);
    const [isChecked_Pulmones, setIsChecked_Pulmones] = useState(true);
    //LITERAL 4.2.3
    const [isChecked_PresionAlta, setIsChecked_PresionAlta] = useState(true);
    const [isChecked_SoplosCorazon, setIsChecked_SoplosCorazon] = useState(true);
    const [isChecked_Arritmias, setIsChecked_Arritmias] = useState(true);
    const [isChecked_EnfermedadCorazon, setIsChecked_EnfermedadCorazon] = useState(true);
    //LITERAL 4.2.4
    const [isChecked_CalculoRinion, setIsChecked_CalculoRinion] = useState(true);
    const [isChecked_CalculoProstata, setIsChecked_CalculoProstata] = useState(true);
    const [isChecked_CalculoUrinarias, setIsChecked_CalculoUrinarias] = useState(true);
    const [isChecked_EnfermedadVejiga, setIsChecked_EnfermedadVejiga] = useState(true);
    //LITERAL 4.2.5
    const [isChecked_Artritis, setIsChecked_Artritis] = useState(true);
    const [isChecked_Reumatismo, setIsChecked_Reumatismo] = useState(true);
    const [isChecked_Columna, setIsChecked_Columna] = useState(true);
    const [isChecked_Huesos, setIsChecked_Huesos] = useState(true);
    const [isChecked_Musculos, setIsChecked_Musculos] = useState(true);
    const [isChecked_Extremidades, setIsChecked_Extremidades] = useState(true);
    const [isChecked_Articulaciones, setIsChecked_Articulaciones] = useState(true);
    //LITERAL 4.2.6
    const [isChecked_Hemofilia, setIsChecked_Hemofilia] = useState(true);
    const [isChecked_AlteracionesCoagulacion, setIsChecked_AlteracionesCoagulacion] = useState(true);
    const [isChecked_HemorragiasPersistentes, setIsChecked_HemorragiasPersistentes] = useState(true);
    const [isChecked_EnfermedadSangre, setIsChecked_EnfermedadSangre] = useState(true);
    //LITERAL 4.2.7
    const [isChecked_Bocio, setIsChecked_Bocio] = useState(true);
    const [isChecked_ColesterolElevado, setIsChecked_ColesterolElevado] = useState(true);
    const [isChecked_EnfermedadGlandulas, setIsChecked_EnfermedadGlandulas] = useState(true);
    //LITERAL 4.2.8
    const [isChecked_Cancer, setIsChecked_Cancer] = useState(true);
    const [isChecked_Quistes, setIsChecked_Quistes] = useState(true);
    const [isChecked_Ulceras, setIsChecked_Ulceras] = useState(true);
    const [isChecked_Hernias, setIsChecked_Hernias] = useState(true);

    /*************** APARTADO 4.3 ***************/
    const [isChecked_Constitucion, setIsChecked_Constitucion] = useState(true);
    const [isChecked_Deformacion, setIsChecked_Deformacion] = useState(true);
    const [isChecked_Amputacion, setIsChecked_Amputacion] = useState(true);
    const [isChecked_DefectoFisico, setIsChecked_DefectoFisico] = useState(true);

    /*************** APARTADO 4.4 ***************/
    const [isChecked_Enfermedad, setIsChecked_Enfermedad] = useState(true);
    const [isChecked_Lesion, setIsChecked_Lesion] = useState(true);

    /*************** APARTADO 4.4 ***************/
    //LITERAL 4.5.2
    const [isChecked_Partos, setIsChecked_Partos] = useState(true);
    const [isChecked_Cesareas, setIsChecked_Cesareas] = useState(true);

    //Solución temporal de los cambios de estados en los checkbox
    /*************** APARTADO 4.1 ***************/
    //LITERAL 4.1.9
    const handleAlcoholismo = (e) => {
        setIsChecked_Alcoholismo(!isChecked_Alcoholismo);
        habilitar_literal_4_1_9_alcoholismo(e);
    };
    const handleDrogadiccion = (e) => {
        setIsChecked_Drogadiccion(!isChecked_Drogadiccion);
        habilitar_literal_4_1_9_drogadiccion(e);
    };
    //LITERAL 4.1.10
    const handleSangre = (e) => {
        setIsChecked_Sangre(!isChecked_Sangre);
        habilitar_literal_4_1_10_sangre(e);
    };
    const handleOrina = (e) => {
        setIsChecked_Orina(!isChecked_Orina);
        habilitar_literal_4_1_10_orina(e);
    };
    const handleElectrocardiograma = (e) => {
        setIsChecked_Electrocardiograma(!isChecked_Electrocardiograma);
        habilitar_literal_4_1_10_electrocardiograma(e);
    };
    const handleRayosX = (e) => {
        setIsChecked_RayosX(!isChecked_RayosX);
        habilitar_literal_4_1_10_rayosx(e);
    };
    const handleOtros = (e) => {
        setIsChecked_Otros(!isChecked_Otros);
        habilitar_literal_4_1_10_otros(e);
    };

    /*************** APARTADO 4.2 ***************/
    //LITERAL 4.2.1
    const handleVertigos = (e) => {
        setIsChecked_Vertigos(!isChecked_Vertigos);
        habilitar_literal_4_2_1_vertigos(e);
    };
    const handleConvulsiones = (e) => {
        setIsChecked_Convulsiones(!isChecked_Convulsiones);
        habilitar_literal_4_2_1_convulsiones(e);
    };
    const handleEpilepsia = (e) => {
        setIsChecked_Epilepsia(!isChecked_Epilepsia);
        habilitar_literal_4_2_1_epilepsia(e);
    };
    const handleParalisis = (e) => {
        setIsChecked_Paralisis(!isChecked_Paralisis);
        habilitar_literal_4_2_1_paralisis(e);
    };
    const handleEnfermedadesMentales = (e) => {
        setIsChecked_EnfermedadesMentales(!isChecked_EnfermedadesMentales);
        habilitar_literal_4_2_1_enfermedades_mentales(e);
    };
    const handleDoloresCabeza = (e) => {
        setIsChecked_DoloresCabeza(!isChecked_DoloresCabeza);
        habilitar_literal_4_2_1_dolores_cabeza(e);
    };
    const handleJaquecas = (e) => {
        setIsChecked_Jaquecas(!isChecked_Jaquecas);
        habilitar_literal_4_2_1_jaquecas(e);
    };
    //LITERAL 4.2.2
    const handleTosCronica = (e) => {
        setIsChecked_TosCronica(!isChecked_TosCronica);
        habilitar_literal_4_2_2_tos_cronica(e);
    };
    const handleEnfisema = (e) => {
        setIsChecked_Enfisema(!isChecked_Enfisema);
        habilitar_literal_4_2_2_enfisema(e);
    };
    const handleCansancioCaminar = (e) => {
        setIsChecked_CansancioCaminar(!isChecked_CansancioCaminar);
        habilitar_literal_4_2_2_cansancio_caminar(e);
    };
    const handlePulmones = (e) => {
        setIsChecked_Pulmones(!isChecked_Pulmones);
        habilitar_literal_4_2_2_pulmones(e);
    };
    //LITERAL 4.2.3
    const handlePresionAlta = (e) => {
        setIsChecked_PresionAlta(!isChecked_PresionAlta);
        habilitar_literal_4_2_3_presion_alta(e);
    };
    const handleSoplosCorazon = (e) => {
        setIsChecked_SoplosCorazon(!isChecked_SoplosCorazon);
        habilitar_literal_4_2_3_soplos_corazon(e);
    };
    const handleArritmias = (e) => {
        setIsChecked_Arritmias(!isChecked_Arritmias);
        habilitar_literal_4_2_3_arritmias(e);
    };
    const handleEnfermedadCorazon = (e) => {
        setIsChecked_EnfermedadCorazon(!isChecked_EnfermedadCorazon);
        habilitar_literal_4_2_3_enfermedad_corazon(e);
    };
    //LITERAL 4.2.4
    const handleCalculoRinion = (e) => {
        setIsChecked_CalculoRinion(!isChecked_CalculoRinion);
        habilitar_literal_4_2_4_calculo_rinion(e);
    };
    const handleCalculoProstata = (e) => {
        setIsChecked_CalculoProstata(!isChecked_CalculoProstata);
        habilitar_literal_4_2_4_calculo_prostata(e);
    };
    const handleCalculoUrinarias = (e) => {
        setIsChecked_CalculoUrinarias(!isChecked_CalculoUrinarias);
        habilitar_literal_4_2_4_calculo_urinarias(e);
    };
    const handleEnfermedadVejiga = (e) => {
        setIsChecked_EnfermedadVejiga(!isChecked_EnfermedadVejiga);
        habilitar_literal_4_2_4_enfermedad_vejiga(e);
    };
    //LITERAL 4.2.5
    const handleArtritis = (e) => {
        setIsChecked_Artritis(!isChecked_Artritis);
        habilitar_literal_4_2_5_artritis(e);
    };
    const handleReumatismo = (e) => {
        setIsChecked_Reumatismo(!isChecked_Reumatismo);
        habilitar_literal_4_2_5_reumatismo(e);
    };
    const handleColumna = (e) => {
        setIsChecked_Columna(!isChecked_Columna);
        habilitar_literal_4_2_5_columna(e);
    };
    const handleHuesos = (e) => {
        setIsChecked_Huesos(!isChecked_Huesos);
        habilitar_literal_4_2_5_huesos(e);
    };
    const handleMusculos = (e) => {
        setIsChecked_Musculos(!isChecked_Musculos);
        habilitar_literal_4_2_5_musculos(e);
    };
    const handleExtremidades = (e) => {
        setIsChecked_Extremidades(!isChecked_Extremidades);
        habilitar_literal_4_2_5_extremidades(e);
    };
    const handleArticulaciones = (e) => {
        setIsChecked_Articulaciones(!isChecked_Articulaciones);
        habilitar_literal_4_2_5_articulaciones(e);
    };
    //LITERAL 4.2.6
    const handleHemofilia = (e) => {
        setIsChecked_Hemofilia(!isChecked_Hemofilia);
        habilitar_literal_4_2_6_hemofilia(e);
    };
    const handleAlteracionesCoagulacion = (e) => {
        setIsChecked_AlteracionesCoagulacion(!isChecked_AlteracionesCoagulacion);
        habilitar_literal_4_2_6_alteraciones_coagulacion(e);
    };
    const handleHemorragiasPersistentes = (e) => {
        setIsChecked_HemorragiasPersistentes(!isChecked_HemorragiasPersistentes);
        habilitar_literal_4_2_6_hemorragias_persistentes(e);
    };
    const handleEnfermedadSangre = (e) => {
        setIsChecked_EnfermedadSangre(!isChecked_EnfermedadSangre);
        habilitar_literal_4_2_6_enfermedad_sangre(e);
    };
    //LITERAL 4.2.7
    const handleBocio = (e) => {
        setIsChecked_Bocio(!isChecked_Bocio);
        habilitar_literal_4_2_7_bocio(e);
    };
    const handleColesterolElevado = (e) => {
        setIsChecked_ColesterolElevado(!isChecked_ColesterolElevado);
        habilitar_literal_4_2_7_colesterol_elevado(e);
    };
    const handleEnfermedadGlandulas = (e) => {
        setIsChecked_EnfermedadGlandulas(!isChecked_EnfermedadGlandulas);
        habilitar_literal_4_2_7_enfermedad_glandulas(e);
    };
    //LITERAL 4.2.8
    const handleCancer = (e) => {
        setIsChecked_Cancer(!isChecked_Cancer);
        habilitar_literal_4_2_8_cancer(e);
    };
    const handleQuistes = (e) => {
        setIsChecked_Quistes(!isChecked_Quistes);
        habilitar_literal_4_2_8_quistes(e);
    };
    const handleUlceras = (e) => {
        setIsChecked_Ulceras(!isChecked_Ulceras);
        habilitar_literal_4_2_8_ulceras(e);
    };
    const handleHernias = (e) => {
        setIsChecked_Hernias(!isChecked_Hernias);
        habilitar_literal_4_2_8_hernias(e);
    };

    /*************** APARTADO 4.3 ***************/
    const handleConstitucion = (e) => {
        setIsChecked_Constitucion(!isChecked_Constitucion);
        habilitar_literal_4_3_constitucion(e);
    };
    const handleDeformacion = (e) => {
        setIsChecked_Deformacion(!isChecked_Deformacion);
        habilitar_literal_4_3_deformacion(e);
    };
    const handleAmputacion = (e) => {
        setIsChecked_Amputacion(!isChecked_Amputacion);
        habilitar_literal_4_3_amputacion(e);
    };
    const handleDefectoFisico = (e) => {
        setIsChecked_DefectoFisico(!isChecked_DefectoFisico);
        habilitar_literal_4_3_defecto_fisico(e);
    };

    /*************** APARTADO 4.4 ***************/
    const handleEnfermedad = (e) => {
        setIsChecked_Enfermedad(!isChecked_Enfermedad);
        habilitar_literal_4_4_enfermedad(e);
    };
    const handleLesion = (e) => {
        setIsChecked_Lesion(!isChecked_Lesion);
        habilitar_literal_4_4_lesion(e);
    };

    /*************** APARTADO 4.5 ***************/
    //LITERAL 4.5.2
    const handlePartos = (e) => {
        setIsChecked_Partos(!isChecked_Partos);
        habilitar_literal_4_5_2_partos(e);
    };
    const handleCesareas = (e) => {
        setIsChecked_Cesareas(!isChecked_Cesareas);
        habilitar_literal_4_5_2_cesareas(e);
    };

    /************************************************************ FUNCIONES ************************************************************/
    function calcular_edad(fecha_nacimiento) {
        let hoy = new Date();
        let fechaNacimiento = new Date(fecha_nacimiento);
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }

    var fecha_nacimiento = "";
    var edad = 0;
    if (userData.hasOwnProperty('literal_1_4_fecha_nacimiento')) fecha_nacimiento = userData.literal_1_4_fecha_nacimiento;
    edad = calcular_edad(fecha_nacimiento);

    /*************** APARTADO 4.1 ***************/
    // SECCIÓN 4.1.1
    function habilitar_literal_4_1_1(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_1_1").style.display = "flex";
            setMsg_literal_4_1_1_compania("Campo inválido/vacío");
            setMsg_literal_4_1_1_tiempo_servicio("Campo inválido/vacío");
        } else {
            document.getElementById("div_4_1_1").style.display = "none";
            if (userData.hasOwnProperty('literal_4_1_1_compania')) userData.literal_4_1_1_compania = "";
            if (userData.hasOwnProperty('literal_4_1_1_tiempo_servicio')) userData.literal_4_1_1_tiempo_servicio = "";
            setMsg_literal_4_1_1_compania(" ");
            setMsg_literal_4_1_1_tiempo_servicio(" ");
        }
        setMsg_literal_4_1_1(" ");
        handleChange(event);
    }
    // SECCIÓN 4.1.2
    function habilitar_literal_4_1_2(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_1_2").style.display = "flex";
            setMsg_literal_4_1_2_motivo_exclusion("Elija una opción válida");
            setMsg_literal_4_1_2_detallar_enfermedad("Campo inválido/vacío");
            setMsg_literal_4_1_2_detallar_exclusion("Campo inválido/vacío");
        } else {
            document.getElementById("div_4_1_2").style.display = "none";
            document.getElementById("literal_4_1_2_motivo_exclusion").value = "-1";
            document.getElementById("div_4_1_2_detallar_enfermedad").style.display = "none";
            document.getElementById("div_4_1_2_detallar_exclusion").style.display = "none";
            if (userData.hasOwnProperty('literal_4_1_2_motivo_exclusion')) userData.literal_4_1_2_motivo_exclusion = "-1";
            if (userData.hasOwnProperty('literal_4_1_2_detallar_enfermedad')) userData.literal_4_1_2_detallar_enfermedad = "";
            if (userData.hasOwnProperty('literal_4_1_2_detallar_exclusion')) userData.literal_4_1_2_detallar_exclusion = "";
            setMsg_literal_4_1_2_motivo_exclusion(" ");
            setMsg_literal_4_1_2_detallar_enfermedad(" ");
            setMsg_literal_4_1_2_detallar_exclusion(" ");
        }
        setMsg_literal_4_1_2(" ");
        handleChange(event);
    }
    function habilitar_literal_4_1_2_motivo_exclusion(event) {
        const entrada = event.target.value;
        if (entrada === "Enfermedad grave") {
            document.getElementById("div_4_1_2_detallar_enfermedad").style.display = "inline";
            document.getElementById("div_4_1_2_detallar_exclusion").style.display = "none";
            if (userData.hasOwnProperty('literal_4_1_2_detallar_enfermedad')) userData.literal_4_1_2_detallar_enfermedad = "";
            setMsg_literal_4_1_2_detallar_enfermedad("Campo inválido/vacío");
        } else if (entrada === "Exclusion") {
            document.getElementById("div_4_1_2_detallar_exclusion").style.display = "inline";
            document.getElementById("div_4_1_2_detallar_enfermedad").style.display = "none";
            if (userData.hasOwnProperty('literal_4_1_2_detallar_exclusion')) userData.literal_4_1_2_detallar_exclusion = "";
            setMsg_literal_4_1_2_detallar_exclusion("Campo inválido/vacío");
        } else {
            document.getElementById("div_4_1_2_detallar_enfermedad").style.display = "none";
            document.getElementById("div_4_1_2_detallar_exclusion").style.display = "none";
            if (userData.hasOwnProperty('literal_4_1_2_detallar_enfermedad')) userData.literal_4_1_2_detallar_enfermedad = "";
            if (userData.hasOwnProperty('literal_4_1_2_detallar_exclusion')) userData.literal_4_1_2_detallar_exclusion = "";
        }
        validar_literal_4_1_2_motivo_exclusion(event);
    }
    // SECCIÓN 4.1.3
    function habilitar_literal_4_1_3(event) {
        const entrada = event.target.value;
        if ((entrada === "Si") || (entrada === "Otros")) {
            document.getElementById("div_4_1_3").style.display = "flex";
            setMsg_literal_4_1_3_deporte("Campo inválido/vacío");
            if (userData.hasOwnProperty('literal_4_1_3_deporte')) userData.literal_4_1_3_deporte = "";
        } else {
            document.getElementById("div_4_1_3").style.display = "none";
            if (userData.hasOwnProperty('literal_4_1_3_deporte')) userData.literal_4_1_3_deporte = "";
            setMsg_literal_4_1_3_deporte(" ");
        }
        setMsg_literal_4_1_3(" ");
        handleChange(event);
    }
    // SECCIÓN 4.1.5
    function habilitar_literal_4_1_5(event) {
        setMsg_literal_4_1_5(" ");
        handleChange(event);
    }
    // SECCIÓN 4.1.6
    function habilitar_literal_4_1_6(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_1_6").style.display = "flex";
            setMsg_literal_4_1_6_tiempo("Seleccione una respuesta");
            setMsg_literal_4_1_6_cantidad("Seleccione una respuesta");
        } else {
            document.getElementById("div_4_1_6").style.display = "none";
            if (userData.hasOwnProperty('literal_4_1_6_tiempo')) userData.literal_4_1_6_tiempo = "";
            if (userData.hasOwnProperty('literal_4_1_6_cantidad')) userData.literal_4_1_6_cantidad = "";
            setMsg_literal_4_1_6_tiempo(" ");
            setMsg_literal_4_1_6_cantidad(" ");
        }
        setMsg_literal_4_1_6(" ");
        handleChange(event);
    }
    function habilitar_literal_4_1_6_tiempo(event) {
        setMsg_literal_4_1_6_tiempo(" ");
        handleChange(event);
    }
    function habilitar_literal_4_1_6_cantidad(event) {
        setMsg_literal_4_1_6_cantidad(" ");
        handleChange(event);
    }
    // SECCIÓN 4.1.7
    function habilitar_literal_4_1_7(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_1_7").style.display = "flex";
            setMsg_literal_4_1_7_cantidad("Seleccione una respuesta");
        } else {
            document.getElementById("div_4_1_7").style.display = "none";
            if (userData.hasOwnProperty('literal_4_1_7_cantidad')) userData.literal_4_1_7_cantidad = "";
            setMsg_literal_4_1_7_cantidad(" ");
        }
        setMsg_literal_4_1_7(" ");
        handleChange(event);
    }
    function habilitar_literal_4_1_7_cantidad(event) {
        setMsg_literal_4_1_7_cantidad(" ");
        handleChange(event);
    }
    // SECCIÓN 4.1.8
    function habilitar_literal_4_1_8(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_1_8").style.display = "flex";
            setMsg_literal_4_1_8_bebidas("Seleccione una respuesta");
        } else {
            document.getElementById("div_4_1_8").style.display = "none";;
            document.getElementById("div_4_1_8_frecuencia").style.display = "none";
            document.getElementById("label_4_1_8_veces_semana").style.display = "none";
            document.getElementById("label_4_1_8_veces_mes").style.display = "none";

            if (userData.hasOwnProperty('literal_4_1_8_bebidas')) userData.literal_4_1_8_bebidas = "";
            if (userData.hasOwnProperty('literal_4_1_8_frecuencia')) userData.literal_4_1_8_frecuencia = "";
            if (userData.hasOwnProperty('literal_4_1_8_veces_mes')) userData.literal_4_1_8_veces_mes = "-1";
            if (userData.hasOwnProperty('literal_4_1_8_veces_semana')) userData.literal_4_1_8_veces_semana = "-1";

            setMsg_literal_4_1_8_bebidas(" ");
            setMsg_literal_4_1_8_frecuencia(" ");
            setMsg_literal_4_1_8_veces_mes(" ");
            setMsg_literal_4_1_8_veces_semana(" ");
        }
        setMsg_literal_4_1_8(" ");
        handleChange(event);
    }
    function habilitar_literal_4_1_8_bebidas(event) {
        const entrada = event.target.value;
        if (entrada === "Frecuentemente") {
            document.getElementById("div_4_1_8_frecuencia").style.display = "block";
            setMsg_literal_4_1_8_frecuencia("Seleccione una respuesta");
        } else {
            document.getElementById("div_4_1_8_frecuencia").style.display = "none";
            document.getElementById("label_4_1_8_veces_semana").style.display = "none";
            document.getElementById("label_4_1_8_veces_mes").style.display = "none";

            if (userData.hasOwnProperty('literal_4_1_8_frecuencia')) userData.literal_4_1_8_frecuencia = "";
            if (userData.hasOwnProperty('literal_4_1_8_veces_semana')) userData.literal_4_1_8_veces_semana = "-1";
            if (userData.hasOwnProperty('literal_4_1_8_veces_mes')) userData.literal_4_1_8_veces_mes = "-1";

            setMsg_literal_4_1_8_frecuencia(" ");
            setMsg_literal_4_1_8_veces_mes(" ");
            setMsg_literal_4_1_8_veces_semana(" ");
        }
        setMsg_literal_4_1_8_bebidas(" ");
        handleChange(event);
    }
    function habilitar_literal_4_1_8_frecuencia(event) {
        const entrada = event.target.value;
        if (entrada === "Mes") {
            document.getElementById("label_4_1_8_veces_mes").style.display = "inline";
            document.getElementById("label_4_1_8_veces_semana").style.display = "none";
            if (userData.hasOwnProperty('literal_4_1_8_veces_semana')) userData.literal_4_1_8_veces_semana = "-1";
            setMsg_literal_4_1_8_veces_mes("Elija una opción");
        } else {
            document.getElementById("label_4_1_8_veces_semana").style.display = "inline";
            document.getElementById("label_4_1_8_veces_mes").style.display = "none";
            if (userData.hasOwnProperty('literal_4_1_8_veces_mes')) userData.literal_4_1_8_veces_mes = "-1";
            setMsg_literal_4_1_8_veces_semana("Elija una opción");
        }
        setMsg_literal_4_1_8_frecuencia(" ");
        handleChange(event);
    }
    // SECCIÓN 4.1.9 ñaqui
    function habilitar_literal_4_1_9(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_1_9").style.display = "flex";
            setIsChecked_Alcoholismo(true);
            setIsChecked_Drogadiccion(true);
            setMsg_literal_4_1_9_alcoholismo("Seleccione al menos una respuesta");
        } else {
            document.getElementById("div_4_1_9").style.display = "none";

            document.getElementById("literal_4_1_9_alcoholismo").checked = false;
            document.getElementById("literal_4_1_9_drogadiccion").checked = false;

            document.getElementById("label_4_1_9_fecha_alcoholismo").style.display = "none";
            document.getElementById("label_4_1_9_fecha_drogadiccion").style.display = "none";
            document.getElementById("label_4_1_9_tipo_drogadiccion").style.display = "none";

            userData.literal_4_1_9_alcoholismo = "false";
            userData.literal_4_1_9_drogadiccion = "false";

            setIsChecked_Alcoholismo(true);
            setIsChecked_Drogadiccion(true);
            setMsg_literal_4_1_9_alcoholismo(" ");
            setMsg_literal_4_1_9_fecha_alcoholismo(" ");
            setMsg_literal_4_1_9_fecha_drogadiccion(" ");
            setMsg_literal_4_1_9_tipo_drogadiccion(" ");
        }
        setMsg_literal_4_1_9(" ");
        handleChange(event);
    }
    function habilitar_literal_4_1_9_alcoholismo(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("label_4_1_9_fecha_alcoholismo").style.display = "inline";
            setMsg_literal_4_1_9_fecha_alcoholismo("Elija una opción válida");
            setMsg_literal_4_1_9_alcoholismo(" ");
        } else {
            document.getElementById("label_4_1_9_fecha_alcoholismo").style.display = "none";

            userData.literal_4_1_9_fecha_alcoholismo = "";

            setMsg_literal_4_1_9_fecha_alcoholismo(" ");

            if (userData.hasOwnProperty('literal_4_1_9_alcoholismo') && userData.hasOwnProperty('literal_4_1_9_drogadiccion')) {
                if (userData.literal_4_1_9_drogadiccion === "false") {
                    setMsg_literal_4_1_9_alcoholismo("Seleccione al menos una respuesta");
                } else {
                    setMsg_literal_4_1_9_alcoholismo(" ");
                }
            } else if (!userData.hasOwnProperty('literal_4_1_9_alcoholismo') && !userData.hasOwnProperty('literal_4_1_9_drogadiccion')) {
                setMsg_literal_4_1_9_alcoholismo("Seleccione al menos una respuesta");
            }

        }
        handleChange(event);
    }
    function habilitar_literal_4_1_9_drogadiccion(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("label_4_1_9_fecha_drogadiccion").style.display = "inline";
            document.getElementById("label_4_1_9_tipo_drogadiccion").style.display = "inline";
            setMsg_literal_4_1_9_alcoholismo(" ");
        } else {
            document.getElementById("label_4_1_9_fecha_drogadiccion").style.display = "none";
            document.getElementById("literal_4_1_9_fecha_drogadiccion").value = "";
            document.getElementById("label_4_1_9_tipo_drogadiccion").style.display = "none";
            document.getElementById("literal_4_1_9_tipo_drogadiccion").value = "";

            if (userData.hasOwnProperty('literal_4_1_9_alcoholismo') && userData.hasOwnProperty('literal_4_1_9_drogadiccion')) {
                if (userData.literal_4_1_9_alcoholismo === "false") {
                    setMsg_literal_4_1_9_alcoholismo("Seleccione al menos una respuesta");
                } else {
                    setMsg_literal_4_1_9_alcoholismo(" ");
                }
            } else if (!userData.hasOwnProperty('literal_4_1_9_alcoholismo') && !userData.hasOwnProperty('literal_4_1_9_drogadiccion')) {
                setMsg_literal_4_1_9_alcoholismo("Seleccione al menos una respuesta");
            }
        }
        handleChange(event);
    }
    // SECCIÓN 4.1.10
    function habilitar_literal_4_1_10(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_1_10").style.display = "flex";
            setIsChecked_Sangre(true);
            setIsChecked_Orina(true);
            setIsChecked_Electrocardiograma(true);
            setIsChecked_RayosX(true);
            setIsChecked_Orina(true);
            setIsChecked_Otros(true);
        } else {
            document.getElementById("div_4_1_10").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_sangre_fecha").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_sangre_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_sangre_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_sangre_motivo_detalle_otros").style.display = "none";

            document.getElementById("label_4_1_10_leyenda_orina_fecha").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_orina_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_orina_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_orina_motivo_detalle_otros").style.display = "none";

            document.getElementById("label_4_1_10_leyenda_electrocardiograma_fecha").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_motivo_detalle_otros").style.display = "none";

            document.getElementById("label_4_1_10_leyenda_rayosx_fecha").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_rayosx_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_rayosx_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_rayosx_motivo_detalle_otros").style.display = "none";

            document.getElementById("literal_4_1_10_sangre").checked = false;
            document.getElementById("literal_4_1_10_orina").checked = false;
            document.getElementById("literal_4_1_10_electrocardiograma").checked = false;
            document.getElementById("literal_4_1_10_rayosx").checked = false;
            document.getElementById("literal_4_1_10_otros").checked = false;

            userData.literal_4_1_10_sangre = "false";
            userData.literal_4_1_10_orina = "false";
            userData.literal_4_1_10_electrocardiograma = "false";
            userData.literal_4_1_10_rayosx = "false";
            userData.literal_4_1_10_otros = "false";

            setIsChecked_Sangre(true);
            setIsChecked_Orina(true);
            setIsChecked_Electrocardiograma(true);
            setIsChecked_RayosX(true);
            setIsChecked_Orina(true);
            setIsChecked_Otros(true);

            // Sangre
            document.getElementById("div_4_1_10_sangre_1").style.display = "none";
            document.getElementById("div_4_1_10_sangre_2").style.display = "none";
            document.getElementById("label_4_1_10_sangre_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_sangre_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_sangre_motivo_detalle_otros").style.display = "none";

            document.getElementById("literal_4_1_10_sangre_fecha").value = "";
            document.getElementById("literal_4_1_10_sangre_resultado_detalle_enfermedad").value = "";
            document.getElementById("literal_4_1_10_sangre_resultado_detalle_otros").value = "";
            document.getElementById("literal_4_1_10_sangre_motivo_detalle_otros").value = "";

            document.getElementById("literal_4_1_10_sangre_resultado_normal").checked = false;
            document.getElementById("literal_4_1_10_sangre_resultado_enfermedad").checked = false;
            document.getElementById("literal_4_1_10_sangre_resultado_otros").checked = false;
            document.getElementById("literal_4_1_10_sangre_motivo_control").checked = false;
            document.getElementById("literal_4_1_10_sangre_motivo_procupacional").checked = false;
            document.getElementById("literal_4_1_10_sangre_motivo_otros").checked = false;

            // Orina
            document.getElementById("div_4_1_10_orina_1").style.display = "none";
            document.getElementById("div_4_1_10_orina_2").style.display = "none";
            document.getElementById("label_4_1_10_orina_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_orina_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_orina_motivo_detalle_otros").style.display = "none";

            document.getElementById("literal_4_1_10_orina_fecha").value = "";
            document.getElementById("literal_4_1_10_orina_resultado_detalle_enfermedad").value = "";
            document.getElementById("literal_4_1_10_orina_resultado_detalle_otros").value = "";
            document.getElementById("literal_4_1_10_orina_motivo_detalle_otros").value = "";

            document.getElementById("literal_4_1_10_orina_resultado_normal").checked = false;
            document.getElementById("literal_4_1_10_orina_resultado_enfermedad").checked = false;
            document.getElementById("literal_4_1_10_orina_resultado_otros").checked = false;
            document.getElementById("literal_4_1_10_orina_motivo_control").checked = false;
            document.getElementById("literal_4_1_10_orina_motivo_procupacional").checked = false;
            document.getElementById("literal_4_1_10_orina_motivo_otros").checked = false;

            // Electrocardiograma
            document.getElementById("div_4_1_10_electrocardiograma_1").style.display = "none";
            document.getElementById("div_4_1_10_electrocardiograma_2").style.display = "none";
            document.getElementById("label_4_1_10_electrocardiograma_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_electrocardiograma_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_electrocardiograma_motivo_detalle_otros").style.display = "none";

            document.getElementById("literal_4_1_10_electrocardiograma_fecha").value = "";
            document.getElementById("literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad").value = "";
            document.getElementById("literal_4_1_10_electrocardiograma_resultado_detalle_otros").value = "";
            document.getElementById("literal_4_1_10_electrocardiograma_motivo_detalle_otros").value = "";

            document.getElementById("literal_4_1_10_electrocardiograma_resultado_normal").checked = false;
            document.getElementById("literal_4_1_10_electrocardiograma_resultado_enfermedad").checked = false;
            document.getElementById("literal_4_1_10_electrocardiograma_resultado_otros").checked = false;
            document.getElementById("literal_4_1_10_electrocardiograma_motivo_control").checked = false;
            document.getElementById("literal_4_1_10_electrocardiograma_motivo_procupacional").checked = false;
            document.getElementById("literal_4_1_10_electrocardiograma_motivo_otros").checked = false;

            // Rayos X
            document.getElementById("div_4_1_10_rayosx_1").style.display = "none";
            document.getElementById("div_4_1_10_rayosx_2").style.display = "none";
            document.getElementById("label_4_1_10_rayosx_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_rayosx_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_rayosx_motivo_detalle_otros").style.display = "none";

            document.getElementById("literal_4_1_10_rayosx_fecha").value = "";
            document.getElementById("literal_4_1_10_rayosx_resultado_detalle_enfermedad").value = "";
            document.getElementById("literal_4_1_10_rayosx_resultado_detalle_otros").value = "";
            document.getElementById("literal_4_1_10_rayosx_motivo_detalle_otros").value = "";

            document.getElementById("literal_4_1_10_rayosx_resultado_normal").checked = false;
            document.getElementById("literal_4_1_10_rayosx_resultado_enfermedad").checked = false;
            document.getElementById("literal_4_1_10_rayosx_resultado_otros").checked = false;
            document.getElementById("literal_4_1_10_rayosx_motivo_control").checked = false;
            document.getElementById("literal_4_1_10_rayosx_motivo_procupacional").checked = false;
            document.getElementById("literal_4_1_10_rayosx_motivo_otros").checked = false;

            // Otros
            document.getElementById("label_4_1_10_otros_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_otros_detalle_otros").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_1_10_sangre(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_1_10_sangre_1").style.display = "flex";
            document.getElementById("div_4_1_10_sangre_2").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_sangre_fecha").style.display = "flex";
        } else {
            document.getElementById("div_4_1_10_sangre_1").style.display = "none";
            document.getElementById("div_4_1_10_sangre_2").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_sangre_fecha").style.display = "none";
            document.getElementById("label_4_1_10_sangre_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_sangre_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_sangre_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_sangre_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_sangre_motivo_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_sangre_motivo_detalle_otros").style.display = "none";

            document.getElementById("literal_4_1_10_sangre_fecha").value = "";
            document.getElementById("literal_4_1_10_sangre_resultado_detalle_enfermedad").value = "";
            document.getElementById("literal_4_1_10_sangre_resultado_detalle_otros").value = "";
            document.getElementById("literal_4_1_10_sangre_motivo_detalle_otros").value = "";

            document.getElementById("literal_4_1_10_sangre_resultado_normal").checked = false;
            document.getElementById("literal_4_1_10_sangre_resultado_enfermedad").checked = false;
            document.getElementById("literal_4_1_10_sangre_resultado_otros").checked = false;
            document.getElementById("literal_4_1_10_sangre_motivo_control").checked = false;
            document.getElementById("literal_4_1_10_sangre_motivo_procupacional").checked = false;
            document.getElementById("literal_4_1_10_sangre_motivo_otros").checked = false;
        }
        handleChange(event);
    }
    function habilitar_literal_4_1_10_sangre_resultado(event) {
        const entrada = event.target.value;
        if (entrada === "Enfermedad") {
            document.getElementById("label_4_1_10_sangre_resultado_detalle_enfermedad").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_sangre_resultado_detalle_enfermedad").style.display = "flex";
            document.getElementById("label_4_1_10_sangre_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_sangre_resultado_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_sangre_resultado_detalle_otros").value = "";
        } else if (entrada === "Otros") {
            document.getElementById("label_4_1_10_sangre_resultado_detalle_otros").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_sangre_resultado_detalle_otros").style.display = "flex";
            document.getElementById("label_4_1_10_sangre_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_sangre_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("literal_4_1_10_sangre_resultado_detalle_enfermedad").value = "";
        } else {
            document.getElementById("label_4_1_10_sangre_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_sangre_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_sangre_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_sangre_resultado_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_sangre_resultado_detalle_enfermedad").value = "";
            document.getElementById("literal_4_1_10_sangre_resultado_detalle_otros").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_1_10_sangre_motivo(event) {
        const entrada = event.target.value;
        if (entrada === "Otros") {
            document.getElementById("label_4_1_10_sangre_motivo_detalle_otros").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_sangre_motivo_detalle_otros").style.display = "flex";
        } else {
            document.getElementById("label_4_1_10_sangre_motivo_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_sangre_motivo_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_sangre_motivo_detalle_otros").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_1_10_orina(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_1_10_orina_1").style.display = "flex";
            document.getElementById("div_4_1_10_orina_2").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_orina_fecha").style.display = "flex";
        } else {
            document.getElementById("div_4_1_10_orina_1").style.display = "none";
            document.getElementById("div_4_1_10_orina_2").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_orina_fecha").style.display = "none";
            document.getElementById("label_4_1_10_orina_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_orina_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_orina_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_orina_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_orina_motivo_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_orina_motivo_detalle_otros").style.display = "none";

            document.getElementById("literal_4_1_10_orina_fecha").value = "";
            document.getElementById("literal_4_1_10_orina_resultado_detalle_enfermedad").value = "";
            document.getElementById("literal_4_1_10_orina_resultado_detalle_otros").value = "";
            document.getElementById("literal_4_1_10_orina_motivo_detalle_otros").value = "";

            document.getElementById("literal_4_1_10_orina_resultado_normal").checked = false;
            document.getElementById("literal_4_1_10_orina_resultado_enfermedad").checked = false;
            document.getElementById("literal_4_1_10_orina_resultado_otros").checked = false;
            document.getElementById("literal_4_1_10_orina_motivo_control").checked = false;
            document.getElementById("literal_4_1_10_orina_motivo_procupacional").checked = false;
            document.getElementById("literal_4_1_10_orina_motivo_otros").checked = false;
        }
        handleChange(event);
    }
    function habilitar_literal_4_1_10_orina_resultado(event) {
        const entrada = event.target.value;
        if (entrada === "Enfermedad") {
            document.getElementById("label_4_1_10_orina_resultado_detalle_enfermedad").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_orina_resultado_detalle_enfermedad").style.display = "flex";
            document.getElementById("label_4_1_10_orina_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_orina_resultado_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_orina_resultado_detalle_otros").value = "";
        } else if (entrada === "Otros") {
            document.getElementById("label_4_1_10_orina_resultado_detalle_otros").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_orina_resultado_detalle_otros").style.display = "flex";
            document.getElementById("label_4_1_10_orina_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_orina_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("literal_4_1_10_orina_resultado_detalle_enfermedad").value = "";
        } else {
            document.getElementById("label_4_1_10_orina_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_orina_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_orina_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_orina_resultado_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_orina_resultado_detalle_enfermedad").value = "";
            document.getElementById("literal_4_1_10_orina_resultado_detalle_otros").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_1_10_orina_motivo(event) {
        const entrada = event.target.value;
        if (entrada === "Otros") {
            document.getElementById("label_4_1_10_orina_motivo_detalle_otros").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_orina_motivo_detalle_otros").style.display = "flex";
        } else {
            document.getElementById("label_4_1_10_orina_motivo_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_orina_motivo_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_orina_motivo_detalle_otros").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_1_10_electrocardiograma(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_1_10_electrocardiograma_1").style.display = "flex";
            document.getElementById("div_4_1_10_electrocardiograma_2").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_fecha").style.display = "flex";
        } else {
            document.getElementById("div_4_1_10_electrocardiograma_1").style.display = "none";
            document.getElementById("div_4_1_10_electrocardiograma_2").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_fecha").style.display = "none";
            document.getElementById("label_4_1_10_electrocardiograma_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_electrocardiograma_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_electrocardiograma_motivo_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_motivo_detalle_otros").style.display = "none";

            document.getElementById("literal_4_1_10_electrocardiograma_fecha").value = "";
            document.getElementById("literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad").value = "";
            document.getElementById("literal_4_1_10_electrocardiograma_resultado_detalle_otros").value = "";
            document.getElementById("literal_4_1_10_electrocardiograma_motivo_detalle_otros").value = "";

            document.getElementById("literal_4_1_10_electrocardiograma_resultado_normal").checked = false;
            document.getElementById("literal_4_1_10_electrocardiograma_resultado_enfermedad").checked = false;
            document.getElementById("literal_4_1_10_electrocardiograma_resultado_otros").checked = false;
            document.getElementById("literal_4_1_10_electrocardiograma_motivo_control").checked = false;
            document.getElementById("literal_4_1_10_electrocardiograma_motivo_procupacional").checked = false;
            document.getElementById("literal_4_1_10_electrocardiograma_motivo_otros").checked = false;
        }
        handleChange(event);
    }
    function habilitar_literal_4_1_10_electrocardiograma_resultado(event) {
        const entrada = event.target.value;
        if (entrada === "Enfermedad") {
            document.getElementById("label_4_1_10_electrocardiograma_resultado_detalle_enfermedad").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_resultado_detalle_enfermedad").style.display = "flex";
            document.getElementById("label_4_1_10_electrocardiograma_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_resultado_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_electrocardiograma_resultado_detalle_otros").value = "";
        } else if (entrada === "Otros") {
            document.getElementById("label_4_1_10_electrocardiograma_resultado_detalle_otros").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_resultado_detalle_otros").style.display = "flex";
            document.getElementById("label_4_1_10_electrocardiograma_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad").value = "";
        } else {
            document.getElementById("label_4_1_10_electrocardiograma_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_electrocardiograma_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_resultado_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad").value = "";
            document.getElementById("literal_4_1_10_electrocardiograma_resultado_detalle_otros").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_1_10_electrocardiograma_motivo(event) {
        const entrada = event.target.value;
        if (entrada === "Otros") {
            document.getElementById("label_4_1_10_electrocardiograma_motivo_detalle_otros").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_motivo_detalle_otros").style.display = "flex";
        } else {
            document.getElementById("label_4_1_10_electrocardiograma_motivo_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_electrocardiograma_motivo_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_electrocardiograma_motivo_detalle_otros").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_1_10_rayosx(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_1_10_rayosx_1").style.display = "flex";
            document.getElementById("div_4_1_10_rayosx_2").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_rayosx_fecha").style.display = "flex";
        } else {
            document.getElementById("div_4_1_10_rayosx_1").style.display = "none";
            document.getElementById("div_4_1_10_rayosx_2").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_rayosx_fecha").style.display = "none";
            document.getElementById("label_4_1_10_rayosx_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_rayosx_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_rayosx_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_rayosx_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_rayosx_motivo_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_rayosx_motivo_detalle_otros").style.display = "none";

            document.getElementById("literal_4_1_10_rayosx_fecha").value = "";
            document.getElementById("literal_4_1_10_rayosx_resultado_detalle_enfermedad").value = "";
            document.getElementById("literal_4_1_10_rayosx_resultado_detalle_otros").value = "";
            document.getElementById("literal_4_1_10_rayosx_motivo_detalle_otros").value = "";

            document.getElementById("literal_4_1_10_rayosx_resultado_normal").checked = false;
            document.getElementById("literal_4_1_10_rayosx_resultado_enfermedad").checked = false;
            document.getElementById("literal_4_1_10_rayosx_resultado_otros").checked = false;
            document.getElementById("literal_4_1_10_rayosx_motivo_control").checked = false;
            document.getElementById("literal_4_1_10_rayosx_motivo_procupacional").checked = false;
            document.getElementById("literal_4_1_10_rayosx_motivo_otros").checked = false;
        }
        handleChange(event);
    }
    function habilitar_literal_4_1_10_rayosx_resultado(event) {
        const entrada = event.target.value;
        if (entrada === "Enfermedad") {
            document.getElementById("label_4_1_10_rayosx_resultado_detalle_enfermedad").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_rayosx_resultado_detalle_enfermedad").style.display = "flex";
            document.getElementById("label_4_1_10_rayosx_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_rayosx_resultado_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_rayosx_resultado_detalle_otros").value = "";
        } else if (entrada === "Otros") {
            document.getElementById("label_4_1_10_rayosx_resultado_detalle_otros").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_rayosx_resultado_detalle_otros").style.display = "flex";
            document.getElementById("label_4_1_10_rayosx_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_rayosx_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("literal_4_1_10_rayosx_resultado_detalle_enfermedad").value = "";
        } else {
            document.getElementById("label_4_1_10_rayosx_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_rayosx_resultado_detalle_enfermedad").style.display = "none";
            document.getElementById("label_4_1_10_rayosx_resultado_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_rayosx_resultado_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_rayosx_resultado_detalle_enfermedad").value = "";
            document.getElementById("literal_4_1_10_rayosx_resultado_detalle_otros").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_1_10_rayosx_motivo(event) {
        const entrada = event.target.value;
        if (entrada === "Otros") {
            document.getElementById("label_4_1_10_rayosx_motivo_detalle_otros").style.display = "flex";
            document.getElementById("label_4_1_10_leyenda_rayosx_motivo_detalle_otros").style.display = "flex";
        } else {
            document.getElementById("label_4_1_10_rayosx_motivo_detalle_otros").style.display = "none";
            document.getElementById("label_4_1_10_leyenda_rayosx_motivo_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_rayosx_motivo_detalle_otros").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_1_10_otros(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("label_4_1_10_otros_detalle_otros").style.display = "flex";
        } else {
            document.getElementById("label_4_1_10_otros_detalle_otros").style.display = "none";
            document.getElementById("literal_4_1_10_otros_detalle_otros").value = "";
        }
        handleChange(event);
    }
    // SECCIÓN 4.1.11
    function habilitar_literal_4_1_11(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_1_11").style.display = "flex";
        } else {
            document.getElementById("div_4_1_11").style.display = "none";
            document.getElementById("literal_4_1_11_diagnostico").value = "";
            document.getElementById("literal_4_1_11_fecha").value = "";
        }
        handleChange(event);
    }
    // SECCIÓN 4.1.12
    function habilitar_literal_4_1_12(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_1_12").style.display = "flex";
        } else {
            document.getElementById("div_4_1_12").style.display = "none";
            document.getElementById("literal_4_1_12_detallar").value = "";
            document.getElementById("literal_4_1_12_fecha").value = "";
        }
        handleChange(event);
    }
    // SECCIÓN 4.1.13
    function habilitar_literal_4_1_13(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_1_13").style.display = "flex";
        } else {
            document.getElementById("div_4_1_13").style.display = "none";
            document.getElementById("literal_4_1_13_especifique").value = "";
            document.getElementById("literal_4_1_13_fecha").value = "";
        }
        handleChange(event);
    }
    // SECCIÓN 4.1.14
    function habilitar_literal_4_1_14(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_1_14").style.display = "flex";
        } else {
            document.getElementById("div_4_1_14").style.display = "none";
            document.getElementById("literal_4_1_14_indicar").value = "";
            document.getElementById("literal_4_1_14_fecha").value = "";
        }
        handleChange(event);
    }
    // SECCIÓN 4.1.15
    function habilitar_literal_4_1_15(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_1_15").style.display = "flex";
        } else {
            document.getElementById("div_4_1_15").style.display = "none";
            document.getElementById("literal_4_1_15_especifique").value = "";
            document.getElementById("literal_4_1_15_fecha").value = "";
        }
        handleChange(event);
    }

    /*************** APARTADO 4.2 ***************/
    // SECCIÓN 4.2.1
    function habilitar_literal_4_2_1(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_2_1").style.display = "flex";
            setIsChecked_Vertigos(true);
            setIsChecked_Convulsiones(true);
            setIsChecked_Epilepsia(true);
            setIsChecked_Paralisis(true);
            setIsChecked_EnfermedadesMentales(true);
            setIsChecked_DoloresCabeza(true);
            setIsChecked_Jaquecas(true);
        } else {
            document.getElementById("div_4_2_1").style.display = "none";

            document.getElementById("literal_4_2_1_vertigos").checked = false;
            document.getElementById("literal_4_2_1_convulsiones").checked = false;
            document.getElementById("literal_4_2_1_epilepsia").checked = false;
            document.getElementById("literal_4_2_1_paralisis").checked = false;
            document.getElementById("literal_4_2_1_enfermedades_mentales").checked = false;
            document.getElementById("literal_4_2_1_dolores_cabeza").checked = false;
            document.getElementById("literal_4_2_1_jaquecas").checked = false;

            userData.literal_4_2_1_vertigos = "false";
            userData.literal_4_2_1_convulsiones = "false";
            userData.literal_4_2_1_epilepsia = "false";
            userData.literal_4_2_1_paralisis = "false";
            userData.literal_4_2_1_enfermedades_mentales = "false";
            userData.literal_4_2_1_dolores_cabeza = "false";
            userData.literal_4_2_1_jaquecas = "false";

            setIsChecked_Vertigos(true);
            setIsChecked_Convulsiones(true);
            setIsChecked_Epilepsia(true);
            setIsChecked_Paralisis(true);
            setIsChecked_EnfermedadesMentales(true);
            setIsChecked_DoloresCabeza(true);
            setIsChecked_Jaquecas(true);

            // Vértigos
            document.getElementById("div_4_2_1_vertigos").style.display = "none";
            document.getElementById("literal_4_2_1_vertigos_fecha").value = "";
            document.getElementById("literal_4_2_1_vertigos_tratamiento").value = "";

            // Convulsiones
            document.getElementById("div_4_2_1_convulsiones").style.display = "none";
            document.getElementById("literal_4_2_1_convulsiones_fecha").value = "";
            document.getElementById("literal_4_2_1_convulsiones_tratamiento").value = "";

            // Epilepsia
            document.getElementById("div_4_2_1_epilepsia").style.display = "none";
            document.getElementById("literal_4_2_1_epilepsia_fecha").value = "";
            document.getElementById("literal_4_2_1_epilepsia_tratamiento").value = "";

            // Parálisis
            document.getElementById("div_4_2_1_paralisis").style.display = "none";
            document.getElementById("literal_4_2_1_paralisis_fecha").value = "";
            document.getElementById("literal_4_2_1_paralisis_tratamiento").value = "";

            // Enfermedades Mentales
            document.getElementById("div_4_2_1_enfermedades_mentales").style.display = "none";
            document.getElementById("literal_4_2_1_enfermedades_mentales_fecha").value = "";
            document.getElementById("literal_4_2_1_enfermedades_mentales_tratamiento").value = "";

            // Dolores de Cabeza Severos
            document.getElementById("div_4_2_1_dolores_cabeza").style.display = "none";
            document.getElementById("literal_4_2_1_dolores_cabeza_fecha").value = "";
            document.getElementById("literal_4_2_1_dolores_cabeza_tratamiento").value = "";

            // Jaquecas
            document.getElementById("div_4_2_1_jaquecas").style.display = "none";
            document.getElementById("literal_4_2_1_jaquecas_fecha").value = "";
            document.getElementById("literal_4_2_1_jaquecas_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_1_vertigos(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_1_vertigos").style.display = "flex";
        } else {
            document.getElementById("div_4_2_1_vertigos").style.display = "none";

            document.getElementById("literal_4_2_1_vertigos_fecha").value = "";
            document.getElementById("literal_4_2_1_vertigos_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_1_convulsiones(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_1_convulsiones").style.display = "flex";
        } else {
            document.getElementById("div_4_2_1_convulsiones").style.display = "none";

            document.getElementById("literal_4_2_1_convulsiones_fecha").value = "";
            document.getElementById("literal_4_2_1_convulsiones_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_1_epilepsia(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_1_epilepsia").style.display = "flex";
        } else {
            document.getElementById("div_4_2_1_epilepsia").style.display = "none";

            document.getElementById("literal_4_2_1_epilepsia_fecha").value = "";
            document.getElementById("literal_4_2_1_epilepsia_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_1_paralisis(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_1_paralisis").style.display = "flex";
        } else {
            document.getElementById("div_4_2_1_paralisis").style.display = "none";

            document.getElementById("literal_4_2_1_paralisis_fecha").value = "";
            document.getElementById("literal_4_2_1_paralisis_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_1_enfermedades_mentales(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_1_enfermedades_mentales").style.display = "flex";
        } else {
            document.getElementById("div_4_2_1_enfermedades_mentales").style.display = "none";

            document.getElementById("literal_4_2_1_enfermedades_mentales_fecha").value = "";
            document.getElementById("literal_4_2_1_enfermedades_mentales_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_1_dolores_cabeza(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_1_dolores_cabeza").style.display = "flex";
        } else {
            document.getElementById("div_4_2_1_dolores_cabeza").style.display = "none";

            document.getElementById("literal_4_2_1_dolores_cabeza_fecha").value = "";
            document.getElementById("literal_4_2_1_dolores_cabeza_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_1_jaquecas(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_1_jaquecas").style.display = "flex";
        } else {
            document.getElementById("div_4_2_1_jaquecas").style.display = "none";

            document.getElementById("literal_4_2_1_jaquecas_fecha").value = "";
            document.getElementById("literal_4_2_1_jaquecas_tratamiento").value = "";
        }
        handleChange(event);
    }
    //SECCIÓN 4.2.2
    function habilitar_literal_4_2_2(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_2_2").style.display = "flex";
            setIsChecked_TosCronica(true);
            setIsChecked_Enfisema(true);
            setIsChecked_CansancioCaminar(true);
            setIsChecked_Pulmones(true);
        } else {
            document.getElementById("div_4_2_2").style.display = "none";

            document.getElementById("literal_4_2_2_tos_cronica").checked = false;
            document.getElementById("literal_4_2_2_enfisema").checked = false;
            document.getElementById("literal_4_2_2_cansancio_caminar").checked = false;
            document.getElementById("literal_4_2_2_pulmones").checked = false;

            userData.literal_4_2_2_tos_cronica = "false";
            userData.literal_4_2_2_enfisema = "false";
            userData.literal_4_2_2_cansancio_caminar = "false";
            userData.literal_4_2_2_pulmones = "false";

            setIsChecked_TosCronica(true);
            setIsChecked_Enfisema(true);
            setIsChecked_CansancioCaminar(true);
            setIsChecked_Pulmones(true);

            // Tos Crónica
            document.getElementById("div_4_2_2_tos_cronica").style.display = "none";
            document.getElementById("literal_4_2_2_tos_cronica_fecha").value = "";
            document.getElementById("literal_4_2_2_tos_cronica_tratamiento").value = "";

            // Enfisema
            document.getElementById("div_4_2_2_enfisema").style.display = "none";
            document.getElementById("literal_4_2_2_enfisema_fecha").value = "";
            document.getElementById("literal_4_2_2_enfisema_tratamiento").value = "";

            // Cansancio al Caminar
            document.getElementById("div_4_2_2_cansancio_caminar").style.display = "none";
            document.getElementById("literal_4_2_2_cansancio_caminar_fecha").value = "";
            document.getElementById("literal_4_2_2_cansancio_caminar_tratamiento").value = "";

            // Enfermedad de los pulmones o sistema respiratorio
            document.getElementById("div_4_2_2_pulmones").style.display = "none";
            document.getElementById("literal_4_2_2_pulmones_fecha").value = "";
            document.getElementById("literal_4_2_2_pulmones_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_2_tos_cronica(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_2_tos_cronica").style.display = "flex";
        } else {
            document.getElementById("div_4_2_2_tos_cronica").style.display = "none";

            document.getElementById("literal_4_2_2_tos_cronica_fecha").value = "";
            document.getElementById("literal_4_2_2_tos_cronica_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_2_enfisema(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_2_enfisema").style.display = "flex";
        } else {
            document.getElementById("div_4_2_2_enfisema").style.display = "none";

            document.getElementById("literal_4_2_2_enfisema_fecha").value = "";
            document.getElementById("literal_4_2_2_enfisema_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_2_cansancio_caminar(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_2_cansancio_caminar").style.display = "flex";
        } else {
            document.getElementById("div_4_2_2_cansancio_caminar").style.display = "none";

            document.getElementById("literal_4_2_2_cansancio_caminar_fecha").value = "";
            document.getElementById("literal_4_2_2_cansancio_caminar_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_2_pulmones(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_2_pulmones").style.display = "flex";
        } else {
            document.getElementById("div_4_2_2_pulmones").style.display = "none";

            document.getElementById("literal_4_2_2_pulmones_fecha").value = "";
            document.getElementById("literal_4_2_2_pulmones_tratamiento").value = "";
        }
        handleChange(event);
    }
    //SECCIÓN 4.2.3
    function habilitar_literal_4_2_3(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_2_3").style.display = "flex";
            setIsChecked_PresionAlta(true);
            setIsChecked_SoplosCorazon(true);
            setIsChecked_Arritmias(true);
            setIsChecked_EnfermedadCorazon(true);
        } else {
            document.getElementById("div_4_2_3").style.display = "none";

            document.getElementById("literal_4_2_3_presion_alta").checked = false;
            document.getElementById("literal_4_2_3_soplos_corazon").checked = false;
            document.getElementById("literal_4_2_3_arritmias").checked = false;
            document.getElementById("literal_4_2_3_enfermedad_corazon").checked = false;

            userData.literal_4_2_3_presion_alta = "false";
            userData.literal_4_2_3_soplos_corazon = "false";
            userData.literal_4_2_3_arritmias = "false";
            userData.literal_4_2_3_enfermedad_corazon = "false";

            setIsChecked_PresionAlta(true);
            setIsChecked_SoplosCorazon(true);
            setIsChecked_Arritmias(true);
            setIsChecked_EnfermedadCorazon(true);

            // Presión Alta
            document.getElementById("div_4_2_3_presion_alta").style.display = "none";
            document.getElementById("literal_4_2_3_presion_alta_fecha").value = "";
            document.getElementById("literal_4_2_3_presion_alta_tratamiento").value = "";

            // Soplos en el Corazón
            document.getElementById("div_4_2_3_soplos_corazon").style.display = "none";
            document.getElementById("literal_4_2_3_soplos_corazon_fecha").value = "";
            document.getElementById("literal_4_2_3_soplos_corazon_tratamiento").value = "";

            // Arritmias
            document.getElementById("div_4_2_3_arritmias").style.display = "none";
            document.getElementById("literal_4_2_3_arritmias_fecha").value = "";
            document.getElementById("literal_4_2_3_arritmias_tratamiento").value = "";

            // Otra Enfermedad del Corazón
            document.getElementById("div_4_2_3_enfermedad_corazon").style.display = "none";
            document.getElementById("literal_4_2_3_enfermedad_corazon_fecha").value = "";
            document.getElementById("literal_4_2_3_enfermedad_corazon_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_3_presion_alta(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_3_presion_alta").style.display = "flex";
        } else {
            document.getElementById("div_4_2_3_presion_alta").style.display = "none";

            document.getElementById("literal_4_2_3_presion_alta_fecha").value = "";
            document.getElementById("literal_4_2_3_presion_alta_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_3_soplos_corazon(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_3_soplos_corazon").style.display = "flex";
        } else {
            document.getElementById("div_4_2_3_soplos_corazon").style.display = "none";

            document.getElementById("literal_4_2_3_soplos_corazon_fecha").value = "";
            document.getElementById("literal_4_2_3_soplos_corazon_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_3_arritmias(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_3_arritmias").style.display = "flex";
        } else {
            document.getElementById("div_4_2_3_arritmias").style.display = "none";

            document.getElementById("literal_4_2_3_arritmias_fecha").value = "";
            document.getElementById("literal_4_2_3_arritmias_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_3_enfermedad_corazon(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_3_enfermedad_corazon").style.display = "flex";
        } else {
            document.getElementById("div_4_2_3_enfermedad_corazon").style.display = "none";

            document.getElementById("literal_4_2_3_enfermedad_corazon_fecha").value = "";
            document.getElementById("literal_4_2_3_enfermedad_corazon_tratamiento").value = "";
        }
        handleChange(event);
    }
    //SECCIÓN 4.2.4
    function habilitar_literal_4_2_4(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_2_4").style.display = "flex";
            setIsChecked_CalculoRinion(true);
            setIsChecked_CalculoProstata(true);
            setIsChecked_CalculoUrinarias(true);
            setIsChecked_EnfermedadVejiga(true);
        } else {
            document.getElementById("div_4_2_4").style.display = "none";

            document.getElementById("literal_4_2_4_calculo_rinion").checked = false;
            document.getElementById("literal_4_2_4_calculo_prostata").checked = false;
            document.getElementById("literal_4_2_4_calculo_urinarias").checked = false;
            document.getElementById("literal_4_2_4_enfermedad_vejiga").checked = false;

            userData.literal_4_2_4_calculo_rinion = "false";
            userData.literal_4_2_4_calculo_prostata = "false";
            userData.literal_4_2_4_calculo_urinarias = "false";
            userData.literal_4_2_4_enfermedad_vejiga = "false";

            setIsChecked_CalculoRinion(true);
            setIsChecked_CalculoProstata(true);
            setIsChecked_CalculoUrinarias(true);
            setIsChecked_EnfermedadVejiga(true);

            // Cálculo en Riñón
            document.getElementById("div_4_2_4_calculo_rinion").style.display = "none";
            document.getElementById("literal_4_2_4_calculo_rinion_fecha").value = "";
            document.getElementById("literal_4_2_4_calculo_rinion_tratamiento").value = "";

            // Cálculo en Próstata
            document.getElementById("div_4_2_4_calculo_prostata").style.display = "none";
            document.getElementById("literal_4_2_4_calculo_prostata_fecha").value = "";
            document.getElementById("literal_4_2_4_calculo_prostata_tratamiento").value = "";

            // Cálculo en Vías Urinarias
            document.getElementById("div_4_2_4_calculo_urinarias").style.display = "none";
            document.getElementById("literal_4_2_4_calculo_urinarias_fecha").value = "";
            document.getElementById("literal_4_2_4_calculo_urinarias_tratamiento").value = "";

            // Enfermedad Relacionada a la Vejiga y Vías Urinarias
            document.getElementById("div_4_2_4_enfermedad_vejiga").style.display = "none";
            document.getElementById("literal_4_2_4_enfermedad_vejiga_fecha").value = "";
            document.getElementById("literal_4_2_4_enfermedad_vejiga_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_4_calculo_rinion(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_4_calculo_rinion").style.display = "flex";
        } else {
            document.getElementById("div_4_2_4_calculo_rinion").style.display = "none";

            document.getElementById("literal_4_2_4_calculo_rinion_fecha").value = "";
            document.getElementById("literal_4_2_4_calculo_rinion_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_4_calculo_prostata(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_4_calculo_prostata").style.display = "flex";
        } else {
            document.getElementById("div_4_2_4_calculo_prostata").style.display = "none";

            document.getElementById("literal_4_2_4_calculo_prostata_fecha").value = "";
            document.getElementById("literal_4_2_4_calculo_prostata_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_4_calculo_urinarias(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_4_calculo_urinarias").style.display = "flex";
        } else {
            document.getElementById("div_4_2_4_calculo_urinarias").style.display = "none";

            document.getElementById("literal_4_2_4_calculo_urinarias_fecha").value = "";
            document.getElementById("literal_4_2_4_calculo_urinarias_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_4_enfermedad_vejiga(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_4_enfermedad_vejiga").style.display = "flex";
        } else {
            document.getElementById("div_4_2_4_enfermedad_vejiga").style.display = "none";

            document.getElementById("literal_4_2_4_enfermedad_vejiga_fecha").value = "";
            document.getElementById("literal_4_2_4_enfermedad_vejiga_tratamiento").value = "";
        }
        handleChange(event);
    }
    //SECCIÓN 4.2.5
    function habilitar_literal_4_2_5(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_2_5").style.display = "flex";
            setIsChecked_Artritis(true);
            setIsChecked_Reumatismo(true);
            setIsChecked_Columna(true);
            setIsChecked_Huesos(true);
            setIsChecked_Musculos(true);
            setIsChecked_Extremidades(true);
            setIsChecked_Articulaciones(true);
        } else {
            document.getElementById("div_4_2_5").style.display = "none";

            document.getElementById("literal_4_2_5_artritis").checked = false;
            document.getElementById("literal_4_2_5_reumatismo").checked = false;
            document.getElementById("literal_4_2_5_columna").checked = false;
            document.getElementById("literal_4_2_5_huesos").checked = false;
            document.getElementById("literal_4_2_5_musculos").checked = false;
            document.getElementById("literal_4_2_5_extremidades").checked = false;
            document.getElementById("literal_4_2_5_articulaciones").checked = false;

            userData.literal_4_2_5_artritis = "false";
            userData.literal_4_2_5_reumatismo = "false";
            userData.literal_4_2_5_columna = "false";
            userData.literal_4_2_5_huesos = "false";
            userData.literal_4_2_5_musculos = "false";
            userData.literal_4_2_5_extremidades = "false";
            userData.literal_4_2_5_articulaciones = "false";

            setIsChecked_Artritis(true);
            setIsChecked_Reumatismo(true);
            setIsChecked_Columna(true);
            setIsChecked_Huesos(true);
            setIsChecked_Musculos(true);
            setIsChecked_Extremidades(true);
            setIsChecked_Articulaciones(true);

            // Articulaciones
            document.getElementById("div_4_2_5_artritis").style.display = "none";
            document.getElementById("literal_4_2_5_artritis_fecha").value = "";
            document.getElementById("literal_4_2_5_artritis_tratamiento").value = "";

            // Reumatismo
            document.getElementById("div_4_2_5_reumatismo").style.display = "none";
            document.getElementById("literal_4_2_5_reumatismo_fecha").value = "";
            document.getElementById("literal_4_2_5_reumatismo_tratamiento").value = "";

            // Columna
            document.getElementById("div_4_2_5_columna").style.display = "none";
            document.getElementById("literal_4_2_5_columna_fecha").value = "";
            document.getElementById("literal_4_2_5_columna_tratamiento").value = "";

            // Huesos
            document.getElementById("div_4_2_5_huesos").style.display = "none";
            document.getElementById("literal_4_2_5_huesos_fecha").value = "";
            document.getElementById("literal_4_2_5_huesos_tratamiento").value = "";

            // Músculos
            document.getElementById("div_4_2_5_musculos").style.display = "none";
            document.getElementById("literal_4_2_5_musculos_fecha").value = "";
            document.getElementById("literal_4_2_5_musculos_tratamiento").value = "";

            // Extremidades
            document.getElementById("div_4_2_5_extremidades").style.display = "none";
            document.getElementById("literal_4_2_5_extremidades_fecha").value = "";
            document.getElementById("literal_4_2_5_extremidades_tratamiento").value = "";

            // Enfermedad relacionada con articulaciones
            document.getElementById("div_4_2_5_articulaciones").style.display = "none";
            document.getElementById("literal_4_2_5_articulaciones_fecha").value = "";
            document.getElementById("literal_4_2_5_articulaciones_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_5_artritis(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_5_artritis").style.display = "flex";
        } else {
            document.getElementById("div_4_2_5_artritis").style.display = "none";

            document.getElementById("literal_4_2_5_artritis_fecha").value = "";
            document.getElementById("literal_4_2_5_artritis_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_5_reumatismo(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_5_reumatismo").style.display = "flex";
        } else {
            document.getElementById("div_4_2_5_reumatismo").style.display = "none";

            document.getElementById("literal_4_2_5_reumatismo_fecha").value = "";
            document.getElementById("literal_4_2_5_reumatismo_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_5_columna(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_5_columna").style.display = "flex";
        } else {
            document.getElementById("div_4_2_5_columna").style.display = "none";

            document.getElementById("literal_4_2_5_columna_fecha").value = "";
            document.getElementById("literal_4_2_5_columna_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_5_huesos(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_5_huesos").style.display = "flex";
        } else {
            document.getElementById("div_4_2_5_huesos").style.display = "none";

            document.getElementById("literal_4_2_5_huesos_fecha").value = "";
            document.getElementById("literal_4_2_5_huesos_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_5_musculos(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_5_musculos").style.display = "flex";
        } else {
            document.getElementById("div_4_2_5_musculos").style.display = "none";

            document.getElementById("literal_4_2_5_musculos_fecha").value = "";
            document.getElementById("literal_4_2_5_musculos_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_5_extremidades(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_5_extremidades").style.display = "flex";
        } else {
            document.getElementById("div_4_2_5_extremidades").style.display = "none";

            document.getElementById("literal_4_2_5_extremidades_fecha").value = "";
            document.getElementById("literal_4_2_5_extremidades_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_5_articulaciones(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_5_articulaciones").style.display = "flex";
        } else {
            document.getElementById("div_4_2_5_articulaciones").style.display = "none";

            document.getElementById("literal_4_2_5_articulaciones_fecha").value = "";
            document.getElementById("literal_4_2_5_articulaciones_tratamiento").value = "";
        }
        handleChange(event);
    }
    //SECCIÓN 4.2.6
    function habilitar_literal_4_2_6(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_2_6").style.display = "flex";
            setIsChecked_Hemofilia(true);
            setIsChecked_AlteracionesCoagulacion(true);
            setIsChecked_HemorragiasPersistentes(true);
            setIsChecked_EnfermedadSangre(true);
        } else {
            document.getElementById("div_4_2_6").style.display = "none";

            document.getElementById("literal_4_2_6_hemofilia").checked = false;
            document.getElementById("literal_4_2_6_alteraciones_coagulacion").checked = false;
            document.getElementById("literal_4_2_6_hemorragias_persistentes").checked = false;
            document.getElementById("literal_4_2_6_enfermedad_sangre").checked = false;

            userData.literal_4_2_6_hemofilia = "false";
            userData.literal_4_2_6_alteraciones_coagulacion = "false";
            userData.literal_4_2_6_hemorragias_persistentes = "false";
            userData.literal_4_2_6_enfermedad_sangre = "false";

            setIsChecked_Hemofilia(true);
            setIsChecked_AlteracionesCoagulacion(true);
            setIsChecked_HemorragiasPersistentes(true);
            setIsChecked_EnfermedadSangre(true);

            // Hemofilia
            document.getElementById("div_4_2_6_hemofilia").style.display = "none";
            document.getElementById("literal_4_2_6_hemofilia_fecha").value = "";
            document.getElementById("literal_4_2_6_hemofilia_tratamiento").value = "";

            // Alteraciones de Coagulación
            document.getElementById("div_4_2_6_alteraciones_coagulacion").style.display = "none";
            document.getElementById("literal_4_2_6_alteraciones_coagulacion_fecha").value = "";
            document.getElementById("literal_4_2_6_alteraciones_coagulacion_tratamiento").value = "";

            // Hemorragias Persistentes
            document.getElementById("div_4_2_6_hemorragias_persistentes").style.display = "none";
            document.getElementById("literal_4_2_6_hemorragias_persistentes_fecha").value = "";
            document.getElementById("literal_4_2_6_hemorragias_persistentes_tratamiento").value = "";

            // Enfermedad de la Sangre
            document.getElementById("div_4_2_6_enfermedad_sangre").style.display = "none";
            document.getElementById("literal_4_2_6_enfermedad_sangre_fecha").value = "";
            document.getElementById("literal_4_2_6_enfermedad_sangre_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_6_hemofilia(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_6_hemofilia").style.display = "flex";
        } else {
            document.getElementById("div_4_2_6_hemofilia").style.display = "none";

            document.getElementById("literal_4_2_6_hemofilia_fecha").value = "";
            document.getElementById("literal_4_2_6_hemofilia_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_6_alteraciones_coagulacion(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_6_alteraciones_coagulacion").style.display = "flex";
        } else {
            document.getElementById("div_4_2_6_alteraciones_coagulacion").style.display = "none";

            document.getElementById("literal_4_2_6_alteraciones_coagulacion_fecha").value = "";
            document.getElementById("literal_4_2_6_alteraciones_coagulacion_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_6_hemorragias_persistentes(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_6_hemorragias_persistentes").style.display = "flex";
        } else {
            document.getElementById("div_4_2_6_hemorragias_persistentes").style.display = "none";

            document.getElementById("literal_4_2_6_hemorragias_persistentes_fecha").value = "";
            document.getElementById("literal_4_2_6_hemorragias_persistentes_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_6_enfermedad_sangre(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_6_enfermedad_sangre").style.display = "flex";
        } else {
            document.getElementById("div_4_2_6_enfermedad_sangre").style.display = "none";

            document.getElementById("literal_4_2_6_enfermedad_sangre_fecha").value = "";
            document.getElementById("literal_4_2_6_enfermedad_sangre_tratamiento").value = "";
        }
        handleChange(event);
    }
    //SECCIÓN 4.2.7
    function habilitar_literal_4_2_7(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_2_7").style.display = "flex";
            setIsChecked_Bocio(true);
            setIsChecked_ColesterolElevado(true);
            setIsChecked_EnfermedadGlandulas(true);
        } else {
            document.getElementById("div_4_2_7").style.display = "none";

            document.getElementById("literal_4_2_7_bocio").checked = false;
            document.getElementById("literal_4_2_7_colesterol_elevado").checked = false;
            document.getElementById("literal_4_2_7_enfermedad_glandulas").checked = false;

            userData.literal_4_2_7_bocio = "false";
            userData.literal_4_2_7_colesterol_elevado = "false";
            userData.literal_4_2_7_enfermedad_glandulas = "false";

            setIsChecked_Bocio(true);
            setIsChecked_ColesterolElevado(true);
            setIsChecked_EnfermedadGlandulas(true);

            // Bocio
            document.getElementById("div_4_2_7_bocio").style.display = "none";
            document.getElementById("literal_4_2_7_bocio_fecha").value = "";
            document.getElementById("literal_4_2_7_bocio_tratamiento").value = "";

            // Colesterol Elevado
            document.getElementById("div_4_2_7_colesterol_elevado").style.display = "none";
            document.getElementById("literal_4_2_7_colesterol_elevado_fecha").value = "";
            document.getElementById("literal_4_2_7_colesterol_elevado_tratamiento").value = "";

            // Enfermedad de las Glándulas Endocrinas
            document.getElementById("div_4_2_7_enfermedad_glandulas").style.display = "none";
            document.getElementById("literal_4_2_7_enfermedad_glandulas_fecha").value = "";
            document.getElementById("literal_4_2_7_enfermedad_glandulas_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_7_bocio(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_7_bocio").style.display = "flex";
        } else {
            document.getElementById("div_4_2_7_bocio").style.display = "none";

            document.getElementById("literal_4_2_7_bocio_fecha").value = "";
            document.getElementById("literal_4_2_7_bocio_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_7_colesterol_elevado(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_7_colesterol_elevado").style.display = "flex";
        } else {
            document.getElementById("div_4_2_7_colesterol_elevado").style.display = "none";

            document.getElementById("literal_4_2_7_colesterol_elevado_fecha").value = "";
            document.getElementById("literal_4_2_7_colesterol_elevado_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_7_enfermedad_glandulas(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_7_enfermedad_glandulas").style.display = "flex";
        } else {
            document.getElementById("div_4_2_7_enfermedad_glandulas").style.display = "none";

            document.getElementById("literal_4_2_7_enfermedad_glandulas_fecha").value = "";
            document.getElementById("literal_4_2_7_enfermedad_glandulas_tratamiento").value = "";
        }
        handleChange(event);
    }
    //SECCIÓN 4.2.8
    function habilitar_literal_4_2_8(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_2_8").style.display = "flex";
            setIsChecked_Cancer(true);
            setIsChecked_Quistes(true);
            setIsChecked_Ulceras(true);
            setIsChecked_Hernias(true);
        } else {
            document.getElementById("div_4_2_8").style.display = "none";

            document.getElementById("literal_4_2_8_cancer").checked = false;
            document.getElementById("literal_4_2_8_quistes").checked = false;
            document.getElementById("literal_4_2_8_ulceras").checked = false;
            document.getElementById("literal_4_2_8_hernias").checked = false;

            userData.literal_4_2_8_cancer = "false";
            userData.literal_4_2_8_quistes = "false";
            userData.literal_4_2_8_ulceras = "false";
            userData.literal_4_2_8_hernias = "false";

            setIsChecked_Cancer(true);
            setIsChecked_Quistes(true);
            setIsChecked_Ulceras(true);
            setIsChecked_Hernias(true);

            // Cáncer
            document.getElementById("div_4_2_8_cancer").style.display = "none";
            document.getElementById("literal_4_2_8_cancer_fecha").value = "";
            document.getElementById("literal_4_2_8_cancer_tratamiento").value = "";

            // Quistes
            document.getElementById("div_4_2_8_quistes").style.display = "none";
            document.getElementById("literal_4_2_8_quistes_fecha").value = "";
            document.getElementById("literal_4_2_8_quistes_tratamiento").value = "";

            // ülceras varicosas u otras enferemdades de igual naturaleza
            document.getElementById("div_4_2_8_ulceras").style.display = "none";
            document.getElementById("literal_4_2_8_ulceras_fecha").value = "";
            document.getElementById("literal_4_2_8_ulceras_tratamiento").value = "";

            // Hernias de cualquier tipo
            document.getElementById("div_4_2_8_hernias").style.display = "none";
            document.getElementById("literal_4_2_8_hernias_fecha").value = "";
            document.getElementById("literal_4_2_8_hernias_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_8_cancer(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_8_cancer").style.display = "flex";
        } else {
            document.getElementById("div_4_2_8_cancer").style.display = "none";

            document.getElementById("literal_4_2_8_cancer_fecha").value = "";
            document.getElementById("literal_4_2_8_cancer_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_8_quistes(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_8_quistes").style.display = "flex";
        } else {
            document.getElementById("div_4_2_8_quistes").style.display = "none";

            document.getElementById("literal_4_2_8_quistes_fecha").value = "";
            document.getElementById("literal_4_2_8_quistes_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_8_ulceras(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_8_ulceras").style.display = "flex";
        } else {
            document.getElementById("div_4_2_8_ulceras").style.display = "none";

            document.getElementById("literal_4_2_8_ulceras_fecha").value = "";
            document.getElementById("literal_4_2_8_ulceras_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_2_8_hernias(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_2_8_hernias").style.display = "flex";
        } else {
            document.getElementById("div_4_2_8_hernias").style.display = "none";

            document.getElementById("literal_4_2_8_hernias_fecha").value = "";
            document.getElementById("literal_4_2_8_hernias_tratamiento").value = "";
        }
        handleChange(event);
    }
    //SECCIÓN 4.2.10
    function habilitar_literal_4_2_10(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_2_10").style.display = "flex";
        } else {
            document.getElementById("div_4_2_10").style.display = "none";
            document.getElementById("literal_4_2_10_fecha").value = "";
            document.getElementById("literal_4_2_10_resultado").value = "-1";
        }
        handleChange(event);
    }

    /*************** APARTADO 4.3 ***************/
    function habilitar_literal_4_3(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_3").style.display = "flex";
            setIsChecked_Constitucion(true);
            setIsChecked_Deformacion(true);
            setIsChecked_Amputacion(true);
            setIsChecked_DefectoFisico(true);
        } else {
            document.getElementById("div_4_3").style.display = "none";

            document.getElementById("literal_4_3_constitucion").checked = false;
            document.getElementById("literal_4_3_deformacion").checked = false;
            document.getElementById("literal_4_3_amputacion").checked = false;
            document.getElementById("literal_4_3_defecto_fisico").checked = false;

            userData.literal_4_3_constitucion = "false";
            userData.literal_4_3_deformacion = "false";
            userData.literal_4_3_amputacion = "false";
            userData.literal_4_3_defecto_fisico = "false";

            setIsChecked_Constitucion(true);
            setIsChecked_Deformacion(true);
            setIsChecked_Amputacion(true);
            setIsChecked_DefectoFisico(true);

            // Constitución
            document.getElementById("div_4_3_constitucion").style.display = "none";
            document.getElementById("literal_4_3_constitucion_fecha").value = "";
            document.getElementById("literal_4_3_constitucion_tratamiento").value = "";

            // Deformación
            document.getElementById("div_4_3_deformacion").style.display = "none";
            document.getElementById("literal_4_3_deformacion_fecha").value = "";
            document.getElementById("literal_4_3_deformacion_tratamiento").value = "";

            // Amputación
            document.getElementById("div_4_3_amputacion").style.display = "none";
            document.getElementById("literal_4_3_amputacion_fecha").value = "";
            document.getElementById("literal_4_3_amputacion_tratamiento").value = "";

            // Otro Defecto Físico
            document.getElementById("div_4_3_defecto_fisico").style.display = "none";
            document.getElementById("literal_4_3_defecto_fisico_fecha").value = "";
            document.getElementById("literal_4_3_defecto_fisico_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_3_constitucion(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_3_constitucion").style.display = "flex";
        } else {
            document.getElementById("div_4_3_constitucion").style.display = "none";

            document.getElementById("literal_4_3_constitucion_fecha").value = "";
            document.getElementById("literal_4_3_constitucion_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_3_deformacion(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_3_deformacion").style.display = "flex";
        } else {
            document.getElementById("div_4_3_deformacion").style.display = "none";

            document.getElementById("literal_4_3_deformacion_fecha").value = "";
            document.getElementById("literal_4_3_deformacion_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_3_amputacion(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_3_amputacion").style.display = "flex";
        } else {
            document.getElementById("div_4_3_amputacion").style.display = "none";

            document.getElementById("literal_4_3_amputacion_fecha").value = "";
            document.getElementById("literal_4_3_amputacion_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_3_defecto_fisico(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_3_defecto_fisico").style.display = "flex";
        } else {
            document.getElementById("div_4_3_defecto_fisico").style.display = "none";

            document.getElementById("literal_4_3_defecto_fisico_fecha").value = "";
            document.getElementById("literal_4_3_defecto_fisico_tratamiento").value = "";
        }
        handleChange(event);
    }

    /*************** APARTADO 4.4 ***************/
    function habilitar_literal_4_4(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_4").style.display = "flex";
            setIsChecked_Enfermedad(true);
            setIsChecked_Lesion(true);
        } else {
            document.getElementById("div_4_4").style.display = "none";

            document.getElementById("literal_4_4_enfermedad").checked = false;
            document.getElementById("literal_4_4_lesion").checked = false;

            userData.literal_4_4_enfermedad = "false";
            userData.literal_4_4_lesion = "false";

            setIsChecked_Enfermedad(true);
            setIsChecked_Lesion(true);

            // Enfermedad
            document.getElementById("div_4_4_enfermedad").style.display = "none";
            document.getElementById("literal_4_4_enfermedad_fecha").value = "";
            document.getElementById("literal_4_4_enfermedad_tratamiento").value = "";

            // Lesion
            document.getElementById("div_4_4_lesion").style.display = "none";
            document.getElementById("literal_4_4_lesion_fecha").value = "";
            document.getElementById("literal_4_4_lesion_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_4_enfermedad(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_4_enfermedad").style.display = "flex";
        } else {
            document.getElementById("div_4_4_enfermedad").style.display = "none";

            document.getElementById("literal_4_4_enfermedad_fecha").value = "";
            document.getElementById("literal_4_4_enfermedad_tratamiento").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_4_lesion(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_4_lesion").style.display = "flex";
        } else {
            document.getElementById("div_4_4_lesion").style.display = "none";

            document.getElementById("literal_4_4_lesion_fecha").value = "";
            document.getElementById("literal_4_4_lesion_tratamiento").value = "";
        }
        handleChange(event);
    }

    /*************** APARTADO 4.5 ***************/
    //SECCIÓN 4.5.1
    function habilitar_literal_4_5_1(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_5_1").style.display = "flex";
        } else {
            document.getElementById("div_4_5_1").style.display = "none";
            document.getElementById("label_4_5_1_riesgos_embarazo").style.display = "none";
            document.getElementById("literal_4_5_1_problemas_embarazo_si").checked = false;
            document.getElementById("literal_4_5_1_problemas_embarazo_no").checked = false;

            document.getElementById("literal_4_5_1_meses_embarazo").value = "";
            document.getElementById("literal_4_5_1_riesgos_embarazo").value = "-1";
        }
        handleChange(event);
    }
    function habilitar_literal_4_5_1_riesgos_embarazo(event) {
        const entrada = event.target.value;
        if (entrada === "No") {
            document.getElementById("label_4_5_1_riesgos_embarazo").style.display = "flex";
        } else {
            document.getElementById("label_4_5_1_riesgos_embarazo").style.display = "none";
            document.getElementById("literal_4_5_1_riesgos_embarazo").value = "-1";
        }
        handleChange(event);
    }
    //SECCIÓN 4.5.2
    function habilitar_literal_4_5_2(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_5_2").style.display = "flex";
            setIsChecked_Partos(true);
            setIsChecked_Cesareas(true);
        } else {
            document.getElementById("div_4_5_2").style.display = "none";

            document.getElementById("literal_4_5_2_partos").checked = false;
            document.getElementById("literal_4_5_2_cesareas").checked = false;

            userData.literal_4_5_2_partos = "false";
            userData.literal_4_5_2_cesareas = "false";

            setIsChecked_Partos(true);
            setIsChecked_Cesareas(true);

            // Partos Normales
            document.getElementById("div_4_5_2_partos").style.display = "none";
            document.getElementById("literal_4_5_2_partos_uno").checked = false;
            document.getElementById("literal_4_5_2_partos_dos").checked = false;
            document.getElementById("literal_4_5_2_partos_tres").checked = false;
            document.getElementById("literal_4_5_2_partos_mayor_tres").checked = false;
            document.getElementById("literal_4_5_2_ultimo_parto_fecha").value = "";

            // Cesáreas
            document.getElementById("div_4_5_2_cesareas").style.display = "none";
            document.getElementById("literal_4_5_2_cesareas_uno").checked = false;
            document.getElementById("literal_4_5_2_cesareas_dos").checked = false;
            document.getElementById("literal_4_5_2_cesareas_tres").checked = false;
            document.getElementById("literal_4_5_2_cesareas_mayor_tres").checked = false;
            document.getElementById("literal_4_5_2_ultima_cesarea_fecha").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_5_2_partos(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_5_2_partos").style.display = "flex";
        } else {
            document.getElementById("div_4_5_2_partos").style.display = "none";
            document.getElementById("literal_4_5_2_partos_uno").checked = false;
            document.getElementById("literal_4_5_2_partos_dos").checked = false;
            document.getElementById("literal_4_5_2_partos_tres").checked = false;
            document.getElementById("literal_4_5_2_partos_mayor_tres").checked = false;
            document.getElementById("literal_4_5_2_ultimo_parto_fecha").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_5_2_cesareas(event) {
        const entrada = event.target.value;
        if (entrada === "true") {
            document.getElementById("div_4_5_2_cesareas").style.display = "flex";
        } else {
            document.getElementById("div_4_5_2_cesareas").style.display = "none";
            document.getElementById("literal_4_5_2_cesareas_uno").checked = false;
            document.getElementById("literal_4_5_2_cesareas_dos").checked = false;
            document.getElementById("literal_4_5_2_cesareas_tres").checked = false;
            document.getElementById("literal_4_5_2_cesareas_mayor_tres").checked = false;
            document.getElementById("literal_4_5_2_ultima_cesarea_fecha").value = "";
        }
        handleChange(event);
    }
    //SECCIÓN 4.5.3
    function habilitar_literal_4_5_3(event) {
        const entrada = event.target.value;
        if (entrada === "Si") {
            document.getElementById("div_4_5_3").style.display = "flex";
        } else {
            document.getElementById("div_4_5_3").style.display = "none";
            document.getElementById("label_4_5_3_resultados_otros_especifique").style.display = "none";
            document.getElementById("literal_4_5_3_resultados").value = "-1";
            document.getElementById("literal_4_5_3_fecha").value = "";
            document.getElementById("literal_4_5_3_resultados_otros_especifique").value = "";
        }
        handleChange(event);
    }
    function habilitar_literal_4_5_3_resultados(event) {
        const entrada = event.target.value;
        if (entrada === "Otros") {
            document.getElementById("label_4_5_3_resultados_otros_especifique").style.display = "flex";
        } else {
            document.getElementById("label_4_5_3_resultados_otros_especifique").style.display = "none";
            document.getElementById("literal_4_5_3_resultados_otros_especifique").value = "";
        }
        validar_literal_4_5_3_resultados(event);
    }

    return <div className='flex flex-col'>
        <h1 className="text-center pl-2 sm:-ml-3 md:-ml-6 text-gray-800 text-base font-bold text-2xl pt-3 md:text-2xl dark:text-gray-100">DECLARACIÓN JURADA DE SALUD</h1>

        <div className="text-justify mt-3">
            {/* APARTADO 4.1 */}
            <div className="text-justify">
                <h3 className="px-3 text-sm mt-3"><b>De acuerdo a su conocimiento:</b></h3>
            </div>
            <div className="px-4 text-sm mt-3">
                {/* SECCIÓN 4.1.1 */}
                <p className="w-3/4 mt-3 text-justify">
                    ¿Tiene contratado algún Seguro nacional o internacional en otra Compañía?
                </p>
                <div className="w-1/4 flex justify-end -my-9 pt-1 -space-x-1 mb-8">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_1_si"
                            name="literal_4_1_1"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_1_1}
                            value={userData["literal_4_1_1_si"] || "Si"}
                            checked={userData.literal_4_1_1 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_1_no"
                            name="literal_4_1_1"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_1_1}
                            value={userData["literal_4_1_1_no"] || "No"}
                            checked={userData.literal_4_1_1 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div className="w-4/4 flex justify-end -my-9 pt-1 -space-x-1 mb-8">
                    <LeyendaError>{msg_literal_4_1_1}</LeyendaError>
                </div>
                <div id="div_4_1_1" className="flex flex-row -mt-9 mb-1 space-x-7" style={{ display: "none" }}>
                    <div className="basis-2/4 md:w-1/2 mb-3 md:mb-0">
                        <Input
                            type="text"
                            color={color_literal_4_1_1_compania}
                            size="regular"
                            id="literal_4_1_1_compania"
                            name="literal_4_1_1_compania"
                            outline={true}
                            placeholder="Compañía"
                            className=""
                            maxLength={20}
                            onChange={validar_literal_4_1_1_compania}
                            value={userData["literal_4_1_1_compania"] || ""}
                        /><LeyendaError>{msg_literal_4_1_1_compania}</LeyendaError>
                    </div>
                    <div className="basis-1/4 md:w-1/2">
                        <Input
                            type="text"
                            color={color_literal_4_1_1_tiempo_servicio}
                            size="regular"
                            id="literal_4_1_1_tiempo_servicio"
                            name="literal_4_1_1_tiempo_servicio"
                            outline={true}
                            placeholder="Tiempo de Servicio"
                            className=""
                            maxLength={20}
                            onChange={validar_literal_4_1_1_tiempo_servicio}
                            value={userData["literal_4_1_1_tiempo_servicio"] || ""}
                        /><LeyendaError>{msg_literal_4_1_1_tiempo_servicio}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.1.2 */}
                <p className="w-3/4 mt-3 text-justify">
                    ¿Tiene usted una exclusión particular o ha sido usted rechazado alguna vez para un seguro de salud o en alguna renovación o rehabilitación del mismo?
                </p>
                <div className="flex justify-end -my-6 -space-x-1 -mt-10 mb-8">
                    <label className="inline-flex px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_2_si"
                            name="literal_4_1_2"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_1_2}
                            value={userData["literal_4_1_2_si"] || "Si"}
                            checked={userData.literal_4_1_2 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_2_no"
                            name="literal_4_1_2"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_1_2}
                            value={userData["literal_4_1_2_no"] || "No"}
                            checked={userData.literal_4_1_2 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div className="w-4/4 flex justify-end -my-9 pt-1 -space-x-1 mb-8">
                    <LeyendaError>{msg_literal_4_1_2}</LeyendaError>
                </div>
                <div id="div_4_1_2" className="flex flex-wrap -mt-9 pt-2 mb-1 space-x-7" style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 mb-3 md:mb-0">
                        <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-500
                            bg-transparent  bg-no-repeat border border-1 border-gray-500 rounded-lg transition ease-in-out
                            m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                            id="literal_4_1_2_motivo_exclusion"
                            name="literal_4_1_2_motivo_exclusion"
                            onChange={habilitar_literal_4_1_2_motivo_exclusion}
                            value={userData["literal_4_1_2_motivo_exclusion"] || ""}
                        >
                            <option value="-1">Motivo de Exclusión</option>
                            <option value="Enfermedad grave">Enfermedad grave</option>
                            <option value="Alta siniestralidad">Alta siniestralidad</option>
                            <option value="Cambio de residencia">Cambio de residencia</option>
                            <option value="Incremento de prima">Incremento de prima</option>
                            <option value="Exclusion">Exclusión</option>
                        </select><LeyendaError>{msg_literal_4_1_2_motivo_exclusion}</LeyendaError>
                    </div>
                    <div id="div_4_1_2_detallar_enfermedad" className="basis-2/4 md:w-1/2" style={{ display: "none" }}>
                        <Input
                            type="text"
                            color={color_literal_4_1_2_detallar_enfermedad}
                            size="regular"
                            id="literal_4_1_2_detallar_enfermedad"
                            name="literal_4_1_2_detallar_enfermedad"
                            outline={true}
                            placeholder="Detallar Enfermedad"
                            className=""
                            maxLength={20}
                            onChange={validar_literal_4_1_2_detallar_enfermedad}
                            value={userData["literal_4_1_2_detallar_enfermedad"] || ""}
                        /><LeyendaError>{msg_literal_4_1_2_detallar_enfermedad}</LeyendaError>
                    </div>
                    <div id="div_4_1_2_detallar_exclusion" className="basis-2/4 md:w-1/2" style={{ display: "none" }}>
                        <Input
                            type="text"
                            color={color_literal_4_1_2_detallar_exclusion}
                            size="regular"
                            id="literal_4_1_2_detallar_exclusion"
                            name="literal_4_1_2_detallar_exclusion"
                            outline={true}
                            placeholder="Detallar Exclusión"
                            className=""
                            maxLength={20}
                            onChange={validar_literal_4_1_2_detallar_exclusion}
                            value={userData["literal_4_1_2_detallar_exclusion"] || ""}
                        /><LeyendaError>{msg_literal_4_1_2_detallar_exclusion}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.1.3 */}
                <p className="w-3/4 mt-3 text-justify">
                    ¿Practica Ud. alguno de los siguientes deportes: Paracaidismo, Andinismo, Montañismo, Alas Delta, Buceo, Carreras de Velocidad (Auto/Moto), Salto Elástico?
                </p>
                <div className="flex justify-end -my-6 -space-x-1 -mt-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_3_si"
                            name="literal_4_1_3"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_1_3}
                            value={userData["literal_4_1_3_si"] || "Si"}
                            checked={userData.literal_4_1_3 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center pr-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_3_no"
                            name="literal_4_1_3"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_1_3}
                            value={userData["literal_4_1_3_no"] || "No"}
                            checked={userData.literal_4_1_3 === "No" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_3_otros"
                            name="literal_4_1_3"
                            className=""
                            placeholder="OT"
                            onChange={habilitar_literal_4_1_3}
                            value={userData["literal_4_1_3_otros"] || "Otros"}
                            checked={userData.literal_4_1_3 === "Otros" ? true : false}
                        />
                    </label>
                </div>
                <div className="w-4/4 flex justify-end -my-6 -space-x-1 mb-1 -ml-4">
                    <LeyendaError>{msg_literal_4_1_3}</LeyendaError>
                </div>
                <div id="div_4_1_3" className="flex flex-wrap mb-1 mt-1" style={{ display: "none" }}>
                    <div className="w-1/3 pr-16 md:w-1/2 mb-3 md:mb-0">
                        <Input
                            type="text"
                            color={color_literal_4_1_3_deporte}
                            size="regular"
                            id="literal_4_1_3_deporte"
                            name="literal_4_1_3_deporte"
                            outline={true}
                            className=""
                            placeholder="Deporte que practica"
                            onChange={validar_literal_4_1_3_deporte}
                            value={userData["literal_4_1_3_deporte"] || ""}
                        /><LeyendaError>{msg_literal_4_1_3_deporte}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.1.4 */}
                <p className="w-3/4 mt-3 text-justify">
                    Indique detalladamente lo siguiente:
                </p>
                <div className="flex flex-row mt-2 space-x-7">
                    <div className="basis-1/4 md:w-1/2 mb-6 md:mb-0">
                        <Input
                            type="text"
                            color={color_literal_4_1_4_estatura}
                            size="regular"
                            name="literal_4_1_4_estatura"
                            outline={true}
                            className=""
                            placeholder="Estatura (mts)"
                            onChange={validar_literal_4_1_4_estatura}
                            value={userData["literal_4_1_4_estatura"] || ""}
                        /><LeyendaError>{msg_literal_4_1_4_estatura}</LeyendaError>
                    </div>
                    <div className="basis-1/4 md:w-1/2">
                        <Input
                            type="text"
                            color={color_literal_4_1_4_peso}
                            size="regular"
                            name="literal_4_1_4_peso"
                            outline={true}
                            className=""
                            placeholder="Peso (kgs)"
                            onChange={validar_literal_4_1_4_peso}
                            value={userData["literal_4_1_4_peso"] || ""}
                        /><LeyendaError>{msg_literal_4_1_4_peso}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.1.5 */}
                <p className="w-3/4 mt-3 text-justify">
                    Su presión arterial es:
                </p>
                <div className="flex justify-left space-x-20 mb-3">
                    <label className="inline-flex items-center px-2">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_5_alta"
                            name="literal_4_1_5"
                            className=""
                            placeholder=""
                            onChange={habilitar_literal_4_1_5}
                            value={userData["literal_4_1_5_alta"] || "Alta"}
                            checked={userData.literal_4_1_5 === "Alta" ? true : false}
                        />
                        <span className="ml-2">Alta</span>
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_5_baja"
                            name="literal_4_1_5"
                            className=""
                            placeholder=""
                            onChange={habilitar_literal_4_1_5}
                            value={userData["literal_4_1_5_baja"] || "Baja"}
                            checked={userData.literal_4_1_5 === "Baja" ? true : false}
                        />
                        <span className="ml-2">Baja</span>
                    </label>
                    <label className="inline-flex items-center px-3">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_5_normal"
                            name="literal_4_1_5"
                            className=""
                            placeholder=""
                            onChange={habilitar_literal_4_1_5}
                            value={userData["literal_4_1_5_normal"] || "Normal"}
                            checked={userData.literal_4_1_5 === "Normal" ? true : false}
                        />
                        <span className="ml-2">Normal</span>
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_5_ignora"
                            name="literal_4_1_5"
                            className=""
                            placeholder=""
                            onChange={habilitar_literal_4_1_5}
                            value={userData["literal_4_1_5_ignora"] || "Ignora"}
                            checked={userData.literal_4_1_5 === "Ignora" ? true : false}
                        />
                        <span className="ml-2">Ignora</span>
                    </label>
                </div><LeyendaError>{msg_literal_4_1_5}</LeyendaError>
                {/* SECCIÓN 4.1.6 */}
                <p className="w-3/4 mt-3 text-justify">
                    ¿Fuma usted?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_6_si"
                            name="literal_4_1_6"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_1_6}
                            value={userData["literal_4_1_6_si"] || "Si"}
                            checked={userData.literal_4_1_6 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_6_no"
                            name="literal_4_1_6"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_1_6}
                            value={userData["literal_4_1_6_no"] || "No"}
                            checked={userData.literal_4_1_6 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div className="w-4/4 flex justify-end -my-10 -space-x-1 mb-10 -ml-4">
                    <LeyendaError>{msg_literal_4_1_6}</LeyendaError>
                </div>
                <div id="div_4_1_6" className='flex flex-row mb-3 -mt-12' style={{ display: "none" }}>
                    <div className="basis-1/3 md:w-1/2 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿Desde cuándo fuma?
                        </label>
                        <div className="flex justify-left my-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_6_tiempo_menor"
                                    name="literal_4_1_6_tiempo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_6_tiempo}
                                    value={userData["literal_4_1_6_tiempo_menor"] || "Menor cinco"}
                                    checked={userData.literal_4_1_6_tiempo === "Menor cinco" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_6_tiempo_menor" className="inline-flex items-center">
                                <span className="ml-4">Menos de 1 año</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_6_tiempo_mayor"
                                    name="literal_4_1_6_tiempo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_6_tiempo}
                                    value={userData["literal_4_1_6_tiempo_mayor"] || "Mayor cinco"}
                                    checked={userData.literal_4_1_6_tiempo === "Mayor cinco" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_6_tiempo_mayor" className="inline-flex items-center">
                                <span className="ml-2">Más de 1 año</span>
                            </label>
                        </div><LeyendaError>{msg_literal_4_1_6_tiempo}</LeyendaError>
                    </div>
                    <div className="basis-2/3 md:w-1/2 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿Cuánto fuma diariamente?
                        </label>
                        <div className="flex justify-left my-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_6_cantidad_menor"
                                    name="literal_4_1_6_cantidad"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_6_cantidad}
                                    value={userData["literal_4_1_6_cantidad_menor"] || "Menor cinco"}
                                    checked={userData.literal_4_1_6_cantidad === "Menor cinco" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_6_cantidad_menor" className="inline-flex items-center">
                                <span className="ml-4">Menos de 5 cigarrillos al día</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_6_cantidad_mayor"
                                    name="literal_4_1_6_cantidad"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_6_cantidad}
                                    value={userData["literal_4_1_6_cantidad_mayor"] || "Mayor cinco"}
                                    checked={userData.literal_4_1_6_cantidad === "Mayor cinco" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_6_cantidad_mayor" className="inline-flex items-center">
                                <span className="ml-2">Más de 5 cigarrillos al día</span>
                            </label>
                        </div><LeyendaError>{msg_literal_4_1_6_cantidad}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.1.7 */}
                <p className="w-3/4 mt-3 text-justify">
                    ¿Dejó de fumar?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_7_si"
                            name="literal_4_1_7"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_1_7}
                            value={userData["literal_4_1_7_si"] || "Si"}
                            checked={userData.literal_4_1_7 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_7_no"
                            name="literal_4_1_7"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_1_7}
                            value={userData["literal_4_1_7_no"] || "No"}
                            checked={userData.literal_4_1_7 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div className="w-4/4 flex justify-end -my-10 -space-x-1 mb-10 -ml-4">
                    <LeyendaError>{msg_literal_4_1_7}</LeyendaError>
                </div>
                <div id="div_4_1_7" className='flex flex-row mb-3 -mt-12' style={{ display: "none" }}>
                    <div className="basis-3/4 md:w-1/2 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿Cuánto fumaba diariamente?
                        </label>
                        <div className="flex justify-left my-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_7_cantidad_menor"
                                    name="literal_4_1_7_cantidad"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_7_cantidad}
                                    value={userData["literal_4_1_7_cantidad_menor"] || "Menor cinco"}
                                    checked={userData.literal_4_1_7_cantidad === "Menor cinco" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_7_cantidad_menor" className="inline-flex items-center">
                                <span className="ml-4">Menos de 5 cigarrillos al día</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_7_cantidad_mayor"
                                    name="literal_4_1_7_cantidad"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_7_cantidad}
                                    value={userData["literal_4_1_7_cantidad_mayor"] || "Mayor cinco"}
                                    checked={userData.literal_4_1_7_cantidad === "Mayor cinco" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_7_cantidad_mayor" className="inline-flex items-center">
                                <span className="ml-2">Más de 5 cigarrillos al día</span>
                            </label>
                        </div><LeyendaError>{msg_literal_4_1_7_cantidad}</LeyendaError>
                    </div>
                </div>
                {/* <Button
                    type="submit"
                    className="bg-indigo-300 mb-1"
                    color="indigo"
                    buttonType="filled"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                    onClick={async (e) => {
                        if (validarCampos() === true) {
                            console.log("Puede ir al siguiente paso");
                        } else {
                            console.log("Debe completar todos los campos");
                        }
                    }}
                >
                    Validar Paso
                </Button> */}
                {/* SECCIÓN 4.1.8 */}
                <p className="w-3/4 mt-3">
                    ¿Ingiere usted vino, licores, cerveza u otras bebidas alcohólicas?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_8_si"
                            name="literal_4_1_8"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_1_8}
                            value={userData["literal_4_1_8_si"] || "Si"}
                            checked={userData.literal_4_1_8 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_8_no"
                            name="literal_4_1_8"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_1_8}
                            value={userData["literal_4_1_8_no"] || "No"}
                            checked={userData.literal_4_1_8 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div className="w-4/4 flex justify-end -my-10 -space-x-1 mb-10 -ml-4">
                    <LeyendaError>{msg_literal_4_1_8}</LeyendaError>
                </div>
                <div id="div_4_1_8" className="w-full md:w-1/2 mb-3 md:mb-0 -mt-12" style={{ display: "none" }}>
                    <div className="flex justify-left my-1 pl-2">
                        <label className="inline-flex items-center">
                            <Input
                                type="radio"
                                color={"indigo"}
                                size="regular"
                                id="literal_4_1_8_bebidas_frecuente"
                                name="literal_4_1_8_bebidas"
                                className=""
                                placeholder=""
                                onChange={habilitar_literal_4_1_8_bebidas}
                                value={userData["literal_4_1_8_bebidas_frecuente"] || "Frecuentemente"}
                                checked={userData.literal_4_1_8_bebidas === "Frecuentemente" ? true : false}
                            />
                        </label>
                        <label htmlFor="literal_4_1_8_bebidas_frecuente" className="inline-flex items-center">
                            <span className="ml-2">Frecuentemente</span>
                        </label>
                        <label className="inline-flex items-center pl-20">
                            <Input
                                type="radio"
                                color={"indigo"}
                                size="regular"
                                id="literal_4_1_8_bebidas_ocasionalmente"
                                name="literal_4_1_8_bebidas"
                                className=""
                                placeholder=""
                                onChange={habilitar_literal_4_1_8_bebidas}
                                value={userData["literal_4_1_8_bebidas_ocasionalmente"] || "Ocasionalmente"}
                                checked={userData.literal_4_1_8_bebidas === "Ocasionalmente" ? true : false}
                            />
                        </label>
                        <label htmlFor="literal_4_1_8_bebidas_ocasionalmente" className="inline-flex items-center">
                            <span className="ml-2">Ocasionalmente y/o en eventos sociales</span>
                        </label>
                    </div>
                </div><LeyendaError>{msg_literal_4_1_8_bebidas}</LeyendaError>
                <div id="div_4_1_8_frecuencia" className="w-full md:w-1/2 mb-3 mt-3 md:mb-0" style={{ display: "none" }}>
                    <label className="w-full block uppercase tracking-wide text-gray-700 text-xs font-bold">
                        Frecuencia
                    </label>
                    <div className="flex justify-left my-1 mb-3 pl-2">
                        <label className="inline-flex items-center">
                            <Input
                                type="radio"
                                color={"indigo"}
                                size="regular"
                                id="literal_4_1_8_frecuencia_mes"
                                name="literal_4_1_8_frecuencia"
                                className=""
                                placeholder=""
                                onChange={habilitar_literal_4_1_8_frecuencia}
                                value={userData["literal_4_1_8_frecuencia_mes"] || "Mes"}
                                checked={userData.literal_4_1_8_frecuencia === "Mes" ? true : false}
                            />
                        </label>
                        <label htmlFor="literal_4_1_8_frecuencia_mes" className="inline-flex items-center">
                            <span className="ml-2">Mes</span>
                        </label>
                        <label id="label_4_1_8_veces_mes" className="inline-flex items-center pl-20" style={{ display: "none" }}>
                            <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-500
                                bg-transparent  bg-no-repeat border border-1 border-gray-500 rounded-lg transition ease-in-out
                                m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                                id="literal_4_1_8_veces_mes"
                                name="literal_4_1_8_veces_mes"
                                onChange={validar_literal_4_1_8_veces_mes}
                                value={userData["literal_4_1_8_veces_mes"] || ""}
                            >
                                <option value="-1">Frecuencia Mes</option>
                                <option value="1 vez">1 vez</option>
                                <option value="2 veces">2 veces</option>
                                <option value="3 veces">3 veces</option>
                                <option value="4 veces">4 veces</option>
                                <option value="Mayor 4">Más de 4 veces</option>
                            </select><LeyendaError>{msg_literal_4_1_8_veces_mes}</LeyendaError>
                        </label>
                        <label className="inline-flex items-center pl-20">
                            <Input
                                type="radio"
                                color={"indigo"}
                                size="regular"
                                id="literal_4_1_8_frecuencia_semana"
                                name="literal_4_1_8_frecuencia"
                                className=""
                                placeholder=""
                                onChange={habilitar_literal_4_1_8_frecuencia}
                                value={userData["literal_4_1_8_frecuencia_semana"] || "Semana"}
                                checked={userData.literal_4_1_8_frecuencia === "Semana" ? true : false}
                            />
                        </label>
                        <label htmlFor="literal_4_1_8_frecuencia_semana" className="inline-flex items-center">
                            <span className="ml-2">Semana</span>
                        </label>
                        <label id="label_4_1_8_veces_semana" className="inline-flex items-center pl-20" style={{ display: "none" }}>
                            <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-500
                                bg-transparent  bg-no-repeat border border-1 border-gray-500 rounded-lg transition ease-in-out
                                m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                                id="literal_4_1_8_veces_semana"
                                name="literal_4_1_8_veces_semana"
                                onChange={validar_literal_4_1_8_veces_semana}
                                value={userData["literal_4_1_8_veces_semana"] || ""}
                            >
                                <option value="-1">Frecuencia Semana</option>
                                <option value="1 vez">1 vez</option>
                                <option value="2 veces">2 veces</option>
                                <option value="3 veces">3 veces</option>
                                <option value="4 veces">4 veces</option>
                                <option value="Mayor 4">Más de 4 veces</option>
                            </select><LeyendaError>{msg_literal_4_1_8_veces_semana}</LeyendaError>
                        </label>
                    </div>
                </div><LeyendaError>{msg_literal_4_1_8_frecuencia}</LeyendaError>
                {/* SECCIÓN 4.1.9 ñaqui*/}
                <p className="w-3/4 mt-3">
                    ¿Ha recibido o está recibiendo tratamiento por alcoholismo y/o drogadicción?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_9_si"
                            name="literal_4_1_9"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_1_9}
                            value={userData["literal_4_1_9_si"] || "Si"}
                            checked={userData.literal_4_1_9 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_9_no"
                            name="literal_4_1_9"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_1_9}
                            value={userData["literal_4_1_9_no"] || "No"}
                            checked={userData.literal_4_1_9 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div className="w-4/4 flex justify-end -my-10 -space-x-1 mb-10 -ml-4">
                    <LeyendaError>{msg_literal_4_1_9}</LeyendaError>
                </div>
                <div id="div_4_1_9" className='flex flex-row mb-3 space-x-7 -mt-9' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 mb-3 md:mb-0">
                        <div className="flex my-1 mb-1">
                            <label className="inline-flex items-center">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_9_alcoholismo"
                                    name="literal_4_1_9_alcoholismo"
                                    className=""
                                    placeholder=""
                                    onChange={handleAlcoholismo}
                                    value={isChecked_Alcoholismo}
                                />
                            </label>
                            <label htmlFor="literal_4_1_9_alcoholismo" className="inline-flex items-center">
                                <span className="ml-2">Alcoholismo</span>
                            </label>
                            <label id="label_4_1_9_fecha_alcoholismo" className="inline-flex items-center ml-7" style={{ display: "none" }}>
                                <Input
                                    type="month"
                                    color={color_literal_4_1_9_fecha_alcoholismo}
                                    size="regular"
                                    outline={true}
                                    id="literal_4_1_9_fecha_alcoholismo"
                                    name="literal_4_1_9_fecha_alcoholismo"
                                    className=""
                                    placeholder="Fecha Tratamiento"
                                    onChange={validar_literal_4_1_9_fecha_alcoholismo}
                                    value={userData["literal_4_1_9_fecha_alcoholismo"] || ""}
                                /><LeyendaError>{msg_literal_4_1_9_fecha_alcoholismo}</LeyendaError>
                            </label>
                        </div><LeyendaError>{msg_literal_4_1_9_alcoholismo}</LeyendaError>
                    </div>
                    <div className="basis-2/3 md:w-1/2 mb-3 md:mb-0">
                        <div className="flex my-1">
                            <label className="inline-flex items-center ml-7">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_9_drogadiccion"
                                    name="literal_4_1_9_drogadiccion"
                                    className=""
                                    placeholder=""
                                    onChange={handleDrogadiccion}
                                    value={isChecked_Drogadiccion}
                                />
                            </label>
                            <label htmlFor="literal_4_1_9_drogadiccion" className="inline-flex items-center">
                                <span className="ml-2">Drogadicción</span>
                            </label>
                            <label id="label_4_1_9_tipo_drogadiccion" className="inline-flex items-center ml-7" style={{ display: "none" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_1_9_tipo_drogadiccion}
                                    size="regular"
                                    outline={true}
                                    id="literal_4_1_9_tipo_drogadiccion"
                                    name="literal_4_1_9_tipo_drogadiccion"
                                    className=""
                                    placeholder="Tipo de Droga"
                                    onChange={validar_literal_4_1_9_tipo_drogadiccion}
                                    value={userData["literal_4_1_9_tipo_drogadiccion"] || ""}
                                /><LeyendaError>{msg_literal_4_1_9_tipo_drogadiccion}</LeyendaError>
                            </label>
                            <label id="label_4_1_9_fecha_drogadiccion" className="inline-flex items-center ml-7" style={{ display: "none" }}>
                                <Input
                                    type="month"
                                    color={color_literal_4_1_9_fecha_drogadiccion}
                                    size="regular"
                                    outline={true}
                                    id="literal_4_1_9_fecha_drogadiccion"
                                    name="literal_4_1_9_fecha_drogadiccion"
                                    className=""
                                    placeholder="Fecha Tratamiento"
                                    onChange={validar_literal_4_1_9_fecha_drogadiccion}
                                    value={userData["literal_4_1_9_fecha_drogadiccion"] || ""}
                                /><LeyendaError>{msg_literal_4_1_9_fecha_drogadiccion}</LeyendaError>
                            </label>
                        </div>
                    </div>
                </div>
                {/* SECCIÓN 4.1.10 */}
                <p className="w-3/4 mt-3">
                    ¿En los últimos 5 años se ha practicado algún examen Médico?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_10_si"
                            name="literal_4_1_10"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_1_10}
                            value={userData["literal_4_1_10_si"] || "Si"}
                            checked={userData.literal_4_1_10 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_10_no"
                            name="literal_4_1_10"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_1_10}
                            value={userData["literal_4_1_10_no"] || "No"}
                            checked={userData.literal_4_1_10 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_1_10" className='flex flex-row space-x-5 -mt-12' style={{ display: "none" }}>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿CUÁLES?
                        </label>
                        <div className="flex justify-left my-1 mb-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_sangre"
                                    name="literal_4_1_10_sangre"
                                    className=""
                                    placeholder=""
                                    onChange={handleSangre}
                                    value={isChecked_Sangre}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_sangre" className="inline-flex items-center">
                                <span className="ml-2">Sangre</span>
                            </label>
                            <label className="inline-flex items-center pl-10">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_orina"
                                    name="literal_4_1_10_orina"
                                    className=""
                                    placeholder=""
                                    onChange={handleOrina}
                                    value={isChecked_Orina}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_orina" className="inline-flex items-center">
                                <span className="ml-2">Orina</span>
                            </label>
                            <label className="inline-flex items-center pl-10">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_electrocardiograma"
                                    name="literal_4_1_10_electrocardiograma"
                                    className=""
                                    placeholder=""
                                    onChange={handleElectrocardiograma}
                                    value={isChecked_Electrocardiograma}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_electrocardiograma" className="inline-flex items-center">
                                <span className="ml-2">Electrocardiograma</span>
                            </label>
                            <label className="inline-flex items-center pl-10">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_rayosx"
                                    name="literal_4_1_10_rayosx"
                                    className=""
                                    placeholder=""
                                    onChange={handleRayosX}
                                    value={isChecked_RayosX}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_rayosx" className="inline-flex items-center">
                                <span className="ml-2">Rayos X</span>
                            </label>
                            <label className="inline-flex items-center pl-10">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_otros"
                                    name="literal_4_1_10_otros"
                                    className=""
                                    placeholder=""
                                    onChange={handleOtros}
                                    value={isChecked_Otros}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_otros" className="inline-flex items-center">
                                <span className="ml-2">Otros</span>
                            </label>
                        </div>
                    </div>
                    <div className="basis-1/2 md:w-1/2 md:mb-0 w-full">
                        <div className="flex justify-left my-1 mt-4">
                            <label id="label_4_1_10_otros_detalle_otros" className="inline-flex items-center" style={{ display: "none", width: "100%", marginLeft: "-96px", paddingRight: "86px" }}>
                                <Input
                                    type="text"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_otros_detalle_otros"
                                    name="literal_4_1_10_otros_detalle_otros"
                                    outline={true}
                                    className=""
                                    placeholder="Especificar"
                                    onChange={handleChange}
                                    value={userData["literal_4_1_10_otros_detalle_otros"] || ""}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                {/* Sangre */}
                <div id="div_4_1_10_sangre_1" className='flex flex-row space-x-20 mt-1' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Fecha del examen de sangre
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_1_10_sangre_fecha}
                                    size="regular"
                                    id="literal_4_1_10_sangre_fecha"
                                    name="literal_4_1_10_sangre_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha"
                                    onChange={validar_literal_4_1_10_sangre_fecha}
                                    value={userData["literal_4_1_10_sangre_fecha"] || ""}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="basis-2/3 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Resultado del examen de sangre
                        </label>
                        <div className='flex flex-row mb-3 space-x-7'>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                                <div className="flex justify-left my-1 mt-2">
                                    <label className="inline-flex items-center">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_1_10_sangre_resultado_normal"
                                            name="literal_4_1_10_sangre_resultado"
                                            className=""
                                            placeholder=""
                                            onChange={habilitar_literal_4_1_10_sangre_resultado}
                                            value={userData["literal_4_1_10_sangre_resultado_normal"] || "Normal"}
                                            checked={userData.literal_4_1_10_sangre_resultado === "Normal" ? true : false}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_1_10_sangre_resultado_normal" className="inline-flex items-center">
                                        <span className="ml-4">Normal</span>
                                    </label>
                                    <label className="inline-flex items-center ml-7">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_1_10_sangre_resultado_enfermedad"
                                            name="literal_4_1_10_sangre_resultado"
                                            className=""
                                            placeholder=""
                                            onChange={habilitar_literal_4_1_10_sangre_resultado}
                                            value={userData["literal_4_1_10_sangre_resultado_enfermedad"] || "Enfermedad"}
                                            checked={userData.literal_4_1_10_sangre_resultado === "Enfermedad" ? true : false}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_1_10_sangre_resultado_enfermedad" className="inline-flex items-center">
                                        <span className="ml-2">Enfermedad</span>
                                    </label>
                                    <label className="inline-flex items-center ml-7">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_1_10_sangre_resultado_otros"
                                            name="literal_4_1_10_sangre_resultado"
                                            className=""
                                            placeholder=""
                                            onChange={habilitar_literal_4_1_10_sangre_resultado}
                                            value={userData["literal_4_1_10_sangre_resultado_otros"] || "Otros"}
                                            checked={userData.literal_4_1_10_sangre_resultado === "Otros" ? true : false}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_1_10_sangre_resultado_otros" className="inline-flex items-center pr-12">
                                        <span className="ml-2">Otros</span>
                                    </label>
                                </div>
                            </div>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                                <div className="flex justify-left my-1 mt-2">
                                    <label id="label_4_1_10_sangre_resultado_detalle_enfermedad" className="flex items-center w-full" style={{ display: "none" }}>
                                        <Input
                                            type="text"
                                            color={color_literal_4_1_10_sangre_resultado_detalle_enfermedad}
                                            size="regular"
                                            id="literal_4_1_10_sangre_resultado_detalle_enfermedad"
                                            name="literal_4_1_10_sangre_resultado_detalle_enfermedad"
                                            outline={true}
                                            className=""
                                            placeholder="Enfermedad"
                                            onChange={validar_literal_4_1_10_sangre_resultado_detalle_enfermedad}
                                            value={userData["literal_4_1_10_sangre_resultado_detalle_enfermedad"] || ""}
                                        />
                                    </label>
                                    <label id="label_4_1_10_sangre_resultado_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                        <Input
                                            type="text"
                                            color={color_literal_4_1_10_sangre_resultado_detalle_otros}
                                            size="regular"
                                            id="literal_4_1_10_sangre_resultado_detalle_otros"
                                            name="literal_4_1_10_sangre_resultado_detalle_otros"
                                            outline={true}
                                            className=""
                                            placeholder="Especificar"
                                            onChange={validar_literal_4_1_10_sangre_resultado_detalle_otros}
                                            value={userData["literal_4_1_10_sangre_resultado_detalle_otros"] || ""}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-20 -mt-10 pt-8'>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <div className="flex justify-left">
                            <label id="label_4_1_10_leyenda_sangre_fecha" className="inline-flex items-center w-full">
                                <LeyendaError>{msg_literal_4_1_10_sangre_fecha}</LeyendaError>
                            </label>
                        </div>
                    </div>
                    <div className="basis-2/3 md:w-1/2 md:mb-0 w-full pl-20">
                        <div className='flex flex-row mb-3 space-x-7 pl-4'>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                            </div>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                                <div className="flex justify-left">
                                    <label id="label_4_1_10_leyenda_sangre_resultado_detalle_enfermedad" className="flex items-center w-full" style={{ display: "none" }}>
                                        <LeyendaError>{msg_literal_4_1_10_sangre_resultado_detalle_enfermedad}</LeyendaError>
                                    </label>
                                    <label id="label_4_1_10_leyenda_sangre_resultado_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                        <LeyendaError>{msg_literal_4_1_10_sangre_resultado_detalle_otros}</LeyendaError>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="div_4_1_10_sangre_2" className='flex flex-row mb-3 space-x-5' style={{ display: "none" }}>
                    <div className="basis-2/3 md:w-1/2 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Motivo del examen de sangre
                        </label>
                        <div className="flex justify-left my-1">
                            <label className="inline-flex items-center">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_sangre_motivo_control"
                                    name="literal_4_1_10_sangre_motivo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_10_sangre_motivo}
                                    value={userData["literal_4_1_10_sangre_motivo_control"] || "Control"}
                                    checked={userData.literal_4_1_10_sangre_motivo === "Control" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_sangre_motivo_control" className="inline-flex items-center">
                                <span className="ml-4">Control de rutina</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_sangre_motivo_procupacional"
                                    name="literal_4_1_10_sangre_motivo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_10_sangre_motivo}
                                    value={userData["literal_4_1_10_sangre_motivo_procupacional"] || "Preocupacional"}
                                    checked={userData.literal_4_1_10_sangre_motivo === "Preocupacional" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_sangre_motivo_procupacional" className="inline-flex items-center">
                                <span className="ml-2">Preocupacional</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_sangre_motivo_otros"
                                    name="literal_4_1_10_sangre_motivo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_10_sangre_motivo}
                                    value={userData["literal_4_1_10_sangre_motivo_otros"] || "Otros"}
                                    checked={userData.literal_4_1_10_sangre_motivo === "Otros" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_sangre_motivo_otros" className="inline-flex items-center pr-12">
                                <span className="ml-2">Otros</span>
                            </label>
                        </div>
                    </div>
                    <div className="basis-1/3 md:w-1/2 md:mb-0">
                        <div className="flex justify-left my-1 mt-4 pr-1">
                            <label id="label_4_1_10_sangre_motivo_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_1_10_sangre_motivo_detalle_otros}
                                    size="regular"
                                    id="literal_4_1_10_sangre_motivo_detalle_otros"
                                    name="literal_4_1_10_sangre_motivo_detalle_otros"
                                    outline={true}
                                    className=""
                                    placeholder="Motivo"
                                    onChange={validar_literal_4_1_10_sangre_motivo_detalle_otros}
                                    value={userData["literal_4_1_10_sangre_motivo_detalle_otros"] || ""}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-5 -mt-10 pt-8'>
                    <div className="basis-2/3 md:w-1/2 md:mb-0">
                        <div className="flex justify-left">
                        </div>
                    </div>
                    <div className="basis-1/3 md:w-1/2 md:mb-0">
                        <div className="flex justify-left pr-1">
                            <label id="label_4_1_10_leyenda_sangre_motivo_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                <LeyendaError>{msg_literal_4_1_10_sangre_motivo_detalle_otros}</LeyendaError>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Orina */}
                <div id="div_4_1_10_orina_1" className='flex flex-row space-x-20 mt-2' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Fecha del examen de orina
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_1_10_orina_fecha}
                                    size="regular"
                                    id="literal_4_1_10_orina_fecha"
                                    name="literal_4_1_10_orina_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha"
                                    onChange={validar_literal_4_1_10_orina_fecha}
                                    value={userData["literal_4_1_10_orina_fecha"] || ""}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="basis-2/3 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Resultado del examen de orina
                        </label>
                        <div className='flex flex-row mb-3 space-x-7'>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                                <div className="flex justify-left my-1 mt-2">
                                    <label className="inline-flex items-center">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_1_10_orina_resultado_normal"
                                            name="literal_4_1_10_orina_resultado"
                                            className=""
                                            placeholder=""
                                            onChange={habilitar_literal_4_1_10_orina_resultado}
                                            value={userData["literal_4_1_10_orina_resultado_normal"] || "Normal"}
                                            checked={userData.literal_4_1_10_orina_resultado === "Normal" ? true : false}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_1_10_orina_resultado_normal" className="inline-flex items-center">
                                        <span className="ml-4">Normal</span>
                                    </label>
                                    <label className="inline-flex items-center ml-7">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_1_10_orina_resultado_enfermedad"
                                            name="literal_4_1_10_orina_resultado"
                                            className=""
                                            placeholder=""
                                            onChange={habilitar_literal_4_1_10_orina_resultado}
                                            value={userData["literal_4_1_10_orina_resultado_enfermedad"] || "Enfermedad"}
                                            checked={userData.literal_4_1_10_orina_resultado === "Enfermedad" ? true : false}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_1_10_orina_resultado_enfermedad" className="inline-flex items-center">
                                        <span className="ml-2">Enfermedad</span>
                                    </label>
                                    <label className="inline-flex items-center ml-7">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_1_10_orina_resultado_otros"
                                            name="literal_4_1_10_orina_resultado"
                                            className=""
                                            placeholder=""
                                            onChange={habilitar_literal_4_1_10_orina_resultado}
                                            value={userData["literal_4_1_10_orina_resultado_otros"] || "Otros"}
                                            checked={userData.literal_4_1_10_orina_resultado === "Otros" ? true : false}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_1_10_orina_resultado_otros" className="inline-flex items-center pr-12">
                                        <span className="ml-2">Otros</span>
                                    </label>
                                </div>
                            </div>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                                <div className="flex justify-left my-1 mt-2">
                                    <label id="label_4_1_10_orina_resultado_detalle_enfermedad" className="flex items-center w-full" style={{ display: "none" }}>
                                        <Input
                                            type="text"
                                            color={color_literal_4_1_10_orina_resultado_detalle_enfermedad}
                                            size="regular"
                                            id="literal_4_1_10_orina_resultado_detalle_enfermedad"
                                            name="literal_4_1_10_orina_resultado_detalle_enfermedad"
                                            outline={true}
                                            className=""
                                            placeholder="Enfermedad"
                                            onChange={validar_literal_4_1_10_orina_resultado_detalle_enfermedad}
                                            value={userData["literal_4_1_10_orina_resultado_detalle_enfermedad"] || ""}
                                        />
                                    </label>
                                    <label id="label_4_1_10_orina_resultado_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                        <Input
                                            type="text"
                                            color={color_literal_4_1_10_orina_resultado_detalle_otros}
                                            size="regular"
                                            id="literal_4_1_10_orina_resultado_detalle_otros"
                                            name="literal_4_1_10_orina_resultado_detalle_otros"
                                            outline={true}
                                            className=""
                                            placeholder="Especificar"
                                            onChange={validar_literal_4_1_10_orina_resultado_detalle_otros}
                                            value={userData["literal_4_1_10_orina_resultado_detalle_otros"] || ""}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-20 -mt-10 pt-8'>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <div className="flex justify-left">
                            <label id="label_4_1_10_leyenda_orina_fecha" className="inline-flex items-center w-full">
                                <LeyendaError>{msg_literal_4_1_10_orina_fecha}</LeyendaError>
                            </label>
                        </div>
                    </div>
                    <div className="basis-2/3 md:w-1/2 md:mb-0 w-full pl-20">
                        <div className='flex flex-row mb-3 space-x-7 pl-4'>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                            </div>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                                <div className="flex justify-left">
                                    <label id="label_4_1_10_leyenda_orina_resultado_detalle_enfermedad" className="flex items-center w-full" style={{ display: "none" }}>
                                        <LeyendaError>{msg_literal_4_1_10_orina_resultado_detalle_enfermedad}</LeyendaError>
                                    </label>
                                    <label id="label_4_1_10_leyenda_orina_resultado_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                        <LeyendaError>{msg_literal_4_1_10_orina_resultado_detalle_otros}</LeyendaError>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="div_4_1_10_orina_2" className='flex flex-row mb-3 space-x-5' style={{ display: "none" }}>
                    <div className="basis-2/3 md:w-1/2 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Motivo del examen de orina
                        </label>
                        <div className="flex justify-left my-1">
                            <label className="inline-flex items-center">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_orina_motivo_control"
                                    name="literal_4_1_10_orina_motivo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_10_orina_motivo}
                                    value={userData["literal_4_1_10_orina_motivo_control"] || "Control"}
                                    checked={userData.literal_4_1_10_orina_motivo === "Control" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_orina_motivo_control" className="inline-flex items-center">
                                <span className="ml-4">Control de rutina</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_orina_motivo_procupacional"
                                    name="literal_4_1_10_orina_motivo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_10_orina_motivo}
                                    value={userData["literal_4_1_10_orina_motivo_procupacional"] || "Preocupacional"}
                                    checked={userData.literal_4_1_10_orina_motivo === "Preocupacional" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_orina_motivo_procupacional" className="inline-flex items-center">
                                <span className="ml-2">Preocupacional</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_orina_motivo_otros"
                                    name="literal_4_1_10_orina_motivo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_10_orina_motivo}
                                    value={userData["literal_4_1_10_orina_motivo_otros"] || "Otros"}
                                    checked={userData.literal_4_1_10_orina_motivo === "Otros" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_orina_motivo_otros" className="inline-flex items-center pr-12">
                                <span className="ml-2">Otros</span>
                            </label>
                        </div>
                    </div>
                    <div className="basis-1/3 md:w-1/2 md:mb-0">
                        <div className="flex justify-left my-1 mt-4 pr-1">
                            <label id="label_4_1_10_orina_motivo_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_1_10_orina_motivo_detalle_otros}
                                    size="regular"
                                    id="literal_4_1_10_orina_motivo_detalle_otros"
                                    name="literal_4_1_10_orina_motivo_detalle_otros"
                                    outline={true}
                                    className=""
                                    placeholder="Motivo"
                                    onChange={validar_literal_4_1_10_orina_motivo_detalle_otros}
                                    value={userData["literal_4_1_10_orina_motivo_detalle_otros"] || ""}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-5 -mt-10 pt-8'>
                    <div className="basis-2/3 md:w-1/2 md:mb-0">
                        <div className="flex justify-left">
                        </div>
                    </div>
                    <div className="basis-1/3 md:w-1/2 md:mb-0">
                        <div className="flex justify-left pr-1">
                            <label id="label_4_1_10_leyenda_orina_motivo_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                <LeyendaError>{msg_literal_4_1_10_orina_motivo_detalle_otros}</LeyendaError>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Electrocardiograma */}
                <div id="div_4_1_10_electrocardiograma_1" className='flex flex-row space-x-20 mt-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Fecha de electrocardiograma
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_1_10_electrocardiograma_fecha}
                                    size="regular"
                                    id="literal_4_1_10_electrocardiograma_fecha"
                                    name="literal_4_1_10_electrocardiograma_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha"
                                    onChange={validar_literal_4_1_10_electrocardiograma_fecha}
                                    value={userData["literal_4_1_10_electrocardiograma_fecha"] || ""}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="basis-2/3 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Resultado de electrocardiograma
                        </label>
                        <div className='flex flex-row mb-3 space-x-7'>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                                <div className="flex justify-left my-1 mt-2">
                                    <label className="inline-flex items-center">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_1_10_electrocardiograma_resultado_normal"
                                            name="literal_4_1_10_electrocardiograma_resultado"
                                            className=""
                                            placeholder=""
                                            onChange={habilitar_literal_4_1_10_electrocardiograma_resultado}
                                            value={userData["literal_4_1_10_electrocardiograma_resultado_normal"] || "Normal"}
                                            checked={userData.literal_4_1_10_electrocardiograma_resultado === "Normal" ? true : false}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_1_10_electrocardiograma_resultado_normal" className="inline-flex items-center">
                                        <span className="ml-4">Normal</span>
                                    </label>
                                    <label className="inline-flex items-center pl-7">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_1_10_electrocardiograma_resultado_enfermedad"
                                            name="literal_4_1_10_electrocardiograma_resultado"
                                            className=""
                                            placeholder=""
                                            onChange={habilitar_literal_4_1_10_electrocardiograma_resultado}
                                            value={userData["literal_4_1_10_electrocardiograma_resultado_enfermedad"] || "Enfermedad"}
                                            checked={userData.literal_4_1_10_electrocardiograma_resultado === "Enfermedad" ? true : false}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_1_10_electrocardiograma_resultado_enfermedad" className="inline-flex items-center">
                                        <span className="ml-2">Enfermedad</span>
                                    </label>
                                    <label className="inline-flex items-center pl-7">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_1_10_electrocardiograma_resultado_otros"
                                            name="literal_4_1_10_electrocardiograma_resultado"
                                            className=""
                                            placeholder=""
                                            onChange={habilitar_literal_4_1_10_electrocardiograma_resultado}
                                            value={userData["literal_4_1_10_electrocardiograma_resultado_otros"] || "Otros"}
                                            checked={userData.literal_4_1_10_electrocardiograma_resultado === "Otros" ? true : false}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_1_10_electrocardiograma_resultado_otros" className="inline-flex items-center pr-12">
                                        <span className="ml-2">Otros</span>
                                    </label>
                                </div>
                            </div>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                                <div className="flex justify-left my-1 mt-2">
                                    <label id="label_4_1_10_electrocardiograma_resultado_detalle_enfermedad" className="flex items-center w-full" style={{ display: "none" }}>
                                        <Input
                                            type="text"
                                            color={color_literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad}
                                            size="regular"
                                            id="literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad"
                                            name="literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad"
                                            outline={true}
                                            className=""
                                            placeholder="Enfermedad"
                                            onChange={validar_literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad}
                                            value={userData["literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad"] || ""}
                                        />
                                    </label>
                                    <label id="label_4_1_10_electrocardiograma_resultado_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                        <Input
                                            type="text"
                                            color={color_literal_4_1_10_electrocardiograma_resultado_detalle_otros}
                                            size="regular"
                                            id="literal_4_1_10_electrocardiograma_resultado_detalle_otros"
                                            name="literal_4_1_10_electrocardiograma_resultado_detalle_otros"
                                            outline={true}
                                            className=""
                                            placeholder="Especificar"
                                            onChange={validar_literal_4_1_10_electrocardiograma_resultado_detalle_otros}
                                            value={userData["literal_4_1_10_electrocardiograma_resultado_detalle_otros"] || ""}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-20 -mt-10 pt-8'>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <div className="flex justify-left">
                            <label id="label_4_1_10_leyenda_electrocardiograma_fecha" className="inline-flex items-center w-full">
                                <LeyendaError>{msg_literal_4_1_10_electrocardiograma_fecha}</LeyendaError>
                            </label>
                        </div>
                    </div>
                    <div className="basis-2/3 md:w-1/2 md:mb-0 w-full pl-20">
                        <div className='flex flex-row mb-3 space-x-7 pl-4'>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                            </div>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                                <div className="flex justify-left">
                                    <label id="label_4_1_10_leyenda_electrocardiograma_resultado_detalle_enfermedad" className="flex items-center w-full" style={{ display: "none" }}>
                                        <LeyendaError>{msg_literal_4_1_10_electrocardiograma_resultado_detalle_enfermedad}</LeyendaError>
                                    </label>
                                    <label id="label_4_1_10_leyenda_electrocardiograma_resultado_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                        <LeyendaError>{msg_literal_4_1_10_electrocardiograma_resultado_detalle_otros}</LeyendaError>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="div_4_1_10_electrocardiograma_2" className='flex flex-row mb-3 space-x-5' style={{ display: "none" }}>
                    <div className="basis-2/3 md:w-1/2 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Motivo de electrocardiograma
                        </label>
                        <div className="flex justify-left my-1">
                            <label className="inline-flex items-center">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_electrocardiograma_motivo_control"
                                    name="literal_4_1_10_electrocardiograma_motivo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_10_electrocardiograma_motivo}
                                    value={userData["literal_4_1_10_electrocardiograma_motivo_control"] || "Control"}
                                    checked={userData.literal_4_1_10_electrocardiograma_motivo === "Control" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_electrocardiograma_motivo_control" className="inline-flex items-center">
                                <span className="ml-4">Control de rutina</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_electrocardiograma_motivo_procupacional"
                                    name="literal_4_1_10_electrocardiograma_motivo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_10_electrocardiograma_motivo}
                                    value={userData["literal_4_1_10_electrocardiograma_motivo_procupacional"] || "Preocupacional"}
                                    checked={userData.literal_4_1_10_electrocardiograma_motivo === "Preocupacional" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_electrocardiograma_motivo_procupacional" className="inline-flex items-center">
                                <span className="ml-2">Preocupacional</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_electrocardiograma_motivo_otros"
                                    name="literal_4_1_10_electrocardiograma_motivo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_10_electrocardiograma_motivo}
                                    value={userData["literal_4_1_10_electrocardiograma_motivo_otros"] || "Otros"}
                                    checked={userData.literal_4_1_10_electrocardiograma_motivo === "Otros" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_electrocardiograma_motivo_otros" className="inline-flex items-center pr-12">
                                <span className="ml-2">Otros</span>
                            </label>
                        </div>
                    </div>
                    <div className="basis-1/3 md:w-1/2 md:mb-0">
                        <div className="flex justify-left my-1 mt-4 pr-1">
                            <label id="label_4_1_10_electrocardiograma_motivo_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_1_10_electrocardiograma_motivo_detalle_otros}
                                    size="regular"
                                    id="literal_4_1_10_electrocardiograma_motivo_detalle_otros"
                                    name="literal_4_1_10_electrocardiograma_motivo_detalle_otros"
                                    outline={true}
                                    className=""
                                    placeholder="Motivo"
                                    onChange={validar_literal_4_1_10_electrocardiograma_motivo_detalle_otros}
                                    value={userData["literal_4_1_10_electrocardiograma_motivo_detalle_otros"] || ""}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-5 -mt-10 pt-8'>
                    <div className="basis-2/3 md:w-1/2 md:mb-0">
                        <div className="flex justify-left">
                        </div>
                    </div>
                    <div className="basis-1/3 md:w-1/2 md:mb-0">
                        <div className="flex justify-left pr-1">
                            <label id="label_4_1_10_leyenda_electrocardiograma_motivo_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                <LeyendaError>{msg_literal_4_1_10_electrocardiograma_motivo_detalle_otros}</LeyendaError>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Rayos X */}
                <div id="div_4_1_10_rayosx_1" className='flex flex-row space-x-20 mt-4' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Fecha de rayos x
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_1_10_rayosx_fecha}
                                    size="regular"
                                    id="literal_4_1_10_rayosx_fecha"
                                    name="literal_4_1_10_rayosx_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha"
                                    onChange={validar_literal_4_1_10_rayosx_fecha}
                                    value={userData["literal_4_1_10_rayosx_fecha"] || ""}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="basis-2/3 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Resultado de rayos x
                        </label>
                        <div className='flex flex-row mb-3 space-x-7'>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                                <div className="flex justify-left my-1 mt-2">
                                    <label className="inline-flex items-center">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_1_10_rayosx_resultado_normal"
                                            name="literal_4_1_10_rayosx_resultado"
                                            className=""
                                            placeholder=""
                                            onChange={habilitar_literal_4_1_10_rayosx_resultado}
                                            value={userData["literal_4_1_10_rayosx_resultado_normal"] || "Normal"}
                                            checked={userData.literal_4_1_10_rayosx_resultado === "Normal" ? true : false}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_1_10_rayosx_resultado_normal" className="inline-flex items-center">
                                        <span className="ml-4">Normal</span>
                                    </label>
                                    <label className="inline-flex items-center ml-7">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_1_10_rayosx_resultado_enfermedad"
                                            name="literal_4_1_10_rayosx_resultado"
                                            className=""
                                            placeholder=""
                                            onChange={habilitar_literal_4_1_10_rayosx_resultado}
                                            value={userData["literal_4_1_10_rayosx_resultado_enfermedad"] || "Enfermedad"}
                                            checked={userData.literal_4_1_10_rayosx_resultado === "Enfermedad" ? true : false}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_1_10_rayosx_resultado_enfermedad" className="inline-flex items-center">
                                        <span className="ml-2">Enfermedad</span>
                                    </label>
                                    <label className="inline-flex items-center ml-7">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_1_10_rayosx_resultado_otros"
                                            name="literal_4_1_10_rayosx_resultado"
                                            className=""
                                            placeholder=""
                                            onChange={habilitar_literal_4_1_10_rayosx_resultado}
                                            value={userData["literal_4_1_10_rayosx_resultado_otros"] || "Otros"}
                                            checked={userData.literal_4_1_10_rayosx_resultado === "Otros" ? true : false}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_1_10_rayosx_resultado_otros" className="inline-flex items-center pr-12">
                                        <span className="ml-2">Otros</span>
                                    </label>
                                </div>
                            </div>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                                <div className="flex justify-left my-1 mt-2">
                                    <label id="label_4_1_10_rayosx_resultado_detalle_enfermedad" className="flex items-center w-full" style={{ display: "none" }}>
                                        <Input
                                            type="text"
                                            color={color_literal_4_1_10_rayosx_resultado_detalle_enfermedad}
                                            size="regular"
                                            id="literal_4_1_10_rayosx_resultado_detalle_enfermedad"
                                            name="literal_4_1_10_rayosx_resultado_detalle_enfermedad"
                                            outline={true}
                                            className=""
                                            placeholder="Enfermedad"
                                            onChange={validar_literal_4_1_10_rayosx_resultado_detalle_enfermedad}
                                            value={userData["literal_4_1_10_rayosx_resultado_detalle_enfermedad"] || ""}
                                        />
                                    </label>
                                    <label id="label_4_1_10_rayosx_resultado_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                        <Input
                                            type="text"
                                            color={color_literal_4_1_10_rayosx_resultado_detalle_otros}
                                            size="regular"
                                            id="literal_4_1_10_rayosx_resultado_detalle_otros"
                                            name="literal_4_1_10_rayosx_resultado_detalle_otros"
                                            outline={true}
                                            className=""
                                            placeholder="Especificar"
                                            onChange={validar_literal_4_1_10_rayosx_resultado_detalle_otros}
                                            value={userData["literal_4_1_10_rayosx_resultado_detalle_otros"] || ""}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-20 -mt-10 pt-8'>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <div className="flex justify-left">
                            <label id="label_4_1_10_leyenda_rayosx_fecha" className="inline-flex items-center w-full">
                                <LeyendaError>{msg_literal_4_1_10_rayosx_fecha}</LeyendaError>
                            </label>
                        </div>
                    </div>
                    <div className="basis-2/3 md:w-1/2 md:mb-0 w-full pl-20">
                        <div className='flex flex-row mb-3 space-x-7 pl-4'>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                            </div>
                            <div className="basis-1/3 md:w-1/2 md:mb-0">
                                <div className="flex justify-left">
                                    <label id="label_4_1_10_leyenda_rayosx_resultado_detalle_enfermedad" className="flex items-center w-full" style={{ display: "none" }}>
                                        <LeyendaError>{msg_literal_4_1_10_rayosx_resultado_detalle_enfermedad}</LeyendaError>
                                    </label>
                                    <label id="label_4_1_10_leyenda_rayosx_resultado_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                        <LeyendaError>{msg_literal_4_1_10_rayosx_resultado_detalle_otros}</LeyendaError>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="div_4_1_10_rayosx_2" className='flex flex-row mb-3 space-x-5' style={{ display: "none" }}>
                    <div className="basis-2/3 md:w-1/2 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Motivo de rayos x
                        </label>
                        <div className="flex justify-left my-1">
                            <label className="inline-flex items-center">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_rayosx_motivo_control"
                                    name="literal_4_1_10_rayosx_motivo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_10_rayosx_motivo}
                                    value={userData["literal_4_1_10_rayosx_motivo_control"] || "Control"}
                                    checked={userData.literal_4_1_10_rayosx_resultado === "Control" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_rayosx_motivo_control" className="inline-flex items-center">
                                <span className="ml-4">Control de rutina</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_rayosx_motivo_procupacional"
                                    name="literal_4_1_10_rayosx_motivo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_10_rayosx_motivo}
                                    value={userData["literal_4_1_10_rayosx_motivo_procupacional"] || "Preocupacional"}
                                    checked={userData.literal_4_1_10_rayosx_resultado === "Preocupacional" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_rayosx_motivo_procupacional" className="inline-flex items-center">
                                <span className="ml-2">Preocupacional</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_1_10_rayosx_motivo_otros"
                                    name="literal_4_1_10_rayosx_motivo"
                                    className=""
                                    placeholder=""
                                    onChange={habilitar_literal_4_1_10_rayosx_motivo}
                                    value={userData["literal_4_1_10_rayosx_motivo_otros"] || "Otros"}
                                    checked={userData.literal_4_1_10_rayosx_resultado === "Otros" ? true : false}
                                />
                            </label>
                            <label htmlFor="literal_4_1_10_rayosx_motivo_otros" className="inline-flex items-center pr-12">
                                <span className="ml-2">Otros</span>
                            </label>
                        </div>
                    </div>
                    <div className="basis-1/3 md:w-1/2 md:mb-0">
                        <div className="flex justify-left my-1 mt-4 pr-1">
                            <label id="label_4_1_10_rayosx_motivo_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_1_10_rayosx_motivo_detalle_otros}
                                    size="regular"
                                    id="literal_4_1_10_rayosx_motivo_detalle_otros"
                                    name="literal_4_1_10_rayosx_motivo_detalle_otros"
                                    outline={true}
                                    className=""
                                    placeholder="Motivo"
                                    onChange={validar_literal_4_1_10_rayosx_motivo_detalle_otros}
                                    value={userData["literal_4_1_10_rayosx_motivo_detalle_otros"] || ""}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row space-x-5 -mt-10 pt-8'>
                    <div className="basis-2/3 md:w-1/2 md:mb-0">
                        <div className="flex justify-left">
                        </div>
                    </div>
                    <div className="basis-1/3 md:w-1/2 md:mb-0">
                        <div className="flex justify-left pr-1">
                            <label id="label_4_1_10_leyenda_rayosx_motivo_detalle_otros" className="flex items-center w-full" style={{ display: "none" }}>
                                <LeyendaError>{msg_literal_4_1_10_rayosx_motivo_detalle_otros}</LeyendaError>
                            </label>
                        </div>
                    </div>
                </div>
                {/* SECCIÓN 4.1.11 */}
                <p className="w-3/4 mt-4">
                    ¿Ha sido hospitalizado?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_11_si"
                            name="literal_4_1_11"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_1_11}
                            value={userData["literal_4_1_11_si"] || "Si"}
                            checked={userData.literal_4_1_11 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_11_no"
                            name="literal_4_1_11"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_1_11}
                            value={userData["literal_4_1_11_no"] || "No"}
                            checked={userData.literal_4_1_11 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_1_11" className="flex flex-row -mx-3 mb-2 space-x-20 -mt-12 pt-2" style={{ display: "none" }}>
                    <div className="basis-2/4 md:w-1/2 px-3 mb-6 md:mb-0">
                        <Input
                            type="text"
                            color={color_literal_4_1_11_diagnostico}
                            size="regular"
                            id="literal_4_1_11_diagnostico"
                            name="literal_4_1_11_diagnostico"
                            outline={true}
                            className=""
                            placeholder="Diagnóstico"
                            onChange={validar_literal_4_1_11_diagnostico}
                            value={userData["literal_4_1_11_diagnostico"] || ""}
                        /><LeyendaError>{msg_literal_4_1_11_diagnostico}</LeyendaError>
                    </div>
                    <div className="basis-1/4 md:w-1/2 px-2">
                        <Input
                            type="month"
                            color={color_literal_4_1_11_fecha}
                            size="regular"
                            id="literal_4_1_11_fecha"
                            name="literal_4_1_11_fecha"
                            outline={true}
                            className=""
                            placeholder="Fecha"
                            onChange={validar_literal_4_1_11_fecha}
                            value={userData["literal_4_1_11_fecha"] || ""}
                        /><LeyendaError>{msg_literal_4_1_11_fecha}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.1.12 */}
                <p className="w-3/4 mt-3">
                    ¿Ha sufrido algún accidente que haya requerido ser tratado por médico?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_12_si"
                            name="literal_4_1_12"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_1_12}
                            value={userData["literal_4_1_12_si"] || "Si"}
                            checked={userData.literal_4_1_12 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_12_no"
                            name="literal_4_1_12"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_1_12}
                            value={userData["literal_4_1_12_no"] || "No"}
                            checked={userData.literal_4_1_12 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_1_12" className="flex flex-row -mx-3 mb-2 space-x-20 -mt-12 pt-2" style={{ display: "none" }}>
                    <div className="basis-2/4 px-3 w-2/5 md:w-1/2 mb-6 md:mb-0">
                        <Input
                            type="text"
                            color={color_literal_4_1_12_detallar}
                            size="regular"
                            id="literal_4_1_12_detallar"
                            name="literal_4_1_12_detallar"
                            outline={true}
                            className=""
                            placeholder="Detallar"
                            onChange={validar_literal_4_1_12_detallar}
                            value={userData["literal_4_1_12_detallar"] || ""}
                        /><LeyendaError>{msg_literal_4_1_12_detallar}</LeyendaError>
                    </div>
                    <div className="basis-1/4 md:w-1/2 px-2">
                        <Input
                            type="month"
                            color={color_literal_4_1_12_fecha}
                            size="regular"
                            id="literal_4_1_12_fecha"
                            name="literal_4_1_12_fecha"
                            outline={true}
                            className=""
                            placeholder="Fecha"
                            onChange={validar_literal_4_1_12_fecha}
                            value={userData["literal_4_1_12_fecha"] || ""}
                        /><LeyendaError>{msg_literal_4_1_12_fecha}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.1.13 */}
                <p className="w-3/4 mt-3">
                    ¿Ha sido sometido a intervención quirúrgica?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_13_si"
                            name="literal_4_1_13"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_1_13}
                            value={userData["literal_4_1_13_si"] || "Si"}
                            checked={userData.literal_4_1_13 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_13_no"
                            name="literal_4_1_13"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_1_13}
                            value={userData["literal_4_1_13_no"] || "No"}
                            checked={userData.literal_4_1_13 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_1_13" className="flex flex-row mb-2 space-x-20 -mt-12 pt-2" style={{ display: "none" }}>
                    <div className="basis-2/4 pr-3 md:w-1/2 mb-6 md:mb-0">
                        <Input
                            type="text"
                            color={color_literal_4_1_13_especifique}
                            size="regular"
                            id="literal_4_1_13_especifique"
                            name="literal_4_1_13_especifique"
                            outline={true}
                            className=""
                            placeholder="Especifique"
                            onChange={validar_literal_4_1_13_especifique}
                            value={userData["literal_4_1_13_especifique"] || ""}
                        /><LeyendaError>{msg_literal_4_1_13_especifique}</LeyendaError>
                    </div>
                    <div className="basis-1/4 md:w-1/2 pl-2">
                        <Input
                            type="month"
                            color={color_literal_4_1_13_fecha}
                            size="regular"
                            id="literal_4_1_13_fecha"
                            name="literal_4_1_13_fecha"
                            outline={true}
                            className=""
                            placeholder="Fecha"
                            onChange={validar_literal_4_1_13_fecha}
                            value={userData["literal_4_1_13_fecha"] || ""}
                        /><LeyendaError>{msg_literal_4_1_13_fecha}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.1.14 */}
                <p className="w-3/4 mt-3">
                    ¿Tiene Ud. hospitalización pendiente?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_14_si"
                            name="literal_4_1_14"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_1_14}
                            value={userData["literal_4_1_14_si"] || "Si"}
                            checked={userData.literal_4_1_14 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_14_no"
                            name="literal_4_1_14"
                            className=""
                            placeholder="No"
                            onChange={habilitar_literal_4_1_14}
                            value={userData["literal_4_1_14_no"] || "No"}
                            checked={userData.literal_4_1_14 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_1_14" className="flex flex-row mb-2 space-x-20 -mt-12 pt-2" style={{ display: "none" }}>
                    <div className="basis-2/4 md:w-1/2 mb-6 md:mb-0 pr-3">
                        <Input
                            type="text"
                            color={color_literal_4_1_14_indicar}
                            size="regular"
                            id="literal_4_1_14_indicar"
                            name="literal_4_1_14_indicar"
                            outline={true}
                            className=""
                            placeholder="Indicar"
                            onChange={validar_literal_4_1_14_indicar}
                            value={userData["literal_4_1_14_indicar"] || ""}
                        /><LeyendaError>{msg_literal_4_1_14_indicar}</LeyendaError>
                    </div>
                    <div className="basis-1/4 md:w-1/2 pl-2">
                        <Input
                            type="month"
                            color={color_literal_4_1_14_fecha}
                            size="regular"
                            id="literal_4_1_14_fecha"
                            name="literal_4_1_14_fecha"
                            outline={true}
                            className=""
                            placeholder="Fecha"
                            onChange={validar_literal_4_1_14_fecha}
                            value={userData["literal_4_1_14_fecha"] || ""}
                        /><LeyendaError>{msg_literal_4_1_14_fecha}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.1.15 */}
                <p className="w-4/5 mt-3">
                    ¿Está Ud. actualmente sometido a algún tratamiento o terapia o tomando medicamentos de cualquier tipo?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_15_si"
                            name="literal_4_1_15"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_1_15}
                            value={userData["literal_4_1_15_si"] || "Si"}
                            checked={userData.literal_4_1_15 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_1_15_no"
                            name="literal_4_1_15"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_1_15}
                            value={userData["literal_4_1_15_no"] || "No"}
                            checked={userData.literal_4_1_15 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_1_15" className="flex flex-row mb-2 space-x-20 -mt-12 pt-2" style={{ display: "none" }}>
                    <div className="basis-2/4 md:w-1/2 mb-6 md:mb-0 pr-3">
                        <Input
                            type="text"
                            color={color_literal_4_1_15_especifique}
                            id="literal_4_1_15_especifique"
                            name="literal_4_1_15_especifique"
                            outline={true}
                            className=""
                            placeholder="Especifique"
                            onChange={validar_literal_4_1_15_especifique}
                            value={userData["literal_4_1_15_especifique"] || ""}
                        /><LeyendaError>{msg_literal_4_1_15_especifique}</LeyendaError>
                    </div>
                    <div className="basis-1/4 md:w-1/2 pl-2">
                        <Input
                            type="month"
                            color={color_literal_4_1_15_fecha}
                            size="regular"
                            id="literal_4_1_15_fecha"
                            name="literal_4_1_15_fecha"
                            outline={true}
                            className=""
                            placeholder="Fecha"
                            onChange={validar_literal_4_1_15_fecha}
                            value={userData["literal_4_1_15_fecha"] || ""}
                        /><LeyendaError>{msg_literal_4_1_15_fecha}</LeyendaError>
                    </div>
                </div>
            </div>
            {/* APARTADO 4.2 */}
            <div className="text-justify mt-6">
                <h3 className="px-3 text-sm mt-3"><b>Ha padecido o tiene conocimiento de sufrir de:</b></h3>
            </div>
            <div className="px-4 text-sm mt-2">
                {/* SECCIÓN 4.2.1 */}
                <p className="w-3/4 mt-3">
                    ¿Vértigos, convulsiones, epilepsia, parálisis, enfermedades mentales, dolores de cabeza severos
                    o jaquecas?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_1_si"
                            name="literal_4_2_1"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_2_1}
                            value={userData["literal_4_2_1_si"] || "Si"}
                            checked={userData.literal_4_2_1 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_1_no"
                            name="literal_4_2_1"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_2_1}
                            value={userData["literal_4_2_1_no"] || "No"}
                            checked={userData.literal_4_2_1 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_2_1" className='flex flex-row mb-3 space-x-5 -mt-12' style={{ display: "none" }}>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿CUÁLES?
                        </label>
                        <div className="flex justify-left my-1 mb-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_1_vertigos"
                                    name="literal_4_2_1_vertigos"
                                    className=""
                                    placeholder=""
                                    onChange={handleVertigos}
                                    value={isChecked_Vertigos}
                                />
                            </label>
                            <label htmlFor="literal_4_2_1_vertigos" className="inline-flex items-center">
                                <span className="ml-1">Vértigos</span>
                            </label>
                            <label className="inline-flex items-center pl-6">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_1_convulsiones"
                                    name="literal_4_2_1_convulsiones"
                                    className=""
                                    placeholder=""
                                    onChange={handleConvulsiones}
                                    value={isChecked_Convulsiones}
                                />
                            </label>
                            <label htmlFor="literal_4_2_1_convulsiones" className="inline-flex items-center">
                                <span className="ml-1">Convulsiones</span>
                            </label>
                            <label className="inline-flex items-center pl-6">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_1_epilepsia"
                                    name="literal_4_2_1_epilepsia"
                                    className=""
                                    placeholder=""
                                    onChange={handleEpilepsia}
                                    value={isChecked_Epilepsia}
                                />
                            </label>
                            <label htmlFor="literal_4_2_1_epilepsia" className="inline-flex items-center">
                                <span className="ml-1">Epilepsia</span>
                            </label>
                            <label className="inline-flex items-center pl-6">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_1_paralisis"
                                    name="literal_4_2_1_paralisis"
                                    className=""
                                    placeholder=""
                                    onChange={handleParalisis}
                                    value={isChecked_Paralisis}
                                />
                            </label>
                            <label htmlFor="literal_4_2_1_paralisis" className="inline-flex items-center">
                                <span className="ml-1">Parálisis</span>
                            </label>
                            <label className="inline-flex items-center pl-6">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_1_enfermedades_mentales"
                                    name="literal_4_2_1_enfermedades_mentales"
                                    className=""
                                    placeholder=""
                                    onChange={handleEnfermedadesMentales}
                                    value={isChecked_EnfermedadesMentales}
                                />
                            </label>
                            <label htmlFor="literal_4_2_1_enfermedades_mentales" className="inline-flex items-center">
                                <span className="ml-1">Enfermedades mentales</span>
                            </label>
                            <label className="inline-flex items-center pl-6">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_1_dolores_cabeza"
                                    name="literal_4_2_1_dolores_cabeza"
                                    className=""
                                    placeholder=""
                                    onChange={handleDoloresCabeza}
                                    value={isChecked_DoloresCabeza}
                                />
                            </label>
                            <label htmlFor="literal_4_2_1_dolores_cabeza" className="inline-flex items-center">
                                <span className="ml-1">Dolores de cabeza severos</span>
                            </label>
                            <label className="inline-flex items-center pl-6">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_1_jaquecas"
                                    name="literal_4_2_1_jaquecas"
                                    className=""
                                    placeholder=""
                                    onChange={handleJaquecas}
                                    value={isChecked_Jaquecas}
                                />
                            </label>
                            <label htmlFor="literal_4_2_1_jaquecas" className="inline-flex items-center">
                                <span className="ml-1">Jaquecas</span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Vértigos */}
                <div id="div_4_2_1_vertigos" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Vértigos
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_1_vertigos_fecha}
                                    size="regular"
                                    id="literal_4_2_1_vertigos_fecha"
                                    name="literal_4_2_1_vertigos_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_1_vertigos_fecha}
                                    value={userData["literal_4_2_1_vertigos_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_vertigos_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Vértigos
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_1_vertigos_tratamiento}
                                    size="regular"
                                    id="literal_4_2_1_vertigos_tratamiento"
                                    name="literal_4_2_1_vertigos_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_1_vertigos_tratamiento}
                                    value={userData["literal_4_2_1_vertigos_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_vertigos_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Convulsiones */}
                <div id="div_4_2_1_convulsiones" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Convulsiones
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_1_convulsiones_fecha}
                                    size="regular"
                                    id="literal_4_2_1_convulsiones_fecha"
                                    name="literal_4_2_1_convulsiones_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_1_convulsiones_fecha}
                                    value={userData["literal_4_2_1_convulsiones_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_convulsiones_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Convulsiones
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_1_convulsiones_tratamiento}
                                    size="regular"
                                    id="literal_4_2_1_convulsiones_tratamiento"
                                    name="literal_4_2_1_convulsiones_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_1_convulsiones_tratamiento}
                                    value={userData["literal_4_2_1_convulsiones_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_convulsiones_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Epilepsia */}
                <div id="div_4_2_1_epilepsia" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Epilepsia
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_1_epilepsia_fecha}
                                    size="regular"
                                    id="literal_4_2_1_epilepsia_fecha"
                                    name="literal_4_2_1_epilepsia_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_1_epilepsia_fecha}
                                    value={userData["literal_4_2_1_epilepsia_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_epilepsia_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Epilepsia
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_1_epilepsia_tratamiento}
                                    size="regular"
                                    id="literal_4_2_1_epilepsia_tratamiento"
                                    name="literal_4_2_1_epilepsia_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_1_epilepsia_tratamiento}
                                    value={userData["literal_4_2_1_epilepsia_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_epilepsia_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Parálisis */}
                <div id="div_4_2_1_paralisis" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Detección - Parálisis
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_1_paralisis_fecha}
                                    size="regular"
                                    id="literal_4_2_1_paralisis_fecha"
                                    name="literal_4_2_1_paralisis_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_1_paralisis_fecha}
                                    value={userData["literal_4_2_1_paralisis_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_paralisis_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Parálisis
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_1_paralisis_tratamiento}
                                    size="regular"
                                    id="literal_4_2_1_paralisis_tratamiento"
                                    name="literal_4_2_1_paralisis_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_1_paralisis_tratamiento}
                                    value={userData["literal_4_2_1_paralisis_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_paralisis_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Enfermedades Mentales */}
                <div id="div_4_2_1_enfermedades_mentales" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Enfermedades Mentales
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_1_enfermedades_mentales_fecha}
                                    size="regular"
                                    id="literal_4_2_1_enfermedades_mentales_fecha"
                                    name="literal_4_2_1_enfermedades_mentales_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_1_enfermedades_mentales_fecha}
                                    value={userData["literal_4_2_1_enfermedades_mentales_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_enfermedades_mentales_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Enfermedades Mentales
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_1_enfermedades_mentales_tratamiento}
                                    size="regular"
                                    id="literal_4_2_1_enfermedades_mentales_tratamiento"
                                    name="literal_4_2_1_enfermedades_mentales_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_1_enfermedades_mentales_tratamiento}
                                    value={userData["literal_4_2_1_enfermedades_mentales_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_enfermedades_mentales_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Dolores de Cabeza Serveros */}
                <div id="div_4_2_1_dolores_cabeza" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Dolores de Cabeza Serveros
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_1_dolores_cabeza_fecha}
                                    size="regular"
                                    id="literal_4_2_1_dolores_cabeza_fecha"
                                    name="literal_4_2_1_dolores_cabeza_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_1_dolores_cabeza_fecha}
                                    value={userData["literal_4_2_1_dolores_cabeza_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_dolores_cabeza_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamieto - Dolores de Cabeza Serveros
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_1_dolores_cabeza_tratamiento}
                                    size="regular"
                                    id="literal_4_2_1_dolores_cabeza_tratamiento"
                                    name="literal_4_2_1_dolores_cabeza_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_1_dolores_cabeza_tratamiento}
                                    value={userData["literal_4_2_1_dolores_cabeza_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_dolores_cabeza_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Jaquecas */}
                <div id="div_4_2_1_jaquecas" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Jaquecas
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_1_jaquecas_fecha}
                                    size="regular"
                                    id="literal_4_2_1_jaquecas_fecha"
                                    name="literal_4_2_1_jaquecas_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_1_jaquecas_fecha}
                                    value={userData["literal_4_2_1_jaquecas_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_jaquecas_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Jaquecas
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_1_jaquecas_tratamiento}
                                    size="regular"
                                    id="literal_4_2_1_jaquecas_tratamiento"
                                    name="literal_4_2_1_jaquecas_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_1_jaquecas_tratamiento}
                                    value={userData["literal_4_2_1_jaquecas_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_1_jaquecas_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.2.2 */}
                <p className="w-3/4 mt-3">
                    ¿Tos crónica, enfisema, cansancio al caminar o cualquier otra enfermedad de los pulmones o
                    sistema respiratorio?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_2_si"
                            name="literal_4_2_2"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_2_2}
                            value={userData["literal_4_2_2_si"] || "Si"}
                            checked={userData.literal_4_2_2 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_2_no"
                            name="literal_4_2_2"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_2_2}
                            value={userData["literal_4_2_2_no"] || "No"}
                            checked={userData.literal_4_2_2 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_2_2" className='flex flex-row mb-3 space-x-5 -mt-12' style={{ display: "none" }}>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿CUÁLES?
                        </label>
                        <div className="flex justify-left my-1 mb-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_2_tos_cronica"
                                    name="literal_4_2_2_tos_cronica"
                                    className=""
                                    placeholder=""
                                    onChange={handleTosCronica}
                                    value={isChecked_TosCronica}
                                />
                            </label>
                            <label htmlFor="literal_4_2_2_tos_cronica" className="inline-flex items-center">
                                <span className="ml-1">Tos crónica</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_2_enfisema"
                                    name="literal_4_2_2_enfisema"
                                    className=""
                                    placeholder=""
                                    onChange={handleEnfisema}
                                    value={isChecked_Enfisema}
                                />
                            </label>
                            <label htmlFor="literal_4_2_2_enfisema" className="inline-flex items-center">
                                <span className="ml-1">Enfisema</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_2_cansancio_caminar"
                                    name="literal_4_2_2_cansancio_caminar"
                                    className=""
                                    placeholder=""
                                    onChange={handleCansancioCaminar}
                                    value={isChecked_CansancioCaminar}
                                />
                            </label>
                            <label htmlFor="literal_4_2_2_cansancio_caminar" className="inline-flex items-center">
                                <span className="ml-1">Cansancio al caminar</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_2_pulmones"
                                    name="literal_4_2_2_pulmones"
                                    className=""
                                    placeholder=""
                                    onChange={handlePulmones}
                                    value={isChecked_Pulmones}
                                />
                            </label>
                            <label htmlFor="literal_4_2_2_pulmones" className="inline-flex items-center">
                                <span className="ml-1">Enfermedad de los pulmones o sistema repiratorio</span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Tos Crónica */}
                <div id="div_4_2_2_tos_cronica" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tos Crónica
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_2_tos_cronica_fecha}
                                    size="regular"
                                    id="literal_4_2_2_tos_cronica_fecha"
                                    name="literal_4_2_2_tos_cronica_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_2_tos_cronica_fecha}
                                    value={userData["literal_4_2_2_tos_cronica_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_2_tos_cronica_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Tos Crónica
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_2_tos_cronica_tratamiento}
                                    size="regular"
                                    id="literal_4_2_2_tos_cronica_tratamiento"
                                    name="literal_4_2_2_tos_cronica_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_2_tos_cronica_tratamiento}
                                    value={userData["literal_4_2_2_tos_cronica_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_2_tos_cronica_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Enfisema */}
                <div id="div_4_2_2_enfisema" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Enfisema
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_2_enfisema_fecha}
                                    size="regular"
                                    id="literal_4_2_2_enfisema_fecha"
                                    name="literal_4_2_2_enfisema_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_2_enfisema_fecha}
                                    value={userData["literal_4_2_2_enfisema_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_2_enfisema_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Enfisema
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_2_enfisema_tratamiento}
                                    size="regular"
                                    id="literal_4_2_2_enfisema_tratamiento"
                                    name="literal_4_2_2_enfisema_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_2_enfisema_tratamiento}
                                    value={userData["literal_4_2_2_enfisema_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_2_enfisema_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Cansancio al Caminar */}
                <div id="div_4_2_2_cansancio_caminar" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Cansancio al Caminar
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_2_cansancio_caminar_fecha}
                                    size="regular"
                                    id="literal_4_2_2_cansancio_caminar_fecha"
                                    name="literal_4_2_2_cansancio_caminar_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_2_cansancio_caminar_fecha}
                                    value={userData["literal_4_2_2_cansancio_caminar_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_2_cansancio_caminar_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Cansancio al Caminar
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_2_cansancio_caminar_tratamiento}
                                    size="regular"
                                    id="literal_4_2_2_cansancio_caminar_tratamiento"
                                    name="literal_4_2_2_cansancio_caminar_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_2_cansancio_caminar_tratamiento}
                                    value={userData["literal_4_2_2_cansancio_caminar_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_2_cansancio_caminar_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Enfermedad de los Pulmones o Sistema Respiratorio */}
                <div id="div_4_2_2_pulmones" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Enfermedad de los Pulmones
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_2_pulmones_fecha}
                                    size="regular"
                                    id="literal_4_2_2_pulmones_fecha"
                                    name="literal_4_2_2_pulmones_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_2_pulmones_fecha}
                                    value={userData["literal_4_2_2_pulmones_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_2_pulmones_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Enfermedad de los Pulmones
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_2_pulmones_tratamiento}
                                    size="regular"
                                    id="literal_4_2_2_pulmones_tratamiento"
                                    name="literal_4_2_2_pulmones_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_2_pulmones_tratamiento}
                                    value={userData["literal_4_2_2_pulmones_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_2_pulmones_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.2.3 */}
                <p className="w-3/4 mt-3">
                    ¿Presión alta, soplos en el corazón, arritmias u otra enfermedad del corazón?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_3_si"
                            name="literal_4_2_3"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_2_3}
                            value={userData["literal_4_2_3_si"] || "Si"}
                            checked={userData.literal_4_2_3 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_3_no"
                            name="literal_4_2_3"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_2_3}
                            value={userData["literal_4_2_3_no"] || "No"}
                            checked={userData.literal_4_2_3 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_2_3" className='flex flex-row mb-3 space-x-5 -mt-12' style={{ display: "none" }}>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿CUÁLES?
                        </label>
                        <div className="flex justify-left my-1 mb-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_3_presion_alta"
                                    name="literal_4_2_3_presion_alta"
                                    className=""
                                    placeholder=""
                                    onChange={handlePresionAlta}
                                    value={isChecked_PresionAlta}
                                />
                            </label>
                            <label htmlFor="literal_4_2_3_presion_alta" className="inline-flex items-center">
                                <span className="ml-1">Presión Alta</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_3_soplos_corazon"
                                    name="literal_4_2_3_soplos_corazon"
                                    className=""
                                    placeholder=""
                                    onChange={handleSoplosCorazon}
                                    value={isChecked_SoplosCorazon}
                                />
                            </label>
                            <label htmlFor="literal_4_2_3_soplos_corazon" className="inline-flex items-center">
                                <span className="ml-1">Soplos en el corazón</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_3_arritmias"
                                    name="literal_4_2_3_arritmias"
                                    className=""
                                    placeholder=""
                                    onChange={handleArritmias}
                                    value={isChecked_Arritmias}
                                />
                            </label>
                            <label htmlFor="literal_4_2_3_arritmias" className="inline-flex items-center">
                                <span className="ml-1">Arritmias</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_3_enfermedad_corazon"
                                    name="literal_4_2_3_enfermedad_corazon"
                                    className=""
                                    placeholder=""
                                    onChange={handleEnfermedadCorazon}
                                    value={isChecked_EnfermedadCorazon}
                                />
                            </label>
                            <label htmlFor="literal_4_2_3_enfermedad_corazon" className="inline-flex items-center">
                                <span className="ml-1">Otra enfermedad del corazón</span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Presión Alta */}
                <div id="div_4_2_3_presion_alta" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Presión Alta
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_3_presion_alta_fecha}
                                    size="regular"
                                    id="literal_4_2_3_presion_alta_fecha"
                                    name="literal_4_2_3_presion_alta_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_3_presion_alta_fecha}
                                    value={userData["literal_4_2_3_presion_alta_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_3_presion_alta_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Presión Alta
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_3_presion_alta_tratamiento}
                                    size="regular"
                                    id="literal_4_2_3_presion_alta_tratamiento"
                                    name="literal_4_2_3_presion_alta_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_3_presion_alta_tratamiento}
                                    value={userData["literal_4_2_3_presion_alta_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_3_presion_alta_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Soplos en el corazón */}
                <div id="div_4_2_3_soplos_corazon" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Soplos en el Corazón
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_3_soplos_corazon_fecha}
                                    size="regular"
                                    id="literal_4_2_3_soplos_corazon_fecha"
                                    name="literal_4_2_3_soplos_corazon_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_3_soplos_corazon_fecha}
                                    value={userData["literal_4_2_3_soplos_corazon_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_3_soplos_corazon_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Soplos Corazón
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_3_soplos_corazon_tratamiento}
                                    size="regular"
                                    id="literal_4_2_3_soplos_corazon_tratamiento"
                                    name="literal_4_2_3_soplos_corazon_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_3_soplos_corazon_tratamiento}
                                    value={userData["literal_4_2_3_soplos_corazon_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_3_soplos_corazon_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Arritmias */}
                <div id="div_4_2_3_arritmias" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Arritmias
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_3_arritmias_fecha}
                                    size="regular"
                                    id="literal_4_2_3_arritmias_fecha"
                                    name="literal_4_2_3_arritmias_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_3_arritmias_fecha}
                                    value={userData["literal_4_2_3_arritmias_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_3_arritmias_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Arritmias
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_3_arritmias_tratamiento}
                                    size="regular"
                                    id="literal_4_2_3_arritmias_tratamiento"
                                    name="literal_4_2_3_arritmias_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_3_arritmias_tratamiento}
                                    value={userData["literal_4_2_3_arritmias_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_3_arritmias_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Enfermedad Corazón */}
                <div id="div_4_2_3_enfermedad_corazon" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Enfermedad del Corazón
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_3_enfermedad_corazon_fecha}
                                    size="regular"
                                    id="literal_4_2_3_enfermedad_corazon_fecha"
                                    name="literal_4_2_3_enfermedad_corazon_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_3_enfermedad_corazon_fecha}
                                    value={userData["literal_4_2_3_enfermedad_corazon_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_3_enfermedad_corazon_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Enfermedad del Corazón
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_3_enfermedad_corazon_tratamiento}
                                    size="regular"
                                    id="literal_4_2_3_enfermedad_corazon_tratamiento"
                                    name="literal_4_2_3_enfermedad_corazon_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_3_enfermedad_corazon_tratamiento}
                                    value={userData["literal_4_2_3_enfermedad_corazon_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_3_enfermedad_corazon_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.2.4 */}
                <p className="w-3/4 mt-3">
                    ¿Cálculo en el riñón, próstata o vías urinarias, o cualquier otra enfermedad relacionada a la vejiga y vías urinarias?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_4_si"
                            name="literal_4_2_4"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_2_4}
                            value={userData["literal_4_2_4_si"] || "Si"}
                            checked={userData.literal_4_2_4 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_4_no"
                            name="literal_4_2_4"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_2_4}
                            value={userData["literal_4_2_4_no"] || "No"}
                            checked={userData.literal_4_2_4 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_2_4" className='flex flex-row mb-3 space-x-5 -mt-12' style={{ display: "none" }}>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿CUÁLES?
                        </label>
                        <div className="flex justify-left my-1 mb-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_4_calculo_rinion"
                                    name="literal_4_2_4_calculo_rinion"
                                    className=""
                                    placeholder=""
                                    onChange={handleCalculoRinion}
                                    value={isChecked_CalculoRinion}
                                />
                            </label>
                            <label htmlFor="literal_4_2_4_calculo_rinion" className="inline-flex items-center">
                                <span className="ml-1">Cálculo en riñón</span>
                            </label>
                            <label className="inline-flex items-center pl-10">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_4_calculo_prostata"
                                    name="literal_4_2_4_calculo_prostata"
                                    className=""
                                    placeholder=""
                                    onChange={handleCalculoProstata}
                                    value={isChecked_CalculoProstata}
                                />
                            </label>
                            <label htmlFor="literal_4_2_4_calculo_prostata" className="inline-flex items-center">
                                <span className="ml-1">Cálculo en próstata</span>
                            </label>
                            <label className="inline-flex items-center pl-10">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_4_calculo_urinarias"
                                    name="literal_4_2_4_calculo_urinarias"
                                    className=""
                                    placeholder=""
                                    onChange={handleCalculoUrinarias}
                                    value={isChecked_CalculoUrinarias}
                                />
                            </label>
                            <label htmlFor="literal_4_2_4_calculo_urinarias" className="inline-flex items-center">
                                <span className="ml-1">Cálculo en vías urinarias</span>
                            </label>
                            <label className="inline-flex items-center pl-10">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_4_enfermedad_vejiga"
                                    name="literal_4_2_4_enfermedad_vejiga"
                                    className=""
                                    placeholder=""
                                    onChange={handleEnfermedadVejiga}
                                    value={isChecked_EnfermedadVejiga}
                                />
                            </label>
                            <label htmlFor="literal_4_2_4_enfermedad_vejiga" className="inline-flex items-center">
                                <span className="ml-1">Enfermedad relacionada a la vejiga y vías urinarias</span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Cálculo en Riñón */}
                <div id="div_4_2_4_calculo_rinion" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Cálculo en Rinón
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_4_calculo_rinion_fecha}
                                    size="regular"
                                    id="literal_4_2_4_calculo_rinion_fecha"
                                    name="literal_4_2_4_calculo_rinion_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_4_calculo_rinion_fecha}
                                    value={userData["literal_4_2_4_calculo_rinion_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_4_calculo_rinion_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Cálculo en Rinón
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_4_calculo_rinion_tratamiento}
                                    size="regular"
                                    id="literal_4_2_4_calculo_rinion_tratamiento"
                                    name="literal_4_2_4_calculo_rinion_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_4_calculo_rinion_tratamiento}
                                    value={userData["literal_4_2_4_calculo_rinion_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_4_calculo_rinion_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Cálculo en Próstata */}
                <div id="div_4_2_4_calculo_prostata" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Cálculo en Próstata
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_4_calculo_prostata_fecha}
                                    size="regular"
                                    id="literal_4_2_4_calculo_prostata_fecha"
                                    name="literal_4_2_4_calculo_prostata_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_4_calculo_prostata_fecha}
                                    value={userData["literal_4_2_4_calculo_prostata_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_4_calculo_prostata_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Cálculo en Próstata
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_4_calculo_prostata_tratamiento}
                                    size="regular"
                                    id="literal_4_2_4_calculo_prostata_tratamiento"
                                    name="literal_4_2_4_calculo_prostata_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_4_calculo_prostata_tratamiento}
                                    value={userData["literal_4_2_4_calculo_prostata_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_4_calculo_prostata_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Cálculo en Vías Urinarias */}
                <div id="div_4_2_4_calculo_urinarias" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Cálculo en Vías Urinarias
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_4_calculo_urinarias_fecha}
                                    size="regular"
                                    id="literal_4_2_4_calculo_urinarias_fecha"
                                    name="literal_4_2_4_calculo_urinarias_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_4_calculo_urinarias_fecha}
                                    value={userData["literal_4_2_4_calculo_urinarias_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_4_calculo_urinarias_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Cálculo en Vías Urinarias
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_4_calculo_urinarias_tratamiento}
                                    size="regular"
                                    id="literal_4_2_4_calculo_urinarias_tratamiento"
                                    name="literal_4_2_4_calculo_urinarias_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_4_calculo_urinarias_tratamiento}
                                    value={userData["literal_4_2_4_calculo_urinarias_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_4_calculo_urinarias_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Enfermedad Relacionada a la Vejiga y las vías Urinarias */}
                <div id="div_4_2_4_enfermedad_vejiga" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Vejiga y Vías Urinarias
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_4_enfermedad_vejiga_fecha}
                                    size="regular"
                                    id="literal_4_2_4_enfermedad_vejiga_fecha"
                                    name="literal_4_2_4_enfermedad_vejiga_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_4_enfermedad_vejiga_fecha}
                                    value={userData["literal_4_2_4_enfermedad_vejiga_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_4_enfermedad_vejiga_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Enfermedad Relacionada a la Vejiga y las Vías Urinarias
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_4_enfermedad_vejiga_tratamiento}
                                    size="regular"
                                    id="literal_4_2_4_enfermedad_vejiga_tratamiento"
                                    name="literal_4_2_4_enfermedad_vejiga_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_4_enfermedad_vejiga_tratamiento}
                                    value={userData["literal_4_2_4_enfermedad_vejiga_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_4_enfermedad_vejiga_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.2.5 */}
                <p className="w-3/4 mt-3">
                    ¿Artritis, reumatismo, columna, huesos, músculos o extremidades o cualquier otra enfermedad relacionada con las articulaciones?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_5_si"
                            name="literal_4_2_5"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_2_5}
                            value={userData["literal_4_2_5_si"] || "Si"}
                            checked={userData.literal_4_2_5 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_5_no"
                            name="literal_4_2_5"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_2_5}
                            value={userData["literal_4_2_5_no"] || "No"}
                            checked={userData.literal_4_2_5 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_2_5" className='flex flex-row mb-3 space-x-5 -mt-12' style={{ display: "none" }}>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿CUÁLES?
                        </label>
                        <div className="flex justify-left my-1 mb-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_5_artritis"
                                    name="literal_4_2_5_artritis"
                                    className=""
                                    placeholder=""
                                    onChange={handleArtritis}
                                    value={isChecked_Artritis}
                                />
                            </label>
                            <label htmlFor="literal_4_2_5_artritis" className="inline-flex items-center">
                                <span className="ml-1">Artritis</span>
                            </label>
                            <label className="inline-flex items-center pl-5">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_5_reumatismo"
                                    name="literal_4_2_5_reumatismo"
                                    className=""
                                    placeholder=""
                                    onChange={handleReumatismo}
                                    value={isChecked_Reumatismo}
                                />
                            </label>
                            <label htmlFor="literal_4_2_5_reumatismo" className="inline-flex items-center">
                                <span className="ml-1">Reumatismo</span>
                            </label>
                            <label className="inline-flex items-center pl-5">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_5_columna"
                                    name="literal_4_2_5_columna"
                                    className=""
                                    placeholder=""
                                    onChange={handleColumna}
                                    value={isChecked_Columna}
                                />
                            </label>
                            <label htmlFor="literal_4_2_5_columna" className="inline-flex items-center">
                                <span className="ml-1">Columna</span>
                            </label>
                            <label className="inline-flex items-center pl-5">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_5_huesos"
                                    name="literal_4_2_5_huesos"
                                    className=""
                                    placeholder=""
                                    onChange={handleHuesos}
                                    value={isChecked_Huesos}
                                />
                            </label>
                            <label htmlFor="literal_4_2_5_huesos" className="inline-flex items-center">
                                <span className="ml-1">Huesos</span>
                            </label>
                            <label className="inline-flex items-center pl-5">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_5_musculos"
                                    name="literal_4_2_5_musculos"
                                    className=""
                                    placeholder=""
                                    onChange={handleMusculos}
                                    value={isChecked_Musculos}
                                />
                            </label>
                            <label htmlFor="literal_4_2_5_musculos" className="inline-flex items-center">
                                <span className="ml-1">Músculos</span>
                            </label>
                            <label className="inline-flex items-center pl-5">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_5_extremidades"
                                    name="literal_4_2_5_extremidades"
                                    className=""
                                    placeholder=""
                                    onChange={handleExtremidades}
                                    value={isChecked_Extremidades}
                                />
                            </label>
                            <label htmlFor="literal_4_2_5_extremidades" className="inline-flex items-center">
                                <span className="ml-1">Extremidades</span>
                            </label>
                            <label className="inline-flex items-center pl-5">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_5_articulaciones"
                                    name="literal_4_2_5_articulaciones"
                                    className=""
                                    placeholder=""
                                    onChange={handleArticulaciones}
                                    value={isChecked_Articulaciones}
                                />
                            </label>
                            <label htmlFor="literal_4_2_5_articulaciones" className="inline-flex items-center">
                                <span className="ml-1">Enfermedad relacionada con articulaciones</span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Artritis */}
                <div id="div_4_2_5_artritis" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Artritis
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_5_artritis_fecha}
                                    size="regular"
                                    id="literal_4_2_5_artritis_fecha"
                                    name="literal_4_2_5_artritis_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_5_artritis_fecha}
                                    value={userData["literal_4_2_5_artritis_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_artritis_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Artritis
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_5_artritis_tratamiento}
                                    size="regular"
                                    id="literal_4_2_5_artritis_tratamiento"
                                    name="literal_4_2_5_artritis_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_5_artritis_tratamiento}
                                    value={userData["literal_4_2_5_artritis_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_artritis_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Reumatismo */}
                <div id="div_4_2_5_reumatismo" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Reumatismo
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_5_reumatismo_fecha}
                                    size="regular"
                                    id="literal_4_2_5_reumatismo_fecha"
                                    name="literal_4_2_5_reumatismo_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_5_reumatismo_fecha}
                                    value={userData["literal_4_2_5_reumatismo_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_reumatismo_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Reumatismo
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_5_reumatismo_tratamiento}
                                    size="regular"
                                    id="literal_4_2_5_reumatismo_tratamiento"
                                    name="literal_4_2_5_reumatismo_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_5_reumatismo_tratamiento}
                                    value={userData["literal_4_2_5_reumatismo_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_reumatismo_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Columna */}
                <div id="div_4_2_5_columna" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Columna
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_5_columna_fecha}
                                    size="regular"
                                    id="literal_4_2_5_columna_fecha"
                                    name="literal_4_2_5_columna_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_5_columna_fecha}
                                    value={userData["literal_4_2_5_columna_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_columna_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Columna
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_5_columna_tratamiento}
                                    size="regular"
                                    id="literal_4_2_5_columna_tratamiento"
                                    name="literal_4_2_5_columna_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_5_columna_tratamiento}
                                    value={userData["literal_4_2_5_columna_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_columna_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Huesos */}
                <div id="div_4_2_5_huesos" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Huesos
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_5_huesos_fecha}
                                    size="regular"
                                    id="literal_4_2_5_huesos_fecha"
                                    name="literal_4_2_5_huesos_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_5_huesos_fecha}
                                    value={userData["literal_4_2_5_huesos_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_huesos_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Huesos
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_5_huesos_tratamiento}
                                    size="regular"
                                    id="literal_4_2_5_huesos_tratamiento"
                                    name="literal_4_2_5_huesos_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_5_huesos_tratamiento}
                                    value={userData["literal_4_2_5_huesos_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_huesos_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Músculos */}
                <div id="div_4_2_5_musculos" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Músculos
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_5_musculos_fecha}
                                    size="regular"
                                    id="literal_4_2_5_musculos_fecha"
                                    name="literal_4_2_5_musculos_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_5_musculos_fecha}
                                    value={userData["literal_4_2_5_musculos_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_musculos_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Músculos
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_5_musculos_tratamiento}
                                    size="regular"
                                    id="literal_4_2_5_musculos_tratamiento"
                                    name="literal_4_2_5_musculos_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_5_musculos_tratamiento}
                                    value={userData["literal_4_2_5_musculos_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_musculos_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Extremidades */}
                <div id="div_4_2_5_extremidades" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Extremidades
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_5_extremidades_fecha}
                                    size="regular"
                                    id="literal_4_2_5_extremidades_fecha"
                                    name="literal_4_2_5_extremidades_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_5_extremidades_fecha}
                                    value={userData["literal_4_2_5_extremidades_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_extremidades_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Extremidades
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_5_extremidades_tratamiento}
                                    size="regular"
                                    id="literal_4_2_5_extremidades_tratamiento"
                                    name="literal_4_2_5_extremidades_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_5_extremidades_tratamiento}
                                    value={userData["literal_4_2_5_extremidades_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_extremidades_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Enfermedad Relacionada con Articulaciones */}
                <div id="div_4_2_5_articulaciones" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Articulaciones
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_5_articulaciones_fecha}
                                    size="regular"
                                    id="literal_4_2_5_articulaciones_fecha"
                                    name="literal_4_2_5_articulaciones_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_5_articulaciones_fecha}
                                    value={userData["literal_4_2_5_articulaciones_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_articulaciones_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Enfermedad Relacionada con Articulaciones
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_5_articulaciones_tratamiento}
                                    size="regular"
                                    id="literal_4_2_5_articulaciones_tratamiento"
                                    name="literal_4_2_5_articulaciones_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_5_articulaciones_tratamiento}
                                    value={userData["literal_4_2_5_articulaciones_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_5_articulaciones_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.2.6 */}
                <p className="w-3/4 mt-3">
                    ¿Hemofilia, alteraciones de coagulación, hemorragias persistentes o cualquier otra enfermedad de la sangre?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_6_si"
                            name="literal_4_2_6"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_2_6}
                            value={userData["literal_4_2_6_si"] || "Si"}
                            checked={userData.literal_4_2_6 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_6_no"
                            name="literal_4_2_6"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_2_6}
                            value={userData["literal_4_2_6_no"] || "No"}
                            checked={userData.literal_4_2_6 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_2_6" className='flex flex-row mb-3 space-x-5 -mt-12' style={{ display: "none" }}>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿CUÁLES?
                        </label>
                        <div className="flex justify-left my-1 mb-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_6_hemofilia"
                                    name="literal_4_2_6_hemofilia"
                                    className=""
                                    placeholder=""
                                    onChange={handleHemofilia}
                                    value={isChecked_Hemofilia}
                                />
                            </label>
                            <label htmlFor="literal_4_2_6_hemofilia" className="inline-flex items-center">
                                <span className="ml-1">Hemofilia</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_6_alteraciones_coagulacion"
                                    name="literal_4_2_6_alteraciones_coagulacion"
                                    className=""
                                    placeholder=""
                                    onChange={handleAlteracionesCoagulacion}
                                    value={isChecked_AlteracionesCoagulacion}
                                />
                            </label>
                            <label htmlFor="literal_4_2_6_alteraciones_coagulacion" className="inline-flex items-center">
                                <span className="ml-1">Alteraciones de coagulación</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_6_hemorragias_persistentes"
                                    name="literal_4_2_6_hemorragias_persistentes"
                                    className=""
                                    placeholder=""
                                    onChange={handleHemorragiasPersistentes}
                                    value={isChecked_HemorragiasPersistentes}
                                />
                            </label>
                            <label htmlFor="literal_4_2_6_hemorragias_persistentes" className="inline-flex items-center">
                                <span className="ml-1">Hemorragias persistentes</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_6_enfermedad_sangre"
                                    name="literal_4_2_6_enfermedad_sangre"
                                    className=""
                                    placeholder=""
                                    onChange={handleEnfermedadSangre}
                                    value={isChecked_EnfermedadSangre}
                                />
                            </label>
                            <label htmlFor="literal_4_2_6_enfermedad_sangre" className="inline-flex items-center">
                                <span className="ml-1">Otra enfermedad de la sangre</span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Hemofilia */}
                <div id="div_4_2_6_hemofilia" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Hemofilia
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_6_hemofilia_fecha}
                                    size="regular"
                                    id="literal_4_2_6_hemofilia_fecha"
                                    name="literal_4_2_6_hemofilia_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_6_hemofilia_fecha}
                                    value={userData["literal_4_2_6_hemofilia_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_6_hemofilia_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Hemofilia
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_6_hemofilia_tratamiento}
                                    size="regular"
                                    id="literal_4_2_6_hemofilia_tratamiento"
                                    name="literal_4_2_6_hemofilia_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_6_hemofilia_tratamiento}
                                    value={userData["literal_4_2_6_hemofilia_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_6_hemofilia_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Alteraciones de Coagulación */}
                <div id="div_4_2_6_alteraciones_coagulacion" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Alteraciones de Coagulación
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_6_alteraciones_coagulacion_fecha}
                                    size="regular"
                                    id="literal_4_2_6_alteraciones_coagulacion_fecha"
                                    name="literal_4_2_6_alteraciones_coagulacion_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_6_alteraciones_coagulacion_fecha}
                                    value={userData["literal_4_2_6_alteraciones_coagulacion_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_6_alteraciones_coagulacion_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Alteraciones de Coagulación
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_6_alteraciones_coagulacion_tratamiento}
                                    size="regular"
                                    id="literal_4_2_6_alteraciones_coagulacion_tratamiento"
                                    name="literal_4_2_6_alteraciones_coagulacion_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_6_alteraciones_coagulacion_tratamiento}
                                    value={userData["literal_4_2_6_alteraciones_coagulacion_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_6_alteraciones_coagulacion_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Hemorragias Persistentes */}
                <div id="div_4_2_6_hemorragias_persistentes" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Hemorragias Persistentes
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_6_hemorragias_persistentes_fecha}
                                    size="regular"
                                    id="literal_4_2_6_hemorragias_persistentes_fecha"
                                    name="literal_4_2_6_hemorragias_persistentes_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_6_hemorragias_persistentes_fecha}
                                    value={userData["literal_4_2_6_hemorragias_persistentes_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_6_hemorragias_persistentes_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Hemorragias Persistentes
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_6_hemorragias_persistentes_tratamiento}
                                    size="regular"
                                    id="literal_4_2_6_hemorragias_persistentes_tratamiento"
                                    name="literal_4_2_6_hemorragias_persistentes_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_6_hemorragias_persistentes_tratamiento}
                                    value={userData["literal_4_2_6_hemorragias_persistentes_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_6_hemorragias_persistentes_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Enfermedad de la Sangre */}
                <div id="div_4_2_6_enfermedad_sangre" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Enfermedad de la Sangre
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_6_enfermedad_sangre_fecha}
                                    size="regular"
                                    id="literal_4_2_6_enfermedad_sangre_fecha"
                                    name="literal_4_2_6_enfermedad_sangre_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_6_enfermedad_sangre_fecha}
                                    value={userData["literal_4_2_6_enfermedad_sangre_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_6_enfermedad_sangre_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Enfermedad de la Sangre
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_6_enfermedad_sangre_tratamiento}
                                    size="regular"
                                    id="literal_4_2_6_enfermedad_sangre_tratamiento"
                                    name="literal_4_2_6_enfermedad_sangre_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_6_enfermedad_sangre_tratamiento}
                                    value={userData["literal_4_2_6_enfermedad_sangre_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_6_enfermedad_sangre_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.2.7 */}
                <p className="w-3/4 mt-3">
                    ¿Bocio, colesterol elevado, enfermedad de las glándulas endocrinas?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_7_si"
                            name="literal_4_2_7"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_2_7}
                            value={userData["literal_4_2_7_si"] || "Si"}
                            checked={userData.literal_4_2_7 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_7_no"
                            name="literal_4_2_7"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_2_7}
                            value={userData["literal_4_2_7_no"] || "No"}
                            checked={userData.literal_4_2_7 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_2_7" className='flex flex-row mb-3 space-x-5 -mt-12' style={{ display: "none" }}>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿CUÁLES?
                        </label>
                        <div className="flex justify-left my-1 mb-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_7_bocio"
                                    name="literal_4_2_7_bocio"
                                    className=""
                                    placeholder=""
                                    onChange={handleBocio}
                                    value={isChecked_Bocio}
                                />
                            </label>
                            <label htmlFor="literal_4_2_7_bocio" className="inline-flex items-center">
                                <span className="ml-1">Bocio</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_7_colesterol_elevado"
                                    name="literal_4_2_7_colesterol_elevado"
                                    className=""
                                    placeholder=""
                                    onChange={handleColesterolElevado}
                                    value={isChecked_ColesterolElevado}
                                />
                            </label>
                            <label htmlFor="literal_4_2_7_colesterol_elevado" className="inline-flex items-center">
                                <span className="ml-1">Colesterol elevado</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_7_enfermedad_glandulas"
                                    name="literal_4_2_7_enfermedad_glandulas"
                                    className=""
                                    placeholder=""
                                    onChange={handleEnfermedadGlandulas}
                                    value={isChecked_EnfermedadGlandulas}
                                />
                            </label>
                            <label htmlFor="literal_4_2_7_enfermedad_glandulas" className="inline-flex items-center">
                                <span className="ml-1">Enfermedad de las glándulas endocrinas</span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Bocio */}
                <div id="div_4_2_7_bocio" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Bocio
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_7_bocio_fecha}
                                    size="regular"
                                    id="literal_4_2_7_bocio_fecha"
                                    name="literal_4_2_7_bocio_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_7_bocio_fecha}
                                    value={userData["literal_4_2_7_bocio_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_7_bocio_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Bocio
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_7_bocio_tratamiento}
                                    size="regular"
                                    id="literal_4_2_7_bocio_tratamiento"
                                    name="literal_4_2_7_bocio_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_7_bocio_tratamiento}
                                    value={userData["literal_4_2_7_bocio_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_7_bocio_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Colesterol Elevado */}
                <div id="div_4_2_7_colesterol_elevado" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Colesterol Elevado
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_7_colesterol_elevado_fecha}
                                    size="regular"
                                    id="literal_4_2_7_colesterol_elevado_fecha"
                                    name="literal_4_2_7_colesterol_elevado_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_7_colesterol_elevado_fecha}
                                    value={userData["literal_4_2_7_colesterol_elevado_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_7_colesterol_elevado_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Colesterol Elevado
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_7_colesterol_elevado_tratamiento}
                                    size="regular"
                                    id="literal_4_2_7_colesterol_elevado_tratamiento"
                                    name="literal_4_2_7_colesterol_elevado_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_7_colesterol_elevado_tratamiento}
                                    value={userData["literal_4_2_7_colesterol_elevado_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_7_colesterol_elevado_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Enfermedad de las Glándulas Endocrinas */}
                <div id="div_4_2_7_enfermedad_glandulas" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Glándulas Endocrinas
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_7_enfermedad_glandulas_fecha}
                                    size="regular"
                                    id="literal_4_2_7_enfermedad_glandulas_fecha"
                                    name="literal_4_2_7_enfermedad_glandulas_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_7_enfermedad_glandulas_fecha}
                                    value={userData["literal_4_2_7_enfermedad_glandulas_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_7_enfermedad_glandulas_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Enfermedad de las Glándulas Endocrinas
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_7_enfermedad_glandulas_tratamiento}
                                    size="regular"
                                    id="literal_4_2_7_enfermedad_glandulas_tratamiento"
                                    name="literal_4_2_7_enfermedad_glandulas_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_7_enfermedad_glandulas_tratamiento}
                                    value={userData["literal_4_2_7_enfermedad_glandulas_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_7_enfermedad_glandulas_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.2.8 */}
                <p className="w-3/4 mt-3">
                    ¿Cáncer, quistes, úlceras varicosas u otras enfermedades de igual naturaleza, hernias de cualquier tipo?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_8_si"
                            name="literal_4_2_8"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_2_8}
                            value={userData["literal_4_2_8_si"] || "Si"}
                            checked={userData.literal_4_2_8 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_8_no"
                            name="literal_4_2_8"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_2_8}
                            value={userData["literal_4_2_8_no"] || "No"}
                            checked={userData.literal_4_2_8 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_2_8" className='flex flex-row mb-3 space-x-5 -mt-12' style={{ display: "none" }}>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿CUÁLES?
                        </label>
                        <div className="flex justify-left my-1 mb-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_8_cancer"
                                    name="literal_4_2_8_cancer"
                                    className=""
                                    placeholder=""
                                    onChange={handleCancer}
                                    value={isChecked_Cancer}
                                />
                            </label>
                            <label htmlFor="literal_4_2_8_cancer" className="inline-flex items-center">
                                <span className="ml-1">Cáncer</span>
                            </label>
                            <label className="inline-flex items-center pl-10">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_8_quistes"
                                    name="literal_4_2_8_quistes"
                                    className=""
                                    placeholder=""
                                    onChange={handleQuistes}
                                    value={isChecked_Quistes}
                                />
                            </label>
                            <label htmlFor="literal_4_2_8_quistes" className="inline-flex items-center">
                                <span className="ml-1">Quistes</span>
                            </label>
                            <label className="inline-flex items-center pl-10">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_8_ulceras"
                                    name="literal_4_2_8_ulceras"
                                    className=""
                                    placeholder=""
                                    onChange={handleUlceras}
                                    value={isChecked_Ulceras}
                                />
                            </label>
                            <label htmlFor="literal_4_2_8_ulceras" className="inline-flex items-center">
                                <span className="ml-1">Úlceras varicosas u otras enfermedades de igual naturaleza</span>
                            </label>
                            <label className="inline-flex items-center pl-10">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_2_8_hernias"
                                    name="literal_4_2_8_hernias"
                                    className=""
                                    placeholder=""
                                    onChange={handleHernias}
                                    value={isChecked_Hernias}
                                />
                            </label>
                            <label htmlFor="literal_4_2_8_hernias" className="inline-flex items-center">
                                <span className="ml-1">Hernias de cualquier tipo</span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Cáncer */}
                <div id="div_4_2_8_cancer" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Cáncer
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_8_cancer_fecha}
                                    size="regular"
                                    id="literal_4_2_8_cancer_fecha"
                                    name="literal_4_2_8_cancer_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_8_cancer_fecha}
                                    value={userData["literal_4_2_8_cancer_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_8_cancer_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Cáncer
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_8_cancer_tratamiento}
                                    size="regular"
                                    id="literal_4_2_8_cancer_tratamiento"
                                    name="literal_4_2_8_cancer_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_8_cancer_tratamiento}
                                    value={userData["literal_4_2_8_cancer_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_8_cancer_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Quistes */}
                <div id="div_4_2_8_quistes" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Quistes
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_8_quistes_fecha}
                                    size="regular"
                                    id="literal_4_2_8_quistes_fecha"
                                    name="literal_4_2_8_quistes_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_8_quistes_fecha}
                                    value={userData["literal_4_2_8_quistes_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_8_quistes_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Quistes
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_8_quistes_tratamiento}
                                    size="regular"
                                    id="literal_4_2_8_quistes_tratamiento"
                                    name="literal_4_2_8_quistes_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_8_quistes_tratamiento}
                                    value={userData["literal_4_2_8_quistes_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_8_quistes_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Úlceras Varicosas u Otras Enferemedades de Igual Naturaleza */}
                <div id="div_4_2_8_ulceras" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Úlceras Varicosas
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_8_ulceras_fecha}
                                    size="regular"
                                    id="literal_4_2_8_ulceras_fecha"
                                    name="literal_4_2_8_ulceras_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_8_ulceras_fecha}
                                    value={userData["literal_4_2_8_ulceras_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_8_ulceras_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Úlceras Varicosas u Otras Enferemedades de Igual Naturaleza
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_8_ulceras_tratamiento}
                                    size="regular"
                                    id="literal_4_2_8_ulceras_tratamiento"
                                    name="literal_4_2_8_ulceras_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_8_ulceras_tratamiento}
                                    value={userData["literal_4_2_8_ulceras_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_8_ulceras_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Hernias */}
                <div id="div_4_2_8_hernias" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Hernias
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_2_8_hernias_fecha}
                                    size="regular"
                                    id="literal_4_2_8_hernias_fecha"
                                    name="literal_4_2_8_hernias_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_8_hernias_fecha}
                                    value={userData["literal_4_2_8_hernias_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_8_hernias_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Hernias de Cualquier Tipo
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_2_8_hernias_tratamiento}
                                    size="regular"
                                    id="literal_4_2_8_hernias_tratamiento"
                                    name="literal_4_2_8_hernias_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_2_8_hernias_tratamiento}
                                    value={userData["literal_4_2_8_hernias_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_8_hernias_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* SECCIÓN 4.2.9 */}
                <p className="w-3/4 mt-3">
                    ¿El Síndrome de Inmunodeficiencia Adquirida, SIDA?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_9_si"
                            name="literal_4_2_9"
                            className=""
                            placeholder="SI"
                            onChange={handleChange}
                            value={userData["literal_4_2_9_si"] || "Si"}
                            checked={userData.literal_4_2_9 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_9_no"
                            name="literal_4_2_9"
                            className=""
                            placeholder="NO"
                            onChange={handleChange}
                            value={userData["literal_4_2_9_no"] || "No"}
                            checked={userData.literal_4_2_9 === "No" ? true : false}
                        />
                    </label>
                </div>
                {/* SECCIÓN 4.2.10 */}
                <p className="w-3/4 mt-6">
                    ¿Se ha realizado el test diagnóstico de SIDA?
                </p>
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_10_si"
                            name="literal_4_2_10"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_2_10}
                            value={userData["literal_4_2_10_si"] || "Si"}
                            checked={userData.literal_4_2_10 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_2_10_no"
                            name="literal_4_2_10"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_2_10}
                            value={userData["literal_4_2_10_no"] || "No"}
                            checked={userData.literal_4_2_10 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id='div_4_2_10' className='flex flex-row space-x-20 -mt-12' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Fecha
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full" style={{ paddingRight: "70px" }}>
                                <Input
                                    type="month"
                                    color={color_literal_4_2_10_fecha}
                                    size="regular"
                                    id="literal_4_2_10_fecha"
                                    name="literal_4_2_10_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_2_10_fecha}
                                    value={userData["literal_4_2_10_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_10_fecha}</LeyendaError>
                    </div>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full" style={{ marginLeft: "9px" }}>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Resultado del Test
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full">
                                <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-500
                                        bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                                        m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                                    id="literal_4_2_10_resultado"
                                    name="literal_4_2_10_resultado"
                                    onChange={validar_literal_4_2_10_resultado}
                                    value={userData["literal_4_2_10_resultado"] || ""}
                                >
                                    <option value="-1">Resultado</option>
                                    <option value="Positivo">Positivo</option>
                                    <option value="Negativo">Negativo</option>
                                </select>
                            </label>
                        </div><LeyendaError>{msg_literal_4_2_10_resultado}</LeyendaError>
                    </div>
                </div>
            </div>
            {/* APARTADO 4.3 */}
            <div className="text-justify mt-6">
                <h3 className="px-3 text-sm mt-2"><b>¿Tiene Ud. alguna anormalidad de constitución, deformación, amputación u otro defecto físico?</b></h3>
            </div>
            <div className="px-4 text-sm -mt-2">
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_3_si"
                            name="literal_4_3"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_3}
                            value={userData["literal_4_3_si"] || "Si"}
                            checked={userData.literal_4_3 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_3_no"
                            name="literal_4_3"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_3}
                            value={userData["literal_4_3_no"] || "No"}
                            checked={userData.literal_4_3 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_3" className='flex flex-row mb-3 space-x-5 -mt-12' style={{ display: "none" }}>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿CUÁLES?
                        </label>
                        <div className="flex justify-left my-1 mb-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_3_constitucion"
                                    name="literal_4_3_constitucion"
                                    className=""
                                    placeholder=""
                                    onChange={handleConstitucion}
                                    value={isChecked_Constitucion}
                                />
                            </label>
                            <label htmlFor="literal_4_3_constitucion" className="inline-flex items-center">
                                <span className="ml-1">Constitución</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_3_deformacion"
                                    name="literal_4_3_deformacion"
                                    className=""
                                    placeholder=""
                                    onChange={handleDeformacion}
                                    value={isChecked_Deformacion}
                                />
                            </label>
                            <label htmlFor="literal_4_3_deformacion" className="inline-flex items-center">
                                <span className="ml-1">Deformación</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_3_amputacion"
                                    name="literal_4_3_amputacion"
                                    className=""
                                    placeholder=""
                                    onChange={handleAmputacion}
                                    value={isChecked_Amputacion}
                                />
                            </label>
                            <label htmlFor="literal_4_3_amputacion" className="inline-flex items-center">
                                <span className="ml-1">Amputación</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_3_defecto_fisico"
                                    name="literal_4_3_defecto_fisico"
                                    className=""
                                    placeholder=""
                                    onChange={handleDefectoFisico}
                                    value={isChecked_DefectoFisico}
                                />
                            </label>
                            <label htmlFor="literal_4_3_defecto_fisico" className="inline-flex items-center">
                                <span className="ml-1">Otro defecto físico</span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Anormalidad de Constitución */}
                <div id="div_4_3_constitucion" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Anormalidad de Constitución
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_3_constitucion_fecha}
                                    size="regular"
                                    id="literal_4_3_constitucion_fecha"
                                    name="literal_4_3_constitucion_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_3_constitucion_fecha}
                                    value={userData["literal_4_3_constitucion_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_3_constitucion_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Anormalidad de Constitución
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_3_constitucion_tratamiento}
                                    size="regular"
                                    id="literal_4_3_constitucion_tratamiento"
                                    name="literal_4_3_constitucion_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_3_constitucion_tratamiento}
                                    value={userData["literal_4_3_constitucion_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_3_constitucion_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Anormalidad de Deformación */}
                <div id="div_4_3_deformacion" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Anormalidad de Deformación
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_3_deformacion_fecha}
                                    size="regular"
                                    id="literal_4_3_deformacion_fecha"
                                    name="literal_4_3_deformacion_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_3_deformacion_fecha}
                                    value={userData["literal_4_3_deformacion_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_3_deformacion_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Anormalidad de Deformación
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_3_deformacion_tratamiento}
                                    size="regular"
                                    id="literal_4_3_deformacion_tratamiento"
                                    name="literal_4_3_deformacion_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_3_deformacion_tratamiento}
                                    value={userData["literal_4_3_deformacion_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_3_deformacion_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Anormalidad de Amputación */}
                <div id="div_4_3_amputacion" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Anormalidad de Amputación
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_3_amputacion_fecha}
                                    size="regular"
                                    id="literal_4_3_amputacion_fecha"
                                    name="literal_4_3_amputacion_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_3_amputacion_fecha}
                                    value={userData["literal_4_3_amputacion_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_3_amputacion_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Anormalidad de Amputación
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_3_amputacion_tratamiento}
                                    size="regular"
                                    id="literal_4_3_amputacion_tratamiento"
                                    name="literal_4_3_amputacion_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_3_amputacion_tratamiento}
                                    value={userData["literal_4_3_amputacion_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_3_amputacion_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Otro Defecto Físico */}
                <div id="div_4_3_defecto_fisico" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Otro Defecto Físico
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_3_defecto_fisico_fecha}
                                    size="regular"
                                    id="literal_4_3_defecto_fisico_fecha"
                                    name="literal_4_3_defecto_fisico_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_3_defecto_fisico_fecha}
                                    value={userData["literal_4_3_defecto_fisico_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_3_defecto_fisico_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Otro Defecto Físico
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_3_defecto_fisico_tratamiento}
                                    size="regular"
                                    id="literal_4_3_defecto_fisico_tratamiento"
                                    name="literal_4_3_defecto_fisico_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_3_defecto_fisico_tratamiento}
                                    value={userData["literal_4_3_defecto_fisico_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_3_defecto_fisico_tratamiento}</LeyendaError>
                    </div>
                </div>
            </div>
            {/* APARTADO 4.4 */}
            <div className="text-justify mt-6">
                <h3 className="px-3 text-sm mt-2"><b>¿Tiene Ud. conocimiento de padecer alguna enfermedad o lesión a la que no se haya aludido directamente en este cuestionario?</b></h3>
            </div>
            <div className="px-4 text-sm -mt-2">
                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                    <label className="inline-flex items-center px-12">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_4_si"
                            name="literal_4_4"
                            className=""
                            placeholder="SI"
                            onChange={habilitar_literal_4_4}
                            value={userData["literal_4_4_si"] || "Si"}
                            checked={userData.literal_4_4 === "Si" ? true : false}
                        />
                    </label>
                    <label className="inline-flex items-center">
                        <Input
                            type="radio"
                            color={"indigo"}
                            size="regular"
                            id="literal_4_4_no"
                            name="literal_4_4"
                            className=""
                            placeholder="NO"
                            onChange={habilitar_literal_4_4}
                            value={userData["literal_4_4_no"] || "No"}
                            checked={userData.literal_4_4 === "No" ? true : false}
                        />
                    </label>
                </div>
                <div id="div_4_4" className='flex flex-row mb-3 space-x-5 -mt-12' style={{ display: "none" }}>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            ¿CUÁLES?
                        </label>
                        <div className="flex justify-left my-1 mb-1 pl-2">
                            <label className="inline-flex items-center">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_4_enfermedad"
                                    name="literal_4_4_enfermedad"
                                    className=""
                                    placeholder=""
                                    onChange={handleEnfermedad}
                                    value={isChecked_Enfermedad}
                                />
                            </label>
                            <label htmlFor="literal_4_4_enfermedad" className="inline-flex items-center">
                                <span className="ml-1">Enfermedad</span>
                            </label>
                            <label className="inline-flex items-center pl-20">
                                <Input
                                    type="checkbox"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_4_lesion"
                                    name="literal_4_4_lesion"
                                    className=""
                                    placeholder=""
                                    onChange={handleLesion}
                                    value={isChecked_Lesion}
                                />
                            </label>
                            <label htmlFor="literal_4_4_lesion" className="inline-flex items-center">
                                <span className="ml-1">Lesión</span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Enfermedad */}
                <div id="div_4_4_enfermedad" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Enfermedad
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_4_enfermedad_fecha}
                                    size="regular"
                                    id="literal_4_4_enfermedad_fecha"
                                    name="literal_4_4_enfermedad_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_4_enfermedad_fecha}
                                    value={userData["literal_4_4_enfermedad_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_4_enfermedad_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Enfermedad
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_4_enfermedad_tratamiento}
                                    size="regular"
                                    id="literal_4_4_enfermedad_tratamiento"
                                    name="literal_4_4_enfermedad_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_4_enfermedad_tratamiento}
                                    value={userData["literal_4_4_enfermedad_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_4_enfermedad_tratamiento}</LeyendaError>
                    </div>
                </div>
                {/* Lesión */}
                <div id="div_4_4_lesion" className='flex flex-row space-x-20 mb-3' style={{ display: "none" }}>
                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Lesión
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="inline-flex items-center w-full">
                                <Input
                                    type="month"
                                    color={color_literal_4_4_lesion_fecha}
                                    size="regular"
                                    id="literal_4_4_lesion_fecha"
                                    name="literal_4_4_lesion_fecha"
                                    outline={true}
                                    className=""
                                    placeholder="Fecha de detección"
                                    onChange={validar_literal_4_4_lesion_fecha}
                                    value={userData["literal_4_4_lesion_fecha"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_4_lesion_fecha}</LeyendaError>
                    </div>
                    <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Tratamiento - Lesión
                        </label>
                        <div className="flex justify-left my-1 mt-2">
                            <label className="flex items-center w-full" style={{ paddingRight: "196px" }}>
                                <Input
                                    type="text"
                                    color={color_literal_4_4_lesion_tratamiento}
                                    size="regular"
                                    id="literal_4_4_lesion_tratamiento"
                                    name="literal_4_4_lesion_tratamiento"
                                    outline={true}
                                    className=""
                                    placeholder="Tratamiento"
                                    onChange={validar_literal_4_4_lesion_tratamiento}
                                    value={userData["literal_4_4_lesion_tratamiento"] || ""}
                                />
                            </label>
                        </div><LeyendaError>{msg_literal_4_4_lesion_tratamiento}</LeyendaError>
                    </div>
                </div>
            </div>
            {/* APARTADO 4.5 */}
            {userData.literal_1_6_genero === "F" ?
                <div>
                    <div className="text-justify mt-6">
                        <h3 className="px-3 text-sm mt-2"><b>Cuando se trate de mujer:</b></h3>
                    </div>
                    <div className="px-4 text-sm -mt-2">
                        {/* SECCIÓN 4.5.1 */}
                        <p className="w-3/4 mt-3">
                            ¿Se encuentra embarazada?
                        </p>
                        <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                            <label className="inline-flex items-center px-12">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_5_1_si"
                                    name="literal_4_5_1"
                                    className=""
                                    placeholder="SI"
                                    onChange={habilitar_literal_4_5_1}
                                    value={userData["literal_4_5_1_si"] || "Si"}
                                    checked={userData.literal_4_5_1 === "Si" ? true : false}
                                />
                            </label>
                            <label className="inline-flex items-center">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_5_1_no"
                                    name="literal_4_5_1"
                                    className=""
                                    placeholder="NO"
                                    onChange={habilitar_literal_4_5_1}
                                    value={userData["literal_4_5_1_no"] || "No"}
                                    checked={userData.literal_4_5_1 === "No" ? true : false}
                                />
                            </label>
                        </div>
                        <div id="div_4_5_1" className='flex flex-row space-x-20 -mt-12' style={{ display: "none" }}>
                            <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                                    ¿De cuántos meses?
                                </label>
                                <div className="flex justify-left my-1 mt-2">
                                    <label className="inline-flex items-center w-full">
                                        <Input
                                            type="text"
                                            color={color_literal_4_5_1_meses_embarazo}
                                            size="regular"
                                            id="literal_4_5_1_meses_embarazo"
                                            name="literal_4_5_1_meses_embarazo"
                                            outline={true}
                                            className=""
                                            placeholder="Meses de embarazo"
                                            onChange={validar_literal_4_5_1_meses_embarazo}
                                            {...userData.hasOwnProperty('literal_4_5_1_meses_embarazo') ? userData["literal_4_5_1_meses_embarazo"] = literal_4_5_1_meses_embarazo : ""}
                                            value={literal_4_5_1_meses_embarazo}
                                        />
                                    </label>
                                </div><LeyendaError>{msg_literal_4_5_1_meses_embarazo}</LeyendaError>
                            </div>
                            <div className="basis-2/3 md:w-1/2 md:mb-0 w-full">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                                    ¿Su embarazo está evolucionando sin problemas?
                                </label>
                                <div className='flex flex-row mb-3 space-x-20'>
                                    <div className="basis-1/3 md:w-1/2 md:mb-0">
                                        <div className="flex justify-left my-1 mt-2">
                                            <label className="inline-flex items-center">
                                                <Input
                                                    type="radio"
                                                    color={"indigo"}
                                                    size="regular"
                                                    id="literal_4_5_1_problemas_embarazo_si"
                                                    name="literal_4_5_1_problemas_embarazo"
                                                    className=""
                                                    placeholder=""
                                                    onChange={habilitar_literal_4_5_1_riesgos_embarazo}
                                                    value={userData["literal_4_5_1_problemas_embarazo_si"] || "Si"}
                                                />
                                            </label>
                                            <label htmlFor="literal_4_5_1_problemas_embarazo_si" className="inline-flex items-center">
                                                <span className="ml-4">Si</span>
                                            </label>
                                            <label className="inline-flex items-center pl-20">
                                                <Input
                                                    type="radio"
                                                    color={"indigo"}
                                                    size="regular"
                                                    id="literal_4_5_1_problemas_embarazo_no"
                                                    name="literal_4_5_1_problemas_embarazo"
                                                    className=""
                                                    placeholder=""
                                                    onChange={habilitar_literal_4_5_1_riesgos_embarazo}
                                                    value={userData["literal_4_5_1_problemas_embarazo_no"] || "No"}
                                                />
                                            </label>
                                            <label htmlFor="literal_4_5_1_problemas_embarazo_no" className="inline-flex items-center">
                                                <span className="ml-2">No</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="basis-1/3 md:w-1/2 md:mb-0 pr-1">
                                        <div className="flex justify-left my-1 mt-2">
                                            <label id="label_4_5_1_riesgos_embarazo" className="flex items-center w-full" style={{ display: "none" }}>
                                                <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-500
                                            bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                                            m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                                                    id="literal_4_5_1_riesgos_embarazo"
                                                    name="literal_4_5_1_riesgos_embarazo"
                                                    onChange={validar_literal_4_5_1_riesgos_embarazo}
                                                    value={userData["literal_4_5_1_riesgos_embarazo"] || ""}
                                                >
                                                    <option value="-1">Riesgos Embarazo</option>
                                                    <option value="Riesgo severo">Riesgo severo</option>
                                                    <option value="Riesgo anormal">Riesgo anormal</option>
                                                </select>
                                            </label>
                                        </div><LeyendaError>{msg_literal_4_5_1_riesgos_embarazo}</LeyendaError>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SECCIÓN 4.5.2 */}
                        <p className="w-3/4 mt-3">
                            ¿Usted ha sido sometida a partos o cesáreas?
                        </p>
                        <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                            <label className="inline-flex items-center px-12">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_5_2_si"
                                    name="literal_4_5_2"
                                    className=""
                                    placeholder="SI"
                                    onChange={habilitar_literal_4_5_2}
                                    value={userData["literal_4_5_2_si"] || "Si"}
                                    checked={userData.literal_4_5_2 === "Si" ? true : false}
                                />
                            </label>
                            <label className="inline-flex items-center">
                                <Input
                                    type="radio"
                                    color={"indigo"}
                                    size="regular"
                                    id="literal_4_5_2_no"
                                    name="literal_4_5_2"
                                    className=""
                                    placeholder="NO"
                                    onChange={habilitar_literal_4_5_2}
                                    value={userData["literal_4_5_2_no"] || "No"}
                                    checked={userData.literal_4_5_2 === "No" ? true : false}
                                />
                            </label>
                        </div>
                        <div id="div_4_5_2" className='flex flex-row mb-3 space-x-5 -mt-12' style={{ display: "none" }}>
                            <div className="basis-3/4 md:w-1/2 md:mb-0 w-full">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                                    ¿CUÁLES?
                                </label>
                                <div className="flex justify-left my-1 mb-1 pl-2">
                                    <label className="inline-flex items-center">
                                        <Input
                                            type="checkbox"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_5_2_partos"
                                            name="literal_4_5_2_partos"
                                            className=""
                                            placeholder=""
                                            onChange={handlePartos}
                                            value={isChecked_Partos}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_5_2_partos" className="inline-flex items-center">
                                        <span className="ml-1">Partos</span>
                                    </label>
                                    <label className="inline-flex items-center pl-20">
                                        <Input
                                            type="checkbox"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_5_2_cesareas"
                                            name="literal_4_5_2_cesareas"
                                            className=""
                                            placeholder=""
                                            onChange={handleCesareas}
                                            value={isChecked_Cesareas}
                                        />
                                    </label>
                                    <label htmlFor="literal_4_5_2_cesareas" className="inline-flex items-center">
                                        <span className="ml-1">Cesáreas</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* Partos */}
                        <div id="div_4_5_2_partos" className='flex flex-row space-x-20' style={{ display: "none" }}>
                            <div className="basis-2/4 md:w-1/2 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                                    ¿Cuántos partos normales ha tenido?
                                </label>
                                <div className='flex flex-row mb-3 space-x-20'>
                                    <div className="basis-3/3 md:w-1/2 md:mb-0 w-full">
                                        <div className="flex justify-left my-1 mt-2">
                                            <label className="inline-flex items-center">
                                                <Input
                                                    type="radio"
                                                    color={"indigo"}
                                                    size="regular"
                                                    id="literal_4_5_2_partos_uno"
                                                    name="literal_4_5_2_partos"
                                                    className=""
                                                    placeholder=""
                                                    onChange={handleChange}
                                                    value={userData["literal_4_5_2_partos_uno"] || "1"}
                                                    checked={userData.literal_4_5_2_partos === "1" ? true : false}
                                                />
                                            </label>
                                            <label htmlFor="literal_4_5_2_partos_uno" className="inline-flex items-center">
                                                <span className="ml-2">1</span>
                                            </label>
                                            <label className="inline-flex items-center pl-20">
                                                <Input
                                                    type="radio"
                                                    color={"indigo"}
                                                    size="regular"
                                                    id="literal_4_5_2_partos_dos"
                                                    name="literal_4_5_2_partos"
                                                    className=""
                                                    placeholder=""
                                                    onChange={handleChange}
                                                    value={userData["literal_4_5_2_partos_dos"] || "2"}
                                                    checked={userData.literal_4_5_2_partos === "2" ? true : false}
                                                />
                                            </label>
                                            <label htmlFor="literal_4_5_2_partos_dos" className="inline-flex items-center">
                                                <span className="ml-2">2</span>
                                            </label>
                                            <label className="inline-flex items-center pl-20">
                                                <Input
                                                    type="radio"
                                                    color={"indigo"}
                                                    size="regular"
                                                    id="literal_4_5_2_partos_tres"
                                                    name="literal_4_5_2_partos"
                                                    className=""
                                                    placeholder=""
                                                    onChange={handleChange}
                                                    value={userData["literal_4_5_2_partos_tres"] || "3"}
                                                    checked={userData.literal_4_5_2_partos === "3" ? true : false}
                                                />
                                            </label>
                                            <label htmlFor="literal_4_5_2_partos_tres" className="inline-flex items-center">
                                                <span className="ml-2">3</span>
                                            </label>
                                            <label className="inline-flex items-center pl-20">
                                                <Input
                                                    type="radio"
                                                    color={"indigo"}
                                                    size="regular"
                                                    id="literal_4_5_2_partos_mayor_tres"
                                                    name="literal_4_5_2_partos"
                                                    className=""
                                                    placeholder=""
                                                    onChange={handleChange}
                                                    value={userData["literal_4_5_2_partos_mayor_tres"] || "Mayor 3"}
                                                    checked={userData.literal_4_5_2_partos === "Mayor 3" ? true : false}
                                                />
                                            </label>
                                            <label htmlFor="literal_4_5_2_partos_mayor_tres" className="inline-flex items-center">
                                                <span className="ml-2">Mayor a 3</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                                    Fecha del último parto
                                </label>
                                <div className="flex justify-left my-1 mt-2">
                                    <label className="inline-flex items-center w-full">
                                        <Input
                                            type="date"
                                            color={color_literal_4_5_2_ultimo_parto_fecha}
                                            size="regular"
                                            id="literal_4_5_2_ultimo_parto_fecha"
                                            name="literal_4_5_2_ultimo_parto_fecha"
                                            outline={true}
                                            className=""
                                            placeholder="Fecha"
                                            onChange={validar_literal_4_5_2_ultimo_parto_fecha}
                                            value={userData["literal_4_5_2_ultimo_parto_fecha"] || ""}
                                        />
                                    </label>
                                </div><LeyendaError>{msg_literal_4_5_2_ultimo_parto_fecha}</LeyendaError>
                            </div>
                        </div>
                        {/* Cesáreas */}
                        <div id="div_4_5_2_cesareas" className='flex flex-row space-x-20' style={{ display: "none" }}>
                            <div className="basis-2/4 md:w-1/2 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                                    ¿Cuántas cesáreas ha tenido?
                                </label>
                                <div className='flex flex-row mb-3 space-x-20'>
                                    <div className="basis-3/3 md:w-1/2 md:mb-0 w-full">
                                        <div className="flex justify-left my-1 mt-2">
                                            <label className="inline-flex items-center">
                                                <Input
                                                    type="radio"
                                                    color={"indigo"}
                                                    size="regular"
                                                    id="literal_4_5_2_cesareas_uno"
                                                    name="literal_4_5_2_cesareas"
                                                    className=""
                                                    placeholder=""
                                                    onChange={handleChange}
                                                    value={userData["literal_4_5_2_cesareas_uno"] || "1"}
                                                    checked={userData.literal_4_5_2_cesareas === "1" ? true : false}
                                                />
                                            </label>
                                            <label htmlFor="literal_4_5_2_cesareas_uno" className="inline-flex items-center">
                                                <span className="ml-2">1</span>
                                            </label>
                                            <label className="inline-flex items-center pl-20">
                                                <Input
                                                    type="radio"
                                                    color={"indigo"}
                                                    size="regular"
                                                    id="literal_4_5_2_cesareas_dos"
                                                    name="literal_4_5_2_cesareas"
                                                    className=""
                                                    placeholder=""
                                                    onChange={handleChange}
                                                    value={userData["literal_4_5_2_cesareas_dos"] || "2"}
                                                    checked={userData.literal_4_5_2_cesareas === "2" ? true : false}
                                                />
                                            </label>
                                            <label htmlFor="literal_4_5_2_cesareas_dos" className="inline-flex items-center">
                                                <span className="ml-2">2</span>
                                            </label>
                                            <label className="inline-flex items-center pl-20">
                                                <Input
                                                    type="radio"
                                                    color={"indigo"}
                                                    size="regular"
                                                    id="literal_4_5_2_cesareas_tres"
                                                    name="literal_4_5_2_cesareas"
                                                    className=""
                                                    placeholder=""
                                                    onChange={handleChange}
                                                    value={userData["literal_4_5_2_cesareas_tres"] || "3"}
                                                    checked={userData.literal_4_5_2_cesareas === "3" ? true : false}
                                                />
                                            </label>
                                            <label htmlFor="literal_4_5_2_cesareas_tres" className="inline-flex items-center">
                                                <span className="ml-2">3</span>
                                            </label>
                                            <label className="inline-flex items-center pl-20">
                                                <Input
                                                    type="radio"
                                                    color={"indigo"}
                                                    size="regular"
                                                    id="literal_4_5_2_cesareas_mayor_tres"
                                                    name="literal_4_5_2_cesareas"
                                                    className=""
                                                    placeholder=""
                                                    onChange={handleChange}
                                                    value={userData["literal_4_5_2_cesareas_mayor_tres"] || "Mayor 3"}
                                                    checked={userData.literal_4_5_2_cesareas === "Mayor 3" ? true : false}
                                                />
                                            </label>
                                            <label htmlFor="literal_4_5_2_cesareas_mayor_tres" className="inline-flex items-center">
                                                <span className="ml-2">Mayor a 3</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                                    Fecha de la última cesárea
                                </label>
                                <div className="flex justify-left my-1 mt-2">
                                    <label className="inline-flex items-center w-full">
                                        <Input
                                            type="date"
                                            color={color_literal_4_5_2_ultima_cesarea_fecha}
                                            size="regular"
                                            id="literal_4_5_2_ultima_cesarea_fecha"
                                            name="literal_4_5_2_ultima_cesarea_fecha"
                                            outline={true}
                                            className=""
                                            placeholder="Fecha"
                                            onChange={validar_literal_4_5_2_ultima_cesarea_fecha}
                                            value={userData["literal_4_5_2_ultima_cesarea_fecha"] || ""}
                                        />
                                    </label>
                                </div><LeyendaError>{msg_literal_4_5_2_ultima_cesarea_fecha}</LeyendaError>
                            </div>
                        </div>
                        {/* SECCIÓN 4.5.3 */}
                        {edad > 13 ?
                            <div>
                                <p className="w-3/4 mt-3">
                                    ¿Usted se ha realizado el examen de Papanicolau?
                                </p>
                                <div className="flex justify-end -my-9 pt-1 -space-x-1 mb-10">
                                    <label className="inline-flex items-center px-12">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_5_3_si"
                                            name="literal_4_5_3"
                                            className=""
                                            placeholder="SI"
                                            onChange={habilitar_literal_4_5_3}
                                            value={userData["literal_4_5_3_si"] || "Si"}
                                            checked={userData.literal_4_5_3 === "Si" ? true : false}
                                        />
                                    </label>
                                    <label className="inline-flex items-center">
                                        <Input
                                            type="radio"
                                            color={"indigo"}
                                            size="regular"
                                            id="literal_4_5_3_no"
                                            name="literal_4_5_3"
                                            className=""
                                            placeholder="NO"
                                            onChange={habilitar_literal_4_5_3}
                                            value={userData["literal_4_5_3_no"] || "No"}
                                            checked={userData.literal_4_5_3 === "No" ? true : false}
                                        />
                                    </label>
                                </div>
                                <div id='div_4_5_3' className='flex flex-row space-x-20 -mt-12' style={{ display: "none" }}>
                                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                                            Fecha de último Papanicolaou
                                        </label>
                                        <div className="flex justify-left my-1 mt-2">
                                            <label className="inline-flex items-center w-full" style={{ paddingRight: "70px" }}>
                                                <Input
                                                    type="month"
                                                    color={color_literal_4_5_3_fecha}
                                                    size="regular"
                                                    id="literal_4_5_3_fecha"
                                                    name="literal_4_5_3_fecha"
                                                    outline={true}
                                                    className=""
                                                    placeholder="Fecha"
                                                    onChange={validar_literal_4_5_3_fecha}
                                                    value={userData["literal_4_5_3_fecha"] || ""}
                                                />
                                            </label>
                                        </div><LeyendaError>{msg_literal_4_5_3_fecha}</LeyendaError>
                                    </div>
                                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full" style={{ marginLeft: "9px" }}>
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                                            Resultados
                                        </label>
                                        <div className="flex justify-left my-1 mt-2">
                                            <label className="flex items-center w-full">
                                                <select className="form-select appearance-none block w-full px-3 pt-2.5 pb-1.5 text-base font-normal text-gray-500
                                                    bg-transparent bg-clip-padding bg-no-repeat border border-1 border-gray-300 rounded-lg transition ease-in-out
                                                    m-0 focus:text-gray-800 focus:border-2 focus:border-indigo-500 outline-none focus:outline-none"
                                                    id="literal_4_5_3_resultados"
                                                    name="literal_4_5_3_resultados"
                                                    onChange={habilitar_literal_4_5_3_resultados}
                                                    value={userData["literal_4_5_3_resultados"] || ""}
                                                >
                                                    <option value="-1">Resultados</option>
                                                    <option value="Normal">Normal</option>
                                                    <option value="Otros">Otros</option>
                                                </select>
                                            </label>
                                        </div><LeyendaError>{msg_literal_4_5_3_resultados}</LeyendaError>
                                    </div>
                                    <div className="basis-1/4 md:w-1/2 md:mb-0 w-full" style={{ marginLeft: "71px" }}>
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                                            &nbsp; {/* NO BORRAR ES PARA AJUSTAR EL DISEÑO  */}
                                        </label>
                                        <div className="flex justify-left my-1 mt-2">
                                            <label id="label_4_5_3_resultados_otros_especifique" className="flex items-center w-full" style={{ display: "none" }}>
                                                <Input
                                                    type="text"
                                                    color={color_literal_4_5_3_resultados_otros_especifique}
                                                    size="regular"
                                                    id="literal_4_5_3_resultados_otros_especifique"
                                                    name="literal_4_5_3_resultados_otros_especifique"
                                                    outline={true}
                                                    className=""
                                                    placeholder="Especifique"
                                                    onChange={validar_literal_4_5_3_resultados_otros_especifique}
                                                    value={userData["literal_4_5_3_resultados_otros_especifique"] || ""}
                                                />
                                            </label>
                                        </div><LeyendaError>{msg_literal_4_5_3_resultados_otros_especifique}</LeyendaError>
                                    </div>
                                </div>
                            </div>
                            : ""}
                    </div>
                </div>
                : ""}
        </div>
        {/* <Button
            type="submit"
            className="bg-indigo-300 mb-1"
            color="indigo"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            onClick={async (e) => {
                if (validarCampos() === true) {
                    console.log("Puede ir al siguiente paso");
                } else {
                    console.log("Debe completar todos los campos");
                }
            }}
        >
            Validar Paso
        </Button> */}
    </div >
}