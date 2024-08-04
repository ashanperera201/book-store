import { Container } from "@mantine/core";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};
