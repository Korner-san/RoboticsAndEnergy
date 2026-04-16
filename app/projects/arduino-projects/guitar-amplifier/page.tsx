'use client';

import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

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

const bom = [
  { num: 1,  component: '100uF Capacitor',         ref: 'C6',     qty: 1 },
  { num: 2,  component: '100nF Capacitor',          ref: 'C7',     qty: 1 },
  { num: 3,  component: '1nF Capacitor',            ref: 'C8',     qty: 1 },
  { num: 4,  component: 'TIP31 Transistor (NPN)',   ref: 'Q1',     qty: 1 },
  { num: 5,  component: 'TIP32 Transistor (PNP)',   ref: 'Q2',     qty: 1 },
  { num: 6,  component: '6Ω 15W Speaker',           ref: 'R1',     qty: 1 },
  { num: 7,  component: '10K Variable Resistor',    ref: 'R2',     qty: 1 },
  { num: 8,  component: '1K Resistor',              ref: 'R3, R7', qty: 2 },
  { num: 9,  component: '100K Variable Resistor',   ref: 'R4',     qty: 1 },
  { num: 10, component: 'TS Guitar Connector',      ref: 'V3',     qty: 1 },
  { num: 11, component: 'NE5534/301/TI Op-Amp',     ref: 'U1',     qty: 1 },
  { num: 12, component: 'TL081/301/TI Op-Amp',      ref: 'U2',     qty: 1 },
];

