import { useEffect, useState } from "react";
import { timeToSecs } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface Props {
  selected: ITask | undefined;
  endTask: () => void
}
export default function Timer({selected, endTask}: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(selected?.time){
      setTime(timeToSecs(selected.time))
    }
  }, [selected])

  function countdown(count: number = 0){
    setTimeout(() => {
      if(count > 0){
        setTime(count-1);
        return countdown(count-1)
      }
      endTask()
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha o card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time}/>
      </div>
      <Button onClick={()=>countdown(time)}>Começar!</Button>
    </div>
  );
}
