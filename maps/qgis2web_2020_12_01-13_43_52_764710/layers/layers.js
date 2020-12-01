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
var format_Btiment_2 = new ol.format.GeoJSON();
var features_Btiment_2 = format_Btiment_2.readFeatures(json_Btiment_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Btiment_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Btiment_2.addFeatures(features_Btiment_2);
var lyr_Btiment_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Btiment_2, 
                style: style_Btiment_2,
                interactive: false,
                title: '<img src="styles/legend/Btiment_2.png" /> Bâtiment'
            });
var format_Eaux_3 = new ol.format.GeoJSON();
var features_Eaux_3 = format_Eaux_3.readFeatures(json_Eaux_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eaux_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eaux_3.addFeatures(features_Eaux_3);
var lyr_Eaux_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Eaux_3, 
                style: style_Eaux_3,
                interactive: false,
                title: '<img src="styles/legend/Eaux_3.png" /> Eaux'
            });
var format_ponts_4 = new ol.format.GeoJSON();
var features_ponts_4 = format_ponts_4.readFeatures(json_ponts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ponts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ponts_4.addFeatures(features_ponts_4);
var lyr_ponts_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ponts_4, 
                style: style_ponts_4,
                interactive: false,
                title: '<img src="styles/legend/ponts_4.png" /> ponts'
            });
var format_route_5 = new ol.format.GeoJSON();
var features_route_5 = format_route_5.readFeatures(json_route_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_route_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_route_5.addFeatures(features_route_5);
var lyr_route_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_route_5, 
                style: style_route_5,
                interactive: false,
                title: '<img src="styles/legend/route_5.png" /> route'
            });
var format_Point_6 = new ol.format.GeoJSON();
var features_Point_6 = format_Point_6.readFeatures(json_Point_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_6.addFeatures(features_Point_6);
var lyr_Point_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Point_6, 
                style: style_Point_6,
                interactive: true,
                title: '<img src="styles/legend/Point_6.png" /> Point'
            });

