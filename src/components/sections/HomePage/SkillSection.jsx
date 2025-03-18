import Image from "next/image";
import Link from "next/link";

export default function SkillsSection() {
  const skills = [
    {
      title: "Resume",
      description:
        "Explore my resume in web format, not only technical but professional",
      image: "/Resume-Logo.jpg",
      href: "/skills/resume",
    },
    {
      title: "Technical Examples",
      description:
        "Some of my work has been specialized and i want to show some of the fun ideas",
      image: "/Technical-Logo.jpg",
      href: "/skills/technical",
    },
    {
      title: "Design Templates",
      description:
        "I wanted to help inspire anyone who wants a website but doesnt know about Design",
      image: "/Design-Logo.jpg",
      href: "/skills/design",
    },
  ];

  return (
    <section className="py-20 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600/90 dark:text-white">
          My Skills
        </h2>
        <h3 className="text-1xl font-bold text-center mb-12 text-gray-400 dark:text-white ">
          Driven by a natural curiosity and passion for learning, I've
          cultivated a diverse skillset in web and application development. My
          proactive approach to exploring new technologies has led me to become
          proficient in front-end development, including HTML, CSS, JavaScript,
          React, and Next.js. I possess a strong foundation in database
          interaction and am eager to expand my experience in this area. Beyond
          technical skills, I'm a critical thinker and adept problem-solver,
          committed to collaborating and empowering others to achieve their
          goals within the tech landscape. I thrive in environments where I can
          leverage my abilities to create impactful solutions and contribute to
          a team's success.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Link href={skill.href} key={index}>
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-600/90 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 dark:text-gray-300">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
