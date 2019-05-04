import { Component, OnInit } from '@angular/core';
import { Pattern } from '../pattern';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Stitch } from '../stitch';

@Component({
  selector: 'app-pattern-edit',
  templateUrl: './pattern-edit.component.html',
  styleUrls: ['./pattern-edit.component.less']
})
export class PatternEditComponent implements OnInit {

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute) { }

  public pattern : Pattern = new Pattern();

  public toolBarStitches: Stitch[] = [
   {id: 0, name: "knit", key:"k"},
   {id: 1, name: "purl", key:"p"},
   {id: 2, name: "yarn over", key:"o"},
   {id: 3, name: "ssk", key:"q"},
   {id: 4, name: "purl two together", key:"l"},
   {id: 5, name: "knit two together", key:"/"},
   {id: 6, name: "make one right", key:";"},
   {id: 7, name: "make one left", key:":"},
   {id: 8, name: "empty", key:""}
  ]

  public selectedStitchType : Stitch = this.toolBarStitches[0];

  public setSelectedStitchType(stitch : Stitch) {
    this.selectedStitchType = stitch;
  }

  public placeStitch(row : number, index: number) { 
    this.pattern.stitches[row][index] = this.selectedStitchType.key;
    this.persist();
  }

  public persist(){
    if(this.pattern.id){
      this.apiService.update("patterns/"+this.pattern.id,this.pattern).subscribe((r)=>{
        console.log("changes saved");
      })
    }
  }

  ngOnInit() {
    this.acRoute.params.subscribe((data : any)=>{
      if(data && data.id){
          this.apiService.get("patterns/"+data.id).subscribe((data : Pattern)=>{
          this.pattern = data;
          });
      }
      else {
          this.pattern = new Pattern();
      }
    })
  }

}
