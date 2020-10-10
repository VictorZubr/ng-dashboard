import {GroupingOption, StatData, UserData} from '../interfaces';

const addDataToAccumulator = (
  { labels, barChartData }: StatData,
  category: string,
  value: number
): StatData => {
  const [{ data: chartData }] = barChartData;
  const index: number = labels.indexOf(category);

  if (index < 0) {
    labels.push(category);
    chartData.push(value);
  } else {
    chartData[index] = chartData[index] as number + value;
  }

  return { labels, barChartData };
};

export class ChartModel {
  private data: UserData[];
  public categories: GroupingOption[];
  public values: GroupingOption[];

  constructor(usersData: object, categories: GroupingOption[], values: GroupingOption[]) {
    this.data = usersData as UserData[];
    this.categories = categories;
    this.values = values;
  }

  getChartData(category: GroupingOption, value: GroupingOption): StatData {
    const accumulator: StatData =  { labels: [], barChartData: [{ label: value.name, data: [] }]};

    return this.data.reduce((acc: StatData, record: UserData) => {
      const categoryInRecord = record[category.key];
      const valueInRecord = record[value.key];

      return addDataToAccumulator(acc, categoryInRecord, valueInRecord);
    }, accumulator);
  }
}
