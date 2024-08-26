
import ButtonSignOut from "@/app/components/ButtonSignOut";
import {getUser } from "@/lib/actionsUsers";
import {stripe} from "@/lib/stripe"
import { prisma } from "@/lib/db";

export default async function DashboardLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();



  if (!user) {
    return <div>Please sign in</div>;
  }


  
  if (!user?.stripeCustomerId) {
    const stripeCustomer = await stripe.customers.create({
      email: user?.email as string,
    });

    await prisma.user.update({
      where: {
        id: user?.id as string,
      },
      data: {
        stripeCustomerId: stripeCustomer.id as string,
      }
    });
  }
  
  return (
    <section className="max-w-[1200px] mx-auto md:flex items-center gap-4 h-screen w-full pt-[250px]">
      <div className="w-full h-full ">
        <ButtonSignOut />
        {children}
      </div>
    </section>
  );
}
