let swiggy_login_page = (): void => {
  let number = (document.getElementById("number") as HTMLInputElement).value;
  let name = (document.getElementById("name") as HTMLInputElement).value;
  let mail = (document.getElementById("email") as HTMLInputElement).value;
  let password = (document.getElementById("password") as HTMLInputElement)
    .value;

  if (
    number.length == 10 &&
    name.length ==15 &&
    mail.includes("@") &&
    password.length == 15 &&
    mail.length <= 30
  ) {
    document.getElementById("result")!.innerHTML =
      `User Phone number:${number} .User Name:${name}. User Email:${mail}. User password:${password}`;
    alert("Successfully Logined into Swiggy");
    console.log(
      `User Phone number:${number} .User Name:${name}. User Email:${mail}. User password:${password}`,
    );
  } else {
    alert("Please enter valid Details!");
    document.getElementById("result")!.innerHTML =
      `Phone number:${number} Must be 10 digits. Name:${name} must be letters. Email:${mail} must be less than or equal to 10 charcaters. password:${password} must be characters`;
    console.log("validation failed");
  }
};
