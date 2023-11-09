import { UserButton } from "@clerk/nextjs";

export default function DashBoardPage() {
  return (
    <div>
   <p>Dashboard Page (Protected)</p>
   <UserButton afterSignOutUrl="/" />               {/* Below button shows the currenly logged in user */}     
   </div>
  ) 
}
