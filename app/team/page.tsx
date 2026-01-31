"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Particles from "../components/particles";

const teamMembers = [
  {
    name: "Abin Bho",
    image: "/team/team1.jpg",
    role: "Director / DOP",
    description: `Following in his father's footsteps, Abin entered filmmaking at a very young age. He transforms emotions into powerful visuals through dynamic cinematography and direction. With deep character understanding, his stories come alive and leave a lasting impact.\n\nMostly, the visual architect who breathes characters to life`,
    expertise: ["Film Direction", "Cinematography", "Visual Storytelling"],
  },
  {
    name: "Ananta Poudel",
    image: "/team/team2.jpg",
    role: "Creative Director / Photographer",
    description:
      "Curious about every little thing that unfolds around, Ananta has immersed himself in the art of creation,crafting scripts, songs, and visual narratives. With a sharp eye for detail and a deep sensitivity to emotion, he transforms everyday moments into meaningful stories.\n\nMostly, the yapper of ideas and capturer of fleeting moments",
    expertise: ["Screenwriting", "Photography", "Creative Direction"],
  },
  {
    name: "Diwash Poudel",
    image: "/team/team3.jpg",
    role: "Writer / Cintematographer",
    description:
      "A nomad at heart, Diwash Poudel is constantly drawn to movement, stories, and places that shape perspective. He observes quietly, captures honestly, and believes that the best stories are often found between destinations.\n\nMostly, the recorder that writes characters fate,",
    expertise: ["Cinematography", "Script Development"],
  },
  {
    name: "Yasasvi Bho",
    image: "/team/team4.jpg",
    role: "Makeup / SFX",
    description:
      "The youngest and the most cheerful in the team, Yasasvi steps into SFX and makeup with enthusiasm and focus. Her work contributes quietly but powerfully,adding realism and texture that allow characters to fully come alive on screen.\n\nMostly, the cheerful lady who decides how a character will look",
    expertise: [
      "Makeup Artistry",
      "Special Effects",
      "Character Design",
      "Styling",
    ],
  },
  {
    name: "Niraj Tamang",
    image: "/team/team5.jpg",
    role: "Project Manager",
    description:
      "An IT geek at heart, Niraj is the backbone of organization in the team. With a sharp, structured mind, he solves problems before they become obstacles. Bridging creativity and execution, he makes sure ideas turn into action,on time.\n\nMostly, the mechanic who fixes everything",
    expertise: [
      "Project Coordination",
      "Production Planning",
      "Team Management",
    ],
  },
  {
    name: "Dipendra Thapaliya",
    image: "/team/team6.jpg",
    role: "Chief Gaffer",
    description:
      "With over 30 years of experience and the eldest member of the team, Deependra brings wisdom, discipline, and mastery to every set. His understanding of light and equipment goes beyond technique,it shapes mood, depth, and atmosphere creating magic on the screen.\n\nMostly, the wise guy who lightens and enlightens the set",
    expertise: ["Lighting Design", "Set Atmosphere"],
  },
  {
    name: "Sohail Shrestha",
    image: "/team/sohail.png",
    role: "In- House Artist / Production Manager",
    description:
      "With a passion for performance since childhood, Sohail's acting has the power to make you laugh and move you to tears. Beyond his work in front of the camera, he plays a key role in managing productions, ensuring every shoot runs smoothly and efficiently.\n\nMostly, the all rounder who does it all",
    expertise: ["Acting", "Production Management"],
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      {/* Background */}
      <div className="fixed inset-0 bg-black -z-20" />
      <Particles
        className="fixed inset-0 -z-10 pointer-events-none"
        quantity={30}
      />

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-12 px-8 md:px-16 relative">
        {/* Large decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-0 text-[25vw] font-display leading-none select-none pointer-events-none"
        >
          CREW
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-amber-500" />
              <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
                The Crew
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[1.1]">
              The faces,
              <br />
              <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text">
                mad about films
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Team - Full Width Rows */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              {/* Divider line */}
              <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl m-4 lg:m-6 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay on image */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      index % 2 === 1
                        ? "lg:from-transparent lg:to-black/50"
                        : "lg:from-black/50 lg:to-transparent"
                    } from-transparent to-transparent`}
                  />
                  {/* Mobile gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:hidden" />
                </div>

                {/* Content */}
                <div
                  className={`relative flex flex-col justify-center p-8 lg:p-16 bg-zinc-950/80 rounded-2xl m-4 lg:m-6 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {/* Index number */}
                  <span className="absolute top-8 right-8 text-7xl lg:text-8xl font-display text-white/5">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Role tag */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-px bg-amber-500" />
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-500">
                      {member.role}
                    </p>
                  </div>

                  {/* Name */}
                  <h2 className="text-4xl lg:text-5xl font-display text-white mb-6">
                    {member.name}
                  </h2>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed mb-8 max-w-lg whitespace-pre-line">
                    {member.description}
                  </p>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 text-xs uppercase tracking-wider text-zinc-500 border border-zinc-800 rounded-lg hover:border-amber-500/50 hover:text-amber-500 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Final divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-8 md:px-16 relative overflow-hidden">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"
        />
      </section>

      <Footer />
    </div>
  );
}
