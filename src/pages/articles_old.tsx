import { TransitionPage } from "../components/TransitionPage";
import { SideNav } from "../components/SideNav";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Article = {
  title: string;
  link: string;
  categories: string[];
  thumbnail: string;
  content: string;
}

const ArticleStyles = styled.div`
    position: relative;
    justify-content: center;
    margin-left: calc(var(--VW) * 10);
    margin-right: calc(var(--VW) * 10);
    align-items: center;
    h1 {
        font-size: calc(var(--VW) * 8);
    }
    .articles-outer-container{
      position: relative;
      display: flex;  
      flex-wrap: wrap;
      justify-content: center;
      max-width: calc(var(--VW) * 60);
      left: calc(var(--VW) * 10);
    }
    `;

const ArticleContainer = styled(motion.div)`
  max-width: calc(var(--VW) * 60);
  position: relative;
  border: 1px solid var(--neon-purple);
  box-shadow: 0 0 10px var(--neon-purple);
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  width: calc(var(--VW) * 30)
  img{
    @media (hover: none) and (pointer: coarse) and (max-width: 500px), (max-width: 500px){
      display: none;
  }
    .thumbnail{
      position: relative;
      width: calc(var(--VW) * 50);
      height: calc(var(--VW) * 50);
      margin-bottom: 1rem;
    }
  }

  .title{
    font-size: calc(var(--VW) * 2);
    margin-bottom: 1rem;
  }
  .tags{
    display: flex;
    flex-wrap: wrap;
    .tag{
      padding: 4px 8px;
      margin: 4px;
      border-radius: 4px;
      border: 1px solid var(--neon-purple);
      color: var(--black);
      background-color: var(--neon-purple);
    }
  }
  p{
    font-size: calc(var(--VW) * 1);
    justify-content: justify;
  }
`;


const Article = ({ article }: { article: Article }) => {
  const regex = /(<([^>]+)>)/gi;
  const result = article.content.slice(0,1000).replace(regex, "");
  return (
    <ArticleContainer
      initial={{ opacity: 0, y: 50}}
      whileInView={{ opacity: 1, y: 0}}
      
    >
      <img className="thumbnail" 
        src={article.thumbnail} 
        alt={article.title} />
      <h2 className="title">{article.title}</h2>
      <div className="tags">
        {article.categories.map((tag) => (
          <span className="tag">{tag}</span>
        ))}
      </div>
      <p>{result} ... <a href={article.link} target="_blank">Read More</a></p>

    </ArticleContainer>
  );
}

const Articles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
      fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@apoorvyadav1111")
        .then(res=> res.json())
        .then(data => {
          setArticles(data.items);
        })
    }, []);
    return (
        <>
        <ArticleStyles>
            <TransitionPage />
            <SideNav />
            <ParticlesContainer/>
            <motion.h1
            initial={{ opacity: 0, y: 50}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1 }}
              >Articles
            </motion.h1>
            <div className="articles-outer-container">
            { articles.map((article:Article) => (
              <Article article={article} />
            ))}
            </div>

        </ArticleStyles>
        </>
    )
}

export {
  Articles
}; 