import { Component, OnInit } from '@angular/core';
import { SongsService } from './songs.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'songsplaylist';
  songData: any;
  newSong: any;
  addSong = new FormGroup({
    songname: new FormControl(''),
    artiste: new FormControl(''),
    playlist: new FormControl('')
  })
  constructor(
    private songs: SongsService
  ) {

  }
  ngOnInit() {
    this.songs.getSongs().subscribe(data=>{
      this.songData=data;
      console.log(this.songData);
    })
  }
  addSongs(){
    this.newSong={
      name: this.addSong.get('songname').value,
      artist: this.addSong.get('artiste').value,
      playlist: this.addSong.get('playlist').value,
    }
    this.songs.addSong(this.newSong).subscribe(result=>{
      console.log(result);
      alert("Song added!");
    });
    setTimeout(function(){ 
      window.location.reload();
     }, 500);
    
  }
  deleteSong(songId){
    this.songs.deleteSong(songId);
    alert("Song Deleted!");
    this.songs.getSongs().subscribe(data=>{
      this.songData=data;
      console.log(this.songData);
    });
    
    setTimeout(function(){ 
      window.location.reload();
     }, 500);
  }
}
