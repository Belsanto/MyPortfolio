// FirstCardItem.js
import React from 'react';
import './FirstCardItem.css';
import { Footer } from '../Footer/Footer';
import { NameItem } from '../NameItem/NameItem';
import { MyPhoto } from '../MyPhoto/MyPhoto';
import { SocialMediaItem } from '../SocialMediaItem/SocialMediaItem';
import { ButtonItem } from '../ButtonItem/ButtonItem';

function FirstCardItem() {
  return (
    <aside className='card first-card'>
      <MyPhoto/>
      <NameItem/>
      <SocialMediaItem/>
      <ButtonItem/>
      <Footer/>
    </aside>
  );
}

export { FirstCardItem };
