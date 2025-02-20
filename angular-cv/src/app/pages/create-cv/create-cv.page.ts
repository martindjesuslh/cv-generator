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
  public stepOrder: StepOrdersControl[] = [
    { edit: true, complete: false, show: true }, //header
    { edit: false, complete: false, show: false }, //profile
    { edit: false, complete: false, show: false }, //competencies
  ];
  public enablePrint: boolean = false;

  get buttonShow() {
    return this.stepOrder[1].complete;
  }

  @ViewChild('contentPrint') contentPrint!: ElementRef<HTMLDivElement>;

  constructor(private _printServices: PrintService) {}

  handleEditStep(currentStep: number): void {
    this.enablePrint = false;

    this.stepOrder = this.stepOrder.map(({ show, ...rest }, i) => {
      return currentStep === i
        ? { show, complete: false, edit: true }
        : { show, complete: rest.complete, edit: false };
    });
  }

  handleNextSection(currentStep: number): void {
    this.stepOrder[currentStep] = { complete: true, edit: false, show: true };

    const nextStep = this.stepOrder.findIndex(({ complete }) => !complete);

    if (nextStep < 0) this.enablePrint = true;
    else this.stepOrder[nextStep] = { complete: false, edit: true, show: true };
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

interface StepOrdersControl {
  edit: boolean;
  show: boolean;
  complete: boolean;
}
