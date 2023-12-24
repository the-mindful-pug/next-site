import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"

export default function RootLayout(props: any) {
  const { children } = props
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
