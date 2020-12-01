var wms_layers = [];

var format_COMMUNE_0 = new ol.format.GeoJSON();
var features_COMMUNE_0 = format_COMMUNE_0.readFeatures(json_COMMUNE_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_0.addFeatures(features_COMMUNE_0);
var lyr_COMMUNE_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMMUNE_0, 
                style: style_COMMUNE_0,
                interactive: false,
                title: '<img src="styles/legend/COMMUNE_0.png" /> COMMUNE'
            });
var format_PARCELLE_1 = new ol.format.GeoJSON();
var features_PARCELLE_1 = format_PARCELLE_1.readFeatures(json_PARCELLE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARCELLE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARCELLE_1.addFeatures(features_PARCELLE_1);
var lyr_PARCELLE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PARCELLE_1, 
                style: style_PARCELLE_1,
                interactive: false,
                title: '<img src="styles/legend/PARCELLE_1.png" /> PARCELLE'
            });
var format_Dcoup_2 = new ol.format.GeoJSON();
var features_Dcoup_2 = format_Dcoup_2.readFeatures(json_Dcoup_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dcoup_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dcoup_2.addFeatures(features_Dcoup_2);
var lyr_Dcoup_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dcoup_2, 
                style: style_Dcoup_2,
                interactive: false,
                title: '<img src="styles/legend/Dcoup_2.png" /> Découpé'
            });
var format_Dcoup_3 = new ol.format.GeoJSON();
var features_Dcoup_3 = format_Dcoup_3.readFeatures(json_Dcoup_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dcoup_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dcoup_3.addFeatures(features_Dcoup_3);
var lyr_Dcoup_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dcoup_3, 
                style: style_Dcoup_3,
                interactive: false,
                title: '<img src="styles/legend/Dcoup_3.png" /> Découpé'
            });
var format_point_4 = new ol.format.GeoJSON();
var features_point_4 = format_point_4.readFeatures(json_point_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_4.addFeatures(features_point_4);
var lyr_point_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_point_4, 
                style: style_point_4,
                interactive: true,
                title: '<img src="styles/legend/point_4.png" /> point'
            });
var format_chemin_5 = new ol.format.GeoJSON();
var features_chemin_5 = format_chemin_5.readFeatures(json_chemin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chemin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chemin_5.addFeatures(features_chemin_5);
var lyr_chemin_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_chemin_5, 
                style: style_chemin_5,
                interactive: false,
                title: '<img src="styles/legend/chemin_5.png" /> chemin'
            });

lyr_COMMUNE_0.setVisible(true);lyr_PARCELLE_1.setVisible(true);lyr_Dcoup_2.setVisible(true);lyr_Dcoup_3.setVisible(true);lyr_point_4.setVisible(true);lyr_chemin_5.setVisible(true);
var layersList = [lyr_COMMUNE_0,lyr_PARCELLE_1,lyr_Dcoup_2,lyr_Dcoup_3,lyr_point_4,lyr_chemin_5];
lyr_COMMUNE_0.set('fieldAliases', {'NOM_COM': 'NOM_COM', 'CODE_DEP': 'CODE_DEP', 'CODE_INSEE': 'CODE_INSEE', });
lyr_PARCELLE_1.set('fieldAliases', {'NUMERO': 'NUMERO', 'FEUILLE': 'FEUILLE', 'SECTION': 'SECTION', 'CODE_DEP': 'CODE_DEP', 'NOM_COM': 'NOM_COM', 'CODE_COM': 'CODE_COM', 'COM_ABS': 'COM_ABS', 'CODE_ARR': 'CODE_ARR', });
lyr_Dcoup_2.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'SALINITE': 'SALINITE', 'ORIGINE': 'ORIGINE', 'COMMENT': 'COMMENT', 'ID_P_EAU': 'ID_P_EAU', 'ID_C_EAU': 'ID_C_EAU', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_P_EAU': 'NOM_P_EAU', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_Dcoup_3.set('fieldAliases', {'TYPE': 'TYPE', });
lyr_point_4.set('fieldAliases', {'id': 'id', 'Titre': 'Titre', });
lyr_chemin_5.set('fieldAliases', {'id': 'id', });
lyr_COMMUNE_0.set('fieldImages', {'NOM_COM': '', 'CODE_DEP': '', 'CODE_INSEE': '', });
lyr_PARCELLE_1.set('fieldImages', {'NUMERO': 'TextEdit', 'FEUILLE': 'Range', 'SECTION': 'TextEdit', 'CODE_DEP': 'TextEdit', 'NOM_COM': 'TextEdit', 'CODE_COM': 'TextEdit', 'COM_ABS': 'TextEdit', 'CODE_ARR': 'TextEdit', });
lyr_Dcoup_2.set('fieldImages', {'ID': '', 'CODE_HYDRO': '', 'CODE_PAYS': '', 'NATURE': '', 'POS_SOL': '', 'ETAT': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'SOURCE': '', 'ID_SOURCE': '', 'PREC_PLANI': '', 'PREC_ALTI': '', 'SRC_COORD': '', 'SRC_ALTI': '', 'STATUT': '', 'PERSISTANC': '', 'SALINITE': '', 'ORIGINE': '', 'COMMENT': '', 'ID_P_EAU': '', 'ID_C_EAU': '', 'ID_ENT_TR': '', 'NOM_P_EAU': '', 'NOM_C_EAU': '', 'NOM_ENT_TR': '', });
lyr_Dcoup_3.set('fieldImages', {'TYPE': '', });
lyr_point_4.set('fieldImages', {'id': '', 'Titre': '', });
lyr_chemin_5.set('fieldImages', {'id': '', });
lyr_COMMUNE_0.set('fieldLabels', {'NOM_COM': 'no label', 'CODE_DEP': 'no label', 'CODE_INSEE': 'no label', });
lyr_PARCELLE_1.set('fieldLabels', {'NUMERO': 'no label', 'FEUILLE': 'no label', 'SECTION': 'no label', 'CODE_DEP': 'no label', 'NOM_COM': 'no label', 'CODE_COM': 'no label', 'COM_ABS': 'no label', 'CODE_ARR': 'no label', });
lyr_Dcoup_2.set('fieldLabels', {'ID': 'no label', 'CODE_HYDRO': 'no label', 'CODE_PAYS': 'no label', 'NATURE': 'no label', 'POS_SOL': 'no label', 'ETAT': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'SOURCE': 'no label', 'ID_SOURCE': 'no label', 'PREC_PLANI': 'no label', 'PREC_ALTI': 'no label', 'SRC_COORD': 'no label', 'SRC_ALTI': 'no label', 'STATUT': 'no label', 'PERSISTANC': 'no label', 'SALINITE': 'no label', 'ORIGINE': 'no label', 'COMMENT': 'no label', 'ID_P_EAU': 'no label', 'ID_C_EAU': 'no label', 'ID_ENT_TR': 'no label', 'NOM_P_EAU': 'no label', 'NOM_C_EAU': 'no label', 'NOM_ENT_TR': 'no label', });
lyr_Dcoup_3.set('fieldLabels', {'TYPE': 'no label', });
lyr_point_4.set('fieldLabels', {'id': 'inline label', 'Titre': 'header label', });
lyr_chemin_5.set('fieldLabels', {'id': 'no label', });
lyr_chemin_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});