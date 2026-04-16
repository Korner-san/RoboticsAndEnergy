# Electric Guitar Amplifier Project: A Complete Example for Electronics Students

Project for Building a class B Guitar Amplifier

Status: This project is currently in maintenance

---

## Brief

In this project, we decided to design and build an amplifier capable of boosting the signal from an electric guitar.

The guitar's input signal is an AC signal with an amplitude of 60-300 mVpp and a frequency range of 50-2000 Hz. The speaker we are using is essentially a coil with a real resistance of 6Ω and can handle up to 15W of power.

Our goal is to achieve a maximum amplification of 100 times the input signal, with an adjustable voltage range of 6-30V, using a feedback loop. The amplifier is designed with two amplification stages: a low-noise, high-bandwidth operational amplifier and a Class B power stage using transistors. Additionally, we included a low-pass filter.

MISSING: Fig1. Block diagram

---

## Theoretical Background

### First Stage: Voltage Amplification
Op-amp in negative feedback configuration, gain up to 100x, high input impedance.

### Second Stage: Power Amplification
Two BJT transistors (NPN + PNP) in push-pull arrangement. Collectors connected to +Vcc and -Vcc. Transistors switch between saturation and cutoff.

Closed feedback loop through variable resistor R4 controls amplification (gain control).

### Efficiency
MISSING: Eq1-Eq9 (efficiency equations, dissipation power, plot Fig3)

Max dissipation power per transistor with 12V / 6Ω: ~0.6W → use TIP31/TIP32 with heat sink.

Max output power calculation with 12V supply → speaker is 15W.

Overdrive occurs when output voltage exceeds supply voltage (Vcc - Vce_sat). This produces the rock overdrive effect — first introduced by Jimi Hendrix in 1966.

---

## Schematic and Simulation

MISSING: Fig4. Class B Amp schematic
MISSING: Fig5. Small Signal Amplification simulation result
MISSING: Fig6. Overdrive Mode simulation result

Circuit key points:
- Guitar input: 200mV 2kHz signal (V3)
- Buffer amp U2 copies the signal
- Potentiometer R2 = volume control
- C8 + R2 = low-pass filter
- U1 = first stage voltage amp; Q1/Q2 = second stage power amp
- R4 variable resistor = gain control (feedback loop)
- R7 pulls line to ground (eliminates background noise)
- C6 couples AC signals / blocks offset voltages
- R1 = 6Ω speaker load
- C7 suppresses noise on power line

---

## BOM

| # | Component | Reference | Qty |
|---|-----------|-----------|-----|
| 1 | 100uF Capacitor | C6 | 1 |
| 2 | 100nF Capacitor | C7 | 1 |
| 3 | 1nF Capacitor | C8 | 1 |
| 4 | TIP31 Transistor | Q1 | 1 |
| 5 | TIP32 Transistor | Q2 | 1 |
| 6 | 6Ω 15W Speaker | R1 | 1 |
| 7 | 10K Variable Resistor | R2 | 1 |
| 8 | 1K Resistor | R3, R7 | 2 |
| 9 | 100K Variable Resistor | R4 | 1 |
| 10 | TS Guitar Connector | V3 | 1 |
| 11 | NE5534 Op-Amp | U1 | 1 |
| 12 | TL081 Op-Amp | U2 | 1 |

---

## Construction and Testing

Steps:
1. Assemble the Pre-Amplifier Circuit
2. Build the Power Amplifier Stage (solder TIP31/TIP32, heat management)
3. Test the Amplifier Circuit (signal generator + oscilloscope)
4. Optimize Performance (gain, filtering)

MISSING: Fig7. Assembled circuit on breadboard
MISSING: Fig8. Small signal test — input (blue) and output (yellow), amplified 56x
MISSING: Fig9. Overdriven signal test — 100x gain, clipping
MISSING: Fig10. Single note input from guitar — A3 at 220Hz
MISSING: Fig11. G chord from guitar with FFT

---

## Conclusions

Further development:
- Variable band-pass filter for tonal control
- Higher-power transistors for more output

References:
- Microelectronics Textbook by Sedra and Smith, 6th Edition
- PSPICE and ORCAD Software for Simulation and Circuit Design
- Component Datasheets for NE5534, TL081, TIP31, and TIP32
