import * as C from './App.styles';

const App = () => {
  return(
    <C.Container>
      <form>
        <input
          type="text"
          name="name"
          placeholder="vehicle name"
          autoComplete="off"
        />
        <input
          type="text"
          name="license"
          placeholder="license plate"
          autoComplete="off"
        />
        <button type="button">Register</button>
      </form>
    </C.Container>
  );
}

export default App;
