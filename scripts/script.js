function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();

    document.getElementById("time").textContent = `${dateString} - ${timeString}`;
}


setInterval(updateTime, 1000);
updateTime();
document.getElementById("contactForm").onsubmit = function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorElement = document.getElementById("error");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    let errorMessage = "";

    if (name === "" || email === "" || message === "") {
        errorMessage = "L�tfen t�m alanlar� doldurun.";
    } else if (!emailPattern.test(email)) {
        errorMessage = "Ge�erli bir e-posta adresi girin.";
    }

    if (errorMessage) {
        errorElement.textContent = errorMessage;
        errorElement.style.color = "red";
    } else {
        errorElement.textContent = "Mesaj ba�ar�yla g�nderildi!";
        errorElement.style.color = "green";

        document.getElementById("contactForm").reset();
    }
};

