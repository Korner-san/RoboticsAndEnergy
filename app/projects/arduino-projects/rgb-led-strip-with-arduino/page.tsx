import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Web-Controlled RGB LED Light Strip - Robotics and Energy',
  description: 'Control an RGB LED strip from any device on your network using Arduino, Ethernet shield, and MOSFET transistors.',
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">{title}</h2>
    {children}
  </section>
);

const RGBLEDStripPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Arduino Projects', href: '/projects/arduino-projects' },
      { label: 'RGB LED Strip' },
    ]} />

    <div className="container mx-auto px-4 pb-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-robotics-dark mb-4">
        Web-Controlled RGB LED Light Strip: DIY Arduino Project
      </h1>
      <p className="text-gray-500 mb-4 text-sm">Programming languages: C, HTML, CSS, JavaScript</p>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Build an Arduino-controlled RGB LED strip accessible through your local network, allowing
        you to change colors and lighting effects from any smart device — including your phone.
      </p>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <Section title="What Will We Learn">
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
            <li>How to create an HTTP web server on Arduino</li>
            <li>Using MOSFET transistors as electronic switches</li>
            <li>PWM (Pulse Width Modulation) for brightness control</li>
            <li>Building a JavaScript/HTML web interface</li>
            <li>Storing web files on an SD card</li>
          </ul>
        </Section>

        <Section title="Parts List">
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
                  ['Arduino UNO', 'Main microcontroller'],
                  ['Ethernet Shield', 'Network connectivity & SD card'],
                  ['RGB LED Strip', 'The light output'],
                  ['MOSFET Transistors × 3', 'Power switching for each color channel'],
                  ['Sealed Electrical Enclosure', 'Housing the electronics'],
                  ['Power Adapter 12V 1A', 'LED strip power'],
                  ['Resistors & Jumper Wires', 'Circuit connections'],
                  ['SD Card', 'Web file storage'],
                  ['Ethernet Router/Modem', 'Local network'],
                ].map(([comp, purpose]) => (
                  <tr key={comp} className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">{comp}</td>
                    <td className="p-3 border border-gray-200">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Hardware">
          <p className="text-gray-600 leading-relaxed mb-4">
            MOSFET transistors act as electronic switches that control the 12V power to each RGB
            channel. The Arduino&apos;s PWM pins (3, 5, 6) connect to the MOSFET gates through the
            Ethernet shield. This allows full 0–255 brightness control on each channel.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The sealed enclosure houses the Ethernet shield + Arduino, while the LED strip attaches
            externally. A 12V adapter powers the LED strip; the Arduino is powered through USB or
            a separate supply.
          </p>
        </Section>

        <Section title="Web Interface">
          <p className="text-gray-600 leading-relaxed mb-4">
            The control page (<strong>control.htm</strong>) features:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm mb-4">
            <li>Three vertical sliders (0–255) for individual R, G, B control</li>
            <li>Pattern selector: No Pattern, Blink, Flash, Sweep</li>
            <li>Visual LED preview that updates in real-time</li>
            <li>JavaScript sends HTTP requests to the Arduino server on every change</li>
          </ul>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            <pre>{`// JavaScript: Send color values to Arduino
function updateColor() {
  var r = document.getElementById('redSlider').value;
  var g = document.getElementById('greenSlider').value;
  var b = document.getElementById('blueSlider').value;

  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/color?r=' + r + '&g=' + g + '&b=' + b, true);
  xhr.send();
}`}</pre>
          </div>
        </Section>

        <Section title="Conclusion">
          <p className="text-gray-600 leading-relaxed">
            This project combines IoT, web development, and power electronics. Once built, you can
            control your LED strip from anywhere on your home network — creating custom moods,
            animations, and patterns. The same principles apply to any web-controlled device.
          </p>
        </Section>
      </div>
    </div>
  </div>
);

export default RGBLEDStripPage;
