import { useState } from "react";
import "./styles.css";

export const App = () => {
  // inputの入力値を格納用
  const [todoText, setTodoText] = useState("");
  // 未完了のTODO、完了したTODOの内容は動的に変わるので、それを格納する用のuseStateを用意
  const [incompleteTodos, setIncompleteTodos] = useState([
    "未完了です",
    "未完了です2"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["完了です"]);

  //inputに変更があった時のイベントで入力値を取得して setTodoTextに渡す
  const onChangeTodoText = (e) => setTodoText(e.target.value);
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
        <button>追加</button>
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
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div class="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
