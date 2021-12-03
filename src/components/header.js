const Header = (title, date, temp) => {
  const mainHeader = document.createElement("div");
  const dateSpan = document.createElement("span");
  const titleElem = document.createElement("h1");
  const tempSpan = document.createElement("span");

  mainHeader.classList.add("header");
  dateSpan.classList.add("date");
  dateSpan.textContent = date;
  titleElem.textContent = title;
  tempSpan.classList.add("temp");
  tempSpan.textContent = temp;

  mainHeader.appendChild(dateSpan);
  mainHeader.appendChild(titleElem);
  mainHeader.appendChild(tempSpan);

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  return mainHeader;
};

const headerAppender = (selector) => {
  const headerElem = document.createElement("header");
  headerElem.appendChild(
    Header("Sprint challenge", "December 3, 2021", "76 degrees")
  );
  document.querySelector(selector).appendChild(headerElem);
  //headMaker.appendChild(Header);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
};

export { Header, headerAppender };
