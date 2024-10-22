"use server";
import { supabase } from "@/lib/supabase";

export async function registerPet(formData) {
  const name = formData.get("name");
  const species = formData.get("species");
  const slug = formData.get("slug");
  const breed = formData.get("breed");
  const birthday = formData.get("birthday");
  const color = formData.get("color");
  const gender = formData.get("gender");
  const distinctiveFeatures = formData.get("distinctive-features");
  const contactName = formData.get("contact-name");
  const phone = formData.get("phone");
  const email = formData.get("email");
  const location = formData.get("location");
  const fileName = formData.get("fileName");

  const { data, error } = await supabase
    .from("pets")
    .insert([
      {
        name,
        species,
        slug,
        breed,
        birthday,
        color,
        gender,
        distinctiveFeatures,
        contactName,
        phone,
        email,
        location,
        fileName,
      },
    ])
    .select();

  return { success: true, message: "Pet registered successfully" };
}
