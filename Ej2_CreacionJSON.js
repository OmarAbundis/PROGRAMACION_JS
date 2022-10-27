var json = '{"Nombre":"Pancho López", "Edad":27,"Nacionalidad":"Chilango"}';
var obj = JSON.parse(json);
console.log (obj);
console.log(obj.Nombre)
obj.Nombre = "Paco Calle"
console.log(obj.Nombre);
console.log(obj);
