import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Columns } from "lucide-react"

export default function Home() {

  const link = "https://github.com/arrorobbi/learn_react.git"
  return (
    <div>
    <Card className="bg-[#FFFB00]">
        <CardHeader>
        <CardTitle>Robbi Arrofirizky</CardTitle>
        <CardDescription>Informatics graduate with experiences in developing systems and supporting hardware of computers. Proficient at assessing impact from spesification of hardware and developing in systems. Energic and approachable person with detail oriented and time management. Motivated pursuing career to learn and grow as a developer system and support.</CardDescription>
        </CardHeader>
      </Card>  
    <div className="container mx-auto grid grid-cols-3 gap-8">
    <Card className="bg-[#00E0FF] w-[420px]">
      <CardHeader>
        <CardTitle>Ismei News Portal</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
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
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
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
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
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
