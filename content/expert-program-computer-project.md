# Expert System project: PC repair assistant

Download link for zip file available on the page.

---

## What will you learn

In this project you will learn how to program your computer to 'know' and master the field of computer problem diagnostics.

---

## What is an Expert System?

An Expert System is a highly complex algorithm (type of AI) usually consisting of a big database and set of rules.

---

## Prolog

Short for 'Program In Logic', Prolog is a leading language in logic programming that was developed in 1970.

---

## The project and its field of expertise

Goals:
1. Identify the problem
2. Give guidance and explanation on how the problem was found
3. Offer a solution to fix the problem
4. Explain how it got to the solution and why it worked

Troubleshooting areas: Power Supply, Graphics, CPU, RAM, Motherboard, Disk Drives, DVD/ROM Drives, Audio

---

## The overlay (system architecture)

- Knowledge Basis
- Conclusion Algorithm
- Explanation System
- Overlay (envelope)
- Program Independence

Data structure: state machine. All facts consulted with a real computer expert.

State machine diagrams: Start, PSU/I'm not sure, Display & Video, Motherboard/CPU/RAM, Hard drive, Optical drive, Sound & audio

---

## Code structure

edge(_origin,_value,_destination).
vertice_data(_vertice,_name,_explanation).
term(_code,_term,_description).

Files: data.pl, library.pl

---

## Rules (engine.pl)

Methods: load, start, menu, menu(_option), system_activate, system_finish_manu, explanation1, explanation2, explanation_engine

Built-in: sort/2, member/2, atom_concat/3, findall/3, reverse/2

---

## Summary

Computer hardware is an area I have delved into long enough. Throughout the work, I had to gather a huge amount of information about all computer parts. Eventually, I learned a great many things in the field of computer hardware and my proficiency in Prolog improved.
