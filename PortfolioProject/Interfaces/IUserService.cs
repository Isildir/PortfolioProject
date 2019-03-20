using PortfolioProject.Database.Models;

namespace PortfolioProject.Interfaces
{
    public interface IUserService
    {
        User Authenticate(string login, string password);

        User GetById(int id);

        User Create(User user, string password);

        void Delete(int id);
    }
}