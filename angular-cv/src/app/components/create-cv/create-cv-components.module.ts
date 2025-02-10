import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//components
import { AdditionalInformationComponent } from 'src/app/additional-information/additional-information.component';
import { EducationComponent } from './education/education.component';
import { HeaderComponent } from './header/header.component';
import { HobbiesAndInterestsComponent } from 'src/app/hobbies-and-interests/hobbies-and-interests.component';
import { KeyCompetenciesComponent } from './key-competencies/key-competencies.component';
import { SectionComponent } from './section/section.component';
import { TextBlockComponent } from './text-block/text-block.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@NgModule({
  declarations: [
    AdditionalInformationComponent,
    EducationComponent,
    HeaderComponent,
    HobbiesAndInterestsComponent,
    KeyCompetenciesComponent,
    SectionComponent,
    TextBlockComponent,
    WorkExperienceComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    AdditionalInformationComponent,
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
