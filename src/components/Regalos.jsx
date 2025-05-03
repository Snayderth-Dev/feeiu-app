import caciones from "../data/songs.js";
import NoteSub from "./NoteSub.jsx";
import BlurR from "./BlurR.jsx";

const Regalos = () => {
  return (
    <section
      id="regalos"
      className="spacing-sect flex flex-col md:flex-row gap-12 relative"
    >
      <div>
        <Text />
        <BlurR />
      </div>

      <div className="border border-slate-900 shadow-lg shadow-slate-900 bg-[#020b14] rounded-2xl px-7 md:px-7 py-10 flex gap-4 flex-col w-80 mx-auto md:w-90 xl:w-100">
        {/* */}
        {caciones.map((song) => (
          <Musics cancionesObj={song} key={song.music} />
        ))}
        {/* */}
      </div>
    </section>
  );
};

const Text = () => {
  return (
    <>
      <NoteSub third="Eres el sol" />
      <h2 className="sub-h2">Canciones:</h2>
      <p className="paragraph md:w-80 xl:w-130">
        Estas son algunas canciones que te dedico, amor de mi vida. Yo se que no
        es mucho pero estas son las canciones que he guardado para dedicarle al
        amor de mi vida.
      </p>
    </>
  );
};

const Musics = ({ cancionesObj }) => {
  return (
    <ul>
      <li>
        <a
          href={cancionesObj.link}
          className="text-principal bg-slate-900 p-3 rounded-full text-center text-[12px] flex justify-center xl:text-[14px]"
          target="_blank"
        >
          {cancionesObj.author} - {cancionesObj.music}
        </a>
      </li>
    </ul>
  );
};

export default Regalos;
