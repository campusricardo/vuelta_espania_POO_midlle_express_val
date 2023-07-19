const url = "http://127.0.0.1:7000/api/ciclista/";
const deleteCiclista = "http://localhost:7000/api/ciclista/del/";
const newUrl = "http://localhost:7000/api/ciclista/add";
const updNew = "http://localhost:7000/api/ciclista/upd/";
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

    const {nombre,edad,peso,equipo,_id} = results;
    console.log(equipo);
    nombreX.value = nombre;
    edadX.value = edad;
    equipoX.value = equipo;
    pesoX.value = peso;
enviar.setAttribute('_id', _id);

    modal.showModal();

}


function showCiclistas(results) {

    results.forEach(result => {
        const div = document.createElement("div");
        const {edad,equipo,nombre,peso,_id} = result;
        div.classList.add("card");
        div.innerHTML = `
        <div class="div-card">
        <div class="div-p">
        <p> id: ${_id} </p>
        <p> nombre: ${nombre}</p>
        <p> edad: ${edad} </p>
        <p> equipo: ${equipo} </p>
        <p> peso: ${peso} </p>
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

    eliminarCiclista();
    actualizarCiclista();
}

function eliminarCiclista(){
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

function actualizarCiclista(){
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
        window.location.href = "./ciclistas.html";
        alert("borrado friend");
    }
    catch(error){
        console.log(error);
    }
}   

crearCiclista.addEventListener('click', (e)=>{
    nombreX.value = '';
    edadX.value = '';
    equipoX.value = '';
    pesoX.value = '';

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
        edad: edadX.value,
        peso: pesoX.value,
        equipo: equipoX.value
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