import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="w-[500px] lg:w-[800px]">
        <h1 className="text-7xl lg:text-8xl font-bold gilroy mb-12">
          Kovářova <span className="text-green">Michal</span>
          <br />
          chodí bosa
        </h1>
        <p className="text-xl lg:text-2xl mb-6 lg:mb-12">
          Bohužel jsem natolik zaneprázdněn tvorbou úžasných věcí pro vás, že
          nemám čas na svůj vlastní web...
        </p>
        <p className="text-xl lg:text-2xl mb-6 lg:mb-12">
          Je však už ve výrobě. Mezitím se koukněte na tenhle obrázek tenisáku s
          očima!
        </p>
        <Image
          src="/mascot.png"
          width={150}
          height={150}
          alt="tenisák s očima"
        />
      </div>
    </main>
  );
}
