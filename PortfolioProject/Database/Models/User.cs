﻿namespace PortfolioProject.Database.Models
{
    public class User
    {
        public int Id { get; set; }

        public string Login { get; set; }

        public string Password { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }
    }
}