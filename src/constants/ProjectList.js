import ecommerce from "../assets/projects/greenovation.png";
import weather from "../assets/projects/weather.png";
import tiktactoe from "../assets/projects/tiktactoe.png";
import bank from "../assets/projects/bank.png";
import pokedex from "../assets/projects/pokedex.png";

export const ProjectList = [
    {
        id: 1,
        name: "Green Commerce",
        description:
            "Our project seamlessly integrates a web-based e-commerce platform with Amazon, prioritizing sustainability through dedicated sections for eco-friendly products, a badge rating system, and a box return initiative, fostering a greener and informed shopping experience.",
        img: ecommerce,
        //max 6 tech stack
        tech: ["React", "CSS", "Canva", "AWS"],
        source: "https://github.com/Himanshu2622/Green-Commerce",
        demo: "http://greenovation-site.s3-website.ap-south-1.amazonaws.com/",
    },
    {
        id: 2,
        name: "Weather Website",
        description:
            "This Node.js-based web application provides weather forecasts for user-specified locations by leveraging the Mapbox Geocoding API to convert addresses and the Weatherstack API for real-time weather data. Built with Express.js and Handlebars templates, it includes routes for the homepage, about page, help page, and weather page, showcasing skills in web development, API integration, and creating interactive web applications with error handling.",
        img: weather,
        //max 6 tech stack
        tech: [
            "HTML",
            "Node.js",
            "Express.js",
            "API integration",
            "CSS",
            "Handlebars.js",
        ],
        source: "https://github.com/Himanshu2622/weather-website",
        demo: "https://weather-website-neon.vercel.app",
    },
    {
        id: 3,
        name: "Banking-Management-System",
        description:
            "The Java-based Banking Management System streamlines account processes, allowing users to create, update, and view details, while also facilitating deposits and withdrawals. It features a dedicated section for managing eco-friendly products with a badge rating system, promoting sustainability through a box return program for recycling and ensuring an intuitive interface for efficient account management.",
        img: bank,
        //max 6 tech stack
        tech: ["Java", "OOPs"],
        source: "https://github.com/Himanshu2622/Banking-Management-System",
        demo: null,
    },
    {
        id: 4,
        name: "Tic-Tac-Toe",
        description:
            "The Tic-Tac-Toe game, developed using Java and Java Swing GUI, offers a modern and visually pleasing user interface. Players take turns placing 'X' or 'O' marks on the 3x3 grid of buttons, with the system dynamically updating the turn indicator. The game features a randomized starting player, visually highlights winning combinations in green, and announces the winner or a draw.",
        img: tiktactoe,
        //max 6 tech stack
        tech: ["Java Swing", "GUI", "Java"],
        source: "https://github.com/Himanshu2622/Tic-Tac-Toe",
        demo: null,
    },
    {
        id: 5,
        name: "PokeDex",
        description:
            "The PokéDEX Web Application, a user-friendly React-based project, enables users to explore and search for Pokémon from a rich dataset containing details about more than 800 Pokémon species in JSON format. This intuitive application boasts a clean user interface, simplifying the process of discovering and exploring comprehensive information about Pokémon.",
        img: pokedex,
        //max 6 tech stack
        tech: ["React", "JSON", "CSS"],
        source: "https://github.com/Himanshu2622/pokeDEX",
        demo: "https://himanshu2622.github.io/pokeDEX",
    },
];
