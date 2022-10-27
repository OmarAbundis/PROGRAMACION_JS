function prueba(req,res) {
}

function registrarUsuario(req,res){
    var params = req.body; // recibe todos los datos por el método POST
    console.log(params);
    
    usuario.nombre = params.nombre;
    usuario.apellido = params.apellido;
    usuario.email = params.email;
    usuario.rol = 'ROLE_ADMIN';
    usuario.imagen = 'null';

    if (params.password) {
        bcrypt.hash(params.password, 10, function(err,hash) {
            usuario.password = hash;
            if (usuario.nombre != null && usuario.apellido != null && usuario.email != null) {
                // guarda el usuario en DB
                usuario.save((err,usuarioAlmacenado) =>{

                });
            } else{
                res.status(200).send({mesagge: 'Introduce todos los campos'});
            }
        });
    } else {
        res.status(404).send({mesagge:'Introduce la contraseña'});

    }
    
}

function accesoUsuario(req,res) {

}

function actualizarUsuario(req,res){
    var userId = req.params.id; //GET
    var update = req.body; //POST
}