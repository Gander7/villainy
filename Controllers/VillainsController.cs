using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace villainy.Controllers
{
    [Route("api/[controller]")]
    public class VillainsController : Controller
    {
        private static List<Villain> Villains = new List<Villain>() {
          new Villain() { Name = "Junq", Powers = "Can make weapons and gadgets out of anything available", Hobbies = "Crochet, macrame, kidnapping"},
          new Villain() { Name = "Darkness", Powers = "Converts light into darkness", Hobbies = "Robbing banks, blackmail, puzzles" },
          new Villain() { Name = "Blast Wave", Powers = "Generates concussive waves with his hands", Hobbies = "General villainy, doggie dancing" },
          new Villain() { Name = "Smoke Jumper", Powers = "Can control fire and smoke", Hobbies = "Extortion, arson, poetry" }
        };

        [HttpGet]
        public List<Villain> GetVillains()
        {
            Console.WriteLine("All Villains");
            return Villains;
        }

        [HttpGet("[action]/{name}")]
        public Villain GetVillain(string name)
        {
          Console.WriteLine("One Villain");
            var villain = Villains.Find((v) => v.Name.ToLower() == name.ToLower());
            return (villain == null) 
                      ? null 
                      : villain;
        }

        public class Villain
        {
          public string Name { get; set; }
          public string Powers { get; set; }
          public string Hobbies { get; set; }
        }
    }
}