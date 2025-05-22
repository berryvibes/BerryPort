/**
 * @copyright 2025 Berry
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Project done",
    number: 45,
  },
  {
    label: "Years of experience",
    number: 10,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Berry,I am a passionate Full Stack Developer with
            a strong foundation in both front-end and back-end technologies. I
            specialize in creating dynamic, user-friendly web applications using
            HTML, CSS, and JavaScript, along with frameworks like React.js for
            an engaging user experience. On the back end, I leverage Python with
            Django to build robust and scalable applications. I’m also
            proficient in CSS frameworks like Bootstrap and Tailwind, which help
            me design visually appealing and responsive layouts. I thrive on
            solving complex problems and enjoy turning ideas into reality
            through code. When I'm not coding, you can find me exploring new
            technologies, contributing to open-source projects, or diving into
            the latest web development trends. Let’s connect and collaborate on
            building something amazing!
          </p>
{/* 
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
