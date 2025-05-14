import { useState } from "react";
import AuraBlurR from "./BlurR.jsx";
import AuraBlurL from "./BlurL.jsx";
import cards from "../data/cards.js";
import { motion, AnimatePresence } from "framer-motion";

const Cartas = () => {
  return (
    <section id="cartas" className="spacing-sect text-center">
      <h2 className="sub-h2 text-center">
        Cartas
        <br />
        para ti!
      </h2>

      {/* CARD MSG */}
      <article className="grid gap-12 relative max-w-md mx-auto">
        {cards.map((msg) => (
          <Card cardObj={msg} key={msg.id} />
        ))}

        {/* Aura Blur */}

        <AuraBlurR />
        <AuraBlurL />
        <Line />
      </article>
    </section>
  );
};

const Card = ({ cardObj }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-slate-900 rounded-2xl p-3 shadow-md z-20 bg-[#020b14] cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <PanelProfile cardObj={cardObj} isOpen={isOpen} />

      <NoteCard cardObj={msg.id} isOpen={isOpen} />
    </div>
  );
};

//---------- PANEL PROFULE

const PanelProfile = ({ cardObj, isOpen }) => {
  // const now = new Date();
  // const hours = now.getHours();
  // const minutes = String(now.getMinutes()).padStart(2, "0");

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-slate-900 p-3 rounded-full">
          <img
            src={cardObj.imgProfile}
            alt="Corazon Blanco"
            className="w-4 h-full"
          />
        </div>
        <h3 className="text-principal font-bold">{cardObj.name}</h3>
      </div>
      {/* CHEVRON */}
      <Chevron isOpen={isOpen} />
    </div>
  );
};
//--------- NOTE CARD
const NoteCard = ({ cardObj, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="paragraph text-[16px] text-left mt-2 overflow-hidden"
        >
          {cardObj.note}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

//--------- CHEVRON
const Chevron = ({ isOpen }) => {
  return (
    <button className="text-principal text-2xl flex border-none bg-none cursor-pointer">
      <span
        className={`flex transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      >
        <ion-icon name="chevron-up-outline"></ion-icon>
      </span>
    </button>
  );
};

const Line = () => {
  return (
    <div className="w-1 h-full bg-slate-800 absolute top-0 left-[50%] inline-flex z-0"></div>
  );
};

export default Cartas;
