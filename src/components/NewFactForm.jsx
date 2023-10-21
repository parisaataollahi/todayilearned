import { useState } from "react";
import supabase from "../supabase";

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm({ categories, setShowForm, setFacts }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("http:example.com");
  const [category, setCategory] = useState("");
  const textLength = text.length;

  async function handleSubmit(e) {
    e.preventDefault();

    if (text && isValidHttpUrl(source) && category && textLength <= 200) {
      console.log(text, source, category);

      const { data: newFact, error } = await supabase
        .from("facts")
        .insert([{ text, source, category }])
        .select();

      console.log(newFact);
      if (!error) setFacts(facts => [newFact[0], ...facts]);

      setText("");
      setSource("");
      setCategory("");

      setShowForm(false);
    }
  }
  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Share a fact with the world..."
      />
      <span>{200 - textLength}</span>
      <input
        type="text"
        value={source}
        onChange={e => setSource(e.target.value)}
        placeholder="Trustworthy source"
      />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">Choose Category:</option>
        {categories.map(cat => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
}

export default NewFactForm;
