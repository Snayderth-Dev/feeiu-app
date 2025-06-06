import AuraBlurR from "./BlurR";
import Button from "./Button";

const Home = () => {
  return (
    <section
      id="home"
      className="grid flex-col items-center gap-12 spacing-sect md:flex-row md:grid-cols-2"
    >
      {/* BLUR AURA IMG */}

      <AuraBlurR />

      {/* HOME TEXT */}

      <HomeText />

      {/* IMG HOME */}

      <ImagesNovios />
    </section>
  );
};

//IMG

const ImagesNovios = () => {
  return (
    <div className="layout-img w-80 mx-auto md:w-full xl:max-w-full lg:max-w-[420px]">
      <img
        src="/images/img-1.jpg"
        alt="imagen novios 1"
        className="col-span-2 row-span-2 w-full h-full object-cover rounded-2xl"
      />

      <img
        src="images/img-2.jpg"
        alt="imagen novios 2"
        className="w-full h-full object-cover rounded-2xl"
      />

      <img
        src="images/img-3.jpg"
        alt="imagen novios 3"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

const HomeText = () => {
  return (
    <div className="flex flex-col gap-7 lg:gap-8">
      <h1 className="text-principal text-center lg:leading-15 text-4xl font-extrabold font-principial lg:text-6xl md:text-left">
        ISAQUITO
      </h1>

      <p className="paragraph">
        Hay historias que comienzan con un simple encuentro, un cruce de
        miradas, o unas palabaras tímidas. La nuestra empezó así...
      </p>
      <Button />
    </div>
  );
};

export default Home;
