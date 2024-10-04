async function getTeams() {
    const res = await fetch('./teams.json');
    const data = await res.json();

    const allTeams = data.teams;

    allTeams.forEach((team, index) => {
        const h2 = document.createElement('h2');
    h2.innerText = data.teams[index].name;
    h2.addEventListener('click', ()=> {showDetails(index)});
    document.querySelector('.teamContainer').appendChild(h2);
    });
    
}

async function getStandings() {
    const res = await fetch('./standings.json');
    const data = await res.json();

    const leagueTable = data.standings[0].table;
    console.log(leagueTable);

    const flpos = document.createElement('div');
    flpos.innerText = "Pos";
    const flteam = document.createElement('div');
    flteam.innerText = "Team";
    const flpl = document.createElement('div');
    flpl.innerText = "Pl";
    const flw = document.createElement('div');
    flw.innerText = "W";
    const fld = document.createElement('div');
    fld.innerText = "D";
    const fll = document.createElement('div');
    fll.innerText = "L";
    const flpts = document.createElement('div');
    flpts.innerText = "Pts";

    const tableDiv = document.querySelector('.table');

    tableDiv.appendChild(flpos);
    tableDiv.appendChild(flteam);
    tableDiv.appendChild(flpl);
    tableDiv.appendChild(flw);
    tableDiv.appendChild(fld);
    tableDiv.appendChild(fll);
    tableDiv.appendChild(flpts);

    leagueTable.forEach((place)=> {
        const positionEl = document.createElement('div');
        positionEl.innerText = place.position;
        const teamEl = document.createElement('div');
        teamEl.innerText = place.team.name;
        const playedEl = document.createElement('div');
        playedEl.innerText = place.playedGames;
        const wonEl = document.createElement('div');
        wonEl.innerText = place.won;
        const drawEl = document.createElement('div');
        drawEl.innerText = place.draw;
        const lostEl = document.createElement('div');
        lostEl.innerText = place.lost;
        const pointsEl = document.createElement('div');
        pointsEl.innerText = place.points;
        tableDiv.appendChild(positionEl);
        tableDiv.appendChild(teamEl);
        tableDiv.appendChild(playedEl);
        tableDiv.appendChild(wonEl);
        tableDiv.appendChild(drawEl);
        tableDiv.appendChild(lostEl);
        tableDiv.appendChild(pointsEl);
    })
}


async function showDetails(ind) {
    const res = await fetch('./teams.json');
    const data = await res.json();
    const allTeams = data.teams;
    const name = allTeams[ind].name;
    const coachName = allTeams[ind].coach.name;
    const imgUrl = allTeams[ind].crest;
    const stadium = allTeams[ind].venue;
    const year = allTeams[ind].founded;

    const h2 = document.createElement('h2');
    h2.innerText = name;
    const coachEl = document.createElement('p');
    coachEl.innerText = `Coach: ${coachName}`;
    const stadiumEl = document.createElement('p');
    stadiumEl.innerText = `Stadium: ${stadium}`;
    const yearEl = document.createElement('p');
    yearEl.innerText = `Founded: ${year}`;
    const image = document.createElement('img');
    image.src = imgUrl;

    const modal = document.querySelector('.modal');
    const banner = document.querySelector('.banner');
    banner.innerHTML = '';
    modal.classList.toggle('show');
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    imgContainer.appendChild(image);
    banner.appendChild(imgContainer);
    const info = document.createElement('div');
    info.classList.add('info');
    info.appendChild(h2);
    info.appendChild(coachEl);
    info.appendChild(stadiumEl);
    info.appendChild(yearEl);
    banner.appendChild(info);
    const close = document.createElement('button');
    close.classList.add('close');
    close.innerText = 'X';
    close.addEventListener('click', ()=>{modal.classList.toggle('show')});
    banner.appendChild(close);
}


