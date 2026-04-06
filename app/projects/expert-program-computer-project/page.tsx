import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Expert System PC Repair Assistant - Robotics and Energy',
  description: 'Program a PC troubleshooting expert system using Prolog. Learn AI knowledge bases, inference engines, and state machine diagrams.',
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">{title}</h2>
    {children}
  </section>
);

const ExpertProgramPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'Expert Program Computer Project' },
    ]} />

    <div className="container mx-auto px-4 pb-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-robotics-dark mb-4">
        PC Repair Expert System
      </h1>
      <p className="text-gray-500 mb-8 text-sm">Programming language: Prolog</p>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <Section title="Introduction">
          <p className="text-gray-600 leading-relaxed mb-4">
            Computer technicians possess specialized knowledge that can be programmed into
            software using AI principles. This project creates an expert system that diagnoses
            and fixes common PC problems — mimicking the behavior of an experienced technician.
          </p>
        </Section>

        <Section title="What Will We Learn">
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
            <li>How to program using <strong>Prolog</strong> (Program In Logic)</li>
            <li>Building knowledge bases with facts and rules</li>
            <li>Designing inference/conclusion algorithms</li>
            <li>Creating state machine diagrams for decision logic</li>
            <li>Building a user interface overlay for an AI system</li>
          </ul>
        </Section>

        <Section title="What is an Expert System?">
          <p className="text-gray-600 leading-relaxed mb-4">
            An expert system is a highly complex algorithm (type of AI) usually consisting of a
            big database and a set of rules. It gathers information about a problem and provides
            solutions — just like a human expert would.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>Prolog</strong> was developed in 1970 for logic-based AI software. It uses
            true/false statements derived from facts and rules, making it ideal for expert systems.
          </p>
        </Section>

        <Section title="Hardware Coverage">
          <p className="text-gray-600 mb-4 text-sm">
            The system diagnoses issues across 8 hardware areas:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Power Supply', 'Graphics Card', 'CPU', 'RAM', 'Motherboard', 'Disk Drives', 'DVD/ROM Drives', 'Audio'].map((hw) => (
              <div key={hw} className="bg-gray-50 border border-gray-200 rounded p-3 text-center text-sm text-gray-700 font-medium">
                {hw}
              </div>
            ))}
          </div>
        </Section>

        <Section title="System Architecture">
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            The expert system consists of four main components:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              { title: 'Knowledge Basis', desc: 'Facts and rules stored as Prolog predicates (state connections, vertex data)' },
              { title: 'Inference Algorithm', desc: 'Traverses the knowledge graph to reach conclusions based on user input' },
              { title: 'Explanation System', desc: 'Explains the reasoning behind each diagnosis' },
              { title: 'User Interface', desc: 'Interactive overlay that guides users through troubleshooting questions' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                <h3 className="font-semibold text-robotics-dark mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Prolog Code Example">
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
            <pre>{`% Knowledge base: edges between states
edge(start, power_check, 'Does the PC turn on?').
edge(power_check, graphics_check, 'Do you see any display?').
edge(graphics_check, gpu_fault, 'No display = possible GPU issue').
edge(power_check, psu_fault, 'PC does not power on = PSU issue').

% Rules
diagnose(Problem) :-
  start_state(Start),
  traverse(Start, Problem).

traverse(State, Diagnosis) :-
  is_solution(State, Diagnosis).
traverse(State, Diagnosis) :-
  edge(State, Next, Question),
  ask_user(Question),
  traverse(Next, Diagnosis).`}</pre>
          </div>
        </Section>

        <Section title="Conclusion">
          <p className="text-gray-600 leading-relaxed">
            This project provides hands-on experience with AI programming, logic-based systems, and
            software architecture. The skills learned — knowledge representation, inference engines,
            and user interaction design — are directly applicable to modern AI development.
          </p>
        </Section>
      </div>
    </div>
  </div>
);

export default ExpertProgramPage;
