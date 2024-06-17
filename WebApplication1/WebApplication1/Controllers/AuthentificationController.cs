using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class AuthenticationController : ControllerBase
{
    private readonly IUserRepository _userRepository;

    public AuthenticationController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    [HttpPost("login")]
    public IActionResult Login(User user)
    {
        var existingUser = _userRepository.GetUserByUsername(user.Username);
        if (existingUser == null || existingUser.Password != user.Password)
        {
            return Unauthorized(); 
        }

    
        return Ok(new { Message = "Login successful" });
    }

    [HttpPost("register")]
    public IActionResult Register(User user)
    {
        if (_userRepository.GetUserByUsername(user.Username) != null)
        {
            return Conflict(new { Message = "Username already exists" });
        }

        _userRepository.AddUser(user);


        return CreatedAtAction(nameof(Login), new { id = user.Id }, user); 
    }
}
