import { GroupingOption } from './interfaces';

export const CATEGORIES: GroupingOption[] = [
  { id: 1, key: 'country', name: 'Страна' },
  { id: 2, key: 'city', name: 'Город' },
  { id: 3, key: 'date', name: 'Дата' },
];

export const VALUES: GroupingOption[] = [
  { id: 1, key: 'transactions', name: 'Транзакции' },
  { id: 2, key: 'amount', name: 'Сумма' },
];
