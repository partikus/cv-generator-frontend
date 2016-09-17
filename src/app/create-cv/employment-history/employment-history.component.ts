import { Component Input, ViewContainerRef, ViewChild, TemplateRef} from '@angular/core';
import { Project } from "../../shared/models/project.model";
import { BaseSkill } from "../../shared/models/skill.model";

import { overlayConfigFactory } from "../../../../node_modules/angular2-modal/plugins/vex";
import {
  VEXBuiltInThemes,
  Modal,
  DialogPreset,
  DialogFormModal,
  DialogPresetBuilder,
  VEXModalContext,
  VexModalModule
} from '../../../../node_modules/angular2-modal/plugins/vex';


@Component({
  selector: 'employment-history',
  styleUrls: [ './employment-history.style.scss' ],
  templateUrl: './employment-history.template.html',
  providers: VexModalModule.getProviders(),
})
export class EmploymentHistory {
  @Input() projects: Project[];

  theme: VEXBuiltInThemes = <VEXBuiltInThemes>'default';
  @ViewChild('templateRef') private templateRef: TemplateRef<any>;

  constructor(public modal: Modal) {

  }

  ngOnInit() {

  }
}
