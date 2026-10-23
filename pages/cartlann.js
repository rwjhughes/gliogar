import styles from '../styles/Cartlann.module.css'
import React, { useState } from 'react';
import Head from 'next/head';

// ffmpeg -i 33.0.jpg -vf scale=800:1000 33.jpg

const Cartlann = () => {

  const numberOfImages = 34; // Update on new posters
  const tiles = [];

  for (let i = numberOfImages - 1; i >= 0; i--) {
    if (i === numberOfImages - 1) {
      tiles.push(
        <div key={i} className={`${styles.tile} ${styles.largeTile}`}>
          <a href={`/`}>
            <img src={`/posters/${i}.jpg`} alt={`Image ${i}`} />
          </a>
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
    <div >
      <Head>
        <title>Cartlann Ghliogar</title>
      </Head>
      <div className={styles.imagecontainer}>
        {tiles}
      </div>

      <div className={styles.textcontainer}>
        {/* FUINN */}
        <div className={` ${styles.content} ${styles.fuinn}`}>
          <div className={styles.title}>Fúinn</div>
          <div className={styles.tooltip} style={{ width: '330px' }}>Is cnuasach ealaíontóirí muid Gliogar a chuireanns imeachtaí cultúrtha ar siúl,
            go háirid trí mheán na Gaeilge agus le healaíontóirí comhaimseartha Gaelacha.
            Tá muid lonnaithe i gConamara Theas.<br /><br />
            📧 <a href="mailto:eolas@gliogar.ie" target="_blank">eolas@gliogar.ie</a><br /><br />
            <a href="https://instagram.com/gliogar_" target="_blank">@gliogar_</a></div>
        </div>

        {/* PREAS */}
        <div className={` ${styles.content} ${styles.preas}`}>
          <div className={styles.title}>Preas
            <br />
            <a href="https://daily.bandcamp.com/scene-report/ta-gliogar-ag-tabhairt-ardan-do-weirdo-ceol-ar-fud-na-heireann" target="_blank">
              <li>Bandcamp</li></a>
            <a href="https://journalofmusic.com/reviews/make-conamara-weird-again-0" target="_blank">
              <li>Journal of Music</li></a>
            <a href="https://tuairisc.ie/is-brea-an-rud-e-daoine-oga-a-fheiceail-i-mbun-na-dramaiochta-aris-in-iar-chonnachta/" target="_blank">
              <li>Tuairisc</li></a>
            <a href="https://www.rte.ie/radio/rnag/clips/22415499/" target="_blank">
              <li>Raidió na Gaeltachta</li></a>
            <a href="https://nialler9.com/new-gaelic-music-themed-night-for-connemara-to-feature-brighde-chaimbeul-and-more/" target="_blank">
              <li>Nialler9</li></a>
          </div>
        </div>

        {/* TACAIOCHT */}
        <div className={` ${styles.content} ${styles.tacaiocht}`}>
          <div className={styles.title}>Tacaíocht</div>
          <br />
          <div className={styles.logos}>
            <img title="OPT Inis Oírr" src="/logos/optio.png"></img>
            <img title="OPT Dhúiche Sheoigheach" src="/logos/optds.jpg"></img>
            <img title="OPT Chois Fharraige" src="/logos/optcf.png"></img>
            <img title="OPT Chléire" src="/logos/optc.png"></img>
            <img title="Integration Office - CoCo na Gaillimhe" src="/logos/gcc_integration.png"></img>
            <img title="Scéim Céad Míle Fáilte - Conradh na Gaeilge" src="/logos/cmf.png"></img>
            <img title="Cuisle" src="/logos/cuisle.png"></img>
            <img title="Ciotóg" src="/logos/ciotog.png"></img>
            <img title="Fíbín" src="/logos/fibin.png"></img>
            <img title="an Taibhdhearc" src="/logos/taibhdhearc.png"></img>
            <img title="Galway Culture Company" src="/logos/galway_culture_company.png"></img>
            <img title="Roinn na Gaeltachta" src="/logos/roinn.png"></img>
            <img title="Ealaín na Gaeltachta" src="/logos/ealain.jpg"></img>
            <img title="an Chomhairle Ealaíon" src="/logos/arts_council.png"></img>
            <img title="Udáras na Gaeltachta" src="/logos/udaras.jpg"></img>
            <img title="Comhairle Chondae na Gaillimhe" src="/logos/gcc.png"></img>
          </div>
        </div>
      </div >
    </div >
  );
};
export default Cartlann;