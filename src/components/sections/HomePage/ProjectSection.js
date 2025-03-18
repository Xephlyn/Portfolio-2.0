import Image from 'next/image';
import Link from 'next/link'; // Add this import

export default function ProjectsSection() {
    const projects = [
      {
        title: "Games",
        description: "This folder brings to life a group of games made out of passion and interest in problem solving",
        image: "/GamesFolder.jpg",
        href: "/projects/games" // Use lowercase for consistency in URLs
      },
      {
        title: "Music",
        description: "This folder was made as I worked on and created more interest in music creation!",
        image: "/MusicFolder.jpg",
        href: "/projects/music"
      },
      {
        title: "Blog",
        description: "Working on improving my coding skills and Bloging my results as of now this is not implemented ",
        image: "/Blog-Logo.jpg",
        href: "/projects/blog"
      }
    ];
  
    return (
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold text-center mb-12 text-blue-600/90 dark:text-white">
            Past and Current Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link href={project.href} key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden 
                               transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-blue-600/90 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
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