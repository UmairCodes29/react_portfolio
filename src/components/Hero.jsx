import {Link} from 'react-router-dom'
export default function Hero() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-teal-400 mb-2">Hi, my name is</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Umair Mansuri
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-400 mb-6">
            Full Stack Developer
          </h3>
          <p className="text-teal-300 max-w-xl leading-relaxed">
            I build clean, scalable, and user‑friendly web applications using
            modern technologies like React, Node.js, and Tailwind CSS. I focus
            on writing maintainable code and creating great user experiences.
          </p>
          <div className="flex gap-4 mt-8">
            <Link
              to="/projects"
              className="px-6 py-3 bg-teal-600 hover:bg-teal-500 rounded-lg font-medium"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-teal-500 hover:border-white rounded-lg font-medium"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-teal-800/60 backdrop-blur rounded-2xl p-8 shadow-xl">
          <h4 className="text-xl font-semibold mb-4">Quick Info</h4>
          <ul className="space-y-3 text-slate-300">
            <li>📍 Location: Ahmedabad, Gujarat</li>
            <li>💼 Role: Full Stack Developer</li>
            <li>🎓 Experience: Fresher </li>
            <li>⚡ Tech: MERN Stack</li>
          </ul>
        </div>
      </section>
    </>
  );
}
