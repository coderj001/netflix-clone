import Jumbotron from "./components/jumbotron";
import jumboData from "./fixture/jumbo.json";

function App() {
  return (
    <div className="App">
      <Jumbotron>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron>
    </div>
  );
}

export default App;
