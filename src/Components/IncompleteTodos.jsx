export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* mapなどでループしてレンダリングする場合keyの設定を忘れずに */}
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* 
            下記のコードだとonClickDelete(index)で関数が実行されてしまう
            （削除ボタン押下時ではなく、レンダリングで配列分実行
            <button onClick={onClickDelete(index)}>削除</button>               
            */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
