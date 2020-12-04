import { Component, AfterViewInit } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { Station } from "../../app/globals/station";
import { station } from "../../app/globals/constants";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage implements AfterViewInit {
  public station: Station;
  constructor(public navCtrl: NavController) {}

  ngAfterViewInit() {
    this.station = station;
  }
}
