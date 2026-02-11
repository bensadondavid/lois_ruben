'use client'

const Waze = () => {


  const handleOpenWaze = () => {
    // Coordonnées de la destination (latitude et longitude)
    const latitude = 32.44192; 
    const longitude = 34.90390;

    // URL pour ouvrir Waze
    const wazeUrl = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;

    // Redirection vers l'URL
    window.location.href = wazeUrl;
  };

  return (
    <button className="bg-[#F3DADC] text-white font-afrah border-none px-6 py-2 rounded-full mt-4 mb-15"  onClick={handleOpenWaze}>Voir l'itinéraire Waze</button>
  );
};

export default Waze;