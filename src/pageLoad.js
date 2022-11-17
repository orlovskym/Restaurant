const pageLoad = () => {
    const content = document.getElementById('content');

    //skeleton
    const header = document.createElement('div');
    header.id = ('header');
    const body = document.createElement('div');
    body.id = ('body');
    const footer = document.createElement('div');
    footer.id = ('footer');
    content.append(header, body, footer);

    //header tabs
    const homeTab = document.createElement('button');
    homeTab.id = 'homeTab';
    homeTab.innerText = "Home"
    const menuTab = document.createElement('button');
    menuTab.id = 'menuTab'
    menuTab.innerText = "Menu"
    const contactTab = document.createElement('button');
    contactTab.id = 'contactTab'
    contactTab.innerText = "Contact"
    header.append(homeTab, menuTab, contactTab);

    //footer
    const credit = document.createElement('div');
    credit.innerText = "Mark Orlovsky 2022"
    footer.append(credit)


}

const clearBody = () =>{
    body.replaceChildren();
}

export { pageLoad, clearBody };