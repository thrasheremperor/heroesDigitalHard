module.exports=mainControl={
    home:(req,res)=>{
        res.send(`Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.`);
    },
    creditos:(req,res)=>{
        res.send('Creditos a Matt G');
    }
};