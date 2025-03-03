import { useLazyQuery } from "@apollo/client";
import { SearchGaragesDocument } from "@autospace/network/src/gql/generated";
import { useEffect } from "react";
import { GarageMarker } from "./GarageMarker";
import { useConvertSearchFormToVariables } from "@autospace/forms/src/adapters/searchFormAdapter";

export const ShowGarages = () => {
  const [searchGarages, { loading, data, error }] = useLazyQuery(
    SearchGaragesDocument,
  );
  console.log("loading: ", loading);
  console.log("error: ", error);
  const { variables } = useConvertSearchFormToVariables();

  useEffect(() => {
    if (variables) {
      searchGarages({
        variables,
      });
    }
  }, [searchGarages, variables]);
  return (
    <>
      {data?.searchGarages.map((garage) => (
        <GarageMarker key={garage.id} marker={garage} />
      ))}
    </>
  );
};
