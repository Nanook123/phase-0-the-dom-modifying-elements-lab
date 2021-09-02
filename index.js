main.remove();

 const newHeader = document.createElement('h1')
 newHeader.id = 'victory'
 newHeader.innerHTML = "JOSH is the champion"

 const element = document.createElement("div");

document.body.append(element);

const ul = document.createElement("ul");

 for (let i = 0; i < 3; i++) {
const li = document.createElement("li");
 li.textContent = (i + 1).toString();
 ul.append(li);
 }

 element.append(ul)

// const main = document.getElementById("main");

// main.innerHTML = "<h1>DOM DOM DOM</h1><p>so tired bru</p> <p><em>but I gotta power through lol</em></p>"

// main.style.height = "400px";
// main.style.backgroundColor = "#27647b";
// //main.textContent = "WHYYYYYYYYYYYYYYYYYYYYYYY"

// //<main id="main" class="I GOT THIS"></main>

// // const ul = document.getElementsByTagName("ul")[0]
// // const secondChild = ul.querySelector("li:nth=child(2)");
// // ul.removeChild(secondChild)

// main.remove();