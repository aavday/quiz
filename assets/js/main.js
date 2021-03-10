const correctAnswers = ['b', 'b', 'b', 'b'];
const form = document.querySelector('.question-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  const result = document.querySelector('.result');
  result.style.display = 'block';

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10)
});
