
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlickrService.Models
{
    public class FlickrImages
    {
        public string Title { get; set; }
        public string Link { get; set; }

        public string Description { get; set; }

        public DateTime Modified { get; set; }
        public string Generator { get; set; }

        public List<FlickrImage> items { get; set; }
    }
}
