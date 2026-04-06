import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import ArticleCard from '@/components/ArticleCard';

// All images sourced from the original roboticsandenergy.com WordPress backup
// and served locally from public/images/
const projects = [
  {
    title: 'Arduino web server LED control project',
    description: 'Create a web-based interface for controlling RGB LEDs through a local area network with password protection using Arduino and an Ethernet shield.',
    href: '/projects/arduino-projects/arduino-web-server-led-control',
    imageSrc: '/images/arduino-web-server-project-real.jpg',
    altText: 'Arduino web server LED control project setup',
  },
  {
    title: 'Robotic arm with Arduino project',
    description: 'Arduino and servo motors robotic arm project. Creating a working 6-axis robotic arm that can catch and move different objects. From hardware to software, everything will be explained.',
    href: '/projects/arduino-projects/robotic-arm',
    imageSrc: '/images/Real-robotic-arm-yay.jpg',
    altText: 'Completed robotic arm with Arduino',
  },
  {
    title: 'PC repair assistant',
    description: 'Get to know and master the world of computer problem diagnostics to identify and fix broken PC issues using an expert system programmed in Prolog.',
    href: '/projects/expert-program-computer-project',
    imageSrc: '/images/Custom-dimensions-650x650-px-1.jpg',
    altText: 'PC repair assistant expert system',
  },
  {
    title: 'Web-Controlled RGB LED Light Strip: DIY Arduino Project',
    description: 'Arduino-controlled RGB LED strip accessible through a local network interface, allowing control from any smart device, including your phone.',
    href: '/projects/arduino-projects/rgb-led-strip-with-arduino',
    imageSrc: '/images/Add-a-heading.png',
    altText: 'Web-controlled RGB LED light strip project',
  },
];

const articles = [
  {
    title: 'Internet of Things for Smart Cities',
    subtitle: 'How IoT technology is transforming urban infrastructure and city services around the world.',
    date: 'February 20, 2021',
    comments: 0,
    href: '/articles-iot-smart-cities',
    imageSrc: '/images/2021/02/1782-1-1.jpg',
  },
  {
    title: 'Experts concerns with Artificial intelligence',
    subtitle: 'What leading scientists and tech leaders say about the risks and future of AI and AGI.',
    date: 'February 19, 2021',
    comments: 0,
    href: '/articles-ai-experts-concerns',
    imageSrc: '/images/2021/02/male-human-male-robot-with-artificial-intelligence-looking-each-other_96365-174-1.jpg',
  },
  {
    title: 'Computer memory operation',
    subtitle: 'The types of computer memory, how it operates, and what it looks like inside.',
    date: 'January 20, 2021',
    comments: 0,
    href: '/articles-computer-memory',
    imageSrc: '/images/2021/01/hooded-computer-hacker-stealing-information-with-laptop-2.jpg',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] overflow-hidden min-h-screen">
      
      {/* Premium Hero Section with Animated Orbs */}
      <section className="relative py-28 lg:py-40 flex items-center justify-center overflow-hidden">
        
        {/* Animated Background Orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-robotics-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in-up">
            <span className="inline-block py-1.5 px-4 mb-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold tracking-wide shadow-sm">
              Level up your Maker Skills
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-gray-900">
              Build Extraordinary <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-robotics-blue via-teal-400 to-purple-500">
                Electronic Projects
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
              Robotics and Energy provides detailed step-by-step guidance on creating fascinating hardware, software, and robotics masterpieces.
            </p>

            <div className="bg-white/60 backdrop-blur-xl rounded-[32px] p-8 md:p-12 mb-8 text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white max-w-4xl mx-auto transform transition hover:scale-[1.01] duration-500">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">
                What you'll find in each project:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'High-quality video showcases',
                  'Comprehensive component lists',
                  'In-depth hardware & software wiring',
                  'Core theoretical concepts explained',
                  'Downloadable code implementations',
                  'Troubleshooting common pitfalls',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-robotics-blue/10 flex items-center justify-center text-robotics-blue">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Featured Projects
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-robotics-blue to-purple-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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

      {/* Informational Blocks - Arduino & Raspberry Pi */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Arduino */}
            <div className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                 <span className="text-3xl">🎛️</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Arduino Ecosystem
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ease of use, massive community support, and affordability make Arduino the premier choice for electronics beginners and professionals alike. Build powerful IoT circuits and automation bots effortlessly.
              </p>
            </div>

            {/* Raspberry Pi */}
            <div className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                 <span className="text-3xl">🍓</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Advanced Raspberry Pi
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unlock true computing power with single-board computers. Handle complex machine learning, advanced operating systems, and heavy network traffic with our Raspberry Pi guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Grid */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Latest from the Lab
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-robotics-blue mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                excerpt={article.subtitle}
                date={article.date}
                comments={article.comments}
                href={article.href}
                imageSrc={article.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
