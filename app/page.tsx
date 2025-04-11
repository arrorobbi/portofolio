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
      <Card className="container font-sans bg-gradient-to-br from-[#EFB758] to-[#F8E3A3] shadow-xl rounded-2xl p-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Robbi Arrofirizky</CardTitle>
          <CardDescription className="mt-4 text-lg">
            Informatics graduate with experience in system development and computer hardware support. Proficient in hardware specification analysis and systems development. Energetic, approachable, detail-oriented, and well-versed in time management. Seeking a developer role to grow and learn in system development and support.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="container font-sans mt-10">
        <Tabs defaultValue="Info">
          <TabsList className="flex justify-center gap-4">
            <TabsTrigger value="experiences" className="bg-[#E1DCC9] px-6 py-2 rounded-xl text-lg font-medium shadow">
              Experiences
            </TabsTrigger>
            <TabsTrigger value="education" className="bg-[#E1DCC9] px-6 py-2 rounded-xl text-lg font-medium shadow">
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education">
            <Card className="mt-6 shadow-md rounded-xl">
              <Accordion type="single" collapsible className="w-full bg-white rounded-xl">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="ml-6 text-lg font-semibold">
                    Universitas Pembangunan Nasional "Veteran" Jawa Timur
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <CardDescription>
                      Bachelor Degree in Computer Science, GPA 3.62/4.00
                    </CardDescription>
                    <ul className="list-disc list-inside mt-2">
                      <li>Developed educational game ORISTI for world history</li>
                      <li>Thesis: "Design and Develop Selling System Using AES-128 and QR Code Based API (Study Case: Restaurant Hollywood)"</li>
                    </ul>
                  </AccordionContent>
                  <CardFooter className="text-sm italic px-6">Jun 2018 - Jun 2023</CardFooter>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="ml-6 text-lg font-semibold">Binar Academy</AccordionTrigger>
                  <AccordionContent className="px-6">
                    <CardDescription>
                      Certificate in full-stack development, covering backend fundamentals and deployment.
                    </CardDescription>
                    <ul className="list-disc list-inside mt-2">
                      <li>Built APIs with Node.js, Express.js, and PostgreSQL</li>
                      <li>Staging server setup with ORM Sequelize</li>
                      <li>Testing with Jest and Supertest</li>
                      <li>Used Redis, Swagger for documentation, and CI/CD practices</li>
                      <li>Linux Ubuntu VPS deployment with Nginx</li>
                    </ul>
                  </AccordionContent>
                  <CardFooter className="text-sm italic px-6">Oct 2023 - Apr 2024</CardFooter>
                </AccordionItem>
              </Accordion>
            </Card>
          </TabsContent>

          <TabsContent value="experiences">
            <Card className="mt-6 shadow-md rounded-xl">
              <Accordion type="single" collapsible className="w-full bg-white rounded-xl">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="ml-6 text-lg font-semibold">
                    CV. ARTHA MUDA KENDHANA (CENDIST)
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <CardDescription>
                      Freelance work with Cendana Digital Solutions (CENDIST) to develop and deploy web-based support apps.
                    </CardDescription>
                    <ul className="list-disc list-inside mt-2">
                      <li>API development with Node.js, PostgreSQL, MongoDB</li>
                      <li>Server deployment using VPS, Nginx, SSL</li>
                    </ul>
                  </AccordionContent>
                  <CardFooter className="text-sm italic px-6">
                    Backend Engineer and Project Manager (Dec 2023 - Present)
                  </CardFooter>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="ml-6 text-lg font-semibold">
                    Lazada Logistics Indonesia
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    <CardDescription>
                      Worked under outsourcing for IT support and project management at Lazada’s fulfillment services.
                    </CardDescription>
                    <ul className="list-disc list-inside mt-2">
                      <li>Dashboard development and system support</li>
                      <li>Network assessment and NAC project collaboration</li>
                      <li>CCTV and FTP server management</li>
                      <li>Team training and infrastructure assessment</li>
                    </ul>
                  </AccordionContent>
                  <CardFooter className="text-sm italic px-6">IT Support Executive (Apr 2021 - Mar 2024)</CardFooter>
                </AccordionItem>
              </Accordion>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {[...projects].map((project, index) => (
          <Card key={index} className="bg-[#235784] rounded-2xl shadow-lg text-white p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
              <CardDescription className="text-[#94a3b8] mt-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardTitle className="ml-2 mt-4 text-lg text-[#94a3b8]">Tech Stack</CardTitle>
            <div className="mt-3 flex flex-wrap gap-3 ml-2">
              {project.tech.map((tech, techIndex) => (
                <Image
                  key={techIndex}
                  src={tech.src}
                  className="h-12 w-12 rounded-full ring-2 ring-white"
                  width={48}
                  height={48}
                  alt={tech.alt}
                />
              ))}
            </div>
            <CardFooter className="flex justify-between p-6">
              <Button variant="outline" className="text-black border-white">
                <a href={project.web} target="_blank">Web Page</a>
              </Button>
              <Button className="bg-white text-[#235784] hover:bg-gray-200">
                <a href={project.github} target="_blank">Github</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

const projects = [
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
    description: "E-commerce backend platform for academy certification.",
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
  {
    title: "Arezoo Animal Service",
    description: "Veterinary platform for booking, health management, and inventory.",
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
];
