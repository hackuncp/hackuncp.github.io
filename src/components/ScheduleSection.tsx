'use client';

import { useState, useEffect, useRef } from 'react';

interface ScheduleEvent {
  time: string;
  title: string;
  location: string;
  startTime: Date;
  endTime: Date;
}

const saturday: ScheduleEvent[] = [
  { time: '1:00 PM', title: 'Shuttle Pickup at RDU', location: 'RDU Airport', startTime: new Date('2026-02-21T13:00:00-05:00'), endTime: new Date('2026-02-21T14:30:00-05:00') },
  { time: '2:30 – 5:30 PM', title: 'Check-in & Registration', location: 'JTH Main Gate', startTime: new Date('2026-02-21T14:30:00-05:00'), endTime: new Date('2026-02-21T17:30:00-05:00') },
  { time: '3:00 – 3:30 PM', title: 'Shuttle Arrives at UNCP', location: 'JTH Parking Lot', startTime: new Date('2026-02-21T15:00:00-05:00'), endTime: new Date('2026-02-21T15:30:00-05:00') },
  { time: '5:30 – 6:30 PM', title: 'Opening Ceremony', location: 'Upchurch Auditorium', startTime: new Date('2026-02-21T17:30:00-05:00'), endTime: new Date('2026-02-21T18:30:00-05:00') },
  { time: '6:30 – 8:00 PM', title: 'Dinner', location: 'UNCP Cafeteria', startTime: new Date('2026-02-21T18:30:00-05:00'), endTime: new Date('2026-02-21T20:00:00-05:00') },
  { time: '8:00 – 8:30 PM', title: 'Team Formation', location: 'JTH Lobby', startTime: new Date('2026-02-21T20:00:00-05:00'), endTime: new Date('2026-02-21T20:30:00-05:00') },
  { time: '8:30 PM', title: 'Hacking Begins', location: 'JTH', startTime: new Date('2026-02-21T20:30:00-05:00'), endTime: new Date('2026-02-22T11:00:00-05:00') },
  { time: '8:30 – 9:00 PM', title: 'Hacking with GitHub Copilot (MLH)', location: 'Upchurch Auditorium', startTime: new Date('2026-02-21T20:30:00-05:00'), endTime: new Date('2026-02-21T21:00:00-05:00') },
  { time: '9:00 – 9:30 PM', title: 'Intro to Google AI Studio (MLH)', location: 'Upchurch Auditorium', startTime: new Date('2026-02-21T21:00:00-05:00'), endTime: new Date('2026-02-21T21:30:00-05:00') },
  { time: '11:59 PM', title: 'Pre-Submission Form Due', location: 'Slack / Online', startTime: new Date('2026-02-21T23:59:00-05:00'), endTime: new Date('2026-02-21T23:59:00-05:00') },
];

