import { RiStarFill } from "@remixicon/react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Review } from "../review";

export function ReviewCard({ fallback, name, review }: Review) {
  return (
    <Card className="size-full border-none bg-primary/25">
      <CardHeader>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <RiStarFill
              key={index.toString()}
              className="size-3 text-primary"
            />
          ))}
        </div>
        <CardTitle className="flex items-center gap-2">
          <Avatar>
            <AvatarFallback className="flex items-center justify-center bg-gold font-bold bmd:text-base text-foreground text-xs">
              {fallback}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="font-medium text-sm">{name}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-primary-foreground text-sm">{review}</p>
      </CardContent>
    </Card>
  );
}
