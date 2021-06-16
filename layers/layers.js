var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionYuriria_3 = new ol.format.GeoJSON();
var features_CoordinacionYuriria_3 = format_CoordinacionYuriria_3.readFeatures(json_CoordinacionYuriria_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionYuriria_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionYuriria_3.addFeatures(features_CoordinacionYuriria_3);
var lyr_CoordinacionYuriria_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionYuriria_3, 
                style: style_CoordinacionYuriria_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionYuriria_3.png" /> Coordinacion Yuriria'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionY3_5 = new ol.format.GeoJSON();
var features_MicroregionY3_5 = format_MicroregionY3_5.readFeatures(json_MicroregionY3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionY3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionY3_5.addFeatures(features_MicroregionY3_5);
var lyr_MicroregionY3_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionY3_5, 
                style: style_MicroregionY3_5,
                interactive: false,
    title: 'Microregion Y3<br />\
    <img src="styles/legend/MicroregionY3_5_0.png" /> 1 - 91 Personas<br />\
    <img src="styles/legend/MicroregionY3_5_1.png" /> 91 - 230 Personas<br />\
    <img src="styles/legend/MicroregionY3_5_2.png" /> 230 - 441 Personas<br />\
    <img src="styles/legend/MicroregionY3_5_3.png" /> 441 - 642 Personas<br />\
    <img src="styles/legend/MicroregionY3_5_4.png" /> 642 - 860 Personas<br />'
        });
var format_MicroregionY2_6 = new ol.format.GeoJSON();
var features_MicroregionY2_6 = format_MicroregionY2_6.readFeatures(json_MicroregionY2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionY2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionY2_6.addFeatures(features_MicroregionY2_6);
var lyr_MicroregionY2_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionY2_6, 
                style: style_MicroregionY2_6,
                interactive: false,
    title: 'Microregion Y2<br />\
    <img src="styles/legend/MicroregionY2_6_0.png" /> 3 - 52 Personas<br />\
    <img src="styles/legend/MicroregionY2_6_1.png" /> 52 - 138 Personas<br />\
    <img src="styles/legend/MicroregionY2_6_2.png" /> 138 - 283 Personas<br />\
    <img src="styles/legend/MicroregionY2_6_3.png" /> 283 - 428 Personas<br />\
    <img src="styles/legend/MicroregionY2_6_4.png" /> 428 - 675 Personas<br />'
        });
var format_MicroregionY1_7 = new ol.format.GeoJSON();
var features_MicroregionY1_7 = format_MicroregionY1_7.readFeatures(json_MicroregionY1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionY1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionY1_7.addFeatures(features_MicroregionY1_7);
var lyr_MicroregionY1_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionY1_7, 
                style: style_MicroregionY1_7,
                interactive: false,
    title: 'Microregion Y1<br />\
    <img src="styles/legend/MicroregionY1_7_0.png" /> 3 - 25 Personas<br />\
    <img src="styles/legend/MicroregionY1_7_1.png" /> 25 - 83 Personas<br />\
    <img src="styles/legend/MicroregionY1_7_2.png" /> 83 - 206 Personas<br />\
    <img src="styles/legend/MicroregionY1_7_3.png" /> 206 - 410 Personas<br />\
    <img src="styles/legend/MicroregionY1_7_4.png" /> 410 - 751 Personas<br />'
        });
var format_MicroregionURI2_8 = new ol.format.GeoJSON();
var features_MicroregionURI2_8 = format_MicroregionURI2_8.readFeatures(json_MicroregionURI2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionURI2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionURI2_8.addFeatures(features_MicroregionURI2_8);
var lyr_MicroregionURI2_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionURI2_8, 
                style: style_MicroregionURI2_8,
                interactive: false,
    title: 'Microregion URI2<br />\
    <img src="styles/legend/MicroregionURI2_8_0.png" /> 1 - 25 Personas<br />\
    <img src="styles/legend/MicroregionURI2_8_1.png" /> 25 - 71 Personas<br />\
    <img src="styles/legend/MicroregionURI2_8_2.png" /> 71 - 176 Personas<br />\
    <img src="styles/legend/MicroregionURI2_8_3.png" /> 176 - 323 Personas<br />\
    <img src="styles/legend/MicroregionURI2_8_4.png" /> 323 - 471 Personas<br />'
        });
var format_MicroregionURI1_9 = new ol.format.GeoJSON();
var features_MicroregionURI1_9 = format_MicroregionURI1_9.readFeatures(json_MicroregionURI1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionURI1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionURI1_9.addFeatures(features_MicroregionURI1_9);
var lyr_MicroregionURI1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionURI1_9, 
                style: style_MicroregionURI1_9,
                interactive: false,
    title: 'Microregion URI1<br />\
    <img src="styles/legend/MicroregionURI1_9_0.png" /> 3 - 15 Personas<br />\
    <img src="styles/legend/MicroregionURI1_9_1.png" /> 15 - 30 Personas<br />\
    <img src="styles/legend/MicroregionURI1_9_2.png" /> 30 - 48 Personas<br />\
    <img src="styles/legend/MicroregionURI1_9_3.png" /> 48 - 80 Personas<br />\
    <img src="styles/legend/MicroregionURI1_9_4.png" /> 80 - 145 Personas<br />'
        });
