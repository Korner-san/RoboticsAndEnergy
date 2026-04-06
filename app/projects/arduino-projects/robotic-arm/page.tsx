import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Robotic Arm project with Arduino - Robotics and Energy',
  description: 'DYI - Robotic arm with Servo motors. Complete guide with hardware, software, and code.',
};

const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-10">
    {title && <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">{title}</h2>}
    {children}
  </section>
);

const RoboticArmPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b border-gray-200">
        <Breadcrumb crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: 'Arduino Projects', href: '/projects/arduino-projects' },
          { label: 'Robotic arm with Arduino' },
        ]} />
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#70CDE2] mb-4">
            Robotic arm project with Arduino
          </h1>
          <h2 className="text-2xl text-[#90dced] font-medium">
            DYI - Robotic arm with Servo motors
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Table of Contents
              </h3>
              <ul className="space-y-3 text-sm text-[#70CDE2]">
                <li><a href="#how-to-build" className="hover:text-blue-600">1. How to build a robotic arm</a></li>
                <li><a href="#primary-parts" className="hover:text-blue-600">2. Primary parts for this project</a></li>
                <li><a href="#hardware" className="hover:text-blue-600">3. Hardware</a></li>
                <li><a href="#electrics" className="hover:text-blue-600">4. Electrics</a></li>
                <li><a href="#software" className="hover:text-blue-600">5. Software</a></li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
              
              {/* YouTube Video Showcase */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10 shadow-lg">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/lFh_St2SKkA" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              <Section>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Automation is one of the leading development fields mainly because it advances the industry further than ever before, providing the potential of almost fully automated production lines. Automation is stated to be the 3rd phase of the industrial revolution. A remarkable technological advancement that pushes mankind up a step in the ladder of industry tech. It makes products cheaper to produce and at larger quantities making the technology worthwhile to invest in. Since the beginning of the industrial revolution mechanical engineers developed machines to ease on the workforce. Electricity and computer science provided the gateway to something new – robotics! Automized machines capable of human activity. So current technology allows us to build machines that are capable of performing human-like actions. To do so, robots must have similar autonomy consisting moving parts that are electromechanically driven and a “brain” component to control them by following pre-determined instructions, or make them make up on its own!
                </p>
              </Section>

              <Section>
                <h2 id="how-to-build" className="text-3xl font-bold text-gray-800 mb-6">How to make a robotic arm</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In this project we will build the basis for an automated programmable robotic arm. We shall learn how to construct and control a 6 axis robot arm via a control interface from a computer, and write pre-determined instructions for it to follow and repeat. We will use servo motors to drive the parts and an Arduino UNO as our microcontroller that will control them while communicating with the PC via a USB cable.
                </p>
                <p className="text-gray-700 font-semibold mb-8">
                  For this project please download our control software.
                </p>

                {/* Robotic Arm Project Image */}
                <div className="rounded-xl overflow-hidden mt-8 mb-12 flex justify-center">
                  <img
                    src="/images/2021/01/robotic-arm-again-1.jpg"
                    alt="Robotic arm constructed"
                    className="max-w-full h-auto rounded-xl shadow-md border border-gray-100"
                  />
                </div>
              </Section>

              {/* Placeholders for the rest of the Table of Contents matching the old text to be replaced in future steps */}
              <Section>
                <h2 id="primary-parts" className="text-3xl font-bold text-gray-800 mb-6">Primary parts for this project</h2>
                <p className="text-gray-500 italic">[Content pending next steps]</p>
              </Section>

              <Section>
                <h2 id="hardware" className="text-3xl font-bold text-gray-800 mb-6">Hardware</h2>
                <p className="text-gray-500 italic">[Content pending next steps]</p>
              </Section>

              <Section>
                <h2 id="electrics" className="text-3xl font-bold text-gray-800 mb-6">Electrics</h2>
                <p className="text-gray-500 italic">[Content pending next steps]</p>
              </Section>

              <Section>
                <h2 id="software" className="text-3xl font-bold text-gray-800 mb-6">Software</h2>
                <p className="text-gray-500 italic">[Content pending next steps]</p>
              </Section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticArmPage;
