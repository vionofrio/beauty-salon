import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const sans = localFont({
  src: [
    {
      path: "../fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf",
      weight: "400",
    },
    {
      path: "../fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf",
      weight: "500",
    },
    {
      path: "../fonts/DM_Sans/DMSans-VariableFont_opsz,wght.ttf",
      weight: "700",
    },
  ],
  variable: "--font-sans",
});

const poppins = localFont({
  src: "../fonts/Poppins/Poppins-Bold.ttf",
  weight: "700",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BeautySalon",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
