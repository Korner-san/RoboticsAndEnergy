'use client';

import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import CodeBlock from '@/components/CodeBlock';
import SectionDiscussion from '@/components/SectionDiscussion';

// ── inline code snippet block (for HTML/CSS/JS snippets, not Arduino uploads) ──
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

// ── full Arduino server code (original) ──
const arduinoCode = `//Arduino WebPage circuit control 2018
//Author: Dirty Dail

#include <SPI.h>
#include <Ethernet.h>
#include <SD.h>

#define REQ_BUF_SZ 40 // size of buffer used to capture HTTP requests

byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
#define IP IPAddress(192,168,0,12)

EthernetServer server(80);        // create a server at port 80
File webFile;                     // handle to files on SD card
char HTTP_req[REQ_BUF_SZ] = {0}; // buffered HTTP request stored as null terminated string
byte req_index = 0;               // index into HTTP_req buffer
bool root = false;                // login indicator

//RGB LED Pins
#define RED   3
#define GREEN 5
#define BLUE  6
#define PWR   2

#define SENSOR A0

// sets every element of str to 0 (clears array)
void StrClear(char *str, char len)
{
    for (int i = 0; i < len; i++)
        str[i] = 0;
}

// searches for the string sfind in the string str
// returns index if found, 0 if not found
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

void controlHandler(byte output) // byte = 00001111 (0000rgbv)
{
    digitalWrite(PWR,   output % 2);
    digitalWrite(BLUE,  (output / 2) % 2);
    digitalWrite(GREEN, (output / 4) % 2);
    digitalWrite(RED,   (output / 8) % 2);
}

void setup()
{
    pinMode(RED,   OUTPUT);
    pinMode(GREEN, OUTPUT);
    pinMode(BLUE,  OUTPUT);
    pinMode(PWR,   OUTPUT);
    digitalWrite(PWR,   LOW);
    digitalWrite(RED,   HIGH);
    digitalWrite(GREEN, HIGH);
    digitalWrite(BLUE,  HIGH);

    Serial.begin(9600);
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
                    if (root) // client authorized?
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
                            byte i = StrContains(HTTP_req, "click?") + 2;
                            byte result = 0;
                            byte dig = 0;
                            for (; HTTP_req[i] != 'x'; i++)
                            {
                                dig++;
                                if (dig >= 2) result *= 10;
                                result += (HTTP_req[i] - '0');
                            }
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

const ArduinoWebServerPage: React.FC = () => (
  <div className="bg-gray-100 min-h-screen pb-12">
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <Breadcrumb crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Arduino Projects', href: '/projects/arduino-projects' },
        { label: 'Arduino Web Server LED Control' },
      ]} />
    </div>

    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#70CDE2] mb-4">
          Arduino Web Server LED Control project
        </h1>
        <h2 className="text-2xl text-[#90dced] font-medium">
          DIY tutorial — Arduino remote control LED via a web server
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
              <li><a href="#what-will-we-learn" className="hover:text-blue-600 transition-colors">1. What will we learn</a></li>
              <li><a href="#primary-parts" className="hover:text-blue-600 transition-colors">2. Primary parts for this project</a></li>
              <li><a href="#hardware" className="hover:text-blue-600 transition-colors">3. Hardware</a></li>
              <li><a href="#software" className="hover:text-blue-600 transition-colors">4. Software</a></li>
              <li><a href="#thank-you" className="hover:text-blue-600 transition-colors">5. Thank you</a></li>
              <li>
                <a href="/projects/arduino-projects/rgb-led-strip-with-arduino" className="hover:text-blue-600 transition-colors">
                  6. Control RGB LED Light Strip project
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
              {/* Promo box */}
              <a
                href="/projects/arduino-projects/rgb-led-strip-with-arduino"
                className="block mb-8 rounded-xl border border-[#70CDE2] bg-blue-50 p-4 text-center hover:bg-blue-100 transition-colors"
              >
                <p className="text-[#70CDE2] font-semibold">
                  Our Arduino remote controlled LED LIGHT STRIP project is now ready 👇
                </p>
              </a>

              <img
                src="/images/arduino-web-server-project-real.jpg"
                alt="Arduino web server LED control project"
                className="w-full rounded-xl mb-8 object-cover shadow-md"
              />

              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Web development is one of the most advancing fields in modern technology. Companies like
                Intel and Cisco are developing internet-controlled devices that can be managed via web
                interfaces accessible through local area networks.
              </p>
            </Section>

            {/* What will we learn */}
            <Section id="what-will-we-learn" title="What will we learn" isEven={true}>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  In the Arduino web server LED control project we will use an Arduino and an Ethernet
                  shield and we will create a small http web server, like a website, on our LAN which
                  will control an RGB LED with an interactive web interface.
                </p>
                <p>
                  The website will also be password protected, since cyber security is crucial in the
                  world of control over network. This small but a bit complicated project will be your
                  key entering the world of IoT, WEB development and Networking. From there the
                  possibilities are endless!
                </p>
                <p>
                  You can download the code of this project here. The code will be fully explained in
                  the software section below.
                </p>
              </div>
            </Section>

            {/* Primary Parts */}
            <Section id="primary-parts" title="Primary parts for this project will be:" isEven={false}>
              <ul className="list-disc pl-5 space-y-4 text-lg text-gray-700">
                {[
                  { label: 'Arduino UNO', href: 'https://www.amazon.com/Arduino-A000066-ARDUINO-UNO-R3/dp/B008GRTSV6' },
                  { label: 'Arduino Ethernet Shield', href: 'https://www.amazon.com/s?k=arduino+ethernet+shield' },
                  { label: 'RGB common collector LED', href: 'https://www.amazon.com/s?k=rgb+common+collector+led' },
                  { label: '220Ω Resistor x3', href: 'https://www.amazon.com/s?k=220+ohm+resistor' },
                  { label: 'Breadboard', href: 'https://www.amazon.com/s?k=breadboard' },
                  { label: 'Jumper cables', href: 'https://www.amazon.com/s?k=jumper+cables+arduino' },
                  { label: 'SD card', href: 'https://www.amazon.com/s?k=sd+card+8gb' },
                  { label: 'Ethernet switch or modem (e.g. TP-Link TL-WR841N)', href: 'https://www.amazon.com/s?k=tp-link+router' },
                  { label: 'Ethernet cables', href: 'https://www.amazon.com/s?k=ethernet+cable' },
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
                  In terms of hardware the project is not very complicated. There is no need for
                  previous electronics experience as far as I&apos;m concerned. The Ethernet shield is
                  applied pin to pin directly on the UNO board.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">LED Assembly</h3>
                <p>
                  Assemble the LED on the breadboard, it has 4 pins. Let&apos;s call them 1, 2, 3, 4.
                  Put 3 x 220 Ohm resistors in series with pins 1, 3 and 4. Connect pin 1 (Red) of
                  the LED to pin 3 on the Shield through the resistor, pin 2 (Vcc) to pin 2 directly,
                  pin 3 (Green) to pin 5 through a resistor and pin 4 (Blue) to pin 6 through a
                  resistor.
                </p>
                <p>
                  Since the LED in my case is a Common Collector we would need to apply ground to the
                  pins to turn on colors.
                </p>

                <MissingPart label="RGB LED pinout schematic (312×375)" />

                <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">Network Configuration</h3>
                <p>
                  To operate we will need to program a web server on the Arduino and connect it to the
                  network using a Modem or a Router. I used a TP-Link TL-WR841N Router which supports
                  Ethernet connection and Wireless, for which the default IP is 192.168.0.1 and the
                  login details are User: admin / Password: admin. Connect an Ethernet cable to the
                  Shield&apos;s Ethernet port and plug it to the Router. A second cable can connect to a PC,
                  or you can use the wireless interface.
                </p>

                <MissingPart label="Full wiring diagram — Arduino + Ethernet shield + RGB LED (694×822)" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <img
                    src="/images/2023/09/Arduino-Ethernet-Shield.png"
                    alt="Arduino Ethernet Shield"
                    className="w-full rounded-xl shadow-md border border-gray-100"
                  />
                  <img
                    src="/images/2023/09/Arduino-Ethernet-Shield-1.png"
                    alt="Arduino Ethernet Shield side view"
                    className="w-full rounded-xl shadow-md border border-gray-100"
                  />
                </div>
              </div>
              <SectionDiscussion threadSlug="arduino-web-server-led-control" sectionId="hardware" />
            </Section>

            {/* Software */}
            <Section id="software" title="Software" isEven={false}>
              <div className="space-y-10 text-lg text-gray-700 leading-relaxed">

                <div>
                  <p>
                    Most of this project and its added value is the software and is the bigger
                    challenge, as it is in the industry of WEB development. We will go through the
                    full design and development of the web pages and the server and the benefits of
                    the use of various programming languages C, JavaScript, HTML and CSS which
                    developers use in the industry. I&apos;m going to assume that you are somewhat familiar
                    with the programming languages we are going to use and know the basics.
                  </p>
                  <p className="mt-4">
                    The Arduino is a microcontroller based development board which is programmable
                    using the ArduinoIDE. We need to turn this into a Server which will host
                    connecting clients, handle requests and upload the site&apos;s hyper text to the
                    user&apos;s browser to display.
                  </p>
                  <p className="mt-4">
                    We can use the <code className="bg-gray-100 px-1 rounded text-sm">println()</code> function
                    to transmit the entire code of the site, however this is very much memory consuming
                    so we prefer to minimize the use of that and store the web code in files instead.
                    Fortunately the Ethernet shield we are using supports an SD card slot and we can
                    store the files on it and load them from there when needed.
                  </p>
                </div>

                {/* Files overview */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Programming the website files</h3>
                  <p>
                    We will start programming the files that will be stored on the SD card — all the
                    web pages. Each page&apos;s code will be a different file ending with <code className="bg-gray-100 px-1 rounded text-sm">.htm</code> extension.
                    In addition, there will be a CSS file where we&apos;ll design all the graphics of the
                    site including the flashing RGB LED. We can edit them in any text editor e.g.
                    Notepad++. We do not need to activate the Arduino yet — we may open them and run
                    them directly in the browser.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mt-4 text-base">
                    <li><strong>login.htm</strong> — Login page</li>
                    <li><strong>main.htm</strong> — Menu page</li>
                    <li><strong>control.htm</strong> — LED control page UI</li>
                    <li><strong>404.htm</strong> — Page not found error if the user typed something wrong in the URL</li>
                    <li><strong>401.htm</strong> — Unauthorized page if authentication failed</li>
                    <li><strong>style.css</strong> — Graphical design of the pages</li>
                    <li><strong>elec.jpg</strong> — A background image for the control page</li>
                  </ul>
                </div>

                {/* login.htm */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">login.htm</h3>
                  <p className="mb-3">Start with the basic HTML structure:</p>
                  <Snippet code={`<!DOCTYPE HTML>
