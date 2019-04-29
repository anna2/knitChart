import { Component, OnInit } from '@angular/core';
import { Pattern } from '../pattern';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pattern-add',
  templateUrl: './pattern-add.component.html',
  styleUrls: ['./pattern-add.component.less']
})

export class PatternAddComponent implements OnInit {

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute) { }

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
    if(this.pattern.id){
      this.apiService.update("patterns/"+this.pattern.id,this.pattern).subscribe((r)=>{
      console.log(r);
      alert("pattern updated !");
    })
    }
    else {
    this.apiService.post("patterns",this.pattern).subscribe((r)=>{
    console.log(r);
    this.pattern = new Pattern();
    alert("pattern added !");
    
    });
    }
  }



}
