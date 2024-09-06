"use client"; 
import { useState, useRef, useEffect, ChangeEvent } from "react"; 
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button"; 
import SocialLinks from "@/components/llink";



export default function App() {

  // LOCGICS START//
  
  const [duration, setDuration] = useState<number | string>("");
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  const handleSetDuration = (): void => {
    if (typeof duration === "number" && duration > 0) {
      setTimeLeft(duration);
      setIsActive(false);
      setIsPaused(false);
      if (timerRef.current) {
      clearInterval(timerRef.current);
      }
    }
  };
  
  
  const handleStart = (): void => {
    if (timeLeft > 0) {
      setIsActive(true);
      setIsPaused(false);
    }
  };
  
  
  const handlePause = (): void => {
    if (isActive) {
      setIsPaused(true);
      setIsActive(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };
  
  
  const handleReset = (): void => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(typeof duration === "number" ? duration : 0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };
  
  
  useEffect(() => {
    if (isActive && !isPaused) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, isPaused]);
  
  
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };
  
  
  const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDuration(Number(e.target.value));
  };
  
  
  
  
  // LOCGICS START//
  
  
  
  
  
  

  return(
  
  


<main className="border-black border-2 flex flex-col justify-end items-center max-w-screen-lg max-h-screen p-2 rounded-sm custom">
  

  {/* Main Outer Div Container Contain All Items */}

  <div className="mt-4 mb-4 font-bold"><h1>Count Down Timer App</h1></div>

{/* Input Div  */}
    <div className="flex space-x-4">

      {/* Input */}
    <Input type="number" value={duration} onChange={handleDurationChange} placeholder="Enter duration in seconds"/>
    {/* Set Button */}

    <Button  onClick={handleSetDuration} >Set</Button>

    </div>


  {/* Display Div Section   */}

  <div className="mt-4 text-2xl font-bold">{formatTime(timeLeft)}</div>


{/* All Buttons */}

    <div className="space-x-2 space-y-8">
      <Button onClick={handleStart}>{isPaused ? "Resume" : "Start"}</Button>
      <Button onClick={handlePause}>Pause</Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>

{/* Footer Section */}
<footer className="mt-8 flex flex-col justify-center items-center">


{/* Social Links  */}
<div className="mb-4"><SocialLinks/></div>

{/* Footer peragraph */}
<p className="text-center mb-4 font-light text-[12px]">Made With Love By Muhammad Shahroz</p>

</footer>



</main>


  )

  
}
