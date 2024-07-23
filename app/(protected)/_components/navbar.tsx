"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRole } from "@prisma/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { useCurrentRole } from "@/hooks/use-current-role";
import Image from "next/image";
export const Navbar = () => {
  const pathname = usePathname();
  const role = useCurrentRole();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-secondary z-50 w-full shadow-sm fixed top-0 left-0 right-0 ">
      <div className="flex justify-between items-center p-4 ">
        <div className="flex items-center">
          <Image
            onClick={() => router.push("/server")}
            alt="ITALCAR"
            className="hidden md:block cursor-pointer mr-2"
            height="100"
            width="150"
            src="/images/logo.png"
          />
        </div>
        <div className="flex ">
          <div className={"gap-x-2 items-center ml-auto  md:flex hidden"}>
            {role === UserRole.CEO ||
            role === UserRole.CFO ||
            role === UserRole.ADMIN ? (
              <Button
                className="mr-4"
                asChild
                variant={pathname === "/dashboard" ? "default" : "outline"}
              >
                <Link href="/dashboard">Items Dashboard GROS</Link>
              </Button>
            ) : null}
            {role === UserRole.PDRFIAT || role === UserRole.DTFIAT ? (
              <Button
                className="mr-4"
                asChild
                variant={pathname === "/pdrfiat" ? "default" : "outline"}
              >
                <Link href="/pdrfiat">Items Dashboard GROS FIAT</Link>
              </Button>
            ) : null}
            {role === UserRole.PDRIVECO || role === UserRole.DTIVECO ? (
              <Button
                className="mr-4"
                asChild
                variant={pathname === "/pdriveco" ? "default" : "outline"}
              >
                <Link href="/pdriveco">Items Dashboard GROS IVECO</Link>
              </Button>
            ) : null}
            {role === UserRole.CEO ||
            role === UserRole.CFO ||
            role === UserRole.ADMIN ? (
              <Button
                className="mr-4"
                asChild
                variant={pathname === "/itemssa" ? "default" : "outline"}
              >
                <Link href="/itemssa">Items Dashboard SA</Link>
              </Button>
            ) : null}
            {role === UserRole.CEO ||
            role === UserRole.CFO ||
            role === UserRole.COMMVN ||
            role === UserRole.ADMIN ? (
              <Button
                className="mr-4"
                asChild
                variant={pathname === "/carsdashboard" ? "default" : "outline"}
              >
                <Link href="/carsdashboard">Cars Dashboard</Link>
              </Button>
            ) : null}
            {role === UserRole.COMMVNFIAT ? (
              <Button
                className="mr-4"
                asChild
                variant={pathname === "/fiatcars" ? "default" : "outline"}
              >
                <Link href="/fiatcars">FIAT Cars Dashboard</Link>
              </Button>
            ) : null}
            {role === UserRole.COMMVNIVECO ? (
              <Button
                className="mr-4"
                asChild
                variant={pathname === "/ivecocars" ? "default" : "outline"}
              >
                <Link href="/ivecocars">IVECO Cars Dashboard</Link>
              </Button>
            ) : null}
            {role === UserRole.COMMVNJEEP ? (
              <Button
                className="mr-4"
                asChild
                variant={pathname === "/jeepcars" ? "default" : "outline"}
              >
                <Link href="/jeepcars">JEEP Cars Dashboard</Link>
              </Button>
            ) : null}
            {role === UserRole.CEO ||
            role === UserRole.CFO ||
            role === UserRole.SAV ||
            role === UserRole.ADMIN ? (
              <Button
                className="mr-4"
                asChild
                variant={pathname === "/dashboardsav" ? "default" : "outline"}
              >
                <Link href="/dashboardsav">SAV Dashboard</Link>
              </Button>
            ) : null}
            {role === UserRole.SAVIVECO || role === UserRole.DTIVECO ? (
              <Button
                className="mr-4"
                asChild
                variant={pathname === "/saviveco" ? "default" : "outline"}
              >
                <Link href="/saviveco">IVECO SAV Dashboard</Link>
              </Button>
            ) : null}
            {role === UserRole.SAVFIAT ? (
              <Button
                className="mr-4"
                asChild
                variant={pathname === "/savfiat" ? "default" : "outline"}
              >
                <Link href="/savfiat">FIAT SAV Dashboard</Link>
              </Button>
            ) : null}
            {role === UserRole.SAVMEG || role === UserRole.DTFIAT ? (
              <Button
                className="mr-4"
                asChild
                variant={pathname === "/savmeg" ? "default" : "outline"}
              >
                <Link href="/savmeg">SAV MEGRINE Dashboard</Link>
              </Button>
            ) : null}
            {role === UserRole.SAVKHADHRA ? (
              <Button
                className="mr-4"
                asChild
                variant={pathname === "/savkh" ? "default" : "outline"}
              >
                <Link href="/savkh">SAV KHADHRA Dashboard</Link>
              </Button>
            ) : null}
          </div>
        </div>
        <UserButton />
      </div>
    </nav>
  );
};
