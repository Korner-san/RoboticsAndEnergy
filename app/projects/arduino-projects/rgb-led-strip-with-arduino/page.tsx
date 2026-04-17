'use client';

import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import CodeBlock from '@/components/CodeBlock';

const Snippet: React.FC<{ code: string }> = ({ code }) => (
  <div className="bg-[#f1f1f1] border border-gray-300 p-4 rounded-sm overflow-x-auto text-sm font-mono leading-relaxed shadow-inner my-4">
    <pre className="whitespace-pre">{code.trim()}</pre>
  </div>
);

const Section: React.FC<{
  title?: string;
  children: React.ReactNode;
  id?: string;
  isEven?: boolean;
}> = ({ title, children, id, isEven }) => (
  <section
    id={id}
    className={`py-12 px-6 md:px-10 ${isEven ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200/60`}
  >
    {title && <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>}
    {children}
  </section>
);

const MissingPart: React.FC<{ label: string }> = ({ label }) => (
  <div className="my-6 flex items-center justify-center rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 px-6 py-10 text-center">
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-500 mb-1">Missing</p>
      <p className="text-sm text-amber-700">{label}</p>
    </div>
  </div>
);

const arduinoCode = `// Arduino WebPage LED strip control server
// Author: Robotics & Energy
// April, 2023
#include <SPI.h>
#include <Ethernet.h>
#include <SD.h>
#define REQ_BUF_SZ 50

#define RED   3
#define GREEN 5
#define BLUE  6
#define PWR   2

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
#define IP IPAddress(192,168,0,12)

EthernetServer server(80);
File webFile;
char HTTP_req[REQ_BUF_SZ] = {0};
byte req_index = 0;
bool root = false;

void StrClear(char *str, char len)
{
    for (int i = 0; i < len; i++)
        str[i] = 0;
}

byte StrContains(char *str, char *sfind)
{
    #define LEN strlen(str)
    byte found = 0;
    byte index = 0;
    if (strlen(sfind) > LEN) return 0;
    while (index < LEN)
    {
        if (str[index] == sfind[found])
        {
            found++;
            if (strlen(sfind) == found) return index;
        }
        else found = 0;
        index++;
    }
    return 0;
}

void controlHandler(unsigned long int dataRGB) // dataRGB = VRRRGGGBBB
{
    byte P = (byte)((dataRGB / 1000000000)      );
    byte R = (byte)((dataRGB / 1000000)   % 1000);
    byte G = (byte)((dataRGB / 1000)      % 1000);
    byte B = (byte)((dataRGB)             % 1000);

    digitalWrite(PWR,  P);
    analogWrite(RED,   R);
    analogWrite(GREEN, G);
    analogWrite(BLUE,  B);
}

void setup()
{
    pinMode(13,    OUTPUT);
    pinMode(RED,   OUTPUT);
    pinMode(GREEN, OUTPUT);
    pinMode(BLUE,  OUTPUT);
    pinMode(PWR,   OUTPUT);
    digitalWrite(13,  LOW);
    digitalWrite(PWR, LOW);
    analogWrite(RED,   0);
    analogWrite(GREEN, 0);
    analogWrite(BLUE,  0);

    Serial.begin(230400);
    Serial.println("Initializing SD card...");
    if (!SD.begin(4))
    {
        Serial.println("ERROR - SD card initialization failed!");
        return;
    }
    Serial.println("SUCCESS - SD card initialized.");
    Ethernet.begin(mac, IP);
    server.begin();
}

void loop()
{
    EthernetClient client = server.available();
    if (client)
    {
        bool currentLineIsBlank = true;
        while (client.connected())
        {
            if (client.available())
            {
                char c = client.read();
                if (req_index < (REQ_BUF_SZ - 1))
                {
                    HTTP_req[req_index] = c;
                    req_index++;
                }
                Serial.print(c);
                if (c == '\\n' && currentLineIsBlank)
                {
                    if (root)
                    {
                        if (StrContains(HTTP_req, "GET / ") || StrContains(HTTP_req, "GET /login.htm"))
                        {
                            root = false;
                            client.println("HTTP/1.1 200 OK");
                            client.println("Content-Type: text/html");
                            client.println("Connnection: close");
                            client.println();
                            webFile = SD.open("login.htm");
                        }
                        else if (StrContains(HTTP_req, "control.htm"))
                        {
                            client.println("HTTP/1.1 200 OK");
                            client.println("Content-Type: text/html");
                            client.println("Connnection: close");
                            client.println();
                            webFile = SD.open("control.htm");
                        }
                        else if (StrContains(HTTP_req, "main.htm"))
                        {
                            client.println("HTTP/1.1 200 OK");
                            client.println("Content-Type: text/html");
                            client.println("Connnection: close");
                            client.println();
                            webFile = SD.open("main.htm");
                        }
                        else if (StrContains(HTTP_req, "elec.jpg"))
                        {
                            client.println("HTTP/1.1 200 OK");
                            client.println();
                            webFile = SD.open("elec.jpg");
                        }
                        else if (StrContains(HTTP_req, "style.css"))
                        {
                            client.println("HTTP/1.1 200 OK");
                            client.println("Content-Type: text/css");
                            client.println("Connnection: close");
                            client.println();
                            webFile = SD.open("style.css");
                        }
                        else if (StrContains(HTTP_req, "click?"))
                        {
                            client.println("HTTP/1.1 200 OK");
                            client.println();
                            unsigned long int result = 0;
                            sscanf(HTTP_req, "GET /click?=%lux HTTP/1.1", &result);
                            controlHandler(result);
                        }
                        else
                        {
                            client.println("HTTP/4.5 404 Not Found");
                            client.println("Content-Type: text/html");
                            client.println("Connnection: close");
                            client.println();
                            webFile = SD.open("404.htm");
                        }
                    }
                    else
                    {
                        if (StrContains(HTTP_req, "GET / ") || StrContains(HTTP_req, "GET /login.htm"))
                        {
                            client.println("HTTP/1.1 200 OK");
                            client.println("Content-Type: text/html");
                            client.println("Connnection: close");
                            client.println();
                            webFile = SD.open("login.htm");
                        }
                        else if (StrContains(HTTP_req, "user=root&pass=1234"))
                        {
                            root = true;
                            client.println("HTTP/1.1 200 OK");
                            client.println("Content-Type: text/html");
                            client.println("Connnection: close");
                            client.println();
                            webFile = SD.open("main.htm");
                        }
                        else if (StrContains(HTTP_req, "style.css"))
                        {
                            client.println("HTTP/1.1 200 OK");
                            client.println("Content-Type: text/css");
                            client.println("Connnection: close");
                            client.println();
                            webFile = SD.open("style.css");
                        }
                        else
                        {
                            client.println("HTTP/4.2 401 Unauthorized");
                            client.println("Content-Type: text/html");
                            client.println("Connnection: close");
                            client.println();
                            webFile = SD.open("401.htm");
                        }
                    }
                    if (webFile)
                    {
                        while (webFile.available())
                            client.write(webFile.read());
                        webFile.close();
                    }
                    req_index = 0;
                    StrClear(HTTP_req, REQ_BUF_SZ);
                    break;
                }
                if (c == '\\n')
                    currentLineIsBlank = true;
                else if (c != '\\r')
                    currentLineIsBlank = false;
            }
        }
        delay(1);
        client.stop();
    }
}`;

