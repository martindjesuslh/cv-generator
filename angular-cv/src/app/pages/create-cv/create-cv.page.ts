import { Component, ElementRef, ViewChild } from '@angular/core';
//services
import { PrintService } from '@services/print.service';

@Component({
  selector: 'app-create-cv',
  templateUrl: './create-cv.page.html',
  styleUrl: './create-cv.page.css',
})
export class CreateCvPage {
  public printMode: boolean = false;
  public imageUrl: string = '';

  @ViewChild('contentPrint') contentPrint!: ElementRef<HTMLDivElement>;

  constructor(private _printServices: PrintService) {}

  handlePrint() {
    if (!this.contentPrint) throw new Error();

    this.printMode = true;

    const content = this.contentPrint.nativeElement;

    setTimeout(() => {
      this._printServices.generate(content, 'test').then(() => {
        this.printMode = false;
      });
    }, 50);
  }
}
