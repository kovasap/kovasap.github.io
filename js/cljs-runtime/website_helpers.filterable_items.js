goog.provide('website_helpers.filterable_items');
website_helpers.filterable_items.Name = new cljs.core.Keyword(null,"string","string",-1989541586);
/**
 * A more detailed description of a specific experience or mental-state.
 */
website_helpers.filterable_items.Details = new cljs.core.Keyword(null,"string","string",-1989541586);
website_helpers.filterable_items.Tag = new cljs.core.Keyword(null,"string","string",-1989541586);
/**
 * A syntax for writing experiences, to be parsed into maps for easier coding.
 *   Experiences are on the outer layer.
 */
website_helpers.filterable_items.Experiences = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.filterable_items.Name,website_helpers.filterable_items.Details,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),website_helpers.filterable_items.Tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.filterable_items.Name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.filterable_items.Name,website_helpers.filterable_items.Details], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.filterable_items.Name,website_helpers.filterable_items.Details,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),website_helpers.filterable_items.Tag], null)], null)], null)], null)], null)], null);
website_helpers.filterable_items.Info = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.Details], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.filterable_items.Tag], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.filterable_items.Name], null)], null)], null);
website_helpers.filterable_items.DataMap = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.filterable_items.Name,website_helpers.filterable_items.Info], null);
website_helpers.filterable_items.example_experiences_orig = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Comparing prices","When buying a good or service, comparing many alternatives to find the\n    best price. For example, looking at the price per pound of various grocery\n    items and picking the one with the lowest price.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Financial Control","A sense that you are living within or below your means.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimization problem","Involves constantly scanning many options and determining the best one.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["engaging"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Slipways](https://slipways.net/)","A video game about colonizing planets and connecting them with trade\n    routes.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimization problem"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Weights","",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exercise"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drugs","",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Running","",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exercise"], null),cljs.core.PersistentVector.EMPTY], null)], null);
website_helpers.filterable_items.example_experiences = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Comparing prices","When buying a good or service, comparing many alternatives to find the\n  best price. For example, looking at the price per pound of various grocery\n  items and picking the one with the lowest price.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Financial Control","A feeling that you understand and are in control of your finances.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities","Constantly examining many options and determining the best one by some\n    usually simple criteria.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["engaging"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Bike Commuting](https://kovasap.github.io/docs/lifestyle-optimizations/bike-commuting/)","Using a bike to fulfill daily transportation needs. Best with combined with\n  audiobooks or podcasts.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lifestyle","exercise"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Relaxing","Feeling comfortable and liable to zone out.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lead Climbing in a Gym","Clipping quickdraws on the way up a climbing route in a gym.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["climbing","exercise","\u2B50top10","social"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Thrill of Committment","Doing something with a penalty for failure that you can't turn back from."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Triumph over Exposure","Putting yourself in a stressful situation and showing yourself that you\n    can survive in it. I think this is a feeling Marc-Andr\u00E9 Leclerc was chasing\n    in the movie 'The Alpinist'."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Having a clear goal","The feeling of knowing exactly what you need to do."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Being in the Zone"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Backpack Hero](https://thejaspel.itch.io/backpack-hero)","A cool rougelike game about arranging a grid inventory optimally.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","turn-based"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Redditing","Browsing reddit. Some good subreddits include r/AnimalsBeingDerps and\n  r/DataIsBeautiful. Warning: can be a big time sink!",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit","consuming content"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Easy to do","Requires little to no difficult decision making, so is therefore easy to\n    pick up and do. This can lead to impulsively doing this thing too much."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Joy of sharing","The feeling you get when you find something cool and share it with someone\n    else."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Focus fragmenting","The feeling of constantly having your focus redirected, preventing you\n    from going deeper on any one particular thing."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Discovery of hidden gems","Most of the time this activity is monotonous and/or forgettable, but\n    occasionally it will yield an extremely memorable or life-changing\n    experience."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Browsing Hacker News","Like browsing reddit.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit","consuming content"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Easy to do"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Discovery of hidden gems"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching educational YouTube","This includes watching videos from channels like\n  [Veritasium](https://www.youtube.com/user/1veritasium), \n  [CGP Grey](https://www.youtube.com/user/CGPGrey),\n  and [Kurzgesagt](https://www.youtube.com/user/Kurzgesagt).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["consuming content"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wonder","A sense of wonder at the beauty of the world."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching GothamChess","Watching the GothamChess YouTube channel.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["consuming content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Easy to do"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["False Understanding","A state of mind where something seems to make sense emotionally, but if\n    you were to try to explain it in your own words or otherwise apply the\n    knowledge you would fail."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Relaxing"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching Spiderman: Into the Spider-Verse","Great story, cool themes about family and parenting.  Also about self\n  discovery. Quintessential all-ages kind of film.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["movie","consuming content"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching Inside Out","I loved the modelling of the mind as a collection of different emotions\n  competing for control.  Really made me get invested with the main character,\n  and made me cry when things started going poorly for her at one point.\n  Discussing this movie might be a good way to connect with people that\n  are otherwise fairly different.  \n  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["movie","consuming content"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching The Matrix","Watched with my Dad after being told that it would be very hard to understand.\n  Turned out that wasn't true for either of us.\n\n  Excellent sci-fi, where sci-fi is defined as a medium that explores how new\n  plausible technologies would affect the world.  Action/style was very compelling\n  to.  Favorite movie for many years, perhaps even still in some ways.\n\n  I think the sequels are pretty good, unlike many others.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["movie","consuming content"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drafting Magic: The Gathering","My first experience was 'that complex card game that older kids played' when\n  I was very young.  Faintly remember that I specifically thought the lands were\n  really cool, have specific memory of the plains.  \n\n  Started playing first from a friend's cube (a collection of cards you can draft\n  decks from and then play each other in a tournament style).  Was pretty\n  intense/overwhelming at first, but in a good way.  \n\n  Since have played a bunch on MTG: Arena, a very polished computer interface\n  to the game.\n  ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","turn-based","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wavelength or [Longwave](https://longwave.web.app/)","An icebreaker-type game that revolves around guessing people's opinions.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Codenames](https://codenames.game/)","One variant worth trying is trying to play with pictures instead of words on\n  the main board. A stand-alone game (Codenames Pictures) exists for this, but \n  it's also fun to try using custom pictures. For instance, the dream cards\n  from Mysterium led to a pretty fun game. Note that\n  [this site](https://codenames-pictures.dport.me/) looks like it allows you to\n  do this in a virtual setting.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chess","I've found lichess.org is a great place to play.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","turn-based","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Yo-Yoing","Playing with a yo-yo, and learning new tricks for it.",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skill clicking into place","The feeling when something that you thought was impossible, or otherwise\n    had no idea how to even approach doing, you can suddenly do effortlessly."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Beat Saber","Playing the VR rhythm game beat saber.",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skill clicking into place"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Being in the Zone","Being in a state of mind where all your attention must be focused on a\n    single thing to avoid failure, leading to an emptiness of other thoughts."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Making Small Web Apps in ClojureScript with Reagent","See title :)",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["programming"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pride of Construction","Feeling proud or even in awe of something you made that is now a (semi)\n    permenant thing in the world. ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chaos to Solution","The feeling when you have no idea how to fix something but suddenly a\n    solution appears out of nowhere. You may or may not understand how the\n    solution works or where it came from."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Apex Legends","A fast-paced first person shooter video game. Has extremely good art\n  direction, smooth gameplay, and balanced mechanics.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","multiplayer","competitive","real-time"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Constructive regret","The feeling when you step out of a test and think 'I knew that answer!!'\n    in a way that makes you want to walk right back into the testing hall and\n    fix your mistake."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Wordle](https://www.nytimes.com/games/wordle/index.html)","A fun word game.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Quordle](https://www.quordle.com/#/)","A more complex form of wordle, with a higher frequency of [BS words](https://www.reddit.com/r/Quordle/comments/t27irp/unfair_word_today/).",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[DAT Creativity](https://www.datcreativity.com/)","A test about tring to come up with the most different words possible.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Semantle](https://semantle.novalis.org/)","Similar to DAT Creativity, but a daily game like Wordle.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Puzzgrid](https://puzzgrid.com/best.php)","A game about matching ambiguous word meanings.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social","puzzle"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[The Witness](https://store.steampowered.com/app/210970/The_Witness/)","3-D puzzle game in a beautiful world",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","puzzle"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Opus Magnum](https://store.steampowered.com/app/558990/Opus_Magnum/)","Game about programming machines to build molecules.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","puzzle","programming"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Fire Emblem 7 & 8](https://en.wikipedia.org/wiki/Fire_Emblem_(video_game%29)","I first played this game on the Game Boy Advance when I was in middle school.\nFor some reason the art style and especially animation really spoke to me, and\nI found the gameplay loop very compelling.  Fair warning though that this game\nmay be on this list mostly because of nostalgia.\n\nOne aspect of this game that I really enjoy is the process of building your\nparty over time and making sure you train the right characters.  It's very\nsatisfying to help a weaker character finish enemies to get experience with the\ngoal of making them a core part of your team composition later on.  This is\noften fairly difficult - since the characters are weaker after all - which only\nadds to the satisfaction when you pull it off.\n\nAnother cool mechanic in FE is building supports between characters.  When two\ncharacters fight side by side they will over time build a relationship, which\nleads to little dialogue bites.  It's satisfying to discover these as you play\nthrough the game.\n\nBoth training weaker units and building supports are examples of\n'meta-challenges' in FE; they aren't required to finish the games, but give you\nself-directed and sometimes difficult optional objectives during the battles.\nBecause these challenges are self directed they make me feel like I am\nexpressing myself more as a player, which makes the game feel more interesting\nthan if I was just solving the same battle puzzles as everyone else.",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","story","\u2B50top10"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[XCOM 2 + War of the Chosen](https://en.wikipedia.org/wiki/XCOM_2)","Very similar appeal to Fire Emblem. Less story focused and more focused on \n  character customization.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","\u2B50top10"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Battle Brothers](http://battlebrothersgame.com/)","Good tactical RPG set in a low fantasy world.\n\n  Lots of character customization via different weapon types, and stat/perk\n  assignment on level up. Not to mention the starting stats given to each\n  character. Unfortunately, the randomness in this game will lead to characters\n  dying, so if you want to preserve specific characters get ready to save and\n  load a lot :).\n  \n  This game is pretty hard and doesn't necessarily give you direct feedback as\n  to why you are failing. The combat uses randomness pretty heavily to\n  determine hit/miss/crit (head hit) chance, which means that the consequences\n  of your actions are 'fuzzed' - good decisions will sometimes be punished, and\n  bad ones you will sometimes get away with. This means that it's tricky to\n  personally track if your strategy is working without a decent time investment\n  for each strategy you are trying.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reactive Randomness Stress","Committing a decision and then bracing yourself for bad things to happen\n    based on some probability which you cannot stop (since you have already\n    committed)."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Fell Seal - Arbiter's Mark](https://www.fellseal.com/)","Really well designed game with a good story, deep character customization,\n  and difficult encounters. This game does a great job of letting you customize\n  your character abilities with a lot of depth, but still with enough\n  constraints to not make every character feel the same. Then, it makes the\n  encounters in the main story difficult, but allows you to level up your\n  characters in 'patrol' side-encounters in case the way you built your\n  characters was not optimal for the main story. This is an awesome way to\n  reward players who do a good job with their builds (they have to grind less)\n  without forcing players into said optimal builds.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","\u2B50top10"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Overwatch](https://en.wikipedia.org/wiki/Overwatch_(video_game%29)","",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Darkest Dungeon](https://en.wikipedia.org/wiki/Darkest_Dungeon)","Amazing atmosphere and fun character building.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","\u2B50top10"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bananagrams","One fun variant is to open a book in text format with some program that can \n  search text and make it so that you can only use words that exist in that\n  book.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Islanders](https://en.wikipedia.org/wiki/Islanders_(video_game%29)","Cool turn based city builder made with a beautiful art style.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Bad North](https://www.badnorth.com/)","",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rainbow 6: Siege","Very intense and engaging game that requires a high level of focus.  Every\nmovement made in this game produces audible sound, meaning that movement gives\naway your position and makes you vulnerable.  However, like in most shooters,\nif you proactively move to shoot at a particular point, you will still have an\nadvantage against someone reacting to your movement.  This leads to a dynamic\nwhere both you and your opponent are trying to determine the location of the\nother without giving away their own location - once one person knows with\ncertainty they can simply move to attack and will have a strong advantage.\n\nThis dynamic is framed by the asymmetric nature of all game modes, which have\nattacking and defending sides.  Attackers must move to engage the defenders,\nmeaning that they start out disadvantaged (they are moving and making noise\nwhile defenders are not).  To counter this, attackers all have remote control\ndrones that make noise when they move around.  These are easily destroyed, but\ncan be used to determine the locations of defenders, giving attackers\nadvantage.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CoD: MW2","This game was trash but at least it let me [make a YouTube video with 160k views](https://www.youtube.com/watch?v=fx1vtMZCFvI&ab_channel=s1lentProtector).",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Iron Danger](https://store.steampowered.com/app/899310/Iron_Danger/)","Really cool strategy game with a cool story. Would love it if they made a\n  sequel and/or expanded it into a bigger RPG with more customization.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","story","solitary"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Slipways](https://slipways.net/)","A video game about colonizing planets and connecting them with trade\n  routes.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Age of Darkness: Final Stand](https://www.ageofdarkness.com/)","A real-time-with-pause strategy game with excellent art. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fitting puzzle pieces together","The feeling of finding the right place for a part of something you are\n    building."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Three Worlds\n      Collide](https://www.lesswrong.com/posts/HawFh7RvDM4RyoJ2d/three-worlds-collide-0-8)","Science fiction with a philosophical twist.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["story","philosophy"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Thought Provoking"], null)], null)], null)], true);
website_helpers.filterable_items.calc_similarity = (function website_helpers$filterable_items$calc_similarity(info1,info2){
return cljs.core.count(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(info1),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(info2)));
});
website_helpers.filterable_items.Similarities = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.filterable_items.Name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.filterable_items.Name,new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
website_helpers.filterable_items.get_all_similarities = (function website_helpers$filterable_items$get_all_similarities(data_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$filterable_items$get_all_similarities_$_iter__51622(s__51623){
return (new cljs.core.LazySeq(null,(function (){
var s__51623__$1 = s__51623;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51623__$1);
if(temp__5804__auto__){
var s__51623__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51623__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51623__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51625 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51624 = (0);
while(true){
if((i__51624 < size__5522__auto__)){
var vec__51626 = cljs.core._nth(c__5521__auto__,i__51624);
var name1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51626,(0),null);
var info1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51626,(1),null);
cljs.core.chunk_append(b__51625,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (i__51624,vec__51626,name1,info1,c__5521__auto__,size__5522__auto__,b__51625,s__51623__$2,temp__5804__auto__){
return (function website_helpers$filterable_items$get_all_similarities_$_iter__51622_$_iter__51629(s__51630){
return (new cljs.core.LazySeq(null,((function (i__51624,vec__51626,name1,info1,c__5521__auto__,size__5522__auto__,b__51625,s__51623__$2,temp__5804__auto__){
return (function (){
var s__51630__$1 = s__51630;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51630__$1);
if(temp__5804__auto____$1){
var s__51630__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51630__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__51630__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__51632 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__51631 = (0);
while(true){
if((i__51631 < size__5522__auto____$1)){
var vec__51633 = cljs.core._nth(c__5521__auto____$1,i__51631);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51633,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51633,(1),null);
cljs.core.chunk_append(b__51632,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.filterable_items.calc_similarity(info1,info2)], null));

var G__51837 = (i__51631 + (1));
i__51631 = G__51837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51632),website_helpers$filterable_items$get_all_similarities_$_iter__51622_$_iter__51629(cljs.core.chunk_rest(s__51630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51632),null);
}
} else {
var vec__51636 = cljs.core.first(s__51630__$2);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51636,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51636,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.filterable_items.calc_similarity(info1,info2)], null),website_helpers$filterable_items$get_all_similarities_$_iter__51622_$_iter__51629(cljs.core.rest(s__51630__$2)));
}
} else {
return null;
}
break;
}
});})(i__51624,vec__51626,name1,info1,c__5521__auto__,size__5522__auto__,b__51625,s__51623__$2,temp__5804__auto__))
,null,null));
});})(i__51624,vec__51626,name1,info1,c__5521__auto__,size__5522__auto__,b__51625,s__51623__$2,temp__5804__auto__))
;
return iter__5523__auto__(data_map);
})())], null));

