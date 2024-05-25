import { type FC } from 'react';

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
