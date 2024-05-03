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

function ProductImageGallery(props: any) {
  function handleImageClick(value: ImageDTO) {
    setSelectedImage(value);
  }
  let productImages: ImageDTO[] = [
    {
      id: "1",
      name: "product-1",
      image: {
        small: { id: "1a", url: "./images/image-product-1-thumbnail.jpg" },
        large: { id: "1b", url: "./images/image-product-1.jpg" },
      },
    },
    {
      id: "2",
      name: "product-2",
      image: {
        small: { id: "2-a", url: "./images/image-product-2-thumbnail.jpg" },
        large: { id: "2-b", url: "./images/image-product-2.jpg" },
      },
    },
    {
      id: "3",
      name: "product-3",
      image: {
        small: { id: "3-a", url: "./images/image-product-3-thumbnail.jpg" },
        large: { id: "3-b", url: "./images/image-product-3.jpg" },
      },
    },
    {
      id: "4",
      name: "product-4",
      image: {
        small: { id: "4-a", url: "./images/image-product-4-thumbnail.jpg" },
        large: { id: "4-b", url: "./images/image-product-4.jpg" },
      },
    },
  ];

  const [selectedImage, setSelectedImage] = useState(
    props.selectedImage ? props.selectedImage : productImages[0]
  );
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleEnlargeClick = () => {
    if (!props.isPop) {
      setIsEnlarged((prevState) => !prevState);
    }
  };

  const handleClose = () => {
    setIsEnlarged(false);
  };

  const handlePropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        className={`h-[30rem] w-[25rem] m-[4rem] ${
          props.isPop && "h-[40rem] w-[30rem]"
        }`}
      >
        <div className={`mb-[2rem]`}>
          <img
            onClick={handleEnlargeClick}
            src={selectedImage.image.large.url}
            className={"rounded-xl cursor-pointer"}
            alt={selectedImage.name}
          />
        </div>
        <div
          className={`flex flex-row justify-between ${
            props.isPop && "mx-[2rem]"
          }`}
        >
          {productImages.map((item, index) => (
            <ProductThumbnail
              handlePicture={handleImageClick}
              image={item}
              key={index}
              selectedPicture={selectedImage}
            />
          ))}
        </div>
      </div>
      {isEnlarged && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80"
          onClick={handleClose}
        >
          <div onClick={handlePropagation}>
            <ProductImageGallery isPop={true} selectedImage={selectedImage} />
          </div>
        </div>
      )}
    </>
  );
}

function ProductImage() {
  return (
    <>
      <ProductImageGallery />
    </>
  );
}

export default ProductImage;
