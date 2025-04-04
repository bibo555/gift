document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelectorAll(".photo");
    const positions = [
        { top: "130vh", left: "40%" },
        { top: "163vh", left: "22%" },
        { top: "196vh", left: "19%" },
        { top: "217vh", left: "55%" },
        { top: "315vh", left: "16%" },
        { top: "435vh", left: "20%" },
        { top: "455vh", left: "56%" },
        { top: "515vh", left: "20%" },
        { top: "660vh", left: "58%" },
        { top: "735vh", left: "53%" },
        { top: "758vh", left: "16%" },
    ];

    photos.forEach((photo, index) => {
        if (positions[index]) {
            photo.style.top = positions[index].top;
            photo.style.left = positions[index].left;
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.createElement("div");
    starContainer.classList.add("stars-container");
    document.body.appendChild(starContainer);

    const numStars = 100; // Количество звезд

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        
        // Случайное расположение только по бокам
        let side = Math.random() > 0.5 ? "left" : "right"; 
        let xPos = side === "left" ? Math.random() * 50 + "%" : 60 + Math.random() * 50 + "%";
        let yPos = Math.random() * 100 + "vh";

        star.style.left = xPos;
        star.style.top = yPos;

        starContainer.appendChild(star);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    // Собираем все фото и видео
    let mediaElements = Array.from(document.querySelectorAll(".photo, video"))
        .filter(el => el.tagName !== "VIDEO" || el.src); // Фильтруем видео без src

    console.log("Количество медиа элементов:", mediaElements.length);

    document.getElementById("randomBtn").addEventListener("click", () => {
        if (mediaElements.length === 0) {
            console.log("❌ Нет доступных медиа!");
            return;
        }

        const randomIndex = Math.floor(Math.random() * mediaElements.length);
const originalMedia = mediaElements[randomIndex];

let randomMedia;

if (originalMedia.tagName === "IMG") {
    randomMedia = document.createElement("img");
    randomMedia.src = originalMedia.src; // Устанавливаем src вручную
    randomMedia.alt = originalMedia.alt || "Random Image";
} else if (originalMedia.tagName === "VIDEO") {
    randomMedia = document.createElement("video");
    randomMedia.src = originalMedia.src;
    randomMedia.controls = true;
}


        // Создаем overlay для показа изображения/видео
        const overlay = document.createElement("div");
        overlay.style.position = "absolute";
        
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100vw";
        overlay.style.height = "100vh";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "1000";

        randomMedia.style.maxWidth = "80vw";
        randomMedia.style.maxHeight = "80vh";

        // Кнопка закрытия
        const closeButton = document.createElement("button");
        closeButton.textContent = "Закрыть";
        closeButton.style.position = "absolute";
        closeButton.style.top = "10px";
        closeButton.style.right = "10px";
        closeButton.style.padding = "10px 20px";
        closeButton.style.fontSize = "16px";
        closeButton.style.backgroundColor = "red";
        closeButton.style.color = "white";
        closeButton.style.border = "none";
        closeButton.style.cursor = "pointer";

        closeButton.addEventListener("click", () => {
            document.body.removeChild(overlay);
        });

        overlay.appendChild(randomMedia);
        overlay.appendChild(closeButton);
        document.body.appendChild(overlay);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("login-overlay").style.display = "none";
    }
});

function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const correctUsername = "Polinka";
    const correctPasswordHash = "1d28ef396bfadc033f2f663b24086ff2fb4b8056398ed4cb6909fae26b75b19a";
    const correctUsername2= "Nastya";
    const correctPasswordHash2 = "1d28ef396bfadc033f2f663b24086ff2fb4b8056398ed4cb6909fae26b75b19a";

    const inputPasswordHash = CryptoJS.SHA256(password).toString();

    if ((username === correctUsername && inputPasswordHash === correctPasswordHash) ||(username === correctUsername2 && inputPasswordHash=== correctPasswordHash2) ) {
        localStorage.setItem("loggedIn", "true");
        document.getElementById("login-overlay").style.display = "none";
    } else {
        errorMessage.textContent = "Неверный логин или пароль!";
    }
}




