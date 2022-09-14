import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CardServiceService } from '../card-service.service';
@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  alert: boolean = false;
  myReactiveForm: any;

  constructor(private cardservice: CardServiceService) { }

  ngOnInit(): void {
    this.alert = false;
    this.myReactiveForm = new FormGroup({
     
      
      'username': new FormControl(null, [Validators.required,Validators.pattern('^[A-Z]{1}[a-z]*[" "]{1}[A-Z]{1}[a-z]*')]),
      // 'date': new FormControl(null, [Validators.required, Validators.pattern('/^(0[1-9]|1[0-2]\/?([0-9]{4}|[0-9]{2})$/)')]),

      
      // 'date': new FormControl(null, [Validators.required, Validators.pattern('^[0-1]{1}[1-9]{1}[/]{1}20((09)|([1-5][0-9]))')]),

      'date': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{2}[/]{1}[22-99]{2}$')]),
      'securitycode':new FormControl(null, [Validators.required,Validators.pattern('^[0-9]{3}$')]),
      'cardnumber': new FormControl(null, [Validators.required,Validators.pattern('^[0-9]{16}$')]),
      
    });
  }
  onSubmit() {
    
    this.cardservice.postCard(this.myReactiveForm.value).subscribe((result) => {
      
      this.alert = true
      this.myReactiveForm.reset({})
    })
    

  }
  closeAlert()
  {
    this.alert = false
  }
}