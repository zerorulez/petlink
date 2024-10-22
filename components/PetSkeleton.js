"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PetSkeleton() {
  return (
    <Card className="w-full max-w-3xl mt-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="bg-gray-200 rounded-lg w-full h-[300px]"></div>
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">Pet Information</h2>
            <ul className="space-y-2">
              {[...Array(6)].map((_, i) => (
                <li key={i} className="h-6 bg-gray-200 rounded w-3/4"></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="flex flex-col space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-6 bg-gray-200 rounded w-3/4"></div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
