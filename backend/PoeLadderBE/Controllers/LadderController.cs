using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using PoeLadderBE.DataContracts.Requests;
using PoeLadderBE.Models;

namespace PoeLadderBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LadderController : Controller
    {
        const string APIURL = "http://api.pathofexile.com/ladders/";
        
        [HttpGet]
        public  ActionResult<IEnumerable<Character>> GetAll([FromQuery] GetLadderRequest request)
        {
             System.Diagnostics.Debug.WriteLine(request.OffsetFrom + " "+ request.Count + " " + request.Name);

            try
            {
                string requestURL = APIURL + request.League;
                List<Character> characters = new List<Character>();
                if(string.IsNullOrEmpty(request.Name))
                    requestURL += "?offset=" + request.OffsetFrom + "&limit=" + request.Count;
                else
                    requestURL += "?accountName=" + request.Name;

                using (WebClient wc = new WebClient())
                {
                    string obj =  wc.DownloadString(requestURL);
                    JObject json = JObject.Parse(obj);

                    characters = json["entries"].Select(entry => new Character
                    {
                        Rank = (int)entry["rank"],
                        Level = (int)entry["character"]["level"],
                        Class = (string)entry["character"]["class"],
                        Name = (string)entry["character"]["name"],

                    }).ToList();

                }

                return Ok(characters);
               
            }
            catch (Exception e)
            {
                return NotFound();
            }
        }
    }
}