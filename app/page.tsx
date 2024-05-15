import * as React from "react"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {

  return (
    <div>
    <Card className="container font-sans mt-4 bg-[#FFFB00]">
        <CardHeader>
        <CardTitle>Robbi Arrofirizky</CardTitle>
        <CardDescription>Informatics graduate with experiences in developing systems and supporting hardware of computers. Proficient at assessing impact from spesification of hardware and developing in systems. Energic and approachable person with detail oriented and time management. Motivated pursuing career to learn and grow as a developer system and support.</CardDescription>
        </CardHeader>
      </Card>  
    <div className="container font-sans mt-4">
      <Tabs defaultValue="Info">
    <TabsList>
      <TabsTrigger value="experiences">Experiences</TabsTrigger>
      <TabsTrigger value="education">Education</TabsTrigger>
    </TabsList>
    <TabsContent value="education">
    <Card>
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="ml-6">Universitas Pembangunan Nasional &quot;Veteran&quot; Jawa Timur</AccordionTrigger>
        <AccordionContent>
          <CardDescription className="ml-4">
          Bachelor Degree in Computer Science, GPA 3.62/4.00
          </CardDescription>
          <ul className="list-inside list-disc ml-6">
            <li>Develop and monograph game for education ORISTI (World History Education)</li>
            <li>Thesis of Bachelor with title &quot;Design and Develop Selling System Using AES-128 and QR Code Based API (Aplication Programing Interface, Study Case : Restaurant Hollywood)&quot;</li>
          </ul>
        </AccordionContent>
          <CardFooter className="text-sm italic">Jun 2018 - Jun 2023</CardFooter>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="ml-6">Binar Academy</AccordionTrigger>
        <AccordionContent>
          <CardDescription className="ml-4">
          Certificate. in Binar Academy is providing course and bootcamp for information technology
          </CardDescription>
          <ul className="list-inside list-disc ml-6">
            <li>Creating 2 Challanges server API using NodeJs, ExpressJs and Postgresql</li>
            <li>Developing and setup staging server using PostgreSQL and ORM Sequelize</li>
            <li>Integration testing using Jest and Supertest</li>
            <li>Build RestAPI with low latency response</li>
            <li>Create Documentation using swagger</li>
            <li>Create Chat Services in 1 of 2 Challange</li>
            <li>Learn what and how redis is</li>
            <li>Setup Linux Ubuntu Server for staging deployment with Nginx, PostgreSQL, NodeJS and the dependencies</li>
            <li>Setup RDMS with connecting to VPS databases</li>
            <li>Implementation of microservices using CI/ID and containerization</li>
          </ul>
        </AccordionContent>
          <CardFooter className="text-sm italic">Oct 2023 - Apr 2024</CardFooter>
      </AccordionItem>
    </Accordion>
      </Card>
    </TabsContent>
    <TabsContent value="experiences">
      <Card>
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="ml-6">CV. ARTHA MUDA KENDHANA (CENDIST)</AccordionTrigger>
        <AccordionContent>
          <CardDescription className="ml-4">
          Working freelance with one of product from CV. ARTHA MUDA KENDHANA called Cendana Digital Solutions (CENDIST) is looking project for development and deploying support apps with web based
          </CardDescription>
          <ul className="list-inside list-disc ml-6">
            <li>Create technical ideas based on user story information</li>
            <li>Create technical frameworks and sprint</li>
            <li>Created an API server using NodeJS and ExpressJS</li>
            <li>Create an API server with a postgreSQL database, sequelize ORM, MongoDB and Mongoose ORMThe API server has several features</li>
            <li>Preparing the server for deployment using VPS Nginx Postgresql SSL and others</li>
          </ul>
        </AccordionContent>
          <CardFooter className="text-sm italic">Backend Engineer and Project Manager (Dec 2023 - Present)</CardFooter>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="ml-6">Lazada Logistics Indonesia</AccordionTrigger>
        <AccordionContent>
          <CardDescription className="ml-4">
          PT. Lastana Express (Lazada Logistics) Indonesia is a part of Lazada Indonesia, which focused on B2C delivery and warehousing. From picking up, sorting and delivery to destination. Operating a warehouse in fullfilment services with local and international brands.
          </CardDescription>
          <ul className="list-inside list-disc ml-6">
            <li>Woking in Lazada Logistics Indonesia with contract status and under Outsourcing</li>
            <li>Create dashboard and approval system with alibaba database and opensource system</li>
            <li>Supporting bugs system and report to second level</li>
            <li>Participate in assessing NAC (Network Access Control) project and colaborate with cisco team</li>
            <li>Paticipant of refreshment server devices in warehouse area</li>
            <li>Assessing network 3 sites of warehouse in yearly</li>
            <li>Condut Project CCTV Monitoring 8 sites of warehouse of logistics for having a dashboard</li>
            <li>Manage and training 8 team to have infrastructure of computer with ubuntu-server operation system</li>
            <li>Assessment CCTV for next preventive action in colaborate with QA Logistics departement</li>
            <li>Create FTP server for software bank</li>
          </ul>
        </AccordionContent>
          <CardFooter className="text-sm italic">IT Support Executive (Apr 2021 - Mar 2024)</CardFooter>
      </AccordionItem>
    </Accordion>
      </Card>
    </TabsContent>
  </Tabs>
    </div>
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
    <Card className="bg-[#00E0FF] w-[420px]">
      <CardHeader>
        <CardTitle>Ismei News Portal</CardTitle>
        <CardDescription>The project is focused on Comunity Profile with having news portal</CardDescription>
      </CardHeader>
      <CardTitle className="ml-6 text-base">Tech Stack</CardTitle>
      <div className="mt-3 flex overflow-hidden ml-6 mt-2">
      <Image
      src="/nodejs.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <Image
      src="/expressjs.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <Image
      src="/mongodb.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <Image
      src="/mongoose.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline"><a href="https://ismei.org">Web Page</a></Button>
        <Button><a href="https://github.com/arrorobbi">Github</a></Button>
      </CardFooter>
    </Card>
    <Card className="bg-[#00E0FF] w-[420px]">
      <CardHeader>
        <CardTitle>Monas Tours</CardTitle>
        <CardDescription>Monas Tours needs some content management system for their marketing</CardDescription>
      </CardHeader>
      <CardTitle className="ml-6 text-base">Tech Stack</CardTitle>
      <div className="mt-3 flex overflow-hidden ml-6 mt-2">
      <Image
      src="/nodejs.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <Image
      src="/expressjs.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <Image
      src="/Postgresql_elephant.svg.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <Image
      src="/sequelize.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline"><a href="https://dev.monastours.com/">Web Page</a></Button>
        <Button><a href="https://github.com/arrorobbi">Github</a></Button>
      </CardFooter>
    </Card>
    <Card className="bg-[#00E0FF] w-[420px]">
      <CardHeader>
        <CardTitle>BingleShop</CardTitle>
        <CardDescription>BingleShop is output project from getting Certificate on Binar Academy</CardDescription>
      </CardHeader>
      <CardTitle className="ml-6 text-base">Tech Stack</CardTitle>
      <div className="mt-3 columns-3 flex overflow-hidden ml-6 mt-2">
      <Image
      src="/expressjs.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      <Image
      src="/sequelize.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      <Image
      src="/cloudinary.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      <Image
      src="/jest.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      <Image
      src="/swagger.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      <Image
      src="/github.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      <Image
      src="/socketio.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      <Image
      src="/digitalocean.png"
      className="inline-block h-12 w-12 rounded-full ring-3 ring-white"
      width={500}
      height={500}
      alt="Picture of the author"
    />
      </div>
      <CardContent>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline"><a href="https://dev.monastours.com/">Web Page</a></Button>
        <Button><a href="https://github.com/arrorobbi/23001058_9_Rob_BingleShop_Challenge-Gold">Github</a></Button>
      </CardFooter>
    </Card>
    </div>
    </div>
  );
}
