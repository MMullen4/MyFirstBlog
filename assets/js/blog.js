// Create a variable that selects the main element, and a variable that selects the back button element
const mainEl = document.querySelector('main');
const backBtnEl = document.querySelector('#back');

// function that builds an element and appends it to the DOM
const buildElement = function (type, text, parent) {
  const tag = document.createElement(type); // creates a new HTML element of the same type
  tag.textContent = text; // sets the text content
  parent.appendChild(tag); // adds the new child element to the end of the parent element
  return tag;
};

// function that handles the case where there are no blog posts to display
const handleEmpty = function () {
  buildElement('h2', 'No Blog posts yet...', mainEl);
  const a = buildElement('a', 'Enter your own submission here!', mainEl);
  a.href = './index.html';
};

// function called `renderBlogList` that renders the list of blog posts if they exist. 
// If not, call the no posts function.
const renderBlogList = function () {
  const blogs = readLocalStorage();

  if (!blogs.length) { // if blog has no length
    handleEmpty();
    return;
  }

  for (const blog of blogs) { // loops thru each blog in the blogs array
    const article = buildElement('article', null, mainEl); // create new article

    buildElement('h2', blog.title, article); // for each new blog, create title,
    buildElement('blockquote', blog.content, article); // content,
    buildElement('p', `Posted by: ${blog.username}`, article); // & who posted

    article.classList.add('card');// add CSS 'card' to article
  }
};
// Call the `renderBlogList` function
renderBlogList();

backBtnEl.addEventListener('click', function() { // adds addEventListener to the back button
  redirectPage('index.html'); // redirects user back to home page
});
