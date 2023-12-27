"use client";
import Page from "./dashboard/page";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const token = localStorage.getItem("leetcode-extension-backend-token");

  if (!token) router.push("/sign-in");

  router.push("/dashboard");

  return <h1>Hello Welcome to LeetCode Extension Application</h1>;
}
