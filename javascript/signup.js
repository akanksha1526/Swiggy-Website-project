"use strict";
let swiggy_login_page = () => {
    let number = document.getElementById("number").value;
    let name = document.getElementById("name").value;
    let mail = document.getElementById("email").value;
    let password = document.getElementById("password")
        .value;
    if (typeof (number) === "number" &&
        typeof (name) === "string" &&
        mail.length <= 20 &&
        password.length == 15) {
        document.getElementById("result").innerHTML = "Logined successfully";
        document.getElementById("result").innerHTML =
            `User Phone number:${number} .User Name:${name}. User Email:${mail}. User password:${password}`;
        alert("Successfully Logined into Swiggy");
        console.log(`User Phone number:${number} .User Name:${name}. User Email:${mail}. User password:${password}`);
    }
    else {
        alert("Please enter valid Details!");
        document.getElementById("result").innerHTML =
            `Phone number:${number} Must be 10 digits. Name:${name} must be letters. Email:${mail} must be less than or equal to 10 charcaters. password:${password} must be characters`;
        console.log(`Phone number:${number} Must be 10 digits. Name:${name} must be letters. Email:${mail} must be less than or equal to 10 charcaters. password:${password} must be characters`);
    }
};
