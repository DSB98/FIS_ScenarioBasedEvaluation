import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, NgForm, FormBuilder } from '@angular/forms';
import { CardServiceService } from '../card-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent implements OnInit {

  alert: boolean = false;
  myReactiveForm: any;

  constructor(private router: ActivatedRoute, private cardservice: CardServiceService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    this.cardservice.GetCard(this.router.snapshot.params['id'])
      .subscribe((result:any) => {
        console.warn("result",result)
        this.myReactiveForm = new FormGroup({
          
          'username': new FormControl(result['username'], [Validators.required,Validators.pattern('^[A-Z]{1}[a-z]*[" "]{1}[A-Z]{1}[a-z]*')]),
          'date': new FormControl(result['date'], [Validators.required,Validators.pattern('^[0-9]{2}[/]{1}[22-99]{2}$')]),
          'securitycode':new FormControl(result['securitycode'], [Validators.required,Validators.pattern('^[0-9]{3}$')]),
          'cardnumber': new FormControl(result['cardnumber'], [Validators.required,Validators.pattern('^[0-9]{16}$')]),
        });
      })

    
  }
  onSubmit() {
    // console.log(this.myReactiveForm.value)
    this.cardservice.UpdateCard(this.router.snapshot.params['id'],this.myReactiveForm.value).subscribe((result) => {
      // console.warn("Data submitted successfully", result)
      // alert("Data submitted successfully " + result)
      this.alert = true
      this.myReactiveForm.reset({})
    })

  }
  closeAlert() {
    this.alert = false
  }

}