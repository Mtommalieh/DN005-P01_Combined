ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2932").setExtent([219785.559049, 405248.821500, 221633.273383, 406364.568598]);
var wms_layers = [];


        var lyr_Googlesattelitemaps_0 = new ol.layer.Tile({
            'title': 'Google sattelite maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Projectboundriesproject_boundries_1 = new ol.format.GeoJSON();
var features_Projectboundriesproject_boundries_1 = format_Projectboundriesproject_boundries_1.readFeatures(json_Projectboundriesproject_boundries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2932'});
var jsonSource_Projectboundriesproject_boundries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projectboundriesproject_boundries_1.addFeatures(features_Projectboundriesproject_boundries_1);
var lyr_Projectboundriesproject_boundries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projectboundriesproject_boundries_1, 
                style: style_Projectboundriesproject_boundries_1,
                popuplayertitle: "Project boundries — project_boundries ",
                interactive: true,
                title: '<img src="styles/legend/Projectboundriesproject_boundries_1.png" /> Project boundries — project_boundries '
            });
var format_BaseMapbase_map__2 = new ol.format.GeoJSON();
var features_BaseMapbase_map__2 = format_BaseMapbase_map__2.readFeatures(json_BaseMapbase_map__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2932'});
var jsonSource_BaseMapbase_map__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaseMapbase_map__2.addFeatures(features_BaseMapbase_map__2);
var lyr_BaseMapbase_map__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaseMapbase_map__2, 
                style: style_BaseMapbase_map__2,
                popuplayertitle: "Base Map — base_map_",
                interactive: true,
                title: '<img src="styles/legend/BaseMapbase_map__2.png" /> Base Map — base_map_'
            });
var format_TSELayouttse_layout_3 = new ol.format.GeoJSON();
var features_TSELayouttse_layout_3 = format_TSELayouttse_layout_3.readFeatures(json_TSELayouttse_layout_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2932'});
var jsonSource_TSELayouttse_layout_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TSELayouttse_layout_3.addFeatures(features_TSELayouttse_layout_3);
var lyr_TSELayouttse_layout_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TSELayouttse_layout_3, 
                style: style_TSELayouttse_layout_3,
                popuplayertitle: "TSE Layout — tse_layout",
                interactive: true,
                title: '<img src="styles/legend/TSELayouttse_layout_3.png" /> TSE Layout — tse_layout'
            });
var format_TSEinfotse_info_4 = new ol.format.GeoJSON();
var features_TSEinfotse_info_4 = format_TSEinfotse_info_4.readFeatures(json_TSEinfotse_info_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2932'});
var jsonSource_TSEinfotse_info_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TSEinfotse_info_4.addFeatures(features_TSEinfotse_info_4);
var lyr_TSEinfotse_info_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TSEinfotse_info_4, 
                style: style_TSEinfotse_info_4,
                popuplayertitle: "TSE info — tse_info",
                interactive: true,
                title: 'TSE info — tse_info'
            });
var format_SWLayoutsw_layout_5 = new ol.format.GeoJSON();
var features_SWLayoutsw_layout_5 = format_SWLayoutsw_layout_5.readFeatures(json_SWLayoutsw_layout_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2932'});
var jsonSource_SWLayoutsw_layout_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWLayoutsw_layout_5.addFeatures(features_SWLayoutsw_layout_5);
var lyr_SWLayoutsw_layout_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SWLayoutsw_layout_5, 
                style: style_SWLayoutsw_layout_5,
                popuplayertitle: "SW Layout — sw_layout",
                interactive: true,
                title: '<img src="styles/legend/SWLayoutsw_layout_5.png" /> SW Layout — sw_layout'
            });
var format_SWMHssw_mhs__6 = new ol.format.GeoJSON();
var features_SWMHssw_mhs__6 = format_SWMHssw_mhs__6.readFeatures(json_SWMHssw_mhs__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2932'});
var jsonSource_SWMHssw_mhs__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWMHssw_mhs__6.addFeatures(features_SWMHssw_mhs__6);
var lyr_SWMHssw_mhs__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SWMHssw_mhs__6, 
                style: style_SWMHssw_mhs__6,
                popuplayertitle: "SW MHs # — sw_mhs_",
                interactive: true,
                title: 'SW MHs # — sw_mhs_'
            });
var format_SWMHsLocationssw_mhs_location_7 = new ol.format.GeoJSON();
var features_SWMHsLocationssw_mhs_location_7 = format_SWMHsLocationssw_mhs_location_7.readFeatures(json_SWMHsLocationssw_mhs_location_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2932'});
var jsonSource_SWMHsLocationssw_mhs_location_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWMHsLocationssw_mhs_location_7.addFeatures(features_SWMHsLocationssw_mhs_location_7);
var lyr_SWMHsLocationssw_mhs_location_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SWMHsLocationssw_mhs_location_7, 
                style: style_SWMHsLocationssw_mhs_location_7,
                popuplayertitle: "SW MHs Locations — sw_mhs_location",
                interactive: true,
                title: '<img src="styles/legend/SWMHsLocationssw_mhs_location_7.png" /> SW MHs Locations — sw_mhs_location'
            });
var format_FSLayoutfs_layout__8 = new ol.format.GeoJSON();
var features_FSLayoutfs_layout__8 = format_FSLayoutfs_layout__8.readFeatures(json_FSLayoutfs_layout__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2932'});
var jsonSource_FSLayoutfs_layout__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FSLayoutfs_layout__8.addFeatures(features_FSLayoutfs_layout__8);
var lyr_FSLayoutfs_layout__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FSLayoutfs_layout__8, 
                style: style_FSLayoutfs_layout__8,
                popuplayertitle: "FS Layout — fs_layout_",
                interactive: true,
                title: '<img src="styles/legend/FSLayoutfs_layout__8.png" /> FS Layout — fs_layout_'
            });
