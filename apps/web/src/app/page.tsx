"use client";

import { useQuery } from "@apollo/client";
import { CompaniesDocument } from "@autospace/network/src/gql/generated";

export default function Home() {
  const { data } = useQuery(CompaniesDocument);
  console.log(data);

  return (
    <main className=" p-8">
      <div>
        <h1>Companies</h1>
        {data?.companies.map((company) => (
          <div key={company.id}>{company.displayName}</div>
        ))}
      </div>
    </main>
  );
}
