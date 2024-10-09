import { useState } from "react";
import { BackgroundStars } from "../BackgroundStars";

export const SigueCreciendo = () => {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    tutorName: '',
    tutorEmail: '',
    teacherName: '',
    schoolName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registro exitoso. ¡Gracias por unirse a esta experiencia educativa!');
    setFormData({
      childName: '',
      childAge: '',
      tutorName: '',
      tutorEmail: '',
      teacherName: '',
      schoolName: ''
    });
  };

  return (
    < > 
{/* <BackgroundStars /> */}

    <div className="min-h-screen  text-white flex flex-col justify-center items-center p-4">

    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-64 absolute left-[300px]">
        <h2 className="text-2xl font-semibold mb-4">🌟 Beneficios</h2>
        <ul className="space-y-3">
          <li className="flex items-center">
            📚 Material Extra
          </li>
          <li className="flex items-center">
            🏆 Recompensas y Premios
          </li>
          <li className="flex items-center">
            🤝 Comunidad de Aprendizaje
          </li>
        </ul>
      </div>

  

<h1 className="text-4xl font-bold mb-8">✨ Regístrate para Continuar la Experiencia ✨</h1>
<form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2" htmlFor="childName">👦 Nombre del Niño:</label>
    <input
      type="text"
      id="childName"
      name="childName"
      value={formData.childName}
      onChange={handleChange}
      className="w-full p-3 rounded bg-gray-700 text-white"
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2" htmlFor="childAge">🧒 Edad del Niño:</label>
    <input
      type="number"
      id="childAge"
      name="childAge"
      value={formData.childAge}
      onChange={handleChange}
      className="w-full p-3 rounded bg-gray-700 text-white"
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2" htmlFor="tutorName">👨‍🏫 Nombre del Tutor:</label>
    <input
      type="text"
      id="tutorName"
      name="tutorName"
      value={formData.tutorName}
      onChange={handleChange}
      className="w-full p-3 rounded bg-gray-700 text-white"
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2" htmlFor="tutorEmail">📧 Correo Electrónico del Tutor:</label>
    <input
      type="email"
      id="tutorEmail"
      name="tutorEmail"
      value={formData.tutorEmail}
      onChange={handleChange}
      className="w-full p-3 rounded bg-gray-700 text-white"
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2" htmlFor="teacherName">🏫 Nombre del Maestro:</label>
    <input
      type="text"
      id="teacherName"
      name="teacherName"
      value={formData.teacherName}
      onChange={handleChange}
      className="w-full p-3 rounded bg-gray-700 text-white"
      required
    />
  </div>
  <div className="mb-6">
    <label className="block text-sm font-medium mb-2" htmlFor="schoolName">🎓 Nombre de la Escuela:</label>
    <input
      type="text"
      id="schoolName"
      name="schoolName"
      value={formData.schoolName}
      onChange={handleChange}
      className="w-full p-3 rounded bg-gray-700 text-white"
      required
    />
  </div>
  <button
    type="submit"
    className="w-full bg-green-500 text-black py-3 rounded-lg hover:bg-green-400 transition duration-300 ease-in-out"
  >
    💪 Registrarse
  </button>
</form>


</div>


    </>
  );
};

