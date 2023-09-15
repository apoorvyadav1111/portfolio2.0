import { TransitionPage } from "../components/TransitionPage";
import { SideNav } from "../components/SideNav";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TopNav } from "../components/TopNav";

type Article = {
  title: string;
  link: string;
  categories: string[];
  content: string;
}

const ArticleStyles = styled.div`
    position: relative;
    justify-content: center;
    margin-left: calc(var(--VW) * 10);
    margin-right: calc(var(--VW) * 10);
    @media (max-width: 500px) {
      margin-left: calc(var(--VW) * 2);
      margin-right: calc(var(--VW) * 2);
      padding-left: calc(var(--VW) * 2);
      padding-right: calc(var(--VW) * 2);
    }
    align-items: center;

    h1 {
        font-size: calc(var(--VW) * 8);
        margin-bottom: calc(var(--VH) * 2);
        @media (max-width: 500px) {
          text-align: left;
          margin-top: calc(var(--VH) * 2);
          font-size: calc(var(--VH) * 6);
        }
    }
    .articles-outer-container{
      position: relative;
      display: flex;  
      flex-direction: column;
      max-width: calc(var(--VW) * 60);
      left: calc(var(--VW) * 10);
      @media (max-width: 500px) {
        left: 0;
      }
    }
    `;

const ArticleContainer = styled(motion.div)`
  @media (max-width: 500px) {
    width:90vw;
  }
  .title{
    font-size: calc(var(--VW) * 2);
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    @media (max-width: 500px) {
      text-align: left;
      margin:0;
      font-size: calc(var(--VW) * 4);
      padding-bottom: 0.5rem;
    }
  }
  .line{
    width: 100%;
    border: 1px solid var(--neon-purple);
    box-shadow: 0px 0px 10px 0px var(--neon-purple);
    margin-top: 3rem;
    margin-bottom: 3rem;
    border-radius: 4px;
    @media (max-width: 500px) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
  .tags{
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media (max-width: 500px) {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
    .tag{
      padding: 4px 8px;
      font-family: 'Monospace',monospace;
      margin: 4px;
      border-radius: 4px;
      border: 1px solid var(--neon-purple);
      @media (max-width: 500px) {
        font-size: calc(var(--VW) * 2);
      }
    }
  }
  p{
    // font-size: calc(var(--VH) * 1);
    justify-content: justify;
    @media (max-width: 500px) {
      font-size: calc(var(--VW) * 2);
      display:none;
    }
  }
`;


const Article = ({ article }: { article: Article }) => {
  const regex = /(<([^>]+)>)/gi;
  const result = article.content.slice(0,1000).replace(regex, "");
  return (
    <ArticleContainer
      initial={{ opacity: 0, y: 60}}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 0.6 , type: "spring", bounce: 0.25}}      
    >
      <a href={article.link}><h2 className="title">{article.title}</h2></a>
      <div className="tags">
        {article.categories.map((tag) => (
          <span className="tag">{tag}</span>
        ))}
      </div>
      <p>{result} ... <a href={article.link} target="_blank">Read More</a></p>
      <div className="line"></div>
    </ArticleContainer>
  );
}

const Articles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
      fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@apoorvyadav1111")
        .then(res=> res.json())
        .then(data => {
          console.log(data.items);
          setArticles(data.items);
        })
    }, []);
    return (
        <>
        <TransitionPage />
        <TopNav />  
        <SideNav />
        <ParticlesContainer/>
        <ArticleStyles>

            <motion.h1
            initial={{ opacity: 0, y: 50}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1 }}
              >Articles
            </motion.h1>
            <div className="articles-outer-container">
            { articles.map((article:Article, index:number) => (
              <Article article={article} key={index}/>
            ))}
            </div>

        </ArticleStyles>
        </>
    )
}

export {
  Articles
}; 