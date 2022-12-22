import { Injectable } from '@nestjs/common';
import { data, ReportType } from 'src/data';
import { v4 as uuid } from 'uuid';
import { ReportResponseDto } from 'src/dtos/report.dto';

interface Report {
  amount: number;
  source: string;
}
@Injectable()
export class ReportService {
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report
      .filter((rep) => rep.type === type)
      .map((report) => new ReportResponseDto(report));
  }

  getAllReportsById(type: ReportType, id: string): ReportResponseDto {
    const report = data.report
      .filter((rep) => rep.type === type)
      .find((rep) => rep.id === id);
    if (!report) return;
    return new ReportResponseDto(report);
  }
  createReport(
    type: ReportType,
    { amount, source }: Report,
  ): ReportResponseDto {
    const newReport = {
      id: uuid(),
      amount,
      source,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };
    data.report.push(newReport);
    return new ReportResponseDto(newReport);
  }

  updateReport(type: ReportType, id: string, body: Report): ReportResponseDto {
    const reportIdx = data.report
      .filter((report) => report.type === type)
      .findIndex((report) => report.id === id);
    if (!reportIdx) {
      return;
    }
    data.report[reportIdx] = {
      ...data.report[reportIdx],
      ...body,
      updated_at: new Date(),
    };
    return new ReportResponseDto(data.report[reportIdx]);
  }
  deleteReport(id: string) {
    const reportIdx = data.report.findIndex((report) => report.id === id);
    if (!reportIdx) {
      return;
    }
    return data.report.splice(reportIdx, 1);
  }
}
