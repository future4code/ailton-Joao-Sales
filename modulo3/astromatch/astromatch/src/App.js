import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Matches from "./pages/Matches/Matches";
import { Container } from "./styled";


function App() {
  const [page, setPage] = useState('home')

  return (
    <Container>
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'matches' && <Matches setPage={setPage}/>}
    </Container>
  );
}

export default App;
