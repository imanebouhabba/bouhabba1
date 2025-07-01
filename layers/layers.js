ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-23.248694, 21.258446, 12.699387, 39.435201]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'جامعات',
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> جامعات'
            });
var format_REGION_MAROC_FINI_2 = new ol.format.GeoJSON();
var features_REGION_MAROC_FINI_2 = format_REGION_MAROC_FINI_2.readFeatures(json_REGION_MAROC_FINI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_REGION_MAROC_FINI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGION_MAROC_FINI_2.addFeatures(features_REGION_MAROC_FINI_2);
var lyr_REGION_MAROC_FINI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REGION_MAROC_FINI_2, 
                style: style_REGION_MAROC_FINI_2,
                popuplayertitle: 'REGION_MAROC_FINI',
                interactive: false,
                title: '<img src="styles/legend/REGION_MAROC_FINI_2.png" /> REGION_MAROC_FINI'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr_REGION_MAROC_FINI_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr_REGION_MAROC_FINI_2];
lyr__1.set('fieldAliases', {'Nom_du_uni': 'Nom_du_uni', 'lat': 'lat', 'long': 'long', 'site_web': 'site_web', 'la_date': 'la_date', 'ville': 'ville', });
lyr_REGION_MAROC_FINI_2.set('fieldAliases', {'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'centre_rég': 'centre_rég', });
lyr__1.set('fieldImages', {'Nom_du_uni': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'site_web': 'TextEdit', 'la_date': 'TextEdit', 'ville': 'TextEdit', });
lyr_REGION_MAROC_FINI_2.set('fieldImages', {'REGION': 'TextEdit', 'NOM_REGION': 'TextEdit', 'centre_rég': 'TextEdit', });
lyr__1.set('fieldLabels', {'Nom_du_uni': 'no label', 'lat': 'no label', 'long': 'no label', 'site_web': 'no label', 'la_date': 'no label', 'ville': 'no label', });
lyr_REGION_MAROC_FINI_2.set('fieldLabels', {'REGION': 'inline label - always visible', 'NOM_REGION': 'inline label - always visible', 'centre_rég': 'inline label - always visible', });
lyr_REGION_MAROC_FINI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});