var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIBoundariesPlaces_1 = new ol.layer.Tile({
            'title': 'ESRI Boundaries&Places',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Formationetsensibilisation_2 = new ol.format.GeoJSON();
var features_Formationetsensibilisation_2 = format_Formationetsensibilisation_2.readFeatures(json_Formationetsensibilisation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formationetsensibilisation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formationetsensibilisation_2.addFeatures(features_Formationetsensibilisation_2);
var lyr_Formationetsensibilisation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formationetsensibilisation_2, 
                style: style_Formationetsensibilisation_2,
                popuplayertitle: 'Formation et sensibilisation',
                interactive: true,
                title: '<img src="styles/legend/Formationetsensibilisation_2.png" /> Formation et sensibilisation'
            });
var format_Etudeetenqute_3 = new ol.format.GeoJSON();
var features_Etudeetenqute_3 = format_Etudeetenqute_3.readFeatures(json_Etudeetenqute_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etudeetenqute_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etudeetenqute_3.addFeatures(features_Etudeetenqute_3);
var lyr_Etudeetenqute_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Etudeetenqute_3, 
                style: style_Etudeetenqute_3,
                popuplayertitle: 'Etude et enquête',
                interactive: true,
                title: '<img src="styles/legend/Etudeetenqute_3.png" /> Etude et enquête'
            });
var format_AMO_4 = new ol.format.GeoJSON();
var features_AMO_4 = format_AMO_4.readFeatures(json_AMO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMO_4.addFeatures(features_AMO_4);
var lyr_AMO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMO_4, 
                style: style_AMO_4,
                popuplayertitle: 'AMO',
                interactive: true,
                title: '<img src="styles/legend/AMO_4.png" /> AMO'
            });
var format_Cartographieetimages_5 = new ol.format.GeoJSON();
var features_Cartographieetimages_5 = format_Cartographieetimages_5.readFeatures(json_Cartographieetimages_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cartographieetimages_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cartographieetimages_5.addFeatures(features_Cartographieetimages_5);
var lyr_Cartographieetimages_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cartographieetimages_5, 
                style: style_Cartographieetimages_5,
                popuplayertitle: 'Cartographie et images',
                interactive: true,
                title: '<img src="styles/legend/Cartographieetimages_5.png" /> Cartographie et images'
            });
var group_ProjetsSaVE = new ol.layer.Group({
                                layers: [lyr_Formationetsensibilisation_2,lyr_Etudeetenqute_3,lyr_AMO_4,lyr_Cartographieetimages_5,],
                                fold: 'open',
                                title: 'Projets SaVE'});

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRIBoundariesPlaces_1.setVisible(true);lyr_Formationetsensibilisation_2.setVisible(true);lyr_Etudeetenqute_3.setVisible(true);lyr_AMO_4.setVisible(true);lyr_Cartographieetimages_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESRIBoundariesPlaces_1,group_ProjetsSaVE];
lyr_Formationetsensibilisation_2.set('fieldAliases', {'fid': 'fid', 'Titre': 'Titre', 'Commanditaire': 'Commanditaire', 'Etat': 'Etat', 'Année': 'Année', });
lyr_Etudeetenqute_3.set('fieldAliases', {'fid': 'fid', 'Titre': 'Titre', 'Commanditaire': 'Commanditaire', 'Etat': 'Etat', 'Année': 'Année', });
lyr_AMO_4.set('fieldAliases', {'fid': 'fid', 'Titre': 'Titre', 'Commanditaire': 'Commanditaire', 'Etat': 'Etat', 'Année': 'Année', });
lyr_Cartographieetimages_5.set('fieldAliases', {'fid': 'fid', 'Titre': 'Titre', 'Commanditaire': 'Commanditaire', 'Etat': 'Etat', 'Année': 'Année', });
lyr_Formationetsensibilisation_2.set('fieldImages', {'fid': 'TextEdit', 'Titre': 'TextEdit', 'Commanditaire': 'TextEdit', 'Etat': 'TextEdit', 'Année': 'Range', });
lyr_Etudeetenqute_3.set('fieldImages', {'fid': 'TextEdit', 'Titre': 'TextEdit', 'Commanditaire': 'TextEdit', 'Etat': 'TextEdit', 'Année': 'Range', });
lyr_AMO_4.set('fieldImages', {'fid': 'TextEdit', 'Titre': 'TextEdit', 'Commanditaire': 'TextEdit', 'Etat': 'TextEdit', 'Année': 'Range', });
lyr_Cartographieetimages_5.set('fieldImages', {'fid': 'TextEdit', 'Titre': 'TextEdit', 'Commanditaire': 'TextEdit', 'Etat': 'TextEdit', 'Année': 'Range', });
lyr_Formationetsensibilisation_2.set('fieldLabels', {'fid': 'hidden field', 'Titre': 'header label - visible with data', 'Commanditaire': 'header label - visible with data', 'Etat': 'header label - visible with data', 'Année': 'header label - visible with data', });
lyr_Etudeetenqute_3.set('fieldLabels', {'fid': 'hidden field', 'Titre': 'header label - visible with data', 'Commanditaire': 'header label - visible with data', 'Etat': 'header label - visible with data', 'Année': 'header label - visible with data', });
lyr_AMO_4.set('fieldLabels', {'fid': 'hidden field', 'Titre': 'header label - visible with data', 'Commanditaire': 'header label - visible with data', 'Etat': 'header label - visible with data', 'Année': 'header label - visible with data', });
lyr_Cartographieetimages_5.set('fieldLabels', {'fid': 'hidden field', 'Titre': 'header label - visible with data', 'Commanditaire': 'header label - visible with data', 'Etat': 'header label - visible with data', 'Année': 'header label - visible with data', });
lyr_Cartographieetimages_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});