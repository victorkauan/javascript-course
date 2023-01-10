function myScope() {
  const paragraphDiv = document.querySelector('.paragraphs');
  const paragraphs = paragraphDiv.querySelectorAll('p');

  const bodyStyles = getComputedStyle(document.body);
  const bodyBackgroundColor = bodyStyles.backgroundColor;

  for (const paragraph of paragraphs) {
    paragraph.style.backgroundColor = bodyBackgroundColor;
    paragraph.style.color = '#fff';
  }
}

myScope();