var format_FSMHsfs_mhs__9 = new ol.format.GeoJSON();
var features_FSMHsfs_mhs__9 = format_FSMHsfs_mhs__9.readFeatures(json_FSMHsfs_mhs__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2932'});
var jsonSource_FSMHsfs_mhs__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FSMHsfs_mhs__9.addFeatures(features_FSMHsfs_mhs__9);
var lyr_FSMHsfs_mhs__9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FSMHsfs_mhs__9, 
                style: style_FSMHsfs_mhs__9,
                popuplayertitle: "FS MHs # — fs_mhs_",
                interactive: true,
                title: 'FS MHs # — fs_mhs_'
            });
var format_FSMHsLocationsfs_mhs_location_10 = new ol.format.GeoJSON();
var features_FSMHsLocationsfs_mhs_location_10 = format_FSMHsLocationsfs_mhs_location_10.readFeatures(json_FSMHsLocationsfs_mhs_location_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2932'});
var jsonSource_FSMHsLocationsfs_mhs_location_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FSMHsLocationsfs_mhs_location_10.addFeatures(features_FSMHsLocationsfs_mhs_location_10);
var lyr_FSMHsLocationsfs_mhs_location_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FSMHsLocationsfs_mhs_location_10, 
                style: style_FSMHsLocationsfs_mhs_location_10,
                popuplayertitle: "FS MHs Locations — fs_mhs_location",
                interactive: true,
                title: '<img src="styles/legend/FSMHsLocationsfs_mhs_location_10.png" /> FS MHs Locations — fs_mhs_location'
            });
var format_Plotsplots_11 = new ol.format.GeoJSON();
var features_Plotsplots_11 = format_Plotsplots_11.readFeatures(json_Plotsplots_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2932'});
var jsonSource_Plotsplots_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plotsplots_11.addFeatures(features_Plotsplots_11);
var lyr_Plotsplots_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plotsplots_11, 
                style: style_Plotsplots_11,
                popuplayertitle: "Plots — plots",
                interactive: true,
                title: 'Plots — plots'
            });
var format_RoadNamesroad_names_12 = new ol.format.GeoJSON();
var features_RoadNamesroad_names_12 = format_RoadNamesroad_names_12.readFeatures(json_RoadNamesroad_names_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2932'});
var jsonSource_RoadNamesroad_names_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadNamesroad_names_12.addFeatures(features_RoadNamesroad_names_12);
var lyr_RoadNamesroad_names_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadNamesroad_names_12, 
                style: style_RoadNamesroad_names_12,
                popuplayertitle: "Road Names — road_names",
                interactive: true,
                title: 'Road Names — road_names'
            });

lyr_Googlesattelitemaps_0.setVisible(true);lyr_Projectboundriesproject_boundries_1.setVisible(true);lyr_BaseMapbase_map__2.setVisible(true);lyr_TSELayouttse_layout_3.setVisible(true);lyr_TSEinfotse_info_4.setVisible(true);lyr_SWLayoutsw_layout_5.setVisible(true);lyr_SWMHssw_mhs__6.setVisible(true);lyr_SWMHsLocationssw_mhs_location_7.setVisible(true);lyr_FSLayoutfs_layout__8.setVisible(true);lyr_FSMHsfs_mhs__9.setVisible(true);lyr_FSMHsLocationsfs_mhs_location_10.setVisible(true);lyr_Plotsplots_11.setVisible(true);lyr_RoadNamesroad_names_12.setVisible(true);
var layersList = [lyr_Googlesattelitemaps_0,lyr_Projectboundriesproject_boundries_1,lyr_BaseMapbase_map__2,lyr_TSELayouttse_layout_3,lyr_TSEinfotse_info_4,lyr_SWLayoutsw_layout_5,lyr_SWMHssw_mhs__6,lyr_SWMHsLocationssw_mhs_location_7,lyr_FSLayoutfs_layout__8,lyr_FSMHsfs_mhs__9,lyr_FSMHsLocationsfs_mhs_location_10,lyr_Plotsplots_11,lyr_RoadNamesroad_names_12];
lyr_Projectboundriesproject_boundries_1.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_BaseMapbase_map__2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_TSELayouttse_layout_3.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_TSEinfotse_info_4.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_SWLayoutsw_layout_5.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_SWMHssw_mhs__6.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_SWMHsLocationssw_mhs_location_7.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_FSLayoutfs_layout__8.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_FSMHsfs_mhs__9.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_FSMHsLocationsfs_mhs_location_10.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Plotsplots_11.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_RoadNamesroad_names_12.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Projectboundriesproject_boundries_1.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_BaseMapbase_map__2.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_TSELayouttse_layout_3.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_TSEinfotse_info_4.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_SWLayoutsw_layout_5.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_SWMHssw_mhs__6.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_SWMHsLocationssw_mhs_location_7.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_FSLayoutfs_layout__8.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_FSMHsfs_mhs__9.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_FSMHsLocationsfs_mhs_location_10.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Plotsplots_11.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_RoadNamesroad_names_12.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Projectboundriesproject_boundries_1.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_BaseMapbase_map__2.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_TSELayouttse_layout_3.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_TSEinfotse_info_4.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_SWLayoutsw_layout_5.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_SWMHssw_mhs__6.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_SWMHsLocationssw_mhs_location_7.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_FSLayoutfs_layout__8.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_FSMHsfs_mhs__9.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_FSMHsLocationsfs_mhs_location_10.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Plotsplots_11.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_RoadNamesroad_names_12.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_RoadNamesroad_names_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});