import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCard } from "@/components/ui/StatsCard"

function App() {
  // 1. State define karein (Pehla value 1200 hai)
  const [userCount, setUserCount] = useState(1200);
  const [isFollowed, setIsFollowed] = useState(false);

  // 2. Function jo count ko barhaye ga
  const handleFollow = () => {
    if (!isFollowed) {
      setUserCount(userCount + 11);
      setIsFollowed(true);
    } else {
      setUserCount(userCount - 50);
      setIsFollowed(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col items-center justify-center gap-8 p-4 text-zinc-900">
      
      {/* Profile Card */}
      <Card className="w-full max-w-sm shadow-xl bg-white border-none">
        <CardHeader className="text-center">
          <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
            A
          </div>
          <CardTitle className="text-2xl font-bold">Asad's Profile</CardTitle>
          <CardDescription>React & Shadcn Developer</CardDescription>
        </CardHeader>
        
        <CardFooter className="flex gap-2">
          {/* Button par click karne se handleFollow chalega */}
          <Button 
            onClick={handleFollow} 
            variant={isFollowed ? "outline" : "default"}
            className="flex-1 transition-all"
          >
            {isFollowed ? "Unfollow" : "Follow"}
          </Button>
          
          <Button variant="neon" className="flex-1">Message</Button>
        </CardFooter>
      </Card>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* UserCount ki state yahan pass ho rahi hai */}
        <StatsCard 
          title="Total Followers" 
          value={userCount.toLocaleString()} 
          color="border-blue-500" 
        />
        <StatsCard 
          title="Projects" 
          value="45" 
          color="border-green-500" 
        />
      </div>

    </div>
  )
}

export default App