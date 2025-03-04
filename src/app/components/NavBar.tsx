"use client";

import { auth } from "./Firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <nav className="bg-blue-600 shadow-md mb-4">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-white text-xl font-semibold">Blog</h1>
        <button
          className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
          onClick={handleLogout}
        >
          Déconnexion
        </button>
      </div>
    </nav>
  );
}
