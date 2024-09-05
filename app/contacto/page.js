import React from "react";
import { User, Link } from "@nextui-org/react";

export default function Home() {
  return (
    <main className=" text-white flex flex-col  items-center h-full mt-3">
      <label className="text-4xl">Encuentrame en mis redes sociales</label>

      <Link href="https://www.instagram.com/i.amfanny/" size="sm" isExternal>
        <User className="text-white p-2 my-2 border rounded-lg border-gray-500 w-52"
          name="Instagram"
          description="@i.amfanny"
          avatarProps={{
            src: "./icons/instagram.png"
          }}
        />
      </Link>
      <Link href="https://l.instagram.com/?u=https%3A%2F%2Fwww.tiktok.com%2F%40fannytorress%3F_t%3D8efffzaBBqw%26_r%3D1&e=AT0Bab0rR0N7y-eRKH01GqRLq1vahaBFqPYlDvmswetlW0I8JWu3hZFuTlyFc_lNRbXjO0muAFIWruwf_hv4zD9pERY8QIBbL_09" size="sm" isExternal>
        <User className="text-white p-2 my-2 border rounded-lg border-gray-500 w-52"
          name="Tiktok"
          description="@fannytorres"
          avatarProps={{
            src: "./icons/tik-tok.png"
          }}
        />
      </Link>
      <Link href={`https://wa.me/5548721211?text=${encodeURIComponent('Hola fanny, me interesa contactar contigo para un proyecto')}`} size="sm" isExternal>
        <User className="text-white p-2 my-2 border rounded-lg border-gray-500 w-52"
          name="Whatsapp"
          description="55 4872 1211"
          avatarProps={{
            src: "./icons/whatsapp.png"
          }}
        />
      </Link>
    </main>
  );
}
