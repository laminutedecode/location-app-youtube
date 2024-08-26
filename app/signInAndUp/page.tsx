"use client"

import ButtonsProviders from "@/app/components/ButtonsProviders";
import {useSession} from "next-auth/react"
import { redirect } from "next/navigation";

export default function pageSignInAndUp() {

  const {data: session } = useSession()

  if(session){
    redirect("/dashboard")
  }


  return (
    <section className="w-full h-screen flex items-center justify-center flex-col gap-2">
       <ButtonsProviders />
    </section>
  )
}
