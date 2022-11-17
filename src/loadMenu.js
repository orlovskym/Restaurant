const loadMenu = () =>{
    const body = document.getElementById('body');

    const header = document.createElement('div');
    header.classList.add('bodyDiv')
    header.innerText="MENU"

    const menuGrid = document.createElement('div');
    menuGrid.id = "menuGrid"

    _createTile("PIER BUDDIES","./images/fish.jpg", menuGrid);
    _createTile("DIRT ROCKETS","./images/carrots.jpg", menuGrid);
    _createTile("SALTY PALS","./images/shrimp.jpg", menuGrid);
    _createTile("TROPICAL JOHNS","./images/pineapple.jpg", menuGrid);
    _createTile("NIGHT LOAF","./images/cheese.jpg", menuGrid);
    _createTile("GREEN TODDS","./images/peas.jpg", menuGrid);


    body.append(menuGrid)
}

function _createTile(name, src, parent){
    const tile = document.createElement('div');
    const text = document.createElement('div');
    text.innerText=name;
    const image=document.createElement('img');
    image.src=src
    tile.append(text,image)
    parent.append(tile)
}


export {loadMenu};