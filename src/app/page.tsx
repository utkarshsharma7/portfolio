import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>hello</div>
    </div>
  );
}
