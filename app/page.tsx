import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
     


    {/* Logo */}
        <Image 
          src="/logo.png"       // path inside public/
          alt=""
          width={120}           // adjust size
          height={120}
          className="mb-6"
        />
          
      <h1> Tamaras Fairview School</h1>
       <p> Tamaras fairview school is a school is a school where your child can get real quality education</p>
        
      </main>
    </div>
  );
}
