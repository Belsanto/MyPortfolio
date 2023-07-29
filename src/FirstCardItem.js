// FirstCardItem.js
import React from 'react';
import './FirstCardItem.css';
import { Footer } from './Footer';
import { NameItem } from './NameItem';
import { ButtonCV } from './ButtonCV';
import { MyPhoto } from './MyPhoto';

function FirstCardItem() {
  return (
    <aside className='card first-card'>
      <MyPhoto/>
      <NameItem/>
      <ButtonCV/>
      <Footer/>
    </aside>
  );
}

export { FirstCardItem };
