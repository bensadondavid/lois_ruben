import Image from 'next/image';
import Link from 'next/link';

function Home() {

  return (

    <div className='w-screen h-screen flex flex-col items-center justify-between bg-[url("/Backgrounds/lois-bg-accueil.webp")] bg-cover bg-center' >
      <div className='flex flex-col justify-center items-center gap-2 mt-6'>
        <Image
          src="/Logo/logo-lois-entry.webp"
          alt='logo-entry'
          height={120}
          width={120}
          />
        <p className='font-lora text-text-entry'>10.05.2026</p>
      </div>
      <div className='flex flex-col justify-center items-center mb-25'>
        <Link href='/carte' className='w-fit font-afrah text-text-entry text-xl'>Voir la carte</Link>
        <Image 
            src='/Images/arc-link.png'
            alt='arc-link'
            height={30}
            width={200}
        />
      </div>
    </div>
    
  )

}

export default Home