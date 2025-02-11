import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable()
export class PrintService {
  constructor() {}

  generate(element: HTMLElement, fileName: string): Promise<void> {
    return html2canvas(element, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      this._addImageToPdf(pdf, imgData);

      pdf.save(fileName);
    });
  }

  private _addImageToPdf(pdf: jsPDF, imgData: string): void {
    const { width, height } = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const ratio = width / height;
    const imgWidth = pdfWidth;
    const imgHeight = imgWidth / ratio;

    const totalPages = Math.ceil(imgHeight / pdfHeight);

    for (let i = 0; i < totalPages; i++) {
      if (i > 0) pdf.addPage();

      const positionY = -i * pdfHeight;
      pdf.addImage(imgData, 'PNG', 0, positionY, imgWidth, imgHeight);
    }
  }
}
