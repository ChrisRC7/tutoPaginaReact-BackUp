using DB;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Controllers {
    [ApiController]
    [Route("[controller]")] //Ruta controlador
    public class UserController : ControllerBase {
        [HttpPost]
        [Route("register/{name}/{username}")] //Ruta para el post

        public IActionResult Register(string name, string username) { //funcion que se ejecuta cuando hay un httpPost
            User newUser = new User() {
                name = name,
                username = username
            };
            JSONManager.AddToJSON<User>(newUser, "../tuto-api/DB/Entities/User.json");
            return Ok(newUser);
        }
    }
}