var G__51842 = (i__51624 + (1));
i__51624 = G__51842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51625),website_helpers$filterable_items$get_all_similarities_$_iter__51622(cljs.core.chunk_rest(s__51623__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51625),null);
}
} else {
var vec__51639 = cljs.core.first(s__51623__$2);
var name1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51639,(0),null);
var info1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51639,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__51639,name1,info1,s__51623__$2,temp__5804__auto__){
return (function website_helpers$filterable_items$get_all_similarities_$_iter__51622_$_iter__51642(s__51643){
return (new cljs.core.LazySeq(null,(function (){
var s__51643__$1 = s__51643;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51643__$1);
if(temp__5804__auto____$1){
var s__51643__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51643__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51643__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51645 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51644 = (0);
while(true){
if((i__51644 < size__5522__auto__)){
var vec__51646 = cljs.core._nth(c__5521__auto__,i__51644);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51646,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51646,(1),null);
cljs.core.chunk_append(b__51645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.filterable_items.calc_similarity(info1,info2)], null));

var G__51847 = (i__51644 + (1));
i__51644 = G__51847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51645),website_helpers$filterable_items$get_all_similarities_$_iter__51622_$_iter__51642(cljs.core.chunk_rest(s__51643__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51645),null);
}
} else {
var vec__51655 = cljs.core.first(s__51643__$2);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51655,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51655,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.filterable_items.calc_similarity(info1,info2)], null),website_helpers$filterable_items$get_all_similarities_$_iter__51622_$_iter__51642(cljs.core.rest(s__51643__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__51639,name1,info1,s__51623__$2,temp__5804__auto__))
;
return iter__5523__auto__(data_map);
})())], null),website_helpers$filterable_items$get_all_similarities_$_iter__51622(cljs.core.rest(s__51623__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(data_map);
})());
});
website_helpers.filterable_items.get_closest_name = (function website_helpers$filterable_items$get_closest_name(name,similarities){
var distances = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(similarities,name),name);
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__51658_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(distances,p1__51658_SHARP_);
}),cljs.core.keys(distances))));
});
/**
 * Remove the given name from the similarities map.
 */
