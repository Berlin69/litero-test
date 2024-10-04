import { PropsWithChildren } from 'react';
import { Button } from '../../primitives/button';

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-[1040px] w-full px-4 mx-auto">{children}</div>;
};

export const Header = () => {
  return (
    <header className="py-4">
      <Layout.Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="/">
              <img
                className="w-[89px] h-10 no-user-drag"
                src="/assets/png/Logo.png"
                alt="logo"
              />
              <span></span>
            </a>
            <nav>
              <ul className="flex gap-8 text-sm">
                <li>
                  <a className="transition-opacity hover:opacity-80" href="/">
                    AI content tools
                  </a>
                </li>
                <li>
                  <a className="transition-opacity hover:opacity-80" href="/">
                    Writing tools
                  </a>
                </li>
                <li>
                  <a className="transition-opacity hover:opacity-80" href="/">
                    Pricing
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-3">
            <Button>Login</Button>
            <Button variant="outline">Try Now for Free</Button>
          </div>
        </div>
      </Layout.Container>
    </header>
  );
};

export const Layout = {
  Container,
  Header,
};
