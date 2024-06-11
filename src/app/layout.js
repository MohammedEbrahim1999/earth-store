import Header from "./LayoutComponent/Header"
import FooterElement from "./LayoutComponent/Footer"
export const metadata = {
  title: 'Earth Store',
  description: 'Generated by Next.js',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <FooterElement />
        </body>
        
    </html>
  )
}
