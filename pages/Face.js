import Head from 'next/head'
import styles from '../styles/Home.module.css'
import * as canvas from 'canvas';
import * as faceapi from 'face-api.js';
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Face() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PNCK DEV APP # Face</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
     
 
    
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by PNCK DEV APP{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}


