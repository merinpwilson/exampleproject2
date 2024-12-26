import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  states= [
    {
      id: 1,
      name: "Kerala",
      image: "https://plus.unsplash.com/premium_photo-1697729600773-5b039ef17f3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2VyYWxhfGVufDB8fDB8fHww",
      description: "Kerala, India's 'God's Own Country,' boasts lush greenery, serene backwaters, vibrant culture, Ayurveda, rich traditions, and scenic hill stations.",
    },
    {
      id: 2,
      name: "Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1642516861459-5550250bf657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5kcmElMjBwcmFkZXNofGVufDB8fDB8fHww",
      description: "Andhra Pradesh, known for Tirupati, rich culture, delicious cuisine, stunning beaches, historic temples, and vibrant Telugu traditions.",
    },
    {
      id: 3,
      name: "Arunachal Pradesh",
      image: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJ1bmFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Arunachal Pradesh, 'Land of Dawn-lit Mountains,' is famous for serene monasteries, breathtaking landscapes, tribal heritage, and lush valleys.",
    },
    {
      id: 4,
      name: "Assam",
      image: "https://media.istockphoto.com/id/2154949133/photo/beautiful-tea-garden.webp?a=1&b=1&s=612x612&w=0&k=20&c=Hjux8yw-99fSrd25hYBkfT-6KmnODKAnbiVlg2xBVzA=",
      description: "Assam is known for tea gardens, the Brahmaputra River, Kaziranga National Park, silk production, and vibrant cultural heritage.",
    },
    {
      id: 5,
      name: "Bihar",
      image: "https://plus.unsplash.com/premium_photo-1697730291496-f1ed760a5f1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmloYXJ8ZW58MHx8MHx8fDA%3D",
      description: "Bihar, the birthplace of Buddhism, is known for Bodh Gaya, ancient Nalanda University, Madhubani art, and vibrant festivals.",
    },
    {
      id: 6,
      name: "Chhattisgarh",
      image: "https://plus.unsplash.com/premium_photo-1691030924664-94108416699e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhdHRpc2dhcmh8ZW58MHx8MHx8fDA%3D",
      description: "Chhattisgarh offers waterfalls, dense forests, tribal culture, ancient temples, unique crafts, and untouched natural beauty.",
    },
    {
      id: 7,
      name: "Goa",
      image: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.webp?a=1&b=1&s=612x612&w=0&k=20&c=B-EJFh_gBK-K1mj2s6S0ug65bM8LOkX7HcE_bTD4nag=",
      description: "Goa is famous for its beaches, vibrant nightlife, Portuguese heritage, seafood, spice plantations, and a laid-back lifestyle.",
    },
    {
      id: 8,
      name: "Gujarat",
      image: "https://images.unsplash.com/photo-1620103142897-e759080cd49d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3VqYXJhdHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Gujarat is known for Gir lions, the Rann of Kutch, vibrant festivals, ancient temples, and its industrial and cultural heritage.",
    },
    {
      id: 9,
      name: "Haryana",
      image: "https://images.unsplash.com/photo-1605469237567-a39930679526?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyeWFuYXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Haryana, the land of agriculture, is known for milk production, historical battles, modern infrastructure, and proximity to Delhi.",
    },
    {
      id: 10,
      name: "Himachal Pradesh",
      image: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fHww",
      description: "Himachal Pradesh offers snow-capped mountains, serene valleys, apple orchards, adventure sports, and ancient monasteries.",
    },
    {
      id: 11,
      name: "Jharkhand",
      image: "https://plus.unsplash.com/premium_photo-1691031429261-aeb324882888?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amhhcmtoYW5kfGVufDB8fDB8fHww",
      description: "Jharkhand, rich in minerals, is home to beautiful waterfalls, tribal culture, dense forests, and spiritual sites like Deoghar.",
    },
    {
      id: 12,
      name: "Karnataka",
      image: "https://media.istockphoto.com/id/506104167/photo/jog-falls-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ixxxzj9u_WVMSgg_CxTVE5IvZogMOaNc-F2EZx2XFN4=",
      description: "Karnataka is known for Bengaluru's IT hub, Mysore Palace, Hampi's ruins, coffee plantations, and scenic Western Ghats.",
    },
    {
      id: 13,
      name: "Madhya Pradesh",
      image: "https://images.unsplash.com/photo-1691225409811-a64942a0596a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFkeWElMjBwcmFkZXNoJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Madhya Pradesh, the heart of India, is known for Khajuraho temples, wildlife parks, ancient caves, and tribal culture.",
    },
    {
      id: 14,
      name: "Maharashtra",
      image: "https://images.unsplash.com/photo-1708867817499-148b23e2603d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFoYXJhc2h0cmElMjB0b3VyaXNtfGVufDB8fDB8fHww",
      description: "Maharashtra is famous for Mumbai, Bollywood, Ajanta caves, forts, vibrant festivals, and the scenic Western Ghats.",
    },
    {
      id: 15,
      name: "Manipur",
      image: "https://plus.unsplash.com/premium_photo-1690527101950-5bc2b81ca773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Manipur, the Jewel of India, is known for Loktak Lake, vibrant festivals, Manipuri dance, and unique crafts and traditions.",
    },
    {
      id: 16,
      name: "Meghalaya",
      image: "https://images.unsplash.com/photo-1731565327099-e92c7b51d21d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVnaGFsYXlhJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1611342178754-8d152a5ba599?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Meghalaya, 'Abode of Clouds,' is renowned for living root bridges, lush greenery, monsoons, and rich cultural traditions.",
    },
    {
      id: 17,
      name: "Mizoram",
      image: "https://plus.unsplash.com/premium_photo-1673415819355-a1022fd53c5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWl6b3JhbSUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D",
      description: "Mizoram is known for picturesque landscapes, bamboo forests, tribal dances, serene lifestyle, and unique cultural heritage.",
    },
    {
      id: 18,
      name: "Nagaland",
      image: "https://images.unsplash.com/photo-1712055196085-bf5fb4198259?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmFnYWxhbmQlMjB0b3VyaXNtfGVufDB8fDB8fHww",
      description: "Nagaland, the 'Land of Festivals,' is famous for its tribal heritage, Hornbill Festival, scenic hills, and vibrant traditions.",
    },
    {
      id: 19,
      name: "Odisha",
      image: "https://plus.unsplash.com/premium_photo-1694475136007-14c4dbf484f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2Rpc2hhJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Odisha is renowned for Jagannath Temple, Konark Sun Temple, Chilika Lake, Odissi dance, and vibrant cultural festivals.",
    },
    {
      id: 20,
      name: "Punjab",
      image: "https://images.unsplash.com/photo-1517427677506-ade074eb1432?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVuamFiJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Punjab, the Land of Five Rivers, is known for Golden Temple, vibrant Bhangra, Punjabi cuisine, and its rich Sikh heritage.",
    },
    {
      id: 21,
      name: "Rajasthan",
      image: "https://plus.unsplash.com/premium_photo-1697730421382-bc8dd92f83ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFqYXN0aGFuJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Rajasthan, the Land of Kings, is famous for forts, palaces, deserts, folk music, and vibrant cultural traditions.",
    },
    {
      id: 22,
      name: "Sikkim",
      image: "https://images.unsplash.com/photo-1724600457405-a7eeabcff6b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2lra2ltJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D",
      description: "Sikkim, a serene Himalayan state, is known for Kanchenjunga, Buddhist monasteries, lush greenery, and vibrant cultural festivals.",
    },
    {
      id: 23,
      name: "Tamil Nadu",
      image: "https://plus.unsplash.com/premium_photo-1697730420879-dc2a8dbaa31f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFtaWwlMjBuYWR1fGVufDB8fDB8fHww",
      description: "Tamil Nadu is known for ancient Dravidian temples, classical arts, vibrant festivals, Tamil cuisine, and scenic hill stations.",
    },
    {
      id: 24,
      name: "Telangana",
      image: "https://images.unsplash.com/photo-1699636250199-2a6998981619?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZW5nYW5hfGVufDB8fDB8fHww",
      description: "Telangana, known for Charminar and Golconda Fort, offers rich heritage, spicy cuisine, and Hyderabad's rapidly growing tech sector.",
    },
    {
      id: 25,
      name: "Tripura",
      image: "https://media.istockphoto.com/id/482818702/photo/country-road-passing-thru-farms.webp?a=1&b=1&s=612x612&w=0&k=20&c=YuyVf8kV8E6Z714qoNy6tUs2yT-FJkpt9IJLZTgsgL0=",
      description: "Tripura, a small northeastern state, is known for ancient temples, tribal culture, lush landscapes, and serene lakes.",
    },
    {
      id: 26,
      name: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1678304601198-485dec27ae05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHV0dGFyJTIwcHJhZGVzaCUyMHRvdXJpc218ZW58MHx8MHx8fDA%3D",
      description: "Uttar Pradesh, home to the Taj Mahal, Varanasi, and historic forts, is a land of spiritual and historical richness.",
    },
    {
      id: 27,
      name: "Uttarakhand",
      image: "https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D",
      description: "Uttarakhand, the Land of Gods, is known for the Himalayas, sacred rivers, spiritual sites, and serene hill stations.",
    },
    {
      id: 28,
      name: "West Bengal",
      image: "https://plus.unsplash.com/premium_photo-1664283661426-c0daf3c67c6d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "West Bengal, home to Kolkata, Darjeeling tea, Sundarbans, and Durga Puja, boasts literary heritage and vibrant arts.",
    }
  ]

  constructor() { }
  getStates()
  {
    return this.states;
  }
  getStatebyId(id:any){
    return this.states.find(state=> state.id== id)
  }
}
