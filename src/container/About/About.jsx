import React , { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import './About.scss';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
// import { images } from  '../../constants';

// const abouts = [
//   {title: 'Web Development', description: 'I am a good web developer.', imgUrl: images.about01},
//   {title: 'Web Design', description: 'I am a good web developer.', imgUrl: images.about02},
//   {title: 'UI/UX', description: 'I am a good web developer.', imgUrl: images.about03},
//   {title: 'Web Animation', description: 'I am a good web developer.', imgUrl: images.about04}
// ];




const About = () => {

const [abouts, setAbouts] = useState([]);

useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbouts( data ))
}, []);

  return (
    <>
      <Helmet>
          <title>About Me - Sokoya Philip</title>
          <link rel="canonical" href="https://www.sokoyaphilip.com#about" />
          <meta name="description" content="I build softwares that helps business to grow and stand the test of time." />
      </Helmet>
      <h2 className='head-text'>I know <span>Good Apps</span> means<br /> <span>Good Business</span></h2>

      <div className='app__profiles'>
          {abouts.map(( about, index ) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale : 1.1 }}
              transition={{ duration: 0.5, type: 'tween'}}
              className='app__profile-item'
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{marginTop: 20}}>{ about.title }</h2>
              <p className='p-text' style={{marginTop: 10}}>{ about.description }</p>

            </motion.div>
          ))}
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about' ),
  'about',
  'app__whitebg'
);