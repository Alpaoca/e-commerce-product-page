import { useState } from "react";
import ProductThumbnail from "../shared/buttons/ProductThumbnail";
import NextButton from "../shared/buttons/NextButton";
import PreviousButton from "../shared/buttons/PreviousButton";
import CloseButton from "../shared/buttons/CloseButton";

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
    const index = productImages.findIndex((img) => img.id === value.id);
    setSelectedImageIndex(index);
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

  const [selectedImageIndex, setSelectedImageIndex] = useState(
    props.selectedImageIndex ? props.selectedImageIndex : 0
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

  const handleNext = () => {
    if (selectedImageIndex + 1 === productImages.length) {
      setSelectedImageIndex(0);
    } else {
      setSelectedImageIndex((prevState: number) => prevState + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex === 0) {
      setSelectedImageIndex(productImages.length - 1);
    } else {
      setSelectedImageIndex((prevState: number) => prevState - 1);
    }
  };

  return (
    <>
      <div
        className={`h-[30rem] w-[25rem] m-[4rem] ${
          props.isPop && "h-[40rem] w-[30rem]"
        }`}
      >
        <div className={`mb-[2rem]`}>
          <div className="relative">
            <img
              onClick={handleEnlargeClick}
              src={productImages[selectedImageIndex].image.large.url}
              className={"rounded-xl cursor-pointer"}
              alt={productImages[selectedImageIndex].name}
            />
            {props.isPop && (
              <>
                <button
                  onClick={handleNext}
                  className="absolute flex items-center justify-center bg-white rounded-full size-[3rem] -right-[1.5rem] top-[14rem]"
                >
                  <NextButton />
                </button>
                <button
                  onClick={handlePrevious}
                  className="absolute flex items-center justify-center bg-white rounded-full size-[3rem] -left-[1.5rem] top-[14rem]"
                >
                  <PreviousButton />
                </button>
              </>
            )}
          </div>
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
              selectedPicture={productImages[selectedImageIndex]}
            />
          ))}
        </div>
      </div>
      {isEnlarged && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80"
          onClick={handleClose}
        >
          <div onClick={handlePropagation} className="relative">
            <button
              onClick={handleClose}
              className="absolute right-[4rem] top-[2rem]"
            >
              <CloseButton />
            </button>
            <ProductImageGallery
              isPop={true}
              selectedImageIndex={selectedImageIndex}
            />
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