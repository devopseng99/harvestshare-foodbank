'use client';

import { useState } from 'react';

const categories = ['All', 'Hunger Relief', 'Education', 'Community', 'Emergency'];

const programs = [
  {
    title: 'School Meal Program',
    category: 'Education',
    desc: 'Nutritious breakfasts and lunches for students in underserved school districts.',
    goal: 50000,
    raised: 42500,
    gradient: 'from-harvest-400 to-harvest-600',
  },
  {
    title: 'Mobile Pantry Fleet',
    category: 'Hunger Relief',
    desc: 'Refrigerated trucks delivering fresh produce to food deserts weekly.',
    goal: 120000,
    raised: 98000,
    gradient: 'from-giving-400 to-giving-600',
  },
  {
    title: 'Senior Nutrition Initiative',
    category: 'Community',
    desc: 'Home-delivered meals and grocery boxes for homebound seniors.',
    goal: 75000,
    raised: 61000,
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Emergency Food Response',
    category: 'Emergency',
    desc: 'Rapid deployment of food supplies during natural disasters and crises.',
    goal: 200000,
    raised: 145000,
    gradient: 'from-red-400 to-harvest-600',
  },
  {
    title: 'Community Garden Network',
    category: 'Community',
    desc: 'Supporting 35 community gardens that teach sustainable food growing skills.',
    goal: 30000,
    raised: 28500,
    gradient: 'from-giving-500 to-emerald-600',
  },
  {
    title: 'Nutrition Education Workshops',
    category: 'Education',
    desc: 'Free cooking classes and nutrition education for low-income families.',
    goal: 25000,
    raised: 18000,
    gradient: 'from-yellow-400 to-harvest-500',
  },
  {
    title: 'Weekend Backpack Program',
    category: 'Hunger Relief',
    desc: 'Sending kids home with weekend food packs so no child goes hungry on days off.',
    goal: 40000,
    raised: 37200,
    gradient: 'from-harvest-300 to-giving-500',
  },
  {
    title: 'Disaster Preparedness Stockpile',
    category: 'Emergency',
    desc: 'Maintaining a 72-hour emergency food reserve for 10,000 people.',
    goal: 150000,
    raised: 89000,
    gradient: 'from-orange-400 to-red-500',
  },
];

export default function ProgramsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? programs : programs.filter((p) => p.category === active);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Our Programs</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          From school meals to emergency response, every program is designed to fight hunger and build resilient communities.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === cat
                ? 'bg-harvest-700 text-white'
                : 'bg-white text-gray-700 hover:bg-harvest-50 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Program Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((program) => {
          const pct = Math.round((program.raised / program.goal) * 100);
          return (
            <div key={program.title} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-40 bg-gradient-to-br ${program.gradient}`} />
              <div className="p-6">
                <span className="text-xs font-semibold text-harvest-600 uppercase tracking-wide">{program.category}</span>
                <h3 className="mt-1 text-xl font-semibold text-gray-900">{program.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{program.desc}</p>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">${program.raised.toLocaleString()} raised</span>
                    <span className="font-medium text-harvest-700">{pct}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-harvest-500 to-giving-500 h-2.5 rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Goal: ${program.goal.toLocaleString()}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
