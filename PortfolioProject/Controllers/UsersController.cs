using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PortfolioProject.Database.Models;
using PortfolioProject.Dtos;
using PortfolioProject.Helpers;
using PortfolioProject.Interfaces;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace PortfolioProject.Controllers
{
    [Authorize, ApiController, Route("api/[controller]")]
    public class UsersController : Controller
    {
        private IUserService userService;
        private readonly AppSettings appSettings;

        public UsersController(IUserService userService, IOptions<AppSettings> appSettings)
        {
            this.userService = userService;
            this.appSettings = appSettings.Value;
        }

        [AllowAnonymous, HttpPost("[action]")]
        public IActionResult Authenticate([FromBody]UserDto userDto)
        {
            var user = userService.Authenticate(userDto.Login, userDto.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            // return basic user info (without password) and token to store client side
            return Ok(new
            {
                user.Id,
                Username = user.Login,
                Token = tokenString
            });
        }

        [AllowAnonymous, HttpPost("[action]")]
        public IActionResult Register([FromBody]UserDto userDto)
        {
            // map dto to entity
            var user = new User { Id = userDto.Id, Login = userDto.Login, Password = userDto.Password };

            try
            {
                // save
                userService.Create(user, userDto.Password);

                return Ok();
            }
            catch (Exception ex)
            {
                // return error message if there was an exception
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("[action]/{id:int}")]
        public IActionResult GetById(int id)
        {
            var user = userService.GetById(id);

            var userDto = new UserDto { Id = user.Id, Login = user.Login, Password = user.Password };

            return Ok(userDto);
        }

        [HttpDelete("[action]/{id:int}")]
        public IActionResult Delete(int id)
        {
            userService.Delete(id);
            return Ok();
        }
    }
}