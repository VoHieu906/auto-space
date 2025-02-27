"use client";
import { add } from "@autospace/sample-lib";
import { useQuery } from "@apollo/client";
import { CompaniesDocument } from "@autospace/network/src/gql/generated";
import { BrandIcon } from "@autospace/ui/src/components/atoms/BrandIcon";
import { Button } from "@autospace/ui/src/components/atoms/Button";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
export default function Home() {
  const { data } = useQuery(CompaniesDocument);
  console.log(data);
  const { data: sessionData, status } = useSession();
  console.log("statusSession", status);
  return (
    <main className="">
      {sessionData?.user?.uid ? (
        <Button onClick={() => signOut()}>Sign Out</Button>
      ) : (
        <Link href="/login">Login</Link>
      )}
      <BrandIcon />
      <Button loading>hello</Button>
      Home {add(4, 3)}
      <div>
        {data?.companies.map((company) => (
          <div key={company.id}>{company.displayName}</div>
        ))}
      </div>
    </main>
  );
}
