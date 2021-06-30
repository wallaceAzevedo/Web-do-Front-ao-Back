import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from '../components/head';
import image1 from'../img/kimetsu.jpg';
import image2 from'../img/zetsu2.png';
import image3 from'../img/zetsu.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel} from 'react-responsive-carousel';

function home(){
    return(
        <React.Fragment>
        <Head></Head>
        <Carousel>
            <div>
                <img src={image1} />
                <p className="legend">imagem 1</p>
            </div>
            <div>
                <img src={image2} />
                <p className="legend">imagem 2</p>
            </div>
                <div>
                <img src={image3} />
                <p className="legend">imagem 3</p>
            </div>
        </Carousel>
        <div class ="container bg-dark" style={{height: '85vh'}}>
            <h1 class="text-success">Hello world !!!</h1>
        </div>
        </React.Fragment>
    )
}

export default home;