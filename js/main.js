//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value.toLowerCase();
  const url = `https://www.dnd5eapi.co/api/classes/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = data.name;
      //Next
      const itemList1 = document.getElementById("itemList1");
      const itemList2 = document.getElementById("itemList2");
      const itemList3 = document.getElementById("itemList3");
      //clear lis off dom
      // itemList0.innerHTML = "";
      itemList1.innerHTML = "";
      itemList2.innerHTML = "";
      itemList3.innerHTML = "";
      //loop through subclasses
      data.subclasses.forEach((obj) => {
        // create an li
        const li1 = document.createElement("li");
        //add text to li
        li1.textContent = obj.name;
        //append the li to ul
        itemList1.appendChild(li1);
      });
      //loop through the data array
      data.starting_equipment.forEach((get) => {
        //create an li
        const li2 = document.createElement("li");
        //append li
        li2.textContent = get.equipment.name;
        itemList2.appendChild(li2);
      });
      data.proficiencies.forEach((prof) => {
        console.log(data.proficiencies);
        //create an li
        const li3 = document.createElement("li");
        //add text to li
        li3.textContent = prof.name;
        //append li
        itemList3.appendChild(li3);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
