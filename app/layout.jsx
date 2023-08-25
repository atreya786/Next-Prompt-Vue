import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  name: "Prompt Vue",
  description:
    "A platform for sharing and exploring creative prompts, thoughts, and ideas through interactive blogs and discussions.",
  version: "1.0.0",
  author: "Atreya Chandan",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
