import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import TokenSale from "@/components/TokenSale";
import styles from './Home.module.css'; // Assuming this is the correct path


export default function Home() {
  return (
    <>

    <div className={styles['cards-container']}> 
      <TokenSale />
    </div>


      <Footer />
    </>
  );
}