function renderTeams(){
    const main = document.querySelector('.main');
    main.innerHTML = '';
    const p = document.createElement('p');
    p.innerText = "36 teams battle it out this year. Learn more about them.";
    p.classList.add('mainHeader');
    main.appendChild(p);
    const container = document.createElement('div');
    container.classList.add('teamContainer');
    main.appendChild(container);
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const banner = document.createElement('div');
    banner.classList.add('banner');
    modal.appendChild(banner);
    main.appendChild(modal);
    getTeams();
}

function renderStandings(){
    const main = document.querySelector('.main');
    main.innerHTML = '';
    const p = document.createElement('p');
    p.innerText = "For the first time, a single, unified table. It is all against all.";
    p.classList.add('mainHeader');
    main.appendChild(p);
    const table = document.createElement('div');
    table.classList.add('table');
    main.appendChild(table);
    getStandings();
}

function renderHome(){
    const main = document.querySelector('.main');
    main.innerHTML = '';
    const intro = document.createElement('div');
    intro.classList.add('intro');
    const introH2 = document.createElement('h2');
    introH2.innerText = "The all new UEFA champions league";
    const introP = document.createElement('p');
    introP.innerText = "Explore the changes of the new competition format"
    intro.appendChild(introH2);
    intro.appendChild(introP);
    main.appendChild(intro);

    const mainContainer1 = document.createElement('div');
    mainContainer1.classList.add('main-container');
    const mainText1 = document.createElement('div');
    mainText1.classList.add('main-text')
    const mainText1H2 = document.createElement('h2');
    mainText1H2.innerText = "The new league phase is here"
    const mainText1P1 = document.createElement('p');
    mainText1P1.innerText = "No more boring encounters"
    const mainText1P2 = document.createElement('p');
    mainText1P2.innerText = "Now every game counts";

    mainText1.appendChild(mainText1H2);
    mainText1.appendChild(mainText1P1);
    mainText1.appendChild(mainText1P2);
    mainContainer1.appendChild(mainText1);

    const mainImg1 = document.createElement('div');
    mainImg1.classList.add('main-image');
    const img1 = document.createElement('img');
    img1.src = "./images/clwinners.webp"
    mainImg1.appendChild(img1);
    mainContainer1.appendChild(mainImg1);
    main.appendChild(mainContainer1);

    const mainContainer2 = document.createElement('div');
    
    const mainImg2 = document.createElement('div');
    mainImg2.classList.add('main-image');
    const img2 = document.createElement('img');
    img2.src = "./images/clball.jpg"
    mainImg2.appendChild(img2);
    mainContainer2.appendChild(mainImg2);
    
    mainContainer2.classList.add('main-container');
    const mainText2 = document.createElement('div');
    mainText2.classList.add('main-text')
    const mainText2H2 = document.createElement('h2');
    mainText2H2.innerText = "No more mid-season draws"
    const mainText2P = document.createElement('p');
    mainText2P.innerText = "Knockout stage based on league phase seeding";
    
    mainText2.appendChild(mainText2H2);
    mainText2.appendChild(mainText2P);
    mainContainer2.appendChild(mainText2);

    main.appendChild(mainContainer2);
    
}

function renderFixtures(){
    const main = document.querySelector('.main');
    main.innerHTML = ''
    const h2 = document.createElement('h2');
    h2.innerText = "This section is under construction";
    main.appendChild(h2);
}



function toggleMenu(){
    const menu = document.querySelector('.main-menu');
    menu.classList.toggle("menu-active");
}


const teamsBtn = document.querySelector('#teamsBtn');
teamsBtn.addEventListener('click', ()=> {toggleMenu();
    renderTeams();
});

const standingsBtn = document.querySelector('#standingsBtn');
standingsBtn.addEventListener('click', ()=>{toggleMenu();
    renderStandings();
});

const homeBtn = document.querySelector('#homeBtn');
homeBtn.addEventListener('click', ()=>{toggleMenu();
    renderStandings();
});

const fixturesBtn = document.querySelector('#fixturesBtn');
fixturesBtn.addEventListener('click', ()=>{toggleMenu();
    renderFixtures();
});

document.addEventListener('DOMContentLoaded', renderHome);

const menuBtn = document.querySelector('.navbar .menu-button');
menuBtn.addEventListener('click', toggleMenu);
