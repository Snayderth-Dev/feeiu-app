import AuraBlurR from "./BlurR.jsx";
import AuraBlurL from "./BlurL.jsx";
import cards from "../data/cards.js";

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
          <Card cardObj={msg} />
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
  return (
    <div className="border-2 border-blue-800 rounded-2xl p-3 shadow-md z-20 bg-[#030e19]">
      <PanelProfile cardObj={cardObj} />

      <NoteCard cardObj={cardObj} />
    </div>
  );
};

//---------- PANEL PROFULE

const PanelProfile = ({ cardObj }) => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-gray-900 p-3 rounded-full">
          <img
            src={cardObj.imgProfile}
            alt="Corazon Blanco"
            className="w-4 h-full"
          />
        </div>
        <h3 className="text-principal">{cardObj.name}</h3>
      </div>

      {/* HOUR */}

      <div>
        <p className="text-principal text-[12px] font-bold">
          {hours}:{minutes}
        </p>
      </div>
    </div>
  );
};

//--------- NOTE CARD

const NoteCard = ({ cardObj }) => {
  return <p className="paragraph text-[16px] text-left mt-2">{cardObj.note}</p>;
};

const Line = () => {
  return (
    <div className="w-1 h-full bg-emerald-400 absolute top-0 left-[50%] inline-flex z-0"></div>
  );
};

export default Cartas;
