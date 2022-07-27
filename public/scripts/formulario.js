const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const descripcion = document.querySelector('#descripcion');
const button = document.querySelector('#subir');

const sendData = async (e)=>{
    
    e.preventDefault();

    const data={
        nombre:nombre.value,
        email:email.value,
        telefono:telefono.value,
        descripcion:descripcion.value,
    }

    const resp = await fetch('http://localhost:4000/api/nuevo', {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(e => {
        throw new Error(e)
    });

    if(!resp.ok){
        console.log(resp);

        if (resp.msg) {
            return Swal.fire({
                icon: 'error',
                title: resp.msg
              })
        }

        const errores = resp.errors.map((e)=>{
            return '<p>'+e.msg+'</p>';
        })

        let stringErrores = ''
        for (let index = 0; index < errores.length; index++) {
            stringErrores = stringErrores+ errores[index];
        }

        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            footer: stringErrores
          })
    }

    Swal.fire({
        icon: 'success',
        title: 'Registrado con exito',
        footer: '<a href="./tablas.html">Ir a tablas</a>'
      })
}

button.addEventListener('click', sendData)