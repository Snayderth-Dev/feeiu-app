import { useEffect, useState } from "react";

const Reminder = () => {
  const [open, setOpen] = useState(true);
  const [black, setBlack] = useState(true);

  // Bloquear el scroll cuando 'open' esté activo
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // No scroll
    } else {
      document.body.style.overflow = "auto"; // Scroll normal
    }

    // Limpieza por si acaso (opcional pero buena práctica)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div>
      <BackgroundBlack black={black} />

      {open && (
        <div className="fixed w-88 top-60 left-1/2 transform -translate-x-1/2 z-50 border-2 border-blue-950 rounded-3xl bg-[#030e19] text-center">
          <div className="p-5 text-principal">
            <h3 className="font-bold text-2xl font-principial">RECORDATORIO</h3>
            <p className="paragraph mt-5">
              Quiero que recuerdes que te amo demasiado de aqui a la luna, nunca
              lo olvides.
            </p>
          </div>

          <button
            className="cursor-pointer border-t-2 border-t-blue-950 text-emerald-400 font-bold w-full py-4"
            onClick={() => {
              setOpen(!open);
              setBlack(!black);
            }}
          >
            Ocultar
          </button>
        </div>
      )}
    </div>
  );
};

const BackgroundBlack = ({ black }) => {
  if (!black) return null; // Si 'black' es false, no renderizamos nada

  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black opacity-85 z-50 overflow-hidden"></div>
  );
};

export default Reminder;
//{open ? "w-full h-screen bg-black z-50" : ""}
//
