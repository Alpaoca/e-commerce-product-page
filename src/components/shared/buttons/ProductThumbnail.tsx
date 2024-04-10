import { ImageDTO } from "../../layout/ProductPicture";

interface Props {
  image: ImageDTO;
  selectedPicture: ImageDTO;
  // eslint-disable-next-line no-unused-vars
  handlePicture: (image: ImageDTO) => void;
}

function ProductThumbnail(props: Props) {
  return (
    <>
      <img
        src={props.image.image.small.url}
        className={`cursor-pointer rounded hover:opacity-65 box-border border-2 size-20 ${
          props.selectedPicture.id === props.image.id
            ? "border-orange opacity-45"
            : "border-transparent"
        } `}
        onClick={() => props.handlePicture(props.image)}
      />
    </>
  );
}

export default ProductThumbnail;
