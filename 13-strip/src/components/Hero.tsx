import React from 'react';
import './Hero.scss';
//@ts-ignore
import phoneImg from '../images/phone.svg';
import { useGlobalContext } from '../context';
const Hero = () => {
  const { closeSubMenu } = useGlobalContext();

  return (
    <section className="Hero" onMouseOver={closeSubMenu}>
      <div className="Hero__center">
        <article className="Hero__info">
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="Hero__images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
