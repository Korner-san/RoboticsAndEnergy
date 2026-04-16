# Web-Controlled RGB LED Strip: DIY Arduino Project

Arduino remote control LED Strip via a web server - control LED strip with your phone or any device of your choice

---

## What will we learn

In the Web-Controlled RGB LED Strip DIY project, you will learn how to use an Arduino and an Ethernet shield to create a small HTTP web server on your LAN that controls an RGB LED strip with an interactive web interface. You will also discover how to use the relay unit of the Arduino to enable a stronger voltage source to power up the RGB LED strip. Additionally, you will become familiar with JavaScript and HTML and use them to create the control interface for the LED strip.

---

## Primary parts for this project

- Arduino UNO
- Arduino Ethernet Shield
- RGB LED Strip
- Universal Electrical Enclosure Sealed box
- 12V 1A AC/DC Power Adapter
- 220Ω Resistor x3
- Jumper Wires
- SD card
- Ethernet switch or modem
- Ethernet cables
- IRF540N Mosfet Transistor

## Programming languages used

- C (Arduino compatible)
- HTML
- CSS
- JavaScript

---

## Hardware

In terms of hardware the projects is fairly simple. The Ethernet shield is applied pin to pin directly on the UNO board. We need to connect the 4 wires of the LED strip to the Arduino, however we cannot connect it directly to the GPIO pins because they cannot supply enough current and voltage to the strip as the strip uses 12V and up to 1A of current. Therefore we will use MOSFET transistors to transfer power from the Arduino Vin pin which is connected to the 12V power jack. The MOSFET transistors in this circuit will act like switches that are turned on and off electrically, and it can do that thousands of times a second. So we'll control them via the Arduino GPIO pins. In addition, we shall use PWM pins. When using PWM (Pulse Width Modulation) we turn the transistor and the LEDs on and off a few thousand times a second while controlling the width of the pulse which will allow us to control the brightness of the LEDs on the strip.

First thing put the Arduino Ethernet shield directly on the Arduino. Now we use the GPIO of the Arduino via the Ethernet shield.

Network: I used a TP-Link TL-WR841N Router. Default IP: 192.168.0.1, User: admin, Password: admin. Connect Ethernet cable to the Shield's Ethernet port.

---

## Software

This project is an improvement of the previous LED control project. Most of this project and its added value is the software and is the bigger challenge. We will cover the front end and the back end. You will experience the glory of Full Stack WEB development.

### Files

- login.htm
- main.htm
- control.htm
- 404.htm
- 401.htm
- style.css
- elec.jpg

### login.htm JS

```js
function login() { fetch(`user=${user.value}&pass=${pass.value}`).then(...) }
function timeFunction() { return new Date().toLocaleString(); }
```

### main.htm

Welcome page with links to control.htm and logout.

### control.htm

LED figure (CSS shapes), RGB checkboxes, vertical sliders (0-255), pattern selector (No Pattern / Blink / Flash / Sweep), full JS for httpGet, inputHandle, ledColor, clickFunc, sliderValues, playPattern.

### Error pages

- 401.htm: "401: Authentication error. Are you authorized!?"
- 404.htm: "404 No such page."

---

## Arduino Server Code

Full server code with StrClear, StrContains, controlHandler (dataRGB = VRRRGGGBBB format), setup, loop.

---

## Summary

Through this project, we've gained a hands-on understanding of creating a website and configuring a web server on an Arduino. Our exploration extended to include the integration of the MOSFET and the relay module to manage current and voltage according to each component's requirements.
