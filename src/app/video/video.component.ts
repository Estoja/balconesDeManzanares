import { Component, OnInit } from '@angular/core';
import {VgApiService} from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent {

  videos = [
    '/assets/video/DJI_0062_1.mp4',
    '/assets/video/DJI_0053.MP4'
  ];

  slideOptions = {
    items: 1,
    margin: 10,
    dots: true,
    loop: true,
    nav: false,
    lazyLoad: true,
  };

}
