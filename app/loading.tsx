import Image from "next/image"

function Loading() {

  return (

    <div className="h-dvh w-screen bg-white flex items-center justify-center">
        <Image
            src='/Logo/logo-lois-entry.webp' 
            alt="Logo_Lois&Ruben"
            height={150}
            width={150}
        />
    </div>

  )

}

export default Loading