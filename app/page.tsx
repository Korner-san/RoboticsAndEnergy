import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import ArticleCard from '@/components/ArticleCard';

const projects = [
  {
    title: "Arduino web server LED control project",
    description: "A web-based LED control project using Arduino! Create a web-based interface for controlling RGB LEDs through a local area network with password protection.",
    href: "/projects/arduino-projects/arduino-web-server-led-control",
    imageSrc: "https://roboticsandenergy.com/wp-content/uploads/2021/01/f-1.png",
    altText: "Arduino LED control project setup"
  },
  {
    title: "Robotic arm with Arduino project",
    description: "Arduino and servo motors robotic arm project. Creating a working 6-axis robotic arm that can catch and move different objects. From hardware to software, everything will be explained.",
    href: "/projects/arduino-projects/robotic-arm",
    imageSrc: "https://roboticsandenergy.com/wp-content/uploads/2021/01/Real-robotic-arm-yay.jpg",
    altText: "Arduino robotic arm project"
  },
  {
    title: "PC repair assistant",
    description: "Get to know and master the world of computer problem diagnostics to identify and fix broken PC issues using an expert system programmed in Prolog.",
    href: "/projects/expert-program-computer-project",
    imageSrc: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
    altText: "PC repair and diagnostics tools"
  },
  {
    title: "Web-Controlled RGB LED Light Strip: DIY Arduino Project",
    description: "Arduino-controlled RGB LED strip accessible through a local network interface, allowing control from any smart device, including your phone.",
    href: "/projects/arduino-projects/rgb-led-strip-with-arduino",
    imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    altText: "RGB LED strip controlled by Arduino"
  }
];

const articles = [
  {
    title: "Internet of Things for Smart Cities",
    subtitle: "How advanced cities operate using IoT technology",
    date: "February 20, 2021",
    comments: 0,
    href: "/articles-iot-smart-cities"
  },
  {
    title: "Experts concerns with Artificial intelligence",
    subtitle: "What AI experts are saying about the future of artificial intelligence",
    date: "February 19, 2021",
    comments: 0,
    href: "/articles-ai-experts-concerns"
  },
  {
    title: "Computer memory operation",
    subtitle: "The types of computer memory, how it operates and what it looks like inside",
    date: "January 20, 2021",
    comments: 0,
    href: "/articles-computer-memory"
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-robotics-dark mb-6">
              DIY Electronic Projects
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Robotics and Energy&apos;s electronic projects provide step by step guidance and detailed
              instructions on how to create different electronic projects:
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8 text-left">
              <h2 className="text-2xl font-semibold text-robotics-dark mb-6">
                In each project page you will find:
              </h2>
              <ul className="space-y-3 text-gray-700">
                {[
                  'A video showcasing the project',
                  'A list of components needed',
                  'Hardware and software details',
                  'Information on what can be learned',
                  'Everything you need to acquire the knowledge to build the project yourself by reading the instructions.',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-robotics-blue mr-3 mt-1">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Create your own unique electronic project that suits your style and needs. You can
              assist yourself by following the steps detailed in our projects if necessary.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-robotics-dark mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                href={project.href}
                imageSrc={project.imageSrc}
                altText={project.altText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Arduino Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-robotics-dark mb-6">
              Arduino for Electronic projects
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A combination of the following characteristics – ease of use, large community of
              support, affordability, cross-platform compatibility, and a huge ecosystem of shields
              and modules makes Arduino the most popular choice nowadays among beginners that are
              trying to learn about microcontrollers and create electronic DIY type projects. Follow
              our projects and see how we made it work.
            </p>
          </div>
        </div>
      </section>

      {/* Raspberry Pi Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-robotics-dark mb-6">
              Advanced Electronic projects with Raspberry Pi
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Raspberry Pi is amazing for some DIY electronic projects. It is a powerful and
              versatile single-board computer that can handle more complex tasks than Arduino.
              However, Raspberry Pi requires more power and may be more difficult to use for
              beginners, since it requires more knowledge of operating systems and programming.
              Learn more about Raspberry Pi by following our projects.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-robotics-dark mb-12">
            Recent articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                excerpt={article.subtitle}
                date={article.date}
                comments={article.comments}
                href={article.href}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
