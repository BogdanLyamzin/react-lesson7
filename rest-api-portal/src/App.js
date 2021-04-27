import Cats from "./client/Cats/components/Cats";
import UserCard from "./shared/UserCard";
import ErrorBoundary from "./shared/ErrorBoundary";

const userProps = {
  name: {},
  lastName: "Брячеславович",
};

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        {/* <Cats /> */}
        <UserCard {...userProps} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
