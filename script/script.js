const formMessage = document.querySelector("#form-message")
const nama = document.querySelector("#nama")
const email = document.querySelector("#email")
const pesan = document.querySelector("#pesan")
const btnSumbitMessage = document.querySelector("#submit-message")

formMessage.addEventListener("submit", (e) => {
    // e.preventDefault()
    if (nama.value == "" || email.value == "" || pesan.value == "") {
        alert("Form tidak boleh kosong")
    }

    const message = {
        nama: nama.value,
        email: email.value,
        mesage: pesan.value
    }

    fetch("https://64ef3e1a219b3e2873c42f2b.mockapi.io/mesages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
        .then((res) => res.json())
        .then((data) => {
            alert("Pesan berhasil dikirim")
            nama.value = ""
            email.value = ""
            pesan.value = ""


        }
    )
})

const containerMessage = document.querySelector("#container-message")
let messages = ""

fetch("https://64ef3e1a219b3e2873c42f2b.mockapi.io/mesages")
.then((res) => res.json())
.then((data) => {
    data.forEach((message) => {
        messages += `
                        <div class="card-pendidikan shadow">
                            <div class="title-card bold">${message.nama}</div>
                            <div class="text-card">
                                ${message.mesage}
                            </div>
                            <div class="logo-card">
                                <img src="${message.avatar}" alt="logo" class="avatar" />
                            </div>
                        </div>
        `
    })
    containerMessage.innerHTML = messages
})
