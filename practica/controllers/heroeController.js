const data= require('../data/science')

let lista = []
for(let i=0; i<data.lista.length; i++){
    let nombre=data.lista[i].nombre
    lista.push(nombre)
}


const heroeController={
    listaNombres : function(req, res){
        return res.send(lista)
    },
    detalle : function (req, res){
        let id = req.params.id;
        return res.render('heroes', {
            lista : data.lista[id]
        })
    },
    bio: function (req, res) {
        let id = req.params.id;
        let ok = req.params.ok;
    
        if (data.lista[id]) {
            if (ok === 'ok') {
                res.render('heroesBio', {
                    nombre: data.lista[id].nombre,
                    reseña: data.lista[id].resenia
                });
            } else {
                res.render('heroesBio', {
                    nombre: data.lista[id].nombre,
                    reseña: "Lamento que no desees saber más de mí :("
                });
            }
        } else {
            res.render('heroesBio', {
                nombre: "No encontramos al científico indicado para mostrar su biografía",
                reseña: "404 :("
            });
        }
    },
    creditos: function(req,res){
        res.render('heroesBio',{
            nombre: 'Marcos',
            reseña : 'Hecho con ❤️ en Programación 2'
        })
    }
}




module.exports= heroeController;