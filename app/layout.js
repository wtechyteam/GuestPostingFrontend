'use client'
import React from "react";
import "./globals.css";
import "./../public/styles/index.css";
import "./../public/styles/font.css";
import "./../public/styles/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
import { Provider } from "react-redux";
import store from "./../app/redux/store"; // Adjust this path if you keep the store in a different location
 
 
 
function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </head>
      <body>
        {/* Wrap the children inside the Redux Provider */}
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
 
export default RootLayout;