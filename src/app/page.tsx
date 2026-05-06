'use client'
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <div className="flex gap-4 items-center border border-cyan-900 rounded-md p-2">
        <OrganizationSwitcher />
        <UserButton />
      </div>
      <Button onClick={()=> toast.success('Yuddhaswa')}>
        Click Me
      </Button>
    </div>
  );
}
