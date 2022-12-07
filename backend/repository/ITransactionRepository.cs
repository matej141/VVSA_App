
namespace csharp.repository;

public interface ITransactionRepository {

    public List<DatabaseModel.Transaction> GetAllTransactions();

    public DatabaseModel.Transaction? GetTransactionById(int id);
}