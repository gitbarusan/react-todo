import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>未完了です</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>未完了です2</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div class="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          <div className="list-row">
            <li>完了です</li>
            <button>完了</button>
          </div>
        </ul>
      </div>
    </>
  );
};
