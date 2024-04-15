/** @format */

document.addEventListener('DOMContentLoaded', function () {
  const toggleAlertBtn = document.getElementById('toggleAlertBtn');
  const alertContainer = document.getElementById('alertContainer');

  toggleAlertBtn.addEventListener('click', function () {
    if (alertContainer.style.display === 'none') {
      alertContainer.style.display = 'block';
    } else {
      alertContainer.style.display = 'none';
    }
  });

  let openModalBtn = document.getElementById('openModalBtn');
  let modal = document.getElementById('exampleModal');

  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
    modal.classList.add('show');
    modal.setAttribute('aria-modal', true);
    modal.setAttribute('aria-hidden', false);
    document.body.classList.add('modal-open');
  });

  modal.querySelector('.close').addEventListener('click', function () {
    modal.style.display = 'none';
    modal.classList.remove('show');
    modal.setAttribute('aria-modal', false);
    modal.setAttribute('aria-hidden', true);
    document.body.classList.remove('modal-open');
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      modal.classList.remove('show');
      modal.setAttribute('aria-modal', false);
      modal.setAttribute('aria-hidden', true);
      document.body.classList.remove('modal-open');
    }
  });

  const form = document.getElementById('birthdayForm');
  const birthdayInput = document.getElementById('birthdayInput');
  const convertedBirthdayContainer =
    document.getElementById('convertedBirthday');
  const convertedBirthdayText = document.getElementById(
    'convertedBirthdayText'
  );

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateBirthdayFormat(birthdayInput.value)) {
      const formattedBirthday = moment(
        birthdayInput.value,
        'DD-MM-YYYY'
      ).format('MMMM Do YYYY');
      convertedBirthdayText.textContent = formattedBirthday;
      convertedBirthdayContainer.style.display = 'block';
      birthdayInput.classList.remove('is-invalid');
    } else {
      birthdayInput.classList.add('is-invalid');
    }
  });

  function validateBirthdayFormat(birthday) {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    return regex.test(birthday);
  }
});

const birthday = moment('1988-12-02');
const formattedBirthday = birthday.format('MMMM Do YYYY');
document.getElementById('myBirthday').textContent =
  'My birthday is: ' + formattedBirthday;

document.ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
