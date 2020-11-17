import {
  alignCenter,
  alignEnd,
  alignStart,
  children,
  pageNoBorderTheme,
  pageTheme,
  structure,
  sectionTheme,
} from '../../../../EmptyState/docs/examples';

export const playground = `
<div>
  <ThemeProvider theme={theme()}>
    <Box padding="10px" align="center">
      ${structure}
    </Box>
    <Divider/>
    <Box padding="10px" align="center">
      ${pageTheme}
    </Box>
    <Divider/>
    <Box padding="10px" align="center">
      ${pageNoBorderTheme}
    </Box>
    <Divider/>
    <Box padding="10px" align="center">
      ${sectionTheme}
    </Box>
    <Divider/>
    <Box padding="10px" align="center">
      ${children}
    </Box>
    <Divider/>
    <Box padding="10px" align="center">
      ${alignStart}
    </Box>
    <Divider/>
    <Box padding="10px" align="center">
      ${alignCenter}
    </Box>
    <Divider/>
    <Box padding="10px" align="center">
      ${alignEnd}
    </Box>
  </ThemeProvider>
</div>
`;
