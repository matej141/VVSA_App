using csharp.service;
using Microsoft.AspNetCore.Mvc;

namespace csharp.Controllers;

[ApiController]
[Route("api/transactions")]
public class TransactionController : ControllerBase
{

    private readonly ILogger<TransactionController> _logger;
    private readonly ITransactionService transactionService;

    public TransactionController(ITransactionService service)
    {
        transactionService = service;
    }

    [HttpGet(Name = "GetTransactions")]
    public List<TransactionViewModel> GetAllTransactions()
    {   
        List<TransactionViewModel> transactions = transactionService.GetAllTransactions();
        return transactions;
    }
    
    [HttpGet("{id}",Name = "GetTransactionById")]
    public TransactionViewModel GetTransactionById(int id)
    {
        var transaction = transactionService.GetTransactionById(id);

        return transaction;
    }
}
