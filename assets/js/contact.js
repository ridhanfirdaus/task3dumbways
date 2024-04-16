function submitHandler(e) {
    console.log("JALAN");
    e.preventDefault()
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("number").value;
    let subject = document.getElementById("label-position").value;
    let message = document.getElementById("message").value;
    
    if (!name){
        return alert("plss type ur name")
    }  if (email == ""){
        return alert("plss type ur Email")
    }  if (phone == ""){
        return alert("plss type ur phone number")
    }  if (subject == ""){
        return alert("plss type ur subject")
    }  if (message == ""){
        return alert("plss type ur Message")
    }

    const data = {
       name, email, phone, subject, message
    }
    
    const yourEmail = "ridhanfirdaus470@gmail.com"
    
    // ini adalah kode untuk membuat element 
    let a = document.createElement("a");
    // menambahkan tujuan atau href ke dalam element a yg sudah dibuat
    a.href = `https://mail.google.com/mail?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${message} `
    a.target = '_blank'
    a.click();
    
    

    // window.open(`https://mail.google.com/mail?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${message}`)

    console.log(data);
}

const formContact = document.getElementById("formContact")
formContact.addEventListener("submit", submitHandler)