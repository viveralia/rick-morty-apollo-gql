import React from "react";
// 4. Import gql and the useQuery hook
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

// --------------------------------
// 5. Building the Query
// --------------------------------
const getAllCharacters = gql`
  query getAllCharacters {
    characters {
      results {
        id
        name
        image
        origin {
          name
        }
      }
    }
  }
`;

// --------------------------------
// Main Component
// --------------------------------
const App = () => {
  // 6. Use the useQuery hook and destructure the loading, error and data states
  const { loading, error, data } = useQuery(getAllCharacters);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  if (data) {
    const { results: characters } = data.characters;
    return (
      <div>
        {characters.map(({ id, name, image, origin: { name: origin } }) => (
          <article key={id}>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>
              <strong>Origin: </strong>
              {origin}
            </p>
          </article>
        ))}
      </div>
    );
  }
};

export default App;
