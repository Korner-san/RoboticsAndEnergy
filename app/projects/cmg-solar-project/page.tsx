import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'CMG Solar Project - Robotics and Energy',
  description: 'Exploring control moment gyroscopes and solar energy systems for sustainable energy applications.',
};

const CMGSolarPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[
      { label: 'Home', href: '/' },
      { label: 'Projects', href: '/projects' },
      { label: 'CMG Solar Project' },
    ]} />

    <div className="container mx-auto px-4 pb-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-robotics-dark mb-4">
        CMG Solar Project
      </h1>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">Overview</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This project explores Control Moment Gyroscopes (CMG) in combination with solar energy
            systems. CMGs are used to provide precise attitude control in spacecraft and can also be
            applied to improve solar panel tracking and energy harvesting efficiency.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Sustainable energy is the only way our life as we live now can work for the long term.
            This project investigates methods to maximize solar energy collection through smart
            mechanical positioning systems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">Key Concepts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Control Moment Gyroscope', desc: 'A momentum exchange device that uses rotating flywheels to create torque for attitude control' },
              { title: 'Solar Tracking', desc: 'Automatically orienting solar panels toward the sun to maximize energy collection throughout the day' },
              { title: 'PWM Motor Control', desc: 'Precise motor control for smooth panel positioning using pulse-width modulation' },
              { title: 'Energy Efficiency', desc: 'Measuring and optimizing the power output vs. power consumed by the tracking system' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-gray-50 border border-gray-100 rounded-lg p-4">
                <h3 className="font-semibold text-robotics-dark mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-robotics-dark mb-4 pb-2 border-b border-gray-200">Summary</h2>
          <p className="text-gray-600 leading-relaxed">
            This project bridges mechanical engineering and electronics, teaching gyroscope physics,
            solar energy fundamentals, motor control, and embedded systems programming.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default CMGSolarPage;
