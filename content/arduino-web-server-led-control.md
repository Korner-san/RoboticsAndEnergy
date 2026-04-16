# Arduino Web Server LED Control Project

DIY tutorial - Arduino remote controlled LED via a web server

---

## Navigation

- Home
- DIY Projects
  - RGB LED light Strips project with Arduino
  - Robotic arm with Arduino
  - Arduino web server LED Control
  - Expert program computer project
- About us
- Contact us
- Education
  - Internet of Things for Smart Cities
  - Experts concerns with Artificial intelligence
  - Computer memory operation

---

## What will we learn

In the Arduino web server LED control project we will use an Arduino and an Ethernet shield and we will create a small http web server, like a website, on our LAN which will control an RGB LED with an interactive web interface.

---

## Primary parts for this project

- Arduino UNO
- Arduino Ethernet Shield
- RGB common collector LED
- 220Ω Resistor x3
- Breadboard
- Jumper cables
- SD card
- Ethernet switch or modem
- Ethernet cables

## Programming languages used

- C (Arduino compatible)
- HTML
- CSS
- JavaScript

---

## Hardware

The project uses a Common Collector RGB LED with 4 pins. Three 220 Ohm resistors connect to pins 1, 3, and 4. Pin 1 (Red) connects to shield pin 3, pin 2 (Vcc) to pin 2 directly, pin 3 (Green) to pin 5, and pin 4 (Blue) to pin 6.

Connection setup requires a modem or router (default IP 192.168.0.1) with Ethernet connectivity. The TP-Link TL-WR841N router is recommended for this setup.

---

## Software

### Web Files Structure

- login.htm – Login page
- main.htm – Menu page
- control.htm – LED control page UI
- 404.htm – Page not found error
- 401.htm – Unauthorized access page
- style.css – Graphical design
- elec.jpg – Background image

### Login Page (login.htm)

The login function takes data written in the "#user" and "#pass" fields and sends it to the server as an HTTP request.

Time display executes via JavaScript, showing "Time: [current time]"

Form includes username and password fields with login button.

### Main Menu (main.htm)

Displays welcome message with navigation to:
- Control page
- Logout option

### Control Page (control.htm)

Features an interactive LED visual representation with checkboxes for controlling RGB colors. The interface uses CSS to create realistic LED styling with shadow effects.

**JavaScript function details:**
- `httpGet()` – sends requests to server
- `rgb()` – generates color values
- `inputHandle()` – processes checkbox states
- `ledColor()` – updates visual LED appearance
- `clickFunc()` – triggers server communication

### Error Pages

**401.htm:** "401: Authentication error. Are you authorized!?"

**404.htm:** Handles URL errors when users enter invalid paths.

---

## Arduino Server Code

**Libraries used:**
- SPI.h
- Ethernet.h
- SD.h

**Network config:**
- Static IP: 192.168.0.12
- Port: 80
- MAC address: DE:AD:BE:EF:FE:ED

**Authentication:**
- Username: `root`
- Password: `1234`

**LED Pin Configuration:**
- RED: Pin 3
- GREEN: Pin 5
- BLUE: Pin 6
- PWR: Pin 2

**Server Algorithm:**

Waits for client connections, processes HTTP requests, authenticates users, serves web pages from SD card, and controls LED outputs based on click commands.

The server responds with appropriate HTTP status codes:
- 200 OK – successful requests
- 401 Unauthorized – failed authentication
- 404 Not Found – invalid URLs

---

## Running the Server

Power the Arduino via USB or DC jack. Connect Ethernet shield to router configured at 192.168.0.1. Access the website by entering `http://192.168.0.12` in a web browser.

---

## Summary

After this project we now learned how to create a website and a webserver on an Arduino. We now know the basics of web development and the IoT.

The project demonstrates IoT fundamentals, web server implementation, authentication systems, and remote device control via web interface.

---

## Footer

- Social media: Facebook, Youtube, Instagram
- Site navigation: Home, About us, Contact us, Site map
