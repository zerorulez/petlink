import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Shield, Search, UserPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Protect your pet with a personalized QR Code
            </h1>
            <p className="text-xl text-gray-600">
              Register your pet and receive a unique QR Code. Increase the
              chances of reunion in case of loss.
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 w-full sm:w-auto"
            >
              <Link href="/form">Register my pet now</Link>
            </Button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/images/dog.jpg"
              alt="Happy dog ​​with QR code collar"
              width={512}
              height={512}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Shield className="h-12 w-12 text-blue-600" />
              <h2 className="text-xl font-semibold">24/7 Protection</h2>
              <p className="text-gray-600">
                Your pet will be protected anytime, anywhere.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Search className="h-12 w-12 text-blue-600" />
              <h2 className="text-xl font-semibold">Easy to Find</h2>
              <p className="text-gray-600">
                Anyone with a smartphone can scan and help your pet get home.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <UserPen className="h-12 w-12 text-blue-600" />
              <h2 className="text-xl font-semibold">Customizable Profiles</h2>
              <p className="text-gray-600">
                Create a detailed profile for your pet, including photos,
                medical history, and special needs.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">How it Works?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <p className="text-gray-600">Register your pet</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <p className="text-gray-600">Receive your QR Code</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <p className="text-gray-600">Attach it to your pet's collar</p>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to protect your pet?
          </h2>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/form">Get Started Now</Link>
          </Button>
        </div>
      </main>

      <footer className="bg-gray-100 mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <QrCode className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-blue-600">PetLink</span>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} PetLink. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
