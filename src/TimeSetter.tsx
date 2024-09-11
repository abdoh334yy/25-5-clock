import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface TimeSetterProps {
  time: number;
  setTime: (time: number) => void;
  min: number;
  max: number;
  interVal: number;
  type: "break" | "session";
}

const TimeSetter: React.FC<TimeSetterProps> = ({
  time,
  setTime,
  min,
  max,
  interVal,
  type
}) => {
  return (
    <div>
      <button onClick={() => (time > min ? setTime(time - interVal) : null)}
        id={`${type}-decrement`}></button>
        <FaArrowDown />
        <span id={`${type}-length`}>{time / interVal}</span>
      <button
        onClick={() => (time < max ? setTime(time + interVal) : null)}
        id={`${type}-increment`}
      >
        <FaArrowUp />
      </button>
    </div>
  )
}

export default TimeSetter