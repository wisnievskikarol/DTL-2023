import React from "react";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
const Recrutiment = () => {
  return (
    <div>
      <motion.h1
        className="mt-16 mb-8 text-center text-white md:mb-16 md:text-2xl "
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <p>
          Dołącz do naszego zespołu i miej wpływ na przyszłość! Szukamy
          ambitnych i zdeterminowanych osób, które chcą się rozwijać i tworzyć
          nowe rozwiązania. Wypełnij naszą ankietę, aby poznać nas lepiej i
          pokazać nam, co potrafisz. Razem możemy osiągnąć wiele i stworzyć coś,
          co będzie mieć pozytywny wpływ na ludzi i świat wokół nas. Nie czekaj,
          dołącz do nas już dziś i zacznij tworzyć historię!
        </p>
        <Balancer>
          Wypełnij ankietę!
          <Link
            href={`https://docs.google.com/forms/d/e/1FAIpQLSc13xXDc_4P-HB9YKJlNf1FJTy5ILxON9EwPJJrzeswtYSMxA/viewform?usp=sf_link`}
            target="_blank"
          >
            <button
              type="button"
              className="dark:hover:bg-greenDeeptechHover bg-greenDeeptech hover:bg-greenHvr dark:bg-greenHvr mt-8 mr-2 mb-2 rounded-full px-8 py-3 text-center text-sm font-medium text-black focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Do dzieła
            </button>
          </Link>
        </Balancer>
      </motion.h1>
    </div>
  );
};

export default Recrutiment;
