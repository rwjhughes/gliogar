import styles from '../styles/Home.module.css'
import React from 'react';

// ffmpeg -i 17.jpg -vf scale=400:500 17_0.jpg

const Index = () => {
  const numberOfImages = 18; //update on new posters
  const tiles = [];

  for (let i = numberOfImages - 1; i >= 0; i--) {
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

        <div className={styles.content}>
          <div className={styles.title}>Ticéid
            {/* <br />
            <a href="https://www.tickettailor.com/events/gliogar/1193850" target="_blank"><li><date>28 Aibreán</date><br />Cuar & Muireann Ní Shé</li></a>
            <br />
            <a href="https://www.tickettailor.com/events/gliogar/1209899" target="_blank"><li><date>2 Bealtaine</date> Brìghde Chaimbeul & Seamus Hyland</li></a> */}
          </div>

          <div className={styles.tooltip}>diabhal ticéad anseo anois</div>
        </div>

        <div className={styles.content}>
          <div className={styles.title}>Fúinn</div>
          <div className={styles.tooltip} style={{ width: '330px' }}>Is cnuasach ealaíontóirí agus ceoltóirí muid Gliogar a chuireanns ceolchoirmeacha ar siúl,
            go háirid trí mheáin na Gaeilge agus le ceoltóirí comhaimseartha Gaelacha.
            Tá muid lonnaithe i gConamara Theas.<br /><br />
            📧 <a href="mailto:eolas@gliogar.ie" target="_blank">eolas@gliogar.ie</a><br /><br />
            <a href="https://instagram.com/gliogar_" target="_blank">@gliogar_</a></div>
        </div>
      </div>
    </div >
  );
};
export default Index;