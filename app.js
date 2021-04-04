// items
const menu = [{
        id: 1,
        title: "Raclette-Gruyère Mac and Cheese with Pickled Shallots",
        img: "/css/images/mac-cheese.jpg",
        price: "12",
        desc: "This Swiss twist on a Thanksgiving classic gets rich flavor from Gruyère and a lush creaminess from Raclette. Served with a side of salad, fries or garlic bread.",
        category: "pastas",
    },
    {
        id: 2,
        title: "Ground Turkey Bolognese",
        img: "/css/images/ground-turkey-bolognese.jpg",
        price: "15",
        desc: "Bring out your inner Italian grandma and make the (lighter) bolognese of your dreams.",
        category: "pastas",

    },
    {
        id: 3,
        title: "Chicken Parmesan",
        img: "/css/images/chicken-parmesan.jpg",
        price: "25",
        desc: "A fried buttermilk-breaded chicken breast, topped with our marinara sauce and pizza mozzarella. Served with seasonal vegetables.",
        category: "pastas",
    },
    {
        id: 4,
        title: "NY Striploin Steak",
        img: "/css/images/nystriploin.jpg",
        price: "45",
        desc: "Canadian 10-ounce AAA New York strip loin steak, aged a minimum of 28 days and charbroiled the way you like it. Served with seasonal vegetables.",
        category: "main",
    },
    {
        id: 5,
        title: "Slow-Roasted Pork Back Ribs",
        img: "/css/images/slow-roasted.jpg",
        price: "32",
        desc: "Our tender ribs are slow-cooked with our own blend of spices, and finished with your choice of sauce. Choose from: BBQ, Bourbon BBQ, Honey Garlic. Served with seasonal vegetables.",
        category: "main",
    },
    {
        id: 6,
        title: "Mediterranian Pizza",
        img: "/css/images/mediterranean-pizza.jpg",
        price: "22",
        desc: "Signature pizza sauce, pizza mozzarella, fresh spinach, mushrooms, olives, red onion, and feta, topped with fresh tomatoes and a pesto drizzle.",
        category: "pizza",
    },
    {
        id: 7,
        title: "Topical Hawaiian",
        img: "/css/images/tropical-hawaiian.jpg",
        price: "23",
        desc: "Sweet Thai honey garlic, Gouda, provolone, Parmesan, pizza mozzarella, red onions, smoked prosciutto, bacon, pineapple(or not), and toasted sesame seeds.",
        category: "pizza",
    },
    {
        id: 8,
        title: "Viva Italia",
        img: "/css/images/viva-italia.jpg",
        price: "23",
        desc: "Signature pizza sauce, pizza mozzarella, Genoa salami, bacon, spicy Italian sausage, roasted red peppers, banana peppers, goat cheese, chili flakes, freshly grated Parmesan, and a pesto drizzle.",
        category: "pizza",
    },
    {
        id: 9,
        title: "Godzilla Milkshake",
        category: "desserts",
        price: 7,
        img: "/css/images/item-3.jpeg",
        desc: `Delicious shake to satisfy every possible sweet craving`,
    },

    {
        id: 10,
        title: "Blush french Crepe",
        category: "desserts",
        price: 10,
        img: "/css/images/Blush.jpg",
        desc: `Delicious shake to satisfy every possible sweet craving`,
    },

];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");



// Load all Items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
});

// Filter Items




function displayMenuItems(menuItems) { //Function look for array
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">

        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
        <p class="item-text"> ${item.desc}</p>

        </div>

    </article>`;
    });

    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {

    let categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories.map(function (category) {
            return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            const category = e.currentTarget.dataset.id; // Used to access the categories.
            const menuCategory = menu.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}

