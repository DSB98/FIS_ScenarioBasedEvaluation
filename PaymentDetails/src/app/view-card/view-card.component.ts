import { Component, OnInit } from '@angular/core';
import { CardServiceService } from '../card-service.service';
@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {



  constructor(private cardservice: CardServiceService) { }
  collection: any = [];
  ngOnInit(): void {
    this.cardservice.getList().subscribe((result) => {
      console.warn(result)
      this.collection = result
    })
  }
  deleteCard(id:any) {
    //Note : This data we have delete it from collection array also.
    this.collection.splice(id , 1)
    this.cardservice.DeleteCard(id).subscribe((result) => {
      console.warn(result)
    })
  }

}