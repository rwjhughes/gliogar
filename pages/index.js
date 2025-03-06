import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import Head from 'next/head';

// ffmpeg -i 17.jpg -vf scale=400:500 17_0.jpg

const Index = () => {

  const numberOfImages = 21; // Update on new posters
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

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbypE4ELklJZ0cRdo7BhWLUtFuM11qqdKU1AQ4Rlxjx9ct1ZVCaDWXONKFo2jlLECiNj/exec';

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      Object.keys(formData).forEach((key) => form.append(key, formData[key]));

      await fetch(scriptURL, {
        method: 'POST',
        body: form,
        mode: 'no-cors', // Using no-cors mode
      });

      alert('Form submitted successfully!');
      setFormData({});
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Failed to submit the form.');
    } finally {
    }
  };


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
          <div className={styles.title}>
            <h2><date>19/10</date> - Céilí</h2>
            <h3>Halla Éinne,<br />an Cheathrú Rua</h3>
          </div>
          {/* <div className={styles.tooltip}>diabhal ticéad anseo anois</div> */}
        </div>

        {/* <div className={styles.form}>
          <h1>Submit Your Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Mo Dhuine'
                value={formData.name || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='modhuine@gaelmail.com'
                value={formData.email || ''}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div> */}

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
            <a href="https://daily.bandcamp.com/scene-report/ta-gliogar-ag-tabhairt-ardan-do-weirdo-ceol-ar-fud-na-heireann" target="_blank">
              <li>Bandcamp</li></a>
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