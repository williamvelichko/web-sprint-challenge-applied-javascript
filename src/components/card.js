import axios from "axios";
const Card = (article) => {
  console.log(article);
  const mainCard = document.createElement("div");
  const headlineElem = document.createElement("div");
  const authorElem = document.createElement("div");
  const imgContainer = document.createElement("div");
  const imgElem = document.createElement("img");
  const name = document.createElement("span");

  mainCard.classList.add("card");
  headlineElem.classList.add("headline");
  headlineElem.textContent = article.headline;
  authorElem.classList.add("author");
  imgContainer.classList.add("img-container");
  imgElem.src = article.authorPhoto;
  name.textContent = `By: ${article.authorName}`;

  mainCard.appendChild(headlineElem);
  authorElem.appendChild(imgContainer);
  authorElem.appendChild(imgElem);
  authorElem.appendChild(name);
  imgContainer.appendChild(imgElem);

  mainCard.addEventListener("click", () => {
    console.log(article.headline);
  });

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
};

const cardAppender = (selector) => {
  axios
    .get("http://localhost:5000/api/articles")
    .then((resp) => {
      const card1 = Card(resp.data.articles.javascript[0]);
      const card2 = Card(resp.data.articles.bootstrap[0]);
      const card3 = Card(resp.data.articles.technology[0]);

      const selectorElem = document.querySelector(selector);
      selectorElem.appendChild(card1);
      selectorElem.appendChild(card2);
      selectorElem.appendChild(card3);
    })
    .catch((error) => {
      console.log(error);
    });

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles";` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };
