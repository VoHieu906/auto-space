"use client";
import { ViewStateChangeEvent } from "react-map-gl";
import { Map } from "../organisms/map/Map";
import { Panel } from "../organisms/map/Panel";
import { DefaultZoomControls } from "../organisms/map/ZoomControls";
import { useCallback } from "react";
import { initialViewState } from "@autospace/util/constants";
import { SearchPlaceBox } from "../organisms/map/SearchPlacesBox";
import { useFormContext } from "react-hook-form";
import { FormTypeSearchGarage } from "@autospace/forms/src/searchGarages";
import { IconType } from "../molecules/IconTypes";
import { HtmlInput } from "../atoms/HtmlInput";
import { IconArrowDown } from "@tabler/icons-react";
import { toLocalISOString } from "@autospace/util/date";
import { ShowGarages } from "../organisms/search/ShowGarages";
import { FilterSidebar } from "../organisms/search/FilterSidebar";
export const SearchPage = () => {
  const {
    register,
    setValue,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    watch,
    trigger,
  } = useFormContext<FormTypeSearchGarage>();
  // console.log("errors ", errors);
  const formData = watch();
  const handleMapChange = useCallback(
    (target: ViewStateChangeEvent["target"]) => {
      const bounds = target.getBounds();
      const locationFilter = {
        ne_lat: bounds?.getNorthEast().lat || 0,
        ne_lng: bounds?.getNorthEast().lng || 0,
        sw_lat: bounds?.getSouthWest().lat || 0,
        sw_lng: bounds?.getSouthWest().lng || 0,
      };
      console.log("locationFilter:", locationFilter);
      setValue("locationFilter", locationFilter);
    },
    [setValue],
  );
  return (
    <div>
      <Map
        onLoad={(e) => handleMapChange(e.target)}
        onDragEnd={(e) => handleMapChange(e.target)}
        onZoomEnd={(e) => handleMapChange(e.target)}
        initialViewState={initialViewState}
      >
        <ShowGarages />
        <Panel position="left-top">
          <div className="flex flex-col items-stretch">
            <SearchPlaceBox />
            <div className="flex relative pl-1 flex-col mt-1 bg-white/40 items-center gap-1 backdrop-blur-sm">
              <div className=" absolute left-[1px] top-1/2 -translate-y-1/2 ">
                <IconArrowDown className="p-1" />
              </div>
              <div className="flex gap-1 items-center">
                <IconType time={formData.startTime} />
                <HtmlInput
                  type="datetime-local"
                  className="w-full p-2 text-lg font-light border-0"
                  min={toLocalISOString(new Date()).slice(0, 16)}
                  {...register("startTime", {
                    onChange() {
                      trigger("startTime");
                      trigger("endTime");
                    },
                  })}
                />
              </div>
              <div className="flex gap-1 items-center">
                <IconType time={formData.endTime} />
                <HtmlInput
                  min={toLocalISOString(new Date()).slice(0, 16)}
                  type="datetime-local"
                  className="w-full p-2 text-lg font-light border-0"
                  {...register("endTime", {
                    onChange() {
                      trigger("endTime");
                    },
                  })}
                />
              </div>
            </div>
          </div>
        </Panel>
        <Panel position="right-center">
          <DefaultZoomControls />
        </Panel>
        <Panel position="right-top">
          <FilterSidebar />
        </Panel>
      </Map>
    </div>
  );
};
