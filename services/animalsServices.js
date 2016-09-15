angular.module("animalFarm").service("animalsService", function(){


  this.animalInfo = [
  {
    id: 1,
    animal: "Bear",
    desc: "Bears are one of the most majestic creatures in the animal kingdom. They come in a variety of breeds, which include: Brown, Black, Grizzly, Sloth, Polar, Panda, and many others. They may be fluffy, but don't misinterpret their cuddliness for lack of ferocity.",
    diet: "Berries, Fish",
    trivia: "Teddy bears were named after Theodore Roosevelt",

  },

  {
    id: 2,
    animal: "Big Cats",
    desc: "Big Cats is an informal term for the four largest members of the entire Panthera Genus. The family includes: Lions, Tigers, Jaguars, Leopards, and Snow Leopards. Big cats are apex predators and enjoy life in the top of the food chain in their respective areas.",
    diet: "Meat",
    trivia: "The Snow Leopard is the only member of this family that cannot roar."


  },
  {
    id: 3,
    animal: "Deer",
    desc: "Deer is a mammal family that have a lot of animals that are classified under it's family tree. Different animals in this family includes: Elk, Moose, Deer, Reindeer, Musk Deer, etc... ",
    diet: "Vegetation",
    trivia: "Tufted Deer, Muntjacs and the Water Deer actually have tusks."
  },
  {
    id: 4,
    animal: "Dog",
    desc: "Dogs make great pets. Some people may not enjoy the company of dogs because of allergic reasons, this is the only excuse to not like dogs... THE ONLY REASON, unless the dog is a chihuahua. If the dog is a chihuahua, then it is okay to not like that certain dog. ",
    diet: "Vegetables, Grains, Protein",
    trivia: "In Jewish Law, owners are required to feed their dog before themselves."
  },
  {
    id: 5,
    animal: "Red Panda",
    desc: "Red Pandas are the greatest animals on earth. All they want to do is hang out, have fun, and climb on trees. They are adorable and can make anyone smile, unless you're cold hearted. They are great tree climbers and look hilarious when eating funny food.",
    diet: "Bamboo, eggs, birds, and insects",
    trivia: "They are not related to Bears or Raccoons. They have been classified in its own family called Ailuridae."
  },
  {
    id: 6,
    animal: "Chicken",
    desc: "Chicken have been made popular as a source of food(through their meat and eggs) and as pets. It is one of the most popular domesticated animal, with a population of around 19 billion worldwide. There are numerous varieties of chickens that range in size, color, and temperament.",
    diet: "Grains",
    trivia: "The Gallic Rooster is the National Animal of France."
  }
]

this.welcomeImage = ["https://hd.unsplash.com/photo-1445758184816-a0ad8e837278",
 "https://hd.unsplash.com/photo-1445503058969-7ae8721cd8c1",
 "https://hd.unsplash.com/photo-1422363119751-1d2b703a7546",
 "https://hd.unsplash.com/photo-1461744498292-5df270c6ba06",
 "https://hd.unsplash.com/photo-1471469678089-67f27c6ca4f4",
 "https://hd.unsplash.com/photo-1422565096762-bdb997a56a84",
 "https://hd.unsplash.com/photo-1419216649355-c0547590470c",
 "https://hd.unsplash.com/photo-1425082661705-1834bfd09dca"]


this.video = [
  "./img/background/cganimals.mp4"
]




})
