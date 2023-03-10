import { Component } from '@angular/core';
import {ALBUM, Album} from "../Albs";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent {
  albums: Album[];

  constructor(private albumService: AlbumService) {
    this.albums = [];
  }

  ngOnInit() {
    //  this.albums = ALBUM
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }

  deleteIt(alb: Album) {
    this.albumService.deleteAlbum(alb.id).subscribe(response => {
      this.albums = this.albums.filter(album => album.id !== alb.id);
    });
  }
}
