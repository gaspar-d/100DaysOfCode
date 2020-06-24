function deliverMessage() {
  // Get the value from the input using his id
  var messageInput = document.getElementById("message-input").value;

  // Set the element where the value will appear
  const textInput = document.getElementById("message-delivered");
  // Put the value inside the element and convert to upper case
  textInput.innerHTML = messageInput.toUpperCase();

  // Clear the input camp after click
  document.getElementById("message-input").value = "";
}

