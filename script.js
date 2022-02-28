function amazon() {
    document.querySelector(".dropdown-toggle").innerHTML = "AMAZON";
    document.querySelector("#searchbar").name = "k";
    document.querySelector("#userForm").action = "https://www.amazon.com.tr/s";
}

function hepsiburada() {
    document.querySelector(".dropdown-toggle").innerHTML = "HEPSİBURADA";
    document.querySelector("#searchbar").name = "q";
    document.querySelector("#userForm").action = "https://www.hepsiburada.com/ara";
}

function gittigidiyor() {
    document.querySelector(".dropdown-toggle").innerHTML = "GİTTİGİDİYOR";
    document.querySelector("#searchbar").name = "k";
    document.querySelector("#userForm").action = "https://www.gittigidiyor.com/arama";
}

function n11() {
    document.querySelector(".dropdown-toggle").innerHTML = "N11";
    document.querySelector("#searchbar").name = "q";
    document.querySelector("#userForm").action = "https://www.n11.com/arama";
}

function trendyol() {
    document.querySelector(".dropdown-toggle").innerHTML = "TRENDYOL";
    document.querySelector("#searchbar").name = "q";
    document.querySelector("#userForm").action = "https://www.trendyol.com/sr";
}

function button() {
    document.querySelector("#userForm").submit();
}