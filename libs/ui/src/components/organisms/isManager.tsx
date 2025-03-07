import { MyCompanyDocument } from "@autospace/network/src/gql/generated";
import { BaseComponent } from "@autospace/util/types";
import { useQuery } from "@apollo/client";
import { LoaderPanel } from "../molecules/Loader";
import { AlertSection } from "../molecules/AlertSection";
import { ReactNode } from "react";

type RenderPropChild = (id: number) => ReactNode;

export const IsManager = ({ children }: BaseComponent) => {
  const { data, loading } = useQuery(MyCompanyDocument);
  if (loading) {
    return <LoaderPanel text="Loading company..." />;
  }
  if (!data?.myCompany)
    return (
      <AlertSection>
        <div>
          {" "}
          <div>You don&apos;t have a company yet.</div>
        </div>
      </AlertSection>
    );
  return (
    <>
      {typeof children === "function"
        ? (children as RenderPropChild)(data.myCompany.id)
        : children}
    </>
  );
};
