function myScope() {
  const form = document.querySelector('.form');
  const result = document.querySelector('.result');

  const people = [];

  function handleEvent(event) {
    event.preventDefault();

    const firstName = form.querySelector('.first-name');
    const lastName = form.querySelector('.last-name');
    const weight = form.querySelector('.weight');
    const height = form.querySelector('.height');

    people.push({
      firstName: firstName.value,
      lastName: lastName.value,
      weight: weight.value,
      height: height.value,
    });

    console.log(people);

    result.innerHTML += `<p>${firstName.value} ${lastName.value} ${weight.value} ${height.value}</p>`;
  }

  form.addEventListener('submit', handleEvent);
}

myScope();
