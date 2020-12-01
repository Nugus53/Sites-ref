var size = 0;
var placement = 'point';

var style_Point_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "39.0px \'Roboto\', sans-serif";
    var labelFill = "#A3B564";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("fid") !== null) {
        labelText = String(feature.get("fid"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
             fill: new ol.style.Fill({color: 'rgba(255,255,255,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
