const clickInput = document.querySelector('.click');
clickInput.addEventListener('click', () => {
  console.log('Click event');
});

const focusInput = document.querySelector('.focus');
focusInput.addEventListener('focus', () => {
  console.log('Focus event');
});

const valueInput = document.querySelector('.value');
valueInput.addEventListener('input', event => {
  console.log('Input event:', event.target.value);
});