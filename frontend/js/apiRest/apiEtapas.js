const url = "http://127.0.0.1:7000/api/etapa/";
const deleteCiclista = "http://127.0.0.1:7000/api/etapa/del/";
const newUrl = "http://localhost:7000/api/etapa/add";
const updNew = "http://localhost:7000/api/etapa/upd/";

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

    const {nombre,duracionM,longitudK,tmrM,_id} = results;
    nombreX.value = nombre;
    duracionX.value = duracionM;
    longitudX.value = longitudK;
    tmrX.value = tmrM;
enviar.setAttribute('_id', _id);

    modal.showModal();

}
function showCiclistas(results) {

    results.forEach(result => {
        const div = document.createElement("div");
        const {nombre,duracionM,longitudK,tmrM,_id} = result;
        div.classList.add("card");
        div.innerHTML = `
        <div class="div-card">
        <div class="div-p">
        <p> id: ${_id} </p>
        <p> nombre: ${nombre}</p>
        <p> Duracion en minutos: ${duracionM} </p>
        <p> Longitud en Kilometros: ${longitudK} </p>
        <p> Record de tiempo en minutos: ${tmrM} </p>
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
    eliminarEtapas();
    actualizarEtapas();
}

function eliminarEtapas(){
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

function actualizarEtapas(){
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
    duracionX.value = '';
    longitudX.value = '';
    tmrX.value = '';

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
        duracionM: duracionX.value,
        longitudK: longitudX.value,
        tmrM: tmrX.value
    }
    const id = e.target.getAttribute('_id');
    modal.close();
    if (id){
    updateCiclista(data, id);

    }

    else {
        newCiclista(data);
    }
});

 const updateCiclista = async (data, id) => {
    try {
        await fetch(`${updNew}${id}`, {
            method: "PATCH",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then(function(){
            return window.location.reload();

        })

    } catch (error) {
      console.error( error);
    }
}