<html>
  <head>
  </head>
  <body>
  </body>
</html>`} />

                  <p className="mb-3">Add title and stylesheet link inside the head:</p>
                  <Snippet code={`<title>Login</title>
<link rel="stylesheet" href="style.css"/>`} />

                  <p className="mb-3">
                    Add the JavaScript between <code className="bg-gray-100 px-1 rounded text-sm">&lt;script&gt;</code> tags.
                    The <code className="bg-gray-100 px-1 rounded text-sm">login()</code> function takes data written
                    in the <code className="bg-gray-100 px-1 rounded text-sm">#user</code> and{' '}
                    <code className="bg-gray-100 px-1 rounded text-sm">#pass</code> fields and sends it to the server
                    as an HTTP request. For instance if we write &ldquo;user&rdquo; / &ldquo;1234&rdquo; the request
                    will be a string: <code className="bg-gray-100 px-1 rounded text-sm">user=user&amp;pass=1234</code>.
                    The <code className="bg-gray-100 px-1 rounded text-sm">timeFunction()</code> requests and returns
                    the local time of the system.
                  </p>
                  <Snippet code={`<Script>
  function login()
  {
    const user = document.querySelector('#user')
    const pass = document.querySelector('#pass')
    const self = event.target
    self.disabled = true;
    fetch(\`user=\${user.value}&pass=\${pass.value}\`).then(r => {
      if (r.status == 200) {
        window.location = 'main.htm'
      } else {
        pass.value = ''
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

                  <p className="mb-3">Display the time in the body:</p>
                  <Snippet code={`<h3>Time: <script>document.write(timeFunction());</script></h3>`} />

                  <p className="mb-3">Complete body with the login form:</p>
                  <Snippet code={`<body>
  <h3>Time: <script>document.write(timeFunction());</script></h3>

  <div class="login">
    <form class="loginForm">
      Username: <input type="text" id="user"/><br/>
      Password: <input type="password" id="pass"/><br/>
      <button onclick="login()">Login</button>
    </form>
  </div>
</body>`} />

                  <MissingPart label="Login page screenshot (1024×773)" />

                  <p className="mb-3">CSS for the login container in style.css:</p>
                  <Snippet code={`.login
{
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 125px);
  border: 1px solid white;
  width: 250px;
  height: 80px;
  padding: 10px;
}`} />
                </div>

                {/* main.htm */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">main.htm</h3>
                  <p className="mb-3">
                    If authentication succeeds the server loads the menu page. There will be just two
                    options: continue to the control page or logout. This page may potentially contain
                    access to many other pages or databases in a larger project.
                  </p>
                  <Snippet code={`<!DOCTYPE HTML>
<html>
<head>
  <title>Main page</title>
  <link rel="stylesheet" href="style.css"/>
</head>
<body>
  <div id="welcome">
    <h1>Welcome root!</h1>
    |<a href="control.htm">Go to control page</a>|
    <a href="login.htm">Logout</a>|
  </div>
</body>
</html>`} />
                  <MissingPart label="Main menu page screenshot (406×286)" />
                </div>

                {/* control.htm */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">control.htm</h3>
                  <p className="mb-3">
                    Control.htm will be the page used to control the colors of the LED. We&apos;ll build
                    a realistic LED illustration using CSS shapes and box shadows, with checkboxes for
                    each color channel.
                  </p>

                  <p className="mb-3">CSS for the welcome container and LED shape:</p>
                  <Snippet code={`#welcome
{
  position: absolute;
  left: calc(45% - 50px);
}

.LED
{
  position: absolute;
  width: 230px;
  height: 400px;
  top: 250px;
  left: 0px;
}

/* LED head — square with rounded top */
.sqr
{
  box-shadow: inset 0 0 20px rgba(0,0,0,1),
              0 0 30px 0 rgba(0,0,0,1);
  position: absolute;
  background-color: darkgrey;
  width: 160px;
  height: 180px;
  border-top-left-radius: 80px;
  border-top-right-radius: 80px;
  top: 10px;
  left: 20px;
}

/* LED base — rectangle */
.rctngl
{
  box-shadow: inset 0 0 20px rgba(0,0,0,1),
              0 0 30px 0 rgba(0,0,0,1);
  position: absolute;
  background-color: darkgrey;
  width: 200px;
  height: 20px;
  top: 180px;
  left: 10px;
}

/* LED legs */
.leagR { position:absolute; background-color:#666666; box-shadow:-3px 2px 2px 2px rgba(0,0,0,0.5); width:8px; height:120px; top:200px; left:162px; }
.leagG { position:absolute; background-color:#666666; box-shadow:-3px 2px 2px 2px rgba(0,0,0,0.5); width:8px; height:120px; top:200px; left:118px; }
.leag5 { position:absolute; background-color:#666666; box-shadow:-3px 2px 2px 2px rgba(0,0,0,0.5); width:8px; height:150px; top:200px; left:74px; }
.leagB { position:absolute; background-color:#666666; box-shadow:-3px 2px 2px 2px rgba(0,0,0,0.5); width:8px; height:120px; top:200px; left:30px; }`} />

                  <p className="mb-3">HTML body with the LED figure and checkboxes:</p>
                  <Snippet code={`<body>
<div id="welcome">
  <h1>Control page</h1>
  <div>
  <div class="LED">
    <div class="sqr"></div>
    <div class="rctngl"></div>
    <div class="leagR">B<input type="checkbox" name="Bin" onClick="clickFunc()"></div>
    <div class="leagG">G<input type="checkbox" name="Gin" onClick="clickFunc()"></div>
    <div class="leag5">5V<input type="checkbox" name="Vin" onClick="clickFunc()"></div>
    <div class="leagB">R<input type="checkbox" name="Rin" onClick="clickFunc()"></div>
  </div>
</div>
</body>`} />

                  <MissingPart label="LED control interface screenshot (758×675)" />

                  <p className="mb-4">
                    The <code className="bg-gray-100 px-1 rounded text-sm">onClick=&quot;clickFunc()&quot;</code> calls{' '}
                    <code className="bg-gray-100 px-1 rounded text-sm">inputHandle()</code> which collects checkbox
                    states and outputs the RGB color code. The value is stored in the global variable{' '}
                    <code className="bg-gray-100 px-1 rounded text-sm">output</code> and transmitted to the server
                    as e.g. <code className="bg-gray-100 px-1 rounded text-sm">click?=0101x</code> — where the
                    binary digits represent the RGB and power pins. Then{' '}
                    <code className="bg-gray-100 px-1 rounded text-sm">ledColor()</code> paints the on-screen LED
                    accordingly.
                  </p>

                  <p className="mb-3">Complete JavaScript:</p>
                  <Snippet code={`<script>
  var output = 14; // 1110 (rgbv) — initiate when all is off

  function httpGet(theUrl)
  {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  function rgb(r, g, b)
  {
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  function inputHandle()
  {
    var valueR = 0, valueG = 0, valueB = 0;
    output = 14; // 1110
    if (document.getElementsByName("Vin")[0].checked)
    {
      output += 1;
      if (document.getElementsByName("Rin")[0].checked) { output -= 8; valueR = 255; }
      if (document.getElementsByName("Gin")[0].checked) { output -= 4; valueG = 255; }
      if (document.getElementsByName("Bin")[0].checked) { output -= 2; valueB = 255; }
      if (valueR || valueG || valueB) return rgb(valueR, valueG, valueB);
      else return "darkgrey";
    }
    else return "darkgrey";
  }

  function ledColor(color)
  {
    var shade;
    if (color == "darkgrey")
      shade = "inset 0 0 20px rgba(0,0,0,1), 0 0 30px 0 rgba(0,0,0,1)";
    else
    {
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
    httpGet("click?=" + output.toString() + "x");
  }
</script>`} />
                </div>

                {/* Error pages */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Error Handler</h3>
                  <p className="mb-4">
                    Every web server needs to handle errors. Here we expect two types:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 mb-6 text-base">
                    <li><strong>401</strong> — Authentication fail (wrong password)</li>
                    <li><strong>404</strong> — Page not found (user entered a bad URL)</li>
                  </ul>

                  <p className="mb-3">401.htm:</p>
                  <Snippet code={`<!DOCTYPE HTML>
<head><title>401 Error</title></head>
<body>
  <style>body{ background-color: lightblue; }</style>
  <h1>401: Authentication error.<br/>Are you authorized!?</h1>
</body>`} />

                  <p className="mb-3">404.htm handles invalid URL paths entered by the user.</p>

                  <div className="bg-blue-50 border-l-4 border-[#70CDE2] p-4 rounded-r-lg">
                    <p className="text-blue-800 font-medium text-base">
                      That concludes the website design. Save all of the files on the SD card and
                      insert it into the Ethernet shield.
                    </p>
                  </div>
                </div>

              </div>
              <SectionDiscussion threadSlug="arduino-web-server-led-control" sectionId="software" />
            </Section>

            {/* Server / Arduino Code */}
            <Section id="server-code" title="Arduino Server" isEven={true}>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  We will program the Arduino to serve as a web server that will host the website
                  saved on the SD card. The Arduino should run the following algorithm:
                </p>

                <MissingPart label="Server algorithm flowchart (673×945)" />

                <p>Include the required libraries:</p>
                <Snippet code={`#include <SPI.h>
#include <Ethernet.h>
#include <SD.h>`} />

                <p>Set the MAC address, IP and port:</p>
                <Snippet code={`byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
#define IP IPAddress(192,168,0,12)
EthernetServer server(80);`} />

                <p>
                  In the setup we initialize the SD card with <code className="bg-gray-100 px-1 rounded text-sm">SD.begin()</code> —
                  it should return TRUE. To start the server we use{' '}
                  <code className="bg-gray-100 px-1 rounded text-sm">Ethernet.begin()</code> with our IP and MAC of
                  choice and then enter the loop. In the loop we await a connection request. If so,
                  we check that the client sends appropriate HTTP packets and load the suited page or
                  action — whether it&apos;s a login page or an LED output update.
                </p>
                <p>
                  If the client pressed the login button the server expects the HTTP request{' '}
                  <code className="bg-gray-100 px-1 rounded text-sm">user=root&amp;pass=1234</code>. Otherwise the
                  server responds with 401. It is important for the server to respond to every request
                  with the appropriate response code — 200 for accepted, plus the content type.
                </p>

                <CodeBlock code={arduinoCode} />
              </div>
            </Section>

            {/* Running the server */}
            <Section id="running" title="Running the server and logging to the website" isEven={false}>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  The project is ready. To connect to the server, power up the Arduino using a USB
                  or a DC power jack. Once powered on the server is up immediately at IP{' '}
                  <code className="bg-gray-100 px-1 rounded text-sm">192.168.0.12</code>.
                </p>
                <p>
                  To connect to the website establish a local area network. Use a modem or router
                  and configure its IP to 192.168.0.1, Subnet Mask: 255.255.255.0. Use an Ethernet
                  cable to connect the Ethernet shield to the router. Connect a PC to another port
                  of the router or enable WiFi on the router and use any device to connect to it.
                </p>
                <p>
                  Now that we are connected to the same network, open a web browser and in the URL
                  enter <code className="bg-gray-100 px-1 rounded text-sm">http://192.168.0.12</code>. The login
                  page should appear on the screen.
                </p>
                <MissingPart label="Photo of running setup — Arduino connected to router with LED lit (300×225)" />
              </div>
            </Section>

            {/* Summary */}
            <Section id="summary" title="Summary" isEven={true}>
              <p className="text-gray-700 leading-relaxed text-lg">
                After this project we now learned how to create a website and a web server on an
                Arduino. We now know the basics of web development and the IoT. This project and all
                of its software are but an example of the technological potential of web development.
                From here onward you have the basics to develop and exploit this example into ever
                more useful and advanced projects.
              </p>
            </Section>


            {/* Thank You + Form */}
            <Section id="thank-you" title="Thank you" isEven={false}>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                We thank you for learning and hopefully completing our project. We are looking forward
                to hearing from you in the comment section. Questions and constructive criticism are
                welcome.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-6">
                We would like to know what you think about our Arduino web server LED control project
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

export default ArduinoWebServerPage;
