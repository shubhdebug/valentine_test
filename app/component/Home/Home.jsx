"use client";

import React, { useState, useEffect, useRef } from "react";
import { Quintessential } from "next/font/google";

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {

const [step,setStep]=useState("valentine");
const [history,setHistory]=useState([]);

const goTo=(newStep)=>{
 setHistory(prev=>[...prev,step]);
 setStep(newStep);
};

const goBack=()=>{
 setHistory(prev=>{
  const last=prev[prev.length-1];
  if(last) setStep(last);
  return prev.slice(0,-1);
 });
};

const [pos,setPos]=useState({top:"60%",left:"60%"});
const move=()=>{
 setPos({
  top:Math.random()*80+"%",
  left:Math.random()*80+"%"
 });
};

const videoRef=useRef(null);

useEffect(()=>{
 if(step==="forever" && videoRef.current){
  videoRef.current.play();
 }
},[step]);

// QUIZ
const [quizStep,setQuizStep]=useState(1);
const [selectedOption,setSelectedOption]=useState(null);

const quizData={
1:{question:"Who starts fights but can't stay angry? 😭😂",options:["You","Me","Both like Tom & Jerry"]},
2:{question:"Our relationship is basically? 💕",options:["Chaos + Love","Drama + Care","Tom ❤️ Jerry"]},
3:{question:"No matter what happens we are? 🫶",options:["Best Friends Forever","Soul Partners","Forever Team"]}
};

const gifts=[
{id:1,title:"Gift 1",image:"/Images/img.gif"},
{id:2,title:"Gift 2",image:"/Images/img9.gif"},
{id:3,title:"Gift 3",image:"/Images/img.gif"}
];

return (

<div className="flex items-center justify-center min-h-screen bg-pink-100 relative p-4">

{/* VALENTINE */}
{step==="valentine"&&(
<div className="text-center bg-pink-200 px-6 sm:px-12 md:px-20 lg:px-40 py-12 sm:py-16 rounded-3xl relative w-full max-w-3xl">

<h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-6">
Will you be my Valentine? ❤️
</h1>

<button className="bg-pink-500 text-white px-6 py-3 rounded-full mr-4"
onClick={()=>goTo("happy")}>
Yes 😍
</button>

<button
onMouseEnter={move}
className="absolute bg-pink-700 text-white px-6 py-3 rounded-full"
style={{top:pos.top,left:pos.left}}
>
No 😒
</button>

</div>
)}

{/* HAPPY */}
{step==="happy"&&(
<div className="bg-pink-200 p-6 sm:p-10 md:p-16 text-center rounded-3xl w-full max-w-3xl">

<h1 className="text-3xl sm:text-5xl text-pink-600 font-bold">
Happy Valentine Day Bestie!💖
</h1>

<p className="mt-4 text-amber-950">
We fight like Tom & Jerry but love endlessly ❤️
</p>

<button className="bg-pink-500 text-white px-10 py-4 rounded-full mt-10"
onClick={()=>goTo("gifts")}>
See My Gifts 🎁
</button>

</div>
)}

{/* GIFTS */}
{step==="gifts"&&(
<div className="bg-pink-200 px-6 sm:px-10 md:px-20 py-10 rounded-3xl text-center w-full max-w-5xl">

<h1 className="text-3xl sm:text-4xl text-amber-950 font-bold mb-10">
Something for You 💝
</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

{gifts.map(gift=>(
<div key={gift.id}
onClick={()=>{
if(gift.id===1){setQuizStep(1);goTo("quiz");}
if(gift.id===2){goTo("letter");}
if(gift.id===3){goTo("gallery");}
}}
className="bg-pink-100 hover:bg-pink-300 p-10 rounded-xl cursor-pointer hover:scale-105 transition">

<img src={gift.image} className="w-32 mx-auto"/>
<p className="mt-2 text-2xl text-amber-950 font-bold">{gift.title}</p>

</div>
))}

</div>
</div>
)}

{/* QUIZ */}
{step==="quiz"&&(
<div className="bg-pink-200 px-6 sm:px-12 md:px-20 py-10 rounded-3xl text-center w-full max-w-3xl">

{quizStep<=3?(
<>
<h1 className="text-3xl sm:text-4xl font-bold text-amber-950 mb-6">Quiz 😉</h1>

<p className="mb-6 text-amber-950 text-lg sm:text-2xl">{quizData[quizStep].question}</p>

{quizData[quizStep].options.map((opt,i)=>(
<button key={i}
onClick={()=>setSelectedOption(opt)}
className={`block w-full mb-3 px-6 py-3 rounded-full ${
selectedOption===opt?"bg-pink-500 text-white":"bg-white text-amber-950"
}`}>
{opt}
</button>
))}

<button disabled={!selectedOption}
onClick={()=>{setSelectedOption(null);setQuizStep(quizStep+1);}}
className="bg-pink-500 text-white px-6 py-2 rounded-full">
Next
</button>
</>
):(
<>
<h1 className="text-3xl sm:text-4xl font-bold text-amber-950">You passed 😘❤️</h1>
<button onClick={goBack} className="mt-6 bg-red-400 text-white px-6 py-2 rounded-full">
← BACK
</button>
</>
)}

</div>
)}

{/* LETTER */}
{step==="letter"&&(
<div className="bg-pink-200 rounded-3xl text-center p-6 sm:p-10 md:p-16 w-full max-w-4xl">

<h1 className="text-3xl sm:text-4xl font-bold mb-6 text-amber-950">
A Letter For You 🥺
</h1>

<div className="bg-yellow-100 p-6 sm:p-10 rounded-xl overflow-y-auto ">
<p className={`${quintessential.className} text-start text-amber-950`}>
Dear Best Friend ❤️ <br/><br/>
Dear Best Friend ❤️

Like Tom & Jerry — we fight, laugh, annoy each other, and still stay together forever. Our story isn’t perfect, but it’s real, and maybe that’s why it means so much to me.

It’s been 11 beautiful years — from 2015 to 2026 — and through every phase of life, you have been constant. We grew together, changed together, and created memories that no one else will ever truly understand. You are not just a part of my life; you are a piece of my journey.

There is something I never had the courage to say openly. I always liked you more than just a friend. But I also saw that there was always someone special in your life, and because of that, I never found the courage to express my feelings. I chose to stay silently close rather than risk losing you completely.

Even without saying everything, my heart always knew how special you are to me. Your presence brings peace, your smile brings comfort, and your friendship has been one of the most beautiful gifts life has given me.

No matter where life takes us, I will always cherish what we share — the chaos, the laughter, the emotional talks, and the silent understanding between us. Maybe we are not perfect, but we are us… and that has always been enough for me.

Always yours ❤️

</p>
</div>

<button onClick={goBack} className="mt-6 bg-red-400 text-white px-6 py-2 rounded-full">
← BACK
</button>

</div>
)}

{/* GALLERY */}
{step==="gallery"&&(
<div className="bg-pink-200 px-4 sm:px-10 py-10 rounded-3xl text-center max-h-[80vh] overflow-y-auto w-full max-w-6xl">

<h1 className="text-3xl sm:text-4xl font-bold mb-10 text-amber-950">Memories</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

{["p2.jpeg","p3.jpeg","p4.jpeg","p5.jpeg","p6.jpeg","p7.jpeg"].map((img,i)=>(
<div key={i} className="bg-white p-3 shadow-lg rounded-lg">
<img src={`/Images/${img}`} className="w-full h-60 object-cover rounded-lg"/>
</div>
))}

</div>

<div className="flex justify-center gap-4 mt-6">
<button onClick={goBack} className="bg-red-400 text-white px-6 py-2 rounded-full">← BACK</button>
<button onClick={()=>goTo("forever")} className="bg-pink-500 text-white px-6 py-2 rounded-full">
Next ❤️
</button>
</div>

</div>
)}

{/* FOREVER */}
{step==="forever"&&(
<div className="bg-pink-200 rounded-3xl text-center p-6 sm:p-10 w-full max-w-2xl">

<h1 className="text-3xl sm:text-4xl font-bold text-amber-950 mb-6">
You are my forever 👁️❤️!
</h1>

<div className="bg-white p-4 rounded-xl shadow-lg mx-auto w-full max-w-sm">

<video
ref={videoRef}
src="/Images/video.mp4"
autoPlay
loop
controls
className="rounded-lg w-full"
/>

</div>

<p className="mt-6 text-amber-950">
Like Tom & Jerry — we fight, laugh, and stay forever ❤️
</p>

<button onClick={goBack} className="mt-6 bg-red-400 text-white px-6 py-2 rounded-full">
← BACK
</button>

</div>
)}

</div>
);
}
