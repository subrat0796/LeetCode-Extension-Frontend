"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  let token;
  useEffect(() => {
    if (typeof window !== "undefined")
      token = localStorage.getItem("leetcode-extension-backend-token");
  }, []);

  if (!token) router.push("/sign-in");

  router.push("/dashboard");

  return <h1>Hello Welcome to LeetCode Extension Application</h1>;
}
