Toastify({
    text: "Uepa!",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { } // Callback after click
}).showToast();


let elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })
})

