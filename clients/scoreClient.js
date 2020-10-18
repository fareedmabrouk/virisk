async function getScore(placeId, name) {
  const uri =
    "https://virisk.herokuapp.com/getScorecard?name=" +
    encodeURIComponent(name) +
    "&placeId=" +
    placeId;
  try {
    let response = await fetch(uri, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}

export default getScore;
