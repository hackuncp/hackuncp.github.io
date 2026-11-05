import config from "@/hackuncp.config";
import Window from "./Window";

const { schedule, event } = config;

/** Opens Google Calendar with the whole weekend filled in. It's a plain link, so it needs no API key. */
function googleCalendarHref() {
  const c = schedule.calendar;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${event.name} ${event.year}`,
    dates: `${c.start}/${c.end}`,
    details: `${event.school}'s 24-hour hackathon. ${config.meta.url}`,
    location: c.location,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

/** The same event as an .ics file, for Apple Calendar and Outlook. */
function icsHref() {
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

/** The calendar view: toolbar with the calendar links, one timeline per day. */
export function ScheduleBody() {
  return (
    <>
      <div className="cal-toolbar">
        <p>
          <span className="cal-range">{event.dates}</span>
          <span className="cal-hours">{event.hours}</span>
        </p>
        <div className="cal-actions">
          <a href={googleCalendarHref()} target="_blank" rel="noreferrer" className="btn-outline btn-outline-dark btn-sm">
            add to Google Calendar
          </a>
          <a href={icsHref()} download={schedule.calendar.file} className="cal-ics">
            Apple or Outlook
          </a>
        </div>
      </div>
      <div className="cal-days">
        {schedule.days.map((d) => {
          const [month, dayNumber] = d.date.split(" ");
          return (
            <div key={d.day} className="cal-day">
              <h3 className="cal-date">
                <span className="cal-leaf" aria-hidden="true">
                  <span>{month}</span>
                  <span>{dayNumber}</span>
                </span>
                <span>
                  <span className="cal-dow">{d.day}</span>
                  <span className="cal-full">{d.date}</span>
                </span>
              </h3>
              <ol className="cal-events">
                {d.items.map((item) => (
                  <li key={item.title} className="cal-event" data-tbd={item.time === "TBD" ? "" : undefined}>
                    <span className="cal-time">{item.time}</span>
                    <span className="cal-title">{item.title}</span>
                    {item.lastYear && <span className="cal-last">2026: {item.lastYear}</span>}
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
      <p className="cal-note">{schedule.note}</p>
    </>
  );
}

export default function Schedule() {
  return (
    <section id="schedule" data-tone="dark" className="kraft-section">
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
