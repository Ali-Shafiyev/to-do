const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const lists = document.querySelector('ul');

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  if (input.value) {
    createListItem();
    input.value = '';
  } else {
    return null;
  }
  deleteListItem();
}

function createListItem() {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const icon = document.createElement('i');

  icon.classList.add('fas', 'fa-trash-alt');
  a.textContent = input.value;

  // Check if input value is a valid size (e.g., "32px")
  if (/^\d+px$/.test(input.value)) {
    a.style.fontSize = input.value;
  }

  // Check if input value is a valid color (e.g., "red")
  if (/^[a-zA-Z]+$/.test(input.value)) {
    a.style.color = input.value;
  }

  li.appendChild(a);
  li.appendChild(icon);
  lists.appendChild(li);
}

function deleteListItem() {
  const listItemIcon = document.querySelectorAll('i');
  listItemIcon.forEach((icon) => {
    icon.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    });
  });
}
