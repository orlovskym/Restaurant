const loadHome = () => {
    const body = document.getElementById('body');


    const header = document.createElement('div');
    _createRow("HUMAN FOOD RESTAURANT", header)

    const description = document.createElement('div');
    _createRow('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', description)

    const hours = document.createElement('div');
    _createRow("HOURS", hours);
    _createRow("Sunday: 4am - 9am", hours);
    _createRow("Monday: 2pm - 2:15pm", hours);
    _createRow("Tuesday: 6am - 11pm", hours);
    _createRow("Wednesday: 11am - 10am", hours);
    _createRow("Thursday: 9pm - 11pm", hours);
    _createRow("Friday: 9ck - 12ph", hours);
    _createRow("Saturday: 14am - 21pm", hours);
    _createRow("Starsday: 4ji - 10wh", hours);

    const location = document.createElement('div');
    _createRow("LOCATION", location)
    _createRow("433 Real Avenue, Null City", location)

    header.classList.add('bodyDiv')
    description.classList.add('bodyDiv')
    hours.classList.add('bodyDiv')
    location.classList.add('bodyDiv')

    body.append(header, description, hours, location)


}

function _createRow(text, parent) {
    const row = document.createElement('div');
    row.innerText = text;
    parent.append(row)
}


export { loadHome };