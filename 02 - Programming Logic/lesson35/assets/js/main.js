function myScope() {
  function createElement(element) {
    const { tag, text } = element;

    const newElement = document.createElement(tag);

    const newText = document.createTextNode(text); // Text is also a DOM element
    newElement.appendChild(newText);

    // newElement.innerText = text;

    // newElement.innerHTML = text; // No HTML, just text

    return newElement;
  }

  const container = document.querySelector('.container');
  const elements = [
    { tag: 'p', text: 'Paragraph sentence.' },
    { tag: 'div', text: 'Div sentence.' },
    { tag: 'footer', text: 'Footer sentence.' },
    { tag: 'section', text: 'Section sentence.' },
  ];

  const newDiv = document.createElement('div');

  for (let i = 0; i < elements.length; i += 1) {
    const newElement = createElement(elements[i]);
    newDiv.appendChild(newElement);
  }

  container.appendChild(newDiv);
}

myScope();
