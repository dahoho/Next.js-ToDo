type Props = {
  incompleteTodos: string[];
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
};

export const IncompleteTodos = ({
  incompleteTodos,
  onClickComplete,
  onClickDelete,
}: Props) => {
  return (
    <div className="mt-10">
      <div>
        <p className="bg-slate-200 py-2 px-3 text-lg font-bold">未完了</p>
        <ul className="mt-5 space-y-3">
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={index} className="flex items-center">
                <p className="w-full">{todo}</p>
                <div className="shrink-0">
                  <button
                    type="button"
                    className="mr-2 bg-green px-3 py-1 text-white"
                    onClick={() => onClickComplete(index)}
                  >
                    完了
                  </button>
                  <button
                    type="button"
                    className="bg-red px-3 py-1 text-white"
                    onClick={() => onClickDelete(index)}
                  >
                    削除
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
