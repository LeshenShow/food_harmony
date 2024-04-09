import { CategoryStyled } from "../../styles/CategoryStyle";
import { FilterAreaStyled } from "../../styles/FilterAreaStyle";
import { FilterArea } from "./FilterArea";
import { ProductModal } from "./Subcategory/Product/ProductModal";
import { Subcategory } from "./Subcategory/Subcategory";

export const Category = (props) => {
  let subcategoryHeaders = new Set();
  props.data.map((elem) => subcategoryHeaders.add(elem.subcategory));
  subcategoryHeaders = Array.from(subcategoryHeaders); //['Apples', 'Dragonfruites', 'Passionfruites']
  const subcategory = subcategoryHeaders.map((header) => {
    return (
      <Subcategory
        ref={(node) => {
          const map = props.getMap();
          console.log(node);
          if (node) {
            map.set(header, node);
          } else {
            map.delete(header);
          }
        }}
        header={header}
        data={props.data}
        key={header}
        addProduct={props.addProduct}
        setIsActiveModal={props.setIsActiveModal}
        setModalContent={props.setModalContent}
      />
    );
  });
  const filterArea = subcategoryHeaders.map((elem) => {
    const setActive =
      props.isActiveSubCat === elem ? "activeFilterSubcategory" : null;
    return (
      <FilterArea
        className={setActive}
        key={elem}
        headersList={elem}
        scrollToId={props.scrollToId}
        setIsActiveSubCat={props.setIsActiveSubCat}
        state={props.state}
      />
    );
  });
  return (
    <CategoryStyled className="main" id="mainContent">
      <FilterAreaStyled className="FilterAreaStyled">
        {filterArea}
      </FilterAreaStyled>
      <div>
        {props.isActiveModal ? (
          <ProductModal
            setIsActiveModal={props.setIsActiveModal}
            modalContent={props.modalContent}
            addProduct={props.addProduct}
          />
        ) : null}
      </div>
      <div>{subcategory}</div>
    </CategoryStyled>
  );
};
