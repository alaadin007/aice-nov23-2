import React from 'react';
import { Star } from 'lucide-react';

export function Hero() {
  return (
    <div className="mb-16">
      {/* Main Hero */}
      <div className="text-center mb-8 pt-12">
        <h2 className="text-7xl font-bold mb-8">
          <span className="text-white">Learn</span>,{' '}
          <span className="text-white">Share</span>,{' '}
          <span className="text-gray-500">Earn</span>
          <Star className="inline-block w-10 h-10 ml-3 text-blue-600" />
        </h2>
        <h3 className="text-2xl mb-6">
          Turn Your <span className="font-semibold">Content</span> into{' '}
          <span className="font-semibold">Professional Credits</span>
        </h3>
        <p className="text-gray-400 text-xl mb-16">
          Instant CPD, CME, CE & More - No Login Required
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* KIU Feature */}
        <div className="glass-effect rounded-xl p-6 hover:bg-zinc-800/50 transition-duration-300">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Knowledge Impact Units (KIU)</h3>
          <p className="text-gray-400 leading-relaxed">
            Earn KIU points for every learning interaction. 1 KIU equals 1 hour of professional development.
          </p>
        </div>

        {/* AI Analysis Feature */}
        <div className="glass-effect rounded-xl p-6 hover:bg-zinc-800/50 transition-duration-300">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-purple-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">AI-Powered Analysis</h3>
          <p className="text-gray-400 leading-relaxed">
            Our AI evaluates content depth and generates relevant assessments automatically.
          </p>
        </div>

        {/* Team Learning Feature */}
        <div className="glass-effect rounded-xl p-6 hover:bg-zinc-800/50 transition-duration-300">
          <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-green-500" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Team Learning</h3>
          <p className="text-gray-400 leading-relaxed">
            Track your team's professional development and monitor progress. Perfect for organizations.
          </p>
        </div>
      </div>
    </div>
  );
}