const sunday: ScheduleEvent[] = [
  { time: '12:00 – 1:00 AM', title: 'Midnight Snacks', location: 'JTH Lobby / Rotunda', startTime: new Date('2026-02-22T00:00:00-05:00'), endTime: new Date('2026-02-22T01:00:00-05:00') },
  { time: '2:00 – 7:00 AM', title: 'Quiet Hours', location: 'JTH Event Rooms A & B', startTime: new Date('2026-02-22T02:00:00-05:00'), endTime: new Date('2026-02-22T07:00:00-05:00') },
  { time: '8:00 – 9:00 AM', title: 'Breakfast', location: 'JTH Lobby / Rotunda', startTime: new Date('2026-02-22T08:00:00-05:00'), endTime: new Date('2026-02-22T09:00:00-05:00') },
  { time: '10:00 – 11:00 AM', title: 'Finalize Devpost Submissions', location: 'Devpost', startTime: new Date('2026-02-22T10:00:00-05:00'), endTime: new Date('2026-02-22T11:00:00-05:00') },
  { time: '11:00 AM', title: 'Final Submission Deadline', location: 'Devpost', startTime: new Date('2026-02-22T11:00:00-05:00'), endTime: new Date('2026-02-22T11:00:00-05:00') },
  { time: '11:00 AM – 1:30 PM', title: 'Judging Preparation', location: 'JTH Classrooms', startTime: new Date('2026-02-22T11:00:00-05:00'), endTime: new Date('2026-02-22T13:30:00-05:00') },
  { time: '12:00 – 1:00 PM', title: 'Lunch', location: 'UNCP Cafeteria', startTime: new Date('2026-02-22T12:00:00-05:00'), endTime: new Date('2026-02-22T13:00:00-05:00') },
  { time: '1:30 – 3:30 PM', title: 'In-Person Demos & Judging', location: 'JTH Classrooms', startTime: new Date('2026-02-22T13:30:00-05:00'), endTime: new Date('2026-02-22T15:30:00-05:00') },
  { time: '4:30 – 5:30 PM', title: 'Closing Ceremony & Awards', location: 'Upchurch Auditorium', startTime: new Date('2026-02-22T16:30:00-05:00'), endTime: new Date('2026-02-22T17:30:00-05:00') },
  { time: '5:30 PM', title: 'Certificates', location: 'JTH Main Gate', startTime: new Date('2026-02-22T17:30:00-05:00'), endTime: new Date('2026-02-22T18:00:00-05:00') },
  { time: '6:30 PM', title: 'Shuttle Departs to RDU', location: 'JTH Parking Lot', startTime: new Date('2026-02-22T18:30:00-05:00'), endTime: new Date('2026-02-22T19:00:00-05:00') },
];

const days = [
  { label: 'Saturday, February 21', short: 'SAT', events: saturday },
  { label: 'Sunday, February 22', short: 'SUN', events: sunday },
];

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(0);
  const [now, setNow] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const currentRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const sundayLive = sunday.some((e) => now >= e.startTime && now <= e.endTime);
    if (sundayLive) setActiveDay(1);
  }, [mounted]);

  useEffect(() => {
    if (mounted && currentRef.current) {
      setTimeout(() => currentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
    }
  }, [activeDay, mounted]);

  const isCurrent = (e: ScheduleEvent) => mounted && now >= e.startTime && now <= e.endTime;
  const isPast = (e: ScheduleEvent) => mounted && now > e.endTime;

  const events = days[activeDay].events;

  return (
    <section id="schedule" className="py-32 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Schedule</h2>
        <p className="text-white/50 mb-12">All times in Eastern Time (ET). Times subject to change.</p>

        {/* Day Tabs */}
        <div className="flex gap-1 mb-10">
          {days.map((day, i) => (
            <button
              key={day.short}
              onClick={() => setActiveDay(i)}
              className={`px-5 py-2.5 text-sm font-semibold transition-colors ${
                activeDay === i
                  ? 'bg-[#8C734C] text-white'
                  : 'bg-white/5 text-white/40 hover:text-white/70'
              }`}
            >
              <span className="hidden sm:inline">{day.label}</span>
              <span className="sm:hidden">{day.short}</span>
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="border-t border-white/10">
          {events.map((event, i) => {
            const live = isCurrent(event);
            const past = isPast(event);

            return (
              <div
                key={i}
                ref={live ? currentRef : null}
                className={`flex items-center px-4 py-3 border-b border-white/5 transition-all ${
                  live
                    ? 'bg-[#8C734C]/15 border-l-2 border-l-[#8C734C]'
                    : past
                      ? 'opacity-40'
                      : ''
                }`}
              >
                <div className="w-36 md:w-44 flex-shrink-0">
                  <span className={`text-sm font-mono whitespace-nowrap ${live ? 'text-[#8C734C] font-bold' : 'text-white/50'}`}>
                    {event.time}
                  </span>
                </div>
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-0 md:gap-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-sm font-medium ${live ? 'text-white' : 'text-white/90'}`}>
                      {event.title}
                    </span>
                    {live && (
                      <span className="flex items-center gap-1 text-xs text-[#8C734C] font-semibold">
                        <span className="w-1.5 h-1.5 bg-[#8C734C] rounded-full animate-pulse" />
                        LIVE
                      </span>
                    )}
                  </div>
                  <span className="text-xs md:text-sm text-white/30 md:text-right flex-shrink-0">{event.location}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
