import Image from "next/image"

function Loading() {

  return (

    <div className="h-full w-full bg-white">
        <Image
            src='/Logo/logo-lois-entry.webp' 
            alt="Logo_Lois&Ruben"
            height={300}
            width={300}
        />
    </div>

  )

}

export default Loading