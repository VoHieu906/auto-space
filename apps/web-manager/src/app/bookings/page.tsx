"use client";
import { IsLoggedIn } from "@autospace/ui/src/components/organisms/IsLoggedIn";
import { IsManager } from "@autospace/ui/src/components/organisms/IsManager";
import { ListGarageBookings } from "@autospace/ui/src/components/templates/ListGarageBookings";
import * as React from "react";
//Client Components are executed on the client side, where async functions are not natively supported in the same way as Server Components
export default function Page({
  searchParams,
}: {
  // Next.js 15 makes searchParams a Promise due to async dynamic APIs; use React.use() to resolve in Client Components.
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = React.use(searchParams); //handle Promises in React Client Components when dealing with async APIs
  const garageId = Number(params["garageId"]);

  return (
    <main>
      <IsLoggedIn>
        <IsManager>
          <ListGarageBookings garageId={garageId} />
        </IsManager>
      </IsLoggedIn>
    </main>
  );
}