website_helpers.filterable_items.prune_similarities = (function website_helpers$filterable_items$prune_similarities(name_to_prune,similarities){
return clojure.walk.postwalk((function (p1__51659_SHARP_){
if(cljs.core.map_QMARK_(p1__51659_SHARP_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51659_SHARP_,name_to_prune);
} else {
return p1__51659_SHARP_;
}
}),similarities);
});
website_helpers.filterable_items._get_rest = (function website_helpers$filterable_items$_get_rest(last_name,similarities){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(similarities))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_name], null);
} else {
var cur_name = website_helpers.filterable_items.get_closest_name(last_name,similarities);
var pruned_similarities = website_helpers.filterable_items.prune_similarities(last_name,similarities);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_name], null),(website_helpers.filterable_items._get_rest.cljs$core$IFn$_invoke$arity$2 ? website_helpers.filterable_items._get_rest.cljs$core$IFn$_invoke$arity$2(cur_name,pruned_similarities) : website_helpers.filterable_items._get_rest.call(null,cur_name,pruned_similarities)));

}
});
/**
 * Sort the input data map by tag similarity.
 *   
 *   This is done by computing a similarity score between every pair of items,
 *   then solving the travelling salesman problem given these pairs.
 */
website_helpers.filterable_items.sort_by_tags = (function website_helpers$filterable_items$sort_by_tags(data_map){
var similarities = website_helpers.filterable_items.get_all_similarities(data_map);
var start_name = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(data_map)));
var sorted_names = website_helpers.filterable_items._get_rest(start_name,similarities);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),(function (){var iter__5523__auto__ = (function website_helpers$filterable_items$sort_by_tags_$_iter__51662(s__51663){
return (new cljs.core.LazySeq(null,(function (){
var s__51663__$1 = s__51663;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51663__$1);
if(temp__5804__auto__){
var s__51663__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51663__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51663__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51665 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51664 = (0);
while(true){
if((i__51664 < size__5522__auto__)){
var name = cljs.core._nth(c__5521__auto__,i__51664);
cljs.core.chunk_append(b__51665,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_map,name)], null));

var G__51854 = (i__51664 + (1));
i__51664 = G__51854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51665),website_helpers$filterable_items$sort_by_tags_$_iter__51662(cljs.core.chunk_rest(s__51663__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51665),null);
}
} else {
var name = cljs.core.first(s__51663__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_map,name)], null),website_helpers$filterable_items$sort_by_tags_$_iter__51662(cljs.core.rest(s__51663__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(sorted_names);
})());
});
/**
 * Cleans newlines and other stuff out of strings.
 */
