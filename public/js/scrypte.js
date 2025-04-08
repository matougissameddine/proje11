document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quoteForm");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
  
        alert(`Merci ${name}, votre demande a été envoyée !\nNous vous contacterons bientôt à ${email}.`);
        form.reset();
      });
    }
  });