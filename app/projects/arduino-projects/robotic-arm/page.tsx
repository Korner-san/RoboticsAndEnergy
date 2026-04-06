import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Robotic Arm with Arduino - Robotics and Energy',
  description: 'Build a 6-axis programmable robotic arm using Arduino UNO and servo motors. Complete guide with hardware, software, and code.',
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">{title}</h2>
    {children}
  </section>
);

const RoboticArmPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Arduino Projects', href: '/projects/arduino-projects' },
      { label: 'Robotic Arm' },
    ]} />

    <div className="container mx-auto px-4 pb-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-robotics-dark mb-4">
        Robotic Arm with Arduino
      </h1>
      <p className="text-gray-500 mb-8 text-sm">Last updated: 2021</p>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <Section title="Introduction">
          <p className="text-gray-600 leading-relaxed mb-4">
            Automation has been one of the most significant factors in industrial advancement.
            Robotic arms solve the problem of automating tasks that require high precision and
            repeatability. In this project, we build a 6-axis programmable robotic arm that is
            controlled via a computer interface using Arduino.
          </p>
          <div className="rounded-lg overflow-hidden my-4">
            <img
              src="https://roboticsandenergy.com/wp-content/uploads/2021/01/Real-robotic-arm-yay.jpg"
              alt="Completed robotic arm project"
              className="w-full object-cover"
            />
          </div>
        </Section>

        <Section title="Primary Parts List">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Component</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  ['6DOF Aluminum Robot Kit', '6-degree-of-freedom arm frame'],
                  ['Servo Motors × 6', 'DMS15-270 or MG996R'],
                  ['Metal Servo Discs', '25T horns for each joint'],
                  ['Power Supply', 'XL4015 DC-DC step-down converter'],
                  ['Arduino UNO + Shield', 'Microcontroller and servo shield'],
                  ['Stable Mounting Base', 'For secure operation'],
                  ['Power Source', '9-20V, 2A minimum'],
                ].map(([comp, detail]) => (
                  <tr key={comp} className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">{comp}</td>
                    <td className="p-3 border border-gray-200">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Hardware">
          <h3 className="text-lg font-semibold text-robotics-dark mb-2">Mechanics</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Carefully assemble the arm frame following the kit instructions. Pay attention to bolt
            tightening and proper motor orientation during assembly. If wires are too short, extend
            them as needed. Ensure all joints move freely without binding.
          </p>
          <h3 className="text-lg font-semibold text-robotics-dark mb-2">Electrics</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Connect each servo to the shield. Use an external power supply (12V lithium battery with
            step-down converter set to 5.1V) rather than the Arduino&apos;s built-in regulator to avoid
            overloading it. The circuit connects all 6 servos to the servo shield which plugs onto
            the Arduino UNO.
          </p>
        </Section>

        <Section title="Software">
          <h3 className="text-lg font-semibold text-robotics-dark mb-2">Calibration</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Download the control software and follow the calibration video. Release servo discs and
            set each servo to its default position before reattaching the arm segments. Default
            positions range from 0–120 degrees depending on the joint.
          </p>
          <h3 className="text-lg font-semibold text-robotics-dark mb-2">Arduino Code</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Arduino code receives serial commands from the PC control software, updates servo
            positions, and reports status back. Key functions include servo initialization, serial
            data handling, and position updates.
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            <pre>{`#include <Servo.h>

Servo servo[6];
int pins[] = {3, 5, 6, 9, 10, 11};

void setup() {
  Serial.begin(9600);
  for (int i = 0; i < 6; i++) {
    servo[i].attach(pins[i]);
    servo[i].write(90); // default position
  }
}

void loop() {
  if (Serial.available() > 0) {
    // Read and parse position commands
    String cmd = Serial.readStringUntil('\n');
    // Parse: "servo_index:angle"
    int idx = cmd.indexOf(':');
    if (idx > 0) {
      int s = cmd.substring(0, idx).toInt();
      int angle = cmd.substring(idx + 1).toInt();
      if (s >= 0 && s < 6 && angle >= 0 && angle <= 180) {
        servo[s].write(angle);
      }
    }
  }
}`}</pre>
          </div>
        </Section>

        <Section title="Summary">
          <p className="text-gray-600 leading-relaxed">
            This project provides a comprehensive introduction to robotic arm mechanics, servo motor
            control, and computer-to-Arduino serial communication. Once built, the arm can be
            programmed to perform a variety of automated tasks with impressive precision.
          </p>
        </Section>
      </div>
    </div>
  </div>
);

export default RoboticArmPage;
