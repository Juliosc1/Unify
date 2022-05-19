import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BackToTop from '../components/BackToTopButton'
import OmOssText from '../components/OmOssText'
import OmOssImages from '../components/OmOssImages'
import Image from 'next/dist/client/image';

import React from 'react'

export default function OmOss() {
  
  return (
    <div className={styles.container}>
      <Head><title>Unify - Om oss</title></Head>
      <main className={styles.main}>
      <BackToTop />
      <OmOssText/>
      <div className={styles.arrow}>
        <Image src="/curlyArrow.png" alt='curlyArrow' width={115} height={119}/>
        <p className={styles.unifyP}>Vi på Unify</p>
      </div>
      <OmOssImages/>
      </main>
    </div> 
     
      )
    }