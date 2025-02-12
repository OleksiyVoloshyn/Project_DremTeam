import axios from 'axios';

const form = document.getElementById('form-together');
const modal = document.getElementById('successModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalMessage = document.getElementById('modalMessage');
const closeModal = document.getElementById('closeModal');
const body = document.body;
const emailInput = document.getElementById("together-input--email");
const commentsInput = document.getElementById("together-input--comments");

const successMessage = document.createElement("p");
successMessage.textContent = "Success!";
successMessage.style.color = "green";
successMessage.style.fontSize = "14px";
successMessage.style.marginTop = "5px";
successMessage.style.display = "none";

const errorMessage = document.createElement("p");
errorMessage.textContent = "Invalid email, try again";
errorMessage.style.color = "red";
errorMessage.style.fontSize = "14px";
errorMessage.style.marginTop = "5px";
errorMessage.style.display = "none";

emailInput.parentNode.insertBefore(successMessage, emailInput.nextSibling);
emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling);

function showTruncated(input) {
  const fullText = input.dataset.full || input.value;
  if (fullText.length > 30) {
    input.value = fullText.substring(0, 30) + "...";
  }
}

function showFullText(input) {
  input.value = input.dataset.full || input.value;
}

function handleInput(event) {
  const input = event.target;
  input.dataset.full = input.value;
}

function setupInputField(input) {
  input.addEventListener("input", handleInput);
  input.addEventListener("focus", () => showFullText(input));
  input.addEventListener("blur", () => showTruncated(input));
}

setupInputField(emailInput);
setupInputField(commentsInput);

function changeInputBorder(color) {
  emailInput.style.borderBottom = `2px solid ${color}`;
  setTimeout(() => {
    emailInput.style.borderBottom = ""; 
  }, 3000); 
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    closeModalWindow();
  }
}

// Модальне вікно
function openModal() {
  modal.classList.add('active'); 
  modalOverlay.classList.add('active');
  body.classList.add('no-scroll');
  document.addEventListener('keydown', handleKeyDown);
}

function closeModalWindow() {
  modal.classList.remove('active'); 
  modalOverlay.classList.remove('active');
  body.classList.remove('no-scroll');
  document.removeEventListener('keydown', handleKeyDown);
}

function showMessage(messageElement) {
  messageElement.style.display = "block";
  setTimeout(() => {
    messageElement.style.display = "none";
  }, 3000); 
}

form.addEventListener('submit', async (e) => {
  e.preventDefault(); 

  const data = {
    email: emailInput.dataset.full || emailInput.value.trim(),
    comment: commentsInput.dataset.full || commentsInput.value.trim(),
  };

  if (!data.email || !data.comment) {
    modalMessage.textContent = 'Please fill out all required fields.';
    openModal();
    return; 
  }

  try {
    const response = await axios.post('https://portfolio-js.b.goit.study/api/requests', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = response.data;
    modalMessage.innerHTML = `
      <span class="thank-you-text">${responseData.title}</span><br>
      <span class="thank-you-text--two">${responseData.message}</span>
    `;
    openModal();
    form.reset();

    changeInputBorder("green");

    successMessage.style.display = "block";
    errorMessage.style.display = "none";

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  } catch (error) {
    let errorMessageText = 'An error occurred while sending data. Try again.';
    if (error.response) {
      if (error.response.status === 400) {
        errorMessageText = 'Bad request: Invalid request body.';
      } else if (error.response.status === 404) {
        errorMessageText = 'Not found: The requested resource could not be found.';
      } else if (error.response.status === 500) {
        errorMessageText = 'Server error: Please try again later.';
      }
    } else if (error.request) {
      errorMessageText = 'A network error occurred. Please check your connection and try again.';
    } else {
      errorMessageText = `Error: ${error.message}`;
    }

    modalMessage.textContent = errorMessageText;
    openModal();

    changeInputBorder("red");

    errorMessage.style.display = "block";
    successMessage.style.display = "none";

    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000);
  }
});

closeModal.addEventListener('click', closeModalWindow);
modalOverlay.addEventListener('click', closeModalWindow);
