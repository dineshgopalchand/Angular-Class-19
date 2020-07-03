var backgroundColor = '#e2e2e2';
var fontColor = '#000000';
var borderColor = '#282828';
var color = {
    backgound: '#e2e2e2',
    font: '#000000',
    border: '#282828'
};
color.backgound = '#ff0000';
var Color;
(function (Color) {
    Color["backgound"] = "#e2e2e2";
    Color["font"] = "#000000";
    Color["border"] = "#282828";
})(Color || (Color = {}));
console.log(Color.backgound);
console.log(Color.border);
