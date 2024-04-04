import { Category } from "./Category";
import { useRef, useState } from "react";

export const CategoryState = (props) => {
  const [isActiveSubCat, setIsActiveSubCat] = useState(null);

  const headerRef = useRef(null);
  const scrollToId = (id) => {
    const map = getMap();
    const node = map.get(id);
    node.scrollIntoView({
      behavior: "smooth",
    });
  };
  const getMap = () => {
    if (!headerRef.current) {
      headerRef.current = new Map();
    }
    return headerRef.current;
  };

  const [isActiveModal, setIsActiveModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  const changeModalContent = (product) => {
    setModalContent(product);
  };
  return (
    <>
      <Category
        // data [ {id:3,...}, {id:4,...}, ]
        data={props.data}
        getMap={getMap}
        scrollToId={scrollToId}
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
        modalContent={modalContent}
        changeModalContent={changeModalContent}
        addProduct={props.addProduct}
        isActiveSubCat={isActiveSubCat}
        setIsActiveSubCat={setIsActiveSubCat}
      />
    </>
  );
};
