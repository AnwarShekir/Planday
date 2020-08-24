using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlickrService.External;
using FlickrService.Models;
using Microsoft.AspNetCore.Mvc;

namespace FlickrService.Controllers
{

    public class FlickImagesController : Controller
    {
    private readonly Flickr service = new Flickr();

        [HttpGet]
        public IActionResult GetImages()
        {
            List<FlickrImage> result = service.GetImages();
            if(result.Count < 1)
            {
                return BadRequest("No Values found"); //Her vil normalt sendes et object med en fejlbesked.
            }
            return Ok(result);
        }

        [HttpGet]
        public IActionResult GetImagesByTag(string tag)
        {
            List<FlickrImage> result = service.GetImagesByTag(tag);
            if (result.Count < 1)
            {
                return BadRequest("No Values found"); 
            }
            return Ok(result);

        }

        
    }
}
