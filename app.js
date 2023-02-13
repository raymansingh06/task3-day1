const imgTag = document.getElementById("poster");
const titleTag = document.getElementById("title");
const yearTag = document.getElementById("year");
const imdbTag = document.getElementById("imdb");
const directorTag = document.getElementById("director");
const writerTag = document.getElementById("writer");
const actorsTag = document.getElementById("actors");
const inpTag = document.getElementById("search");
const errorTag=document.getElementById("error");
const detailsTag=document.getElementById("details")

async function movie(){
    let movieName = inpTag.value;
    // console.log(movieName);
    // console.log("clicked");
    if(movieName.length<=0){
        errorTag.innerText="Please enter movie title"
    }
    else{
        await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=79bc243a`)
         .then (res=>res.json())
         .then(data=>{
                imgTag.setAttribute("src", `${data.Poster}`)
                titleTag.innerText = `${data.Title}`
                yearTag.innerText = `Year: ${data.Year}`
                imdbTag.innerText = `IMDB-Rating: ${data.imdbRating}`
                directorTag.innerText=`Director: ${data.Director}`
                writerTag.innerText=`Writer: ${data.Writer}`
                actorsTag.innerText = `Actors: ${data.Actors}`
            }
         })
         .catch(e=>console.log(e))
    }
}
