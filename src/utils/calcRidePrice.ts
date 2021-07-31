import { SURGE_CHANGE_RATE } from "../constants/pricing";

export const calcRidePrice = (durationValue: number, multiplier: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((durationValue * SURGE_CHANGE_RATE * multiplier) / 100);
};
