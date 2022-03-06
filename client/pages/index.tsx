import type { NextPage } from 'next';
import Link from 'next/link';
import { useTheme, Text } from '@nextui-org/react';
import ThemeSwitch from '../components/theme-switch';

const HomePage = () => {
  const { theme } = useTheme();
  if (theme === undefined) {
    return <div>No Theme</div>;
  }

  return (
    <div>
      <Text
        h1
        css={{
          color: '$blue800',
          fontSize: '$sm',
          padding: '$2 $4',
        }}
      >
        NextUI App
      </Text>
      <p
        style={{
          color: theme.colors.primary.value,
          fontSize: theme.fontSizes.tiny.value,
          padding: `${theme.space[2].value} ${theme.space[4].value}`,
        }}
      >
        Using color theme value
      </p>
      <ThemeSwitch />
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $blue500 -20%, $pink500 50%',
        }}
        weight='bold'
      >
        Let&apos;s
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $purple500 -20%, $pink500 100%',
        }}
        weight='bold'
      >
        Make the Web
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $yellow500 -20%, $red500 100%',
        }}
        weight='bold'
      >
        Prettier
      </Text>
      <Link passHref href='/blog'>
        <Text>Blog</Text>
      </Link>
    </div>
  );
};

const Home: NextPage = () => <HomePage />;
export default Home;
