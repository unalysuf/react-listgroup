import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Istanbul", "Ankara", "Izmir", "Karabuk", "Kocaeli"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelecteItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
