import { Link } from "@nextui-org/link";
export default function NavButton(props) {
    return (
      <Link className="text-white bg-purple-500 opacity-75 hover:opacity-100 rounded p-3" href={props.href}>
  {props.text}
      </Link>
    );
  }