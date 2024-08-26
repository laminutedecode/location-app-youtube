import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getUser } from "@/lib/actionsUsers";


export default async function SettingsPage() {

  const user = await getUser()

  console.log(user);

 
  

  return (
    <section className="border border-gray-200 rounded-md p-6">
      <h2 className="text-3xl uppercase font-black">Settings</h2>
      <div className="w-12 h-[1px] bg-white my-2 mx-1"></div>
      <form>
        <Card>

          <CardHeader>
            <CardTitle>Parametres globals</CardTitle>
            <CardDescription>Modifier vos informations puis sauvegarder.</CardDescription>
          </CardHeader>

          <CardContent>
          {user?.image && (
              <Image 
                src={user?.image} 
                alt={`${user?.name}`}
                className="w-16 h-16 object-contain mb-4" 
                width={100}
                height={100}
              />
            )}
            <div className="space-y-1 mb-2">
              <Label htmlFor="idUser">ID</Label>
              <Input disabled name="idUser" type="text" id="idUser" placeholder="Votre e-mail" defaultValue={user?.id || ''} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name">Nom</Label>
              <Input disabled name="name" type="text" id="name" placeholder="Votre nom" defaultValue={user?.name || ''} />
            </div>
            <div className="space-y-1 mt-2">
              <Label htmlFor="email">Email</Label>
              <Input disabled name="email" type="email" id="email" placeholder="Votre e-mail" defaultValue={user?.email || ''} />
            </div>
          </CardContent>

        
        </Card>

      </form>

    </section>
  );
}

