public interface IUserRepository
{
    User GetUserByUsername(string username);
    void AddUser(User user);
    // Add other necessary methods
}
