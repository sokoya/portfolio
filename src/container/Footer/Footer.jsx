import React , { useState } from 'react';


import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import {client } from '../../client';

import './Footer.scss';
const Footer = () => {

  const [ formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [ isFormSubmitted, setIsFormSubmitted] = useState( false );
  const [ loading, setLoading] = useState(false);


  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name , value } = e.target;
    setFormData({ ...formData, [name]:value });
  }

  const handleSubmit = () => {
      setLoading( true );

      if( name.length || name.email || name.message ){
          const contact = {
            _type: 'contact',  name, email, message
          }

          client.create(contact)
            .then(() => {
              setLoading( false );
              setIsFormSubmitted( true )
            })
            .catch((err) => {
              console.error('Can not create: ', err.message)
            })
      }else{
        return;
      }
  }
  return (
    <>
      <h2 className='head-text' style={{ fontSize: '26px'}}>Lets discuss about your next project.</h2>
      <p className='p-text'>I'm always open to discussing product design work or partnership opportunities.</p>
      <div className='app__footer-cards'>
          <div className="app__footer-card">
              <img src={images.email} alt='Email' />
              <a href='mailto:hello@sokoyaphilip.com' className='p-text'>hello@sokoyaphilip.com</a>
          </div>

          <div className="app__footer-card">
              <img src={images.mobile} alt='Mobile' />
              <a href='tel:+2348169254598' className='p-text'>+2348169254598</a>
          </div>
      </div>

      <div className='app__footer-form app__flex'>
          { !isFormSubmitted ? <>
                <div className='app__flex'>
                    <input className='p-text' type='text' placeholder="Your name" name='name' value={name} onChange={handleChangeInput} />
                </div>

                <div className='app__flex'>
                    <input className='p-text' type='email' placeholder="Your email" name='email' value={email} onChange={handleChangeInput} />
                </div>

                <div>
                    <textarea 
                      className='p-text'
                      placeholder='Your message'
                      value={message}
                      name='message'
                      onChange={handleChangeInput}
                    />
                </div>

                <button type='button' className='p-text' onClick={handleSubmit}>
                  {loading ? 'Sending Message ' : 'Send Message'}
                </button>
          </> : 
          <div className='head-text'>Thank you for getting in touch.</div>
          }
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)