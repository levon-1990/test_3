const sendButton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");
const chatMessanges = document.getElementById("chat-messages");
const errorMessage = document.getElementById("error-message");
const date = document.getElementById("date")
let person = document.getElementById("person")


const sendMessage =  () => {
  const message = messageInput.value.trim();
 if (!message) {
  errorMessage.innerHTML = " ERROR";
  errorMessage.style.display = "block";
  setTimeout(()=>{
    errorMessage.style.display = "none"
  },3000)
  return;
 }else{
  errorMessage.style.display = "none"
 }
person = prompt("enter your name","Levon CHilingaryan");
 person.innerHTML = "person"
 function getArticleDate() {
  const date = new Date;

  const year = date.getFullYear();
  let month = 1 + date.getMonth();
  let day = date.getDate();

  return `${day}/${month}/${year}`
 }
 date.innerHTML = getArticleDate();
  const messageEl = document.createElement("div");
  messageEl.classList.add("chat-message");
  messageEl.textContent = message + ":" + person;
  chatMessanges.appendChild(messageEl)

 messageInput.value = " " ;

chatMessanges.scrollTop = chatMessanges.scrollHeight;
};

sendButton.addEventListener("click",sendMessage);

messageInput.addEventListener("keydown", (event) => {
 if (event.key === "Enter") {
  sendMessage();
 }
});