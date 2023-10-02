const boton = document.getElementById("boton");
const lista = document.getElementById("lista");
const URL = "https://picsum.photos/200/300";

boton.addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.getElementById("input").value;
    fetch(URL)
        .then(response => {
            if (response.ok) {
                return response.url;
            } else {
                throw new Error('No se pudo cargar la imagen.');
            }
        })
        .then(img => {
            lista.innerHTML += `
                <div id="${input}" class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-3">
                            <img src="${img}" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${input}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('No se pudo cargar la imagen.');
        });
});