website_helpers.filterable_items.clean = (function website_helpers$filterable_items$clean(string){
if((string == null)){
return "";
} else {
return clojure.string.replace(string,/\n +/," ");
}
});
website_helpers.filterable_items.make_experience_map = (function website_helpers$filterable_items$make_experience_map(raw_experiences){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$filterable_items$make_experience_map_$_iter__51680(s__51681){
return (new cljs.core.LazySeq(null,(function (){
var s__51681__$1 = s__51681;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51681__$1);
if(temp__5804__auto__){
var s__51681__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51681__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51681__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51683 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51682 = (0);
while(true){
if((i__51682 < size__5522__auto__)){
var vec__51686 = cljs.core._nth(c__5521__auto__,i__51682);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51686,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51686,(1),null);
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51686,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51686,(3),null);
cljs.core.chunk_append(b__51683,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.clean(experience_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.clean(details),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.set(tags),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var iter__5523__auto__ = ((function (i__51682,vec__51686,experience_name,details,tags,mental_states,c__5521__auto__,size__5522__auto__,b__51683,s__51681__$2,temp__5804__auto__){
return (function website_helpers$filterable_items$make_experience_map_$_iter__51680_$_iter__51689(s__51690){
return (new cljs.core.LazySeq(null,((function (i__51682,vec__51686,experience_name,details,tags,mental_states,c__5521__auto__,size__5522__auto__,b__51683,s__51681__$2,temp__5804__auto__){
return (function (){
var s__51690__$1 = s__51690;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51690__$1);
if(temp__5804__auto____$1){
var s__51690__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51690__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__51690__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__51692 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__51691 = (0);
while(true){
if((i__51691 < size__5522__auto____$1)){
var vec__51696 = cljs.core._nth(c__5521__auto____$1,i__51691);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51696,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51696,(1),null);
cljs.core.chunk_append(b__51692,website_helpers.filterable_items.clean(mental_state_name));

var G__51861 = (i__51691 + (1));
i__51691 = G__51861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51692),website_helpers$filterable_items$make_experience_map_$_iter__51680_$_iter__51689(cljs.core.chunk_rest(s__51690__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51692),null);
}
} else {
var vec__51699 = cljs.core.first(s__51690__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51699,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51699,(1),null);
return cljs.core.cons(website_helpers.filterable_items.clean(mental_state_name),website_helpers$filterable_items$make_experience_map_$_iter__51680_$_iter__51689(cljs.core.rest(s__51690__$2)));
}
} else {
return null;
}
break;
}
});})(i__51682,vec__51686,experience_name,details,tags,mental_states,c__5521__auto__,size__5522__auto__,b__51683,s__51681__$2,temp__5804__auto__))
,null,null));
});})(i__51682,vec__51686,experience_name,details,tags,mental_states,c__5521__auto__,size__5522__auto__,b__51683,s__51681__$2,temp__5804__auto__))
;
return iter__5523__auto__(mental_states);
})())], null)], null));

