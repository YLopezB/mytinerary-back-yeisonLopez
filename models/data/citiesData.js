import 'dotenv/config.js'
import "../../config/database.js";
import City from "../City.js"

let cities = [
    {
        name: "New York",
        country: "United States",
        continent: "North America",
        description: "Known as 'The Big Apple', it is a global financial and cultural center.",
        image: "https://images8.alphacoders.com/684/684141.jpg",
        currency: "US Dollar (USD)",
        language: "English",
        population: 8398748,
        climate: "Humid continental",
        naturalAttractions: ["Central Park", "Hudson River"],
        visaRequirement: true,
        publicTransport: ["Subway", "Buses", "Taxis"],
        timezone: "UTC-5"
    },
    {
        name: "Paris",
        country: "France",
        continent: "Europe",
        description: "The 'City of Light' is famous for its art, gastronomy, and culture.",
        image: "https://s1.1zoom.me/b8048/487/Sky_Evening_France_Eiffel_Tower_Paris_From_above_520603_2560x1440.jpg",
        currency: "Euro (EUR)",
        language: "French",
        population: 2148271,
        climate: "Oceanic",
        naturalAttractions: ["Seine River", "Luxembourg Gardens"],
        visaRequirement: false,
        publicTransport: ["Metro", "RER", "Buses"],
        timezone: "UTC+1"
    },
    {
        name: "Tokyo",
        country: "Japan",
        continent: "Asia",
        description: "A vibrant metropolis blending tradition and modernity.",
        image: "https://assets.vogue.com/photos/5e387ae1be72df00088bf8c8/master/w_2560%2Cc_limit/EEX74X.jpg",
        currency: "Japanese Yen (JPY)",
        language: "Japanese",
        population: 9273000,
        climate: "Humid subtropical",
        naturalAttractions: ["Mount Takao", "Sumida River"],
        visaRequirement: true,
        publicTransport: ["Subway", "Trains", "Buses"],
        timezone: "UTC+9"
    },
    {
        name: "Sydney",
        country: "Australia",
        continent: "Oceania",
        description: "Famous for its Opera House and vibrant harbor.",
        image: "https://wallpapers.com/images/hd/sunset-at-sydney-opera-house-jzkdyfponox4axq1.jpg",
        currency: "Australian Dollar (AUD)",
        language: "English",
        population: 5312163,
        climate: "Subtropical humid",
        naturalAttractions: ["Bondi Beach", "Blue Mountains"],
        visaRequirement: true,
        publicTransport: ["Trains", "Buses", "Ferries"],
        timezone: "UTC+10"
    },
    {
        name: "Rio de Janeiro",
        country: "Brazil",
        continent: "South America",
        description: "Famous for its beaches, Carnival, and Christ the Redeemer.",
        image: "https://landedtravel.com/wp-content/uploads/2020/02/Landed_Travel_Rio_Orange.jpg",
        currency: "Brazilian Real (BRL)",
        language: "Portuguese",
        population: 6718903,
        climate: "Tropical",
        naturalAttractions: ["Sugarloaf Mountain", "Copacabana Beach"],
        visaRequirement: false,
        publicTransport: ["Metro", "Buses", "Trams"],
        timezone: "UTC-3"
    }, 
    {
        name: "London",
        country: "United Kingdom",
        continent: "Europe",
        description: "A historic city with a mix of modern and ancient landmarks.",
        image: "https://eskipaper.com/images/london-1.jpg",
        currency: "British Pound (GBP)",
        language: "English",
        population: 8982000,
        climate: "Temperate oceanic",
        naturalAttractions: ["Hyde Park", "Thames River"],
        visaRequirement: false,
        publicTransport: ["Underground", "Buses", "Taxis"],
        timezone: "UTC+0"
    },
    {
        name: "Moscow",
        country: "Russia",
        continent: "Europe",
        description: "The capital of Russia, known for its Kremlin and Red Square.",
        image: "https://wallpaperaccess.com/full/513653.jpg",
        currency: "Russian Ruble (RUB)",
        language: "Russian",
        population: 11920000,
        climate: "Humid continental",
        naturalAttractions: ["Moskva River", "Gorky Park"],
        visaRequirement: true,
        publicTransport: ["Metro", "Buses", "Trams"],
        timezone: "UTC+3"
    },
    {
        name: "Cape Town",
        country: "South Africa",
        continent: "Africa",
        description: "A stunning coastal city known for Table Mountain and its rich history.",
        image: "https://wallpapers.com/images/hd/cape-town-south-africa-harbour-j6f21nllcmaxsiis.jpg",
        currency: "South African Rand (ZAR)",
        language: "English, Afrikaans",
        population: 433688,
        climate: "Mediterranean",
        naturalAttractions: ["Table Mountain", "Cape of Good Hope"],
        visaRequirement: false,
        publicTransport: ["Buses", "Minibus Taxis"],
        timezone: "UTC+2"
    },
    {
        name: "Dubai",
        country: "United Arab Emirates",
        continent: "Asia",
        description: "A futuristic metropolis known for skyscrapers and luxury shopping.",
        image: "https://www.viajali.com.br/wp-content/uploads/2019/12/dubai-1.jpg",
        currency: "UAE Dirham (AED)",
        language: "Arabic",
        population: 3331420,
        climate: "Desert",
        naturalAttractions: ["Desert Dunes", "Palm Jumeirah"],
        visaRequirement: true,
        publicTransport: ["Metro", "Buses", "Taxis"],
        timezone: "UTC+4"
    },
    {
        name: "Buenos Aires",
        country: "Argentina",
        continent: "South America",
        description: "The vibrant capital of Argentina, known for tango and rich culture.",
        image: "https://wallpaperaccess.com/full/3597667.jpg",
        currency: "Argentine Peso (ARS)",
        language: "Spanish",
        population: 2890000,
        climate: "Humid subtropical",
        naturalAttractions: ["Río de la Plata", "Bosques de Palermo"],
        visaRequirement: false,
        publicTransport: ["Subway", "Buses", "Taxis"],
        timezone: "UTC-3"
    },
    {
        name: "Bogotá",
        country: "Colombia",
        continent: "South America",
        description: "The capital of Colombia, located in the Andes mountains.",
        image: "https://folksvfx.com/wp-content/uploads/resized/2023/09/shutterstock_2023944884-1-1440x800-c-default.jpg",
        currency: "Colombian Peso (COP)",
        language: "Spanish",
        population: 7743955,
        climate: "Oceanic",
        naturalAttractions: ["Monserrate", "Parque Simón Bolívar"],
        visaRequirement: false,
        publicTransport: ["TransMilenio", "Buses", "Taxis"],
        timezone: "UTC-5"
    },
    {
        name: "Medellín",
        country: "Colombia",
        continent: "South America",
        description: "The 'City of Eternal Spring', known for innovation and culture.",
        image: "https://wallpapercave.com/wp/wp3925552.jpg",
        currency: "Colombian Peso (COP)",
        language: "Spanish",
        population: 2569000,
        climate: "Tropical monsoon",
        naturalAttractions: ["Parque Arví", "Piedra del Peñol"],
        visaRequirement: false,
        publicTransport: ["Metro", "Buses", "Trams"],
        timezone: "UTC-5"
    },
    {
        name: "Lima",
        country: "Peru",
        continent: "South America",
        description: "Peru’s capital, known for its rich colonial history and cuisine.",
        image: "https://wallsdesk.com/wp-content/uploads/2017/01/Lima-Wallpapers-HD.jpg",
        currency: "Peruvian Sol (PEN)",
        language: "Spanish",
        population: 9674755,
        climate: "Desert",
        naturalAttractions: ["Costa Verde", "Parque Kennedy"],
        visaRequirement: false,
        publicTransport: ["Metropolitano", "Buses", "Taxis"],
        timezone: "UTC-5"
    },
    {
        name: "Tegucigalpa",
        country: "Honduras",
        continent: "North America",
        description: "The capital of Honduras, surrounded by mountains and rich history.",
        image: "https://diarioroatan.com/wp-content/uploads/2021/08/tegucigalpa-honduras-travel-guide.jpg",
        currency: "Honduran Lempira (HNL)",
        language: "Spanish",
        population: 1120000,
        climate: "Tropical savanna",
        naturalAttractions: ["La Tigra National Park", "El Picacho"],
        visaRequirement: false,
        publicTransport: ["Buses", "Taxis"],
        timezone: "UTC-6"
    },
    {
        name: "Mexico City",
        country: "Mexico",
        continent: "North America",
        description: "The bustling capital of Mexico, rich in history and culture.",
        image: "https://eskipaper.com/images/mexico-city-wallpaper-3.jpg",
        currency: "Mexican Peso (MXN)",
        language: "Spanish",
        population: 9209944,
        climate: "Subtropical highland",
        naturalAttractions: ["Chapultepec Park", "Xochimilco"],
        visaRequirement: false,
        publicTransport: ["Metro", "Buses", "Taxis"],
        timezone: "UTC-6"
    }
]

City.insertMany(cities);