function readTextFile(file, callback) { // esto se deja asi 
    var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json")
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
           if (rawFile.readyState === 4 && rawFile.status == "200") {
               callback(rawFile.responseText);
           } 
        }
        rawFile.send(null);
}


//manejo de objetos complejos en Javscript


var data_Json; // esto lo podes cambiar a tu gusto

readTextFile('index.json',function(text){
    data_Json = JSON.parse(text);
    
    var elastic_div = document.getElementById('elastic_div');

    
    for (var index=0;index<data_Json["estudiantes"].length;index++){
        
            var h2_instance = document.createElement("h2");
            h2_instance.innerHTML= data_Json["estudiantes"][index]["nombre"]+' el valor de index es: '+index;
            elastic_div.appendChild(h2_instance);
        }
    })