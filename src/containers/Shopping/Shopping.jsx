import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";

const price = {
  product1: 59,
  product2: 89,
  product3: 99,
  product4: 79,
};

class Shopping extends React.Component {
  state = {
    products: {
      product1: 0,
      product2: 0,
      product3: 0,
      product4: 0,
    },
    totalPrice: 0,
  };
  addProductHandler = (type) => {
    const prevCount = this.state.products[type];
    const updatedCount = prevCount + 1;
    const updatedProduct = {
      ...this.state.products,
    };
    updatedProduct[type] = updatedCount;
    const priceAdd = price[type];
    const prevPrice = this.state.totalPrice;
    const newPrice = priceAdd + prevPrice;
    this.setState({ totalPrice: newPrice, products: updatedProduct });
  };

  removeProductHandler = (type) => {
    const prevCount = this.state.products[type];
    const updatedCount = prevCount - 1;
    const updatedProduct = {
      ...this.state.products,
    };
    updatedProduct[type] = updatedCount;
    const priceSub = price[type];
    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice - priceSub;
    this.setState({ totalPrice: newPrice, products: updatedProduct });
  };
  render() {
    return (
      <Wrapper>
        <Controls
          productAdd={this.addProductHandler}
          productRemove={this.removeProductHandler}
          price={this.state.totalPrice}
        />
      </Wrapper>
    );
  }
}

export default Shopping;
