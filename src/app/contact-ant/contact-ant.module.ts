import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { ContactAntRoutingModule } from './contact-ant-routing.module';
import { ContactAntFormComponent } from './contact-ant-form/contact-ant-form.component';
import { AntProfileComponent } from './ant-profile/ant-profile.component';
import { AntMapComponent } from './ant-map/ant-map.component';
import { AntService } from './ant.service';
import { SelectModule } from '../shared/directives/select/select.module';
import { DatepickerModule } from '../shared/directives/datepicker/datepicker.module';
import { TimepickerModule } from '../shared/directives/timepicker/timepicker.module';
import { MapModule } from '../shared/components/map/map.module';
import { MapService } from '../shared/components/map/map.service';
import { SpinnerLoaderModule } from '../shared/components/spinner-loader/spinner-loader.module';

@NgModule({
  declarations: [ContactAntFormComponent, AntProfileComponent, AntMapComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AgmCoreModule,
    ContactAntRoutingModule,
    SelectModule,
    DatepickerModule,
    TimepickerModule,
    MapModule,
    SpinnerLoaderModule
  ],
  providers: [AntService, MapService]
})
export class ContactAntModule {}
