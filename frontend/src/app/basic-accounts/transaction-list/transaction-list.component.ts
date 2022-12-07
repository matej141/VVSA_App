import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  public allTransactions : Transaction[] = [];
  displayedColumns: string[] = ['transactionId', 'fullName', 'transactionType', 'accountNumber', 'bankCode', 'issueDate', 'amount'];

  constructor(private transactionService: TransactionsService) { }

  ngOnInit(): void {
    this.transactionService.getAllTransaction().subscribe(
      data => this.allTransactions = data
    );
  }

}
