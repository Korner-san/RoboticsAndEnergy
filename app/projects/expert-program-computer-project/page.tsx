'use client';

import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import SectionDiscussion from '@/components/SectionDiscussion';

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

const ExpertProgramPage: React.FC = () => (
  <div className="bg-gray-100 min-h-screen pb-12">
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <Breadcrumb crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Expert Program Computer Project' },
      ]} />
    </div>

    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#70CDE2] mb-4">
          Expert System project: PC repair assistant
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Sidebar TOC */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="sticky top-24 bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              Table of Contents
            </h3>
            <ul className="space-y-3 text-[15px] font-medium text-[#70CDE2]">
              <li><a href="#what-will-you-learn" className="hover:text-blue-600 transition-colors">1. What will you learn</a></li>
              <li><a href="#expert-system" className="hover:text-blue-600 transition-colors">2. What is an Expert System?</a></li>
              <li><a href="#prolog" className="hover:text-blue-600 transition-colors">3. Prolog</a></li>
              <li><a href="#project-scope" className="hover:text-blue-600 transition-colors">4. The project and its field</a></li>
              <li><a href="#overlay" className="hover:text-blue-600 transition-colors">5. The overlay</a></li>
              <li><a href="#code-structure" className="hover:text-blue-600 transition-colors">6. Code structure</a></li>
              <li><a href="#rules" className="hover:text-blue-600 transition-colors">7. Rules</a></li>
              <li><a href="#thank-you" className="hover:text-blue-600 transition-colors">8. Thank you</a></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl">
          <div className="rounded-2xl shadow-sm overflow-hidden border border-gray-100 bg-white">

            {/* Intro */}
            <Section isEven={false}>
              <img
                src="/images/2021/01/COMPUTER.jpg"
                alt="Expert system PC repair assistant"
                className="w-full rounded-xl mb-8 object-cover shadow-md"
              />
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                It is needless to say how important PCs are in our daily lives. And like every machine
                and device; they tend to fail from time to time. When they do, this could be a hit.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Only computer technicians have the proper knowledge and are certified to repair PCs.
                In this project we program that knowledge into an expert system.
              </p>
              <a
                href="#"
                className="inline-block px-8 py-3 bg-[#70CDE2] text-white font-bold rounded-lg shadow-md hover:bg-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Download zip file
              </a>
            </Section>

            {/* What will you learn */}
            <Section id="what-will-you-learn" title="What will you learn?" isEven={true}>
              <p className="text-gray-700 leading-relaxed text-lg">
                In this project you will learn how to program your computer to &lsquo;know&rsquo; and master the
                field of computer problem diagnostics. You will learn the fundamentals of expert systems,
                logic programming in Prolog, knowledge base design, and inference engine implementation.
              </p>
            </Section>

            {/* What is an Expert System */}
            <Section id="expert-system" title="What is an Expert System?" isEven={false}>
              <p className="text-gray-700 leading-relaxed text-lg">
                An Expert System is a highly complex algorithm (type of AI) usually consisting of a big
                database and set of rules. It gathers information about a problem and provides solutions —
                just like a human expert would. Expert systems are used in medicine, engineering, finance,
                and many other domains where deep specialist knowledge can be encoded as rules.
              </p>
            </Section>

            {/* Prolog */}
            <Section id="prolog" title="Prolog" isEven={true}>
              <p className="text-gray-700 leading-relaxed text-lg">
                Short for &lsquo;Program In Logic&rsquo;, Prolog is a leading language in logic programming that was
                developed in 1970. It uses true/false statements derived from facts and rules, making it
                ideal for expert systems. Prolog is declarative — you describe what is true, and the
                engine figures out how to reach conclusions.
              </p>
              <SectionDiscussion threadSlug="expert-program-computer-project" sectionId="prolog" />
            </Section>

            {/* Project scope */}
            <Section id="project-scope" title="The project and its field of expertise" isEven={false}>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>The expert system is designed to:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Identify the problem</li>
                  <li>Give guidance and explanation on how the problem was found</li>
                  <li>Offer a solution to fix the problem</li>
                  <li>Explain how it got to the solution and why it worked</li>
                </ol>

                <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">System troubleshooting areas:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Power Supply', 'Graphics', 'CPU', 'RAM', 'Motherboard', 'Disk Drives', 'DVD/ROM Drives', 'Audio'].map(area => (
                    <div key={area} className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center text-sm text-gray-700 font-medium">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            {/* The overlay */}
            <Section id="overlay" title="The overlay" isEven={true}>
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                <p>
                  The first requirement of an expert system is to have the ability to answer for a
                  particular query. The system consists of four main components:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Knowledge Basis',
                      body: 'The knowledge basis refers to the content of an expert system. It describes the components of the field of knowledge — facts and rules stored as Prolog predicates.',
                    },
                    {
                      title: 'Conclusion Algorithm',
                      body: 'The conclusion algorithm consists of a mechanism capable of drawing conclusions based on knowledge. It traverses the state machine to reach a diagnosis.',
                    },
                    {
                      title: 'Explanation System',
                      body: 'The explanation system allows an explanation to the user after the process of diagnosis and inference of the system — showing the path taken through the knowledge graph.',
                    },
                    {
                      title: 'Overlay (Envelope)',
                      body: 'The envelope includes the inference mechanism, the explanation mechanism and the user interface. Software installation is not required — run directly from the file.',
                    },
                  ].map(({ title, body }) => (
                    <div key={title} className="bg-white border border-gray-200 rounded-xl p-5">
                      <h3 className="font-bold text-gray-800 text-lg mb-2">{title}</h3>
                      <p className="text-base text-gray-600">{body}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Graphical representation of knowledge (facts)</h3>
                  <p>
                    The data structure used for this project to store all of the data is a state machine.
                    All of the facts in this database were consulted with a real computer expert and vast
                    research was made to make these facts accurate.
                  </p>
                  <MissingPart label="State machine diagram — Start (The pc malfunction)" />
                  <MissingPart label="State machine diagram — PSU / I'm not sure" />
                  <MissingPart label="State machine diagram — Display & Video" />
                  <MissingPart label="State machine diagram — Motherboard / CPU / RAM" />
                  <MissingPart label="State machine diagram — Hard drive" />
                  <MissingPart label="State machine diagram — Optical drive" />
                  <MissingPart label="State machine diagram — Sound & audio" />
                </div>
              </div>
            </Section>

            {/* Code Structure */}
            <Section id="code-structure" title="Code structure" isEven={false}>
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed">

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Edge definition</h3>
                  <p className="mb-3">
                    Each edge connects two states in the state machine with a value (the user&apos;s answer).
                    <code className="bg-gray-100 px-1 rounded text-sm mx-1">_origin</code> and{' '}
                    <code className="bg-gray-100 px-1 rounded text-sm">_destination</code> are the IDs of the
                    states the arc is connecting, and{' '}
                    <code className="bg-gray-100 px-1 rounded text-sm">_value</code> is the transition value.
                  </p>
                  <Snippet code={`edge(_origin, _value, _destination).`} />
                  <p className="mb-3">Example edges:</p>
                  <Snippet code={`edge(b4, no,  b6).
edge(b4, yes, b7).
edge(b5, yes, b8).
edge(b5, no,  b9).
edge(b7, yes, b10).
edge(b7, no,  b11).
edge(b9, yes, b12).
edge(b9, no,  b13).
edge(b11, no, b12).`} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Vertice data</h3>
                  <p className="mb-3">
                    Each vertex (node) in the state machine stores a name and an explanation string.
                  </p>
                  <Snippet code={`vertice_data(_vertice, _name, _explanation).`} />
                  <p className="mb-3">Example:</p>
                  <Snippet code={`vertice_data(d12, 'Insert another power lead into the drive.', '').`} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Dictionary (term)</h3>
                  <p className="mb-3">
                    Technical terms are stored in a dictionary accessible during explanations.
                  </p>
                  <Snippet code={`term(_code, _term, _description).`} />
                  <p className="mb-3">Example:</p>
                  <Snippet code={`term(20, 'PATA', 'Parallel ATA (PATA), originally AT Attachment (ATA), is an information cable...').`} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Data storage files</h3>
                  <ul className="list-disc pl-5 space-y-2 text-base">
                    <li><strong>data.pl</strong> — edges, vertice data, and terms</li>
                    <li><strong>library.pl</strong> — helper predicates and utilities</li>
                  </ul>
                </div>

              </div>
            </Section>

            {/* Rules */}
            <Section id="rules" title="Rules" isEven={true}>
              <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                <p>Now we get to the programming.</p>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">engine.pl methods</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left p-3 border border-gray-200 font-semibold">Method</th>
                          <th className="text-left p-3 border border-gray-200 font-semibold">Description</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        {[
                          ['load.', 'Load all files'],
                          ['start.', 'Start the program'],
                          ['menu.', 'Transfer user to main menu'],
                          ['menu(_option)', 'Receive user input and route'],
                          ['system_activate(_vertice, _trip)', 'Search method — traverses the state machine'],
                          ['system_finish_manu(_trip)', 'Finishes the troubleshooting process'],
                          ['explanation1(_trip)', 'Activates the explanation engine'],
                          ['explanation2(_trip)', 'Displays the trip as a flowchart'],
                          ['explanation_engine(_trip, _memory, _trip_explain)', 'Core explanation method'],
                        ].map(([method, desc]) => (
                          <tr key={method} className="hover:bg-gray-50">
                            <td className="p-3 border border-gray-200 font-mono text-xs">{method}</td>
                            <td className="p-3 border border-gray-200">{desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Built-in Prolog functions used</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left p-3 border border-gray-200 font-semibold">Function</th>
                          <th className="text-left p-3 border border-gray-200 font-semibold">Purpose</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        {[
                          ['sort/2', 'List sorting'],
                          ['member/2', 'Check if value exists in list'],
                          ['atom_concat/3', 'Concatenate two strings'],
                          ['findall/3', 'Find all values that satisfy a condition'],
                          ['reverse/2', 'Flip all values in a list'],
                        ].map(([fn, desc]) => (
                          <tr key={fn} className="hover:bg-gray-50">
                            <td className="p-3 border border-gray-200 font-mono text-xs">{fn}</td>
                            <td className="p-3 border border-gray-200">{desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <MissingPart label="Screenshots of the running expert system / console output" />
              </div>
              <SectionDiscussion threadSlug="expert-program-computer-project" sectionId="code-structure" />
            </Section>

            {/* Summary */}
            <Section id="summary" title="Summary" isEven={false}>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Computer hardware is an area I have delved into long enough. I decided to do the project
                around this topic from the beginning. Throughout the work, I had to gather a huge amount
                of information about all the computer parts and consult with a real expert to ensure the
                facts were accurate.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Preparing for the project was difficult and challenging. Eventually, I learned a great
                many things in the field of computer hardware and my proficiency in Prolog improved.
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
                We would like to know what you think about our Expert System project: PC repair assistant
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Did you like the project?</label>
                  <div className="space-y-3">
                    {['yes', 'no'].map(val => (
                      <label key={val} className="flex items-center space-x-3 text-gray-600">
                        <input type="radio" name="liked" value={val} className="form-radio text-[#70CDE2]" />
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

export default ExpertProgramPage;
