import { Component, OnInit } from '@angular/core';
import {VgApiService} from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  // preload = 'auto';
  //   api: VgApiService;
  // constructor() { }

  // onPlayerReady(api: VgApiService) {
  //   this.api = api;
  //   console.log('hola');
  //   this.api.play();

  //   this.api.getDefaultMedia().subscriptions.ended.subscribe(
  //       () => {
  //           // Set the video to the beginning
  //           this.api.getDefaultMedia().currentTime = 0;
  //           this.api.play();
  //       }
  //   );
  // }

}
