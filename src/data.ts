export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}
export interface Data {
  report: {
    id: string;
    amount: number;
    source: string;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}
export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'youtube',
      amount: 1000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: 'uuid2',
      source: 'Facebook',
      amount: 2000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid3',
      source: 'Instgram',
      amount: 3000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
  ],
};
