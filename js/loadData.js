const loadCategory = () => {
  const categories = categoryObj.data;
  displayCategories(categories);
};

const loadCards = (category_id) => {
  var cards = [];
  if (category_id === "1001") {
    cards = cardsObjOne.data;
  } else if (category_id === "1003") {
    cards = cardsObjThree.data;
  } else if (category_id === "1005") {
    cards = cardsObjFive.data;
  }
  const cardContainerDiv = document.getElementById("card-container-div");
  cardContainerDiv.innerHTML = "";

  if (cards.length === 0) {
    displayOops();
  }
  // calling display cards function
  displayCards(cards);
};
