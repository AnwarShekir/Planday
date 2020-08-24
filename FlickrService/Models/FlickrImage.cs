using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlickrService.Models
{
    public class FlickrImage
    {
        public string Title { get; set; }
        public string Link { get; set; }
        public string Media { get; set; }
        public string Description { get; set; }
        public DateTime Published { get; set; }
        public string Author { get; set; }
        public string AuthorId { get; set; }
        public string Tags { get; set; }
    }
}
