const getScore = (placeId, name) => {
    fetch('https://virisk.herokuapp.com/getScorecard?name=' + encodeURIComponent(name) + '&placeId=' + placeId, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    })
    .catch((error) => {
        console.error(error);
    });
}

export default getScore;