/**
 * UM SMART TECHNOLOGIES LTD — minimal storefront
 *
 * Goals (per request):
 * - iPhone + Samsung + Nokia as horizontal rows (swipe left/right)
 * - Real phone photos (official CDN links; optional local download later)
 * - Simple contact: Email + WhatsApp only
 */

const COMPANY = {
  name: "UM SMART TECHNOLOGIES LTD",
  salesEmail: "umsmarttechnologies@outlook.com",
  // Use international format without "+" and spaces for wa.me (example below).
  // User provided: 00447771122999  -> wa.me needs country code without leading 00.
  whatsappE164: "447771122999",
  whatsappDisplay: "+44 777 1122 999",
};

/**
 * Curated SKUs (near last ~5 years, best-effort).
 * You can add/remove items here.
 *
 * Images sources:
 * - Apple: local downloads from apple.com iPhone page + Apple Newsroom images.
 * - Samsung: Samsung US product feed (official CDN) + Wikimedia for older gaps.
 * - Nokia: official HMD Nokia all-phones page (Contentful CDN).
 */
const CATALOG = {
  Apple: [
    // 2025 (latest)
    { model: "iPhone 17 Pro Max", imageUrl: "assets/phones/apple-iphone-17-pro.jpg" },
    { model: "iPhone 17 Pro", imageUrl: "assets/phones/apple-iphone-17-pro.jpg" },
    { model: "iPhone Air", imageUrl: "assets/phones/apple-iphone-air.jpg" },
    { model: "iPhone 17", imageUrl: "assets/phones/apple-iphone-17.jpg" },

    // 2024
    { model: "iPhone 16 Pro Max", imageUrl: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.og.jpg?202512190714" },
    { model: "iPhone 16 Pro", imageUrl: "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.og.jpg?202512190714" },
    { model: "iPhone 16 Plus", imageUrl: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/tile/Apple-iPhone-16-lineup-240909-lp.jpg.og.jpg?202512190732" },
    { model: "iPhone 16", imageUrl: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/tile/Apple-iPhone-16-lineup-240909-lp.jpg.og.jpg?202512190732" },
    { model: "iPhone 16e", imageUrl: "assets/phones/apple-iphone-16e.jpg" },

    // 2023
    { model: "iPhone 15 Pro Max", imageUrl: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.og.jpg?202512190731" },
    { model: "iPhone 15 Pro", imageUrl: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.og.jpg?202512190731" },
    { model: "iPhone 15 Plus", imageUrl: "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/tile/Apple-iPhone-15-lineup-hero-230912.jpg.og.jpg?202512190711" },
    { model: "iPhone 15", imageUrl: "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/tile/Apple-iPhone-15-lineup-hero-230912.jpg.og.jpg?202512190711" },

    // 2022
    { model: "iPhone 14 Pro Max", imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907.jpg.og.jpg?202512190808" },
    { model: "iPhone 14 Pro", imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907.jpg.og.jpg?202512190808" },
    { model: "iPhone 14 Plus", imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.og.jpg?202512190712" },
    { model: "iPhone 14", imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907.jpg.og.jpg?202512190712" },

    // 2021
    { model: "iPhone 13 Pro Max", imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_design_09142021.jpg.og.jpg?202512190731" },
    { model: "iPhone 13 Pro", imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_design_09142021.jpg.og.jpg?202512190731" },
    { model: "iPhone 13", imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_design_09142021.jpg.og.jpg?202512190731" },
    { model: "iPhone 13 mini", imageUrl: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_design_09142021.jpg.og.jpg?202512190731" },
  ],
  Samsung: [
    // Galaxy S (latest ~5 years)
    { model: "Galaxy S25 Ultra", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/2501/gallery/us-galaxy-s25-s938-536277-sm-s938uzgaxaa-544888284?$PD_GALLERY_PNG$" },
    { model: "Galaxy S25+", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/2501/gallery/us-galaxy-s25-s936-536279-sm-s936uzdaxaa-544888391?$PD_GALLERY_PNG$" },
    { model: "Galaxy S25", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm-s931uzsaatt/gallery/us-galaxy-s25-s931-551170-551170-sm-s931uzsaatt-548476242?$PD_GALLERY_PNG$" },
    { model: "Galaxy S25 Edge", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm-s937uzsexau/gallery/us-galaxy-s25-edge-s937-sm-s937uzsexau-547158917?$PD_GALLERY_PNG$" },
    { model: "Galaxy S25 FE", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm-s731ulbaxaa/gallery/us-galaxy-s25-fe-sm-s731-sm-s731ulbaxaa-548773420?$PD_GALLERY_PNG$" },

    { model: "Galaxy S24 Ultra", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5s928uzkexaa/gallery/us-galaxy-s24-s928-562376-sm5s928uzkexaa-548727674?$PD_GALLERY_PNG$" },
    { model: "Galaxy S24+", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5s926uzkaxaa/gallery/us-galaxy-s24-plus-563944-sm5s926uzkaxaa-548943318?$PD_GALLERY_PNG$" },
    { model: "Galaxy S24", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5s921uzkaxaa/gallery/us-galaxy-s24-563942-sm5s921uzkaxaa-548942581?$PD_GALLERY_PNG$" },
    { model: "Galaxy S24 FE", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5s721uzkaxaa/gallery/us-galaxy-s24-fe-s721-564939-sm5s721uzkaxaa-549103699?$PD_GALLERY_PNG$" },

    { model: "Galaxy S23 Ultra", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5s918uzgaxaa/gallery/us-galaxy-s23-s918-sm5s918uzgaxaa-549145864?$PD_GALLERY_PNG$" },
    { model: "Galaxy S23+", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5s916uzkaxaa/gallery/us-galaxy-s23-s916-sm5s916uzkaxaa-548994892?$PD_GALLERY_PNG$" },
    { model: "Galaxy S23", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5s911uzkaxaa/gallery/us-galaxy-s23-s911-sm5s911uzkaxaa-549150146?$PD_GALLERY_PNG$" },
    { model: "Galaxy S23 FE", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5s711uzaaxaa/gallery/us-galaxy-s23-fe-s711-560462-sm5s711uzaaxaa-548442604?$PD_GALLERY_PNG$" },

    { model: "Galaxy S22 Ultra", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5s908uzkaxaa/gallery/us-galaxy-s22-ultra-s908-sm5s908uzkaxaa-548729500?$PD_GALLERY_PNG$" },
    { model: "Galaxy S22+", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5s906uzkaxaa/gallery/us-galaxy-s22-plus-s906-sm5s906uzkaxaa-548996716?$PD_GALLERY_PNG$" },
    { model: "Galaxy S22", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5s901uzkaxaa/gallery/us-galaxy-s22-s901-sm5s901uzkaxaa-548730024?$PD_GALLERY_PNG$" },

    // 2021 gaps (Wikimedia)
    { model: "Galaxy S21 Ultra", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/GalaxyS21.png/330px-GalaxyS21.png" },
    { model: "Galaxy S21+", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/GalaxyS21.png/330px-GalaxyS21.png" },
    { model: "Galaxy S21", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/GalaxyS21.png/330px-GalaxyS21.png" },
    { model: "Galaxy S21 FE", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/GalaxyS21.png/330px-GalaxyS21.png" },

    // Galaxy Z (latest ~5 years)
    { model: "Galaxy Z Fold7", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/f2507/gallery/us-galaxy-z-fold7-f966-sm-f966ulgaxaa-547827981?$PD_GALLERY_PNG$" },
    { model: "Galaxy Z Fold6", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5f956uzsaxaa/gallery/us-galaxy-z-fold6-f956-560396-560396-sm5f956uzsaxaa-548825818?$PD_GALLERY_PNG$" },
    { model: "Galaxy Z Fold5", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5f946uzkaxaa/gallery/us-galaxy-z-fold5-f946-560464-sm5f946uzkaxaa-548442981?$PD_GALLERY_PNG$" },
    { model: "Galaxy Z Fold4", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Samsung_Galaxy_Z_Fold_4.jpg/330px-Samsung_Galaxy_Z_Fold_4.jpg" },
    { model: "Galaxy Z Fold3", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Galaxy_Z_Fold3_5G.jpg/330px-Galaxy_Z_Fold3_5G.jpg" },

    { model: "Galaxy Z Flip7", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/f2507/gallery/us-galaxy-zflip7-f766-sm-f766uzraxaa-547906111?$PD_GALLERY_PNG$" },
    { model: "Galaxy Z Flip6", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5f741uzsaxaa/gallery/us-galaxy-zflip6-f741-560393-560393-sm5f741uzsaxaa-548821824?$PD_GALLERY_PNG$" },
    { model: "Galaxy Z Flip5", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm5f731uzaaxaa/gallery/us-galaxy-z-flip5-f731-560390-sm5f731uzaaxaa-548406479?$PD_GALLERY_PNG$" },
    { model: "Galaxy Z Flip4", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Front_of_the_Samsung_Galaxy_Z_Flip_4.jpg/330px-Front_of_the_Samsung_Galaxy_Z_Flip_4.jpg" },
    { model: "Galaxy Z Flip3", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Galaxy_Z_Flip3_5G.jpg/330px-Galaxy_Z_Flip3_5G.jpg" },

    // Galaxy A (popular models, last ~5 years)
    { model: "Galaxy A56 5G", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm-a566uzaaxaa/gallery/us-galaxy-a56-5g-sm-a566-sm-a566uzaaxaa-547884231?$PD_GALLERY_PNG$" },
    { model: "Galaxy A55 5G", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Samsung_Galaxy_A55_5G_2024.jpg/330px-Samsung_Galaxy_A55_5G_2024.jpg" },
    { model: "Galaxy A54 5G", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Back_of_the_Samsung_Galaxy_A54_5G.jpg/330px-Back_of_the_Samsung_Galaxy_A54_5G.jpg" },
    { model: "Galaxy A53 5G", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5a/SamsungGalaxyA535G.png" },
    { model: "Galaxy A52", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Samsung-Galaxy-A52-Awesome-White.jpg/330px-Samsung-Galaxy-A52-Awesome-White.jpg" },

    { model: "Galaxy A36 5G", imageUrl: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-a/03132025/SDSAC-8967-SM-A366_Galaxy-A36-5G_Awesome-Black_Front-RGB-1600x1200.jpg?$default-400-jpg$" },
    { model: "Galaxy A35 5G", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Samsung_Galaxy_A35_5G_2024_%281%29.jpg/330px-Samsung_Galaxy_A35_5G_2024_%281%29.jpg" },
    { model: "Galaxy A34 5G", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/%EC%82%BC%EC%84%B1_%EA%B0%A4%EB%9F%AD%EC%8B%9C_A34.jpg/330px-%EC%82%BC%EC%84%B1_%EA%B0%A4%EB%9F%AD%EC%8B%9C_A34.jpg" },
    { model: "Galaxy A33 5G", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Samsung_Galaxy_A33_5G.jpg/330px-Samsung_Galaxy_A33_5G.jpg" },
    { model: "Galaxy A32", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Samsung-Galaxy-A32-2021.jpg" },

    { model: "Galaxy A26 5G", imageUrl: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/galaxy-a/SDSAC-8969-A26-5G_Black_Front_RGB-1600x1200.jpg?$default-400-jpg$" },
    { model: "Galaxy A25 5G", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Samsung_Galaxy_A25_5G_2024.jpg/330px-Samsung_Galaxy_A25_5G_2024.jpg" },
    { model: "Galaxy A24", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/%EC%82%BC%EC%84%B1_%EA%B0%A4%EB%9F%AD%EC%8B%9C_A24.jpg/330px-%EC%82%BC%EC%84%B1_%EA%B0%A4%EB%9F%AD%EC%8B%9C_A24.jpg" },
    { model: "Galaxy A23", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Samsung_Galaxy_A23.jpg/330px-Samsung_Galaxy_A23.jpg" },

    { model: "Galaxy A17 5G", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/us/sm-a176uzkaxaa/gallery/us-galaxy-a17-5g-sm-a176-sm-a176uzkaxaa-550430599?$PD_GALLERY_PNG$" },
    { model: "Galaxy A16 5G", imageUrl: "https://image-us.samsung.com/SamsungUS/home/mobile/phones/12122024/SDSAC-8512-1_A16_5G_Light-Gray_Front-Back-Lockup_RGB-1600x1200.jpg?$default-400-jpg$" },
    { model: "Galaxy A14", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Samsung_Galaxy_A14_5G_2023_model.jpg/330px-Samsung_Galaxy_A14_5G_2023_model.jpg" },
    { model: "Galaxy A13", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Samsung_Galaxy_A13_%28cropped%29.jpg/330px-Samsung_Galaxy_A13_%28cropped%29.jpg" },

    { model: "Galaxy A73 5G", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Samsung_Galaxy_A73_5G_%2809-11-2022%29.jpg/330px-Samsung_Galaxy_A73_5G_%2809-11-2022%29.jpg" },
  ],
  Nokia: [
    // Nokia smartphones (last ~5 years, best-effort)
    { model: "XR21", imageUrl: "assets/phones/nokia-xr21.webp" },
    { model: "XR20", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Nokia_XR20-front_PNr%C2%B01006.jpg/330px-Nokia_XR20-front_PNr%C2%B01006.jpg" },

    // Nokia (official all-phones page)
    { brand: "Nokia", model: "105 (2023)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/1zhzypQGQ61oLNYVCkGFJG/358f274cbd3fcd55f086224e403690a0/nokia-105-charcoal-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "105 (2024)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/3vBBUIuPNJKcn2OmbpiNqG/58439457ecd4e14eea7f79bb76d32e7f/Nokia_105-Black-Front-Int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "105 4G (2023)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/cdVV4SEG3V1y2KN09tf2S/6c99e4861914d5493ca1ad472b765fa6/nokia-105_4G-charcoal-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "105 4G (2024)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/7rsYp4b4n2zF8AJZCtr9q4/cb48334ea13d7310df5f868cfa410cc4/Nokia_105_4G-Black-Front-Int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "105 C (2023)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/2tB9lMDNQcEMjhctYCEpXJ/5ec9e3b9bed792b19e3c2f3726e229b2/nokia-105-charcoal-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "106 (2023)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/7PVDb3sAFbtksm44b4HhF/59c5fe52a6a45ac582fc92a3f6dde552/nokia-106-charcoal-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "110 (2022)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/19PNtpPqMWLDdjokq0YpO5/0f53b68f5c809b900b348f6b2a38214f/nokia-110-charcoal-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "110 (2023)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/1qoTqYxWFvhChvzn2Pk3uu/5c83c91bc4a84821dc82893102cb7f7a/nokia-110-charcoal-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "110 4G (2023)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/Wvs2HhcVe0Oil0ZG9aHMQ/8ff1107c1fe2e4859609c0279503019e/nokia-110_4G-midnight_black-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "110 4G (2024)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/6qwzJSMawedt867V4ctg58/ffa6286b552228ee13862e7498a10d79/Nokia_110_4G-Titanium-Front-Int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "130 (2023)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/5XNcZlJ9ERf2HngaL9gASZ/4f43f2e622152e3a482f65355c6a2acd/nokia-103-Dark_Blue-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "130 Music", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/4gbQIsBDT947STJwZAMH3D/353f462bf400daeb6d28e2a6f75d00a6/Nokia_130_Music-DarkGrey-Front-INT.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "150 (2023)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/3i6bCzjRwWrbhEdeQRQR7o/48ae1dfb5337a0e228a8d8f405483e21/nokia-150-Black-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "150 Music", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/7AyOZLrJa2E6p3Iz3CwZYS/998a09b66e1d8a188ec46e48fd217aeb/Nokia_150_Music-DarkGrey-Front-INT.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "215 4G (2024)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/3gXHy5SUAwYrWRK8gvqIY4/6d71a6930dd005996d7160dc50eb4e69/Nokia-215_4G-2024-Black-Front-Int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "220 4G (2024)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/3gXHy5SUAwYrWRK8gvqIY4/6d71a6930dd005996d7160dc50eb4e69/Nokia-215_4G-2024-Black-Front-Int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "225 4G (2024)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/1LKcjgwsJtrKELIQfdsAYr/969d0ff2aca89b3903e036b8dd2a885b/Nokia-225_4G-2024-Pink-Front-Int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "230 (2024)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/6SUTwVqeaUvJ8zONJWHaxx/4280e76975cfc23e7e99872f72f431ed/nokia-230-2024-black-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "235 4G", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/3tYkranrzPsFWVGmUuTOAv/83f95e47b5658818dbca5a5965636477/Nokia-235_4G-2024-Blue-Front-Int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "2660 Flip 4G", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/7gPhWSkMjVuaECyio1asW1/62c210439f074c7c9e19c86c0991a2c1/nokia-2660_Flip-Pop_Pink-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "3210 4G", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/3kNw990QcYyctsTnHU5Wee/8f6e5935a43a22d22612713949d879e4/Nokia-3210-2024-Y2KGold-Front-Int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "5310 (2024)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/UDzz3e8iRy7QVUduIIa9C/ed087c143d2249a412da474dbee598ff/nokia-5310-2024-black-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "5710 XA", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/6nn5fd5PXK9jzMTJJAcJDJ/7c1c3d34ed735644b892140e333f8b57/nokia-5710_XpressAudio-black-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "6310 (2024)", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/5SjlwIlcjv0kSI8DuR9rX8/97b585bfc5e21b8e7d667569247d3ee8/nokia-6310-2024-black-front-int.png?w=900&h=900&q=88&fm=webp" },
    { brand: "Nokia", model: "8210 4G", imageUrl: "https://images.ctfassets.net/wcfotm6rrl7u/2TVhivqqrMdUqUIfcnkujH/ba3941eefda6dc0f7c1e681902366379/nokia-8210_4G-sand-front-int.png?w=900&h=900&q=88&fm=webp" },
  ],
};

function $(id) {
  return document.getElementById(id);
}

function buildMailto({ email, subject, body }) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const qs = params.toString();
  return `mailto:${email}${qs ? `?${qs}` : ""}`;
}

function quoteMailtoForProduct(product) {
  const subject = `Quote request — ${product.brand} ${product.model}`;
  const body = [
    `Hello ${COMPANY.name} Sales,`,
    "",
    "Please quote the following:",
    `- Model: ${product.brand} ${product.model}`,
    "- Quantity: ",
    "- Destination/Region: ",
    "",
    "Thanks,",
    "",
  ].join("\n");

  return buildMailto({ email: COMPANY.salesEmail, subject, body });
}

function buildWhatsAppLink(product) {
  let n = String(COMPANY.whatsappE164 || "").replace(/[^\d]/g, "");
  if (n.startsWith("00")) n = n.slice(2);
  n = n.replace(/^0+/, "");
  const lines = [
    `Hello ${COMPANY.name}, I’d like a quote.`,
    product ? `Model: ${product.brand} ${product.model}` : "",
    "Quantity: ",
    "Destination/Region: ",
  ].filter(Boolean);
  const text = lines.join("\n");
  if (!n) return "#";
  return `https://wa.me/${n}?text=${encodeURIComponent(text)}`;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (typeof text === "string") node.textContent = text;
  return node;
}

function buildProduct(brand, entry) {
  const brandName = entry.brand || brand;
  return {
    id: `${brandName}-${entry.model}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    brand: brandName,
    model: entry.model,
    imageUrl: entry.imageUrl,
  };
}

function fallbackSvgDataUrl(brand, model) {
  const b = String(brand || "").slice(0, 24);
  const m = String(model || "").slice(0, 34);
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="900" viewBox="0 0 900 900">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f5f5f7"/>
      <stop offset="1" stop-color="#e9e9ee"/>
    </linearGradient>
  </defs>
  <rect width="900" height="900" rx="56" fill="url(#g)"/>
  <rect x="60" y="60" width="780" height="780" rx="44" fill="#ffffff" opacity="0.55"/>
  <text x="90" y="170" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial" font-size="44" fill="#111111" font-weight="700">${b}</text>
  <text x="90" y="235" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial" font-size="32" fill="#555555">${m}</text>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
function buildCard(product) {
  const btn = el("button", "p-card");
  btn.type = "button";
  btn.setAttribute("aria-label", `${product.brand} ${product.model} — get quote`);
  btn.addEventListener("click", () => openQuoteModal(product));

  const media = el("div", "p-media");
  const img = el("img", "p-img");
  img.loading = "lazy";
  img.decoding = "async";
  img.alt = `${product.brand} ${product.model}`;
  img.src = product.imageUrl || fallbackSvgDataUrl(product.brand, product.model);
  img.addEventListener("error", () => {
    img.src = fallbackSvgDataUrl(product.brand, product.model);
  }, { once: true });
  media.appendChild(img);

  const meta = el("div", "p-meta");
  const brand = el("div", "p-brand", product.brand);
  meta.appendChild(brand);

  const name = el("h3", "p-name", product.model);
  const cta = el("div", "p-cta", "Get quote →");

  btn.append(media, meta, name, cta);
  return btn;
}

function renderRow(containerId, brand) {
  const root = $(containerId);
  if (!root) return;

  const items = (CATALOG[brand] || []).map((e) => buildProduct(brand, e));
  root.innerHTML = "";

  if (items.length === 0) {
    root.appendChild(el("div", "empty", "No products configured."));
    return;
  }

  items.forEach((p) => root.appendChild(buildCard(p)));
}

function openQuoteModal(product) {
  const dialog = $("quoteModal");
  if (!dialog) return;

  const title = $("quoteTitle");
  const sub = $("quoteSub");
  const emailLink = $("quoteEmailLink");
  const emailValue = $("quoteEmailValue");
  const waLink = $("quoteWhatsAppLink");
  const waValue = $("quoteWhatsAppValue");

  if (title) title.textContent = "Get a quote";
  if (sub) {
    sub.textContent = product
      ? `For: ${product.brand} ${product.model}`
      : "Contact us via email or WhatsApp.";
  }

  if (emailValue) emailValue.textContent = COMPANY.salesEmail;
  if (waValue) waValue.textContent = COMPANY.whatsappDisplay || COMPANY.whatsappE164;

  if (emailLink) {
    emailLink.href = product ? quoteMailtoForProduct(product) : buildMailto({ email: COMPANY.salesEmail });
  }
  if (waLink) {
    waLink.href = buildWhatsAppLink(product);
  }

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    // Fallback for browsers without <dialog>
    window.location.hash = "#contact";
  }
}

function wireContact() {
  const emailLink = $("emailLink");
  const whatsappLink = $("whatsappLink");
  const whatsappValue = $("whatsappValue");

  const subject = "Quote request — model — qty";
  const body = [
    `Hello ${COMPANY.name} Sales,`,
    "",
    "Please quote the following:",
    "- Models:",
    "- Quantities:",
    "- Destination/Region:",
    "",
    "Thanks,",
    "",
  ].join("\n");

  const mailto = buildMailto({ email: COMPANY.salesEmail, subject, body });
  if (emailLink) {
    emailLink.href = mailto;
    const value = emailLink.querySelector(".contact-pill-value");
    if (value) value.textContent = COMPANY.salesEmail;
  }

  if (whatsappValue) whatsappValue.textContent = COMPANY.whatsappDisplay || COMPANY.whatsappE164;
  if (whatsappLink) whatsappLink.href = buildWhatsAppLink();
}

document.addEventListener("DOMContentLoaded", () => {
  wireContact();
  renderRow("iphoneRow", "Apple");
  renderRow("samsungRow", "Samsung");
  renderRow("nokiaRow", "Nokia");

  const y = $("copyrightYear");
  if (y) y.textContent = String(new Date().getFullYear());
});