var G__51862 = (i__51682 + (1));
i__51682 = G__51862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51683),website_helpers$filterable_items$make_experience_map_$_iter__51680(cljs.core.chunk_rest(s__51681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51683),null);
}
} else {
var vec__51702 = cljs.core.first(s__51681__$2);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51702,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51702,(1),null);
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51702,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51702,(3),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.clean(experience_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.clean(details),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.set(tags),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__51702,experience_name,details,tags,mental_states,s__51681__$2,temp__5804__auto__){
return (function website_helpers$filterable_items$make_experience_map_$_iter__51680_$_iter__51705(s__51706){
return (new cljs.core.LazySeq(null,(function (){
var s__51706__$1 = s__51706;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51706__$1);
if(temp__5804__auto____$1){
var s__51706__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51706__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51706__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51708 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51707 = (0);
while(true){
if((i__51707 < size__5522__auto__)){
var vec__51710 = cljs.core._nth(c__5521__auto__,i__51707);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51710,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51710,(1),null);
cljs.core.chunk_append(b__51708,website_helpers.filterable_items.clean(mental_state_name));

var G__51865 = (i__51707 + (1));
i__51707 = G__51865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51708),website_helpers$filterable_items$make_experience_map_$_iter__51680_$_iter__51705(cljs.core.chunk_rest(s__51706__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51708),null);
}
} else {
var vec__51717 = cljs.core.first(s__51706__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51717,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51717,(1),null);
return cljs.core.cons(website_helpers.filterable_items.clean(mental_state_name),website_helpers$filterable_items$make_experience_map_$_iter__51680_$_iter__51705(cljs.core.rest(s__51706__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__51702,experience_name,details,tags,mental_states,s__51681__$2,temp__5804__auto__))
;
return iter__5523__auto__(mental_states);
})())], null)], null),website_helpers$filterable_items$make_experience_map_$_iter__51680(cljs.core.rest(s__51681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(raw_experiences);
})());
});
/**
 * Combines two sets, filtering out any nil or empty string values from the
 *   second set.
 */
