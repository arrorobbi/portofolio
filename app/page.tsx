import * as React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Award,
  Briefcase,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Server,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const navy = "#235784";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Sticky nav — horizontally scrollable on phones */}
      <nav className="sticky top-0 z-50 border-b border-black/5 bg-[#faf7f0]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
          <a
            href="#top"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#235784] text-sm font-bold text-[#EFB758]"
          >
            RA
          </a>
          <div className="-mr-4 flex gap-1 overflow-x-auto pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-[#EFB758]/25 hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative overflow-hidden bg-[#235784] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#EFB758]/30 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 pb-14 pt-12 sm:pb-20 sm:pt-20">
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20 motion-reduce:animate-none">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to network &amp; infrastructure roles
          </span>

          <h1 className="mt-5 animate-fade-up text-4xl font-extrabold tracking-tight [animation-delay:80ms] motion-reduce:animate-none sm:text-6xl">
            Robbi Arrofirizky
          </h1>
          <p className="mt-2 animate-fade-up text-xl font-semibold text-[#EFB758] [animation-delay:160ms] motion-reduce:animate-none sm:text-2xl">
            Network &amp; Infrastructure Engineer
          </p>
          <p className="mt-4 max-w-2xl animate-fade-up text-base leading-relaxed text-white/80 [animation-delay:240ms] motion-reduce:animate-none sm:text-lg">
            5+ years keeping multi-site networks running across manufacturing, finance and
            logistics — wireless controllers, FortiGate &amp; SD-WAN, access control and Linux
            servers. I also write code, so I automate the boring parts.
          </p>

          <div className="mt-4 flex animate-fade-up items-center gap-1.5 text-sm text-white/70 [animation-delay:280ms] motion-reduce:animate-none">
            <MapPin className="h-4 w-4" /> Surabaya, East Java
          </div>

          <div className="mt-7 flex animate-fade-up flex-col gap-3 [animation-delay:320ms] motion-reduce:animate-none sm:flex-row">
            <a
              href="mailto:arrorobbi@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#EFB758] px-5 py-3 font-semibold text-slate-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#f3c46f] active:translate-y-0"
            >
              <Mail className="h-4 w-4" /> Email me
            </a>
            <div className="grid grid-cols-2 gap-3 sm:flex">
              <a
                href="https://linkedin.com/in/robbiarro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold ring-1 ring-white/25 transition hover:bg-white/20"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/arrorobbi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold ring-1 ring-white/25 transition hover:bg-white/20"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          <dl className="mt-10 grid animate-fade-up grid-cols-3 gap-3 [animation-delay:400ms] motion-reduce:animate-none sm:max-w-lg">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col rounded-2xl bg-white/10 p-3 text-center ring-1 ring-white/15">
                <dt className="order-2 text-[11px] leading-tight text-white/70 sm:text-xs">{s.label}</dt>
                <dd className="text-2xl font-extrabold text-[#EFB758] sm:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        {/* Skills */}
        <Section id="skills" eyebrow="What I work with" title="Skills">
          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#EFB758]/25 text-[#235784] transition group-hover:bg-[#EFB758]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-bold">{group.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-[13px] font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Experience timeline */}
        <Section id="experience" eyebrow="Where I've been" title="Experience">
          <Accordion
            type="multiple"
            defaultValue={["exp-0"]}
            className="relative ml-3 border-l-2 border-dashed border-[#235784]/25"
          >
            {experiences.map((exp, i) => (
              <AccordionItem key={exp.company} value={`exp-${i}`} className="relative border-b-0 pb-4 pl-6">
                <span
                  aria-hidden
                  className={`absolute -left-[9px] top-5 h-4 w-4 rounded-full ring-4 ring-[#faf7f0] ${
                    i === 0 ? "bg-[#EFB758]" : "bg-[#235784]"
                  }`}
                />
                <div className="rounded-2xl border border-black/5 bg-white px-4 shadow-sm sm:px-5">
                  <AccordionTrigger className="gap-3 py-4 text-left hover:no-underline">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-base font-bold sm:text-lg">{exp.role}</span>
                        {i === 0 && (
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="mt-0.5 text-sm font-medium text-[#235784]">{exp.company}</div>
                      <div className="mt-0.5 text-xs text-slate-500">
                        {exp.period} · {exp.location}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm italic text-slate-500">{exp.about}</p>
                    <ul className="mt-3 space-y-2">
                      {exp.points.map((p) => (
                        <li key={p} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#EFB758]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        {/* Certifications & Education */}
        <Section id="credentials" eyebrow="Learning" title="Certifications & Education">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 font-bold">
                <Award className="h-5 w-5 text-[#235784]" /> Certifications
              </div>
              <ul className="mt-4 space-y-4">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <div className="flex flex-wrap items-center gap-2 font-semibold">
                      {c.name}
                      {c.badge && (
                        <span className="rounded-full bg-[#EFB758]/30 px-2 py-0.5 text-[11px] font-semibold text-slate-800">
                          {c.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-slate-500">{c.detail}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#EFB758] to-[#F8E3A3] p-5 shadow-sm">
              <div className="flex items-center gap-2 font-bold">
                <GraduationCap className="h-5 w-5" /> Education
              </div>
              <div className="mt-4 text-lg font-bold">Bachelor of Computer Science (Informatics)</div>
              <div className="text-sm text-slate-700">
                Universitas Pembangunan Nasional &quot;Veteran&quot; Jawa Timur
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full bg-white/60 px-3 py-1">2018 – 2023</span>
                <span className="rounded-full bg-white/60 px-3 py-1">GPA 3.62 / 4.00</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Projects — swipe on mobile, grid on desktop */}
        <Section id="projects" eyebrow="Built & deployed on Linux" title="Development Projects">
          <p className="-mt-2 mb-4 text-sm text-slate-500 sm:hidden">Swipe to see more →</p>
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-2 [&::-webkit-scrollbar]:hidden">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex w-[85%] shrink-0 snap-center flex-col rounded-2xl p-5 text-white shadow-lg transition hover:-translate-y-1 sm:w-auto"
                style={{ background: `linear-gradient(145deg, ${navy}, #173b5c)` }}
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/75">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Image
                      key={tech.alt}
                      src={tech.src}
                      className="h-9 w-9 rounded-full bg-white object-contain p-1"
                      width={36}
                      height={36}
                      alt={tech.alt}
                      title={tech.alt}
                    />
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <a
                    href={project.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#EFB758] py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-[#f3c46f]"
                  >
                    <ExternalLink className="h-4 w-4" /> Live site
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white/10 py-2.5 text-sm font-semibold ring-1 ring-white/25 transition hover:bg-white/20"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </main>

      {/* Closing CTA */}
      <footer className="mt-8 bg-[#235784] px-4 py-12 text-center text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">Let&apos;s work together</h2>
        <p className="mx-auto mt-2 max-w-md text-white/75">
          Looking for someone to run and automate your network? I&apos;d love to hear from you.
        </p>
        <a
          href="mailto:arrorobbi@gmail.com"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#EFB758] px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-[#f3c46f]"
        >
          <Mail className="h-4 w-4" /> arrorobbi@gmail.com
        </a>
        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Robbi Arrofirizky</p>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-12 sm:py-16">
      <p className="text-xs font-bold uppercase tracking-widest text-[#c98f2a]">{eyebrow}</p>
      <h2 className="mb-6 mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#credentials", label: "Certifications" },
  { href: "#projects", label: "Projects" },
];

const stats = [
  { value: "5+", label: "years in IT" },
  { value: "3", label: "industries" },
  { value: "8", label: "sites monitored" },
];

const skills = [
  {
    title: "Networking",
    icon: Wifi,
    items: [
      "Wireless LAN Controller",
      "Access Points",
      "FortiGate Firewall",
      "SD-WAN",
      "Cisco NAC",
      "VLAN",
      "Routing & Switching",
      "Network Assessment",
      "PRTG",
    ],
  },
  {
    title: "Security & Operations",
    icon: ShieldCheck,
    items: ["Access Control", "Information Security", "IT Asset Management", "ITIL Practices"],
  },
  {
    title: "Systems",
    icon: Server,
    items: ["Linux (Ubuntu Server)", "Nginx", "Active Directory / RODC", "VPS", "FTP", "PABX", "CCTV / NVR"],
  },
  {
    title: "Automation & Dev",
    icon: Code2,
    items: ["Node.js", "Next.js", "TypeScript", "REST APIs", "PostgreSQL", "MongoDB", "CI/CD", "Containers"],
  },
];

const experiences = [
  {
    role: "IT Specialist",
    company: "PT Smoore Technology Indonesia",
    location: "Indonesia",
    period: "Jun 2025 – Present",
    about:
      "Indonesian subsidiary of SMOORE Group (Shenzhen, China), an R&D and manufacturing company for atomization technology products.",
    points: [
      "Manage the site Wireless LAN Controller (WLC) and access points, maintaining coverage and stability for production and office areas",
      "Implement information security controls in line with group policy",
      "Manage user access control, enforcing access rules and reviewing permissions",
      "Maintain the site IT asset inventory",
      "Completed ITIL training and apply ITIL practices to incident and service request handling",
    ],
  },
  {
    role: "IT Technical Support (Network & Infrastructure)",
    company: "PT Clipan Finance Indonesia Tbk",
    location: "Surabaya",
    period: "Jul 2024 – May 2025",
    about:
      "Publicly listed multifinance company providing vehicle and heavy-equipment financing through a national branch network.",
    points: [
      "Migrated branch offices from proxy-based internet access to Fortinet SD-WAN, configuring and maintaining firewall policies on FortiGate",
      "Built a centralized monitoring dashboard for all branches using the PRTG API and Next.js, giving the team a single real-time view of device and link status",
      "Provided Level 2 support for network, hardware and software issues across branch offices",
      "Supported Read-Only Domain Controller (RODC) deployment at branches with the Data Center team",
      "Maintained branch PABX systems and led branch asset audits",
      "Built an internal knowledge-base portal enabling users to resolve common issues on their own",
    ],
  },
  {
    role: "Backend Engineer & Project Manager",
    company: "CV Artha Muda Kendhana (CENDIST) · Freelance",
    location: "Sidoarjo",
    period: "Dec 2023 – Feb 2025",
    about: "Freelance development and deployment of web-based support applications.",
    points: [
      "Designed and built REST API servers with Node.js/Express, PostgreSQL (Sequelize) and MongoDB (Mongoose)",
      "Deployed and secured production servers on VPS with Linux, Nginx, PostgreSQL and SSL",
      "Translated user stories into technical designs and ran sprint planning, cutting development time by 50–70%",
    ],
  },
  {
    role: "IT Support Executive",
    company: "PT Lastana Express (Lazada Logistics Indonesia)",
    location: "Sidoarjo",
    period: "Apr 2021 – Mar 2024",
    about:
      "Lazada's logistics arm, operating pickup, sorting, delivery and fulfilment warehouses for local and international brands.",
    points: [
      "Worked with the Cisco team on Network Access Control (NAC) rollout across warehouse sites, improving Wi-Fi roaming stability for warehouse devices",
      "Performed annual network assessments across 3 warehouse sites, analyzing coverage, performance and capacity",
      "Participated in the server hardware refresh for warehouse operations",
      "Led a CCTV monitoring project covering 8 warehouse sites, delivering a central dashboard used with the QA Logistics team",
      "Built an internal FTP software repository on Ubuntu Server, speeding up software distribution to users",
      "Trained a team of 8 to set up and manage computer infrastructure on Ubuntu Server",
      "Developed a dashboard and approval workflow system, cutting approval time by 1–2 working days",
    ],
  },
];

const certifications = [
  { name: "Cisco CCNA (200-301)", badge: "In progress", detail: "Routing, switching & network fundamentals" },
  { name: "ITIL Training", badge: "", detail: "PT Smoore Technology Indonesia" },
  {
    name: "Binar Academy — Backend Engineering",
    badge: "",
    detail: "Oct 2023 – Apr 2024 · REST APIs, PostgreSQL, Redis, Linux deployment, CI/CD, containers",
  },
];

const projects = [
  {
    title: "Arezoo Animal Service",
    description:
      "Veterinary booking and business-management platform with real-time updates, deployed and maintained on Linux.",
    tech: [
      { src: "/next.png", alt: "Next.js" },
      { src: "/expressjs.png", alt: "Express.js" },
      { src: "/sequelize.png", alt: "Sequelize" },
      { src: "/socketio.png", alt: "Socket.io" },
      { src: "/tailwind.png", alt: "Tailwind CSS" },
    ],
    web: "https://arezooanimalservice.com/",
    github: "https://github.com/arrorobbi",
  },
  {
    title: "Ismei News Portal",
    description: "A community profile platform with an integrated news portal.",
    tech: [
      { src: "/nodejs.png", alt: "Node.js" },
      { src: "/expressjs.png", alt: "Express.js" },
      { src: "/mongodb.png", alt: "MongoDB" },
      { src: "/mongoose.png", alt: "Mongoose" },
    ],
    web: "https://ismei.org",
    github: "https://github.com/arrorobbi",
  },
  {
    title: "Monas Tours",
    description: "A content management system for tour marketing.",
    tech: [
      { src: "/nodejs.png", alt: "Node.js" },
      { src: "/expressjs.png", alt: "Express.js" },
      { src: "/Postgresql_elephant.svg.png", alt: "PostgreSQL" },
      { src: "/sequelize.png", alt: "Sequelize" },
    ],
    web: "https://monastours.com/",
    github: "https://github.com/arrorobbi",
  },
  {
    title: "BingleShop",
    description: "E-commerce backend built for Binar Academy certification, deployed on DigitalOcean.",
    tech: [
      { src: "/expressjs.png", alt: "Express.js" },
      { src: "/sequelize.png", alt: "Sequelize" },
      { src: "/jest.png", alt: "Jest" },
      { src: "/swagger.png", alt: "Swagger" },
      { src: "/socketio.png", alt: "Socket.io" },
      { src: "/digitalocean.png", alt: "DigitalOcean" },
    ],
    web: "https://dev.monastours.com/",
    github: "https://github.com/BEJ9-Team1/Binar-Platinum",
  },
];
