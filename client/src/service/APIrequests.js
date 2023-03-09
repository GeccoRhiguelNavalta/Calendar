//helper functions dealing with GET,POST requests

//root server url
const rootURL = "http://localhost:3001/event";

//function boiler plate
async function getAll() {
  let retrievedData = [];
  await fetch(rootURL)
    .then((response) => response.json())
    .then((fetchedData) => (retrievedData = fetchedData));
  return retrievedData;
}

async function postOne(data) {
  await fetch(rootURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: `${data.title}`,
      date: `${data.date}`,
      venue: `${data.venue}`,
    }),
  });
}

export { getAll, postOne };
