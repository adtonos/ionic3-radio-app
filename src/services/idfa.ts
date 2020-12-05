import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

declare var cordova: any;

@Injectable()
export class IDFAService {
  constructor(private platform: Platform) {}

  public getInfo(): Promise<any> {
    return this.platform.ready().then(() => {
      if (typeof cordova !== 'undefined') {
        return cordova.plugins.idfa.getInfo();
      }
      return {};
    });
  }
}