const RGBLEDStripPage: React.FC = () => (
  <div className="bg-gray-100 min-h-screen pb-12">
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <Breadcrumb crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Arduino Projects', href: '/projects/arduino-projects' },
        { label: 'RGB LED Strip with Arduino' },
      ]} />
    </div>

    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#70CDE2] mb-4">
          Web-Controlled RGB LED Strip: DIY Arduino Project
        </h1>
        <h2 className="text-2xl text-[#90dced] font-medium">
          Arduino remote control LED Strip via a web server — control LED strip with your phone or any device of your choice
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Sidebar TOC */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="sticky top-24 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              Table of Contents
            </h3>
            <ul className="space-y-3 text-[15px] font-medium text-[#70CDE2]">
              <li><a href="#what-will-we-learn" className="hover:text-blue-600 transition-colors">1. What will we learn</a></li>
              <li><a href="#primary-parts" className="hover:text-blue-600 transition-colors">2. Primary parts for this project</a></li>
              <li><a href="#hardware" className="hover:text-blue-600 transition-colors">3. Hardware</a></li>
              <li><a href="#software" className="hover:text-blue-600 transition-colors">4. Software</a></li>
              <li><a href="#thank-you" className="hover:text-blue-600 transition-colors">5. Thank you</a></li>
              <li>
                <a href="/projects/arduino-projects/arduino-web-server-led-control" className="hover:text-blue-600 transition-colors">
                  6. Arduino Web Server LED Control project
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl">
          <div className="rounded-2xl shadow-sm overflow-hidden border border-gray-100 bg-white">

            {/* Intro */}
            <Section isEven={false}>
              <img
                src="/images/2023/04/led-strip.jpg"
                alt="RGB LED strip controlled by Arduino"
                className="w-full rounded-xl mb-8 object-cover shadow-md"
              />
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Build an Arduino-controlled RGB LED strip accessible through a local network interface,
                allowing control from any smart device, including your phone. The project covers lighting
                effects, including customizable blinking and timing.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Upon completion, you&apos;ll have a fully operational web-controlled LED Strip lighting
                system to proudly share with friends and family.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                You can download the code of this project here. The code will be fully explained in
                the software section below.
              </p>
            </Section>

            {/* What will we learn */}
            <Section id="what-will-we-learn" title="What will we learn" isEven={true}>
              <p className="text-gray-700 leading-relaxed text-lg">
                In the Web-Controlled RGB LED Strip DIY project, you will learn how to use an Arduino
                and an Ethernet shield to create a small HTTP web server on your LAN that controls an
                RGB LED strip with an interactive web interface. You will also discover how to use the
                relay unit of the Arduino to enable a stronger voltage source to power up the RGB LED
                strip. Additionally, you will become familiar with JavaScript and HTML and use them to
                create the control interface for the LED strip.
              </p>
            </Section>

            {/* Primary Parts */}
            <Section id="primary-parts" title="Primary parts for this project will be:" isEven={false}>
              <ul className="list-disc pl-5 space-y-4 text-lg text-gray-700">
                {[
                  { label: 'Arduino UNO', href: 'https://www.amazon.com/Arduino-A000066-ARDUINO-UNO-R3/dp/B008GRTSV6' },
                  { label: 'Arduino Ethernet Shield', href: 'https://www.amazon.com/s?k=arduino+ethernet+shield' },
                  { label: 'RGB LED Strip', href: 'https://www.amazon.com/s?k=rgb+led+strip+12v' },
                  { label: 'Universal Electrical Enclosure Sealed box', href: 'https://www.amazon.com/s?k=electrical+enclosure+box' },
                  { label: '12V 1A AC/DC Power Adapter', href: 'https://www.amazon.com/s?k=12v+1a+power+adapter' },
                  { label: '220Ω Resistor x3', href: 'https://www.amazon.com/s?k=220+ohm+resistor' },
                  { label: 'Jumper Wires', href: 'https://www.amazon.com/s?k=jumper+wires+arduino' },
                  { label: 'SD card', href: 'https://www.amazon.com/s?k=sd+card+8gb' },
                  { label: 'Ethernet switch or modem (any router with WiFi and Ethernet ports will do)', href: 'https://www.amazon.com/s?k=tp-link+router' },
                  { label: 'Ethernet cables', href: 'https://www.amazon.com/s?k=ethernet+cable' },
                  { label: 'IRF540N Mosfet Transistor', href: 'https://www.amazon.com/s?k=IRF540N+mosfet' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      className="text-[#70CDE2] hover:text-blue-600 transition-colors font-medium"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Programming languages used:</h3>
              <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                <li>C (Arduino compatible)</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </Section>

            {/* Hardware */}
            <Section id="hardware" title="Hardware" isEven={true}>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  In terms of hardware the project is fairly simple. The Ethernet shield is applied
                  pin to pin directly on the UNO board. We need to connect the 4 wires of the LED
                  strip to the Arduino, however we cannot connect it directly to the GPIO pins because
                  they cannot supply enough current and voltage to the strip — the strip uses 12V and
                  up to 1A of current. Therefore we will use MOSFET transistors to transfer power from
                  the Arduino Vin pin which is connected to the 12V power jack.
                </p>
                <p>
                  The MOSFET transistors in this circuit will act like switches that are turned on and
                  off electrically, thousands of times a second. We control them via the Arduino GPIO
                  pins. In addition, we shall use PWM pins. When using PWM (Pulse Width Modulation) we
                  turn the transistor and the LEDs on and off a few thousand times a second while
                  controlling the width of the pulse — this allows us to control the brightness of the
                  LEDs on the strip.
                </p>
                <p>
                  First thing: put the Arduino Ethernet shield directly on the Arduino. Now we use the
                  GPIO of the Arduino via the Ethernet shield.
                </p>

                <MissingPart label="MOSFET wiring schematic — Arduino to LED strip via IRF540N transistors" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <img
                    src="/images/2023/09/web-led-strip-electronic_schem.jpg"
                    alt="LED strip electronic schematic"
                    className="w-full rounded-xl shadow-md border border-gray-100"
                  />
                  <img
                    src="/images/2023/10/correct-arduino-LED-strip.jpeg"
                    alt="Correct Arduino LED strip wiring"
                    className="w-full rounded-xl shadow-md border border-gray-100"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">Network Configuration</h3>
                <p>
                  We will need to program a web server on the Arduino and connect it to the network
                  using a Modem or a Router. I used a TP-Link TL-WR841N Router which supports Ethernet
                  connection and Wireless. Default IP: 192.168.0.1, User: admin, Password: admin.
                  Connect an Ethernet cable to the Shield&apos;s Ethernet port. A second cable can connect
                  to a PC, or use the wireless interface.
                </p>

                <img
                  src="/images/2023/08/web-led-strip_schematic.jpg"
                  alt="Web LED strip full schematic"
                  className="w-full rounded-xl shadow-md border border-gray-100 mt-4"
                />
              </div>
            </Section>

            {/* Software */}
            <Section id="software" title="Software" isEven={false}>
              <div className="space-y-10 text-lg text-gray-700 leading-relaxed">

                <div>
                  <p>
                    This project is an improvement of the previous LED control project. Most of this
                    project and its added value is the software and is the bigger challenge, as it is
                    in the industry of WEB development. We will cover the front end and the back end.
                    You will experience the glory of Full Stack WEB development. I&apos;m going to assume
                    that you are somewhat familiar with the programming languages we are going to use
                    and know the basics.
                  </p>
                  <p className="mt-4">
                    An Arduino is a microcontroller based development board programmable using the
                    ArduinoIDE. We need to turn this into a Server which will host connecting clients,
                    handle requests and upload the site&apos;s hyper text to the user&apos;s browser. The
                    Ethernet shield supports an SD card slot — we store the web files on it and load
                    them from there when needed.
                  </p>
                </div>

                <MissingPart label="Server algorithm flowchart" />

                {/* Files */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Programming the website files</h3>
                  <p className="mb-3">
                    Each page&apos;s code will be a different <code className="bg-gray-100 px-1 rounded text-sm">.htm</code> file.
                    We can edit them in any text editor e.g. Notepad++, or Visual Studio Code. We can
                    open them and run them directly in the browser to preview them.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-base">
                    <li><strong>login.htm</strong> — Login page</li>
                    <li><strong>main.htm</strong> — Menu page</li>
                    <li><strong>control.htm</strong> — LED control page UI</li>
                    <li><strong>404.htm</strong> — Page not found error</li>
                    <li><strong>401.htm</strong> — Unauthorized page if authentication failed</li>
                    <li><strong>style.css</strong> — Graphical design of the pages</li>
                    <li><strong>elec.jpg</strong> — Background image for the control page</li>
                  </ul>
                </div>

                {/* login.htm */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">login.htm</h3>
                  <Snippet code={`<!DOCTYPE HTML>
<html>
    <head>
        <script>
        </script>
    </head>
    <body>
    </body>
</html>`} />
                  <Snippet code={`<title>Login</title>
<link rel="stylesheet" href="style.css"/>`} />

                  <p className="mb-3">
                    The <code className="bg-gray-100 px-1 rounded text-sm">login()</code> function takes data
                    from <code className="bg-gray-100 px-1 rounded text-sm">#user</code> and{' '}
                    <code className="bg-gray-100 px-1 rounded text-sm">#pass</code> fields and sends it as an
                    HTTP request — e.g. <code className="bg-gray-100 px-1 rounded text-sm">user=user&amp;pass=1234</code>.
                    The <code className="bg-gray-100 px-1 rounded text-sm">timeFunction()</code> returns the local
                    system time.
                  </p>

                  <Snippet code={`<Script>
    function login()
    {
        const user = document.querySelector('#user');
        const pass = document.querySelector('#pass');
        const self = event.target;
        self.disabled = true;
        fetch(\`user=\${user.value}&pass=\${pass.value}\`).then(reply => {
            if (reply.status == 200)
            {
                window.location = 'main.htm';
            }
            else
            {
                pass.value = '';
            }
            self.disabled = false;
        }).catch(e => {
            self.disabled = false;
        })
    }

    function timeFunction()
    {
        var now = new Date();
        return now.toLocaleString();
    }
    setInterval("timeFunction()", 1000);
    var displayTime = timeFunction();
</Script>`} />

                  <Snippet code={`<h3>Time: <script>document.write(timeFunction());</script></h3>

<div class="login">
    <form>
        Username:<input type="text" id="user"/><br/>
        Password:<input type="password" id="pass"/><br/>
        <button onclick="login()">Login</button>
    </form>
</div>`} />

                  <MissingPart label="Login page screenshot" />

                  <p className="mb-3">CSS — please notice: class objects use a dot <code className="bg-gray-100 px-1 rounded text-sm">.</code> and id objects use a sharp <code className="bg-gray-100 px-1 rounded text-sm">#</code></p>
                  <Snippet code={`.login {
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 125px);
  border: 1px solid white;
  width: 250px;
  height: 80px;
  padding: 10px;
}

#btnSubmit {
  position: absolute;
  margin: 10px;
  left: 100px;
}`} />
                </div>

                {/* main.htm */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">main.htm</h3>
                  <p className="mb-3">
                    First make a <code className="bg-gray-100 px-1 rounded text-sm">.welcome</code> class in
                    style.css to position everything relative to the center of the screen — that way the
                    figure stays centered on different screen sizes.
                  </p>
                  <Snippet code={`.welcome {
  position: absolute;
  top: 35px;
  left: calc(50% - 100px);
}`} />
                  <p className="mb-3">
                    This page could potentially contain access to many other pages or databases in a
                    bigger scale project — like a smart house control with AC, power management, cameras,
                    etc. But in our case the code is short:
                  </p>
                  <Snippet code={`<!DOCTYPE HTML>
<html>
    <head>
        <title>Main page</title>
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <div class="welcome">
            <h1>Welcome root!</h1>
            |<a href="control.htm">Go to control page</a>|
            <a href="login.htm">Logout</a>|
        <div>
    </body>
</html>`} />
                  <p className="text-base">
                    The <code className="bg-gray-100 px-1 rounded text-sm">href</code> function will immediately
                    send a request to the server to load the given page.
                  </p>
                  <MissingPart label="Main menu page screenshot" />
                </div>

                {/* control.htm */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">control.htm</h3>
                  <p className="mb-3">CSS for the LED figure:</p>
                  <Snippet code={`.LED {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

/* LED head */
.sqr {
  box-shadow: inset 0 0 20px rgba(0,0,0,1), 0 0 30px 0 rgba(0,0,0,1);
  background-color: rgba(100, 100, 100, 1);
  width: 8em;
  height: 160px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

/* LED base ring */
.rctngl {
  box-shadow: inset 0 0 20px rgba(0,0,0,1), 0 0 30px 0 rgba(0,0,0,1);
  background-color: rgba(100, 100, 100, 1);
  width: 10em;
  height: 20px;
}

/* LED legs */
.ledleg {
  font-family: arial;
  background-color: #666666;
  box-shadow: -3px 2px 2px 2px rgba(0,0,0,0.5);
  width: 5%;
  height: 120px;
}

/* 12V leg is longer */
#power12 { height: 140px; }

.spaced-led-legs-container {
  margin-bottom: 3%;
  display: flex;
  justify-content: space-around;
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}`} />

                  <p className="mb-3">
                    <code className="bg-gray-100 px-1 rounded text-sm">display: flex</code> makes it a Flexible
                    Box Layout Module — easier to design flexible responsive layouts without using float
                    or positioning.
                  </p>

                  <p className="mb-3">HTML body with LED figure and checkboxes:</p>
                  <Snippet code={`<body>
    <div class="main-container">
        <h1>Control page</h1>
        <div class="LED">
            <div class="sqr"></div>
            <div class="rctngl"></div>
            <div class="spaced-led-legs-container">
                <div class="ledleg">R<input type="checkbox" name="Red" onClick="clickFunc()"></div>
                <div class="ledleg" id="power12">12V<input type="checkbox" name="Vin" onClick="clickFunc()"></div>
                <div class="ledleg">G<input type="checkbox" name="Green" onClick="clickFunc()"></div>
                <div class="ledleg">B<input type="checkbox" name="Blue" onClick="clickFunc()"></div>
            </div>`} />

                  <MissingPart label="LED control interface screenshot" />

                  <p className="mb-3">RGB sliders (vertical, 0–255 for each channel):</p>
                  <Snippet code={`<div class="slider-container">
     <input type="range" id="slideR" min="0" max="255" value="0" oninput="sliderValues()">
     <input type="range" id="slideG" min="0" max="255" value="0" oninput="sliderValues()">
     <input type="range" id="slideB" min="0" max="255" value="0" oninput="sliderValues()">
</div>`} />
                  <Snippet code={`.slider-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

input[type="range"] {
  width: 15%;
  cursor: pointer;
  appearance: slider-vertical;
  height: 150px;
}

input#slideR[type=range] { accent-color: Red; }
input#slideG[type=range] { accent-color: Green; }
input#slideB[type=range] { accent-color: Blue; }`} />
                  <p className="text-base mb-4">
                    <code className="bg-gray-100 px-1 rounded text-sm">accent-color:</code> will make the slider
                    fill the color as we move the cursor up.
                  </p>

                  <p className="mb-3">Pattern selector dropdown:</p>
                  <Snippet code={`<div class="pattern-selector-container">
    <p>Select Pattern</p>
    <select onchange="playPattern(this.value)">
        <option value="0">No Pattern</option>
        <option value="1">Blink</option>
        <option value="2">Flash</option>
        <option value="3">Sweep</option>
    </select>
</div>`} />
                  <Snippet code={`.pattern-selector-container {
  margin-top: 5%;
  transform: scale(2);
}`} />

                  <img
                    src="/images/2023/09/led-strip-control-dashboard.png"
                    alt="LED strip control dashboard"
                    className="w-full rounded-xl shadow-md border border-gray-100 my-4"
                  />
                  <img
                    src="/images/2023/09/controls-RGB.png"
                    alt="RGB controls interface"
                    className="w-full rounded-xl shadow-md border border-gray-100 my-4"
                  />

                  <p className="mb-3">Complete JavaScript for the control page:</p>
                  <Snippet code={`var output_var;          // RGB Value format: VRRRGGGBBB
var last_output;         // To prevent unnecessary traffic
var slRvalue;
var slGvalue;
var slBvalue;
let timerR, timerG, timerB;
var isPatterned = false;

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function rgb(r, g, b) { return "rgb(" + r + "," + g + "," + b + ")"; }

function checkboxOn(name) { return document.getElementsByName(name)[0].checked; }

function sliderValue(name) { return parseInt(document.getElementById(name).value); }

function sliderValues()
{
    if (!isPatterned) {
        slRvalue = sliderValue("slideR");
        slGvalue = sliderValue("slideG");
        slBvalue = sliderValue("slideB");
        clickFunc();
    }
}

function inputHandle()
{
    var valueR = 0, valueG = 0, valueB = 0;
    output_var = 0;
    if (checkboxOn("Vin"))
    {
        output_var += 1 * 1000000000;
        if (checkboxOn("Red"))   { output_var += slRvalue * 1000000; valueR = slRvalue; }
        if (checkboxOn("Green")) { output_var += slGvalue * 1000;    valueG = slGvalue; }
        if (checkboxOn("Blue"))  { output_var += slBvalue;           valueB = slBvalue; }
        if (valueR > 55 || valueG > 55 || valueB > 55)
            return rgb(valueR, valueG, valueB);
        else return rgb(100, 100, 100);
    }
    else return rgb(100, 100, 100);
}

function ledColor(color)
{
    var shade;
    if (color == rgb(100, 100, 100))
        shade = "inset 0 0 20px rgba(0,0,0,1), 0 0 30px 0 rgba(0,0,0,1)";
    else {
        shade = "inset 0 0 20px rgba(0,0,0,1), 0 0 150px 0 ";
        shade = shade.concat(color);
    }
    document.getElementsByClassName("sqr")[0].style.backgroundColor = color;
    document.getElementsByClassName("sqr")[0].style.boxShadow = shade;
    document.getElementsByClassName("rctngl")[0].style.backgroundColor = color;
    document.getElementsByClassName("rctngl")[0].style.boxShadow = shade;
}

function clickFunc()
{
    ledColor(inputHandle());
    if (output_var != last_output) {
        last_output = output_var;
        httpGet("click?=" + output_var.toString() + "x");
    }
}

function patternMode(mode, colorID, updown)
{
    if (mode == 1) // Blink
    {
        switch (colorID) {
            case "Red":   slRvalue = (updown == 100) ? 255 : 0; break;
            case "Green": slGvalue = (updown == 100) ? 255 : 0; break;
            case "Blue":  slBvalue = (updown == 100) ? 255 : 0; break;
        }
    }
    else if (mode == 2) // Flash
    {
        if (updown == 100 && checkboxOn(colorID)) {
            switch (colorID) {
                case "Red":   slRvalue=255; slGvalue=0;   slBvalue=0;   break;
                case "Green": slRvalue=0;   slGvalue=255; slBvalue=0;   break;
                case "Blue":  slRvalue=0;   slGvalue=0;   slBvalue=255; break;
            }
        }
    }
    else if (mode == 3) // Sweep
    {
        updown = Math.floor(updown * 2.5);
        switch (colorID) {
            case "Red":   slRvalue = updown; break;
            case "Green": slGvalue = updown; break;
            case "Blue":  slBvalue = updown; break;
        }
    }
    clickFunc();
}

function playPattern(patternId)
{
    var modeId = parseInt(patternId);
    var countR=0, countG=0, countB=0;
    var Rflag=false, Gflag=false, Bflag=false;
    clearTimeout(timerR);
    clearTimeout(timerG);
    clearTimeout(timerB);

    if (modeId == 0) { isPatterned = false; return; }
    isPatterned = true;

    timerR = setTimeout(function tick() {
        timerR = setTimeout(tick, (sliderValue("slideR") / 10) + 5);
        Rflag ? countR-- : countR++;
        if (countR == 100) Rflag = true;
        if (countR == 0)   Rflag = false;
        patternMode(modeId, "Red", countR);
    }, (sliderValue("slideR") / 10) + 5);

    timerG = setTimeout(function tick() {
        timerG = setTimeout(tick, (sliderValue("slideG") / 10) + 5);
        Gflag ? countG-- : countG++;
        if (countG == 100) Gflag = true;
        if (countG == 0)   Gflag = false;
        patternMode(modeId, "Green", countG);
    }, (sliderValue("slideG") / 10) + 5);

    timerB = setTimeout(function tick() {
        timerB = setTimeout(tick, (sliderValue("slideB") / 10) + 5);
        Bflag ? countB-- : countB++;
        if (countB == 100) Bflag = true;
        if (countB == 0)   Bflag = false;
        patternMode(modeId, "Blue", countB);
    }, (sliderValue("slideB") / 10) + 5);
}`} />
                </div>

                {/* Error pages */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Error Handling Pages</h3>
                  <p className="mb-3">401.htm:</p>
                  <Snippet code={`<!DOCTYPE HTML>
<head><title>401 Error</title></head>
<body><style>body{background-color: lightblue;}</style>
<h1>401: Authentication error.<br/>Are you authorized!?</h1>
</body>`} />
                  <p className="mb-3">404.htm:</p>
                  <Snippet code={`<!DOCTYPE HTML>
<head><title>404 Error</title></head>
<body><style>body{background-color: lightblue;}</style>
<h1>404 No such page.</h1>
</body>`} />
                  <div className="bg-blue-50 border-l-4 border-[#70CDE2] p-4 rounded-r-lg mt-4">
                    <p className="text-blue-800 font-medium text-base">
                      There is no need to edit the pages in CSS. That concludes our Website coding.
                      Save all files on the SD card and insert it into the Ethernet shield.
                    </p>
                  </div>
                </div>

              </div>
            </Section>

            {/* Arduino Server Code */}
            <Section id="server-code" title="Arduino Server Code" isEven={true}>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  The server is set up with a static IP (192.168.0.12) on port 80. The
                  <code className="bg-gray-100 px-1 rounded text-sm mx-1">controlHandler()</code> function
                  receives the RGB value as a single integer in the format{' '}
                  <code className="bg-gray-100 px-1 rounded text-sm">VRRRGGGBBB</code> (e.g.{' '}
                  <code className="bg-gray-100 px-1 rounded text-sm">1255255000</code> = power on, red 255,
                  green 255, blue 0).
                </p>
                <p>
                  Authentication: User <code className="bg-gray-100 px-1 rounded text-sm">root</code> / Password{' '}
                  <code className="bg-gray-100 px-1 rounded text-sm">1234</code>. The server responds with
                  200/401/404 as appropriate.
                </p>
                <CodeBlock code={arduinoCode} />
              </div>
            </Section>

            {/* Discussion CTA */}
            <Section id="discussion" isEven={true}>
              <div className="flex flex-col sm:flex-row items-center gap-5 bg-[#70CDE2]/10 rounded-xl p-6 border border-[#70CDE2]/30">
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Community Discussion</h3>
                  <p className="text-gray-600 text-base">Got questions, built this project, or want to help others? Join the conversation.</p>
                </div>
                <a href="/forum/rgb-led-strip-with-arduino" className="flex-shrink-0 px-6 py-3 bg-[#70CDE2] text-white font-bold rounded-xl hover:bg-blue-400 transition-colors shadow-sm text-sm">
                  💬 Join Discussion
                </a>
              </div>
            </Section>

            {/* Summary */}
            <Section id="summary" title="Summary" isEven={false}>
              <p className="text-gray-700 leading-relaxed text-lg">
                Through this project, we&apos;ve gained a hands-on understanding of creating a website and
                configuring a web server on an Arduino. We experienced the fundamentals of web
                development and the exciting world of IoT. Our exploration extended to include the
                integration of the MOSFET and the relay module to manage current and voltage according
                to each component&apos;s requirements. This project equips us with the basics to create more
                advanced and practical projects.
              </p>
            </Section>

            {/* Thank You + Form */}
            <Section id="thank-you" title="Thank you" isEven={true}>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                We thank you for learning and hopefully completing our project. We are looking forward
                to hearing from you in the comment section. Questions and constructive criticism are
                welcome.
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                We would like to know what you think about our Web-Controlled RGB LED Strip Arduino Project
              </h3>
              <form className="space-y-6 max-w-2xl bg-white p-8 rounded-xl shadow-sm border border-gray-100/60">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name / Nickname</label>
                  <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:border-[#70CDE2] outline-none transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email (optional)</label>
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:border-[#70CDE2] outline-none transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Did you complete the project?</label>
                  <div className="space-y-3">
                    {['yes', 'no'].map(val => (
                      <label key={val} className="flex items-center space-x-3 text-gray-600">
                        <input type="radio" name="completed" value={val} className="form-radio text-[#70CDE2]" />
                        <span>{val}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What did you think about our project?</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:border-[#70CDE2] outline-none transition-shadow resize-y" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What is your level of experience in completing Electronic Projects?</label>
                  <div className="space-y-3">
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

export default RGBLEDStripPage;
