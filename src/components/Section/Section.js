import React from 'react';
import cx from 'classnames';
import style from './Section.module.css';

const Section = ({ title, children, extraClass = '' }) => {
  const sectionClasses = cx(style.section, extraClass);

  return (
    <section className={sectionClasses}>
      {title && <h2 className={style.section__title}>{title}</h2>}
      {children}
    </section>
  );
};
export default Section;
