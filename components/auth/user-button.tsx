"use client";
import { UserRole } from "@prisma/client";

import {
  FaUser,
  FaCog,
  FaTools,
  FaUserCircle,
  FaChartLine,
  FaCar,
  FaLightbulb,
  FaUserShield,
  FaEnvelope,
} from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";
import Link from "next/link"; // Import Link component from Next.js
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import { useCurrentRole } from "@/hooks/use-current-role";

export const UserButton = () => {
  const user = useCurrentUser();
  const role = useCurrentRole();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <div className="md:hidden">
          {role === UserRole.CEO ||
          role === UserRole.CFO ||
          role === UserRole.ADMIN ? (
            <Link href="/dashboard">
              {" "}
              {/* Link to /settings */}
              <DropdownMenuItem>
                <FaChartLine className="h-4 w-4 mr-2" />{" "}
                {/* FaCog settings icon */}
                Items Gros
              </DropdownMenuItem>
            </Link>
          ) : null}
          {role === UserRole.PDRFIAT || role === UserRole.DTFIAT ? (
            <Link href="/pdrfiat">
              {" "}
              {/* Link to /settings */}
              <DropdownMenuItem>
                <FaChartLine className="h-4 w-4 mr-2" />{" "}
                {/* FaCog settings icon */}
                Items Gros Fiat
              </DropdownMenuItem>
            </Link>
          ) : null}
          {role === UserRole.PDRIVECO || role === UserRole.DTIVECO ? (
            <Link href="/pdriveco">
              {" "}
              {/* Link to /settings */}
              <DropdownMenuItem>
                <FaChartLine className="h-4 w-4 mr-2" />{" "}
                {/* FaCog settings icon */}
                Items Gros Iveco
              </DropdownMenuItem>
            </Link>
          ) : null}
          {role === UserRole.CEO ||
          role === UserRole.CFO ||
          role === UserRole.ADMIN ? (
            <Link href="/itemssa">
              {" "}
              {/* Link to /settings */}
              <DropdownMenuItem>
                <FaChartLine className="h-4 w-4 mr-2" />{" "}
                {/* FaCog settings icon */}
                Items SA
              </DropdownMenuItem>
            </Link>
          ) : null}
          {role === UserRole.CEO ||
          role === UserRole.CFO ||
          role === UserRole.COMMVN ||
          role === UserRole.ADMIN ? (
            <Link href="/carsdashboard">
              {" "}
              {/* Link to /settings */}
              <DropdownMenuItem>
                <FaCar className="h-4 w-4 mr-2" /> {/* FaCog settings icon */}
                Cars SA
              </DropdownMenuItem>
            </Link>
          ) : null}
          {role === UserRole.COMMVNFIAT ? (
            <Link href="/fiatcars">
              {" "}
              {/* Link to /settings */}
              <DropdownMenuItem>
                <FaCar className="h-4 w-4 mr-2" /> {/* FaCog settings icon */}
                FIAT Cars SA
              </DropdownMenuItem>
            </Link>
          ) : null}
          {role === UserRole.COMMVNIVECO ? (
            <Link href="/ivecotcars">
              {" "}
              {/* Link to /settings */}
              <DropdownMenuItem>
                <FaCar className="h-4 w-4 mr-2" /> {/* FaCog settings icon */}
                IVECO Cars SA
              </DropdownMenuItem>
            </Link>
          ) : null}
          {role === UserRole.COMMVNJEEP ? (
            <Link href="/jeepcars">
              {" "}
              {/* Link to /settings */}
              <DropdownMenuItem>
                <FaCar className="h-4 w-4 mr-2" /> {/* FaCog settings icon */}
                JEEP Cars SA
              </DropdownMenuItem>
            </Link>
          ) : null}
          {role === UserRole.CEO ||
          role === UserRole.CFO ||
          role === UserRole.SAV ||
          role === UserRole.ADMIN ? (
            <Link href="/dashboardsav">
              {" "}
              {/* Link to /settings */}
              <DropdownMenuItem>
                <FaTools className="h-4 w-4 mr-2" /> {/* FaCog settings icon */}
                SAV SA
              </DropdownMenuItem>
            </Link>
          ) : null}
          {role === UserRole.SAVIVECO || role === UserRole.DTIVECO ? (
            <Link href="/saviveco">
              {" "}
              {/* Link to /settings */}
              <DropdownMenuItem>
                <FaTools className="h-4 w-4 mr-2" /> {/* FaCog settings icon */}
                IVECO SAV SA
              </DropdownMenuItem>
            </Link>
          ) : null}
          {role === UserRole.SAVFIAT ? (
            <Link href="/savfiat">
              {" "}
              {/* Link to /settings */}
              <DropdownMenuItem>
                <FaTools className="h-4 w-4 mr-2" /> {/* FaCog settings icon */}
                FIAT SAV SA
              </DropdownMenuItem>
            </Link>
          ) : null}
          {role === UserRole.SAVMEG || role === UserRole.DTFIAT ? (
            <Link href="/savmeg">
              {" "}
              {/* Link to /settings */}
              <DropdownMenuItem>
                <FaTools className="h-4 w-4 mr-2" /> {/* FaCog settings icon */}
                SAV MEGRINE
              </DropdownMenuItem>
            </Link>
          ) : null}
          {role === UserRole.SAVKHADHRA ? (
            <Link href="/savkh">
              {" "}
              {/* Link to /settings */}
              <DropdownMenuItem>
                <FaTools className="h-4 w-4 mr-2" /> {/* FaCog settings icon */}
                SAV KHADHRA
              </DropdownMenuItem>
            </Link>
          ) : null}
        </div>

        <Link href="/settings">
          {" "}
          {/* Link to /settings */}
          <DropdownMenuItem>
            <FaCog className="h-4 w-4 mr-2" /> {/* FaCog settings icon */}
            Settings
          </DropdownMenuItem>
        </Link>

        {/* <Link href="/admin">
        
          <DropdownMenuItem>
            <FaUserShield className="h-4 w-4 mr-2" /> 
            Admin
          </DropdownMenuItem>
        </Link> */}
        <Link href="/server">
          {" "}
          {/* Link to /server */}
          <DropdownMenuItem>
            <FaUserCircle className="h-4 w-4 mr-2" />{" "}
            {/* FaUserCircle profile icon */}
            Profile
          </DropdownMenuItem>
        </Link>
        <Link href="/contact">
          {" "}
          {/* Link to /settings */}
          <DropdownMenuItem>
            <FaEnvelope className="h-4 w-4 mr-2" /> {/* FaCog settings icon */}
            Contact
          </DropdownMenuItem>
        </Link>
        <LogoutButton>
          <DropdownMenuItem>
            <ExitIcon className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
