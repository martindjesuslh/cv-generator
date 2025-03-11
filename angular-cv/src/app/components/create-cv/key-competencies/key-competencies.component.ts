import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators as V, FormControl } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-key-competencies',
  templateUrl: './key-competencies.component.html',
  styleUrl: './key-competencies.component.css',
  providers: [ConfirmationService],
})
export class KeyCompetenciesComponent {
  public listForm: FormGroup[] = [];

  constructor(private _fb: FormBuilder, private _confirmationService: ConfirmationService) {
    this.handleAddList();
  }

  getMyCompetencies(index: number): FormArray {
    return this.listForm[index].get('competencies') as FormArray;
  }

  createCompetenciesControl(): FormControl {
    return this._fb.control('', [V.required, V.minLength(5)]);
  }

  handleAddList(): void {
    this.listForm.push(
      this._fb.group({
        title: ['', [V.required, V.minLength(5)]],
        competencies: this._fb.array([this.createCompetenciesControl()]),
      })
    );
  }
  handleAddCompetencies(index: number): void {
    this.getMyCompetencies(index).push(this.createCompetenciesControl());
  }

  handleRemoveCompetencies(listIndex: number, competenceIndex: number): void {
    this.getMyCompetencies(listIndex).removeAt(competenceIndex);
  }

  handleRemoveList(listIndex: number) {
    const message = `Are you sure remove this list`;

    this._confirmationService.confirm({
      message,
      accept: () => this.listForm.splice(listIndex, 1),
    });
  }

  handleResetList(listIndex: number) {
    this.listForm[listIndex].reset();
  }
}