const GuitarAmplifierPage: React.FC = () => (
  <div className="bg-gray-100 min-h-screen pb-12">
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <Breadcrumb crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Arduino Projects', href: '/projects/arduino-projects' },
        { label: 'Electric Guitar Amplifier' },
      ]} />
    </div>

    <div className="container mx-auto px-4 py-8 max-w-7xl">

      {/* Maintenance banner */}
      <div className="mb-6 flex items-center gap-3 rounded-xl bg-yellow-50 border border-yellow-300 px-5 py-4">
        <span className="text-yellow-600 text-lg">⚠</span>
        <p className="text-yellow-800 font-medium text-sm">This project is currently in maintenance</p>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#70CDE2] mb-4">
          Electric Guitar Amplifier Project: A Complete Example for Electronics Students
        </h1>
        <h2 className="text-2xl text-[#90dced] font-medium">
          Project for Building a class B Guitar Amplifier
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
              <li><a href="#brief" className="hover:text-blue-600 transition-colors">1. Brief</a></li>
              <li><a href="#theory" className="hover:text-blue-600 transition-colors">2. Theoretical Background</a></li>
              <li><a href="#schematic" className="hover:text-blue-600 transition-colors">3. Schematic and Simulation</a></li>
              <li><a href="#bom" className="hover:text-blue-600 transition-colors">4. BOM</a></li>
              <li><a href="#construction" className="hover:text-blue-600 transition-colors">5. Construction and Testing</a></li>
              <li><a href="#conclusions" className="hover:text-blue-600 transition-colors">6. Conclusions</a></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl">
          <div className="rounded-2xl shadow-sm overflow-hidden border border-gray-100 bg-white">

            {/* Hero */}
            <Section isEven={false}>
              <img
                src="/images/2024/08/DALL·E-2024-08-26-23.45.50-A-monochrome-illustration-of-a-rock-guitarist-standing-with-an-electric-guitar-in-front-of-a-tall-stack-of-amplifier-speakers.-The-guitarist-is-wearin.webp"
                alt="Rock guitarist with amplifier stack"
                className="w-full rounded-xl mb-8 object-cover shadow-md"
              />
              <p className="text-gray-700 leading-relaxed text-lg">
                In this project, we decided to design and build an amplifier capable of boosting the
                signal from an electric guitar. This article provides a comprehensive guide to building
                a basic electric guitar amplifier, specifically designed for electronics students.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mt-4">
                It outlines each step of the project, from schematic design to the physical construction
                of the amplifier, highlighting important considerations such as power supply, signal
                processing, and tone control. By the end of the article, you will have a functional,
                hands-on project that will deepen your understanding of both electronics and audio
                technology.
              </p>
            </Section>

            {/* Brief */}
            <Section id="brief" title="Brief" isEven={true}>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  The guitar&apos;s input signal is an AC signal with an amplitude of 60–300 mVpp and a
                  frequency range of 50–2000 Hz. The speaker we are using is essentially a coil with
                  a real resistance of 6Ω and can handle up to 15W of power.
                </p>
                <p>
                  If we connect the guitar signal directly to the speaker, it won&apos;t produce any sound
                  due to the low power level. Therefore, we need an amplifier that can significantly
                  increase the power of the signal without distorting its quality or frequency. Our
                  goal is to achieve a maximum amplification of 100 times the input signal, with an
                  adjustable voltage range of 6–30V, using a feedback loop.
                </p>
                <p>
                  The amplifier is designed with two amplification stages: a low-noise, high-bandwidth
                  operational amplifier and a Class B power stage using transistors. Additionally, we
                  included a low-pass filter to eliminate unwanted noise and provide a clean, enjoyable
                  sound. A good way to start the design is to put all key building blocks of the
                  project into a diagram, and then engineer each of them.
                </p>
                <MissingPart label="Fig 1. Block diagram" />
                <MissingPart label="Fig 2. Class B amp — first and second stage diagram" />
              </div>
            </Section>

            {/* Theoretical Background */}
            <Section id="theory" title="Theoretical Background" isEven={false}>
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed">

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">First Amplification Stage: Voltage Amplification</h3>
                  <p>
                    The first stage focuses on amplifying the voltage of the input signal. This is
                    achieved using an operational amplifier (op-amp) connected in a negative feedback
                    configuration. This setup allows for a gain of up to 100 times the input signal.
                    The input signal is fed into the positive input of the op-amp to achieve a very
                    high input impedance, which helps preserve the integrity of the signal by preventing
                    any significant current draw from the guitar pickup.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Second Amplification Stage: Power Amplification</h3>
                  <p>
                    The second stage is a power amplification stage built with two BJT transistors
                    (NPN and PNP types) configured in a push-pull arrangement. These transistors are
                    connected &lsquo;back-to-back,&rsquo; meaning their emitters are connected together. The
                    collector of the NPN transistor is connected to the positive supply voltage (+Vcc),
                    while the collector of the PNP transistor is connected to the negative supply
                    voltage (-Vcc). This configuration eliminates the need for resistors on the
                    collectors, allowing for maximum current flow to the load.
                  </p>
                  <p className="mt-4">
                    The transistors switch between saturation and cutoff states. When one transistor
                    is in saturation (fully on), the other is in cutoff (fully off), and vice versa.
                    This arrangement keeps the transistors on the verge of conduction, allowing the
                    input current to determine which transistor conducts. This setup provides efficient
                    power amplification because the current in saturation is a direct combination of
                    the input current and the supply voltage, resulting in a strong enough output to
                    drive a 6Ω speaker load effectively.
                  </p>
                  <p className="mt-4">
                    To control the output voltage and maintain stable gain, the op-amp is also
                    connected to the transistor bases, with its output linked back in a negative
                    feedback loop. This ensures consistent performance and precise control over the
                    amplification process.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Efficiency of the Power Amplifier</h3>
                  <p>
                    Efficiency is defined as the ratio of the output power to the total power supplied
                    by the power source, expressed as a percentage. The unused power dissipates over
                    the transistor itself in the form of heat.
                  </p>
                  <MissingPart label="Eq 1–7: Efficiency definition, load power, effective load power, half sinewave power, supply power, efficiency calculation, dissipation power" />
                  <p>
                    To calculate the maximum dissipation power we take the derivative of the dissipation
                    equation with respect to voltage and compare it to zero — the equation represents a
                    &lsquo;sad&rsquo; parabola.
                  </p>
                  <MissingPart label="Eq 8–9: Max dissipation power equations" />
                  <MissingPart label="Fig 3. Plot of lost power (and efficiency) vs voltage" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Engineering Considerations</h3>
                  <p>
                    Let us recall that this is a 100mV signal on average. Therefore, after the first
                    amplification stage (operational amplifier), the voltage should be 10V. An op-amp
                    can amplify voltage very well, but its output current is usually low. Therefore,
                    under high load, it will drop. So the second amplification stage — the power amp —
                    is needed to provide enough current to operate the speaker.
                  </p>
                  <p className="mt-4">
                    An important requirement is not only a powerful signal, but one that matches the
                    guitar&apos;s input signal — a clean, restored signal. For this reason, quality
                    components are needed such as an NE5534 amplifier with a high bandwidth of 10MHz
                    at unity gain and a relatively high SLEW RATE of 13V/µs.
                  </p>
                  <p className="mt-4">
                    With a 12V supply voltage and a 6Ω load:
                  </p>
                  <MissingPart label="Eq 10. Real power dissipation calculation" />
                  <p>
                    Therefore, we choose a large transistor capable of dissipating this power. The
                    TIP31 and TIP32 are 2W power transistors that are good for audio applications due
                    to their low distortion. We shall use them and also add a heat sink to improve the
                    power dissipation capacity.
                  </p>
                  <MissingPart label="Eq 11. Max output power" />
                  <p>
                    Our speaker matches this power at 15W. As you can see in Fig3, the output voltage
                    cannot be higher than the supply voltage. Therefore, if the gain is around 100 and
                    the amplitude is about 150mV, the output voltage should be 15V — above the 12V
                    supply minus Vce_sat. This causes clipping and distortion. In music this is called
                    overdrive: a loud, aggressive growling sound characteristic of rock music.{' '}
                    <em>This was first introduced by legendary guitarist Jimi Hendrix who came to
                    London in 1966 and connected to a Marshall amplifier — then raised every knob to
                    maximum and strummed.</em>
                  </p>
                </div>

              </div>
            </Section>

            {/* Schematic and Simulation */}
            <Section id="schematic" title="Schematic and Simulation" isEven={true}>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Right now we shall present the final circuit, explain it and show the simulation.
                  Do you see the similarities between the schematic in Fig4, the block diagram in
                  Fig1 and the stages in Fig2? Let&apos;s explain a few key points in the circuit:
                </p>

                <MissingPart label="Fig 4. Class B Amp schematic" />

                <ul className="list-disc pl-5 space-y-3 text-base">
                  <li>The guitar input is represented as a 200mV 2kHz signal (V3).</li>
                  <li>A buffer amp U2 is used to copy the signal. It&apos;s needed because the signal is very fragile — manipulating it may distort it.</li>
                  <li>After the buffer the signal goes to the potentiometer R2 that can lower the signal, therefore acts as a volume control.</li>
                  <li>The capacitor C8 with the potentiometer R2 acts like a low pass filter that filters high frequency noise.</li>
                  <li>Op Amp U1 is the first stage voltage amplification, and transistors Q1, Q2 are the second stage power amplification.</li>
                  <li>A closed feedback loop through variable resistor R4 controls the amplification, therefore acts as the gain control.</li>
                  <li>Resistor R7 pulls down the line between stage 1 and 2 to reference the signal to ground. It helps eliminating background noises.</li>
                  <li>Large capacitor C6 is used to couple AC signals and block offset voltages.</li>
                  <li>The speaker is represented as a 6Ω load resistor R1.</li>
                  <li>Capacitor C7 is in parallel to the supply voltages to suppress conductive emissions (noise on the power line).</li>
                </ul>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Small Signal Amplification Results (AC)</h3>
                  <p>
                    Notice that in Fig4 there is a green and red probe. The green color is the input
                    voltage, the red color is the output voltage after the amplification stage. Note
                    that the output load resistance is very small compared to the input resistance —
                    this indicates the output current is much larger than the current in the second stage.
                  </p>
                  <MissingPart label="Fig 5. Small Signal Amplification — clean signal amplification with minimal distortion" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Overdrive Mode</h3>
                  <p>
                    Shows the clipped output signal characteristic of high-gain settings, producing a
                    distinct overdrive effect.
                  </p>
                  <MissingPart label="Fig 6. Overdrive Mode — clipped output signal at maximum gain" />
                </div>
              </div>
            </Section>

            {/* BOM */}
            <Section id="bom" title="Build of Materials (BOM)" isEven={false}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 border border-gray-200 font-semibold">#</th>
                      <th className="text-left p-3 border border-gray-200 font-semibold">Component</th>
                      <th className="text-left p-3 border border-gray-200 font-semibold">Reference</th>
                      <th className="text-left p-3 border border-gray-200 font-semibold">Qty</th>
                      <th className="text-left p-3 border border-gray-200 font-semibold">Link</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    {bom.map(({ num, component, ref, qty }) => (
                      <tr key={num} className="hover:bg-gray-50">
                        <td className="p-3 border border-gray-200 text-gray-400">{num}</td>
                        <td className="p-3 border border-gray-200 font-medium">{component}</td>
                        <td className="p-3 border border-gray-200 font-mono text-xs">{ref}</td>
                        <td className="p-3 border border-gray-200">{qty}</td>
                        <td className="p-3 border border-gray-200">
                          <a
                            href="https://www.amazon.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#70CDE2] hover:text-blue-600 font-medium text-xs"
                          >
                            Buy
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* Construction and Testing */}
            <Section id="construction" title="Construction and Testing" isEven={true}>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>Follow these steps to build and test the guitar amplifier:</p>

                <ol className="list-decimal pl-5 space-y-4">
                  <li>
                    <strong>Assemble the Pre-Amplifier Circuit:</strong> Connect the operational
                    amplifier and associated components (resistors, capacitors) according to the
                    schematic to set the desired gain and frequency response.
                  </li>
                  <li>
                    <strong>Build the Power Amplifier Stage:</strong> Solder the TIP31 and TIP32
                    transistors onto the PCB, ensuring proper alignment and heat management.
                  </li>
                  <li>
                    <strong>Test the Amplifier Circuit:</strong> Use a signal generator and
                    oscilloscope to verify the amplifier&apos;s output under various input conditions
                    and adjust the gain settings as needed.
                  </li>
                  <li>
                    <strong>Optimize Performance:</strong> Fine-tune the circuit parameters, such
                    as gain and filtering, to achieve the best sound quality and performance.
                  </li>
                </ol>

                <MissingPart label="Fig 7. Assembled circuit on a breadboard for testing" />

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Small signal test</h3>
                  <p>
                    The input signal (blue) and the output signal (yellow) amplified by a factor of 56.
                  </p>
                  <MissingPart label="Fig 8. Small signal test from signal generator — 56× gain" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Overdrive test</h3>
                  <p>
                    The input signal and the output signal after maximum amplification by a factor
                    of 100, showing clipping and overdrive.
                  </p>
                  <MissingPart label="Fig 9. Overdriven signal test from signal generator — 100× gain with clipping" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Guitar input test</h3>
                  <p>
                    Input signal from an electric guitar (note &lsquo;A3&rsquo; at 220Hz) and the output signal
                    for comparison.
                  </p>
                  <MissingPart label="Fig 10. Single note input from a guitar — A3 at 220Hz" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Chord test</h3>
                  <p>
                    G chord, showing multiple frequencies at once in the FFT.
                  </p>
                  <MissingPart label="Fig 11. G chord from a guitar — FFT showing multiple frequencies" />
                </div>
              </div>
            </Section>

            {/* Conclusions */}
            <Section id="conclusions" title="Conclusions" isEven={false}>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  This guitar amplifier project serves as an excellent example for electronics students
                  and professionals interested in analog circuit design and power amplification. The
                  project demonstrates how to effectively design, simulate, and build a functional
                  amplifier while considering practical constraints such as component selection, power
                  efficiency, and thermal management. By following this example, students can gain
                  hands-on experience and a deeper understanding of electronic amplification principles.
                </p>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Suggestions for Further Development</h3>
                  <ul className="list-disc pl-5 space-y-2 text-base">
                    <li>Implementing a variable band-pass filter to refine tonal control.</li>
                    <li>Enhancing the amplifier&apos;s power output by integrating additional amplification stages or utilizing higher-power transistors.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">References</h3>
                  <ul className="list-disc pl-5 space-y-2 text-base text-gray-600">
                    <li>Microelectronics Textbook by Sedra and Smith, 6th Edition.</li>
                    <li>PSPICE and ORCAD Software for Simulation and Circuit Design.</li>
                    <li>Component Datasheets for NE5534, TL081, TIP31, and TIP32.</li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* Comment Form */}
            <Section id="leave-reply" title="Leave a Reply" isEven={true}>
              <p className="text-sm text-gray-500 mb-6">Your email address will not be published. Required fields are marked *</p>
              <form className="space-y-6 max-w-2xl bg-white p-8 rounded-xl shadow-sm border border-gray-100/60">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Comment *</label>
                  <textarea rows={6} className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:border-[#70CDE2] outline-none transition-shadow resize-y" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:border-[#70CDE2] outline-none transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:border-[#70CDE2] outline-none transition-shadow" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                  <input type="url" className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:border-[#70CDE2] outline-none transition-shadow" />
                </div>
                <label className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
                  <input type="checkbox" className="mt-1 form-checkbox text-[#70CDE2]" />
                  <span>Save my name, email, and website in this browser for the next time I comment.</span>
                </label>
                <button type="button" className="w-full bg-black text-white py-4 rounded font-semibold hover:bg-gray-800 transition-colors shadow-md text-sm">
                  Post Comment
                </button>
              </form>
            </Section>

          </div>
        </div>
      </div>
    </div>
  </div>
);

export default GuitarAmplifierPage;
