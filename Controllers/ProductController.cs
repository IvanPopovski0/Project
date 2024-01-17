using Microsoft.AspNetCore.Mvc;
using System.Linq;

public class ProductController : Controller
{
    private readonly ApplicationContext _context;

    public ProductController(ApplicationContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
        var products = _context.Products.ToList();
        return Json(products);
    }
}
