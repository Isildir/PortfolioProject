using Microsoft.EntityFrameworkCore;
using PortfolioProject.Database.Models;

namespace PortfolioProject.Database
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}