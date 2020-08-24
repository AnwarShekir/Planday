using FlickrService.Models;
using ServiceStack;
using System.Collections.Generic;


namespace FlickrService.External
{
    public class Flickr
    {

        public List<FlickrImage> GetImages()
        {

            var url = "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1";
            var result = url.GetJsonFromUrl().FromJson<FlickrImages>();

            return result.items;
        }

        public List<FlickrImage> GetImagesByTag(string tag)
        {
            var url = "https://www.flickr.com/services/feeds/photos_public.gne?tags=" + tag + "&format=json&nojsoncallback=1";
            var result = url.GetJsonFromUrl().FromJson<FlickrImages>();

            return result.items;

        }

    }
}
