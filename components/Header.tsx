import Link from 'next/link';

interface Link {
  label: string;
  route: string;
}

const links: Link[] = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Post',
    route: '/post',
  },
];

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ label, route }) => (
            <li key={label}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