website_helpers.filterable_items.accrete_set = (function website_helpers$filterable_items$accrete_set(existing,new$){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(existing,cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51720_SHARP_){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,"",null], null), null),p1__51720_SHARP_)));
}),new$)));
});
/**
 * Adds a single [Name Info] pair to an DataMap, merging it with an existing
 *   entry if need be.
 */
website_helpers.filterable_items._accrete_mental_states = (function website_helpers$filterable_items$_accrete_mental_states(data_map,p__51728){
var vec__51729 = p__51728;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51729,(0),null);
var map__51732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51729,(1),null);
var map__51732__$1 = cljs.core.__destructure_map(map__51732);
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51732__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51732__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51732__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var map__51733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_map,name);
var map__51733__$1 = cljs.core.__destructure_map(map__51733);
var existing_details = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51733__$1,new cljs.core.Keyword(null,"details","details",1956795411),"");
var existing_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51733__$1,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentHashSet.EMPTY);
var existing_children = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51733__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_map,name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(existing_details),cljs.core.str.cljs$core$IFn$_invoke$arity$1(details)].join(''),new cljs.core.Keyword(null,"tags","tags",1771418977),website_helpers.filterable_items.accrete_set(existing_tags,tags),new cljs.core.Keyword(null,"children","children",-940561982),website_helpers.filterable_items.accrete_set(existing_children,children)], null));
});
website_helpers.filterable_items.make_mental_state_map = (function website_helpers$filterable_items$make_mental_state_map(raw_experiences){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(website_helpers.filterable_items._accrete_mental_states,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$filterable_items$make_mental_state_map_$_iter__51741(s__51742){
return (new cljs.core.LazySeq(null,(function (){
var s__51742__$1 = s__51742;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51742__$1);
if(temp__5804__auto__){
var s__51742__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51742__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51742__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51744 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51743 = (0);
while(true){
if((i__51743 < size__5522__auto__)){
var vec__51745 = cljs.core._nth(c__5521__auto__,i__51743);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51745,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51745,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51745,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51745,(3),null);
cljs.core.chunk_append(b__51744,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (i__51743,vec__51745,experience_name,_,___$1,mental_states,c__5521__auto__,size__5522__auto__,b__51744,s__51742__$2,temp__5804__auto__){
return (function website_helpers$filterable_items$make_mental_state_map_$_iter__51741_$_iter__51748(s__51749){
return (new cljs.core.LazySeq(null,((function (i__51743,vec__51745,experience_name,_,___$1,mental_states,c__5521__auto__,size__5522__auto__,b__51744,s__51742__$2,temp__5804__auto__){
return (function (){
var s__51749__$1 = s__51749;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51749__$1);
if(temp__5804__auto____$1){
var s__51749__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51749__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__51749__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__51751 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__51750 = (0);
while(true){
if((i__51750 < size__5522__auto____$1)){
var vec__51753 = cljs.core._nth(c__5521__auto____$1,i__51750);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51753,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51753,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51753,(2),null);
cljs.core.chunk_append(b__51751,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.clean(mental_state_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([website_helpers.filterable_items.clean(experience_name)])], null)], null));

var G__51873 = (i__51750 + (1));
i__51750 = G__51873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51751),website_helpers$filterable_items$make_mental_state_map_$_iter__51741_$_iter__51748(cljs.core.chunk_rest(s__51749__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51751),null);
}
} else {
var vec__51760 = cljs.core.first(s__51749__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51760,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51760,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51760,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.clean(mental_state_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([website_helpers.filterable_items.clean(experience_name)])], null)], null),website_helpers$filterable_items$make_mental_state_map_$_iter__51741_$_iter__51748(cljs.core.rest(s__51749__$2)));
}
} else {
return null;
}
break;
}
});})(i__51743,vec__51745,experience_name,_,___$1,mental_states,c__5521__auto__,size__5522__auto__,b__51744,s__51742__$2,temp__5804__auto__))
,null,null));
});})(i__51743,vec__51745,experience_name,_,___$1,mental_states,c__5521__auto__,size__5522__auto__,b__51744,s__51742__$2,temp__5804__auto__))
;
return iter__5523__auto__(mental_states);
})()));

