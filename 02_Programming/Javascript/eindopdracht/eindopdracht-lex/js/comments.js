`use strict`;

const commentContainer = document.querySelector(`.comments__all`);

// submit button event
document
  .querySelector(`.comments__button--post`)
  .addEventListener("click", function (ev) {
    addComment(ev);
  });

// function to post new message
function addComment(ev) {
  let messageText;
  let wrapDiv;

  // create the dom elements
  const nameBox = document.createElement("div"); //! add name
  const messageBox = document.createElement("div");

  const replyButton = document.createElement("button");
  replyButton.innerText = "reply";
  replyButton.className = "comments__button--reply";

  const likeButton = document.createElement("button");
  likeButton.innerHTML = "like";
  likeButton.className = "comments__button--like";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.className = "comments__button--delete";

  if (hasClass(ev.target.parentElement, "comments")) {
    const wrapDiv = document.createElement("div");
    wrapDiv.className = "comments__message";
    wrapDiv.style.marginLeft = 0;
    messageName = document.querySelector(`.comments__post--name`).value; //! add name
    messageText = document.querySelector(`.comments__post--input`).value;

    // clear the post message box again
    document.querySelector(`.comments__post--name`).value = ""; //! add name
    document.querySelector(`.comments__post--input`).value = ""; //! add name

    // fill name box with name
    nameBox.innerText = messageName;

    // fill message box with submitted message
    messageBox.innerText = messageText;

    // add elements to the dom
    wrapDiv.append(nameBox, messageBox, replyButton, deleteButton); //! add name
    commentContainer.appendChild(wrapDiv);

    // post reply to message
  } else {
    wrapDiv = ev.target.parentElement;
    messageName = ev.target.parentElement.children[0].value;
    messageText = ev.target.parentElement.children[1].value;
    nameBox.innerText = messageName;
    messageBox.innerText = messageText;
    wrapDiv.innerHTML = "";
    wrapDiv.append(nameBox, messageBox, replyButton, deleteButton);
  }
}

function hasClass(elem, className) {
  return elem.className.split(" ").indexOf(className) > -1;
}

//  eventlistener for reply, post reply, like, and delete buttons
document
  .querySelector(".comments__all")
  .addEventListener("click", function (e) {
    if (hasClass(e.target, "comments__button--reply")) {
      const parentDiv = e.target.parentElement;

      // create the dom elements
      const wrapDiv = document.createElement("div");
      wrapDiv.className = "comments__message--reply";

      const replyName = document.createElement("input");
      replyName.type = "text";
      replyName.placeholder = "Name";
      replyName.className = "comments__reply--input";

      const replyMessage = document.createElement("textarea");
      replyMessage.placeholder = "Your reply...";
      replyMessage.className = "comments__reply--input";

      const addButton = document.createElement("button");
      addButton.innerText = "post reply";
      addButton.className = "comments__button--addreply";

      const cancelButton = document.createElement("button");
      cancelButton.innerText = "cancel";
      cancelButton.className = "comments__button--cancelreply";

      // add elements to the dom
      wrapDiv.append(replyName, replyMessage, addButton, cancelButton);
      parentDiv.appendChild(wrapDiv);
    } else if (hasClass(e.target, "comments__button--addreply")) {
      addComment(e);
    } else if (hasClass(e.target, "comments__button--like")) {
      const likeBtnValue = e.target.innerHTML;
      e.target.innerHTML =
        likeBtnValue !== "Like" ? Number.parseInt(likeBtnValue) + 1 : 1;
    } else if (hasClass(e.target, "comments__button--cancelreply")) {
      e.target.parentElement.remove();
    } else if (hasClass(e.target, "comments__button--delete")) {
      e.target.parentElement.remove();
    }
  });
