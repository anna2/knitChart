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
    console.log(data.id);
    if(data && data.id){
        this.apiService.get("patterns/"+data.id).subscribe((data : Pattern)=>{
        this.pattern = data;
        });
    }
    else
    {
        this.pattern = new Pattern();
    }
    })
  }

  public onSubmit(){
    console.log("Adding a pattern: " + this.pattern.name);
    this.createGrid();
    if(this.pattern.id){
      this.apiService.update("patterns/"+this.pattern.id,this.pattern).subscribe((r)=>{
      this.router.navigateByUrl('/patterns/edit/' + this.pattern.id);
    })
    }
    else {
    this.apiService.post("patterns",this.pattern).subscribe((r)=>{
      this.pattern = new Pattern();
      this.router.navigateByUrl('/patterns/edit/' + r.id);  
    });
    }
  }

  // a pattern is represented as an array of arrays
  // innermost arrays represent a pattern row
  // integers represent stitches
  public createGrid() {
    if (this.pattern && this.pattern.width && this.pattern.height && !this.pattern.stitches) {
      this.pattern.stitches = new Array(this.pattern.height);
      for (let i = 0; i < this.pattern.height; i++) {
        this.pattern.stitches[i] = new Array(this.pattern.width).fill(0);
      }
    } else {
      this.pattern.height = 20;
      this.pattern.width = 20;
      this.pattern.stitches = new Array(this.pattern.height);
      for (let i = 0; i < this.pattern.height; i++) {
        this.pattern.stitches[i] = new Array(this.pattern.width).fill(0);
      }
    }
  }

}
