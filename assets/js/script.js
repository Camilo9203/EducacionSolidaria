$(document).ready(function(){
    $("#investigaciones").css("display", "none");
    $("#herramientas").css("display", "none");
    $("#centro").css("display", "none");
    $("#cursos").css("display", "none");
    $("#participacion").css("display", "none");

    $("#investigacionesBoton").click(function(){
        $(".header").slideUp();
        $("#investigaciones").slideDown();
        $("#bg_mundo").slideUp();
    });

    $("#herramientasBoton").click(function(){
        $(".header").slideUp();
        $("#herramientas").slideDown();
        $("#bg_mundo").slideUp();
    });

    $("#cursosBoton").click(function(){
        $(".header").slideUp();
        $("#cursos").slideDown();
        $("#bg_mundo").slideUp();
    });

    $(".volver").click(function(){
        $("#investigaciones").slideUp();
        $("#herramientas").slideUp();
        $("#cursos").slideUp();
        $(".header").slideDown();
        $("#bg_mundo").slideDown();
    });

    $(".investigaciones").filetree();
    $(".herramientas").filetree();

	new jPlayerPlaylist({
		jPlayer: "#audio_jplayer_2",
		cssSelectorAncestor: "#audio_container_2"
	},[
		{
			title:"ABC del sector solidario",
			mp3:"assets/audio/abc/ABC_DEL_SECTOR_SOLIDARIO_UNIDAD.mp3"
		},
		{
			title:"Acerca de las organizaciones soldiarias",
			mp3:"assets/audio/abc/ACERCA_DE_LAS_ORGANIZACIONES_SOLIDARIAS.mp3"
		},
		{
			title:"Aprendiendo del sector solidario",
			mp3:"assets/audio/abc/APRENDIENDO_DEL_SECTOR_SOLIDARIO.mp3"
		},
		{
			title:"Los invitamos a reflexionar",
			mp3:"assets/audio/abc/LOS_INVITAMOS_A_REFLEXIONAR.mp3"
		},
		{
			title:"Qué es el sector solidario",
			mp3:"assets/audio/abc/QUÉ_ES_EL_SECTOR_SOLIDARIO.mp3"
		},
		{
			title:"Qué es la asociatividad solidaria",
			mp3:"assets/audio/abc/QUÉ_ES_LA_ASOCIATIVIDAD_SOLIDARIA.mp3"
		},
		{
			title:"Qué se entiende por economía solidaria",
			mp3:"assets/audio/abc/QUÉ_SE_ENTIENDE_POR_ECONOMÍA_SOLIDARIA.mp3"
		},
		{
			title:"Principios de la economía solidaria",
			mp3:"assets/audio/abc/PRINCIPIOS_DE_LA_ECONOMÍA_SOLIDARIA.mp3"
		},
		{
			title:"Fines de la economía solidaria",
			mp3:"assets/audio/abc/FINES_DE_LA_ECONOMÍA_SOLIDARIA.mp3"
		},
		{
			title:"Valores solidarios",
			mp3:"assets/audio/abc/VALORES_SOLIDARIOS.mp3"
		},
		{
			title:"Diferencia con las empresas tradicionales",
			mp3:"assets/audio/abc/DIFERENCIA_CON_LAS_EMPRESAS_TRADICIONALES.mp3"
		},
		{
			title:"Tipos de organizaciones",
			mp3:"assets/audio/abc/TIPOS_DE_ORGANIZACIONES.mp3"
		},
		{
			title:"Organizaciones solidarias de desarrollo",
			mp3:"assets/audio/abc/ORGANIZACIONES_SOLIDARIAS_DE_DESARROLLO.mp3"
		},
		{
			title:"Organizaciones de economía solidaria",
			mp3:"assets/audio/abc/ORGANIZACIONES_DE_ECONOMÍA_SOLIDARIA.mp3"
		},
		{
			title:"Qué es emprendimiento solidario",
			mp3:"assets/audio/abc/QUÉ_ES_EMPRENDIMIENTO_SOLIDARIO.mp3"
		},
		{
			title:"Importancia del emprendimiento solidario",
			mp3:"assets/audio/abc/IMPORTANCIA_DEL_EMPRENDIMIENTO_SOLIDARIO.mp3"
		},
		{
			title:"Camino para el emprendimieto solidario",
			mp3:"assets/audio/abc/CAMINO_PARA_EL_EMPRENDIMIETO_SOLIDARIO.mp3"
		},
		{
			title:"Cuáles son los derechos y deberes",
			mp3:"assets/audio/abc/CUÁLES_SON_LOS_DERECHOS_Y_DEBERES.mp3"
		},
		{
			title:"Para las cooperativas",
			mp3:"assets/audio/abc/PARA_LAS_COOPERATIVAS.mp3"
		},
		{
			title:"Para los fondos de empleados",
			mp3:"assets/audio/abc/PARA_LOS_FONDOS_DE_EMPLEADOS.mp3"
		},
		{
			title:"Para las asociaciones mutuales",
			mp3:"assets/audio/abc/PARA_LAS_ASOCIACIONES_MUTUALES.mp3"
		},
		{
			title:"Normatividad del sector solidario",
			mp3:"assets/audio/abc/NORMATIVIDAD_DEL_SECTOR_SOLIDARIO.mp3"
		},
		{
			title:"Qué no pueden hacer las organizaciones DE_ECO",
			mp3:"assets/audio/abc/QUÉ_NO_PUEDEN_HACER_LAS_ORGANIZACIONES_ DE_ECO.mp3"
		},
		{
			title:"Qué no pueden hacer las cooperativas",
			mp3:"assets/audio/abc/QUÉ_NO_PUEDEN_HACER_LAS_COOPERATIVAS.mp3"
		},
		{
			title:"Qué no pueden hacer las asociaciones mutuales",
			mp3:"assets/audio/abc/QUÉ_NO_PUEDEN_HACER_LAS_ASOCIACIONES_MUTUALES.mp3"
		},
		{
			title:"Qué no pueden hacer los fondos de empleados",
			mp3:"assets/audio/abc/QUÉ_NO_PUEDEN_HACER_LOS_FONDOS_DE_EMPLEADOS.mp3"
		},
		{
			title:"Entidades de apoyo protección y vigilancia del sector",
			mp3:"assets/audio/abc/ENTIDADES_DE_APOYO_PROTECCIÓN_Y_VIGILANCIA_DEL_SECTOR.mp3"
		},
		{
			title:"Para mayor información",
			mp3:"assets/audio/abc/PARA_MAYOR_INFORMACIÓN_0.mp3"
		}
	], {
		swfPath: "../assets/js/jplayer",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

	new jPlayerPlaylist({
		jPlayer: "#audio_jplayer_3",
		cssSelectorAncestor: "#audio_container_3"
	},[
		{
			title:"Qué es la Unidad Administrativa",
			mp3:"assets/audio/organizaciones/QUÉ_ES_LA UNIDAD_ADMINISTRATIVA.mp3"
		},
		{
			title:"Qué es fomento y fortalecimiento",
			mp3:"assets/audio/organizaciones/QUÉ_ES_FOMENTO_Y_FORTALECIMIENTO.mp3"
		},
		{
			title:"Promoción de la cultura",
			mp3:"assets/audio/organizaciones/PROMOCIÓN_DE_LA_CULTURA_DE.mp3"
		},
		{
			title:"Qué son las cooperativas",
			mp3:"assets/audio/organizaciones/QUÉ_SON_LAS_COOPERATIVAS.mp3"
		},
		{
			title:"Caracteristicas de las cooperativas",
			mp3:"assets/audio/organizaciones/CARACTERISTICAS_DE_LAS_COOPERATIVAS.mp3"
		},
		{
			title:"Fases para la constitución de una cooperativa",
			mp3:"assets/audio/organizaciones/FASES_PARA_LA_CONSTITUCIÓN_DE_UNA_COOPERATIVA.mp3"
		},
		{
			title:"Qué son las precooperativas",
			mp3:"assets/audio/organizaciones/QUÉ_SON_LAS_PRECOOPERATIVAS.mp3"
		},
		{
			title:"Características de las precooperativas",
			mp3:"assets/audio/organizaciones/CARACTERÍSTICAS_DE_LAS_PRECOOPERATIVAS.mp3"
		},
		{
			title:"Objetivos generales de las precooperativas",
			mp3:"assets/audio/organizaciones/OBJETIVOS_GENERALES_DE_LAS_PRECOOPERATIVAS.mp3"
		},
		{
			title:"Sobre las entidades promotoras",
			mp3:"assets/audio/organizaciones/SOBRE_LAS_ENTIDADES_PROMOTORAS.mp3"
		},
		{
			title:"Fases para la constitución de precooperativas",
			mp3:"assets/audio/organizaciones/FASES_PARA_LA_CONSTITUCIÓN_DE_PRECOOPERATIVAS.mp3"
		},
		{
			title:"Precooperativas y cooperativas de trabajo asociado",
			mp3:"assets/audio/organizaciones/PRECOOPERATIVAS_Y_COOPERATIVAS_DE_TRABAJO_ASOCIADO.mp3"
		},
		{
			title:"Características de las precoop y coop de trab asociado",
			mp3:"assets/audio/organizaciones/CARACTERÍSTICAS_DE_LAS_PRECOOP_Y_COOP_DE_TRAB_ASOC.mp3"
		},
		{
			title:"Fases para la constitución",
			mp3:"assets/audio/organizaciones/FASES_PARA_LA_CONSTITUCIÓN.mp3"
		},
		{
			title:"Que son los fondos de empleados",
			mp3:"assets/audio/organizaciones/QUE_SON_LOS_FONDOS_DE_EMPLEADOS.mp3"
		},
		{
			title:"Características de los fondos de empleados",
			mp3:"assets/audio/organizaciones/CARACTERÍSTICAS_DE_LOS_FONDOS_DE_EMPLEADOS.mp3"
		},
		{
			title:"Constitucion fondos de empleados",
			mp3:"assets/audio/organizaciones/CONSTITUCION_FONDOS_DE_EMPLEADOS.mp3"
		},
		{
			title:"Qué son las asociaciones mutuales",
			mp3:"assets/audio/organizaciones/QUÉ_SON_LAS_ASOCIACIONES_MUTUALES.mp3"
		},
		{
			title:"Caracteristicas de las asociaciones mutuales",
			mp3:"assets/audio/organizaciones/CARACTERISTICAS_DE_LAS_ASOCIACIONES_MUTUALES.mp3"
		},
		{
			title:"Fases para la constitución de una asociación mutual",
			mp3:"assets/audio/organizaciones/FASES_PARA_LA_CONSTITUCIÓN_DE_UNA_ASOCIACIÓN_MUTUAL.mp3"
		},
		{
			title:"Qué son las fundaciones",
			mp3:"assets/audio/organizaciones/QUÉ_SON_LAS_FUNDACIONES.mp3"
		},
		{
			title:"Características de las fundaciones",
			mp3:"assets/audio/organizaciones/CARACTERÍSTICAS_DE_LAS_FUNDACIONES.mp3"
		},
		{
			title:"Fases para la constitución de una fundación",
			mp3:"assets/audio/organizaciones/FASES_PARA_LA_CONSTITUCIÓN_DE_UNA_FUNDACIÓN.mp3"
		},
		{
			title:"Qué son asociaciones o corporaciones",
			mp3:"assets/audio/organizaciones/QUÉ_SON_ASOCIACIONES_O_CORPORACIONES.mp3"
		},
		{
			title:"Características de las asoc o corp",
			mp3:"assets/audio/organizaciones/CARACTERÍSTICAS_DE_LAS_ASOC_O_CORP.mp3"
		},
		{
			title:"Fases para la constitución asoc o corp",
			mp3:"assets/audio/organizaciones/FASES_PARA_LA_CONSTITUCIÓN_ASOC_O_CORP.mp3"
		},
		{
			title:"Qué es voluntariado",
			mp3:"assets/audio/organizaciones/QUÉ_ES_VOLUNTARIADO.mp3"
		},
		{
			title:"Tramite de acreditacion",
			mp3:"assets/audio/organizaciones/TRAMITE_DE_ACREDITACION.mp3"
		},
		{
			title:"Servicio al ciudadano",
			mp3:"assets/audio/organizaciones/SERVICIO_AL_CIUDADANO.mp3"
		}
	], {
		swfPath: "../assets/js/jplayer",
		supplied: "mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
});