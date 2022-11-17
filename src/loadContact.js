const loadContact = () =>{
    const body = document.getElementById('body');

    const header = document.createElement('div');
    _createRow("CONTACT US", header)

    const description = document.createElement('div');
    _createRow('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', description)


    header.classList.add('bodyDiv')
    description.classList.add('bodyDiv')
    body.append(header, description)

}

function _createRow(text, parent) {
    const row = document.createElement('div');
    row.innerText = text;
    parent.append(row)
}

export {loadContact};