import React from 'react';
import { BsTwitter , BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://www.github.com/sokoya' target='_blank' rel='noreferrer'><AiFillGithub /></a>
        </div>
        <div>
            <a href='https://www.twitter.com/sokoya_philip' target='_blank' rel='noreferrer'><BsTwitter /></a>
        </div>
        <div>
          <a href='https://www.facebook.com/sokoyaphilip' target='_blank' rel='noreferrer'><FaFacebookF /></a>
        </div>
        <div>
          <a href='https://www.instagram.com/sokoyaphilip' target='_blank' rel='noreferrer'><BsInstagram /></a>
        </div>
    </div>
  )
}

export default SocialMedia