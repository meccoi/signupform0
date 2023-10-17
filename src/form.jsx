import React, { useEffect } from 'react';

function Form() {
  const input = {
    className: "p-2 rounded-md pl-4",
    style: {
      border: "1px solid var(--clr-st-grayishBlue)",
      fontSize: "1rem",
    },
  };

  useEffect(() => {
    const btn = document.getElementById('submit');
    if (btn) {
      btn.onclick = function () {
        const inputs = document.querySelectorAll('.form-content input[placeholder]');
        const errorMessages = document.querySelectorAll('.error');

        inputs.forEach((input, index) => {
          if (input.value.trim() === '') {
            input.style.outline = '1px solid red';
            errorMessages[index].classList.remove('hidden');
          } else {
            input.style.outline = '1px solid white';
            errorMessages[index].classList.add('hidden');
          }
        });

        // Email validation
        const emailInput = document.querySelector('.form-content input[type="email"]');
        if (emailInput) {
          const email = emailInput.value.trim();
          const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

          if (!emailRegex.test(email)) {
            emailInput.style.outline = '1px solid red';
            errorMessages[2].classList.remove('hidden');
          } else {
            emailInput.style.outline = '1px solid white';
            errorMessages[2].classList.add('hidden');
          }
        }
      };
    }

    // Add event listeners to input fields to handle "Enter" key press
    const inputFields = document.querySelectorAll('.form-content input');
    inputFields.forEach((inputField) => {
      inputField.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
          btn.click(); // Programmatically trigger button click
        }
      });
    });
  }, []);

  return (
    <div className="form-content flex flex-col gap-4 bg-white p-8 rounded-md">
      <input {...input} type="text" placeholder="First Name" />
      <span className='error hidden text-red-500'>You must enter your name</span>
      <input {...input} type="text" placeholder="Last Name" />
      <span className='error hidden text-red-500'>You must enter your last name</span>
      <input {...input} type="email" placeholder="Email Address" />
      <span className='error hidden text-red-500'>Invalid email address</span>
      <input {...input} type="password" placeholder="Password" />
      <span className='error hidden text-red-500'>You must enter your password</span>
      <input
        style={{ fontSize: "0.8rem" }}
        className="p-2 rounded-md pl-4 text-white cursor-pointer font-bold py-3"
        type="button"
        value="CLAIM YOUR FREE TRIAL"
        id="submit"
      />
      <p className="text-xs self-center" style={{ fontSize: ".6rem" }}>
        By clicking the button, you are agreeing to our terms{" "}
        <span className="text-red-500 font-bold">Terms and Services</span>
      </p>
    </div>
  );
}

export default Form;
