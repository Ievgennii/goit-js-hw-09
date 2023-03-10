import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay + position * step)
      .then(({ position, delay }) => {
        console.log(
          `✅ Fulfilled promise ${position} in ${delay + position * step}ms`
        );
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay + position * step}ms`
        );
      })
      .catch(({ position, delay }) => {
        console.log(
          `❌ Rejected promise ${position} in ${delay + position * step}ms`
        );
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay + position * step}ms`
        );
      });
  }
  form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
