import { Component, OnInit } from '@angular/core';
import { Pattern } from '../pattern';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pattern-add',
  templateUrl: './pattern-add.component.html',
  styleUrls: ['./pattern-add.component.less']
})

export class PatternAddComponent implements OnInit {

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute , public router : Router) { }

  public pattern : Pattern  = new Pattern();

  ngOnInit() {
    this.acRoute.params.subscribe((data : any)=>{
      if(data && data.id){
        this.apiService.get("patterns/"+data.id).subscribe((data : Pattern)=>{
          this.pattern = data;
        });
      } else {
          this.pattern = new Pattern();
      }
    })
  }

  public onSubmit(){
    if(this.pattern.id){
      this.apiService.update("patterns/"+this.pattern.id,this.pattern).subscribe((r : Pattern)=>{
        this.router.navigateByUrl('/patterns/edit/' + this.pattern.id);
      })
    } else {
      this.createGrid();
      this.apiService.post("patterns",this.pattern).subscribe((r : Pattern)=>{
        this.router.navigateByUrl('/patterns/edit/' + r.id);  
      });
    }
  }

  // A pattern is represented as an array of arrays.
  // Innermost arrays represent a pattern row.
  // Characters represent stitches.
  // Initialize a chart with all knit stitches ("k").

  public createGrid() {
    if (this.pattern && !this.pattern.width) {
      this.pattern.width = 20;
    }

    if (this.pattern && !this.pattern.height) {
      this.pattern.height = 20;
    }

    if (this.pattern && this.pattern.width && this.pattern.height && !this.pattern.stitches) {
      this.pattern.stitches = new Array(this.pattern.height);
      for (let i = 0; i < this.pattern.height; i++) {
        this.pattern.stitches[i] = new Array(this.pattern.width).fill("k");
      }
    }
  }

}
