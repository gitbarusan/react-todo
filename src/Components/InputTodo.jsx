// 親のコンポーネントで作成された関数やuseStateをpropsで渡す
export const InputTodo = (props) => {
  // propsの中身を分割代入
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      {/* 
    const [todoText,setTodoText] = useState('');
    <input placeholder="TODOを入力" value={todoText}/>
    これだと常に空文字が設定されてしまって入力出来ない
     */}
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
