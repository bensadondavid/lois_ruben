'use client'
import Waze from "../Components/Waze"
import Form from "../Components/Form"
import Image from "next/image"
import { motion } from "motion/react"

function Card() {

  return (
    <div className="relative flex flex-col items-center gap-3 min-h-dvh overflow-x-hidden"> {/* Container globale */}
      <p className="absolute top-3 right-3 font-lora">בס״ד</p>
      <div id="background-main" className="fixed inset-0 bg-[url('/Backgrounds/lois-bg-main.webp')] bg-cover bg-center -z-10"></div> {/* Background */}

      <div id="houppa-soiree" className="h-fit w-[85%] mt-5 mb-15 bg-[#F3F1F1] border-3 border-[#DD5460] rounded-t-[50%_150px] rounded-b-[50%_150px] flex flex-col items-center"> {/* Houppa & Soirée */}
        <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-text-card font-symphony text-3xl mt-15">Houppa & Soirée</motion.p>

        <div id="noms-parents" className="w-[95%] mt-7 flex flex-row items-end justify-between font-afrah text-[9px]"> {/* Noms parents */}

          <div id="noms-parents-lois" className="text-left flex flex-col items-start">
            <p>Mme Yvette Zerbib</p>
            <p>Mme Josiane Levy</p>
            <p>Mme Josiane Nakache</p>
            <p>Mr&Mme Isabelle & Jean Marc Levy</p>
            <p>Mr&Mme Sophie & Franck Nakache</p>
          </div>

          <div id="noms-parents-ruben" className="text-right flex flex-col items-end">
            <p>Mr George Sitbon</p>
            <p>Mme Jeanine Zenou</p>
            <p>Mr Lucien Krief</p>
            <p>Mr&Mme Stéphanie & Olivier Krief</p>
          </div>

        </div>
        <p className="w-[90%] text-center font-lora text-sm mt-10">Ont la joie de vous convier au mariage de leurs enfants et petits enfants</p>
        <div className="relative mt-3 mb-12">
          <Image src='/Logo/logo-lois-rose.png' alt="logo-rose" width={200} height={200} className="absolute -top-4 left-1/2 -translate-x-1/2"/>
          <div className="font-pinyon text-center text-5xl mt-10 ml-2 flex"> 
            <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>Loïs</motion.p>
            <span className="text-2xl inline-block translate-y-1 ml-2 mr-2">&</span>
            <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>Ruben</motion.p></div> {/* Noms Mariés */}
          </div>
        <p className="w-[90%] text-center font-lora text-sm mt-10">Et seraient honorés de votre présence au mariage qui sera célébré le</p>
        <motion.p  initial={{ opacity: 0, scale: 0.5 }} viewport={{ once: false, amount: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-[90%] text-center font-lora text-md mt-3"><span className="font-bold">Dimanche 10 Mai 2026</span><br />à 18h00 précises</motion.p>
        <p className="w-[90%] text-center font-lora text-md mt-3">Dans les Jardins Arugot Bosem<br />כביש 4, בכניסה לפארק השרון<br />Hadera , Israël</p>
        <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-[90%] text-center font-symphony mt-8">En ce jour si précieux, une tendre pensée pour <br />Mamie Raymonde, Papi Charley, Papi Gérard & Papi Gigi, <br />à jamais présents dans nos coeurs.”</motion.p>
        <Waze />
      </div>

      <div id="houppa-reponse" className="h-dvh w-[85%] mt-5 mb-15 bg-[#F3F1F1] border-3 border-[#DD5460] flex flex-col items-center">{/* Reponse */}
          <motion.h1 initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center text-[#F1C6D7] font-symphony text-5xl mt-15">Réponse</motion.h1>
          <p className="text-center font-pinyon text-[10px]">Réponse souhaitée dès réception </p>
          <Form />
      </div>
      <a className="font-lora text-center absolute bottom-4 italic text-[#DD5460]" href="https://azmana.fr">Réalisé avec amour par <span className="underline">Azmana</span></a>
    </div>

  )

}

export default Card