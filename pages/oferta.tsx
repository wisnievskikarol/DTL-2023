import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import Card from "@/components/CardRev";
import styles from './Home.module.css'; // Assuming this is the correct path


export default function Home() {
  return (
    <>

    <div className={styles['cards-container']}> 
    <Card
      name="Prowadzenie prac B+R" 
      imageUrl="/10_t.png" 
      href="/strona_do_zrobienia"
      description="Czy chcesz wprowadzić przełomowe rozwiązania do swojej firmy? Nasze usługi badawczo-rozwojowe są stworzone dla Ciebie! Z naszą pomocą zwiększysz konkurencyjność swojej firmy, zdobędziesz przewagę rynkową i przyciągniesz nowych klientów."
    />
     <Card
      name="Tworzenie technologii" 
      imageUrl="/8_t.png" 
      href="/strona_do_zrobienia"
      description="Innowacyjność jest naszą pasją. Wprowadzamy na rynek nowe technologie, które przekształcają biznesy i życie ludzi. Wykorzystując najnowsze osiągnięcia naukowe, tworzymy rozwiązania, które pozwalają osiągnąć więcej."
    />
     <Card
      name="Wdrażanie rozwiązań opartych o SI" 
      imageUrl="/21_t.png" 
      href="/strona_do_zrobienia"
      description="Nie ma nic bardziej ważnego w Twoim biznesie niż AI"
    />
     <Card
      name="Lanchpad" 
      imageUrl="/18_t.png" 
      href="/lanchpad" 
      description="Nasz lanchpad to przestrzeń dla twórców, badaczy i innowatorów. Tutaj Twoje projekty R&D nabiorą skrzydeł, a Twoje innowacyjne rozwiązania osiągną nowy poziom. Znajdziesz u nas wsparcie ekspertów, dostęp do zasobów i narzędzi, a także inspirujące środowisko współpracy."
    />
    <Card
      name="Certyfikowane kursy" 
      imageUrl="/16_t.png" 
      href="/strona_do_zrobienia"
      description="Nie trać czasu na samodzielne zgłębianie tajników nowych technologii. Skorzystaj z naszych certyfikowanych szkoleń, które zapewnią Ci praktyczną wiedzę i umiejętności potrzebne do efektywnego korzystania z najnowszych narzędzi i technologii. Zostań ekspertem w swojej branży!"
    />
    <Card
      name="Szkolenia z technologii" 
      imageUrl="/3_t.png" 
      href="/strona_do_zrobienia" 
      description="Nasze szkolenia wprowadzające są stworzone specjalnie dla osób, które chcą zdobyć solidne podstawy i pewność w obszarze wybranych nowych technologii. Niezależnie od Twojego doświadczenia, nasze kursy pomogą Ci opanować kluczowe narzędzia i umiejętności."
    />
    <Card
      name="Asystenci i automatyzacja" 
      imageUrl="/23_t.png" 
      href="/strona_do_zrobienia" 
      description="Popraw efektywność swojej firmy dzięki usługom opierających się o AI! Nasi asystenci wyposażeni są w zaawansowane funkcje automatyzacji, przyspieszą procesy, zarządzą zadaniami oraz usprawnią komunikację. Skoncentruj się na rozwijaniu swojego biznesu, a nie na rutynowych czynnościach."
    />
    <Card
      name="Doradztwo strategiczne" 
      imageUrl="/5_t.png" 
      href="/strona_do_zrobienia" 
      description="Doradztwo strategiczne to kluczowy krok w budowaniu stabilnej i zyskownej organizacji. Nasza firma oferuje usługi doradcze, które pomogą Ci w opracowaniu strategii dostosowanej do Twoich unikalnych potrzeb i celów biznesowych. "
    />



      {/* rest of your code */}
    </div>


      <Footer />
    </>
  );
}
