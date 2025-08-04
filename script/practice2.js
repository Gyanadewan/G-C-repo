document.getElementById('login-btn').addEventListener('click',function(event){
   event.preventDefault();

const phoneNumberTest = document.getElementById('number-test').value ;
const passwordTest= document.getElementById('password-test').value ;
const convertedNumber = parseInt(phoneNumberTest)
const covertPassword = parseInt (passwordTest)


if (phoneNumberTest.length === 11){
 if (covertPassword === 12345){
 window.location.href = 'main.html'
 }
 else {
        alert('your password wrong')
 }
  

}
else{
    alert ("tomar a count number thik nai")
}
})

  
    function flyHeart(e) {
      const heart = document.createElement("div");
      heart.classList.add("flying-heart");
      heart.textContent = "❤️";
      document.body.appendChild(heart);

      const rect = e.target.getBoundingClientRect();
      heart.style.left = rect.left + rect.width / 2 + "px";
      heart.style.top = rect.top + "px";

      setTimeout(() => {
        heart.remove();
      }, 1200);
    }
