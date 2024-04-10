import { useState } from "react";
import ProductThumbnail from "../shared/buttons/ProductThumbnail";
interface LinkDTO {
  id: string;
  url: string;
}
export interface ImageDTO {
  id: string;
  name: string;
  image: { small: LinkDTO; large: LinkDTO };
}

function ProductPicture() {
  function handlePicture(value: ImageDTO) {
    setSelectedPicture(value);
  }

  let images: ImageDTO[] = [
    {
      id: "1",
      name: "product-1",
      image: {
        small: { id: "1a", url: "/images/image-product-1-thumbnail.jpg" },
        large: { id: "1b", url: "/images/image-product-1.jpg" },
      },
    },
    {
      id: "2",
      name: "product-2",
      image: {
        small: { id: "2-a", url: "images/image-product-2-thumbnail.jpg" },
        large: { id: "2-b", url: "images/image-product-2.jpg" },
      },
    },
    {
      id: "3",
      name: "product-3",
      image: {
        small: { id: "3-a", url: "images/image-product-3-thumbnail.jpg" },
        large: { id: "3-b", url: "images/image-product-3.jpg" },
      },
    },
    {
      id: "4",
      name: "product-4",
      image: {
        small: { id: "4-a", url: "images/image-product-4-thumbnail.jpg" },
        large: { id: "4-b", url: "images/image-product-4.jpg" },
      },
    },
  ];

  const [selectedPicture, setSelectedPicture] = useState(images[0]);

  return (
    <>
      <div className="h-[30rem] w-[25rem] m-[4rem]">
        <div className=" w-fit  mt-[4rem] mb-[2rem]">
          <img
            src={selectedPicture.image.large.url}
            className="h-[25rem] rounded-xl cursor-pointer"
          />
        </div>
        <div className="flex flex-row justify-between">
          {images.map((item, index) => (
            <ProductThumbnail
              handlePicture={handlePicture}
              image={item}
              key={index}
              selectedPicture={selectedPicture}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductPicture;
