'use client';

import { useState } from 'react';

const regions = [
  {
    name: 'Metro Central',
    families: 4200,
    meals: 68000,
    volunteers: 380,
    sites: 12,
    gradient: 'from-harvest-500 to-harvest-700',
    story: {
      before: 'The Martinez family relied on fast food dollar menus, leading to health complications for their children.',
      after: 'Now receiving weekly fresh produce boxes, the kids have improved energy and school attendance is up 40%.',
    },
  },
  {
    name: 'Eastside District',
    families: 3100,
    meals: 52000,
    volunteers: 245,
    sites: 8,
    gradient: 'from-giving-500 to-giving-700',
    story: {
      before: 'Senior residents in Eastside had no grocery store within 5 miles and no reliable transportation.',
      after: 'Our mobile pantry now visits 3 times weekly. 94% of surveyed seniors report improved nutrition.',
    },
  },
  {
    name: 'Northern Valley',
    families: 2800,
    meals: 45000,
    volunteers: 190,
    sites: 6,
    gradient: 'from-amber-500 to-orange-600',
    story: {
      before: 'Rural families in Northern Valley faced seasonal food shortages during winter when farm work dried up.',
      after: 'Year-round food access through our warehouse network has eliminated seasonal hunger gaps.',
    },
  },
  {
    name: 'Southport',
    families: 2600,
    meals: 41000,
    volunteers: 210,
    sites: 7,
    gradient: 'from-orange-400 to-red-500',
    story: {
      before: 'After the factory closures, 30% of Southport families were food insecure with no safety net.',
      after: 'Our emergency response program and job-connected food assistance helped 85% achieve food stability.',
    },
  },
  {
    name: 'Westlake',
    families: 1900,
    meals: 32000,
    volunteers: 155,
    sites: 5,
    gradient: 'from-harvest-400 to-giving-500',
    story: {
      before: 'Immigrant families in Westlake faced language barriers and cultural stigma around seeking food aid.',
      after: 'Multilingual staff and culturally appropriate food options tripled participation in 6 months.',
    },
  },
];

const progressData = [
  { label: 'Meals Served (Q1 2026)', current: 248000, target: 300000 },
  { label: 'Families Reached', current: 15600, target: 20000 },
  { label: 'Food Rescued (tons)', current: 840, target: 1000 },
  { label: 'Distribution Sites', current: 38, target: 50 },
];

export default function ImpactPage() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Impact Map</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          See how HarvestShare is making a difference across every region we serve.
        </p>
      </div>

      {/* Progress Charts */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {progressData.map((item) => {
          const pct = Math.round((item.current / item.target) * 100);
          return (
            <div key={item.label} className="bg-white rounded-xl shadow-md p-6">
              <div className="text-sm text-gray-600 mb-2">{item.label}</div>
              <div className="text-2xl font-bold text-harvest-700">{item.current.toLocaleString()}</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div
                  className="bg-gradient-to-r from-harvest-500 to-giving-500 h-2 rounded-full"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">Target: {item.target.toLocaleString()} ({pct}%)</div>
            </div>
          );
        })}
      </div>

      {/* Region Cards */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Regional Impact</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {regions.map((region) => (
          <button
            key={region.name}
            onClick={() => setSelectedRegion(region)}
            className={`p-4 rounded-xl text-left transition-all ${
              selectedRegion.name === region.name
                ? 'bg-harvest-700 text-white shadow-lg scale-105'
                : 'bg-white text-gray-900 shadow-md hover:shadow-lg'
            }`}
          >
            <div className="font-semibold">{region.name}</div>
            <div className={`text-sm mt-1 ${selectedRegion.name === region.name ? 'text-harvest-200' : 'text-gray-500'}`}>
              {region.families.toLocaleString()} families
            </div>
          </button>
        ))}
      </div>

      {/* Selected Region Detail */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className={`h-4 bg-gradient-to-r ${selectedRegion.gradient}`} />
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{selectedRegion.name} Region</h3>
          <div className="grid sm:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-harvest-700">{selectedRegion.families.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Families Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-giving-600">{selectedRegion.meals.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Meals Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">{selectedRegion.volunteers}</div>
              <div className="text-sm text-gray-600">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{selectedRegion.sites}</div>
              <div className="text-sm text-gray-600">Distribution Sites</div>
            </div>
          </div>

          {/* Before/After Story */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-400">
              <h4 className="font-semibold text-red-800 mb-2">Before HarvestShare</h4>
              <p className="text-red-700 text-sm">{selectedRegion.story.before}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-2">After HarvestShare</h4>
              <p className="text-green-700 text-sm">{selectedRegion.story.after}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
