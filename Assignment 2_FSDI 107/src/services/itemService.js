//need 9
import Item from './../components/item';


var catalog = [
    {
        _id: "234234234234",
        title: "Trademarks 101",
        category: "IP",
        price: 99.00,
        image: "trademarks_product.png", //image name corresponds to image in images/products folder
        minimum: 3,   //never less than 3
        description: "Coolest course in the whole wide world about trademarks!"
    },
    {
        _id: "36256275",
        title: "Copyrights 101",
        category: "IP",
        price: 99,
        image: "trademarks_product.png",
        minimum: 3,   //never less than 3
        description: "Coolest course in the whole wide world about trademarks!"

    },
    {
        _id: "236257689",
        title: "LLC",
        category: "Corporate",
        price: 99,
        image: "LLC.jpg",
        minimum: 3,   //never less than 3
        description: "Coolest course in the whole wide world about trademarks!"

    },
    {
        _id: "34680089675",
        title: "Corporations",
        category: "Corporate",
        price: 99,
        image: "trademarks_product.png",
        minimum: 3,   //never less than 3
        description: "Coolest course in the whole wide world about trademarks!"

    },
    {
        _id: "4563847243",
        title: "Nonprofit",
        category: "Corporate",
        price: 99,
        image: "trademarks_product.png",
        minimum: 3,   //never less than 3
        description: "Coolest course in the whole wide world about trademarks!"

    },
    {
        _id: "45738356356",
        title: "Patent",
        category: "IP",
        price: 99,
        image: "trademarks_product.png",
        minimum: 3,   //never less than 3
        description: "Coolest course in the whole wide world about trademarks!"

    },
    {
        _id: "457382224689",
        title: "Trade Secret",
        category: "IP",
        price: 99,
        image: "trademarks_product.png",
        minimum: 3,   //never less than 3
        description: "Coolest course in the whole wide world about trademarks!"

    },
    {
        _id: "78784563547",
        title: "Contracts",
        category: "General",
        price: 99,
        image: "trademarks_product.png",
        minimum: 3,   //never less than 3
        description: "Coolest course in the whole wide world about trademarks!"

    },
    {
        _id: "3567497456345622",
        title: "Hiring",
        category: "General",
        price: 99,
        image: "trademarks_product.png",
        minimum: 3,   //never less than 3
        description: "Coolest course in the whole wide world about hiring!"

    },



];


class ItemService { //in this you can have methods

    getCatalog() {
        //we'll cover the next two lines in FSDI 109
        //put the logic to call a server
        //and retrieve an array of items or products (whatever you call them)

        //return mock data
        return catalog;
    }

    saveItem(item) {

    }

    getItemDetails(id) {

    }

}

export default ItemService;
