import {
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';

import { ThemeService } from '../../providers/theme-service';
import { NavController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'ble-save-devices',
  templateUrl: 'ble-save-devices.html'
})
export class BleSaveDevicesComponent implements OnInit, OnDestroy {
  bleList = [];
  deviceCore = { model: "", uri: "", name: "" };
  timer;
  constructor(
    public themeService: ThemeService,
    public viewCtrl: ViewController,
    public navController: NavController,
    private storage: Storage,
  ) {
  }

  public ngOnInit(): void {
    this.updateBleInfo();
    this.timer = setInterval(() => {
      this.updateBleInfo();
    }, 3000);
  }

  public ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  gotoDevicePage() {
    this.navController.push('BluetoothDevicePage');
  }

  updateBleInfo() {
    this.storage.get('connectDevices').then((connectDevices) => {
      if (connectDevices) {
        this.bleList = connectDevices;
        if (this.bleList.length > 0) {
          this.deviceCore = this.bleList.pop();
        }
        if (this.deviceCore.model == 'typeF-1') {
          this.deviceCore.uri = "assets/img/fan.png";
        } else if (this.deviceCore.model == 'CLEN-8-1') {
          this.deviceCore.uri = "assets/img/clean.png";
        } else {
          this.deviceCore.uri = "assets/img/fan.png";
        }
      }
    });
  }
}
