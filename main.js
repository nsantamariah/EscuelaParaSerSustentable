const app= document.getElementById('typewriter');
const typewriter = new TypeWriter(app,{

    lopp:true,
    delay:75

});

typewriter
.typeString('Registrate')
.pauseFor(200)
.start();