type Props = {
  completeTodos: string[];
  onClickBack: (index: number) => void;
};

export const CompleteTodos = ({ completeTodos, onClickBack }: Props) => {
  return (
    <div className="mt-10">
      <div>
        <p className="text-xl font-bold">完了</p>
        <ul className="mt-5 space-y-3">
          {completeTodos.map((todo, index) => {
            return (
              <li key={index} className="flex items-center">
                <p className="w-full">{todo}</p>
                <div className="shrink-0">
                  <button
                    type="button"
                    className="mr-2 bg-green px-3 py-1 text-white"
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
