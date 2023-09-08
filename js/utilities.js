// global variable
let buttonId = [];

const displayCategories = (categoriesArr) => {
  const tabContainerDiv = document.getElementById("tab-container-div");
  categoriesArr.forEach((e) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <a id="${e.category_id}" onclick="btnActivator('${e.category_id}'); loadCards('${e.category_id}');" 
       class="btn tab">${e.category}</a>
      `;
    tabContainerDiv.appendChild(div);
    buttonId.push(e.category_id);
  });
  // set by default All tab active
  document.getElementById("1001").classList.add("active");
};

const displayCards = (cards) => {
  const cardContainerDiv = document.getElementById("card-container-div");
  cardContainerDiv.innerHTML = "";
  cards.forEach((card) => {
    const div = document.createElement("div");
    div.classList.add("bg-white", "h-24", "w-auto", "mt-4", "rounded-lg");
    div.innerHTML = `
          <div class="flex justify-around items-center">
            <div class="flex justify-start items-center gap-x-4">
              <div class="h-24 w-24 p-2">
                <img
                  class="w-full h-full rounded-md"
                  src="${card.thumbnail}"
                  alt=""
                />
              </div>
              <div>
                <h6 class="text-lg font-extrabold">${card.title}</h6>
                <h3 class="text-md text-blue-400">${card.price}</h3>
                <p class="text-sm">${card.size}</p>
              </div>
            </div>
            <div class="border-l-2 border-gray-300 p-4">
              <div class="flex items-center space-x-4">
                <button
                  onclick="increment(this)"
                  class="bg-blue-400 hover:bg-blue-600 text-white h-8 w-8 rounded-full text-3xl font-extrabold flex items-center justify-center"
                >
                  +
                </button>
                <input
                  type="text"
                  id="numberField"
                  value="01"
                  class="w-16 font-extrabold h-8 text-center border border-gray-300 rounded"
                />
                <button
                  onclick="decrement(this)"
                  class="bg-orange-400 hover:bg-blue-600 text-white h-8 w-8 rounded-full text-3xl font-extrabold flex items-center justify-center"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        `;
    cardContainerDiv.appendChild(div);
  });
};

// btn activator
function btnActivator(id) {
  buttonId.forEach((e) => {
    if (document.getElementById(e).classList.contains("active")) {
      document.getElementById(e).classList.remove("active");
    }
  });
  const currentId = document.getElementById(id);
  currentId.classList.add("active");
}

// quantity increase and decrease
const increment = (e) => {
  const currentValue = parseInt(parseInt(e.parentNode.childNodes[3].value));
  e.parentNode.childNodes[3].value = currentValue + 1;
};

const decrement = (e) => {
  const currentValue = parseInt(parseInt(e.parentNode.childNodes[3].value));
  console.log(currentValue);
  if (currentValue > 1) {
    e.parentNode.childNodes[3].value = currentValue - 1;
  }
};

// display Oops section where no cards available
const displayOops = () => {
  const OopsSectionDiv = document.getElementById("Oops-section-div");
  OopsSectionDiv.innerHTML = "";

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card w-full bg-base-100">
        <figure class="pt-4">
        <img src="/images/Icon.png" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">
            Oops!! Sorry, There is no <br />items here
        </h2>
        </div>
    </div>
  `;
  OopsSectionDiv.appendChild(div);
};
