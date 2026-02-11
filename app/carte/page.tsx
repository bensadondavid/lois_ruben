


function Card() {

  return (
    <div className="relative flex flex-col items-center gap-3 min-h-screen overflow-x-hidden"> {/* Container globale */}

      <div id="background-main" className="fixed inset-0 bg-[url('/Backgrounds/lois-bg-main.webp')] bg-cover bg-center -z-10"></div> {/* Background */}

      <div id="houppa-soiree" className="h-[100vh] w-[85%] mt-5 bg-white border border-3 border-[#DD5460] rounded-t-[50%_180px] rounded-b-[50%_180px] flex flex-col items-center"> {/* Houppa & Soirée */}
        <p className="text-text-card font-symphony text-4xl mt-30">Houppa & Soirée</p>
      </div>

      <div id="houppa-reponse" className="h-[100vh] w-[90%] bg-white"></div> {/* Reponse */}
    </div>

  )

}

export default Card