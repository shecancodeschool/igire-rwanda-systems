import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 flex flex-col space-y-3 w-full z-50 bg-white h-screen justify-center items-center">
      <Image src="/Igire_Rwanda_Logo.png" alt="logo" className="animate-pulse" width={80} height={80} />
    </div>
  );
}