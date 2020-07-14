import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiRequest } from "./store/actions";
import { Container, Title, Image, Quote } from "./styles";

function App() {
  const { catImageUrl, quoteText } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = () => dispatch(apiRequest());

  useEffect(() => {
    dispatch(apiRequest());
  }, [dispatch]);

  return (
    <Container>
      <Title>Cats + Qoutes</Title>
      <div className="row">
        <Image src={catImageUrl} alt="A cat" />
      </div>
      <Quote>{quoteText}</Quote>
      <button onClick={handleClick}>Gimme more...</button>
    </Container>
  );
}

export default App;
