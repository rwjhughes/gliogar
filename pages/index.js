import styles from '../styles/Home.module.css'
import React from 'react';
import Head from 'next/head';

// ffmpeg -i 17.jpg -vf scale=400:500 17_0.jpg

const Index = () => {

  const numberOfImages = 19; // Update on new posters
  const tiles = [];

  for (let i = numberOfImages - 1; i >= 0; i--) {
    if (i === numberOfImages - 1) {
      tiles.push(
        <div key={i} className={`${styles.tile} ${styles.largeTile}`}>
          <img src={`/posters/${i}.jpg`} alt={`Image ${i}`} />
        </div>
      );
    } else {
      tiles.push(
        <div key={i} className={styles.tile}>
          <img src={`/posters/${i}.jpg`} alt={`Image ${i}`} />
        </div>
      );
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Gliogar</title>
      </Head>
      <div className={styles.imagecontainer}>
        {tiles}
      </div>
      <div className={styles.textcontainer}>

        <div className={` ${styles.content} ${styles.ticeid}`}>
          <div className={styles.title}>Ticéid
            <br />
            {/* <h2>Ar An Dé Deiridh</h2>
            camchuairt mí Iúil
            <a href="https://buytickets.at/gliogar/1293982" target="_blank"><li><date>16ú</date> - Inis Oírr - €5</li></a>
            <a href="https://buytickets.at/gliogar/1293993" target="_blank"><li><date>18ú</date> - Indreabhán - €5</li></a>
            <a href="https://buytickets.at/gliogar/1294006" target="_blank"><li><date>24ú</date> - Corr na Móna - saor in aisce</li></a> */}
          </div>

          <div className={styles.tooltip}>diabhal ticéad anseo anois</div>
        </div>

        <div className={` ${styles.content} ${styles.fuinn}`}>
          <div className={styles.title}>Fúinn</div>
          <div className={styles.tooltip} style={{ width: '330px' }}>Is cnuasach ealaíontóirí muid Gliogar a chuireanns imeachtaí cultúrtha ar siúl,
            go háirid trí mheáin na Gaeilge agus le healaíontóirí comhaimseartha Gaelacha.
            Tá muid lonnaithe i gConamara Theas.<br /><br />
            📧 <a href="mailto:eolas@gliogar.ie" target="_blank">eolas@gliogar.ie</a><br /><br />
            <a href="https://instagram.com/gliogar_" target="_blank">@gliogar_</a></div>
        </div>
      </div>
    </div >
  );
};
export default Index;