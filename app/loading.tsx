import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image src="/logo/logogms.png" alt="logo" width={500} height={40} />
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
}