var format_MicroregionMOR2_10 = new ol.format.GeoJSON();
var features_MicroregionMOR2_10 = format_MicroregionMOR2_10.readFeatures(json_MicroregionMOR2_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionMOR2_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionMOR2_10.addFeatures(features_MicroregionMOR2_10);
var lyr_MicroregionMOR2_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionMOR2_10, 
                style: style_MicroregionMOR2_10,
                interactive: false,
    title: 'Microregion MOR2<br />\
    <img src="styles/legend/MicroregionMOR2_10_0.png" /> 3 - 21 Personas<br />\
    <img src="styles/legend/MicroregionMOR2_10_1.png" /> 21 - 56 Personas<br />\
    <img src="styles/legend/MicroregionMOR2_10_2.png" /> 56 - 139 Personas<br />\
    <img src="styles/legend/MicroregionMOR2_10_3.png" /> 139 - 276 Personas<br />\
    <img src="styles/legend/MicroregionMOR2_10_4.png" /> 276 - 429 Personas<br />'
        });
var format_MicroregionMOR1_11 = new ol.format.GeoJSON();
var features_MicroregionMOR1_11 = format_MicroregionMOR1_11.readFeatures(json_MicroregionMOR1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionMOR1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionMOR1_11.addFeatures(features_MicroregionMOR1_11);
var lyr_MicroregionMOR1_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionMOR1_11, 
                style: style_MicroregionMOR1_11,
                interactive: false,
    title: 'Microregion MOR1<br />\
    <img src="styles/legend/MicroregionMOR1_11_0.png" /> 3 - 17 Personas<br />\
    <img src="styles/legend/MicroregionMOR1_11_1.png" /> 17 - 37 Personas<br />\
    <img src="styles/legend/MicroregionMOR1_11_2.png" /> 37 - 66 Personas<br />\
    <img src="styles/legend/MicroregionMOR1_11_3.png" /> 66 - 98 Personas<br />\
    <img src="styles/legend/MicroregionMOR1_11_4.png" /> 98 - 134 Personas<br />'
        });
var format_CoordinacionYuriria_12 = new ol.format.GeoJSON();
var features_CoordinacionYuriria_12 = format_CoordinacionYuriria_12.readFeatures(json_CoordinacionYuriria_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionYuriria_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionYuriria_12.addFeatures(features_CoordinacionYuriria_12);
var lyr_CoordinacionYuriria_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionYuriria_12, 
                style: style_CoordinacionYuriria_12,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionYuriria_12.png" /> Coordinacion Yuriria'
            });
var group_CoordinacionYuririaRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionY3_5,lyr_MicroregionY2_6,lyr_MicroregionY1_7,lyr_MicroregionURI2_8,lyr_MicroregionURI1_9,lyr_MicroregionMOR2_10,lyr_MicroregionMOR1_11,],
                                title: "Coordinacion Yuriria Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionYuriria_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionYuriria_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionY3_5.setVisible(true);lyr_MicroregionY2_6.setVisible(true);lyr_MicroregionY1_7.setVisible(true);lyr_MicroregionURI2_8.setVisible(true);lyr_MicroregionURI1_9.setVisible(true);lyr_MicroregionMOR2_10.setVisible(true);lyr_MicroregionMOR1_11.setVisible(true);lyr_CoordinacionYuriria_12.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionYuririaRezago,lyr_CoordinacionYuriria_12];
lyr_CoordinacionYuriria_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionY3_5.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionY2_6.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionY1_7.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionURI2_8.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionURI1_9.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionMOR2_10.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', 'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionMOR1_11.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', });
lyr_CoordinacionYuriria_12.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionYuriria_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionY3_5.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionY2_6.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionY1_7.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionURI2_8.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionURI1_9.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionMOR2_10.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', 'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionMOR1_11.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionYuriria_12.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionYuriria_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionY3_5.set('fieldLabels', {});
lyr_MicroregionY2_6.set('fieldLabels', {});
lyr_MicroregionY1_7.set('fieldLabels', {});
lyr_MicroregionURI2_8.set('fieldLabels', {});
lyr_MicroregionURI1_9.set('fieldLabels', {});
lyr_MicroregionMOR2_10.set('fieldLabels', {});
lyr_MicroregionMOR1_11.set('fieldLabels', {});
lyr_CoordinacionYuriria_12.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionYuriria_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});