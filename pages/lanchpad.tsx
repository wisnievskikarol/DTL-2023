import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import Card from "@/components/CardRev";
import styles from './Home.module.css'; // Assuming this is the correct path
import Dropdown from '@/components/Dropdown';

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Dropdown />
      <div className={styles['cards-container']}>
        <Card
          name="Globalny system lokalnych walut" 
          imageUrl="/FUNDchain.png" 
          href="/projects/currency"
          description=""
        />
        <Card
          name="Globalny system lokalnych walut" 
          imageUrl="/ragi.png" 
          href="/projects/currency"
          description=""
        />
        <Card
          name="Globalny system lokalnych walut" 
          imageUrl="/napotege.png" 
          href="/projects/currency"
          description=""
        />
        <Card
          name="Globalny system lokalnych walut" 
          imageUrl="/10_t.png" 
          href="/projects/currency"
          description=""
        />
      </div>
    </div>
    <Footer />
    </>
  );
}
