const contenedorG = document.createElement("div");
contenedorG.classList.add("contenedor")
document.body.appendChild(contenedorG)

// Selecion del Conetendor de los div a crear
const agregarDiv = document.createElement("div")
agregarDiv.classList.add("contenedor-tab")
contenedorG.appendChild(agregarDiv)

// Selecion del contenedor de los textos a crear
const agregarTex = document.createElement("div")
agregarTex.classList.add("contenedor-text")
contenedorG.appendChild(agregarTex)

// Colocando lo que llevaran los textos
const txt = ["Hola", "Como estas", "Tengo sueño", "Quiero dormir"]

//Colocando lo que llevaran los div´s
const op = ["Opcion 1", "Opcion 2", "Opcion 3", "Opcion 4"];



let divSeleccionado = null;



// Creando los div´s
function divText() {


    op.forEach(e => {
        const div = document.createElement('div');
        div.textContent = e;
        agregarDiv.appendChild(div);
        div.className = "tab"


        // Haciendo que el div sea clickleable
        div.addEventListener("click", (e) => {

            // Cambiando color el div
            if (divSeleccionado !== null) {
                divSeleccionado.classList.remove("activo");
            }

            div.classList.add("activo");
            divSeleccionado = div;

            // Eliminando cualquier barra existente
            const barras = document.querySelectorAll(".barra");
            barras.forEach(barra => barra.remove());

            // Creando una nueva barra y agregándola al contenedor de div
            const barra = document.createElement("div")
            agregarDiv.appendChild(barra);
            barra.className = "barra"
            barra.style.width = e.target.offsetWidth + "px";
            barra.style.left = e.target.offsetLeft + "px";

            // Mostrando los párrafos correspondientes
            const textos = document.querySelectorAll(".text");
            textos.forEach(texto => texto.classList.remove("activo"));

            const index = Array.from(agregarDiv.children).indexOf(e.target);
            textos[index].classList.add("activo");



        })

    })
};

// Creando los Parrafos
function text() {


    txt.forEach(t => {
        const p = document.createElement('p');
        p.textContent = t;
        agregarTex.appendChild(p)

        p.className = "text"



    })
};



divText();
text();