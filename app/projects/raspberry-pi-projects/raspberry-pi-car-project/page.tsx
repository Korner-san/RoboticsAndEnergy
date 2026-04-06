import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Raspberry Pi Car Project - Robotics and Energy',
  description: 'Build a web-controlled Raspberry Pi car with camera streaming and motor control.',
};

const RaspberryPiCarPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Raspberry Pi Projects', href: '/projects/raspberry-pi-projects' },
      { label: 'Raspberry Pi Car Project' },
    ]} />

    <div className="container mx-auto px-4 pb-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-robotics-dark mb-4">
        Raspberry Pi Car Project
      </h1>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">Introduction</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Build a remote-controlled car using Raspberry Pi as the brain. The car can be controlled
            from any device on your network through a web interface. An optional camera module
            provides live streaming so you can see from the car&apos;s perspective.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">Components</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Component</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  ['Raspberry Pi (any model)', 'Main computer'],
                  ['L298N Motor Driver', 'Controls DC motors'],
                  ['2× DC Motors + Wheels', 'Locomotion'],
                  ['Chassis Kit', 'Car frame'],
                  ['LiPo Battery Pack', 'Portable power'],
                  ['Pi Camera Module (optional)', 'Live video streaming'],
                  ['WiFi Adapter / Built-in WiFi', 'Network control'],
                ].map(([comp, purpose]) => (
                  <tr key={comp} className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">{comp}</td>
                    <td className="p-3 border border-gray-200">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">How It Works</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Python Flask web server runs on the Raspberry Pi. The web interface sends HTTP
            requests for directional commands (forward, backward, left, right, stop). The Pi
            processes these and outputs PWM signals to the L298N motor driver.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">Summary</h2>
          <p className="text-gray-600 leading-relaxed">
            This project teaches Python web development, GPIO control, motor driver circuits,
            and network communication — all on the powerful Raspberry Pi platform.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default RaspberryPiCarPage;
