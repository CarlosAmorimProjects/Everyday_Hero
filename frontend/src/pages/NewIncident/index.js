import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.png';


function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();


    const data = {
      title,
      description,
      value
    };

    try {

      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push('/profile');

    } catch (error) {
      alert("Error registering the case");
    }

  }

  return (

    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Register new case</h1>
          <p>Describe the case in detail to find a local hero to help you with it.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            back
            </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Case title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <input
            placeholder="Amount you need"
            value={value}
            onChange={e => setValue(e.target.value)}
          />



          <button className="button" type="submit">Register</button>
        </form>

      </div>
    </div>

  );
}

export default NewIncident;