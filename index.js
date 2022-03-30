let genPass = document.getElementById("genPass-el")

let Password1 = document.getElementById("password1-el")
let Password2 = document.getElementById("password2-el")
let Password3 = document.getElementById("password3-el")
let Password4 = document.getElementById("password4-el")

document.getElementById("password1-el").onclick = function() {
  this.select();
  document.execCommand('copy');
  alert('Password copied');
}

document.getElementById("password2-el").onclick = function() {
  this.select();
  document.execCommand('copy');
  alert('Password copied');
}
document.getElementById("password3-el").onclick = function() {
  this.select();
  document.execCommand('copy');
  alert('Password copied');
}
document.getElementById("password4-el").onclick = function() {
  this.select();
  document.execCommand('copy');
  alert('Password copied');
}

  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;

function getPassword(length) {
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
 
function password(){
  result = "";
  Password1.value = getPassword(10,15)
  result = "";
  Password2.value = getPassword(10,15)
  result = "";
  Password3.value = getPassword(10,15)
  result = "";
  Password4.value = getPassword(10,15)
}