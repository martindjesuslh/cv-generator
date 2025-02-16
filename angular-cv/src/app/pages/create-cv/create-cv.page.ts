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

  public stepsEdit: Record<StepsFormType, boolean> = {
    header: false,
    profile: true,
    competencies: true,
  };

  @ViewChild('contentPrint') contentPrint!: ElementRef<HTMLDivElement>;

  constructor(private _printServices: PrintService) {}

  handleCompleteSection(section: StepsFormType) {
    const keys = Object.keys(this.stepsEdit) as StepsFormType[];

    for (const k of keys) this.stepsEdit[k] = section !== k;
  }

  handleEditSection(section: StepsFormType) {
    const keys = Object.keys(this.stepsEdit) as StepsFormType[];

    for (const k of keys) this.stepsEdit[k] = section === k;
  }

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

type StepsFormType = 'header' | 'profile' | 'competencies';
