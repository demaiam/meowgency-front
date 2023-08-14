import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import paw from "../../assets/paw.svg";
import { BiStar, BiSolidStar, BiSolidBookmarkAltPlus } from "react-icons/bi";
import { Context } from "../../context/Context";
import {  PageContainer, MediaScroller, MediaElement, BotContainer, Description, DescriptionLeft, DescriptionTop, DescriptionBot, DescriptionRight, Star } from "./Styles.js"

export default function ModelPage() {
  const [model, setModel] = useState({
    name: "",
    breed: "",
    age: 0,
    fur: "",
    weight: "",
    height: "",
    eyes: "",
    rating: 0,
    images: [
    ]
  });
  const [images, setImages] = useState([]);
  const [stars, setStars] = useState([]);

  const id = useParams();
  
  const navigate = useNavigate();

  const { tokenContext } = useContext(Context);


  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${tokenContext}`
      }
    };
    const req = axios.get(`${import.meta.env.VITE_API_URL}/model/${id.id}`, config);
    
    req.then(res => {
      setModel(res.data);
      let starsArr = [];
      for (let i = 0; i < res.data.rating; i++) {
        starsArr.push(<BiSolidStar size={25} />);
      }
      for (let i = res.data.rating; i < 5; i++) {
        starsArr.push(<BiStar size={25} />);
      }
      setStars(starsArr);
      setImages(res.data.images);
    });

    req.catch(res => {
      console.log("erro");
    });

  }, []);


  return (
    <PageContainer>
      <MediaScroller>
        {images.map((i, index) =>
          <MediaElement key={index}>
            <img src={i.image} />
          </MediaElement>
        )}
      </MediaScroller>
      <BotContainer>
        <h1>{model.name}</h1>
        <img src={paw} />
        <hr />
        <Description>
          <DescriptionLeft>
            <DescriptionTop>
              <h2><span>Breed:</span> <br /> {model.breed}</h2>
              <h2><span>Age:</span> <br /> {model.age}</h2>
            </DescriptionTop>
            <DescriptionBot>
              <h2><span>Fur:</span> <br /> {model.fur}</h2>
              <h2><span>Weight:</span> <br /> {model.weight}</h2>
            </DescriptionBot>
          </DescriptionLeft>
          <DescriptionRight>
            {stars.length != 0 &&
              stars.map((star, index) =>
                <Star key={index}>
                  {star}
                </Star>
              )}
          </DescriptionRight>
        </Description>
      </BotContainer>
    </PageContainer>
  )
}