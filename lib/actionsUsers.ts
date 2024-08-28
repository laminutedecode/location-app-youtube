"use server"
import {prisma} from "@/lib/db";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth"; 
import { authOptions } from "@/lib/authOptions";
import { revalidatePath } from "next/cache";


export const getUser = async()=> {
  const session = await getServerSession(authOptions);

  // Vérifier si la session et l'utilisateur sont définis
  if (!session || !session.user || !session.user.id) {
    redirect("../")
  }
  const id = session.user.id as string;

  const user = await prisma.user.findUnique({
    where: { id }
  });

  return user;
}
