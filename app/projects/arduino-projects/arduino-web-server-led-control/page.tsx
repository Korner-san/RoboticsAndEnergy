import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Arduino Web Server LED Control - Robotics and Energy',
  description: 'Create an HTTP web server on a local network to control RGB LEDs through a web interface with password protection using Arduino.',
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">{title}</h2>
    {children}
  </section>
);

const ArduinoWebServerPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Arduino Projects', href: '/projects/arduino-projects' },
      { label: 'Arduino Web Server LED Control' },
    ]} />

    <div className="container mx-auto px-4 pb-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-robotics-dark mb-4">
        Arduino Web Server LED Control
      </h1>
      <p className="text-gray-500 mb-8 text-sm">Programming languages: C, HTML, CSS, JavaScript</p>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <Section title="Introduction">
          <p className="text-gray-600 leading-relaxed mb-4">
            The Internet of Things is growing fast, with companies like Intel and Cisco developing
            internet-controlled devices. In this project, we create an HTTP web server on a local
            network that lets you control RGB LEDs through an interactive web page — complete with
            password protection.
          </p>
          <img
            src="https://roboticsandenergy.com/wp-content/uploads/2021/01/f-1.png"
            alt="Arduino LED control project"
            className="w-full rounded-lg my-4 object-cover"
          />
        </Section>

        <Section title="Hardware Components">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Component</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Quantity</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  ['Arduino UNO', '1'],
                  ['Ethernet Shield with SD card slot', '1'],
                  ['RGB LED (common collector)', '1'],
                  ['220Ω Resistors', '3'],
                  ['Breadboard', '1'],
                  ['Jumper cables', 'Several'],
                  ['SD card', '1'],
                  ['Ethernet router/modem', '1'],
                  ['Ethernet cable', '1'],
                ].map(([comp, qty]) => (
                  <tr key={comp} className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">{comp}</td>
                    <td className="p-3 border border-gray-200">{qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Hardware Setup">
          <p className="text-gray-600 leading-relaxed mb-4">
            Connect the RGB LED to the shield&apos;s pins 3, 5, and 6 through 220Ω resistors (one per
            color channel). The Ethernet shield stacks directly on top of the Arduino UNO. Connect
            the shield to your router via an Ethernet cable.
          </p>
          <div className="bg-blue-50 border-l-4 border-robotics-blue p-4 rounded-r-lg mb-4">
            <p className="text-sm text-blue-800 font-medium">Network Configuration</p>
            <p className="text-sm text-blue-700 mt-1">
              Set router IP to 192.168.0.1 with subnet 255.255.255.0. The Arduino server
              runs at <strong>192.168.0.12</strong> on port 80.
            </p>
          </div>
        </Section>

        <Section title="Software">
          <h3 className="text-lg font-semibold text-robotics-dark mb-2">Web Pages (stored on SD card)</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4 text-sm">
            <li><strong>login.htm</strong> — Authentication page with time display</li>
            <li><strong>main.htm</strong> — Menu/navigation after login</li>
            <li><strong>control.htm</strong> — LED color control interface with RGB checkboxes</li>
            <li><strong>style.css</strong> — Visual styling</li>
            <li><strong>401.htm / 404.htm</strong> — Error pages</li>
          </ul>
          <h3 className="text-lg font-semibold text-robotics-dark mb-2 mt-6">Arduino Server Code</h3>
          <p className="text-gray-600 text-sm mb-3">
            The server listens on port 80, checks credentials (username: &ldquo;root&rdquo;, password: &ldquo;1234&rdquo;),
            serves files from the SD card, and handles LED control commands.
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            <pre>{`#include <SPI.h>
#include <Ethernet.h>
#include <SD.h>

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
IPAddress ip(192, 168, 0, 12);
EthernetServer server(80);

void setup() {
  Ethernet.begin(mac, ip);
  SD.begin(4);
  server.begin();
}

void loop() {
  EthernetClient client = server.available();
  if (client) {
    // Read HTTP request and serve files from SD
    // Authenticate and handle LED control commands
    handleClient(client);
    client.stop();
  }
}`}</pre>
          </div>
        </Section>

        <Section title="Connection Instructions">
          <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm">
            <li>Power the Arduino via USB or DC jack</li>
            <li>The server activates immediately at IP 192.168.0.12</li>
            <li>Configure your router to 192.168.0.1 with subnet 255.255.255.0</li>
            <li>Connect an Ethernet cable from the Shield to the router</li>
            <li>Access from any device on the network by visiting http://192.168.0.12</li>
          </ol>
        </Section>

        <Section title="Conclusion">
          <p className="text-gray-600 leading-relaxed">
            Through this project you learn about IoT concepts, HTTP server implementation on
            embedded hardware, web development (HTML/CSS/JS), SD card file serving, and
            network-based LED control. These are fundamental skills for any IoT enthusiast.
          </p>
        </Section>
      </div>
    </div>
  </div>
);

export default ArduinoWebServerPage;
