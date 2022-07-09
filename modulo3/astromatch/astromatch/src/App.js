import React, { useState } from "react";
import Home from "./pages/Home/Home";
import Matches from "./pages/Matches/Matches";
import { Profile } from "./pages/MyProfile/Profile";
import { Container } from "./styled";
import { Clear } from "./services/FunctionsAPI";

function App() {
  const [page, setPage] = useState('home')

  return (
    <Container>
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'matches' && <Matches setPage={setPage} />}
      {/* {page === 'profile' && <Profile setPage={setPage} />} */}
      <button onClick={() => Clear(setPage)}>limpar matches</button>
    </Container>
  );
}

export default App;
