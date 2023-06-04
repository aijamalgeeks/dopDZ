let divs = document.getElementsByClassName('random-div');

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


for (let i of divs) {
  i.onmouseover=()=> {
    let randomColor = getRandomColor();
    i.style.backgroundColor = randomColor;
  };
}

