import config from "@/hackuncp.config";
import Window from "./Window";

const { schedule, event } = config;

/** The whole weekend as one .ics event, so "add to calendar" works offline in any calendar app. */
function calendarHref() {
  const c = schedule.calendar;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//${event.name}//${event.name} ${event.year}//EN`,
    "BEGIN:VEVENT",
    `UID:${event.name.toLowerCase()}-${event.year}@hackuncp`,
    `DTSTAMP:${c.start}`,
    `DTSTART:${c.start}`,
    `DTEND:${c.end}`,
    `SUMMARY:${event.name} ${event.year}`,
    `LOCATION:${c.location.replace(/,/g, "\\,")}`,
    `DESCRIPTION:${event.school}'s 24-hour hackathon.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}

/** The calendar view: toolbar with "add to calendar", one column per day. */
export function ScheduleBody() {
  return (
    <>
      <div className="cal-toolbar">
        <span className="font-medium">{event.dates}</span>
        <span className="text-ink/55">{event.hours}</span>
        <a href={calendarHref()} download={schedule.calendar.file} className="btn-outline btn-outline-dark btn-sm ml-auto">
          add to calendar
        </a>
      </div>
      <div className="cal-days">
        {schedule.days.map((d) => (
          <div key={d.day} className="cal-day">
            <h3 className="cal-date">
              <span className="cal-dow">{d.day}</span>
              {d.date}
            </h3>
            <ol className="cal-events">
              {d.items.map((item) => (
                <li key={item.title} className="cal-event" data-tbd={item.time === "TBD" ? "" : undefined}>
                  <span className="cal-time">{item.time}</span>
                  <span>{item.title}</span>
                  {item.lastYear && <span className="cal-last">2026: {item.lastYear}</span>}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <p className="cal-note">{schedule.note}</p>
    </>
  );
}

export default function Schedule() {
  return (
    <section id="schedule" data-tone="dark" data-nav="faq" className="kraft-section">
      <div className="mx-auto max-w-[920px] px-4 pt-32 sm:px-8 sm:pt-36">
        <h2 className="display-lg text-center text-ink">{schedule.heading}</h2>
        <div className="mt-12">
          <Window title={schedule.windowTitle} bodyClassName="p-0">
            <ScheduleBody />
          </Window>
        </div>
      </div>
    </section>
  );
}
