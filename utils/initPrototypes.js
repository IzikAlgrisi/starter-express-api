console.log('Prototypessssss');
String.prototype.getWithVars = function (args) {
    var arr = Object.keys(args);
    var str = this.toString();
    arr.map(function(val, i, arr){
        var re = new RegExp('{{'+ val + '}}',"g");
        str = str.replace(re, args[val]);
    })

    return str;
}

var v = "alysdjhaghsdjgdjhadgjhagjhgsjgfjgfdjhasghj";