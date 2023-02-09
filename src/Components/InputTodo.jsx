// cssinJs　コンポーネント内にCSSを記述
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

// 親のコンポーネントで作成された関数やuseStateをpropsで渡す
export const InputTodo = (props) => {
  // propsの中身を分割代入
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      {/* 
    const [todoText,setTodoText] = useState('');
    <input placeholder="TODOを入力" value={todoText}/>
    これだと常に空文字が設定されてしまって入力出来ない
     */}
      {/* propsで受け取ったdisabled（true/flase)によってdisabledを切り替える */}
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
