import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] py-10">
      {/* Header */}
      <Card className="container font-sans bg-gradient-to-br from-[#EFB758] to-[#F8E3A3] shadow-xl rounded-2xl p-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Robbi Arrofirizky</CardTitle>
          <p className="mt-2 text-xl font-semibold text-[#235784]">
            Network &amp; Infrastructure Engineer
          </p>
          <p className="mt-1 text-sm font-medium text-gray-700">
            Wireless (WLC) · FortiGate · SD-WAN · Access Control · Linux · Network Automation
          </p>
          <CardDescription className="mt-4 text-lg text-gray-800">
            IT infrastructure professional with 5+ years supporting multi-site networks across
            manufacturing, finance and logistics. Hands-on with wireless LAN controllers, FortiGate
            firewall policy, SD-WAN migration, Cisco NAC, access control and Linux servers. Software
            development background (Node.js, Next.js, REST APIs), applied to building network
            monitoring dashboards and automating infrastructure tasks. ITIL-trained and currently
            pursuing CCNA.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-wrap gap-3">
          {contacts.map((c) => (
            <Button key={c.label} variant="outline" className="bg-white/70 border-[#235784] text-[#235784]">
              <a href={c.href} target="_blank" rel="noopener noreferrer">
                {c.label}
              </a>
            </Button>
          ))}
        </CardFooter>
      </Card>

      {/* Skills */}
      <div className="container font-sans mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <Card key={group.title} className="bg-white shadow-md rounded-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#235784]">{group.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="bg-[#E1DCC9] px-3 py-1 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Experience / Certifications / Education */}
      <div className="container font-sans mt-10">
        <Tabs defaultValue="experiences">
          <TabsList className="flex flex-wrap justify-center gap-4 h-auto">
            <TabsTrigger value="experiences" className="bg-[#E1DCC9] px-6 py-2 rounded-xl text-lg font-medium shadow">
              Experience
            </TabsTrigger>
            <TabsTrigger value="certifications" className="bg-[#E1DCC9] px-6 py-2 rounded-xl text-lg font-medium shadow">
              Certifications
            </TabsTrigger>
            <TabsTrigger value="education" className="bg-[#E1DCC9] px-6 py-2 rounded-xl text-lg font-medium shadow">
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experiences">
            <Card className="mt-6 shadow-md rounded-xl">
              <Accordion type="single" collapsible defaultValue="exp-0" className="w-full bg-white rounded-xl">
                {experiences.map((exp, i) => (
                  <AccordionItem key={exp.company} value={`exp-${i}`}>
                    <AccordionTrigger className="mx-6 text-left">
                      <div>
                        <div className="text-lg font-semibold">{exp.role}</div>
                        <div className="text-sm font-normal text-gray-600">{exp.company}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6">
                      <CardDescription>{exp.about}</CardDescription>
                      <ul className="list-disc list-outside ml-5 mt-2 space-y-1">
                        {exp.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                    <CardFooter className="text-sm italic px-6">
                      {exp.location} · {exp.period}
                    </CardFooter>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </TabsContent>

          <TabsContent value="certifications">
            <Card className="mt-6 shadow-md rounded-xl bg-white">
              <CardContent className="pt-6 space-y-4">
                {certifications.map((c) => (
                  <div key={c.name}>
                    <div className="text-lg font-semibold">{c.name}</div>
                    <div className="text-sm text-gray-600">{c.detail}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card className="mt-6 shadow-md rounded-xl bg-white">
              <CardContent className="pt-6">
                <div className="text-lg font-semibold">
                  Bachelor of Computer Science (Informatics)
                </div>
                <div className="text-sm text-gray-600">
                  Universitas Pembangunan Nasional &quot;Veteran&quot; Jawa Timur · Surabaya
                </div>
                <div className="text-sm italic mt-1">2018 – 2023 · GPA 3.62/4.00</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Projects */}
      <div className="container font-sans mt-12">
        <h2 className="text-2xl font-bold text-center">Development Projects</h2>
        <p className="text-center text-gray-600 mt-1">
          Systems I built and deployed on Linux servers
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {projects.map((project) => (
          <Card key={project.title} className="bg-[#235784] rounded-2xl shadow-lg text-white p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
              <CardDescription className="text-[#cbd5e1] mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardTitle className="ml-2 mt-4 text-lg text-[#94a3b8]">Tech Stack</CardTitle>
            <div className="mt-3 flex flex-wrap gap-3 ml-2">
              {project.tech.map((tech) => (
                <Image
                  key={tech.alt}
                  src={tech.src}
                  className="h-12 w-12 rounded-full ring-2 ring-white"
                  width={48}
                  height={48}
                  alt={tech.alt}
                  title={tech.alt}
                />
              ))}
            </div>
            <CardFooter className="flex justify-between p-6">
              <Button variant="outline" className="text-black border-white">
                <a href={project.web} target="_blank" rel="noopener noreferrer">Web Page</a>
              </Button>
              <Button className="bg-white text-[#235784] hover:bg-gray-200">
                <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <footer className="container font-sans text-center text-sm text-gray-500 mt-12">
        Surabaya, East Java · arrorobbi@gmail.com
      </footer>
    </div>
  );
}

const contacts = [
  { label: "Email", href: "mailto:arrorobbi@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/robbiarro" },
  { label: "GitHub", href: "https://github.com/arrorobbi" },
];

const skills = [
  {
    title: "Networking",
    items: [
      "Wireless LAN Controller (WLC)",
      "Access Points",
      "FortiGate Firewall Policy",
      "SD-WAN",
      "Cisco NAC",
      "VLAN",
      "Routing & Switching",
      "Network Assessment",
      "PRTG Monitoring",
    ],
  },
  {
    title: "Security & Operations",
    items: [
      "Access Control Management",
      "Information Security",
      "IT Asset Management",
      "ITIL Practices",
    ],
  },
  {
    title: "Systems",
    items: [
      "Linux (Ubuntu Server)",
      "Nginx",
      "Active Directory / RODC",
      "VPS",
      "FTP",
      "PABX",
      "CCTV / NVR",
    ],
  },
  {
    title: "Automation & Development",
    items: [
      "Node.js",
      "Next.js",
      "TypeScript",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "CI/CD",
      "Containerization",
    ],
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
    role: "Backend Engineer & Project Manager (Freelance)",
    company: "CV Artha Muda Kendhana (CENDIST)",
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
  { name: "Cisco CCNA (200-301)", detail: "In progress" },
  { name: "ITIL Training", detail: "PT Smoore Technology Indonesia" },
  {
    name: "Binar Academy — Backend Engineering Bootcamp",
    detail:
      "Oct 2023 – Apr 2024 · REST APIs, PostgreSQL, Redis, Linux server deployment, CI/CD, microservices and containerization",
  },
];

const projects = [
  {
    title: "Arezoo Animal Service",
    description:
      "Veterinary booking and business-management platform with real-time updates, deployed and maintained on Linux.",
    tech: [
      { src: "/expressjs.png", alt: "Express.js" },
      { src: "/sequelize.png", alt: "Sequelize" },
      { src: "/github.png", alt: "GitHub" },
      { src: "/socketio.png", alt: "Socket.io" },
      { src: "/next.png", alt: "Next.js" },
      { src: "/tailwind.png", alt: "Tailwind CSS" },
    ],
    web: "https://arezooanimalservice.com/",
    github: "https://github.com/arrorobbi",
  },
  {
    title: "Ismei News Portal",
    description: "A community profile platform with integrated news portal.",
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
    description: "E-commerce backend platform built for Binar Academy certification, deployed on DigitalOcean.",
    tech: [
      { src: "/expressjs.png", alt: "Express.js" },
      { src: "/sequelize.png", alt: "Sequelize" },
      { src: "/cloudinary.png", alt: "Cloudinary" },
      { src: "/jest.png", alt: "Jest" },
      { src: "/swagger.png", alt: "Swagger" },
      { src: "/github.png", alt: "GitHub" },
      { src: "/socketio.png", alt: "Socket.io" },
      { src: "/digitalocean.png", alt: "DigitalOcean" },
    ],
    web: "https://dev.monastours.com/",
    github: "https://github.com/BEJ9-Team1/Binar-Platinum",
  },
];