var G__51874 = (i__51743 + (1));
i__51743 = G__51874;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51744),website_helpers$filterable_items$make_mental_state_map_$_iter__51741(cljs.core.chunk_rest(s__51742__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51744),null);
}
} else {
var vec__51766 = cljs.core.first(s__51742__$2);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51766,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51766,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51766,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51766,(3),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__51766,experience_name,_,___$1,mental_states,s__51742__$2,temp__5804__auto__){
return (function website_helpers$filterable_items$make_mental_state_map_$_iter__51741_$_iter__51769(s__51770){
return (new cljs.core.LazySeq(null,(function (){
var s__51770__$1 = s__51770;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__51770__$1);
if(temp__5804__auto____$1){
var s__51770__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51770__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51770__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51772 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51771 = (0);
while(true){
if((i__51771 < size__5522__auto__)){
var vec__51776 = cljs.core._nth(c__5521__auto__,i__51771);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51776,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51776,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51776,(2),null);
cljs.core.chunk_append(b__51772,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.clean(mental_state_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([website_helpers.filterable_items.clean(experience_name)])], null)], null));

var G__51877 = (i__51771 + (1));
i__51771 = G__51877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51772),website_helpers$filterable_items$make_mental_state_map_$_iter__51741_$_iter__51769(cljs.core.chunk_rest(s__51770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51772),null);
}
} else {
var vec__51779 = cljs.core.first(s__51770__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51779,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51779,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51779,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.clean(mental_state_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.filterable_items.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([website_helpers.filterable_items.clean(experience_name)])], null)], null),website_helpers$filterable_items$make_mental_state_map_$_iter__51741_$_iter__51769(cljs.core.rest(s__51770__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__51766,experience_name,_,___$1,mental_states,s__51742__$2,temp__5804__auto__))
;
return iter__5523__auto__(mental_states);
})()),website_helpers$filterable_items$make_mental_state_map_$_iter__51741(cljs.core.rest(s__51742__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(raw_experiences);
})()));
});
website_helpers.filterable_items.make_mental_state_map(website_helpers.filterable_items.example_experiences);
website_helpers.filterable_items.make_tag_hiccup = (function website_helpers$filterable_items$make_tag_hiccup(tags,selected_tags){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Tags: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51789_SHARP_){
if(cljs.core.truth_((selected_tags.cljs$core$IFn$_invoke$arity$1 ? selected_tags.cljs$core$IFn$_invoke$arity$1(p1__51789_SHARP_) : selected_tags.call(null,p1__51789_SHARP_)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__51789_SHARP_], null),p1__51789_SHARP_], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__51789_SHARP_], null),p1__51789_SHARP_], null);
}
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(tags)))], null);
});
/**
 * Removes links or other hiccup wrappers from a string.
 */
website_helpers.filterable_items.get_raw_string = (function website_helpers$filterable_items$get_raw_string(string){
if(typeof string === 'string'){
return string;
} else {
var G__51793 = cljs.core.last(string);
return (website_helpers.filterable_items.get_raw_string.cljs$core$IFn$_invoke$arity$1 ? website_helpers.filterable_items.get_raw_string.cljs$core$IFn$_invoke$arity$1(G__51793) : website_helpers.filterable_items.get_raw_string.call(null,G__51793));
}
});
website_helpers.filterable_items.anchor_string = (function website_helpers$filterable_items$anchor_string(item_name){
return clojure.string.replace(website_helpers.filterable_items.get_raw_string(item_name)," ","-");
});
website_helpers.filterable_items.anchor = (function website_helpers$filterable_items$anchor(item_name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"anchor",new cljs.core.Keyword(null,"href","href",-793805698),["#",website_helpers.filterable_items.anchor_string(item_name)].join('')], null),"#"], null);
});
/**
 * Converts a sequence of string to hiccup. 
 */
website_helpers.filterable_items.list_to_hiccup = (function website_helpers$filterable_items$list_to_hiccup(strings){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function website_helpers$filterable_items$list_to_hiccup_$_iter__51795(s__51796){
return (new cljs.core.LazySeq(null,(function (){
var s__51796__$1 = s__51796;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51796__$1);
if(temp__5804__auto__){
var s__51796__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51796__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51796__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51798 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51797 = (0);
while(true){
if((i__51797 < size__5522__auto__)){
var s = cljs.core._nth(c__5521__auto__,i__51797);
var hiccup = cljs.core.rest(website_helpers.utils.my_md__GT_hiccup(s));
cljs.core.chunk_append(b__51798,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(website_helpers.filterable_items.anchor(hiccup),website_helpers.filterable_items.get_raw_string(hiccup))], null));

var G__51888 = (i__51797 + (1));
i__51797 = G__51888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51798),website_helpers$filterable_items$list_to_hiccup_$_iter__51795(cljs.core.chunk_rest(s__51796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51798),null);
}
} else {
var s = cljs.core.first(s__51796__$2);
var hiccup = cljs.core.rest(website_helpers.utils.my_md__GT_hiccup(s));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(website_helpers.filterable_items.anchor(hiccup),website_helpers.filterable_items.get_raw_string(hiccup))], null),website_helpers$filterable_items$list_to_hiccup_$_iter__51795(cljs.core.rest(s__51796__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(strings);
})()], null);
});
goog.exportSymbol('website_helpers.filterable_items.list_to_hiccup', website_helpers.filterable_items.list_to_hiccup);
/**
 * Example:
 *   
 *   ```
 *   Recipe 1:
 * - Ingredient 1
 * - Ingredient 2
 * 
 *   Recipe 2:
 * - Ingredient 2
 * - Ingredient 3
 * ...
 *   ...
 *   ```
 * 
 *   Or
 * 
 *   ```
 *   Ingredient 1:
 * - Recipe 1
 * - Recipe 3
 * 
 *   Ingredient 2:
 * - Recipe 1
 * - Recipe 2
 * ...
 *   ...
 *   ```
 *   
 */
