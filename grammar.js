{
  "vehicle": [
    "station-wagon",
    "hearse",
    "garbage-truck",
    "street-cleaner",
    "coupe",
    "sports car",
    "motorcycle",
    "scooter",
    "moped",
    "bicycle",
    "pickup-truck",
    "minivan",
    "van",
    "rental car",
    "sedan",
    "taxi",
    "Lyft",
    "repair van",
    "cable van"
  ],
  "street_person": [
    "man",
    "woman",
    "boy",
    "girl",
    "electrician",
    "repairman",
    "landlord",
    "police officer",
    "hotdog vendor",
    "street vendor",
    "skateboarder",
    "drunkard",
    "tech worker",
    "local",
    "tourist",
    "hipster",
    "wizard",
    "barrista",
    "small business owner",
    "stoop kid",
    "millenial",
    "bartender",
    "waiter"
  ],
  "street_animal": [
    "pigeon",
    "cat",
    "dog",
    "lizard",
    "rat",
    "crow",
    "seagull"
  ],
  "street_character": [
    "#street_person#",
    "#street_animal#"
  ],
  "street_character_verb": [
    "flicked",
    "inspected",
    "picked up",
    "dropped",
    "threw",
    "tossed",
    "rolled over",
    "nudged",
    "kicked",
    "tripped over",
    "instagrammed",
    "tripped #preposition#",
    "stepped #preposition#",
    "walked around",
    "stopped #preposition#",
    "coughed #preposition#",
    "stopped to pee #preposition#"
  ],
  "vehicle_adjective": [
    "old",
    "rusty",
    "new",
    "smoking",
    "classy",
    "shiny",
    "used",
    "brand new",
    "obviously stolen",
    "squeeking",
    "rattling",
    "shaking",
    "broken",
    "busted",
    "shattered",
    "smashed",
    "dented"
  ],
  "vehicle_color": [
    "red",
    "white",
    "burgundy"

  ],
  "adverb": [
    "slowly",
    "carefully",
    "carelessly",
    "quickly",
    "quietly",
    "loudly"
  ],
  "vehicle_active_action": [
    "drove",
    "parked",
    "stopped",
    "got out of",
    "got into"
  ],
  "vehicle_passive_action": [
    "caromed off of #street_item.a.#",
    "peeled out",
    "started bouncing",
    "did a 3-point-turn",
    "took a u-turn",
    "stalled out",
    "burst into flames",
    "swerved",
    "ran out of gas",
    "swerved around #street_item.a#"
  ],
  "street_item": [
    "squirrel",
    "accordion",
    "bag of chips",
    "shoe",
    "shoe lace",
    "t-shirt",
    "hoodie",
    "beanie",
    "sock",
    "canteloupe",
    "watermelon",
    "avocado",
    "rambutan",
    "ice cream cone",
    "newspaper",
    "magazine",
    "art show flyer",
    "lego",
    "egg shell",
    "pickle",
    "cucumber",
    "burrito",
    "burrito wrapper",
    "dumpster",
    "overturned garbage can",
    "cigarette butt",
    "empty case of beer",
    "pile of dog-poo",
    "stray dog",
    "stray cat",
    "burnt-out firework",
    "stolen purse",
    "dropped wallet",
    "fire extinguisher",
    "man-hole cover",
    "office chair",
    "coin",
    "parking meter",
    "pile of garbage",
    "old computer",
    "VHS tape",
    "box of CDs",
    "empty bottle",
    "pair of sunglasses",
    "beat-up piñata",
    "beer can",
    "pigeon corpse",
    "rat corpse",
    "pile of leaves",
    "tire",
    "broken barstool",
    "fallen branch",
    "tree",
    "stump",
    "daffodil",
    "ginkgo leaf",
    "daisy",
    "cactus",
    "aloe plant"
  ],
  "vehicle_descriptor": [
    "#vehicle_adjective.a# #vehicleName#",
    "#vehicle_adjective.a# #vehicle_color# #vehicleName#",
    "#vehicle_color.a# #vehicleName#",
    "#vehicleName.a# driven by #street_person.a#"
  ],
  "set_vehicle": [
    "[vehicleName:#vehicle#]"
  ],
  "street_story": [
    "#street_character.a# #street_character_verb# #street_item.a#"
  ],
  "preposition": [
    "over",
    "under",
    "in front of",
    "next to",
    "off the side of"
  ],
  "vehicle_story": [
    "#street_person.a# #vehicle_active_action# #vehicle_descriptor#",
    "#street_person.a# #adverb# #vehicle_active_action# #vehicle_descriptor#",
    "#vehicle_descriptor# #vehicle_passive_action# #adverb#",
    "#vehicle_descriptor# #vehicle_passive_action# #adverb#",
    "#vehicle_story# while #vehicle_story#",
    "#street_item.a# prevented #vehicle_descriptor# from driving through the intersection"
  ],
  "story": [
    "[#set_vehicle#] #vehicle_story#",
    "[#set_vehicle#] #street_story# while #vehicle_story#",
    "[#set_vehicle#] #vehicle_story# while #street_story#"
  ],
  "origin": ["#story#"]
}
