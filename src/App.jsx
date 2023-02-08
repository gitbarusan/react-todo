import { useState } from "react";
import "./styles.css";

export const App = () => {
  // inputの入力値を格納用
  const [todoText, setTodoText] = useState("");
  // 未完了のTODO、完了したTODOの内容は動的に変わるので、それを格納する用のuseStateを用意
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  //inputに変更があった時のイベントで入力値を取得して setTodoTextに渡す
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  // 追加ボタンクリックイベント
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    // 未完了のTODOに追加したらinputの文字は消す
    setTodoText("");
  };
  // 削除ボタンクリックイベント
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // 対象の要素を削除
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 完了ボタンクリックイベント
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    // 対象の要素を削除
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  // 戻すボタンクリックイベント
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        {/* 
        const [todoText,setTodoText] = useState('');
        <input placeholder="TODOを入力" value={todoText}/>
        これだと常に空文字が設定されてしまって入力出来ない
         */}
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* 
          下記コードを生成したい
          <div className="list-row">
            <li>未完了です</li>
            <button>完了</button>
            <button>削除</button>
          </div>         
          */}
          {/* mapなどでループしてレンダリングする場合keyの設定を忘れずに */}
          {incompleteTodos.map((todo, index) => {
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
      <div class="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
