
    const form = document.getElementById('signupForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();

      let isValid = true;

      // Name validation
      if (!form.name.value.trim()) {
        form.name.classList.add('is-invalid');
        isValid = false;
      } else {
        form.name.classList.remove('is-invalid');
        form.name.classList.add('is-valid');
      }

      // Email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(form.email.value)) {
        form.email.classList.add('is-invalid');
        isValid = false;
      } else {
        form.email.classList.remove('is-invalid');
        form.email.classList.add('is-valid');
      }

      // Password validation
      if (password.value.length < 6) {
        password.classList.add('is-invalid');
        isValid = false;
      } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
      }

      // Confirm Password validation
      if (password.value !== confirmPassword.value || confirmPassword.value === "") {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
      } else {
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.classList.add('is-valid');
      }

      if (isValid) {
        alert('Signup Successful!');
        form.reset();
        document.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
      }
    });