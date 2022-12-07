import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Transaction, TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
    myForm!: FormGroup;
    Id: number = -1;
    transaction!: Transaction;
    private routeSub!: Subscription;

    constructor(private route: ActivatedRoute, private transactionService: TransactionsService,
        private fb: FormBuilder) {
            this.myForm = this.fb.group({
                accountNumber: [ ],
                ammount: [ ],
                date: [],
              });

    }


    ngOnInit(): void {

      this.routeSub = this.route.params.subscribe(params => {
        this.Id = params['id'];
      });

      this.transactionService.getTransaction(this.Id).subscribe(
        data => {
          this.transaction = data;
          this.myForm.setValue({accountNumber: data.accountNumber,
            ammount: data.amount,
            date: data.issueDate})
        }
      );


    }

}
