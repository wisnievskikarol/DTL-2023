import React from "react";
import Card from "@/components/grid-list/card";

const GridList = () => {
  return (
    <div
      id="Uslugi"
      className="py-9 px-4 md:py-12 md:px-6 lg:py-16 lg:px-20 2xl:container 2xl:mx-auto"
    >
      <h1 className="pb-4 text-3xl font-bold leading-9 text-gray-100 sm:pb-16 lg:text-4xl">
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
       <Card
         title="Interdyscyplinarność"
         description="Zarządzanie projektami to proces planowania, organizowania, koordynowania i kontrolowania działań potrzebnych do osiągnięcia celów projektu. Usługa ta obejmuje m.in. tworzenie harmonogramów, alokację zasobów, zarządzanie ryzykiem oraz komunikację z zespołem i interesariuszami projektu. Zarządzanie projektami pomaga zapewnić terminowe i efektywne wdrożenie projektu, minimalizując ryzyko opóźnień, przekroczeń budżetu i innych problemów."
         image="11_t.png"
       />
       <Card
         title="Wprowadzanie innowacji"
         description="Usługa polega na wsparciu firm w procesie wdrażania nowych pomysłów, technologii i procesów w celu poprawy efektywności działania oraz zwiększenia konkurencyjności na rynku. Usługa ta może obejmować analizę potrzeb i możliwości firmy, wybór odpowiednich rozwiązań, zaprojektowanie strategii wdrażania, szkolenia pracowników oraz monitorowanie wyników i dostosowywanie działań. Wprowadzanie innowacji może dotyczyć różnych obszarów działalności, takich jak produkcja, sprzedaż, marketing, czy zarządzanie."
         image="./9_t.png"
       />
       <Card
         title="Planowanie strategiczne"
         description=" Widzimy, że wiele firm, organizacji, a przedewszystkim nie planuje, nie myśli strategicznie -- Zastosowanie nowoczesnych technologii informatycznych i narzędzi do automatyzacji i optymalizacji kluczowych procesów biznesowych w firmie. Dzięki temu możliwe jest zwiększenie efektywności, redukcja kosztów oraz usprawnienie pracy zespołów. Automatyzacja i optymalizacja procesów pozwala na szybszą i bardziej precyzyjną realizację zadań, a także zapewnia lepszą kontrolę nad procesami biznesowymi. Usługa ta jest szczególnie ważna dla firm, które chcą pozostać konkurencyjne i rozwijać swoją działalność w dynamicznym środowisku biznesowym."
         image="/5_t.png"
       />

      </div>
    </div>
  );
};

export default GridList;
