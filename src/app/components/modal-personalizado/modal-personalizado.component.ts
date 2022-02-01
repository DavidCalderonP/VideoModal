import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatCarouselComponent} from "@ngmodule/material-carousel";

@Component({
  selector: 'app-modal-personalizado',
  templateUrl: './modal-personalizado.component.html',
  styleUrls: ['./modal-personalizado.component.css']
})
export class ModalPersonalizadoComponent implements OnInit, AfterViewInit {

  @ViewChild('carousel', {static: true}) carousel: MatCarouselComponent;

  data = [
    {
      id: 1,
      mp4: "https://www.w3schools.com/html/mov_bbb.mp4",
      ogg: "https://www.w3schools.com/html/mov_bbb.ogg",
      path: "https://images-vod.wixmp.com/1574d112-18ce-43ec-a9fc-ffba98ff136a/images/632a99aaf4d74146b10d4ae4b9c86c20f002/v1/fill/w_853,h_480,q_85,usm_0.66_1.00_0.01/file.webp"
    },
    {
      id: 2,
      mp4: "https://www.w3schools.com/tags/movie.mp4",
      ogg: "https://www.w3schools.com/tags/movie.mp4",
      path: "https://images-vod.wixmp.com/1574d112-18ce-43ec-a9fc-ffba98ff136a/images/ce9e1a7210424d6b929ff38e821ab6f5f001/v1/fill/w_853,h_480,q_85,usm_0.66_1.00_0.01/file.webp"
    },
    {
      id: 3,
      mp4: "https://www.w3schools.com/html/mov_bbb.mp4",
      ogg: "https://www.w3schools.com/html/mov_bbb.ogg",
      path: "https://images-vod.wixmp.com/1574d112-18ce-43ec-a9fc-ffba98ff136a/images/1c6da79947fb483996c2e978316228ed~mv2/v1/fill/w_853,h_480,q_85,usm_0.66_1.00_0.01/file.webp"
    },
    {
      id: 4,
      mp4: "https://www.w3schools.com/tags/movie.mp4",
      ogg: "https://www.w3schools.com/tags/movie.mp4",
      path: "https://images-vod.wixmp.com/1574d112-18ce-43ec-a9fc-ffba98ff136a/images/632a99aaf4d74146b10d4ae4b9c86c20f002/v1/fill/w_853,h_480,q_85,usm_0.66_1.00_0.01/file.webp"
    },
    {
      id: 5,
      mp4: "https://www.w3schools.com/html/mov_bbb.mp4",
      ogg: "https://www.w3schools.com/html/mov_bbb.ogg",
      path: "https://images-vod.wixmp.com/1574d112-18ce-43ec-a9fc-ffba98ff136a/images/ce9e1a7210424d6b929ff38e821ab6f5f001/v1/fill/w_853,h_480,q_85,usm_0.66_1.00_0.01/file.webp"
    },
    {
      id: 6,
      mp4: "https://www.w3schools.com/tags/movie.mp4",
      ogg: "https://www.w3schools.com/tags/movie.mp4",
      path: "https://images-vod.wixmp.com/1574d112-18ce-43ec-a9fc-ffba98ff136a/images/1c6da79947fb483996c2e978316228ed~mv2/v1/fill/w_853,h_480,q_85,usm_0.66_1.00_0.01/file.webp"
    },
    {
      id: 7,
      mp4: "https://www.w3schools.com/html/mov_bbb.mp4",
      ogg: "https://www.w3schools.com/html/mov_bbb.ogg",
      path: "https://images-vod.wixmp.com/1574d112-18ce-43ec-a9fc-ffba98ff136a/images/632a99aaf4d74146b10d4ae4b9c86c20f002/v1/fill/w_853,h_480,q_85,usm_0.66_1.00_0.01/file.webp"
    },
    {
      id: 8,
      mp4: "https://www.w3schools.com/tags/movie.mp4",
      ogg: "https://www.w3schools.com/tags/movie.mp4",
      path: "https://images-vod.wixmp.com/1574d112-18ce-43ec-a9fc-ffba98ff136a/images/ce9e1a7210424d6b929ff38e821ab6f5f001/v1/fill/w_853,h_480,q_85,usm_0.66_1.00_0.01/file.webp"
    },
    {
      id: 9,
      mp4: "https://www.w3schools.com/html/mov_bbb.mp4",
      ogg: "https://www.w3schools.com/html/mov_bbb.ogg",
      path: "https://images-vod.wixmp.com/1574d112-18ce-43ec-a9fc-ffba98ff136a/images/1c6da79947fb483996c2e978316228ed~mv2/v1/fill/w_853,h_480,q_85,usm_0.66_1.00_0.01/file.webp"
    },
    {
      id: 10,
      mp4: "https://www.w3schools.com/tags/movie.mp4",
      ogg: "https://www.w3schools.com/tags/movie.mp4",
      path: "https://images-vod.wixmp.com/1574d112-18ce-43ec-a9fc-ffba98ff136a/images/632a99aaf4d74146b10d4ae4b9c86c20f002/v1/fill/w_853,h_480,q_85,usm_0.66_1.00_0.01/file.webp"
    },
    {
      id: 11,
      mp4: "https://www.w3schools.com/html/mov_bbb.mp4",
      ogg: "https://www.w3schools.com/html/mov_bbb.ogg",
      path: "https://images-vod.wixmp.com/1574d112-18ce-43ec-a9fc-ffba98ff136a/images/ce9e1a7210424d6b929ff38e821ab6f5f001/v1/fill/w_853,h_480,q_85,usm_0.66_1.00_0.01/file.webp"
    },
    {
      id: 12,
      mp4: "https://www.w3schools.com/tags/movie.mp4",
      ogg: "https://www.w3schools.com/tags/movie.mp4",
      path: "https://images-vod.wixmp.com/1574d112-18ce-43ec-a9fc-ffba98ff136a/images/1c6da79947fb483996c2e978316228ed~mv2/v1/fill/w_853,h_480,q_85,usm_0.66_1.00_0.01/file.webp"
    }
  ]

  first = true;
  scrollMeasure = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
  }

  pausar(id: any) {
    // console.log("Pausando el item con el id: ", id)
    const video: HTMLVideoElement = document.getElementById(id) as HTMLVideoElement;
    video.pause();
  }

  reproduciendo(){
    // console.log("Reproduciendo!")

  }

  change(element: any){
    console.log(element
    )
    // console.log(document.activeElement?.children)
    const next = document.getElementsByClassName('carousel-arrow carousel-arrow-next')[0] as HTMLElement;
    // console.log(next)
    if(this.first){
      this.scroll('right');
      this.first = false;
    }
    next.onclick = () => {
      // console.log("Entrando al evento de la flecha siguiente")
      this.scroll('right');
    }

    const prev = document.getElementsByClassName('carousel-arrow carousel-arrow-prev')[0] as HTMLElement;
    // console.log(prev)
    prev.onclick = () => {
      // console.log("Entrando al evento de la flecha previa")
      this.scroll('left');
    }
  }

  scroll(orientation: string){
    // console.log("scroll")
    if(orientation === "right"){
      // console.log('r')
      this.scrollMeasure = this.scrollMeasure < 270 * this.data.length ? this.scrollMeasure + 270 : this.scrollMeasure;
    }else if (this.scrollMeasure>=270){
      // console.log('l')
      this.scrollMeasure -= 270;
    }
    // console.log("measure: ", this.scrollMeasure)
    document.getElementById('images')?.scroll({
      behavior: 'smooth',
      left: this.scrollMeasure
    })
  }
}
