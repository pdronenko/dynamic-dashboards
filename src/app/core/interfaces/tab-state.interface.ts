export interface TabStateInterface {
  id: number;
  name: string;
  active: boolean;
  hasChart: boolean;
  chartData: number[];
  range: number[];
}
