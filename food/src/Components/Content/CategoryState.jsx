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

  return (
    <>
      <Category
        // data [ {id:3,...}, {id:4,...}, ]
        data={props.data}
        getMap={getMap}
        scrollToId={scrollToId}
        isActiveModal={props.isActiveModal}
        setIsActiveModal={props.setIsActiveModal}
        modalContent={props.modalContent}
        setModalContent={props.setModalContent}
        addProduct={props.addProduct}
        isActiveSubCat={isActiveSubCat}
        setIsActiveSubCat={setIsActiveSubCat}
      />
    </>
  );
};
