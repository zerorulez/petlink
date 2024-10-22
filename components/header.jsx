import { QrCode } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <QrCode className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-600">PetLink</span>
        </Link>
      </nav>
    </header>
  );
}
