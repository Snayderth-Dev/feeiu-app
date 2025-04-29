import { useState } from "react";
import NoteSub from "./NoteSub.jsx";
import carousel from "../data/carousel.js";

const Galeria = () => {
  const [step, setStep] = useState(0);

  function handlePrevious() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  function handleNext() {
    if (step < carousel.length - 1) {
      setStep(step + 1);
    }
  }

  return (
    <section
      id="galeria"
      className="spacing-sect items-center gap-12 grid md:grid-cols-2"
    >
      {/* Mostrar solo una imagen */}
      <CarouselImg
        imagesObj={carousel[step]}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        step={step}
      />

      <Text />
    </section>
  );
};

const CarouselImg = ({ imagesObj, handlePrevious, handleNext, step }) => {
  return (
    <div className="h-full mx-auto md:mx-0 w-full">
      <img
        src={imagesObj.imgUrl} // Aquí extraemos la propiedad
        alt={imagesObj.description}
        className="w-80 mx-auto md:w-full h-auto rounded-2xl"
      />

      <Controls
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        step={step}
      />
    </div>
  );
};

const Controls = ({ handlePrevious, handleNext, step }) => {
  return (
    <div className="flex justify-between items-center mt-10 w-60 mx-auto">
      <button
        onClick={handlePrevious}
        className="text-[#1c7ed6] text-5xl flex items-center cursor-pointer"
      >
        <ion-icon name="arrow-back-circle-outline"></ion-icon>
      </button>

      <div className="flex gap-3">
        <div className={step === 0 ? "activeDots" : "dots"}>&nbsp;</div>
        <div className={step === 1 ? "activeDots" : "dots"}>&nbsp;</div>
        <div className={step === 2 ? "activeDots" : "dots"}>&nbsp;</div>
        <div className={step === 3 ? "activeDots" : "dots"}>&nbsp;</div>
        <div className={step === 4 ? "activeDots" : "dots"}>&nbsp;</div>
      </div>

      <button
        onClick={handleNext}
        className="text-[#1c7ed6] text-5xl flex items-center cursor-pointer"
      >
        <ion-icon name="arrow-forward-circle-outline"></ion-icon>
      </button>
    </div>
  );
};

const Text = () => {
  return (
    <div>
      <NoteSub second="Nuestros recuerdos" />
      <Title />
      <p className="paragraph">
        Y aquí están... nuestras fotos. No son perfectas, no tienen filtros pro,
        pero tienen algo que no se edita: lo que sentimos en ese momento. Cada
        imagen guarda un pedacito de nosotros, de lo que fuimos viviendo,
        riendo, compartiendo. Son solo fotos, sí... pero para mí, son pequeños
        recuerdos que valen más que mil palabras.
      </p>
    </div>
  );
};

const Title = () => {
  return <h2 className="sub-h2">Galeria</h2>;
};
export default Galeria;
