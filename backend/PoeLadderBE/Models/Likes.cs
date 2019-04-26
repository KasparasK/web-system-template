using System;
namespace PoeLadderBE.Models
{
    public class Likes
    {
        public string CharName { get; set; }
        public int LikeCount { get; set; }

        public Likes(string name, int likes)
        {
            CharName = name;
            LikeCount = likes;

        }
    }
}
