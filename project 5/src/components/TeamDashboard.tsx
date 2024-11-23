import React, { useState } from 'react';
import { Users, Share2, Plus, Search, TrendingUp, Award, Building } from 'lucide-react';
import { TeamMemberCard } from './TeamMemberCard';
import { AssignKIUModal } from './AssignKIUModal';
import { TeamAnalytics } from './TeamAnalytics';
import { TeamAssignments } from './TeamAssignments';
import { RequestAccessModal } from './RequestAccessModal';

interface TeamDashboardProps {
  organization: {
    name: string;
    totalEmployees: number;
    averageKIU: number;
    monthlyGrowth: number;
  };
  onSwitchToPersonal: () => void;
}

const SAMPLE_TEAM = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Aesthetic Practitioner",
    department: "Aesthetics",
    photoUrl: null,
    totalKIU: 45,
    recentActivity: "Completed Masseter Botox Treatment Update",
    lastActive: "2 hours ago",
    progress: {
      monthly: 8,
      total: 45,
      trend: 12
    },
    topSkills: [
      { name: "Facial Anatomy", level: "Expert" },
      { name: "Injection Techniques", level: "Advanced" }
    ]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Practitioner",
    department: "Dermatology",
    photoUrl: null,
    totalKIU: 62,
    recentActivity: "Started Advanced Dermal Fillers",
    lastActive: "1 hour ago",
    progress: {
      monthly: 6,
      total: 62,
      trend: 8
    },
    topSkills: [
      { name: "Patient Management", level: "Expert" },
      { name: "Dermal Fillers", level: "Expert" }
    ]
  }
];

const SAMPLE_DEPARTMENTS = [
  {
    name: "Aesthetics",
    members: SAMPLE_TEAM.filter(member => member.department === "Aesthetics")
  },
  {
    name: "Dermatology",
    members: SAMPLE_TEAM.filter(member => member.department === "Dermatology")
  }
];

export function TeamDashboard({ organization, onSwitchToPersonal }: TeamDashboardProps) {
  const [showAssignKIU, setShowAssignKIU] = useState(false);
  const [showRequestAccess, setShowRequestAccess] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedView, setSelectedView] = useState<'grid' | 'analytics'>('grid');

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900">
      {/* Header with Actions */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-zinc-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                AiCE
              </h1>
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 animate-pulse"></div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowAssignKIU(true)}
                className="btn-primary flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Assign KIU
              </button>
              
              <button
                onClick={() => setShowRequestAccess(true)}
                className="btn-secondary flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Request Access
              </button>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search team members..."
                  className="w-64 pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex bg-zinc-800 rounded-xl p-1">
                <button
                  onClick={() => setSelectedView('grid')}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    selectedView === 'grid' ? 'bg-zinc-700 text-white' : 'text-gray-400'
                  }`}
                >
                  Team Grid
                </button>
                <button
                  onClick={() => setSelectedView('analytics')}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    selectedView === 'analytics' ? 'bg-zinc-700 text-white' : 'text-gray-400'
                  }`}
                >
                  Analytics
                </button>
              </div>
            </div>

            {/* Organization Info */}
            <div className="text-right">
              <div className="text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
                {organization.name}
              </div>
              <div className="text-gray-400 text-sm">
                Team Dashboard
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-6 pt-32 pb-20">
        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <button 
            onClick={() => setShowAssignKIU(true)}
            className="glass-effect rounded-xl p-6 hover:bg-zinc-800/50 transition-colors text-left group relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Plus className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Upskill Your Team</h3>
            <p className="text-sm text-gray-400 mb-3">
              Assign new learning materials and KIU points
            </p>
            <div className="text-xs text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full inline-block">
              Great way to develop your staff! 🚀
            </div>
          </button>

          <button 
            onClick={() => setShowRequestAccess(true)}
            className="glass-effect rounded-xl p-6 hover:bg-zinc-800/50 transition-colors text-left group relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Share2 className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Request Access</h3>
            <p className="text-sm text-gray-400 mb-3">
              View team certificates and progress
            </p>
            <div className="text-xs text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full inline-block">
              Track team achievements 🎯
            </div>
          </button>

          <div className="glass-effect rounded-xl p-6 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-green-500/5 rounded-full blur-2xl"></div>
            
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">Monthly Growth</h3>
              <span className="text-2xl font-bold text-white">+{organization.monthlyGrowth}%</span>
            </div>
            <div className="h-2 bg-zinc-700 rounded-full overflow-hidden mb-3">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                style={{ width: `${organization.monthlyGrowth}%` }}
              />
            </div>
            <div className="text-xs text-green-400 bg-green-500/10 px-3 py-1.5 rounded-full inline-block">
              Team is growing strong! 📈
            </div>
          </div>
        </div>

        {/* Team Assignments */}
        <div className="mb-8">
          <TeamAssignments />
        </div>

        {/* Team Grid or Analytics View */}
        {selectedView === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_TEAM.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <TeamAnalytics team={SAMPLE_TEAM} />
        )}
      </main>

      {/* Modals */}
      <AssignKIUModal
        isOpen={showAssignKIU}
        onClose={() => setShowAssignKIU(false)}
        team={SAMPLE_TEAM}
        departments={SAMPLE_DEPARTMENTS}
      />
      <RequestAccessModal
        isOpen={showRequestAccess}
        onClose={() => setShowRequestAccess(false)}
      />
    </div>
  );
}