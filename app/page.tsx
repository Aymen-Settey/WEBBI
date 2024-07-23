import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import Footer from "@/components/ui/footer";
import { RegisterButton } from "@/components/auth/register-button";

// Import necessary icons
import { FiLock, FiUserPlus } from "react-icons/fi"; // Assuming you're using React Icons for icons

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main
      className=" h-full"
      style={{
        backgroundImage: "url('/images/italcar.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" flex flex-col lg:flex-row  justify-between gap-4 lg:gap-x-3 relative lg:backdrop-blur space-y-6 p-4 h-[80px] rounded-lg">
        <div className="flex justify-end w-full">
          <p className="text-white text-lg w-full">
            Welcome to <b>ITALCAR</b> Analytics
          </p>
          <div className="mr-4">
            <LoginButton mode="modal" asChild>
              <Button
                variant="default"
                size="lg"
                className="bg-blue-900 hover:bg-blue-600"
              >
                <FiLock className="mr-2" /> Sign In
              </Button>
            </LoginButton>
          </div>

          <div className="">
            <RegisterButton mode="modal" asChild>
              <Button variant="secondary" size="lg">
                <FiUserPlus className="mr-2" /> Sign Up
              </Button>
            </RegisterButton>
          </div>
        </div>
      </div>
    </main>
  );
}
