var json = '{"nombre":"Manuel","edad":23,"nacionalidad":"Mexicana","hobbies":["ajedrez","video juegos","comics"]}';
var obj = JSON.parse(json);
console.log(obj);
console.log(obj.hobbies[0]);
obj.hobbies[0] = "peliculas";
console.log(obj.hobbies[0]);
console.log(obj);