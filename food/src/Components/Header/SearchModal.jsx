import {
  SearchFindProductStyled,
  SearchResultStyled,
} from "../../styles/HeaderStyles/SearchStyle";

export const SearchModal = (props) => {
  const changeVisible = () => props.setIsVisible(false);

  const filterData = props.data
    .filter(
      (elem) =>
        elem.name.toLowerCase().includes(props.text) && props.text.length > 2
    )
    .map((elem) => (
      <FindProduct
        key={elem.id}
        product={elem}
        setIsActiveModal={props.setIsActiveModal}
        setModalContent={props.setModalContent}
        modalContent={props.modalContent}
        addProduct={props.addProduct}
      />
    ));
  return (
    <SearchResultStyled
      className={`filterData`}
      onClick={changeVisible}
      onMouseLeave={changeVisible}
    >
      {filterData}
    </SearchResultStyled>
  );
};

export const FindProduct = (props) => {
  const product = props.product;
  return (
    <SearchFindProductStyled
      className="findProduct"
      onClick={() => {
        props.setModalContent(product);
        props.setIsActiveModal(true);
      }}
    >
      {product.category}
      {product.id}
      {product.name}
    </SearchFindProductStyled>
  );
};
