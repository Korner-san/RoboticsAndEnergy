import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Electric Guitar Amplifier - Robotics and Energy',
  description: 'Design a Class B guitar amplifier with 100x amplification using op-amps and push-pull BJT transistors. Full schematic, BOM, and test results.',
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">{title}</h2>
    {children}
  </section>
);

const GuitarAmplifierPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Arduino Projects', href: '/projects/arduino-projects' },
      { label: 'Guitar Amplifier' },
    ]} />

    <div className="container mx-auto px-4 pb-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-robotics-dark mb-4">
        Electric Guitar Amplifier Project
      </h1>
      <p className="text-gray-500 mb-8 text-sm">Electronics design project</p>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <Section title="Project Brief">
          <p className="text-gray-600 leading-relaxed mb-4">
            This project designs a Class B guitar amplifier that boosts signals from electric
            guitars (60–300 mVpp, 50–2000 Hz) to drive a 6Ω speaker handling up to 15W.
            The goal is to achieve <strong>100× amplification</strong> with adjustable voltage
            (6–30V) while maintaining signal quality.
          </p>
        </Section>

        <Section title="Theoretical Background">
          <p className="text-gray-600 leading-relaxed mb-4">
            The amplifier uses a <strong>two-stage design</strong>:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 text-sm">
            <li>Stage 1: Voltage amplification via an operational amplifier (NE5534)</li>
            <li>Stage 2: Power amplification using push-pull BJT transistors (TIP31/TIP32 NPN/PNP pair)</li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm">
            Class B amplification uses one transistor for positive half-cycles and another for
            negative. This maximizes efficiency (~78% theoretical maximum) while minimizing
            heat dissipation. Overdrive (clipping) occurs when gain exceeds linear range,
            producing the distinctive guitar distortion sound.
          </p>
        </Section>

        <Section title="Circuit Schematic">
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Key circuit blocks:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm mb-4">
            <li>Buffer amplifier (U2) — preserves signal integrity at input</li>
            <li>Volume control potentiometer with low-pass filter</li>
            <li>Primary voltage amplifier (U1, NE5534 op-amp)</li>
            <li>Power stage with TIP31/TIP32 push-pull transistors</li>
            <li>Feedback loop for gain control</li>
            <li>AC coupling capacitors and noise suppression</li>
          </ul>
          <img
            src="https://roboticsandenergy.com/wp-content/uploads/2025/02/Schematic-and-simulation-1.png"
            alt="Guitar amplifier schematic and simulation"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </Section>

        <Section title="Bill of Materials (BOM)">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Component</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Spec / Value</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {[
                  ['Op-amp U1', 'NE5534 (voltage amplifier)'],
                  ['Op-amp U2', 'Buffer amplifier'],
                  ['NPN Transistor Q1', 'TIP31 (positive half-cycle)'],
                  ['PNP Transistor Q2', 'TIP32 (negative half-cycle)'],
                  ['Capacitors', 'AC coupling + bypass caps'],
                  ['Resistors', 'Feedback & biasing network'],
                  ['Potentiometer', 'Volume control'],
                  ['Speaker', '6Ω, 15W'],
                  ['Guitar connector', '6.35mm mono jack'],
                  ['Power supply', '6–30V adjustable'],
                ].map(([comp, spec]) => (
                  <tr key={comp} className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">{comp}</td>
                    <td className="p-3 border border-gray-200">{spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Construction & Testing">
          <p className="text-gray-600 leading-relaxed mb-4">
            The circuit was first assembled on a breadboard for testing. Oscilloscope measurements
            confirmed:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm mb-4">
            <li>Small-signal amplification: 56× gain (clean signal)</li>
            <li>Maximum amplification with clipping: 100× gain (overdrive)</li>
            <li>Single guitar note (A3, 220 Hz) — clean waveform observed</li>
            <li>Multi-frequency chord analysis — harmonic content verified</li>
          </ul>
          <img
            src="https://roboticsandenergy.com/wp-content/uploads/2025/02/Bredboard-testing-1.jpg"
            alt="Breadboard testing of guitar amplifier"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </Section>

        <Section title="Conclusions">
          <p className="text-gray-600 leading-relaxed">
            This project demonstrates fundamental analog electronics including voltage and power
            amplification, BJT transistor operation, op-amp circuits, and frequency response.
            Further development could include variable band-pass filtering for tone control and
            higher-power implementations for stage use.
          </p>
        </Section>
      </div>
    </div>
  </div>
);

export default GuitarAmplifierPage;
