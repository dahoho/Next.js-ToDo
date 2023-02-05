type Props = {
  completeTodos: string[];
  onClickBack: (index: number) => void;
};

export const CompleteTodos = ({ completeTodos, onClickBack }: Props) => {
  return (
    <div className="mt-10">
      <div>
        <p className="bg-slate-200 py-2 px-3 text-lg font-bold">完了</p>
        <ul className="mt-5 space-y-3">
          {completeTodos.map((todo, index) => {
            return (
              <li key={index} className="flex items-center">
                <p className="w-full">{todo}</p>
                <div className="shrink-0">
                  <button
                    type="button"
                    className="mr-2 bg-gray px-3 py-1 text-white hover:opacity-90"
                    onClick={() => onClickBack(index)}
                  >
                    戻す
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
