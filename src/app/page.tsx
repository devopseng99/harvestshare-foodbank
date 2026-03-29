'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function AnimatedCounter({ end, label }: { end: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-harvest-700">{count.toLocaleString()}+</div>
      <div className="text-gray-600 mt-1">{label}</div>
    </div>
  );
}

const causeSpotlights = [
  {
    title: 'School Meal Program',
    desc: 'Providing nutritious breakfasts and lunches to 15,000 students across 42 schools in underserved districts.',
    gradient: 'from-harvest-400 to-harvest-600',
  },
  {
    title: 'Mobile Pantry Fleet',
    desc: 'Our fleet of 12 refrigerated trucks delivers fresh produce to food deserts weekly, reaching 8,000 families.',
    gradient: 'from-giving-400 to-giving-600',
  },
  {
    title: 'Senior Nutrition Initiative',
    desc: 'Home-delivered meals and grocery boxes for 3,200 homebound seniors ensuring no elder goes hungry.',
    gradient: 'from-amber-400 to-orange-600',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-harvest-600 via-harvest-700 to-giving-700" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Nourishing Communities, <span className="text-harvest-200">One Harvest at a Time</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-harvest-100">
              HarvestShare connects donors, warehouses, and distribution sites across the region to ensure no family goes hungry. Together, we&apos;re building a future free from food insecurity.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="px-8 py-3 bg-white text-harvest-700 font-semibold rounded-lg hover:bg-harvest-50 transition-colors shadow-lg"
              >
                Donate Now
              </Link>
              <Link
                href="/programs"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={248000} label="Meals Served" />
            <AnimatedCounter end={15600} label="Families Fed" />
            <AnimatedCounter end={3200} label="Volunteers" />
            <AnimatedCounter end={1800000} label="Funds Raised ($)" />
          </div>
        </div>
      </section>

      {/* Cause Spotlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Cause Spotlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {causeSpotlights.map((cause) => (
              <div key={cause.title} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-48 bg-gradient-to-br ${cause.gradient}`} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{cause.title}</h3>
                  <p className="mt-2 text-gray-600">{cause.desc}</p>
                  <Link href="/programs" className="mt-4 inline-block text-harvest-700 font-medium hover:text-harvest-800">
                    Learn more &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-harvest-600 to-giving-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Every Dollar Feeds a Family</h2>
          <p className="mt-4 text-lg text-white/90">
            $1 provides 4 meals through our network. Your generosity creates ripples of hope across the region.
          </p>
          <Link
            href="/get-involved"
            className="mt-8 inline-block px-10 py-4 bg-white text-harvest-700 font-bold rounded-lg hover:bg-harvest-50 transition-colors shadow-lg text-lg"
          >
            Give Today
          </Link>
        </div>
      </section>
    </div>
  );
}
