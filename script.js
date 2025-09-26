function encrypt() {
  const inputText = document.getElementById("inputText").value.trim();
  if (inputText) {
    const encryptedText = btoa(inputText);
    document.getElementById("outputText").value = encryptedText;
  } else {
    alert("Please enter some text to encrypt.");
  }
}

function decrypt() {
  const inputText = document.getElementById("inputText").value.trim();
  if (inputText) {
    try {
      const decryptedText = atob(inputText);
      document.getElementById("outputText").value = decryptedText;
    } catch (error) {
      document.getElementById("outputText").value = "⚠ Invalid Base64 string!";
    }
  } else {
    alert("Please enter some text to decrypt.");
  }
}

function resetFields() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
  document.getElementById("charCount").textContent = "0";
  document.getElementById("inputText").focus();
}

function copyOutput() {
  const outputText = document.getElementById("outputText").value;
  if (outputText) {
    navigator.clipboard.writeText(outputText)
      .then(() => alert("Output copied to clipboard"))
      .catch(err => alert("Failed to copy: " + err));
  } else {
    alert("No output to copy!");
  }
}

function countCharacters() {
  const inputText = document.getElementById("inputText").value;
  document.getElementById("charCount").textContent = inputText.length;
}
