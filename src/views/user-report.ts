import path from 'path';
import { Report } from '../models/report-model';
import fs from 'fs';

export async function saveReport(report: Report): Promise<void> {
  const reportsDir = path.resolve('generated-reports');

  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir);
  }

  const today = new Date();

  const filePath = path.join(
    reportsDir,
    `relatorio-integracao-${today.toISOString()}.json`,
  );

  fs.writeFileSync(filePath, JSON.stringify(report, null, 2));
}
