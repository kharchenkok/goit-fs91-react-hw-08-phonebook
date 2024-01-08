import React from 'react';
import { Link } from 'react-router-dom';
import style from '../ContactForm/ContactForm.module.css';

const LoginForm = ({ login }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    login({ email: email.value, password: password.value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
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

        <button type="submit">Login</button>
      </form>
      <div className={style.formLinkText}>
        <p>If not registered yet, click</p>{' '}
        <Link to="/register">Registration</Link>
      </div>
    </div>
  );
};

export default LoginForm;
