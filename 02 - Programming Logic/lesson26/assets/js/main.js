function myScope() {
  const form = document.querySelector('#form');
  const result = document.querySelector('.result');

  function createParagraph() {
    const paragraph = document.createElement('p');
    return paragraph;
  }

  function showResult(message, isValid) {
    result.innerHTML = '';

    const paragraph = createParagraph();
    paragraph.classList.add('result-paragraph');

    if (isValid) {
      paragraph.classList.add('success');
    } else {
      paragraph.classList.add('error');
    }

    paragraph.innerHTML = message;

    result.appendChild(paragraph);
  }

  function calculateBMI(weight, height) {
    const bmi = weight / height ** 2;
    return bmi.toFixed(2);
  }

  function getBMIGrade(bmi) {
    const grades = [
      'Under weight',
      'Normal weight',
      'Overweight',
      'Grade 1 obesity',
      'Grade 2 obesity',
      'Grade 3 obesity',
    ];

    if (bmi < 18.5) {
      return grades[0];
    }

    if (bmi < 25) {
      return grades[1];
    }

    if (bmi < 30) {
      return grades[2];
    }

    if (bmi < 35) {
      return grades[3];
    }

    if (bmi < 40) {
      return grades[4];
    }

    return grades[5];
  }

  function handleEvent(event) {
    event.preventDefault();

    result.classList.add('have-paragraph');

    const inputWeight = event.target.querySelector('#weight');
    const inputHeight = event.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight) {
      showResult('Invalid weight.', false);
      return;
    }

    if (!height) {
      showResult('Invalid height.', false);
      return;
    }

    const bmi = calculateBMI(weight, height);
    let grade = getBMIGrade(bmi);

    const resultMessage = `Your BMI is ${bmi} (${grade}).`;
    showResult(resultMessage, true);
  }

  form.addEventListener('submit', handleEvent);
}

myScope();
