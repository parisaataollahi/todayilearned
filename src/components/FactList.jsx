import Fact from "./Fact";
function FactList({ facts, categories, setFacts }) {
  return (
    <section>
      <ul className="facts-list">
        {facts.map(fact => (
          <Fact
            key={fact.id}
            fact={fact}
            categories={categories}
            setFacts={setFacts}
          />
        ))}
      </ul>
      <p style={{ textAlign: "center" }}>
        There are {facts.length} facts in the database. Add your own!
      </p>
    </section>
  );
}

export default FactList;
