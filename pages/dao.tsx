import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import TokenSale from "@/components/TokenSale";
import styles from './Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
        <title>DAO</title>
        <link rel="icon" href="/faviconSmallSize.png" type="image/x-icon" />
        <meta charset="UTF-8" />
        <meta name="description" content="Deeptechlabs, technology driving your future" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Deeptechlabs" />
        <meta name="keywords" content="future, crypto, blockchain, technology, innovation, AI, artificial intelligence" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Title for Sharing" />
        <meta property="og:description" content="Deeptechlabs, technology driving your future" />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://www.deeptechlabs.pl" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deeptechlabs" />
        <meta name="twitter:description" content="Technology driving your future" />
        <meta name="twitter:image" content="/logo.svg" />
      </Head>
      <div className={styles['cards-container-dao']}> 
       

        {/* <TokenSale /> */}
        <span className={styles.glowText}>
            Silne, etyczne, ciągle uczące, się nastawione na rozwój społeczeństwo
        </span>

        <h1 className={styles.header}>Biblioteka</h1>  

        <a href="https://www.youtube.com/watch?v=3eBN_9rMoVI" className={styles.glowText_x} target="_blank" rel="noopener noreferrer">
        The world’s biggest problem? Powerful psychopaths. | Brian Klaas
        </a>
      
        <a href="https://www.youtube.com/watch?v=zhQkrnqJBLY" className={styles.glowText_x} target="_blank" rel="noopener noreferrer">
        How Blockchain is Unleashing a Governance Revolution with Cedric Warny
        </a>

        <a href="https://www.youtube.com/watch?v=Fz68ILyuWtA" className={styles.glowText_x} target="_blank" rel="noopener noreferrer">
        Planned Obsolescence Will Kill Us All
        </a>

        <a href="https://www.youtube.com/watch?v=wOcfQvbc1ao" className={styles.glowText_x} target="_blank" rel="noopener noreferrer">
        Bristol Pay – a possible future for local currencies
        </a>
        
        <a href="https://www.youtube.com/watch?v=XnakQR-ADV0" className={styles.glowText_x} target="_blank" rel="noopener noreferrer">
        How to Get Ahead of 99% of People | Exponential Organizations 2.0
        </a>

        <a href="https://www.youtube.com/watch?v=SpaufNLj_aM" className={styles.glowText_x} target="_blank" rel="noopener noreferrer">
        Tomasz Wróblewski: Dlaczego Europa jest mniej innowacyjna od USA?Jak Polska może wykorzystać szansę?
        </a>

      </div>

      <Footer />
    </>
  );
}