lyr_COMMUNE_0.setVisible(true);lyr_PARCELLE_1.setVisible(true);lyr_Btiment_2.setVisible(true);lyr_Eaux_3.setVisible(true);lyr_ponts_4.setVisible(true);lyr_route_5.setVisible(true);lyr_Point_6.setVisible(true);
var layersList = [lyr_COMMUNE_0,lyr_PARCELLE_1,lyr_Btiment_2,lyr_Eaux_3,lyr_ponts_4,lyr_route_5,lyr_Point_6];
lyr_COMMUNE_0.set('fieldAliases', {'NOM_COM': 'NOM_COM', 'CODE_DEP': 'CODE_DEP', 'CODE_INSEE': 'CODE_INSEE', });
lyr_PARCELLE_1.set('fieldAliases', {'NUMERO': 'NUMERO', 'FEUILLE': 'FEUILLE', 'SECTION': 'SECTION', 'CODE_DEP': 'CODE_DEP', 'NOM_COM': 'NOM_COM', 'CODE_COM': 'CODE_COM', 'COM_ABS': 'COM_ABS', 'CODE_ARR': 'CODE_ARR', });
lyr_Btiment_2.set('fieldAliases', {'TYPE': 'TYPE', });
lyr_Eaux_3.set('fieldAliases', {'ID': 'ID', 'CODE_HYDRO': 'CODE_HYDRO', 'CODE_PAYS': 'CODE_PAYS', 'NATURE': 'NATURE', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'SRC_COORD': 'SRC_COORD', 'SRC_ALTI': 'SRC_ALTI', 'STATUT': 'STATUT', 'PERSISTANC': 'PERSISTANC', 'SALINITE': 'SALINITE', 'ORIGINE': 'ORIGINE', 'COMMENT': 'COMMENT', 'ID_P_EAU': 'ID_P_EAU', 'ID_C_EAU': 'ID_C_EAU', 'ID_ENT_TR': 'ID_ENT_TR', 'NOM_P_EAU': 'NOM_P_EAU', 'NOM_C_EAU': 'NOM_C_EAU', 'NOM_ENT_TR': 'NOM_ENT_TR', });
lyr_ponts_4.set('fieldAliases', {'ID_RTE500': 'ID_RTE500', 'VOCATION': 'VOCATION', 'NB_CHAUSSE': 'NB_CHAUSSE', 'NB_VOIES': 'NB_VOIES', 'ETAT': 'ETAT', 'ACCES': 'ACCES', 'RES_VERT': 'RES_VERT', 'SENS': 'SENS', 'COUNT': 'COUNT', 'NUM_ROUTE': 'NUM_ROUTE', 'RES_EUROPE': 'RES_EUROPE', 'LONGUEUR': 'LONGUEUR', 'CLASS_ADM': 'CLASS_ADM', });
lyr_route_5.set('fieldAliases', {'fid': 'fid', });
lyr_Point_6.set('fieldAliases', {'fid': 'fid', 'Titre': 'Titre', 'ID': 'ID', });
lyr_COMMUNE_0.set('fieldImages', {'NOM_COM': 'TextEdit', 'CODE_DEP': 'TextEdit', 'CODE_INSEE': 'TextEdit', });
lyr_PARCELLE_1.set('fieldImages', {'NUMERO': 'TextEdit', 'FEUILLE': 'Range', 'SECTION': 'TextEdit', 'CODE_DEP': 'TextEdit', 'NOM_COM': 'TextEdit', 'CODE_COM': 'TextEdit', 'COM_ABS': 'TextEdit', 'CODE_ARR': 'TextEdit', });
lyr_Btiment_2.set('fieldImages', {'TYPE': '', });
lyr_Eaux_3.set('fieldImages', {'ID': 'TextEdit', 'CODE_HYDRO': 'TextEdit', 'CODE_PAYS': 'TextEdit', 'NATURE': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'SRC_COORD': 'TextEdit', 'SRC_ALTI': 'TextEdit', 'STATUT': 'TextEdit', 'PERSISTANC': 'TextEdit', 'SALINITE': 'TextEdit', 'ORIGINE': 'TextEdit', 'COMMENT': 'TextEdit', 'ID_P_EAU': 'TextEdit', 'ID_C_EAU': 'TextEdit', 'ID_ENT_TR': 'TextEdit', 'NOM_P_EAU': 'TextEdit', 'NOM_C_EAU': 'TextEdit', 'NOM_ENT_TR': 'TextEdit', });
lyr_ponts_4.set('fieldImages', {'ID_RTE500': '', 'VOCATION': '', 'NB_CHAUSSE': '', 'NB_VOIES': '', 'ETAT': '', 'ACCES': '', 'RES_VERT': '', 'SENS': '', 'COUNT': '', 'NUM_ROUTE': '', 'RES_EUROPE': '', 'LONGUEUR': '', 'CLASS_ADM': '', });
lyr_route_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_Point_6.set('fieldImages', {'fid': 'TextEdit', 'Titre': 'TextEdit', 'ID': 'Range', });
lyr_COMMUNE_0.set('fieldLabels', {'NOM_COM': 'no label', 'CODE_DEP': 'no label', 'CODE_INSEE': 'no label', });
lyr_PARCELLE_1.set('fieldLabels', {'NUMERO': 'header label', 'FEUILLE': 'no label', 'SECTION': 'no label', 'CODE_DEP': 'no label', 'NOM_COM': 'no label', 'CODE_COM': 'no label', 'COM_ABS': 'no label', 'CODE_ARR': 'no label', });
lyr_Btiment_2.set('fieldLabels', {'TYPE': 'no label', });
lyr_Eaux_3.set('fieldLabels', {'ID': 'no label', 'CODE_HYDRO': 'no label', 'CODE_PAYS': 'no label', 'NATURE': 'no label', 'POS_SOL': 'no label', 'ETAT': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'SOURCE': 'no label', 'ID_SOURCE': 'no label', 'PREC_PLANI': 'no label', 'PREC_ALTI': 'no label', 'SRC_COORD': 'no label', 'SRC_ALTI': 'no label', 'STATUT': 'no label', 'PERSISTANC': 'no label', 'SALINITE': 'no label', 'ORIGINE': 'no label', 'COMMENT': 'no label', 'ID_P_EAU': 'no label', 'ID_C_EAU': 'no label', 'ID_ENT_TR': 'no label', 'NOM_P_EAU': 'no label', 'NOM_C_EAU': 'no label', 'NOM_ENT_TR': 'no label', });
lyr_ponts_4.set('fieldLabels', {'ID_RTE500': 'no label', 'VOCATION': 'no label', 'NB_CHAUSSE': 'no label', 'NB_VOIES': 'no label', 'ETAT': 'no label', 'ACCES': 'no label', 'RES_VERT': 'no label', 'SENS': 'no label', 'COUNT': 'no label', 'NUM_ROUTE': 'no label', 'RES_EUROPE': 'no label', 'LONGUEUR': 'no label', 'CLASS_ADM': 'no label', });
lyr_route_5.set('fieldLabels', {'fid': 'no label', });
lyr_Point_6.set('fieldLabels', {'fid': 'inline label', 'Titre': 'header label', 'ID': 'no label', });
lyr_Point_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});