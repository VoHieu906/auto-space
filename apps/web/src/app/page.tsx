"use client";
import { add } from "@autospace/sample-lib";
import { useQuery } from "@apollo/client";
import { CompaniesDocument } from "@autospace/network/src/gql/generated";
export default function Home() {
  const { data } = useQuery(CompaniesDocument);
  console.log(data);
  return (
    <main>
      Home {add(4, 3)}
      <div>
        {data?.companies.map((company) => (
          <div key={company.id}>{company.displayName}</div>
        ))}
      </div>
    </main>
  );
}
