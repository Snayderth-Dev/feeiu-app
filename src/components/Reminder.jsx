import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <>
      <BackgroundBlack black={black} />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="paragraph text-[16px] text-left mt-2 overflow-hidden"
          >
            <div className="fixed w-76 top-1/2 left-1/2 transform -translate-1/2 z-50 border-2 border-slate-900 rounded-3xl bg-[#020b14] text-center">
              <div className="p-5 text-principal">
                <h3 className="font-bold text-[18px] font-principial">
                  RECORDATORIO
                </h3>
                <p className="paragraph mt-3">
                  Quiero que recuerdes que te amo demasiado de aqui a la luna,
                  nunca lo olvides.
                </p>
              </div>

              <button
                className="cursor-pointer border-t-2 border-t-slate-900 text-emerald-400 w-full py-3"
                onClick={() => {
                  setOpen(!open);
                  setBlack(!black);
                }}
              >
                Ocultar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
