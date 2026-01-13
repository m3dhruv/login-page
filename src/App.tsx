import { MantineProvider } from '@mantine/core';
import Login from './components/Login';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      fontFamily: 'Inter, sans-serif',
      primaryColor: 'blue',
    }}>
      <Login />
    </MantineProvider>
  );
}
