import Navbar from "@/app/components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data: sessionData, error } = await supabase.auth.getSession();

  console.log("Layout sessionData:", sessionData);
  console.log("Layout session error:", error);

  if (!sessionData?.session) {
    console.log("No session found, redirecting to main page");
    redirect('/');
  } else {
    console.log("Session found, rendering the admin page", sessionData.session.user);
  }

  return (
    <>
      <Navbar user={sessionData?.session.user} />
      {children}
    </>
  );
}
