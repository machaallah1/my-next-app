"use client";

import { useEffect, useState } from "react";
import { auth } from "../components/Firebase";
import { useRouter } from "next/navigation";
import Navbar from "../components/NavBar";

export default function Blog() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        router.push("/login");
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="p-6">
         <Navbar /> 
      <h1 className="text-2xl font-bold">Bienvenue sur le Blog</h1>
      {user && <p>Connecté en tant que {user.email}</p>}
    </div>
  );
}
