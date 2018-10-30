const buses = ['A', 'C', 'D', 'K', 'N', 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 118, 119, 120, 121, 122, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 136, 140, 141, 142, 144, 145, 146, 147, 148, 149, 150, 206, 240, 241, 243, 245, 246, 247, 248, 249, 250, 251, 253, 255, 257, 259, 319, 325, 602, 607, 609, 612, ]
const trams = ['0L', '0P', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 17, 20, 23, 24, 31, 32, 33];

export default class MPKWroclawAPI {
  constructor() {
    this.position = 'https://pasazer.mpk.wroc.pl/position.php';
    this.buses = buses;
    this.trams = trams;
  }

  getPosition(ids) {
    const body = new URLSearchParams();
    ids.forEach((id) => {
      body.append('busList[][]', id);
    });
    return fetch(this.position, {
      method: 'POST',
      body,
    })
      .then(res => res.json());
  }

  getStations = () => (
    fetch('/stations.data.json')
      .then(res => res.json())
  )
}
