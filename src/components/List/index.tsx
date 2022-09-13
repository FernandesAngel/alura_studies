import Item from "./Item/item";
import style from "./List.module.scss";
import { ITask } from "../../types/task";

interface Props {
  tasks: ITask[],
  selectTask: (selectedTask: ITask) => void;
}

export default function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((i) => (
          <Item {...i} key={i.id} selectTask={selectTask} />
        ))}
      </ul>
    </aside>
  );
}
