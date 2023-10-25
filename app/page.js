import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';

const Index = () => {
  const numberOfImages = 14; // Assuming you have 14 images
  const tiles = [];

  for (let i = numberOfImages; i >= 0; i--) {
    tiles.push(
      <div key={i} className={styles.tile}>
        <img src={`/posters/${i}.jpg`} alt={`Image ${i}`} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        {tiles}
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.text}>
          <div className={styles.content}>
            Fúinn
            <div className={styles.tooltip}>Is cnuasach ealaíontóirí agus ceoltóirí muid Gliogar a chuireanns ceolchoirmeacha ar siúl,
              go háirid trí mheáin na Gaeilge agus le ceoltóirí comhaimseartha Gaelacha.
              Tá muid lonnaithe i gConamara Theas.<br /><br />
              📧 <a href="mailto:gliogar22@gmail.com" target="_blank">gliogar22@gmail.com</a><br /><br />
              <a href="https://instagram.com/gliogarceol" target="_blank">@glioagrceol</a></div>
          </div>
        </div>
        <div className={styles.text}>
          <div className={styles.content}>
            Ticéad
            <div className={styles.tooltip}>diabhal ticéid don am anois</div>
          </div>
        </div>
      </div>
    </div>

  );
};
export default Index;