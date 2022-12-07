using csharp.DatabaseModel;
using Microsoft.EntityFrameworkCore;

namespace csharp.repository;
public class TransactionRepository: ITransactionRepository {

    private whiyes5oContext context;
    public TransactionRepository(whiyes5oContext context)
    {
        this.context = context;
    }

    public List<DatabaseModel.Transaction> GetAllTransactions()
    {
        return this.context.Transactions.Include(p => p.User).Include(p => p.TransactionType).ToList();
    }

    public DatabaseModel.Transaction? GetTransactionById(int id)
    {
        return this.context.Transactions.Include(p => p.User).Include(p => p.TransactionType).FirstOrDefault(p => p.Id == id);
    }
}