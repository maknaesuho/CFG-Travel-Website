document.getElementById("BookButton").addEventListener("click", function() {
    document.getElementById("message").style.display = "block";
    document.getElementById("contactForm").style.display = "block";
    document.getElementById("BookButton").style.display = "none";
});

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    const myName = document.getElementById("name").value;
    const myEmail = document.getElementById("email").value;
    alert("Thank you, " + myName + "! We will contact you at " + myEmail + " as soon as possible.");
});
