import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">

    <a href="https://www.linkedin.com/in/manuelnelson7/" target='_blank'>
      <div>
        <BsLinkedin />
      </div>
    </a>

    <a href="https://github.com/ManuelNelson7" target='_blank'>
      <div>
        <BsGithub />
      </div>
    </a>

  </div>
);

export default SocialMedia;
