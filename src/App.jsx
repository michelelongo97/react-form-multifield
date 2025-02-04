import { useState } from "react";

export default function App() {
  const [article, setArticle] = useState([]);
  const [articleList, setArticleList] = useState({ title: "", author: "" });

  const handleField = (fieldName, value) => {
    setArticleList((currentArticleList) => ({
      ...currentArticleList,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Inviato");

    setArticle((currentArticle) => [...currentArticle, articleList]);

    setArticleList({
      title: "",
      author: "",
    });
  };

  return (
    <>
      <h1>Lista di articoli</h1>
      <ul>
        {article.map((item) => (
          <li key={item.title}>
            {item.title} - {item.author}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <h3>Aggiungi articolo</h3>
        <input
          type="text"
          value={articleList.title}
          onChange={(event) => handleField("title", event.target.value)}
          placeholder="Scrivi l'articolo"
        />
        <input
          type="text"
          value={articleList.author}
          onChange={(event) => handleField("author", event.target.value)}
          placeholder="Scrivi l'autore"
        />
        <button type="submit">Invia</button>
      </form>
    </>
  );
}
