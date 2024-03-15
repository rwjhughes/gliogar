import styles from './page.module.css'
import React from 'react';

const Index = () => {
  const numberOfImages = 17; //update on new posters
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
          <div className={styles.title}>Fúinn</div>
          <div className={styles.tooltip} style={{ width: '330px' }}>Is cnuasach ealaíontóirí agus ceoltóirí muid Gliogar a chuireanns ceolchoirmeacha ar siúl,
            go háirid trí mheáin na Gaeilge agus le ceoltóirí comhaimseartha Gaelacha.
            Tá muid lonnaithe i gConamara Theas.<br /><br />
            📧 <a href="mailto:eolas@gliogar.ie" target="_blank">eolas@gliogar.ie</a><br /><br />
            <a href="https://instagram.com/gliogar_" target="_blank">@gliogar_</a></div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Ticéid</div>

          <div className={styles.tooltip}><a href="/ticead" target="_blank"><li>28 Aibreán - Cuar & Muireann Ní Shé</li></a>
            {/* <br/><a href="/ticead" target="_blank"><li>2 Bealtaine - Brighde Chaimbeul & Seamus Hyland</li></a> */}
          </div>
        </div>
      </div>
    </div >
  );
};
export default Index;