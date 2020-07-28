const people = [
{name: 'Ironman'},
{name: 'Spiderman'},
{name: 'Hulk'},
{name: 'Wolverine'},
{name: 'Deadpool'},
{name: 'Juggernaut'},
{name: 'Storm'},
{name: 'Venom'},
{name: 'Mr. Fantastic'},
{name: 'Invisible Woman'},
{name: 'The Thing'},
{name: 'Human Torch'},
{name: 'Nightcrawler'},
{name: 'She-Hulk'},
{name: 'Titania'},
{name: 'Thundra'},
{name: 'Red She-Hulk'},
{name: 'Red Hulk'},
{name: 'Domino'},
{name: 'Shocker'},
{name: 'Big Bertha'},
{name: 'Black Cat'},
{name: 'Silver Surfer'},
{name: 'Taskmaster'},
{name: 'Black Widow'},
{name: 'Apocalypse'},
{name: 'Thor'},
{name: 'Cyclops'},
{name: 'Squirrel Girl'},
{name: 'MODOK'},
{name: 'Red Skull'},
{name: 'Captain America'},
{name: 'Jubilee'},
{name: 'Colossus'},
{name: 'X-23'},
{name: 'Ultron'}
];

const list = document.getElementById('list');

function setList(group)
{
    clearList();
    for(const person of group)
    {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(person.name);
        item.appendChild(text);
        list.appendChild(item);
    }
    if(group.Length === 0)
        setNoResults();
}

function clearList()
{
    while(list.firstChild)
        {
            list.removeChild(list.firstChild);
        }
}

function setNoResults()
{
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode("No results found.");
        item.appendChild(text);
        list.appendChild(item);
}

function getRelevancy(value, searchTerm)
{
    if(value === searchTerm)
    {
        return 2;
    }
    else if (value.startsWith(searchTerm))
    {
        return 1;
    }
    else if (value.includes(searchTerm))
    {
        return 0;
    }
    else
    {
        return -1;
    }
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if(value && value.trim().length > 0) {
            value = value.trim().toLowerCase();
            setList(people.filter(person => {
                return person.name.includes(value);
            }).sort((personA, personB) => {
                return getRelevancy(personB.name, value) - getRelevancy(personA.name, value);
            }));
        }else{
            clearList();
        }
});