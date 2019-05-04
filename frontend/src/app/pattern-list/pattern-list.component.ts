import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Pattern } from '../pattern';

@Component({
  selector: 'app-pattern-list',
  templateUrl: './pattern-list.component.html',
  styleUrls: ['./pattern-list.component.less']
})

export class PatternListComponent implements OnInit {

  constructor(public apiService: ApiService , public router : Router) {
  }

  public columns = ['id','name'];
  public rows : Array<Pattern>;

  public delete(id:string){
    var path = 'patterns/' + id;
    this.apiService.delete(path).subscribe((r)=>{
      this.rows = this.rows.filter((p,i)=>{
        if(Number(id) === p.id ){
          return false;
        }
        return true;
      },this.rows)
    });
  }

  public update(id:string){
    this.router.navigateByUrl('/patterns/edit/' + id);
  }

  ngOnInit() {
    this.apiService.get("patterns").subscribe((data : Pattern[])=>{
      this.rows = data;
    });
  }

}
