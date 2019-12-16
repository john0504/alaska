import { BluetoothDevicePage } from './bluetooth-device';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
import { InformationModelModule } from '../../modules/information-model/information-model.module';
import { ImageCacheModule } from '../../modules/image-cache';

@NgModule({
  declarations: [
    BluetoothDevicePage
  ],
  imports: [
    IonicPageModule.forChild(BluetoothDevicePage),
    TranslateModule,
    ComponentsModule,
    DirectivesModule,
    InformationModelModule,
    ImageCacheModule,
  ],
  entryComponents: [
    BluetoothDevicePage
  ]
})
export class BluetoothDevicePageModule { }