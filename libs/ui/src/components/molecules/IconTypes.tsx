import { SlotType } from "@autospace/network/src/gql/generated";
import {
  IconBike,
  IconMotorbike,
  IconCar,
  IconTir,
  IconMoonStars,
  IconSunset,
  IconSun,
  IconSunrise,
} from "@tabler/icons-react";

export const IconTypes = {
  [SlotType.Bicycle]: <IconBike className="size-6 " />,
  [SlotType.Bike]: <IconMotorbike className="size-6 " />,
  [SlotType.Car]: <IconCar className="size-6 " />,
  [SlotType.Heavy]: <IconTir className="size-6 " />,
};

export const IconType = ({
  time,
  className,
}: {
  time: string;
  className?: string;
}) => {
  const date = new Date(time);
  const hour = date.getHours(); // get the hour in UTC

  if (hour >= 4 && hour < 10) return <IconSunrise className="size-5" />;
  if (hour >= 10 && hour < 16) return <IconSun className="size-5" />;
  if (hour >= 16 && hour < 20) return <IconSunset className="size-5" />;
  return <IconMoonStars className={`size-5 ${className}`} />;
};
