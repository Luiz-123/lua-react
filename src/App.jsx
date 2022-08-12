import Nav from "./components/Nav"

function App() {
 
  return (
    <section className="bg-hero-bg md:h-screen h-full bg-center bg-cover font-Barlow">
      <Nav />

      <div className="md:container px-2 pt-5 md:text-left text-center">
        <h1 className="text-white text-2xl"><spam className="font-bold text-[#ffffff70] mr-2">01</spam> ESCOLHA O SEU DESTINO</h1>

        <div className="md:flex items-center md:justify-between pt-6 mt-6">
          <img src="./src/assets/image-moon-2.png" className="md:w-[36%] w-[52%] md:py-0 py-4 md:mx-0 mx-auto" />

          <div className="md:w-1/2">
            <ul className="text-white pb-4">
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 border-b-2 md:ml-2">ENCÉLADO</li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">LO</li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">EUROPA</li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">TITAN</li>
            </ul>
            <h1 className="text-white w-full font-Bellefair pb-2 text-7xl">MOON</h1>
            <p className="text-[#d2d8f9] font-extralight text-[18px] md:w-2/3 md:pl-1 pb-10 leading-6 tracking-wide border-b-[0.5px] border-[#ffffff66]">
            Veja nosso planeta como você nunca viu antes. Uma viagem relaxante perfeita para ajudar a recuperar a perspectiva e voltar revigorado. Enquanto estiver lá, conheça um pouco da história visitando os locais de pouso da Luna 2 e da Apollo 11.
            </p>

            <div className="flex md:justify-between justify-around lg:w-1/2 w-auto pt-10">
              <div>
                <span className="text-[#d2d8f9] text-sm">Avg. distância</span>
                <h1 className="text-xl text-white">384,400</h1>
              </div>
              <div>
                <span className="text-[#d2d8f9] text-sm">Est. tempo de viagem</span>
                <h1 className="text-xl text-white">3 DAYS</h1>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default App
