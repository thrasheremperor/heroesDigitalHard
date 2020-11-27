const fs=require('fs');
const heroes=JSON.parse(fs.readFileSync('./data/heroes.json','utf-8'));

module.exports=heroControl={
    heroes:function(req,res){
        res.send(heroes);
    },
    heroesDetalles:function(req,res){
        let hero=heroes.find(heroe=>{
            return heroe.id==req.params.id;
        });
        if (hero==null){
            res.send(`No existe heroes con el id numero ${req.params.id}`)
        };
        res.send(`Hola, mi nombre es ${hero.nombre} y soy ${hero.profesion}`)
    },
    heroesBio:function(req,res){
        let hero=heroes.find(heroe=>{
            return heroe.id==req.params.id;
        });
        if (hero){
            if (req.params.ok=='ok'){
                res.send(`Hola, mi nombre es ${hero.nombre}.\n${hero.resenia}`);
            }else{
                res.send(`Hola, mi nombre es ${hero.nombre} y soy ${hero.profesion}.\nLamento que no desees saber más de mi :(`);
            }
        }else{
            res.send(`No encontramos un héroe para mostrarte su biografía`);
        }
    }
};