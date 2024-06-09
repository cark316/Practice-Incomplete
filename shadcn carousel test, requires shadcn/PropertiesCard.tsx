import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PropertiesCard = () => {
  return (
    <>
      <Card className="w-[40vh] overflow-hidden">
        <CardContent className="flex items-center justify-center h-[30vh] bg-slate-500 m-[2vh] rounded-xl"></CardContent>
        <CardHeader>
          <CardTitle className="font-semibold text-[2.4vh]">
            Seaside Serenity Villa
          </CardTitle>
          <CardDescription className="text[1.8vh]">
            A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban
            neighborhood.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <ul className="flex flex-col">
            <li>Price</li>
            <li className="font-semibold text-[2.4vh]">$550,000</li>
          </ul>
          <Button className="p-[2.4vh] rounded-xl">
            View Property Details
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default PropertiesCard;
