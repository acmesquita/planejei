export interface PatrimonyProjection {
  month: number;
  initialValue: number;
  expenses: number;
  savings: number;
  yield: number;
  finalValue: number;
}

export type YieldPeriod = "monthly" | "yearly";
export type ProjectionPeriod = "months" | "years";
export type Theme = "light" | "dark";

