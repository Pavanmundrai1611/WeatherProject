document.addEventListener("DOMContentLoaded", function () {
  // Slideshow Images
  const images = [
    {
      src: "https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_1280.jpg",
      alt: "Dark clouds"
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/12/14/04/08/thunderbolt-1905603_1280.png",
      alt: "Lightning"
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg",
      alt: "Rainy day"
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/04/27/05/09/tree-2264494_1280.jpg",
      alt: "Sunny day"
    },
    {
      src: "https://media.istockphoto.com/id/532984013/photo/man-with-umbrella-during-snow-storm.webp?b=1&s=612x612&w=0&k=20&c=I1kZFxohr-Yy4pA8WG8NgMDuugl5Hclj8jaK8_1oG90=",
      alt: "Snowstorm"
    }
  ];

  const galleryImages = [
    {
      name: "Sunny",
      src: "https://media.istockphoto.com/id/917178010/photo/road-panorama-on-sunny-spring-day.webp?b=1&s=612x612&w=0&k=20&c=anQsNmwLQW3AufKef-2tRvkROdlH83oOexlW_FUrVnk=",
      description: "A beautiful and bright day with clear blue skies and abundant sunshine.",
      photographer: "ElenaR"
    },
    {
      name: "Cloudy",
      src: "https://cdn.pixabay.com/photo/2014/11/16/15/15/field-533541_1280.jpg",
      description: "A gray and overcast sky with thick clouds blocking the sun.",
      photographer: "Free-Photos"
    },
    {
      name: "Rainy",
      src: "https://media.istockphoto.com/id/105934727/photo/rain.webp?b=1&s=612x612&w=0&k=20&c=bkkJDl6daKVNZU3ISNfvaNLEeJQEziUCHPlyxhzWc-8=",
      description: "Drops of rain falling from the sky, creating a soothing and calming atmosphere.",
      photographer: "gorodenkoff"
    },
    {
      name: "Snowy",
      src: "https://cdn.pixabay.com/photo/2021/02/04/13/28/bird-5981360_1280.jpg",
      description: "A magical winter scene with the landscape covered in a glistening layer of snow.",
      photographer: "janeb13"
    },
    {
      name: "Windy",
      src: "https://media.istockphoto.com/id/1155030342/photo/dog-travel-by-car.webp?b=1&s=612x612&w=0&k=20&c=w6JDZ7VW0GDehy2n2eZE0MBaI_QEk4mzr_H5U1z0Mv4=",
      description: "Trees swaying in the wind as gusts create a lively and energetic atmosphere.",
      photographer: "GRUZOVICHEK"
    },
    {
      name: "Foggy",
      src: "https://cdn.pixabay.com/photo/2021/03/08/17/08/fog-6079632_1280.jpg",
      description: "A mysterious and ethereal landscape enveloped in a thick blanket of fog.",
      photographer: "ractapopulous"
    },
    {
      name: "Stormy",
      src: "https://cdn.pixabay.com/photo/2015/09/05/20/07/cabin-924958_1280.jpg",
      description: "Dark clouds, heavy rain, and flashes of lightning during a powerful storm.",
      photographer: "ElisaRiva"
    },
    {
      name: "Hailstorm",
      src: "https://cdn.pixabay.com/photo/2016/08/23/12/53/hailstone-1614239_1280.jpg",
      description: "Ice pellets falling from the sky in a hailstorm, creating a unique and dramatic scene.",
      photographer: "Efraimstochter"
    },
    {
      name: "Overcast",
      src: "https://cdn.pixabay.com/photo/2017/09/29/13/36/river-2799103_1280.jpg",
      description: "A gloomy and gray sky, casting a muted light over the landscape.",
      photographer: "Walkerssk"
    },
    {
      name: "Thunderstorm",
      src: "https://cdn.pixabay.com/photo/2016/11/18/21/32/dark-1836972_1280.jpg",
      description: "An intense display of lightning and thunder that lights up the night sky.",
      photographer: "andreas160578"
    }
  ];
  



  const imgElement = document.getElementById("imgdisp");
  const smallGalleryContainer = document.querySelector(".small-gallery-container");
  let selectedSmallGalleryIndex = 0;
  
  function showImage(index) {
    imgElement.src = images[index].src;
    imgElement.alt = images[index].alt;
  }

  function updateSelectedSmallGalleryItem(index) {
    const smallGalleryItems = document.querySelectorAll(".small-gallery-item");
    smallGalleryItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  }

  // Populate small gallery with images and add click event listener
  images.forEach((image, index) => {
    const smallGalleryItem = document.createElement("div");
    smallGalleryItem.classList.add("small-gallery-item");
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    smallGalleryItem.appendChild(img);

    smallGalleryItem.addEventListener("click", () => {
      showImage(index);
      selectedSmallGalleryIndex = index;
      updateSelectedSmallGalleryItem(selectedSmallGalleryIndex);
    });

    smallGalleryContainer.appendChild(smallGalleryItem);
  });

  // Display the first image and highlight the corresponding small gallery item
  showImage(0);
  updateSelectedSmallGalleryItem(selectedSmallGalleryIndex);


  function createGalleryItem(image) {
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;

    const description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = `
            <h2>${image.name}</h2>
            <h4>${image.description}</h4>
            <p>Photographer: ${image.photographer}</p>
        `;

    galleryItem.appendChild(img);
    galleryItem.appendChild(description);
    return galleryItem;
}

// Populate the gallery with images and descriptions
const imageGrid = document.querySelector(".image-grid");
galleryImages.forEach(image => {
    const galleryItem = createGalleryItem(image);
    imageGrid.appendChild(galleryItem);
});



});