import  Express  from "express";

const app = Express();

app.get("/api/movies", (req, res)=>{
    const movies =[
        {
            "index": 0,
            "Name of movie": "Iron Man",
            "Year of relase": "2008",
            "Watchtime": "126 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.9",
            "Description": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
        },
        {
            "index": 1,
            "Name of movie": "Iron Man",
            "Year of relase": "2008",
            "Watchtime": "126 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.9",
            "Description": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
        },
        {
            "index": 2,
            "Name of movie": "Iron Man",
            "Year of relase": "2008",
            "Watchtime": "126 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.9",
            "Description": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
        },
        {
            "index": 3,
            "Name of movie": "The Incredible Hulk",
            "Year of relase": "2008",
            "Watchtime": "112 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "6.6",
            "Description": "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper."
        },
        {
            "index": 4,
            "Name of movie": "Iron Man 2",
            "Year of relase": "2010",
            "Watchtime": "124 min",
            "Movie genre": "Action,Sci-Fi",
            "Movie Rating": "6.9",
            "Description": "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy."
        },
        {
            "index": 5,
            "Name of movie": "Thor",
            "Year of relase": "2011",
            "Watchtime": "115 min",
            "Movie genre": "Action,Fantasy",
            "Movie Rating": "7",
            "Description": "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."
        },
        {
            "index": 6,
            "Name of movie": "Captain America: The First Avenger",
            "Year of relase": "2011",
            "Watchtime": "124 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "6.9",
            "Description": "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a \"Super-Soldier serum\". But being Captain America comes at a price as he attempts to take down a warmonger and a terrorist organization."
        },
        {
            "index": 7,
            "Name of movie": "The Avengers",
            "Year of relase": "2012",
            "Watchtime": "143 min",
            "Movie genre": "Action,Sci-Fi",
            "Movie Rating": "8",
            "Description": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
        },
        {
            "index": 8,
            "Name of movie": "Iron Man Three",
            "Year of relase": "2013",
            "Watchtime": "130 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.1",
            "Description": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution."
        },
        {
            "index": 9,
            "Name of movie": "Thor: The Dark World",
            "Year of relase": "2013",
            "Watchtime": "112 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "6.8",
            "Description": "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster."
        },
        {
            "index": 10,
            "Name of movie": "Captain America: The Winter Soldier",
            "Year of relase": "2014",
            "Watchtime": "136 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.8",
            "Description": "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier."
        },
        {
            "index": 11,
            "Name of movie": "Guardians of the Galaxy",
            "Year of relase": "2014",
            "Watchtime": "121 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "8",
            "Description": "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe."
        },
        {
            "index": 12,
            "Name of movie": "Avengers: Age of Ultron",
            "Year of relase": "2015",
            "Watchtime": "141 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.3",
            "Description": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan."
        },
        {
            "index": 13,
            "Name of movie": "Ant-Man",
            "Year of relase": "2015",
            "Watchtime": "117 min",
            "Movie genre": "Action,Comedy,Sci-Fi",
            "Movie Rating": "7.3",
            "Description": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world."
        },
        {
            "index": 14,
            "Name of movie": "Captain America: Civil War",
            "Year of relase": "2016",
            "Watchtime": "147 min",
            "Movie genre": "Action,Sci-Fi",
            "Movie Rating": "7.8",
            "Description": "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man."
        },
        {
            "index": 15,
            "Name of movie": "Doctor Strange",
            "Year of relase": "2016",
            "Watchtime": "115 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "7.5",
            "Description": "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts."
        },
        {
            "index": 16,
            "Name of movie": "Guardians of the Galaxy Vol. 2",
            "Year of relase": "2017",
            "Watchtime": "136 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "7.6",
            "Description": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego."
        },
        {
            "index": 17,
            "Name of movie": "Spider-Man: Homecoming",
            "Year of relase": "2017",
            "Watchtime": "133 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.4",
            "Description": "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City."
        },
        {
            "index": 18,
            "Name of movie": "Thor: Ragnarok",
            "Year of relase": "2017",
            "Watchtime": "130 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "7.9",
            "Description": "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela."
        },
        {
            "index": 19,
            "Name of movie": "Black Panther",
            "Year of relase": "2018",
            "Watchtime": "134 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.3",
            "Description": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."
        },
        {
            "index": 20,
            "Name of movie": "Avengers: Infinity War",
            "Year of relase": "2018",
            "Watchtime": "149 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "8.4",
            "Description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
        },
        {
            "index": 21,
            "Name of movie": "Ant-Man and the Wasp",
            "Year of relase": "2018",
            "Watchtime": "118 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "7",
            "Description": "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past."
        },
        {
            "index": 22,
            "Name of movie": "Captain Marvel",
            "Year of relase": "2019",
            "Watchtime": "123 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "6.8",
            "Description": "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races."
        },
        {
            "index": 23,
            "Name of movie": "Avengers: Endgame",
            "Year of relase": "2019",
            "Watchtime": "181 min",
            "Movie genre": "Action,Adventure,Drama",
            "Movie Rating": "8.4",
            "Description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
        },
        {
            "index": 24,
            "Name of movie": "Spider-Man: Far from Home",
            "Year of relase": "2019",
            "Watchtime": "129 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "7.4",
            "Description": "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever."
        },
        {
            "index": 25,
            "Name of movie": "Black Widow",
            "Year of relase": "2021",
            "Watchtime": "134 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "6.7",
            "Description": "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises."
        },
        {
            "index": 26,
            "Name of movie": "Eternals",
            "Year of relase": "2021",
            "Watchtime": "156 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "6.3",
            "Description": "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations."
        },
        {
            "index": 27,
            "Name of movie": "Shang-Chi and the Legend of the Ten Rings",
            "Year of relase": "2021",
            "Watchtime": "132 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "7.4",
            "Description": "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization."
        },
        {
            "index": 28,
            "Name of movie": "Spider-Man: No Way Home",
            "Year of relase": "2021",
            "Watchtime": "148 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "8.2",
            "Description": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
        },
        {
            "index": 29,
            "Name of movie": "Doctor Strange in the Multiverse of Madness",
            "Year of relase": "2022",
            "Watchtime": "126 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "6.9",
            "Description": "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others."
        },
        {
            "index": 30,
            "Name of movie": "Thor: Love and Thunder",
            "Year of relase": "2022",
            "Watchtime": "118 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "6.2",
            "Description": "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct."
        },
        {
            "index": 31,
            "Name of movie": "Black Panther: Wakanda Forever",
            "Year of relase": "2022",
            "Watchtime": "161 min",
            "Movie genre": "Action,Adventure,Drama",
            "Movie Rating": "6.7",
            "Description": "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
        },
        {
            "index": 32,
            "Name of movie": "The Marvels",
            "Year of relase": "2023",
            "Watchtime": "105 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "5.8",
            "Description": "Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together to save the universe."
        },
        {
            "index": 33,
            "Name of movie": "Iron Man",
            "Year of relase": "2008",
            "Watchtime": "126 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.9",
            "Description": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
        },
        {
            "index": 34,
            "Name of movie": "The Incredible Hulk",
            "Year of relase": "2008",
            "Watchtime": "112 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "6.6",
            "Description": "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper."
        },
        {
            "index": 35,
            "Name of movie": "Iron Man 2",
            "Year of relase": "2010",
            "Watchtime": "124 min",
            "Movie genre": "Action,Sci-Fi",
            "Movie Rating": "6.9",
            "Description": "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy."
        },
        {
            "index": 36,
            "Name of movie": "Thor",
            "Year of relase": "2011",
            "Watchtime": "115 min",
            "Movie genre": "Action,Fantasy",
            "Movie Rating": "7",
            "Description": "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."
        },
        {
            "index": 37,
            "Name of movie": "Captain America: The First Avenger",
            "Year of relase": "2011",
            "Watchtime": "124 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "6.9",
            "Description": "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a \"Super-Soldier serum\". But being Captain America comes at a price as he attempts to take down a warmonger and a terrorist organization."
        },
        {
            "index": 38,
            "Name of movie": "The Avengers",
            "Year of relase": "2012",
            "Watchtime": "143 min",
            "Movie genre": "Action,Sci-Fi",
            "Movie Rating": "8",
            "Description": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
        },
        {
            "index": 39,
            "Name of movie": "Iron Man Three",
            "Year of relase": "2013",
            "Watchtime": "130 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.1",
            "Description": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution."
        },
        {
            "index": 40,
            "Name of movie": "Thor: The Dark World",
            "Year of relase": "2013",
            "Watchtime": "112 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "6.8",
            "Description": "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster."
        },
        {
            "index": 41,
            "Name of movie": "Captain America: The Winter Soldier",
            "Year of relase": "2014",
            "Watchtime": "136 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.8",
            "Description": "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier."
        },
        {
            "index": 42,
            "Name of movie": "Guardians of the Galaxy",
            "Year of relase": "2014",
            "Watchtime": "121 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "8",
            "Description": "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe."
        },
        {
            "index": 43,
            "Name of movie": "Avengers: Age of Ultron",
            "Year of relase": "2015",
            "Watchtime": "141 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.3",
            "Description": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan."
        },
        {
            "index": 44,
            "Name of movie": "Ant-Man",
            "Year of relase": "2015",
            "Watchtime": "117 min",
            "Movie genre": "Action,Comedy,Sci-Fi",
            "Movie Rating": "7.3",
            "Description": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world."
        },
        {
            "index": 45,
            "Name of movie": "Captain America: Civil War",
            "Year of relase": "2016",
            "Watchtime": "147 min",
            "Movie genre": "Action,Sci-Fi",
            "Movie Rating": "7.8",
            "Description": "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man."
        },
        {
            "index": 46,
            "Name of movie": "Doctor Strange",
            "Year of relase": "2016",
            "Watchtime": "115 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "7.5",
            "Description": "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts."
        },
        {
            "index": 47,
            "Name of movie": "Guardians of the Galaxy Vol. 2",
            "Year of relase": "2017",
            "Watchtime": "136 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "7.6",
            "Description": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego."
        },
        {
            "index": 48,
            "Name of movie": "Spider-Man: Homecoming",
            "Year of relase": "2017",
            "Watchtime": "133 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.4",
            "Description": "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City."
        },
        {
            "index": 49,
            "Name of movie": "Thor: Ragnarok",
            "Year of relase": "2017",
            "Watchtime": "130 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "7.9",
            "Description": "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela."
        },
        {
            "index": 50,
            "Name of movie": "Black Panther",
            "Year of relase": "2018",
            "Watchtime": "134 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.3",
            "Description": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."
        },
        {
            "index": 51,
            "Name of movie": "Avengers: Infinity War",
            "Year of relase": "2018",
            "Watchtime": "149 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "8.4",
            "Description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
        },
        {
            "index": 52,
            "Name of movie": "Ant-Man and the Wasp",
            "Year of relase": "2018",
            "Watchtime": "118 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "7",
            "Description": "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past."
        },
        {
            "index": 53,
            "Name of movie": "Captain Marvel",
            "Year of relase": "2019",
            "Watchtime": "123 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "6.8",
            "Description": "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races."
        },
        {
            "index": 54,
            "Name of movie": "Avengers: Endgame",
            "Year of relase": "2019",
            "Watchtime": "181 min",
            "Movie genre": "Action,Adventure,Drama",
            "Movie Rating": "8.4",
            "Description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
        },
        {
            "index": 55,
            "Name of movie": "Spider-Man: Far from Home",
            "Year of relase": "2019",
            "Watchtime": "129 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "7.4",
            "Description": "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever."
        },
        {
            "index": 56,
            "Name of movie": "Black Widow",
            "Year of relase": "2021",
            "Watchtime": "134 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "6.7",
            "Description": "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises."
        },
        {
            "index": 57,
            "Name of movie": "Eternals",
            "Year of relase": "2021",
            "Watchtime": "156 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "6.3",
            "Description": "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations."
        },
        {
            "index": 58,
            "Name of movie": "Shang-Chi and the Legend of the Ten Rings",
            "Year of relase": "2021",
            "Watchtime": "132 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "7.4",
            "Description": "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization."
        },
        {
            "index": 59,
            "Name of movie": "Spider-Man: No Way Home",
            "Year of relase": "2021",
            "Watchtime": "148 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "8.2",
            "Description": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
        },
        {
            "index": 60,
            "Name of movie": "Doctor Strange in the Multiverse of Madness",
            "Year of relase": "2022",
            "Watchtime": "126 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "6.9",
            "Description": "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others."
        },
        {
            "index": 61,
            "Name of movie": "Thor: Love and Thunder",
            "Year of relase": "2022",
            "Watchtime": "118 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "6.2",
            "Description": "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct."
        },
        {
            "index": 62,
            "Name of movie": "Black Panther: Wakanda Forever",
            "Year of relase": "2022",
            "Watchtime": "161 min",
            "Movie genre": "Action,Adventure,Drama",
            "Movie Rating": "6.7",
            "Description": "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
        },
        {
            "index": 63,
            "Name of movie": "The Marvels",
            "Year of relase": "2023",
            "Watchtime": "105 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "5.8",
            "Description": "Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together to save the universe."
        },
        {
            "index": 64,
            "Name of movie": "Iron Man",
            "Year of relase": "2008",
            "Watchtime": "126 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.9",
            "Description": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
        },
        {
            "index": 65,
            "Name of movie": "The Incredible Hulk",
            "Year of relase": "2008",
            "Watchtime": "112 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "6.6",
            "Description": "Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper."
        },
        {
            "index": 66,
            "Name of movie": "Iron Man 2",
            "Year of relase": "2010",
            "Watchtime": "124 min",
            "Movie genre": "Action,Sci-Fi",
            "Movie Rating": "6.9",
            "Description": "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy."
        },
        {
            "index": 67,
            "Name of movie": "Thor",
            "Year of relase": "2011",
            "Watchtime": "115 min",
            "Movie genre": "Action,Fantasy",
            "Movie Rating": "7",
            "Description": "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."
        },
        {
            "index": 68,
            "Name of movie": "Captain America: The First Avenger",
            "Year of relase": "2011",
            "Watchtime": "124 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "6.9",
            "Description": "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a \"Super-Soldier serum\". But being Captain America comes at a price as he attempts to take down a warmonger and a terrorist organization."
        },
        {
            "index": 69,
            "Name of movie": "The Avengers",
            "Year of relase": "2012",
            "Watchtime": "143 min",
            "Movie genre": "Action,Sci-Fi",
            "Movie Rating": "8",
            "Description": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
        },
        {
            "index": 70,
            "Name of movie": "Iron Man Three",
            "Year of relase": "2013",
            "Watchtime": "130 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.1",
            "Description": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution."
        },
        {
            "index": 71,
            "Name of movie": "Thor: The Dark World",
            "Year of relase": "2013",
            "Watchtime": "112 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "6.8",
            "Description": "When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster."
        },
        {
            "index": 72,
            "Name of movie": "Captain America: The Winter Soldier",
            "Year of relase": "2014",
            "Watchtime": "136 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.8",
            "Description": "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier."
        },
        {
            "index": 73,
            "Name of movie": "Guardians of the Galaxy",
            "Year of relase": "2014",
            "Watchtime": "121 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "8",
            "Description": "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe."
        },
        {
            "index": 74,
            "Name of movie": "Avengers: Age of Ultron",
            "Year of relase": "2015",
            "Watchtime": "141 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.3",
            "Description": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan."
        },
        {
            "index": 75,
            "Name of movie": "Ant-Man",
            "Year of relase": "2015",
            "Watchtime": "117 min",
            "Movie genre": "Action,Comedy,Sci-Fi",
            "Movie Rating": "7.3",
            "Description": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, pull off a plan that will save the world."
        },
        {
            "index": 76,
            "Name of movie": "Captain America: Civil War",
            "Year of relase": "2016",
            "Watchtime": "147 min",
            "Movie genre": "Action,Sci-Fi",
            "Movie Rating": "7.8",
            "Description": "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man."
        },
        {
            "index": 77,
            "Name of movie": "Doctor Strange",
            "Year of relase": "2016",
            "Watchtime": "115 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "7.5",
            "Description": "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts."
        },
        {
            "index": 78,
            "Name of movie": "Guardians of the Galaxy Vol. 2",
            "Year of relase": "2017",
            "Watchtime": "136 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "7.6",
            "Description": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego."
        },
        {
            "index": 79,
            "Name of movie": "Spider-Man: Homecoming",
            "Year of relase": "2017",
            "Watchtime": "133 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.4",
            "Description": "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City."
        },
        {
            "index": 80,
            "Name of movie": "Thor: Ragnarok",
            "Year of relase": "2017",
            "Watchtime": "130 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "7.9",
            "Description": "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela."
        },
        {
            "index": 81,
            "Name of movie": "Black Panther",
            "Year of relase": "2018",
            "Watchtime": "134 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "7.3",
            "Description": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past."
        },
        {
            "index": 82,
            "Name of movie": "Avengers: Infinity War",
            "Year of relase": "2018",
            "Watchtime": "149 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "8.4",
            "Description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
        },
        {
            "index": 83,
            "Name of movie": "Ant-Man and the Wasp",
            "Year of relase": "2018",
            "Watchtime": "118 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "7",
            "Description": "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past."
        },
        {
            "index": 84,
            "Name of movie": "Captain Marvel",
            "Year of relase": "2019",
            "Watchtime": "123 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "6.8",
            "Description": "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races."
        },
        {
            "index": 85,
            "Name of movie": "Avengers: Endgame",
            "Year of relase": "2019",
            "Watchtime": "181 min",
            "Movie genre": "Action,Adventure,Drama",
            "Movie Rating": "8.4",
            "Description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
        },
        {
            "index": 86,
            "Name of movie": "Spider-Man: Far from Home",
            "Year of relase": "2019",
            "Watchtime": "129 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "7.4",
            "Description": "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever."
        },
        {
            "index": 87,
            "Name of movie": "Black Widow",
            "Year of relase": "2021",
            "Watchtime": "134 min",
            "Movie genre": "Action,Adventure,Sci-Fi",
            "Movie Rating": "6.7",
            "Description": "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises."
        },
        {
            "index": 88,
            "Name of movie": "Eternals",
            "Year of relase": "2021",
            "Watchtime": "156 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "6.3",
            "Description": "The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations."
        },
        {
            "index": 89,
            "Name of movie": "Shang-Chi and the Legend of the Ten Rings",
            "Year of relase": "2021",
            "Watchtime": "132 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "7.4",
            "Description": "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization."
        },
        {
            "index": 90,
            "Name of movie": "Spider-Man: No Way Home",
            "Year of relase": "2021",
            "Watchtime": "148 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "8.2",
            "Description": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man."
        },
        {
            "index": 91,
            "Name of movie": "Doctor Strange in the Multiverse of Madness",
            "Year of relase": "2022",
            "Watchtime": "126 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "6.9",
            "Description": "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others."
        },
        {
            "index": 92,
            "Name of movie": "Thor: Love and Thunder",
            "Year of relase": "2022",
            "Watchtime": "118 min",
            "Movie genre": "Action,Adventure,Comedy",
            "Movie Rating": "6.2",
            "Description": "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct."
        },
        {
            "index": 93,
            "Name of movie": "Black Panther: Wakanda Forever",
            "Year of relase": "2022",
            "Watchtime": "161 min",
            "Movie genre": "Action,Adventure,Drama",
            "Movie Rating": "6.7",
            "Description": "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
        },
        {
            "index": 94,
            "Name of movie": "The Marvels",
            "Year of relase": "2023",
            "Watchtime": "105 min",
            "Movie genre": "Action,Adventure,Fantasy",
            "Movie Rating": "5.8",
            "Description": "Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together to save the universe."
        }
    ]
    res.json(movies);
})

app.put("/api/movies/:id", (req, res)=>{
    const id = req.params.id;
    const movie = movie.find(movie => movie.id === id);
    movie.genre = req.body.genre;
    movie.description = req.body.description;
    movie.duration = req.body.duration;
    movie.actors = req.body.actors;
    movie.director = req.body.director;
    movie.movie_title = req.body.movie_title;
    movie.rating = req.body.rating;
    res.json(movie);
})

app.post("/api/movies", (req, res)=>{
    const movie = {
        id: movie.length + 1,
        genre: req.body.genre,
        description: req.body.description,
        duration: req.body.duration,
        actors: req.body.actors,
        director: req.body.director,
        movie_title: req.body.movie_title,
        rating: req.body.rating,
    }
    movie.push(movie);
    res.json(movie);
})

const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`Listening on port ${port}`));
