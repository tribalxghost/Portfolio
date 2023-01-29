
// template_blrn4zc
// service_r2andnd
// bsPht9jMSOoAs78ZA
function initial () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('RuTZ-jDhi95CRMDGI');
};

initial()


let form = document.getElementById('contact__form')
form.addEventListener('submit',contact)

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'contact_service',
            'contact_form',
            event.target,
            'RuTZ-jDhi95CRMDGI',
        ).then((data) => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
            alert("It Worked")
        }).catch((event) => {
            loading.classList.remove("modal__overlay--visible")
            console.error(event);
            alert("The email service is temporarily unavailable. Please contact me directly on andrewcdawson@yahoo.com")
        })
        alert("?")
}

let isModalOpen = false
let contrastToggle = false
let scaleFactor = 1/20


function moveBackground(event) {
    
    const shapes =document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor
    for(let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1: 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }


}



function toggleContrast() {
    event.preventDefault()
    contrastToggle = !contrastToggle
    if(contrastToggle) {
        document.body.classList += "dark-theme"
    } else {
        document.body.classList.remove("dark-theme")
    }
}


function toggleModal() {
    if(isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = !isModalOpen
    document.body.classList += " modal--open"

}




