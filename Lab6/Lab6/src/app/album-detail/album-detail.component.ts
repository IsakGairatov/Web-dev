import { Component } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ALBUM, Album} from "../Albs";
import {AlbumsComponent} from "../albums/albums.component";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent {
    album: Album;
    constructor(private route: ActivatedRoute,
                private AlbumService: AlbumService) {
        this.album = {} as Album;
    }
    ngOnInit(): void {
        this.route.paramMap.subscribe((params:ParamMap) => {
          const id = Number(params.get('id'));
         // this.album = ALBUM.find((album) => album.id === id) as Album;
          this.AlbumService.getAlbum(id).subscribe((album) => {
            this.album = album;
          })


        })
    }
}
