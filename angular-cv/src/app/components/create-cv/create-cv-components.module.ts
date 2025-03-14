import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//modules
import { SharedComponentsModule } from '@components/shared/shared-components.module';
//primeNG
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
//components
import { AdditionalInformationComponent } from 'src/app/additional-information/additional-information.component';
import { EducationComponent } from './education/education.component';
import { HeaderComponent } from './header/header.component';
import { HobbiesAndInterestsComponent } from 'src/app/hobbies-and-interests/hobbies-and-interests.component';
import { KeyCompetenciesComponent } from './key-competencies/key-competencies.component';
import { SectionComponent } from './section/section.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ButtonEditComponent } from './button-edit/button-edit.component';

@NgModule({
  declarations: [
    AdditionalInformationComponent,
    ButtonEditComponent,
    EducationComponent,
    HeaderComponent,
    HobbiesAndInterestsComponent,
    KeyCompetenciesComponent,
    SectionComponent,
    TextBlockComponent,
    WorkExperienceComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AdditionalInformationComponent,
    ButtonEditComponent,
    EducationComponent,
    HeaderComponent,
    HobbiesAndInterestsComponent,
    KeyCompetenciesComponent,
    SectionComponent,
    TextBlockComponent,
    WorkExperienceComponent,
  ],
})
export class CreateCvComponentsModule {}
