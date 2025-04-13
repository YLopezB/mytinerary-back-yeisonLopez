import 'dotenv/config.js'
import "../../config/database.js";
import Itinerary from '../Itinerary.js';

let itineraries = [
    {
      city: "67dbb7c1a478cf3da85bf092",
      name: "Central Park Adventure",
      photo: "http://4.bp.blogspot.com/-EITP5vgK8yw/UOvEAgc4VKI/AAAAAAAAB_k/ypiY1hXMJOo/s1600/Snowfall+Central+Park+New+York.jpg",
      userName: "explorer_jane",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 120,
      duration: 3,
      likes: 54,
      hashtags: ["#nature", "#citywalk", "#newyork"]
    },
    {
      city: "67dbb7c1a478cf3da85bf092",
      name: "Skyline Night Tour",
      photo: "https://dmoelb813y7lv.cloudfront.net/eventcruisesnyc/uploads/products/small/6753769b71ddd_753FullCoverBus_11142023_06671_1_1.jpg",
      userName: "travelmax",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 150,
      duration: 2,
      likes: 89,
      hashtags: ["#nightlife", "#views", "#urban"]
    },
    {
      city: "67dbb7c1a478cf3da85bf095",
      name: "Opera House Secrets",
      photo: "https://c.pxhere.com/photos/e5/24/vienna_opera_house_austria_wien_theater_vienna_opera_house-831657.jpg!d",
      userName: "aussie_adventurer",
      userPhoto: "https://i.pinimg.com/736x/92/6d/48/926d4827bc7b914de6692e8cdd9a1bec.jpg",
      price: 100,
      duration: 1,
      likes: 34,
      hashtags: ["#architecture", "#culture", "#sydney"]
    },
    {
      city: "67dbb7c1a478cf3da85bf095",
      name: "Surf & Sun at Bondi",
      photo: "https://c4.wallpaperflare.com/wallpaper/423/730/349/australia-queensland-gold-coast-beautiful-sunset-wallpaper-preview.jpg",
      userName: "surfbro",
      userPhoto: "https://i.pinimg.com/736x/92/6d/48/926d4827bc7b914de6692e8cdd9a1bec.jpg",
      price: 80,
      duration: 2,
      likes: 76,
      hashtags: ["#surf", "#beachlife", "#australia"]
    },
    {
      city: "67dbb7c1a478cf3da85bf098",
      name: "Moscow Metro Art Tour",
      photo: "https://images.myguide-cdn.com/moscow/companies/moscow-metro-2-hour-tour/large/moscow-metro-2-hour-tour-524275.jpg",
      userName: "anna_rus",
      userPhoto: "https://i.pinimg.com/736x/92/6d/48/926d4827bc7b914de6692e8cdd9a1bec.jpg",
      price: 50,
      duration: 1,
      likes: 48,
      hashtags: ["#history", "#metro", "#art"]
    },
    {
      city: "67dbb7c1a478cf3da85bf098",
      name: "Kremlin Walkthrough",
      photo: "https://wallpapercave.com/wp/wp2499410.jpg",
      userName: "ivan_explorer",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 90,
      duration: 2,
      likes: 60,
      hashtags: ["#kremlin", "#russia", "#explore"]
    },
    {
      city: "67dbb7c1a478cf3da85bf096",
      name: "Carnaval Spirit Tour",
      photo: "https://imagenes.heraldo.es/files/image_1920_1080/uploads/imagenes/2024/02/12/carnival-parade-at-th-48717810.jpeg",
      userName: "sambaqueen",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 70,
      duration: 1,
      likes: 90,
      hashtags: ["#carnaval", "#brazil", "#dance"]
    },
    {
      city: "67dbb7c1a478cf3da85bf096",
      name: "Copacabana Stroll",
      photo: "https://wallpaperaccess.com/full/2735723.jpg",
      userName: "beachlover",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 65,
      duration: 2,
      likes: 45,
      hashtags: ["#beach", "#walk", "#sunset"]
    },
    {
      city: "67dbb7c1a478cf3da85bf096",
      name: "Sugarloaf Viewpoints",
      photo: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/sugar-loaf-from-cristo-redentor-rupali-kumbhani.jpg",
      userName: "mountainman",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 85,
      duration: 3,
      likes: 73,
      hashtags: ["#hiking", "#view", "#adventure"]
    },
    {
      city: "67dbb7c1a478cf3da85bf097",
      name: "London Classics",
      photo: "https://cdn.pixabay.com/photo/2016/12/11/23/26/london-1900570_960_720.jpg",
      userName: "ukwalker",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 110,
      duration: 2,
      likes: 64,
      hashtags: ["#bigben", "#london", "#history"]
    },
    {
      city: "67dbb7c1a478cf3da85bf097",
      name: "Night River Cruise",
      photo: "https://c.pxhere.com/photos/9e/3a/london_eye_river_thames_houses_parliament_big_ben-461446.jpg!d",
      userName: "riverlover",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 95,
      duration: 1,
      likes: 80,
      hashtags: ["#thames", "#lights", "#boat"]
    },
    {
      city: "67dbb7c1a478cf3da85bf09a",
      name: "Burj Khalifa Experience",
      photo: "https://c1.wallpaperflare.com/preview/1013/622/495/burj-al-arab-largest-hotel-in-dubai-tallest-hotel-dubai.jpg",
      userName: "luxtraveler",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 200,
      duration: 1,
      likes: 120,
      hashtags: ["#dubai", "#skyline", "#luxury"]
    },
    {
      city: "67dbb7c1a478cf3da85bf09a",
      name: "Desert Safari Ride",
      photo: "https://cdn.pixabay.com/photo/2014/05/07/11/07/caravan-339564_640.jpg",
      userName: "dunesdude",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 150,
      duration: 3,
      likes: 95,
      hashtags: ["#safari", "#desert", "#adrenaline"]
    },
    {
      city: "67dbb7c1a478cf3da85bf09b",
      name: "Tango Night Buenos Aires",
      photo: "https://www.publicdomainpictures.net/pictures/10000/nahled/tango-dinner-theater-252712881899481B7y.jpg",
      userName: "argmusic",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 60,
      duration: 1,
      likes: 39,
      hashtags: ["#tango", "#music", "#argentina"]
    },
    {
      city: "67dbb7c1a478cf3da85bf09b",
      name: "Cultural Center Tour",
      photo: "https://ak3.picdn.net/shutterstock/videos/19845133/thumb/1.jpg",
      userName: "ba_guide",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 55,
      duration: 2,
      likes: 44,
      hashtags: ["#culture", "#art", "#palermo"]
    },
    {
      city: "67dbb7c1a478cf3da85bf09c",
      name: "Monserrate Hiking Day",
      photo: "https://ak.picdn.net/shutterstock/videos/1027182917/thumb/1.jpg",
      userName: "mountainguide",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 70,
      duration: 3,
      likes: 58,
      hashtags: ["#bogota", "#hike", "#nature"]
    },
    {
      city: "67dbb7c1a478cf3da85bf09c",
      name: "Bogotá Street Food Tour",
      photo: "https://cdn.getyourguide.com/img/tour/647f7aa019cdc.jpeg/148.jpg",
      userName: "foodiejohn",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 40,
      duration: 1,
      likes: 67,
      hashtags: ["#food", "#culture", "#explore"]
    },
    {
      city: "67dbb7c1a478cf3da85bf09d",
      name: "Medellín Innovation Walk",
      photo: "https://180degreesmedellin.com/wp-content/uploads/2023/05/180-degrees-medellin-7.jpg",
      userName: "startupguy",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 90,
      duration: 2,
      likes: 49,
      hashtags: ["#innovation", "#culture", "#medellin"]
    },
    {
      city: "67dbb7c1a478cf3da85bf09d",
      name: "Peñol Rock Climb",
      photo: "https://cerroverdemirador.com/wp-content/uploads/2020/10/foto-getty-images.jpg",
      userName: "adventure_climber",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 85,
      duration: 3,
      likes: 59,
      hashtags: ["#climb", "#view", "#rock"]
    },
    {
      city: "67dbb7c1a478cf3da85bf093",
      name: "Paris Lights Night Tour",
      photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg",
      userName: "francophile",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 110,
      duration: 2,
      likes: 78,
      hashtags: ["#paris", "#eiffeltower", "#night"]
    },
    {
      city: "67dbb7c1a478cf3da85bf093",
      name: "Montmartre Artists Walk",
      photo: "https://s-media-cache-ak0.pinimg.com/originals/30/ca/28/30ca2830c06ca79b795987661332bf9f.jpg",
      userName: "artlover",
      userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
      price: 65,
      duration: 1,
      likes: 42,
      hashtags: ["#art", "#walk", "#paris"]
    },
    {
        city: "67dbb7c1a478cf3da85bf094",
        name: "Tokyo Anime & Tech Tour",
        photo: "https://alljapantours.com/acp15/tour15/img15/ph202039085.jpg",
        userName: "otakuworld",
        userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
        price: 130,
        duration: 2,
        likes: 88,
        hashtags: ["#anime", "#technology", "#tokyo"]
      },
      {
        city: "67dbb7c1a478cf3da85bf094",
        name: "Mount Takao Nature Escape",
        photo: "https://www.kcpinternational.com/wp-content/uploads/2021/12/Mount-Takao-trail.jpg",
        userName: "greenwalker",
        userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
        price: 75,
        duration: 3,
        likes: 52,
        hashtags: ["#hiking", "#japan", "#nature"]
      },
      {
        city: "67f50dbc4f1054ea0a443329",
        name: "Bangkok Floating Market",
        photo: "https://www.cuddlynest.com/blog/wp-content/uploads/2022/11/bangkok-floating-markets-wat-sai-floating-market.jpg",
        userName: "thaifoodie",
        userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
        price: 60,
        duration: 1,
        likes: 61,
        hashtags: ["#food", "#market", "#bangkok"]
      },
      {
        city: "67f50dbc4f1054ea0a443329",
        name: "Temples & Tuk Tuk Ride",
        photo: "https://img.freepik.com/premium-photo/tuktuk-thailand-with-temples-background-illustration-style_34683-3629.jpg",
        userName: "tuktuklife",
        userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
        price: 70,
        duration: 2,
        likes: 66,
        hashtags: ["#temples", "#culture", "#tuktuk"]
      },
      {
        city: "67f50dbf4f1054ea0a44332b",
        name: "Beijing Great Wall Trek",
        photo: "https://trekclubs.com/wp-content/uploads/2020/01/banner-2.jpg",
        userName: "wallclimber",
        userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
        price: 140,
        duration: 3,
        likes: 92,
        hashtags: ["#greatwall", "#china", "#hiking"]
      },
      {
        city: "67f50dbf4f1054ea0a44332b",
        name: "Forbidden City Discovery",
        photo: "https://img.freepik.com/premium-photo/forbidden-city-exploration_882186-4627.jpg",
        userName: "historynerd",
        userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
        price: 100,
        duration: 2,
        likes: 74,
        hashtags: ["#beijing", "#culture", "#forbiddencity"]
      },
      {
        city: "67f50dbf4f1054ea0a44332c",
        name: "Jakarta Old Town Walk",
        photo: "https://c2.staticflickr.com/6/5219/5395082101_69b8cdbf46_b.jpg",
        userName: "javaexplorer",
        userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
        price: 55,
        duration: 1,
        likes: 43,
        hashtags: ["#jakarta", "#oldtown", "#history"]
      },
      {
        city: "67f50dbf4f1054ea0a44332c",
        name: "Island Hopping Getaway",
        photo: "https://wallpapers.com/images/hd/island-hopping-beach-vacation-rymqaql7w1jiwz81.jpg",
        userName: "seadreamer",
        userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
        price: 115,
        duration: 3,
        likes: 69,
        hashtags: ["#beach", "#islandlife", "#indonesia"]
      },
      {
        city: "67dbb7c1a478cf3da85bf099",
        name: "Table Mountain Trek",
        photo: "https://images.pexels.com/photos/920038/pexels-photo-920038.jpeg?cs=srgb&dl=pexels-bohlemedia-920038.jpg&fm=jpghttps://example.com/table-mountain.jpg",
        userName: "africanadventure",
        userPhoto: "https://img.freepik.com/vector-premium/imagen-perfil-avatar-hombre-aislada-fondo-imagen-profil-avatar-hombre_1293239-4857.jpg",
        price: 95,
        duration: 2,
        likes: 56,
        hashtags: ["#capetown", "#hike", "#mountain"]
      }
  ]


Itinerary.insertMany(itineraries);
