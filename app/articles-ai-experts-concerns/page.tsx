import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Experts Concerns with Artificial Intelligence - Robotics and Energy',
  description: 'What leading scientists and tech leaders say about the risks and future of AI and AGI.',
};

const AIExpertsConcernsPage: React.FC = () => (
  <div className="bg-gray-50">
    <Breadcrumb crumbs={[{ label: 'Home', href: '/' }, { label: 'Experts Concerns with AI' }]} />

    <div className="container mx-auto px-4 pb-16 max-w-3xl">
      <article className="bg-white rounded-lg shadow-sm p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-robotics-dark mb-3">
            Experts Concerns with Artificial Intelligence
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>By Robotics and Energy</span>
            <span>•</span>
            <span>February 19, 2021</span>
          </div>
        </div>

        <div className="text-gray-600 leading-relaxed space-y-6">
          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Introduction</h2>
            <p>
              AI is no longer theoretical — it&apos;s integrated into daily life through monitoring
              systems that mimic human cognition. From recommendation algorithms to autonomous
              vehicles, AI is everywhere. But what do the experts say about where it&apos;s headed,
              and what risks does it pose?
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">AI vs. AGI</h2>
            <p>
              Current AI systems are focused — they solve specific problems. Google&apos;s search algorithm,
              Siri, and Tesla&apos;s autopilot are all narrow AI. <strong>AGI (Artificial General Intelligence)</strong>
              {' '}— hypothetical general intelligence matching or exceeding human cognitive abilities —
              currently exists only in science fiction. The question is: how close are we?
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Scientific Perspectives</h2>
            <div className="bg-blue-50 border-l-4 border-robotics-blue p-4 rounded-r-lg mb-4">
              <p className="font-semibold text-robotics-dark">Brian Cox (Physicist) — Optimistic View</p>
              <p className="text-sm mt-1">
                Fears about AGI are premature. Current systems are expert systems handling particular
                tasks. Consciousness uploading remains decades away.
              </p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg">
              <p className="font-semibold text-robotics-dark">Elon Musk — Warning</p>
              <p className="text-sm mt-1">
                AI is &ldquo;the single biggest existential crisis we face.&rdquo; With exponential improvement
                rates, machines could exceed human intelligence faster than expected. He criticizes AI
                experts for underestimating risks.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Unexpected Advancement: DeepMind</h2>
            <p>
              DeepMind&apos;s AlphaGo defeated world champion Lee Sedol. Then Alpha-Zero surpassed
              AlphaGo 100&ndash;0 <em>without any human instruction</em> — demonstrating how fast AI can
              advance beyond human-taught limitations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Military Concerns</h2>
            <p>
              Noel Sharkey warns that one human cannot meaningfully control 100 autonomous fighter
              jets. As AI is applied to military systems, the question of oversight becomes critical.
              Autonomous swarms operating without adequate human control pose serious ethical dangers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Healthcare Applications</h2>
            <p>
              Expert Systems and Neural Networks are being applied to skin cancer detection with
              remarkable accuracy. However, ethical complications arise because neither approach can
              fully explain its decision-making process — the &ldquo;black box&rdquo; problem in medical AI.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-robotics-dark mb-3">Conclusion</h2>
            <p>
              AI development requires supervision, public institutional oversight, and potentially
              international regulations similar to the Geneva Convention. The technology is powerful —
              how we govern it will determine whether it benefits or threatens humanity.
            </p>
          </section>
        </div>
      </article>
    </div>
  </div>
);

export default AIExpertsConcernsPage;
