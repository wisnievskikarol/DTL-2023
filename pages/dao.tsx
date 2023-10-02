import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import TokenSale from "@/components/TokenSale";
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
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

      </div>

      <Footer />
    </>
  );
}