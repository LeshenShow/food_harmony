import { CategoryStyled } from "../../styles/CategoryStyle";
import { FilterAreaStyled } from "../../styles/FilterAreaStyle";
import { FilterArea } from "./FilterArea";
import { Subcategory } from "./Subcategory/Subcategory";
import { useRef, useState } from "react";

export const Category = (props) => {
  const [state, setState] = useState(null);
  const handleClick = (e) => setState(e);

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

  const data = props.data; // [ {id:3,...}, {id:4,...}, ]
  let subcategoryHeaders = new Set();
  data.map((elem) => subcategoryHeaders.add(elem.subcategory));
  subcategoryHeaders = Array.from(subcategoryHeaders); //['Apples', 'Dragonfruites', 'Passionfruites']
  const subcategory = subcategoryHeaders.map((header) => {
    return (
      <Subcategory
        ref={(node) => {
          const map = getMap();
          if (node) {
            map.set(header, node);
          } else {
            map.delete(header);
          }
        }}
        header={header}
        data={data}
        key={header}
        addProduct={props.addProduct}
      />
    );
  });
  const filterArea = subcategoryHeaders.map((elem) => {
    const setActive = state === elem ? "activeFilterSubcategory" : null;
    return (
      <FilterArea
        className={setActive}
        key={elem}
        headersList={elem}
        scrollToId={scrollToId}
        doActive={handleClick}
        state={state}
      />
    );
  });
  return (
    <CategoryStyled className="main">
      <FilterAreaStyled className="FilterAreaStyled">
        {filterArea}
      </FilterAreaStyled>
      <div>{subcategory}</div>
    </CategoryStyled>
  );
};
