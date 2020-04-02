import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');

  const history = useHistory();


  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city
    };

    try {
      const response = await api.post('ongs', data);
      alert(`Your access ID, save it, it's your unique access identification to log in:${response.data.id}`);
      history.push('/');
    } catch (error) {
      alert('Error registering, try again!');
    }


  };

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Register</h1>
          <p>Register, enter the website, place your ad asking for help, and let people know your organization needs help.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            back
            </Link>
        </section>

        <form onSubmit={handleRegister}>

          <input
            placeholder="Organization name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">

            <input
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            
          </div>

          <button className="button" type="submit">Register</button>
        </form>

      </div>
    </div>
  );
}

export default Register;