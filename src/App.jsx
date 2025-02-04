import { useState } from "react";

export default function App() {
  const [article, setArticle] = useState("");
  const [articleList, setArticleList] = useState(["articolo 1"]);

  const handleField = (e) => {
    setArticle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inviato");
    console.log("l'articolo è" + article);
    const newArticleList = [...articleList, article];
    setArticleList(newArticleList);
  };

  return (
    <>
      <h1>Lista di articoli</h1>
      <ul>
        {articleList.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <h3>Aggiungi articolo</h3>
        <input
          type="text"
          value={article}
          onChange={handleField}
          placeholder="Scrivi l'articolo"
        />
        <button type="submit">Invia</button>
        {article && <p>L'articolo che stai aggiungendo è: {article}</p>}
      </form>
    </>
  );
}
