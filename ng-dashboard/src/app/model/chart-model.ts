import { GroupingOption, StatData, UserData } from '../interfaces';

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
      const { labels } = acc;
      const [{ data: chartData }] = acc.barChartData;
      const index = acc.labels.indexOf(categoryInRecord);

      if (index < 0) {
        labels.push(categoryInRecord);
        chartData.push(valueInRecord);
      } else {
        chartData[index] = chartData[index] + valueInRecord;
      }

      return acc;
    }, accumulator);
  }
}
