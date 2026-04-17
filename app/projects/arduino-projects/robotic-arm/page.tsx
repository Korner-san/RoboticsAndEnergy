'use client';

import React, { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import CodeBlock from '@/components/CodeBlock';
import SectionDiscussion from '@/components/SectionDiscussion';

const arduinoCode = `//Arduino Robotic Arm Control Spftware
//Robotocs & Energy
//March, 2020
#include <Servo.h>
#include <string.h>
Servo servo_0,servo_1,servo_2,servo_3,servo_4,servo_5;  // create servo objects to control a servo
String received = "";
String servo[6] = {"000", "000", "000", "000", "000", "000"};
int pos[6] = { 90, 120, 90, 120, 120, 0 };
int dump;
char c;
void dataHandle(String line)
{
  int servoNum;
  int lineIndex = 0;
  int valueIndex = 0;
  for(servoNum = 0; servoNum < 6; servoNum++)
  {
    while(line[lineIndex] != ' ' && line[lineIndex] != 'e')     
     {
      servo[servoNum][valueIndex] = line[lineIndex];
      valueIndex++;
      lineIndex++;
     }
     lineIndex++;
     pos[servoNum] = (servo[servoNum].toInt() / pow(10, 3 - valueIndex));
     valueIndex = 0;
  }
}
void armPosUpdate()
{
  servo_0.write(((float)180/270)*pos[0]);
  servo_1.write(((float)180/270)*pos[1]);
  servo_2.write(((float)180/270)*pos[2]);
  servo_3.write(((float)180/270)*pos[3]);
  servo_4.write(((float)180/270)*pos[4]);
  servo_5.write(((float)180/270)*pos[5]);
}
String readServoPositions()
{
  int i;
  String poses = "";
  pos[0] = ((float)servo_0.read()*1.5); //270/180 = 1.5
  pos[1] = ((float)servo_1.read()*1.5);
  pos[2] = ((float)servo_2.read()*1.5);
  pos[3] = ((float)servo_3.read()*1.5);
  pos[4] = ((float)servo_4.read()*1.5);
  pos[5] = ((float)servo_5.read()*1.5);
  for(i = 0; i<6; i++)
  {
    poses += String(String(pos[i]) + " ");
  }
  return poses;
}
void servoStatus()
{
  int i;
  for (i = 0; i < 6; i++) 
  {
    Serial.println(String("Servo " + String(i) + ": " + String(pos[i]) + '\\n'));
    delay(10);
  }
}
void setup() 
{
  pinMode(13, OUTPUT);
  digitalWrite(13, LOW);
  servo_0.attach(3);
  servo_1.attach(5);
  servo_2.attach(6); 
  servo_3.attach(9);
  servo_4.attach(10);
  servo_5.attach(11);
  armPosUpdate();
  Serial.begin(115200); 
  Serial.write("start");
}
void loop()
 {     
      if(Serial.available()>0)
       {
          delay(20);
          do
          {
            c = Serial.read();
            if (c == 'u') 
            {
              Serial.println(String("Update: " + readServoPositions()));
              delay(10);
              break;
            }
            else received += c;
          }
          while (c != 'e');
          while(Serial.available()>0) dump = Serial.read(); // dump buffer
          if(c != 'u' && received != "")
          {
            Serial.println(String("Received: " + received));
            dataHandle(received);     
            armPosUpdate();
            received = "";
          }
       }      
}`;

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
                <SectionDiscussion threadSlug="robotic-arm" sectionId="hardware" />
              </Section>

              <Section id="electrics" title="Electrics" isEven={true}>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    The circuit is fairly simple. No need for an engineering degree. Connect all of the servo motors to power in parallel. Brown wire is (-) and red wire is (+). The control wires which are colored orange or yellow go to the PWM pins of the Arduino. These are pins 3, 5, 6, 9, 10 and 11. I recommend using a shield compatible with all the I/O pins that provides parallel power lines to which you can solder regular pins. This way it is easier to connect the servos using their 3-pin female connectors.
                  </p>
                  <p>
                    Powering up the system from a USB cable is not enough. We’ll need an external power source. I’m using a 12V lithium battery connected to a DC-DC step down BUCK converter. We’ll need a module that is capable of supplying 4A peak current. The XL4015 based circuits are very efficient as they lower the voltage and raise the current to the load at a 90% efficient rate. Set the output voltage to 5.1V. Measure the voltage with a DMM if the board doesn’t have an on-built display.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-6">
                    <p className="text-red-800 font-medium m-0">
                      Do not use voltage regulators for this sake or in any project that requires voltage regulation at high currents, because basic zener voltage regulators like the LM7805 don’t generate current gain and therefore are very inefficient and will heat up quickly.
                    </p>
                  </div>
                  <p className="font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-6">
                    Refer to the schematic. Do not power up motors before uploading the software, because you still need to calibrate them to their default positions.
                  </p>

                  <div className="grid grid-cols-1 gap-8 mt-10 mb-8">
                    <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 flex justify-center bg-white p-2">
                      <img src="/images/2021/01/Robotic-arm-pdf.jpeg" alt="Robotic arm schematic" className="max-w-full h-auto rounded-lg" />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 flex justify-center bg-white p-2">
                      <img src="/images/2023/03/WhatsApp-Image-2023-03-10-at-22.52.55.jpeg" alt="XL4015 DC-DC converter setup" className="max-w-full h-auto rounded-lg" />
                    </div>
                  </div>

                  <p>
                    We want to build a programmable and controllable arm. For that we need an interface that shows all the controls. Programming the robot arm to run pre-built commands will also be available through the interface. The best way to maintain this requirement is via computer software. For this purpose we developed a .NET framework windows application which is available for download for free. It will communicate with the Arduino board via USB interface, whereas the Arduino will serve as a bridge between the PC and the motors.
                  </p>
                </div>
                <SectionDiscussion threadSlug="robotic-arm" sectionId="electrics" />
              </Section>

              <Section id="software" title="Software" isEven={false}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Calibration</h3>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Please watch the following video to know how to control and use the interface and calibrate the arm. Before watching the video and following the steps, Disengage the parts of the arm that are connected to the motors.
                  </p>
                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 shadow-sm text-center my-8">
                    <p className="mb-4 text-gray-800 font-medium">If you still didn’t download the zip file containing the control software you can download here:</p>
                    <a href="/Release.zip" download className="inline-block px-8 py-3 bg-[#70CDE2] text-white font-bold rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">Control software</a>
                  </div>

                  <div className="relative w-full aspect-video rounded-xl overflow-hidden my-10 shadow-lg">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/SXH7MUGvf7g" 
                      title="Calibration video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>

                  <p>
                    Release the 4 screws that are holding the servo disks of all motors. After uploading the code to the Arduino UNO board you can connect the motors and it will rotate them to their default positions. Run “Robot arm control” program, select the Serial PORT COM. See the video on how to calibrate the arm and then you can fasten all of the screws again after positioning the entire limb according to the video. After that, carefully try to move each motor a few degrees just to see if it’s moving the related part to the predicted direction. Make sure that the limits of the motors reach their physical boarders.
                  </p>

                  <div className="bg-gray-800 text-gray-100 p-6 rounded-xl shadow-inner my-8">
                    <h4 className="font-mono text-xl text-[#70CDE2] mb-6 text-center">The default positions of the arm at power-on are:</h4>
                    <ul className="font-mono space-y-2 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                      <li className="bg-gray-900 py-3 rounded-lg border border-gray-700">servo 0: <span className="text-green-400 font-bold ml-2">90</span></li>
                      <li className="bg-gray-900 py-3 rounded-lg border border-gray-700">servo 1: <span className="text-green-400 font-bold ml-2">120</span></li>
                      <li className="bg-gray-900 py-3 rounded-lg border border-gray-700">servo 2: <span className="text-green-400 font-bold ml-2">90</span></li>
                      <li className="bg-gray-900 py-3 rounded-lg border border-gray-700">servo 3: <span className="text-green-400 font-bold ml-2">120</span></li>
                      <li className="bg-gray-900 py-3 rounded-lg border border-gray-700">servo 4: <span className="text-green-400 font-bold ml-2">120</span></li>
                      <li className="bg-gray-900 py-3 rounded-lg border border-gray-700">servo 5: <span className="text-green-400 font-bold ml-2">0</span></li>
                    </ul>
                  </div>

                  <p>
                    The Arduino is used only to get USB frames sent from the PC an navigate the motors of that drive the arm accordingly. It will obey the following algorithm:
                  </p>

                  <div className="rounded-xl overflow-hidden mt-8 mb-4 flex justify-center shadow-lg border border-gray-100">
                    <img
                      src="/images/2021/01/Screenshot_1.jpg"
                      alt="Algorithm Flowchart"
                      className="max-w-full h-auto rounded-xl"
                    />
                  </div>

                  {/* CodeBlock inclusion */}
                  <CodeBlock code={arduinoCode} />
                </div>
                <SectionDiscussion threadSlug="robotic-arm" sectionId="software" />
              </Section>

              <Section id="summary" title="Summary" isEven={true}>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Building a robotic arm can be quite a challenge, because it requires proficiency in numerous engineering fields. Nevertheless, you are now able to build your own robot arm. Feel free to build a robotic arm of your own to further develop the both challenging and exciting field of robotics!
                </p>
              </Section>

<Section id="thank-you" title="Thank you" isEven={false}>
                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                  We thank you for learning and hopefully completing our project. We are looking forward to hear from you in the comment section. Questions and constractive critisizm is welcome.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  We would like to know what you think about our Robotic arm with Arduino project
                </h3>

                <form className="space-y-6 max-w-2xl bg-white p-8 rounded-xl shadow-sm border border-gray-100/60">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Name / Nickname</label>
                    <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:border-[#70CDE2] outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email ( optional )</label>
                    <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:border-[#70CDE2] outline-none transition-shadow" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Did you complete the project?</label>
                    <div className="space-y-4">
                      <label className="flex items-center space-x-3 text-gray-600">
                        <input type="radio" name="completed" value="yes" className="form-radio text-[#70CDE2]" />
                        <span>yes</span>
                      </label>
                      <label className="flex items-center space-x-3 text-gray-600">
                        <input type="radio" name="completed" value="no" className="form-radio text-[#70CDE2]" />
                        <span>no</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">What did you think about our project?</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:border-[#70CDE2] outline-none transition-shadow resize-y"></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">What is your level of experience in completing Electronic Projects?</label>
                    <div className="space-y-4">
                      {['Beginner', 'Intermediate', 'Advanced', 'Expert', 'God?'].map(level => (
                        <label key={level} className="flex items-center space-x-3 text-gray-600">
                          <input type="radio" name="experience" value={level} className="form-radio text-[#70CDE2]" />
                          <span>{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button type="button" className="w-full bg-black text-white py-4 rounded font-semibold hover:bg-gray-800 transition-colors shadow-md text-sm mt-4">
                    Submit
                  </button>
                </form>
              </Section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticArmPage;
