import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Internet of Things for Smart Cities - Robotics and Energy',
  description: 'How IoT technology is transforming urban infrastructure, transportation, and city services around the world.',
};

const IoTSmartCitiesPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'IoT for Smart Cities' }]} />

    <div className="container mx-auto px-4 pb-16 max-w-3xl">
      <article className="bg-white rounded-lg shadow-sm p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-robotics-dark mb-3">
            Internet of Things for Smart Cities — How Advanced Cities Operate
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>By Gena Charnukha</span>
            <span>•</span>
            <span>February 20, 2021</span>
            <span>•</span>
            <span>Updated November 21, 2022</span>
          </div>
        </div>

        <div className="prose max-w-none text-gray-600 leading-relaxed space-y-6">
          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">IoT Beneficiality for Everyday Activities</h2>
            <p>
              IoT connects previously unrelated devices to enhance efficiency across multiple sectors.
              Tech giants like Intel and IBM are digitizing infrastructure including lights, surveillance
              systems, and public transport. The core principle involves gathering real-time data stored
              in cloud systems and sharing it between interconnected devices to improve city management
              across communication, transport, retail, and information services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">IoT in Smart Cities</h2>
            <p>
              Urban centers face challenges managing traffic density, energy consumption, water usage,
              pollution, and waste collection. Smart solutions include traffic light systems with camera
              monitoring and autonomous garbage collection. Implementation requires sensors and cameras
              for data collection, communication infrastructure like 5G, cloud storage, and robust
              analysis systems.
            </p>
            <p>
              However, this raises concerns about data security and government surveillance, making
              responsible data management crucial. The balance between smart city efficiency and
              privacy rights is an ongoing debate in modern urban planning.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Real-World Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-robotics-dark mb-2">🇦🇪 Dubai</h3>
                <p className="text-sm">Mobile app for civic services like taxi calls and bill payments, integrating multiple city services into one platform.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-robotics-dark mb-2">🇪🇸 Barcelona</h3>
                <p className="text-sm">&ldquo;Smart street lights&rdquo; that adapt to street activity, saving millions in electricity costs annually.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Technology Infrastructure</h2>
            <p>
              IoT devices use System-on-Chip microcomputers with processors from manufacturers like
              Intel and ARM. Cloud services from Intel Hybrid Cloud and Microsoft Azure enable AI and
              machine learning integration. 5G networks and optical fiber provide the communication
              backbone for real-time data exchange.
            </p>
            <p>
              Companies like Cisco and Samsung are major players in providing the networking and
              hardware components that make smart cities possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Transportation Applications</h2>
            <p>
              Solutions include smart parking apps (reducing the time drivers spend searching for
              parking), vehicle-to-internet connectivity, and real-time transit tracking through
              platforms like Google Maps and Moovit. Autonomous vehicles represent the next frontier
              in smart city transportation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Key Takeaway</h2>
            <p>
              IoT technology can transform urban living by improving service delivery and efficiency.
              However, widespread adoption remains limited to developed regions in North America and
              Europe. As costs decrease and infrastructure improves, smart city technology will
              become more accessible globally.
            </p>
          </section>
        </div>
      </article>
    </div>
  </div>
);

export default IoTSmartCitiesPage;
