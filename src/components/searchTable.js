/*
 * @Description: React 哲学案例
 * @Autor: Bowen
 * @Date: 2021-09-07 11:40:34
 * @LastEditors: Bowen
 * @LastEditTime: 2021-09-07 15:12:16
 */

import React from "react";
// 分类 Sporting Goods 行
class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <td colSpan="2">{this.props.category}</td>
      </tr>
    );
  }
}
// 产品行 Football	$49.99
class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? product.name : <span style={{ color: "red" }}>{product.name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}
//  table主体  表头  Name	Price  表体使用 ProductCategoryRow + ProductRow
class ProductTable extends React.Component {
  render() {
    const { searchStr, onlyStocked } = this.props;
    let rows = [];
    let lastCategory;
    let products = this.props.products.slice(0);
    products.sort((a, b) => {
      if (a.category > b.category) {
        return 1;
      } else if (a.category === b.category) {
        return 0;
      } else {
        return -1;
      }
    });
    products.forEach(product => {
      let key = true;
      if (searchStr) {
        key = product.name.indexOf(searchStr) >= 0;
      }
      if (onlyStocked) {
        key = product.stocked;
      }
      if (!key) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
// 搜索框
class SearchBar extends React.Component {
  render() {
    const { searchStr, onlyStocked } = this.props;
    return (
      <form className="search-bar">
        <input type="text" placeholder="Search.." value={searchStr} onChange={this.props.searchStrChange} />
        <p>
          <input type="checkbox" value={onlyStocked} onChange={this.props.X} /> Only show products in stock
        </p>
      </form>
    );
  }
}
// FilterableProductTable 外壳
export class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: "",
      onlyStocked: false
    };
    this.handleSearchStrChange = this.handleSearchStrChange.bind(this);
    this.handleOnlyStocked = this.handleOnlyStocked.bind(this);
  }
  handleSearchStrChange(e) {
    this.setState(() => ({ searchStr: e.target.value }));
  }
  handleOnlyStocked(e) {
    this.setState(() => ({ onlyStocked: e.target.checked }));
  }
  render() {
    return (
      <div className="table-container">
        <SearchBar
          searchStr={this.state.searchStr}
          onlyStocked={this.state.onlyStocked}
          searchStrChange={this.handleSearchStrChange}
          onlyStockedChange={this.handleOnlyStocked}
        />
        <ProductTable
          products={this.props.products}
          searchStr={this.state.searchStr}
          onlyStocked={this.state.onlyStocked}
        />
      </div>
    );
  }
}

export const PRODUCTS = [
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod xxxx" },
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
export default FilterableProductTable;
