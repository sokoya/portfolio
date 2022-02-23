import React from 'react';
import { Helmet } from 'react-helmet';

import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {

  
  
  return (
    <>
      <Helmet>
          <title>Sokoya Philip - Software Engineer</title>
          <link rel="canonical" href="https://www.sokoyaphilip.com" />
          <meta name="description" content="Hi, I am Sokoya Philip, a self-taught Nigerian full stack developer. Lets talk about your project." />
      </Helmet>
      <div className='app__header app__flex'>
          <motion.div
            whileInView={{ x: [-100, 0 ], opacity: [0, 1]}}
            transition={{ duration: 0.5}}
            className='app__header-info'
          >
            <div className='app__header-badge'>
                <div className='badge-cmp app__flex'>
                  <span>👋</span>
                  <div style={{ marginLeft: 20}}>
                      <p className='p-text'>Hello, I am</p>
                      <h1 className='head-text'>Sokoya</h1>
                  </div>
                </div>

                <div className='tag-cmp app__flex'>
                  <p className='p-text'>Software Engineer</p>
                  <p className='p-text'>Freelancer</p>
                </div>
            </div>
          </motion.div>


          <motion.div
            whileInView={{ opacity: [0, 1]}}
            transition={{ duration: 0.5, delayChildren: 0.5}}
            className='app__header-img'
          >
            <img src={images.profile} alt='Profile' />
            <motion.img
              whileInView={{ scale: [0,1]}}
              transition={{ duration: 1, ease: 'easeInOut'}}
              src={images.circle}
              alt='Profile Circle'
              className="overlay_circle"
            />
          </motion.div>
          <motion.div
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className='app__header-circles'
          >
            {[ [images.codeigniter, 'PHP'], [images.redux, 'Redux Integration' ], [images.sass, 'SASS']].map(([img, title ], index) => (
              <div className='circle-cmp app__flex' key={`circle-${index}`}>
                <img src={img} alt="skills circle" title={title} />
              </div>
            ))}
          </motion.div>
      </div>
    </>
  );

}

export default AppWrap(Header, 'home');