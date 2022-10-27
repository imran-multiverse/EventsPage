const EventData = [
    {
        "Title": "New! Coming soon",
        "Image": "assets/imran-tv-moji.png",
        "Price": "Price - tba",
        "Date": "Date - tba",
        "Description": "Watch this space. New show to be released next week!"
    },
    {
        "Title": "Bananaman",
        "Image": "assets/bananaman.png",
        "Price": "£24.00 per person",
        "Date": "1st November 2022",
        "Description": "Bananaman is a fictional character appearing in British comic books. Bananaman is a parody of traditional superheroes, being portrayed as a schoolboy who is transformed into a muscled, caped figure when he eats a banana."
    },
    {
        "Title": "Bodger & Badger",
        "Image": "assets/bodger.png",
        "Price": "£24.00 per person",
        "Date": "20th December 2022",
        "Description": "Bodger & Badger is a BBC children's comedy programme written by Andy Cunningham, first broadcast in 1989. It starred Cunningham as handyman Simon Bodger and his talking badger companion."
    },
    {
        "Title": "Button Moon",
        "Image": "assets/button.png",
        "Price": "£24.00 per person",
        "Date": "17th November 2022",
        "Description": "Button Moon is a British children's television programme featuring the adventures of Mr. Spoon who, in each episode, travels to Button Moon in his homemade rocket ship."
    },
    {
        "Title": "Power Rangers",
        "Image": "assets/power.png",
        "Price": "£35.00 per person",
        "Date": "15 November 2022",
        "Description": "Power Rangers revolves around a team of youths recruited and trained by a mentor to morph into the eponymous Power Rangers, able to use special powers and pilot immense assault machines, called Zords, to overcome the periodic antagonists."
    },
    {
        "Title": "Rainbow",
        "Image": "assets/rainbow.png",
        "Price": "£24.00 per person",
        "Date": "2nd December 2022",
        "Description": "Rainbow revolved around a particular activity or situation that arose in the Rainbow House, where the main characters lived. Some episodes, particularly in the early years, were purely educational in format and consisted of a series of scenes involving the characters learning about that particular episode's subject, interspersed with real-world footage, songs, stories and animations related to that same subject. "
    },
    {
        "Title": "Rugrats",
        "Image": "assets/rugrats.png",
        "Price": "£35.00 per person",
        "Date": "19th November 2022",
        "Description": "Rugrats focuses on a group of toddlers; most prominently—Tommy, Chuckie, Angelica, and twins Phil and Lil, and their day-to-day lives, usually involving life experiences that become much greater adventures in the imaginations of the main characters."
    },
    {
        "Title": "Teletubbies",
        "Image": "assets/teletub.png",
        "Price": "£24.00 per person",
        "Date": "28th November 2022",
        "Description": "Teletubbies focuses on four differently coloured characters known as the Teletubbies, named after the television screens on their bellies. The Teletubbies communicate through gibberish and were designed to bear resemblance to toddlers."
    },
    {
        "Title": "Thundercats",
        "Image": "assets/thunder.png",
        "Price": "£24.00 per person",
        "Date": "19th December 2022",
        "Description": "ThunderCats is an American media franchise, featuring a fictional group of catlike humanoid aliens. The characters were created by Tobin Ted Wolf and originally featured in an animated television series named ThunderCats, running from 1985 to 1989."
    },
    {
        "Title": "Teenage Mutant Ninja Turtles",
        "Image": "assets/turtles.png",
        "Price": "£35.00 per person",
        "Date": "12th November 2022",
        "Description": "Teenage Mutant Ninja Turtles follows Leonardo, Michelangelo, Donatello and Raphael, four anthropomorphic turtle brothers (named after Italian Renaissance artists) trained in ninjutsu who fight evil in New York City."
    },
]

const grid = document.querySelector('.grid')

function createEvent({Title, Image, Price, Date, Description}){
    
    //Grid Item
    const GridItem = document.createElement('div')
    GridItem.classList.add('grid_item')
    //

    //Title
    const EventTitle = document.createElement('div')
    EventTitle.classList.add('grid_item_title')
    EventTitle.append(Title)
    //

    //Image
    const EventImage = document.createElement('img')
    EventImage.classList.add('gallery_img')
    EventImage.src = Image
    //

    //Price
    const EventPrice = document.createElement('h2')
    EventPrice.append(Price)
    //

    //Date
    const EventDate = document.createElement('h3')
    EventDate.append(Date)
    //

    //Description
    const EventDesc = document.createElement('p')
    EventDesc.append(Description)
    //

    //apppend elements
    GridItem.append(EventTitle,EventImage,EventPrice,EventDate,EventDesc)
    grid.append(GridItem)
    //append elements
}

EventData.forEach(EventData => createEvent(EventData))

