import React from 'react';

const Contacto = () => {

  const sendToWhatsapp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const text = `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`;
    const phoneNumber = "14076036242"; // Pon aquí tu número de WhatsApp internacional, ejemplo "573001234567" para Colombia

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  }

  return (
    <div className='bg-black py-10'>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 px-4 lg:px-10'>
        <div className='flex flex-col gap-6 p-6 w-full max-w-lg border border-pink-300 shadow-lg bg-gradient-to-b from-yellow-300 to-orange-400 text-gray-700 rounded-2xl'>
          <form onSubmit={sendToWhatsapp}>
            <div className='mb-4'>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border-b-2 border-b-orange-700 px-4 py-2 rounded mt-1 focus:outline-none focus:bg-gradient-to-r focus:from-orange-300 via-orange-300 to-orange-400"
                placeholder="Your Name"
              />
            </div>

            <div className='mb-4'>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border-b-2 border-b-black px-4 py-2 rounded mt-1 focus:outline-none focus:bg-gradient-to-r focus:from-orange-300 via-orange-300 to-orange-400"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div className='mb-4'>
              <label className="block font-medium">Number</label>
              <input
                type="text"
                name="phone"
                required
                className="w-full border-b-2 border-black px-4 py-2 rounded mt-1 focus:outline-none focus:bg-gradient-to-r focus:from-orange-300 via-orange-300 to-orange-400"
                placeholder="Number"
              />
            </div>

            <div className='mb-4'>
              <label className="block font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border-b-2 border-black px-4 py-2 rounded mt-1 focus:outline-none focus:bg-gradient-to-r focus:from-orange-300 via-orange-300 to-orange-400"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-[#FCFF3B] hover:text-black transition"
            >
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
