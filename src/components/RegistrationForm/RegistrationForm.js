import React from 'react';
import { Link } from 'react-router-dom';
import style from '../ContactForm/ContactForm.module.css';

const RegistrationForm = ({ register }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    register(newUser);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="text"
          name="name"
          placeholder={'Name'}
          required
          className={style.formInput}
        />

        <input
          type="email"
          name="email"
          placeholder={'Email address'}
          required
          className={style.formInput}
        />

        <input
          type="password"
          name="password"
          placeholder={'Password'}
          required
          className={style.formInput}
        />

        <button type="submit">Registration</button>
      </form>
      <div className={style.formLinkText}>
        <p>Already with us? Click</p> <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default RegistrationForm;
