using csharp.repository;
namespace csharp.service;

public interface ITransactionService {

    public List<TransactionViewModel> GetAllTransactions();

    public TransactionViewModel GetTransactionById(int id);
}