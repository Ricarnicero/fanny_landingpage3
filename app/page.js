import { inter } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className=" text-white flex flex-col justify-center items-center h-full">
      <img src="/fanny1.png" alt="fanny Intelectual" width="366" height="373" className="img-fade"/>
      <label className={inter.className + " text-4xl"}>Tambo-nita</label>
    </main>
  );
}
