import styles from '../styles/Home.module.css'
import React from 'react';
import Head from 'next/head';

// ffmpeg -i 17.jpg -vf scale=400:500 17_0.jpg

const Index = () => {

  const numberOfImages = 20; // Update on new posters
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

        {/* TICEID */}
        <div className={` ${styles.content} ${styles.ticeid}`}>
          <div className={styles.title}>Ticéid
            <br />
            <a href="https://buytickets.at/gliogar/1377503" target="_blank"><h2><date>20/09</date> - Fáistineach</h2></a>
          </div>
          {/* <div className={styles.tooltip}>diabhal ticéad anseo anois</div> */}
        </div>

        {/* FUINN */}
        <div className={` ${styles.content} ${styles.fuinn}`}>
          <div className={styles.title}>Fúinn</div>
          <div className={styles.tooltip} style={{ width: '330px' }}>Is cnuasach ealaíontóirí muid Gliogar a chuireanns imeachtaí cultúrtha ar siúl,
            go háirid trí mheáin na Gaeilge agus le healaíontóirí comhaimseartha Gaelacha.
            Tá muid lonnaithe i gConamara Theas.<br /><br />
            📧 <a href="mailto:eolas@gliogar.ie" target="_blank">eolas@gliogar.ie</a><br /><br />
            <a href="https://instagram.com/gliogar_" target="_blank">@gliogar_</a></div>
        </div>

        {/* PREAS */}
        <div className={` ${styles.content} ${styles.preas}`}>
          <div className={styles.title}>Preas
            <br />
            <a href="https://tuairisc.ie/is-brea-an-rud-e-daoine-oga-a-fheiceail-i-mbun-na-dramaiochta-aris-in-iar-chonnachta/" target="_blank">
              <li>Tuairisc</li></a>
            <a href="https://www.rte.ie/radio/rnag/clips/22415499/" target="_blank">
              <li>Raidió na Gaeltachta</li></a>
            <a href="https://nialler9.com/new-gaelic-music-themed-night-for-connemara-to-feature-brighde-chaimbeul-and-more/" target="_blank">
              <li>Nialler9</li></a>
            <a href="https://journalofmusic.com/news/irish-language-contemporary-music-collective-gliogar-host-concert-conamara" target="_blank">
              <li>Journal of Music</li></a>
          </div>
        </div>

        {/* TACAIOCHT */}
        <div className={` ${styles.content} ${styles.tacaiocht}`}>
          <div className={styles.title}>Tacaíocht</div>
          <br />
          <div className={styles.logos}>
            <img src="/logos/optio.png"></img>
            <img src="/logos/optds.jpg"></img>
            <img src="/logos/optcf.png"></img>
            <img src="/logos/optc.png"></img>
            <img src="/logos/ciotog.png"></img>
            <img src="/logos/fibin.png"></img>
            <img src="/logos/taibhdhearc.png"></img>
            <img src="/logos/gcc.png"></img>
            <img src="/logos/roinn.png"></img>
            <img src="/logos/ealain.jpg"></img>
            <img src="/logos/arts_council.png"></img>
            <img src="/logos/udaras.jpg"></img>
          </div>
        </div>
      </div>
    </div >
  );
};
export default Index;