﻿using System;
using System.Collections.Generic;

#nullable disable

namespace Client.Back.Models
{
    public partial class Client
    {
        public int RefContact { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Adresse { get; set; }
        public string Ville { get; set; }
        public string CodePostal { get; set; }
    }
}
