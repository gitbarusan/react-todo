import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./Components/InputTodo";
import { IncompleteTodos } from "./Components/IncompleteTodos";
import { CompleteTodos } from "./Components/CompleteTodos";

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
      {/* InputTodoにpropsで渡す値を設定 */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5} //incompleteTodos.length >= 5の時trueが入る
      />
      {/* incompleteTodosの要素数が5以上になったらメッセージを表示 */}
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるTODOは５個までだよ。やってね！</p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
