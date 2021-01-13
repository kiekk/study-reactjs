import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Hi from './Hi';

function App() {
  const name = '김사과';
  const style = {
    backgroundColor : 'deepskyblue',
    fontSize : 30,
    color : 'white',
    padding : '1em'
  }
  return (
    <> {/* 여러개의 태그는 꼭 하나로 묶어야 합니다. */}
      <div>안녕하세요. 리액트</div>
      <div>안녕하세요. 리액트</div>
      <div style={style}>안녕하세요. {name}님</div>
      <Hello name="김사과" color="deeppink"/>
      <Hello name="오렌지" color="gold"/>
      <Hello name="반하나" color="deepskyblue"/>
      <Hello/>
      <Wrapper>
        <Hello></Hello>
      </Wrapper>
      <Hi name="이메론" color="green" isSpecial={true}></Hi>
      <Hi name="오렌지" color="orange" isSpecial></Hi>
      <Hi name="박수박" color="red"></Hi>
    </>
  );
}

export default App;
