(async() => {

    const { value: accept } = await Swal.fire({
        title: 'Primero acepta nuestro terminos y condiciones por favor',
        input: 'checkbox',
        inputValue: 1,
        inputPlaceholder: 'Estoy de acuerdo con los términos y condiciones',
        confirmButtonText: 'Continuar',
        inputValidator: (result) => {
            return !result && 'Nesesitas aceptar nuestras condiciones'
        }
    })
})()

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
});

function transaccion() {
    Swal.fire({
        title: '¿Qué transacciones harás?',
        text: 'Coloque el numero de cuenta a transferir',
        //html: 
        icon: 'question',

        confirmButtonText: "¡Vamos allá!",
        // footer:
        // width:
        // padding:
        // background:
        // grow:
        // backdrop:
        // timer:
        // timerProgressBar:
        // toast:
        // position:
        // allowOutsideClick:
        // allowEscapeKey:
        // allowEnterKey:
        // stopKeydownPropagation:
        input: 'text',
        inputPlaceholder: 'Número de cuenta',
        text: 'Coloque el monto a trasferir',
        input: 'text',
        inputPlaceholder: 'Introduzca un monto',

        //inputValue: 
        // inputOptions:

        //  customClass:
        // 	container:
        // 	popup:
        // 	header:
        // 	title:
        // 	closeButton:
        // 	icon:
        // 	image:
        // 	content:
        // 	input:
        // 	actions:
        // 	confirmButton:
        // 	cancelButton:
        // 	footer:	

        // showConfirmButton:
        // confirmButtonColor:
        // confirmButtonAriaLabel:

        // showCancelButton:
        // cancelButtonText:
        // cancelButtonColor:
        // cancelButtonAriaLabel:

        // buttonsStyling:
        // showCloseButton:
        // closeButtonAriaLabel:


        // imageUrl:
        // imageWidth:
        // imageHeight:
        // imageAlt:

    });
}

function seguridad() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn-success',
            cancelButton: 'btn-error'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
        }
    })
}

function depositar() {
    var numCuentaDepositar = document.getElementById("").value;
    var saldo = document.getElementById("").value;
    var depositarDinero = document.getElementById("").value;
    if (depositarDinero < saldo) {
        saldo -= depositarDinero;
    } else {
        alert("Saldo insuficiente para realizar deposito");
    }
}

function retirar() {
    var numCuenta = document.getElementById("").value;
    var saldo = document.getElementById("").value;
    var retirar = document.getElementById("").value;
    if (saldo != 0) {
        saldo -= retirar;
    } else {
        alert("Saldo insuficiente para retirar dinero");
    }

}