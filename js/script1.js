function cambiar(){
    let titulo = document.getElementById("titulo");
}

let boton=document.getElementById("boton");
boton.addEventListener("click",
    function () {
        document.getElementById("titulo").textContent="Hola, estoy modificando el titulo"
    }
);

const body=document.body;
const mode = document.getElementById('mode');
body.classList.toggle('dark-mode', localStorage.getItem('mode') === 'dark');
mode.addEventListener('click',() =>{
    const isDark = body.classList.toggle('modooscuro');
    localStorage.setItem('mode', isDark ? 'dark' : 'light')
});