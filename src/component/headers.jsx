import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import LogoImage from "../../public/images/logo.jpg";

export default function Header() {
  return (
    <div className="bg-[#306A9F] text-neutral-100 flex justify-between items-center px-4">
      <div className="bg-[#306A9F] container mx-auto flex items-center justify-between py-2">
        <Link href="/">
          <Image src={LogoImage} alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Link
          className="bg-[#D0A7A7] py-2 px-4 text-black rounded-lg font-bold"
          href="/sign-up"
        >
          Sign Up
        </Link>
        <Link
          className="bg-[#D0A7A7] py-2 px-4 text-black rounded-lg font-bold"
          href="/sign-in"
        >
          Sign In
        </Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
