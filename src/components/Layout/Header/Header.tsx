import ButtonLink from "@/components/Atoms/Button";
import Logo from "@/components/Atoms/Logo";

export default function Header() {
  return (
    <header className="px-4 shadow">
      <div className="grid items-center grid-cols-[200px,1fr,auto] py-5">
        <div>
          <Logo size="sm" />
        </div>
        <nav className="w-full grid justify-center">
          <ul className="flex gap-4">
            <li>Stuff</li>
            <li>Stuff</li>
            <li>Stuff</li>
          </ul>
        </nav>
        <div className="flex items-center gap-8">
          <div>
            <input
              type="text"
              className="rounded border border-gray py-3 px-2"
              placeholder="Search"
            />
          </div>
          <ButtonLink />
        </div>
      </div>
    </header>
  );
}
