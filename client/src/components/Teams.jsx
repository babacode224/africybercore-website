import React from 'react'

const Teams = () => {
  return (
    <div className="mt-20">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h3>
    <p className="text-muted-foreground max-w-2xl mx-auto">
      A diverse group of cybersecurity experts, engineers, and innovators dedicated to Africa’s digital future
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        name: "AbdulQuadri Omoloju",
        role: "Chief Executive Officer",
        image: "/third.jpg",
        bio: "Visionary leader driving digital resilience across Africa.",
        linkedin: "#"
      },
      {
        name: "Ahmad Adegoke",
        role: "Chief Technology Officer",
        image: "/second.png",
        bio: "Specialist in threat intelligence and risk management.",
        linkedin: "#"
      },
      {
        name: "Abdulhamid Adegoke,",
        role: "Chief Operation Officer",
        image: "/first.png",
        bio: "Expert in scalable, secure applications for African markets.",
        linkedin: "#"
      },
    ].map((member, idx) => (
      <div
        key={idx}
        className="bg-card rounded-2xl shadow-lg p-6 text-center border border-border hover-lift transition-all duration-300"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
        />
        <h4 className="text-xl font-semibold text-foreground">{member.name}</h4>
        <p className="text-primary font-medium mb-2">{member.role}</p>
        <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
        <div className="flex justify-center space-x-3">
          <a
            href={member.linkedin}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4v15h-4v-15zm7 0h3.8v2h.05c.53-1 1.83-2.05 3.77-2.05 4.04 0 4.78 2.64 4.78 6.08v9.02h-4v-8.01c0-1.91-.03-4.37-2.67-4.37-2.67 0-3.08 2.09-3.08 4.24v8.14h-4v-15z"/>
            </svg>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default Teams