# PetLink

#### Video Demo: <URL HERE>

## Project Overview

PetLink is an innovative web application built with Next.js, designed to enhance pet safety and facilitate quick reunions between lost pets and their owners. In today's fast-paced world, the bond between pets and their owners is invaluable, and PetLink aims to strengthen this connection by providing a robust, user-friendly platform for pet identification and recovery.

Our application allows pet owners to create detailed profiles for their beloved companions, storing crucial information such as name, breed, age, distinctive features, and owner contact details. Each pet profile is assigned a unique URL, which can be easily accessed via a QR code or direct link. This system ensures that if a pet goes missing, anyone who finds them can quickly access their information and contact the owner, significantly reducing the time and stress involved in reuniting pets with their families.

## Key Features

1. **Pet Profile Creation**: Owners can create comprehensive profiles for their pets, including:

   - Name, breed, and age
   - Physical characteristics (color, gender, distinctive features)
   - Owner contact information

2. **Unique Pet URLs**: Each pet profile is assigned a distinctive URL, making it easy to share and access information.

3. **Responsive Design**: Utilizing Tailwind CSS, the application is fully responsive, ensuring a seamless experience across various devices and screen sizes.

4. **Custom Font Integration**: I've incorporated Geist Sans and Geist Mono fonts for enhanced readability and aesthetic appeal.

## Project Structure and File Descriptions

1. `app/layout.js`:
   This file serves as the root layout component for our Next.js application. It incorporates custom font configurations using next/font/local for Geist Sans and Geist Mono. The layout sets up the basic HTML structure and applies the custom fonts and antialiasing to all pages.

2. `app/[slug]/page.js`:
   This dynamic route handles individual pet profiles. It fetches pet data based on the URL slug and renders the pet's information, including their image, name, breed, age, and owner contact details. I chose a dynamic route to allow for easy scaling of pet profiles without needing to create individual pages for each pet.

3. `lib/utils.js`:
   This utility file contains helper functions, specifically the `cn` function that combines clsx and tailwind-merge. This approach allows for efficient class name merging and helps avoid conflicts in Tailwind CSS classes, enhancing the maintainability of our styling code.

4. `tailwind.config.js`:
   Our Tailwind CSS configuration file extends the default theme with custom color schemes, including support for dark mode. I've defined a comprehensive color palette using HSL values, allowing for easy theming and consistency across the application. The decision to use HSL was made to facilitate future theme customization and ensure accessibility.

5. `README.md`:
   This file (the one you're reading now) provides a detailed overview of the project, its features, file structure, and design decisions. It serves as the primary documentation for developers and users alike.

## Design Decisions and Rationale

1. **Next.js Framework**: I chose Next.js for its server-side rendering capabilities, optimized performance, and excellent developer experience. The framework's file-based routing system perfectly suits our need for dynamic pet profile pages.

2. **Tailwind CSS**: The decision to use Tailwind CSS was driven by its utility-first approach, which allows for rapid UI development and easy customization. The framework's JIT (Just-In-Time) compiler ensures that I only ship the CSS I use, keeping our stylesheets lean and efficient.

3. **Custom Fonts**: By incorporating Geist Sans and Geist Mono, I aimed to create a unique and modern visual identity for PetLink. These fonts offer excellent readability across different screen sizes and devices.

4. **Dynamic Routing**: The `[slug]` based dynamic routing in Next.js allows us to create an unlimited number of pet profiles without manually defining routes. This scalability is crucial for the potential growth of our user base.

5. **HSL Color System**: Our choice of HSL for color definitions in the Tailwind configuration provides greater flexibility for future theming options and ensures consistent color relationships across the application.

## Future Enhancements

While PetLink already offers a robust solution for pet identification, I have several ideas for future enhancements:

1. User authentication system for pet owners to manage multiple pets
2. Integration with local animal shelters and veterinary clinics
3. Push notifications when qrcode scaned

## Conclusion

PetLink represents a significant step forward in pet safety and recovery. By leveraging modern web technologies and thoughtful design, I've created a platform that not only serves a crucial need but does so with efficiency and style. I am proud of what I've accomplished and excited about the potential impact PetLink can have on the lives of pets and their owners.
