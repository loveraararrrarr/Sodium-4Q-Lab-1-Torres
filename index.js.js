function validateForm () {
    let name = document.forms["info"]["name"].value;

    document.forms["info"]["name"].value = name.trim();

    if (name.trim() === "") {
        alert("enter your name please");
        return false;
    }

    return true;
}