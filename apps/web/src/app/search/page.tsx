"use client";
import { SearchPage } from "@autospace/ui/src/components/templates/SearchPage";
import { FormProviderSearchGarage } from "@autospace/forms/src/searchGarages";
export default function Page() {
  return (
    <div>
      <FormProviderSearchGarage>
        <SearchPage />
      </FormProviderSearchGarage>
    </div>
  );
}
