const url = "http://127.0.0.1:7000/api/premio/";
const deleteCiclista = "http://127.0.0.1:7000/api/premio/del/";
const newUrl = "http://localhost:7000/api/premio/add";
const updNew = "http://localhost:7000/api/premio/upd/";

const getCiclistas = (async () => {
    try {
        const fetchCiclistas = await fetch(url);
        const results = await fetchCiclistas.json();
        showCiclistas(results);
        return results;
    } catch (error) {
        console.log(error);
    }
})();

const getOneCiclistas = async (id) => {
    try {
        const fetchCiclistas = await fetch(`${url}get/${id}`);
        const results = await fetchCiclistas.json();
        showOne(results);
        return results;
    } catch (error) {
        console.log(error);
    }
};

function showOne(results){

    const {nombre,categoria,ganador,_id} = results;
    nombreX.value = nombre;
    categoriaX.value = categoria;
    ganadorX.value = ganador;
enviar.setAttribute('_id', _id);

    modal.showModal();

}


function showCiclistas(results) {

    results.forEach(result => {
        const div = document.createElement("div");
        const {nombre,categoria,ganador,_id} = result;
        div.classList.add("card");
        div.innerHTML = `
        <div class="div-card">
        <div class="div-p">
        <p> id: ${_id} </p>
        <p> nombre: ${nombre}</p>
        <p> categoria: ${categoria} </p>
        <p> ganador: ${ganador} </p>
        </div>
        <div class="div-buttons">
        <button id="eliminarCiclista" _id="${_id}">Eliminar</button>
        <button id="actualizarCiclista" _id="${_id}">Actualizar</button>
        </div>
        </div>
        `;

        const section = document.querySelector(`.section-vuelta`);
        section.appendChild(div);
    });
    eliminarPremios();
    actualizarPremios();
}

function eliminarPremios(){
    const eliminarCiclista = document.querySelectorAll("#eliminarCiclista");
    console.log(eliminarCiclista);
    let eliminarCiclistaArray = Array.from(eliminarCiclista);

    eliminarCiclistaArray.forEach(eliminar =>{
        eliminar.addEventListener("click",(e)=>{
            const id = e.target.getAttribute("_id");
            console.log(id);
            deleteC(deleteCiclista,id);
     
        });
    })

}

function actualizarPremios(){
    const actualizarCiclista = document.querySelectorAll("#actualizarCiclista");
    console.log(actualizarCiclista);

    let actualizarCiclistaArray = Array.from(actualizarCiclista);
    actualizarCiclistaArray.forEach(actualizar => {
        actualizar.addEventListener("click", (e)=>{
            const id = e.target.getAttribute("_id");
            console.log(id);
            getOneCiclistas(id);

        });
    });

}

const deleteC = async (deleteCiclista, id) => {
    try{
        await fetch(deleteCiclista+id, {method:"DELETE"});
        window.location.href = "./equipos.html";
        alert("borrado friend");
    }
    catch(error){
        console.log(error);
    }
}   



crearCiclista.addEventListener('click', (e)=>{
    nombreX.value = '';
    categoriaX.value = '';
    ganadorX.value = '';

    enviar._id = '';
    modal.showModal();
});

cerrar.addEventListener('click', (e)=>{
    console.log(e.target);
    modal.close();
});



const newCiclista = async(data)=>{
    try {
        console.log('watafak');
        await fetch(newUrl,{
            method: "POST",
            body:JSON.stringify(data),
            headers:{'Content-Type':'application/json'}
        })
    } catch (error) {
        console.log(error);
    }
}

enviar.addEventListener('click', (e)=>{
    let data = {
        nombre: nombreX.value,
        categoria: categoriaX.value,
        ganador: ganadorX.value
    }
    const id = e.target.getAttribute('_id');
    modal.close();
    if (id){
    updateCiclista(data, id);

    }

    else {
        newCiclista(data);
    }
    window.location.reload();
    window.location.reload();
});

 const updateCiclista = async (data, id) => {
    try {
        await fetch(`${updNew}${id}`, {
            method: "PATCH",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
    } catch (error) {
      console.error(error);
    }
}