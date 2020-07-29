
async function someText() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const fullData = await response.json();

    for (i = 0; i < 10; i++) {
      const data = fullData[i]

      const paragraph = document.createElement("div");
      const title = document.createElement("div");
      const desc = document.createElement("div")
      const separator = document.createElement("div")

      title.innerHTML = data.title
      desc.innerHTML = data.body
      separator.innerHTML = "---"


      document.body.appendChild(paragraph);
      paragraph.appendChild(title)
      paragraph.appendChild(desc)
      paragraph.appendChild(separator)

    }
  }
  catch (error) {
    console.log(error)
  }
};

someText() 