"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QrCode, Phone, Mail, MapPin, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { PetSkeleton } from "@/components/PetSkeleton";

export default function Page({ params }) {
  const [pet, setPet] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/get-pet?slug=" + params.slug)
      .then((res) => res.json())
      .then((data) => {
        setPet(data);
        setIsLoading(false);
      });
  }, [params.slug]);

  const generateQRCode = async () => {
    try {
      const url = await QRCode.toDataURL(window.location.href);
      downloadQRCode(url);
    } catch (err) {
      console.error("Error generating QR code:", err);
    }
  };

  const downloadQRCode = (qrCodeUrl) => {
    if (qrCodeUrl) {
      const link = document.createElement("a");
      link.href = qrCodeUrl;
      link.download = "qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    // Adjust years and months if the current month is before the birth month
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      years--;
      months += 12;
    }

    // Adjust months if the current date is before the birth date
    if (today.getDate() < birthDate.getDate()) {
      months--;
    }

    // Calculate total months
    const totalMonths = years * 12 + months;

    if (years > 0) {
      return `${years} year${years !== 1 ? "s" : ""}`;
    } else {
      return `${totalMonths} month${totalMonths !== 1 ? "s" : ""}`;
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center pb-4 px-4">
        <Header />
        <PetSkeleton />
      </div>
    );
  }

  if (!pet) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center pb-4 px-4">
        <Header />
        <Card className="w-full max-w-3xl mt-4">
          <CardContent>
            <p className="text-center text-xl">Pet not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center pb-4 px-4">
      <Header />
      <Card className="w-full max-w-3xl mt-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Have you found <span className="capitalize">{pet.name}</span>?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_URL + pet.fileName}
                alt="Photo of Rex"
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-[300px]"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-semibold">Pet Information</h2>
              <ul className="space-y-2 capitalize">
                <li>
                  <strong>Name:</strong> {pet.name}
                </li>
                <li>
                  <strong>Breed:</strong> {pet.breed}
                </li>
                <li>
                  <strong>Age:</strong> {calculateAge(pet.birthday)}
                </li>
                <li>
                  <strong>Color:</strong> {pet.color}
                </li>
                <li>
                  <strong>Gender:</strong> {pet.gender}
                </li>
                <li>
                  <strong>Distinctive Features:</strong>{" "}
                  {pet.distinctiveFeatures}
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Contact</h2>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <User className="mr-2" size={20} />
                <span className="capitalize">{pet.contactName}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={20} />
                <span className="capitalize">{pet.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" size={20} />
                <span>{pet.email}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" size={20} />
                <span className="capitalize">{pet.location}</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="w-full sm:w-auto"
            onClick={() => {
              generateQRCode();
            }}
          >
            <QrCode />
            Download QR Code
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
