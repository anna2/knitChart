import { Component, OnInit } from '@angular/core';
import { Pattern } from '../pattern';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pattern-edit',
  templateUrl: './pattern-edit.component.html',
  styleUrls: ['./pattern-edit.component.less']
})
export class PatternEditComponent implements OnInit {

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute) { }

  public pattern : Pattern  = new Pattern();

  public selectedStitchType : number  = 1;

  public setSelectedStitchType(stitch : number) {
    this.selectedStitchType = stitch;
  }

  public placeStitch(row : number, index: number) {
    console.log(row);  
    this.pattern.stitches[row][index] = this.selectedStitchType; 
    console.log(this.pattern.stitches);
  }

  ngOnInit() {

    this.acRoute.params.subscribe((data : any)=>{
    console.log(data.id);
    if(data && data.id){
        this.apiService.get("patterns/"+data.id).subscribe((data : Pattern)=>{
        this.pattern = data;
        //this.pattern.stitches = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
        console.log(this.pattern);
        });
    }
    else
    {
        this.pattern = new Pattern();
        //this.pattern.stitches = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
    }
    })
  }



}
