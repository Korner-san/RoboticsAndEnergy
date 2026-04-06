import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Wearable Epilepsy Detector - Robotics and Energy',
  description: 'A wearable Arduino-based device that detects epileptic seizures and sends alerts to caregivers.',
};

const WearableEpilepsyPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Arduino Projects', href: '/projects/arduino-projects' },
      { label: 'Wearable Epilepsy Detector' },
    ]} />

    <div className="container mx-auto px-4 pb-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-robotics-dark mb-4">
        Wearable Epilepsy Detector
      </h1>
      <p className="text-gray-500 mb-8 text-sm">Medical electronics project</p>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">Introduction</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Epilepsy affects millions of people worldwide. Seizures can occur suddenly and
            unexpectedly, creating dangerous situations. This project builds a wearable Arduino-based
            device that detects the characteristic motion patterns of epileptic seizures and
            immediately sends an alert to caregivers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">How It Works</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The device uses an accelerometer/gyroscope (MPU-6050) worn on the wrist to detect the
            repetitive, involuntary muscle movements characteristic of tonic-clonic seizures.
            When a seizure pattern is detected, the Arduino triggers an alert via buzzer and/or
            wireless communication module.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
            <li>Accelerometer detects high-frequency oscillatory motion</li>
            <li>Algorithm distinguishes seizure patterns from normal movement</li>
            <li>Alert sent via buzzer and optional WiFi/Bluetooth notification</li>
            <li>Battery-powered for portability</li>
          </ul>
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
                  ['Arduino Nano', 'Compact microcontroller for wearable'],
                  ['MPU-6050 (Accelerometer/Gyro)', 'Motion detection'],
                  ['Buzzer', 'Local alert'],
                  ['LiPo Battery + Charger', 'Portable power'],
                  ['Optional: ESP8266 WiFi Module', 'Remote notifications'],
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

        <section>
          <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">Summary</h2>
          <p className="text-gray-600 leading-relaxed">
            This project combines medical awareness with electronics engineering. It demonstrates
            sensor interfacing, signal processing, threshold detection, and alert systems —
            all on a compact wearable platform. The same approach can be extended for other health
            monitoring applications.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default WearableEpilepsyPage;
