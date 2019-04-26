using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PoeLadderBE.DataContracts.Requests
{
    public class GetLadderRequest
    {
        public int? OffsetFrom{get; set;}
        public int? Count { get; set; }
        public string Name { get; set; }
        public string League { get; set; }

    }
}
