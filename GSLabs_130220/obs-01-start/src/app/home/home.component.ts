import { Component, OnInit } from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators'
import { OnDestroy } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private obsSubscription: Subscription
  constructor() { }

  ngOnInit() {
    // this.obsSubscription = interval(1000).subscribe((count)=>{
    //   console.log(count);
    // })
    let count = 0
    const custObservable = Observable.create(observer=>{
      setInterval(()=>{
        if(count>4)
          observer.complete();
        if(count>3)
          observer.error("Whoa whoa whoa! Count crossed 3 ...")
        observer.next(count++)
      }, 1000)
    })
    // custObservable.pipe(map(data=>{
    //   //console.log(`Round ${data}`);
    //   return `Round ${data}`
    // }))
    this.obsSubscription = custObservable
    .pipe(
      filter((data)=>{
        if (data<1)
          return false
        return true;
      }), 
      map(data=>{
      //console.log(`Round ${data}`);
      return `Round ${data}`
    }))
    .subscribe(
      (data)=>{
      console.log(`${data} raw data`);
      },
      (err)=>{
        alert(err);
      },
      ()=>{
        alert("completed");
      }
    )
  }
  ngOnDestroy(){
    this.obsSubscription.unsubscribe();
  }

}
