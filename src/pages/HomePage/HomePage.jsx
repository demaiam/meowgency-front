import { useContext, useEffect, useState } from "react"
import { PageContainer, MediaScroller, MediaElement } from "./Styles.js";
import axios from "axios";
import Header from "../../components/Header/Header.jsx";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import { Context } from "../../context/Context.js";

export default function HomePage() {
  const [models, setModels] = useState([
    {
      name: "Sign in to view models",
      mainImage: "https://media.istockphoto.com/id/667375402/photo/symbol-question-silhouette-of-cat-black-background.jpg?s=612x612&w=0&k=20&c=YTbdqJmyXlupEDHDjPg05wOxr8b8j3It70SqR5NKyhY="
    }
  ]);

  const [state, setState] = useState("none");

  const { tokenContext } = useContext(Context);

  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(tokenContext)
    const config = {
      headers: {
        Authorization: `Bearer ${tokenContext}`
      }
    };
    const req = axios.get(`${import.meta.env.VITE_API_URL}/`, config);

    req.then(res => {
      setModels(res.data);
      setState("auto");
    });

    req.catch(res => {
      console.log(res.response.data)
    });
    
  }, []);


  return (
    <>
      <PageContainer>
        <Header />
        <MediaScroller>
          {models.map((model, index) =>
            <MediaElement key={index} clickable={state} onClick={() => navigate(`/model/${model.id}`)}>
              <img src={model.mainImage} />
              <a>{model.name}</a>
            </MediaElement>
          )}
        </MediaScroller>
      </PageContainer>
      <Footer />
    </>
  )
}