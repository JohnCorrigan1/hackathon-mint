export async function query() {
    const endpointUrl = "https://api.thegraph.com/subgraphs/name/mercuricchloride/hackathon";

    const query = `
    query {
        playerClasses {
            id
            name
          }
        }
        `;

// Define the Fetch API options
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({ query }),
};
const res = await fetch(endpointUrl, options);
const json = await res.json();
console.log("from game", json);
return json;
}