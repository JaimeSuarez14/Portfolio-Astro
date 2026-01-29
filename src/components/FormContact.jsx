import { useState } from "react";

const ContactForm = () => {
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando");

    setFormSubmitted(true);
  };

  return (
    <section className="relative w-full min-h-[90dvh] p-2 gap-2 bg-transparent dark:bg-gray-900 transform transition-all sm:mb-4">
      <div id="contact" className="text-center">
        {/* --- MENSAJE ENVIADO --- */}
        {formSubmitted ? (
          <div className="flex flex-col items-center justify-center space-y-4 shadow-2xl shadow-teal-500/70 dark:shadow-indigo-500/70 transition-all absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 h-auto px-10 py-8 bg-white dark:bg-gray-800 rounded-2xl border-4 border-teal-400 dark:border-indigo-400">
            {/* Icono de Correo (Bootstrap) */}
            <i className="bi bi-send-check-fill text-7xl text-teal-500 dark:text-indigo-400"></i>
            <h1 className="text-shadow-custom-light dark:text-shadow-custom-dark font-extrabold italic text-teal-600 dark:text-indigo-400 text-3xl sm:text-4xl">
              Mensaje Enviado
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              ¡Gracias por contactarme!
            </p>
          </div>
        ) : (
          <div>
            {/* --- CABECERA DE CONTACTO --- */}
            <div className="relative w-full max-w-lg mx-auto mb-4 mt-6">
              {/* Icono de Burbuja de Chat (Bootstrap) */}
              <i className="bi bi-chat-dots-fill text-6xl absolute -top-4 left-1/2 transform -translate-x-1/2 z-50 text-teal-500 dark:text-indigo-400 hover:scale-110 transition-transform"></i>
              <h1 className="pt-8 text-center text-5xl font-extrabold italic text-gray-800 dark:text-white [text-shadow:_0_4px_6px_rgb(20_184_166_/_0.5)] dark:[text-shadow:_0_4px_6px_rgb(129_140_248_/_0.5)]">
                Contacto
              </h1>
            </div>

            {/* --- FORMULARIO --- */}
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-8 w-full max-w-screen-md mx-auto rounded-3xl p-8 sm:p-12 shadow-2xl shadow-gray-400/50 dark:shadow-gray-700/70 bg-white dark:bg-gray-800 transition-all hover:shadow-teal-500/60 dark:hover:shadow-indigo-500/60 mb-8 border-t-4 border-teal-400 dark:border-indigo-400"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-xl font-bold text-gray-700 dark:text-gray-200 mb-2 text-left"
                >
                  <i className="bi bi-person-fill text-teal-500 dark:text-indigo-400 mr-2"></i>{" "}
                  Nombre Completo / Empresa
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-indigo-400 rounded-xl shadow-lg transition-all dark:text-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-lg"
                  placeholder="Tecnologic SAC"
                  required
                />
              </div>

              {/* Email and Subject Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-0 gap-x-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xl font-bold text-gray-700 dark:text-gray-200 mb-2 text-left"
                  >
                    <i className="bi bi-envelope-fill text-teal-500 dark:text-indigo-400 mr-2"></i>{" "}
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-indigo-400 rounded-xl shadow-lg transition-all dark:text-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-lg"
                    placeholder="you@email.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xl font-bold text-gray-700 dark:text-gray-200 mb-2 text-left"
                  >
                    <i className="bi bi-tag-fill text-teal-500 dark:text-indigo-400 mr-2"></i>{" "}
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 block w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-indigo-400 rounded-xl shadow-lg transition-all dark:text-white dark:bg-gray-700 appearance-none text-lg"
                  >
                    <option value="feedback">Feedback</option>
                    <option value="inquiry">Oferta</option>
                    <option value="support">Soporte</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-xl font-bold text-gray-700 dark:text-gray-200 mb-2 text-left"
                >
                  <i className="bi bi-chat-left-text-fill text-teal-500 dark:text-indigo-400 mr-2"></i>{" "}
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full px-6 py-4 border-2 border-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-indigo-400 rounded-xl shadow-lg transition-all dark:text-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-lg"
                  placeholder="Escribir el Mensaje"
                  rows="6"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-extrabold py-4 px-8 rounded-full shadow-xl transition-all text-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
                  disabled={
                    loading ||
                    !formData.name ||
                    !formData.email ||
                    !formData.message
                  }
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <i className="bi bi-arrow-repeat animate-spin mr-2"></i>{" "}
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Enviar{" "}
                      <i className="bi bi-arrow-right-short ml-2 text-3xl"></i>
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
