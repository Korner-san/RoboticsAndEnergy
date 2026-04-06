'use client';

import React, { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

const Section: React.FC<{ 
  title?: string; 
  children: React.ReactNode; 
  id?: string;
  isEven?: boolean;
}> = ({ title, children, id, isEven }) => (
  <section id={id} className={`py-12 px-6 md:px-10 ${isEven ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200/60`}>
    {title && <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>}
    {children}
  </section>
);

const RoboticArmPage: React.FC = () => {
  const [showBrick, setShowBrick] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen pb-12">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <Breadcrumb crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: 'Arduino Projects', href: '/projects/arduino-projects' },
          { label: 'Robotic arm with Arduino' },
        ]} />
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#70CDE2] mb-4">
            Robotic arm project with Arduino
          </h1>
          <h2 className="text-2xl text-[#90dced] font-medium">
            DYI - Robotic arm with Servo motors
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                Table of Contents
              </h3>
              <ul className="space-y-3 text-[15px] font-medium text-[#70CDE2]">
                <li><a href="#how-to-build" className="hover:text-blue-600 transition-colors">1. How to build a robotic arm</a></li>
                <li><a href="#primary-parts" className="hover:text-blue-600 transition-colors">2. Primary parts for this project</a></li>
                <li><a href="#programming" className="hover:text-blue-600 transition-colors">3. Programming languages</a></li>
                <li><a href="#hardware" className="hover:text-blue-600 transition-colors">4. Hardware</a></li>
                <li><a href="#electrics" className="hover:text-blue-600 transition-colors">5. Electrics</a></li>
                <li><a href="#software" className="hover:text-blue-600 transition-colors">6. Software</a></li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl">
            <div className="rounded-2xl shadow-sm overflow-hidden border border-gray-100 bg-white">
              
              {/* Top Section / Video / Introduction */}
              <Section isEven={false}>
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

                <p className="text-gray-700 leading-relaxed text-lg">
                  Automation is one of the leading development fields mainly because it advances the industry further than ever before, providing the potential of almost fully automated production lines. Automation is stated to be the 3rd phase of the industrial revolution. A remarkable technological advancement that pushes mankind up a step in the ladder of industry tech. It makes products cheaper to produce and at larger quantities making the technology worthwhile to invest in. Since the beginning of the industrial revolution mechanical engineers developed machines to ease on the workforce. Electricity and computer science provided the gateway to something new – robotics! Automized machines capable of human activity. So current technology allows us to build machines that are capable of performing human-like actions. To do so, robots must have similar autonomy consisting moving parts that are electromechanically driven and a “brain” component to control them by following pre-determined instructions, or make them make up on its own!
                </p>
              </Section>

              {/* How to build */}
              <Section id="how-to-build" title="How to make a robotic arm" isEven={true}>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  In this project we will build the basis for an automated programmable robotic arm. We shall learn how to construct and control a 6 axis robot arm via a control interface from a computer, and write pre-determined instructions for it to follow and repeat. We will use servo motors to drive the parts and an Arduino UNO as our microcontroller that will control them while communicating with the PC via a USB cable.
                </p>
                <p className="text-gray-700 font-semibold mb-8 text-lg">
                  For this project please download our <a href="/Release.zip" download className="text-[#70CDE2] hover:text-blue-600 underline underline-offset-2">control software</a>.
                </p>

                {/* Robotic Arm Project Image */}
                <div className="rounded-xl overflow-hidden mt-8 mb-4 flex justify-center">
                  <img
                    src="/images/2021/01/robotic-arm-again-1.jpg"
                    alt="Robotic arm constructed"
                    className="max-w-full h-auto rounded-xl shadow-md border border-gray-100"
                  />
                </div>
              </Section>

              {/* Primary Parts */}
              <Section id="primary-parts" title="Primary parts for this project will be:" isEven={false}>
                <ul className="list-disc pl-5 space-y-4 text-lg text-gray-700">
                  <li>
                    <a className="text-[#70CDE2] hover:text-blue-600 transition-colors font-medium" href="https://www.amazon.com/gp/product/B01LW0LUPT?smid=A3F3CVCOVVNP2J&psc=1&linkCode=ll1&tag=roboticsand01-20&linkId=bb58cb8fd68b8531aa67ec61e8745dea&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer">
                      6DOV Aluminum Robot kit
                    </a>
                  </li>
                  <li>
                    <a className="text-[#70CDE2] hover:text-blue-600 transition-colors font-medium" href="https://www.amazon.com/Honbay-Aluminum-Standard-Airplane-Hop-up/dp/B09CT7QK6C?crid=3OOIJX1U4HOIF&keywords=Metal+Servo+Disc+25T+Horns+for+MG995+x6&qid=1695402392&sprefix=metal+servo+disc+25t+horns+for+mg995+x6%2Caps%2C254&sr=8-7&linkCode=ll1&tag=roboticsand01-20&linkId=3bb270dfd6e98a337cad2aa9f6c932b5&language=en_US&ref_=as_li_ss_tl" target="_blank" rel="noopener noreferrer">
                      Metal Servo Disc 25T Horns for MG995 x6
                    </a>
                  </li>
                  <li>
                    <a className="text-[#70CDE2] hover:text-blue-600 transition-colors font-medium" href="https://www.amazon.com/Hosyond-MG996R-Digital-Torque-Helicopter/dp/B0BYDJF3RC?crid=2BKF176W2TB6L&keywords=%5B2-Pack%5D%2BMG996R&qid=1695398456&linkCode=ll1&tag=roboticsand01-20" target="_blank" rel="noopener noreferrer">
                      DMS15-270 or MG996R Servo motor X6
                    </a>
                  </li>
                  <li>
                    <a className="text-[#70CDE2] hover:text-blue-600 transition-colors font-medium" href="https://www.amazon.com/dp/B0B3DMPMNQ" target="_blank" rel="noopener noreferrer">
                      Energy circuit (XL4015 DC-DC BUCK Converter)
                    </a>
                  </li>
                  <li>
                    <button 
                      onClick={() => setShowBrick(!showBrick)} 
                      className="text-[#70CDE2] hover:text-blue-600 transition-colors font-medium text-left"
                    >
                      Heavy base to keep the arm fixed and stable (I used a brick…)
                    </button>
                    {showBrick && (
                      <div className="mt-4 animate-fade-in-up">
                        <img 
                          src="/images/2023/03/WhatsApp-Image-2023-03-10-at-22.02.42.jpeg" 
                          alt="Brick serving as heavy base" 
                          className="max-w-md w-full h-auto rounded-xl shadow-md border border-gray-200"
                        />
                      </div>
                    )}
                  </li>
                  <li>
                    <a className="text-[#70CDE2] hover:text-blue-600 transition-colors font-medium" href="https://www.amazon.com/Arduino-A000066-ARDUINO-UNO-R3/dp/B008GRTSV6" target="_blank" rel="noopener noreferrer">
                      Arduino UNO
                    </a>
                  </li>
                  <li>
                    <a className="text-[#70CDE2] hover:text-blue-600 transition-colors font-medium" href="https://www.amazon.com/HiLetgo-Upgraded-Arduino-Sensor-Expansion/dp/B01MXRXCAW" target="_blank" rel="noopener noreferrer">
                      Arduino UNO shield
                    </a>
                  </li>
                  <li>
                    <a className="text-[#70CDE2] hover:text-blue-600 transition-colors font-medium" href="https://www.amazon.com/Zeee-Battery-5200mAh-Connector-Vehicles/dp/B0C5MDC8N6" target="_blank" rel="noopener noreferrer">
                      9-20V at 2A power source (recommended)
                    </a>
                  </li>
                </ul>
              </Section>

              {/* Programming Section */}
              <Section id="programming" title="Programming languages used in this project:" isEven={true}>
                <p className="text-gray-700 text-lg font-medium">
                  C (Arduino IDE)
                </p>
              </Section>

              {/* Hardware */}
              <Section id="hardware" title="Hardware" isEven={false}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Mechanics:</h3>
                
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Some 6DOV DIY robot arm kits come with all relevant parts included, while others don’t. In my case, I ordered the kit and then realized it did not include the motors and the disks. So I had to order them separately. However, the advantage of ordering the parts separately is the flexibility of choosing the motors that will be used in the project. So I chose the DMS15-270 motor which has a wide 270 degree range rather than the more common MG996R that reaches only about 120 degrees. This extended the flexibility and range of my robotic arm.
                  </p>
                  <p>
                    Assembling the arm should be done carefully and can take an hour or two. Fasten the bolts tightly to minimize dangling parts – but not too tight.
                  </p>
                  <p>
                    While assembling the motors, pay attention to the side that motors 1, 2 and 3 are facing. This will affect the direction the arm will move, since the spin of the motors is controlled by a Windows application. Also, if the 3-wire cable is not long enough to reach the ground when the arm is fully stretched, you will have to cut the cable and extend it with additional wires.
                  </p>
                  <p>
                    When assembled, install the arm on a fixed foundation. Because when it moves it has a strong impulse, the arm must be fixed to a stable platform to avoid falling over. I personally taped the base of the arm to a brick and it worked fine.
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden mt-10 mb-4 flex justify-center">
                  <img
                    src="/images/2021/01/Robotic-arm-with-servo-motor.jpeg"
                    alt="Robotic arm with servo motor detail"
                    className="max-w-full h-auto rounded-xl shadow-md border border-gray-100"
                  />
                </div>
              </Section>

              <Section id="electrics" title="Electrics" isEven={true}>
                <p className="text-gray-500 italic text-lg">[Content pending next steps]</p>
              </Section>

              <Section id="software" title="Software" isEven={false}>
                <p className="text-gray-500 italic text-lg">[Content pending next steps]</p>
              </Section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticArmPage;
