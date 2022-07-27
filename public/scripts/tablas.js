const tabla = document.querySelector('#tabla_interna');

console.log(tabla);

const receiveData = async ()=>{
    
    const resp = await fetch('http://localhost:4000/api/contactos', {
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(e => {
        throw new Error(e)
    });

    if(resp.contacts.length == 0){
        console.log(resp);
        return Swal.fire({
            icon: 'info',
            title: 'aun no se registra nadie :('
          })
    }

    for (let i = 0; i < resp.contacts.length; i++) {
        crearRow(resp.contacts[i])
    }

}

const crearRow = (data) => {

    const {
        nombre,
        email,
        telefono,
        descripcion
    } = data

    const row = document.createElement('tr');


    row.innerHTML = `<td class="producto">
                        <b>${nombre}</b>
                    </td>
                    <td class="imagen">
                        <span class="tb-contacto-datos"> <b>Correo:</b> ${email} </span> <br>
                        <span class="tb-contacto-datos"> <b>Telefono:</b> <br>${telefono} </span>
                    </td>
                    <td class="precio" colspan="2">
                        ${descripcion}
                    </td>`
    
    tabla.appendChild(row);
}

document.addEventListener('DOMContentLoaded',receiveData)