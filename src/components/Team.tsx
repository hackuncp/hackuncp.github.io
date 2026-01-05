'use client';

interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export default function Team() {
  const advisor: TeamMember = {
    name: "Mark Hunt",
    role: "Advisor",
    photo: "./team/mark_hunt.png",
  };

  const officers: TeamMember[] = [
    { name: "Najmul Hasan", role: "Lead Organizer", photo: "./team/najmul_hasan.jpg" },
    { name: "Md. Tanzimul A. Fahim", role: "Organizer", photo: "./team/fahim.jpeg" },
    { name: "Aidan Kuster", role: "Organizer", photo: "./team/aiden.JPEG" },
    { name: "Marcus Bland", role: "Organizer", photo: "./team/marcus.jpeg" },
  ];

  const PersonCard = ({ person }: { person: TeamMember }) => (
    <div className="text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-slate-800">
        <img
          src={person.photo}
          alt={person.name}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
      <p className="text-white font-medium">{person.name}</p>
      <p className="text-gray-500 text-sm">{person.role}</p>
    </div>
  );

  return (
    <section id="team-section" className="py-32 relative bg-black">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16">
          Team
        </h2>

        {/* Advisor */}
        <div className="mb-16">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-8">Advisor</p>
          <PersonCard person={advisor} />
        </div>

        {/* Officers */}
        <div>
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-8">Organizers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {officers.map((person, index) => (
              <PersonCard key={index} person={person} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
