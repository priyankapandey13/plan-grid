import Apidata from "./apidata.json";
import SearchForm from "./Components/SearchForm";
import CardsColumns from "./Components/CardsColumns";
import "./App.css";
import Context from "./Components/Context";
import PaginationLoader from "./Components/PaginationLoader";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function App() {
  const Contextprovider = Context.Provider;

  const [Showdata, SetShowdata] = useState(Apidata);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const handleChange = (event) => {
    event.preventDefault();

    const matchedresults = [];

    const inputevent = event.target.value;
    const inputValue = inputevent.toLowerCase();

    Apidata.forEach((item) => {
      let objectTitle = item.title.toLowerCase();
      if (inputevent === "") {
        SetShowdata(Apidata);
      } else if (inputevent) {
        if (item && objectTitle.match(inputValue)) {
          matchedresults.push(item);
        }
        SetShowdata(matchedresults);
      }
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Showdata.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const contextValue = { handleChange, currentPosts };

  return (
    <Contextprovider value={contextValue}>
      <Container>
        <SearchForm Apidata={Apidata} />
        <PaginationLoader
          postsPerPage={postsPerPage}
          totalPosts={Showdata.length}
          paginate={paginate}
        />
        <CardsColumns />
      </Container>
    </Contextprovider>
  );
}

export default App;
