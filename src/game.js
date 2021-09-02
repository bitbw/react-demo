/*
 * @Description: 
 * @Autor: Bowen
 * @Date: 2021-09-02 12:13:35
 * @LastEditors: Bowen
 * @LastEditTime: 2021-09-02 12:13:36
 */
import React from "react";
// class Square extends React.Component {
//   // constructor(porps) {
//   //   super(porps);
//   //   this.state = {
//   //     value: null
//   //   };
//   // }
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={e => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }
// Fuction Components
function Square(props) {
    return (
      <button className="square" onClick={e => props.onClick()}>
        {props.value}
      </button>
    );
  }
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squareStates: Array.from({ length: 9 }, () => null),
        nextIsX: true,
        winner: null
      };
    }
    handleSquareClick(i) {
      const squareStates = this.state.squareStates.slice();
      if (this.state.winner || squareStates[i]) {
        return;
      }
      squareStates[i] = this.state.nextIsX ? "X" : "O";
      this.setState({
        squareStates,
        nextIsX: !this.state.nextIsX,
        winner: this.calculateWinner(squareStates)
      });
    }
    calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      let key = null;
      for (const line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          key = squares[a];
        }
      }
      return key;
    }
    renderSquare(i) {
      return <Square value={this.state.squareStates[i]} onClick={() => this.handleSquareClick(i)} />;
    }
    render() {
      const status = this.state.winner
        ? `Winner is ${this.state.winner}`
        : `Next player: ${this.state.nextIsX ? "X" : "O"}`;
  
      return (
        <div className="board">
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
export  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board onChangeWinner={winner => this.hendleChangeWinner(winner)} />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }