
var categories =  [
 "Humour", //[0]
 "Literature",//[1]
 "Music", //[2]
 "Film",//[3]
 "Science",//[4]
 "Physcology",//[5]
 "Philosophy",//[6]
 "Journalism"]//[7]

var unknown = "unknown"; //a value of unknown is used to allow the year to be omitted if not known.

var quotes =  [{ source: "David Allen", //[0]
      quotation: "You can do anything but not everything.",
      year: 2009,
      category: categories[6]
    },

    { source: "Metalica",       //[1]
      quotation: "Seek the truth, no matter where it lies.",
      year: 1975,
      category: categories[2]
    },

    { source: "Albert Einstein", //[2]
      quotation: "The strength of the Constitution lies entirely in the determination of each citizen to defend it.",
      year: unknown,
      category: categories[4]
    },

    { source: "Winston Churchill", //[3]
      quotation: "Success is walking from failure to failure woth no loss of enthusiasm",
      year: 1944,
      category: categories[6],
    },

    { source: "Dr. Suess", //[4]
      quotation: "A person's a person, no matter how small.",
      year: 2002,
      category: categories[1],
    },

    { source: "Anne Frank",//[5]
      quotation: "Parents can only give good advice or put them on the right paths, but the final forming of a person's character lies in their own hands.",
      year: 1943,
      category: categories[5],
    },

    { source: "Lydon Johnson",//[6]
      quotation: "Reporters are puppets. They simply respond to the pull of the most powerful strings.",
      year: unknown,
      category: categories[4],
    }
];

var usedQuotes =  []; //redundant until the objects are displayed, then populated in here.
