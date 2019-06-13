import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { }
  
  getSongs(){
    //getting all pet profiles
    return this.http.get('https://clouda3.herokuapp.com/allsongs');
  }
  addSong(songData:any){
    console.log("https://clouda3.herokuapp.com/newsong?name="+songData["name"]+"&artist="+songData["artist"]+"&playlist="+songData["playlist"]);
    return this.http.post("https://clouda3.herokuapp.com/newsong?name="+songData["name"]+"&artist="+songData["artist"]+"&playlist="+songData["playlist"],songData);
  }
  deleteSong(songId:any){
    this.http.delete("https://clouda3.herokuapp.com/deletesong/"+songId).subscribe(response=>{
      console.log(response);
    });
  }
}
