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

        [HttpPost]
        public IActionResult AddVillain([FromBody]Villain item)
        {
            Console.WriteLine("Adding Villain");
            Villains.Add(item);

            return Ok(new 
            {
                success = true,
                returncode = "200"
            });
        }

        [HttpPut]
        public IActionResult Update([FromBody]Villain villain)
        {
          Console.WriteLine("Updating Villain");
          var toUpdate = Villains.Find((v) => v.Name == villain.Name);

          if (toUpdate == null) return NotFound();

          toUpdate.Powers = villain.Powers;
          toUpdate.Hobbies = villain.Hobbies;

          return Ok(new
          {
            success = true,
            returncode = "200"
          });
        }

        [HttpDelete("{name}")]
        public IActionResult Delete(string name)
        {
          Console.WriteLine("Delete Villain: " + name);
          var toDelete = Villains.Find((v) => v.Name == name);
          if (toDelete == null) return NotFound();

          Villains.Remove(toDelete);

          return Ok(new
          {
            success = true,
            returncode = "200"
          });
        }

        public class Villain
        {
          public string Name { get; set; }
          public string Powers { get; set; }
          public string Hobbies { get; set; }
        }
    }
}
