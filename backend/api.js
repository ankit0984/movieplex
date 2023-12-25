import  Express  from "express";

const app = Express();

app.get("/api/movies", (req, res)=>{
    const movies =[
        {id: 1,
        movie_title: "The Avengers",
        year: 2012,
        rating: 8.1,
        genre: "Action",
        duration: 143,
        actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
        director: "Joss Whedon",
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    },
    {id: 2,
        movie_title: "Interstellar",
        year: 2014,
        rating: 8.6,
        genre: "Adventure",
        duration: 169,
        actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        director: "Christopher Nolan",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
    {id: 3,
        movie_title: "The Dark Knight",
        year: 2008,
        rating: 9,
        genre: "Action",
        duration: 152,
        actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        director: "Christopher Nolan",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {id: 4,
        movie_title: "Dangal",
        year: 2016,
        rating: 8.4,
        genre: "Action",
        duration: 161,
        actors: "Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh, Sanya Malhotra",
        director: "Nitesh Tiwari",
        description: "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
    },
    {id: 5,
        movie_title: "The Prestige",
        year: 2006,
        rating: 8.5,
        genre: "Drama",
        duration: 130,
        actors: "Hugh Jackman, Christian Bale, Michael Caine, Piper Perabo",
        director: "Christopher Nolan",
        description: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    },
    {id: 6,
        movie_title: "3 Idiots",
        year: 2009,
        rating: 8.4,
        genre: "Comedy",
        duration: 170,
        actors: "Aamir Khan, Madhavan, Mona Singh, Sharman Joshi",
        director: "Rajkumar Hirani",
        description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them idiots.",
    },
    {id: 7,
        movie_title: "The Wolf of Wall Street",
        year: 2013,
        rating: 8.2,
        genre: "Biography",
        duration: 180,
        actors: "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
        director: "Martin Scorsese",
        description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
    },
    {id: 8,
        movie_title: "Whiplash",
        year: 2014,
        rating: 8.5,
        genre: "Drama",
        duration: 106,
        actors: "Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist",
        director: "Damien Chazelle",
        description: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    },
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
