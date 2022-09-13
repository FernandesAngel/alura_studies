import style from "./Clock.module.scss";

interface Props {
  time: number | undefined
}
export default function Clock({time = 0}: Props) {
  const m = Math.floor(time / 60);
  const s = time % 60;

  const [minutesFirst, minutesLast] = String(m).padStart(2, "0")
  const [secondsFirst, secondsLast] = String(s).padStart(2, "0")

  return (
    <>
      <span className={style.relogioNumero}>{minutesFirst}</span>
      <span className={style.relogioNumero}>{minutesLast}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsFirst}</span>
      <span className={style.relogioNumero}>{secondsLast}</span>
    </>
  );
}
