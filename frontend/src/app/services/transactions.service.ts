import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

export interface Transaction {
  transactionId: number;
  fullName: string;
  transactionType: string;
  accountNumber: string;
  bankCode: string;
  issueDate: Date;
  amount: number;
}

export interface TransactionsData {
  data: Transaction[]
}

export interface TransactionData {
  data: Transaction
}


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private transactionUrl = '/api/transactions';

  constructor(private http: HttpClient) {
  }

  getAllTransaction(){
    return this.http.get<Transaction[]>(this.transactionUrl);
  }

  getTransaction(id: number) {
    return this.http.get<Transaction>(this.transactionUrl + '/' + id);
  }
}
