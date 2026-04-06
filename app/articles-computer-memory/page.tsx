import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Computer Memory Operation - Robotics and Energy',
  description: 'Learn how computer memory works — RAM, ROM, binary systems, flip-flops, and memory architecture explained.',
};

const rows: [number, string, string][] = [
  [0, '0000', '0'],
  [1, '0001', '1'],
  [10, '1010', 'A'],
  [15, '1111', 'F'],
  [255, '11111111', 'FF'],
];

const ComputerMemoryPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Computer Memory Operation' }]} />

    <div className="container mx-auto px-4 pb-16 max-w-3xl">
      <article className="bg-white rounded-lg shadow-sm p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-robotics-dark mb-3">
            Computer Memory Operation
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>By Robotics and Energy</span>
            <span>•</span>
            <span>January 20, 2021</span>
          </div>
        </div>

        <div className="text-gray-600 leading-relaxed space-y-6">
          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Introduction</h2>
            <p>
              Every computer system has three core components: <strong>CPU</strong>, <strong>Memory</strong>,
              and <strong>I/O</strong>. Computers process information through input, processing, and output
              cycles — from simple traffic signals to complex robotic systems. Understanding memory is
              fundamental to understanding how computers work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">The Binary System</h2>
            <p>
              Data in memory is encoded using binary (0s and 1s). A transistor has only two effective
              states: ON (&ldquo;1&rdquo;) and OFF (&ldquo;0&rdquo;). These bits combine to represent any number, character,
              or instruction. 8 bits = 1 byte, which can represent 256 different values (2⁸).
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 overflow-x-auto">
              <table className="w-full text-sm text-center">
                <thead>
                  <tr className="font-semibold text-robotics-dark border-b border-gray-200">
                    <td className="p-2">Decimal</td>
                    <td className="p-2">Binary</td>
                    <td className="p-2">Hex</td>
                  </tr>
                </thead>
                <tbody className="text-gray-600 font-mono">
                  {rows.map(([d, b, h]) => (
                    <tr key={d} className="border-b border-gray-100">
                      <td className="p-2">{d}</td>
                      <td className="p-2">{b}</td>
                      <td className="p-2">{h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Types of Memory</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-robotics-dark mb-2">RAM (Random Access Memory)</h3>
                <p className="text-sm">
                  Temporary storage for active processes. &ldquo;RAM is a memory space for the processor
                  to store information for a short time during real-time processes.&rdquo; Data is erased
                  when the system resets.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-bold text-robotics-dark mb-2">ROM (Read Only Memory)</h3>
                <p className="text-sm">
                  Permanent storage for the CPU&apos;s program instructions and critical firmware like
                  BIOS. Data persists even when power is off.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Hardware Architecture</h2>
            <p>
              The fundamental storage unit is the <strong>flip-flop</strong> — a circuit that stores
              a single bit (0 or 1). Eight flip-flops form an 8-bit register. Logic gates (OR, AND, NOT)
              form the foundation of all memory circuits.
            </p>
            <div className="bg-gray-900 text-green-400 rounded-lg p-4 my-4 text-sm font-mono text-center">
              <p>1 flip-flop = 1 bit</p>
              <p>8 flip-flops = 1 byte (1 register)</p>
              <p>8 GB ≈ <strong>68 billion flip-flops</strong></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Memory Structure</h2>
            <p>
              Memory organizes as a matrix of flip-flops. In 64-bit systems, rows contain 64
              flip-flops each, creating registers that store individual numbers. Each register has
              a unique address that the CPU uses to read or write data.
            </p>
            <p className="mt-4">
              This matrix structure allows the CPU to access any memory location directly (randomly)
              — hence the name Random Access Memory. The speed of this access is what makes modern
              computing possible.
            </p>
          </section>
        </div>
      </article>
    </div>
  </div>
);

export default ComputerMemoryPage;
