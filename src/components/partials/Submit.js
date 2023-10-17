import { AiOutlineSearch } from "react-icons/ai";

const Submit = (props) => {
  return (
    <form className="flex" onSubmit={props.fetchWeather}>
      <input
        onChange={props.changeValue}
        type="text"
        placeholder="Search"
        className="px-10 bg-zinc-300 rounded-[20px]  font-normal font-['Monotxt']"
        value={props.value}
      />
      <button type="submit">
        <AiOutlineSearch className="flex text-lg gap-3" />
      </button>
    </form>
  );
};

export default Submit;