website_helpers.filterable_items.aggregated_items = (function website_helpers$filterable_items$aggregated_items(data_name,other_name,data_map){
var tag_selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.utils.get_url_param_selections(cljs.core.set(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.vals(data_map))))));
return (function (data_name__$1,other_name__$1,data_map__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),data_name__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_check_list,tag_selections,"Select Tags"], null)], null)], null),(function (){var iter__5523__auto__ = (function website_helpers$filterable_items$aggregated_items_$_iter__51803(s__51804){
return (new cljs.core.LazySeq(null,(function (){
var s__51804__$1 = s__51804;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__51804__$1);
if(temp__5804__auto__){
var s__51804__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51804__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__51804__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__51806 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__51805 = (0);
while(true){
if((i__51805 < size__5522__auto__)){
var vec__51807 = cljs.core._nth(c__5521__auto__,i__51805);
var item_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51807,(0),null);
var map__51810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51807,(1),null);
var map__51810__$1 = cljs.core.__destructure_map(map__51810);
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51810__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51810__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51810__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var selected_tags = website_helpers.utils.get_selected_vars(cljs.core.deref(tag_selections));
var hiccup_name = website_helpers.utils.my_md__GT_hiccup(item_name);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_tags),cljs.core.count(cljs.core.deref(tag_selections)))) || (clojure.set.subset_QMARK_(selected_tags,tags)))){
cljs.core.chunk_append(b__51806,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),website_helpers.filterable_items.anchor_string(hiccup_name)], null),hiccup_name,website_helpers.filterable_items.anchor(hiccup_name)], null),website_helpers.filterable_items.make_tag_hiccup(tags,selected_tags),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),website_helpers.utils.my_md__GT_hiccup(details)," ",other_name__$1,":"], null),website_helpers.filterable_items.list_to_hiccup(children)], null));

var G__51891 = (i__51805 + (1));
i__51805 = G__51891;
continue;
} else {
var G__51892 = (i__51805 + (1));
i__51805 = G__51892;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51806),website_helpers$filterable_items$aggregated_items_$_iter__51803(cljs.core.chunk_rest(s__51804__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51806),null);
}
} else {
var vec__51811 = cljs.core.first(s__51804__$2);
var item_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51811,(0),null);
var map__51814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51811,(1),null);
var map__51814__$1 = cljs.core.__destructure_map(map__51814);
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51814__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51814__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51814__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var selected_tags = website_helpers.utils.get_selected_vars(cljs.core.deref(tag_selections));
var hiccup_name = website_helpers.utils.my_md__GT_hiccup(item_name);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_tags),cljs.core.count(cljs.core.deref(tag_selections)))) || (clojure.set.subset_QMARK_(selected_tags,tags)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),website_helpers.filterable_items.anchor_string(hiccup_name)], null),hiccup_name,website_helpers.filterable_items.anchor(hiccup_name)], null),website_helpers.filterable_items.make_tag_hiccup(tags,selected_tags),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),website_helpers.utils.my_md__GT_hiccup(details)," ",other_name__$1,":"], null),website_helpers.filterable_items.list_to_hiccup(children)], null),website_helpers$filterable_items$aggregated_items_$_iter__51803(cljs.core.rest(s__51804__$2)));
} else {
var G__51893 = cljs.core.rest(s__51804__$2);
s__51804__$1 = G__51893;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(website_helpers.filterable_items.sort_by_tags(data_map__$1));
})());
});
});
goog.exportSymbol('website_helpers.filterable_items.aggregated_items', website_helpers.filterable_items.aggregated_items);
website_helpers.filterable_items.make_aggregated_items = (function website_helpers$filterable_items$make_aggregated_items(raw_experiences){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.aggregated_items,"Experiences","States of Mind",website_helpers.filterable_items.make_experience_map(raw_experiences)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.filterable_items.aggregated_items,"States of Mind","Experiences",website_helpers.filterable_items.make_mental_state_map(raw_experiences)], null)], null);
});
});
goog.exportSymbol('website_helpers.filterable_items.make_aggregated_items', website_helpers.filterable_items.make_aggregated_items);

//# sourceMappingURL=website_helpers.filterable_items.js.map
