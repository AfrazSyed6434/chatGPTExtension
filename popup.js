// popup.js
const input = document.getElementById("input");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  console.log(input.value);
  const body = {
    model: "text-davinci-edit-001",
    input: input.value,
    instruction: "Rewrite the given text. Also add details about the content.",
  };
  fetch("https://api.openai.com/v1/edits", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var newText = document.createElement("p");
      var newContent = document.createTextNode(data["choices"][0]["text"]);
      newText.appendChild(newContent);
      document.body.appendChild(newText);
    })
    .catch((error) => console.log(error));
});
