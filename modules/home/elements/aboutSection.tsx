import React from 'react'

const AboutUs = () => {
  return (
    <section id='about' className='flex flex-col md:flex-row justify-between gap-4 w-full h-full md:h-screen'>
      <div className='w-full h-1/2 md:w-1/2 md:h-full flex flex-col justify-center items-center'>
        <img src="/img/icon.webp" alt="icon.webp" className='w-96 h-96 rounded-full' />
      </div>
      <div className='w-full h-1/2 md:w-1/2 md:h-full pl-14 flex flex-col gap-4 justify-center'>
        <h2 className='text-6xl font-bold'>ABOUT US</h2>
        <p className='indent-7'>Selamat datang di BBY.Interior, di mana kreativitas bertemu dengan fungsionalitas dalam setiap desain kami. Saya, sebagai seorang desainer freelance yang berdedikasi di brand ini, menyajikan portofolio desain interior yang memukau, yang mencakup perabotan, ruang tamu, dapur, rumah, toko, dan berbagai proyek lainnya.</p>
        <p className='indent-7'>Dengan keahlian dalam menggunakan perangkat lunak terkemuka seperti SketchUp, Enscape, dan Lumion, saya menghadirkan visi desain interior yang inovatif dan realistis. Setiap proyek yang saya tangani memiliki sentuhan personal dan keunikan yang mencerminkan gaya dan preferensi klien.</p>
        <p className='indent-7'>BBY.Interior tidak hanya memamerkan keahlian teknis, tetapi juga memancarkan estetika yang memikat dan fungsionalitas yang sesuai dengan kebutuhan praktis. Dari ruang tamu yang nyaman hingga dapur yang modern dan toko yang menarik, setiap desain dihasilkan dengan perhatian terhadap detail dan rasa seni yang tinggi.</p>
        <p className='indent-7'>Melalui keterampilan menggunakan Lumion, kami membawa desain menjadi hidup dengan visualisasi 3D yang memukau, memberikan gambaran yang jelas tentang bagaimana ruang akan terasa dan terlihat. Ini bukan hanya tentang menciptakan desain, tetapi juga tentang menciptakan pengalaman.</p>
        <p className='indent-7'>Selamatkan momen inspiratif dan lihatlah bagaimana BBY.Interior dapat membawa ide-ide Anda menjadi kenyataan. Saya berkomitmen untuk memberikan layanan desain interior yang mengagumkan dan memenuhi harapan setiap klien. Mari berkolaborasi dan wujudkan impian desain interior Anda bersama BBY.Interior!</p>
      </div>
    </section>
  )
}

export default AboutUs