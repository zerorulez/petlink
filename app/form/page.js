"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/header";
import { registerPet } from "./actions/registerPet";
import slugify from "slugify";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "@/components/SubmitButton";

export default function Page() {
  const { pending } = useFormStatus();
  const router = useRouter();

  const handleSubmit = async (formData) => {
    try {
      const name = formData.get("name");
      const photo = formData.get("photo");

      if (photo.size >= 5242880) {
        alert("You can only send photos up to 5mb in size.");
        return;
      }

      const baseSlug = slugify(name, { lower: true, strict: true });
      const randomSuffix = Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0");
      const slug = `${baseSlug}-${randomSuffix}`;

      formData.set("slug", slug);

      const fileExtension = photo.name.split(".").pop();
      const fileName = `${slug}.${fileExtension}`;
      formData.set("fileName", fileName);
      const res = await fetch(
        `/api/upload-photo?fileName=${encodeURIComponent(
          fileName
        )}&fileType=${encodeURIComponent(photo.type)}`
      );
      const { url } = await res.json();

      await fetch(url, {
        method: "PUT",
        body: photo,
        headers: {
          "Content-Type": photo.type,
        },
      });

      const result = await registerPet(formData);

      if (result.success) {
        router.push("/" + slug);
      } else {
        alert("An error occurred while registering the pet.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white pb-4 px-4 flex flex-col items-center justify-center">
      <Header />
      <Card className="w-full max-w-4xl my-12">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Pet Registration
          </CardTitle>
        </CardHeader>
        <form action={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Pet Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Pet Name</Label>
                  <Input id="name" name="name" placeholder="Rex" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="species">Species</Label>
                  <Select id="species" name="species" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select species" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">Dog</SelectItem>
                      <SelectItem value="cat">Cat</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="breed">Breed</Label>
                  <Input
                    name="breed"
                    id="breed"
                    placeholder="Labrador Retriever"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthday">Birthday</Label>
                  <Input name="birthday" id="birthday" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="color">Color</Label>
                  <Input
                    name="color"
                    id="color"
                    placeholder="Yellow"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select id="gender" name="gender" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="distinctive-features">
                  Distinctive Features
                </Label>
                <Textarea
                  id="distinctive-features"
                  name="distinctive-features"
                  placeholder="Blue collar, white spot on chest, medical history and special needs"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">
                    Responsible Person's Name
                  </Label>
                  <Input
                    id="contact-name"
                    name="contact-name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 555-1234"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@domain.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="New York, NY"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Pet Photo</h2>
              <div className="space-y-2">
                <Label htmlFor="photo">Upload Photo</Label>
                <Input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
