import axios from "axios";

const Tabs = (topics) => {
  const topicsBar = document.createElement("div");
  const jsBar = document.createElement("div");
  const bootstrapBar = document.createElement("div");
  const techBar = document.createElement("div");

  topicsBar.classList.add("topics");
  jsBar.classList.add("tab");
  jsBar.textContent = topics.topics[0];
  bootstrapBar.classList.add("tab");
  bootstrapBar.textContent = topics.topics[1];
  techBar.classList.add("tab");
  techBar.textContent = topics.topics[2];

  topicsBar.appendChild(jsBar);
  topicsBar.appendChild(bootstrapBar);
  topicsBar.appendChild(techBar);

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  return topicsBar;
};

const tabsAppender = (selector) => {
  axios
    .get("http://localhost:5000/api/topics")
    .then((resp) => {
      const user = Tabs(resp.data);
      document.querySelector(selector).appendChild(user);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => console.log("wowowow"));

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
};

export { Tabs, tabsAppender };
