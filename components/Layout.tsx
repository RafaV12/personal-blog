import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='px-8 pt-12 min-h-screen'>
      <Header />
      <main>{children}</main>
    </div>
  );
}
