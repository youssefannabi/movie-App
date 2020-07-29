import React,  {useState} from 'react'
import MovieList from './MovieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
const MovieCard = () => {

    const [list,setList] = useState([
        {Title : "Weathering With You",
        Image:"https://pyxis.nymag.com/v1/imgs/a35/319/573770d8b3de5c8392b9246a7d4eb9c141-15-weathering-with-you-2.rhorizontal.w700.jpg",
        Descr : "Anime’s king of feels Makoto Shin-swap romance Your Name, a massive global hit that’s (of course) set for an American remake. So it’s not a surprise that he’s stayed in similar teen-fantasy-romance territory for his follow-up",
        Rating:"3"
    },
    {Title : "Color of space",
    Image:"https://pyxis.nymag.com/v1/imgs/053/73c/dda7e5796b67c5e312fc5b85aa0b367dd9-color-out-of-space.rhorizontal.w700.jpg",
    Descr : "Anime’s king of feels Makoto Shin-swap romance Your Name, a massive global hit that’s (of course) set for an American remake. So it’s not a surprise that he’s stayed in similar teen-fantasy-romance territory for his follow-up",
    Rating:"4"
},
{Title : "The Assistant",
Image:"https://pyxis.nymag.com/v1/imgs/7c3/4af/68e90dd61b563b6611a8a06416d3f20757-05-the-assistant.rhorizontal.w700.jpg",
Descr : "Anime’s king of feels Makoto Shin-swap romance Your Name, a massive global hit that’s (of course) set for an American remake. So it’s not a surprise that he’s stayed in similar teen-fantasy-romance territory for his follow-up",
Rating:"2"
},
{Title : "The Wishlers",
Image:"https://pyxis.nymag.com/v1/imgs/611/ec2/21d4ae85681a205283e4f1f3ba53b09d7c-03-the-whistlers.rhorizontal.w700.jpg",
Descr : "Anime’s king of feels Makoto Shin-swap romance Your Name, a massive global hit that’s (of course) set for an American remake. So it’s not a surprise that he’s stayed in similar teen-fantasy-romance territory for his follow-up",
Rating:"3"
}
    ])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [searchlist, setSearchlist] = useState(list)
    const [empty,setEmpty] = useState(true)

const [searchByRate, setSearchByRate] = useState(list)
const [starClicked, setstarClicked] = useState(false)



const AddMovie = () => {
    let nouv = {}
    Object.assign(nouv , {
        Title : document.getElementById("newTitle").value ,
        Image: document.getElementById("newImage").value,
        Descr: document.getElementById("newDescr").value,
        Rating : document.getElementById("newRating").value
    })

    setList([...list ,nouv ])
}


const search = (e) => {
let tab=[]

if(!starClicked)
tab = searchByRate.filter(el=> el.Title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) )
else 
tab = list.filter(el=> el.Title.includes(e.target.value) )

setSearchlist(tab)

if (e.target.value.length > 0) setEmpty(false)
else setEmpty(true)

}

const searchRate = (e)=> {
    let tab2 =[]
    let x = e.target.value
    console.log(x)
    if(empty)
    tab2=searchlist.filter(e=>e.Rating === x)
    else 
    tab2=list.filter(e=>e.Rating === x)

    setSearchByRate(tab2)
    setstarClicked(true)
}




    return ( <div>

        <input placeholder="search movie here" style={{padding:10 , margin:50, width:270}} onChange={search} />

        <table>
            <tr> search by rate ..
                <td>
                    <input value="1"
                type="image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"
                height="20"
                onClick={searchRate}></input>
                </td>
                <td>
                    <input value="2"
                type="image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"
                height="20"
                onClick={searchRate}></input>
                </td>
                <td>
                    <input value="3"
                type="image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"
                height="20"
                onClick={searchRate}></input>
                </td>
                <td>
                    <input value="4"
                type="image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"
                height="20"
                onClick={searchRate}></input>
                </td>
                <td>
                    <input value="5"
                type="image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1200px-Empty_Star.svg.png"
                height="20"
                onClick={searchRate}></input>
                </td>
            </tr>
        </table>

<Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

<table>
    <tr>
        <td>
          <input placeholder="movie Title" id="newTitle"></input>
        </td>
    </tr>

    <tr>
        <td>
          <input placeholder="movie Image" id="newImage"></input>
        </td>
    </tr>

    <tr>
        <td>
          <input placeholder="movie Description" id="newDescr"></input>
        </td>
    </tr>


    <tr>
        <td>
          <select placeholder="movie Description" id="newRating">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </select>
        </td>
    </tr>

</table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddMovie}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>



<MovieList list={
    (empty && !starClicked) ? list : (!empty && !starClicked) ? searchlist : (!empty && starClicked) ?searchlist : searchByRate
}/>
    </div> );
}
 
export default MovieCard ;