import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Green Energy - Robotics and Energy',
  description: 'Sustainable energy is the only way our life as we live now can work for the long term.',
};

const GreenEnergyPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Green Energy' }]} />

    <div className="container mx-auto px-4 pb-16 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-robotics-dark mb-4">Green Energy</h1>
      <p className="text-xl text-robotics-blue font-medium mb-8">
        &ldquo;Sustainable energy is the only way our life as we live now can work for the long term.&rdquo;
      </p>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-robotics-dark mb-4">Why Green Energy Matters</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The transition to renewable and sustainable energy sources is one of the most critical
            challenges of our time. Fossil fuels are finite and their use contributes to climate
            change. Green energy — solar, wind, hydro, and geothermal — offers a path to a
            sustainable future.
          </p>
          <p className="text-gray-600 leading-relaxed">
            At Robotics and Energy, we believe that electronics and engineering play a crucial role
            in the green energy revolution. From smart solar tracking systems to energy-efficient
            embedded controllers, technology is key to making renewable energy more effective and
            accessible.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-robotics-dark mb-4">Green Technologies We Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Solar Energy', desc: 'Photovoltaic cells and solar tracking systems to maximize energy harvest', icon: '☀️' },
              { title: 'Wind Power', desc: 'Small-scale wind turbines and generator control systems', icon: '💨' },
              { title: 'Energy Storage', desc: 'Battery management systems and efficient energy storage solutions', icon: '🔋' },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="bg-gray-50 rounded-lg p-5 text-center">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="font-bold text-robotics-dark mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-robotics-dark mb-4">Our Approach</h2>
          <p className="text-gray-600 leading-relaxed">
            We combine DIY electronics projects with green energy concepts to create practical,
            educational experiences. Our CMG Solar Project is one example of how robotics and
            energy can work together toward a sustainable future.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export default GreenEnergyPage;
