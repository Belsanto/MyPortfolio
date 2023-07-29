import './SocialMediaItem.css';
import React from 'react';
import { ImGoogle2, ImGithub } from 'react-icons/im';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsLinkedin } from 'react-icons/bs';

class MediaItem extends React.Component {
  render() {
    return (
      <aside className='socialMedia-box'>
        <span>
          <a href={'https://b.elsanto182@gmail.com'} > <ImGoogle2 fill='white' className="Icon-svg"/></a>
        </span>
        <span>
          <a href={'https://www.google.com'} > <RiWhatsappFill fill='white' className="Icon-svg"/></a>
        </span>
        <span>
          <a href={'https://github.com/BelsantoUQ'} > <ImGithub fill='white' className="Icon-svg"/></a>
        </span>
        <span>
          <a href={'https://www.linkedin.com/in/belsanto/'} > <BsLinkedin fill='white' className="Icon-svg"/></a>
        </span>
      </aside>
    );
  }
}

function SocialMediaItem() {
  return (
      <MediaItem />
  );
}

export { SocialMediaItem };