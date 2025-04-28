import NoteSub from "./NoteSub";

const Historia = () => {
  return (
    <section
      id="historia"
      className="grid md:grid-cols-2 gap-12 flex-col spacing-sect items-center"
    >
      <div>
        <NoteSub first="Eres la mejor persona" />
        <h2 className="sub-h2">
          Nuestra
          <br />
          Historia:
        </h2>
        <p className="paragraph">
          Todo empezó sin buscar nada. Solo hablábamos, compartíamos tonterías y
          poco a poco nos volviamos parte del día del otro. No hubo un momento
          exacto en que todo cambió... simplemente pasó. Y desde entonces,
          estamos aquí, construyendo algo real, a nuestro ritmo.
        </p>
      </div>

      <div>
        <img
          src="/images/img-5.jpg"
          alt="Pareja hablando"
          className="w-80 md:w-full mx-auto rounded-2xl h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Historia;
