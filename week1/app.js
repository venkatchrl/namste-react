const heading1 = React.createElement(
    "h1",
    { id: "title" },
    "This is where we put content in the tag created ( using react element)"
  );
  const heading2 = React.createElement(
    "h1",
    { id: "title" },
    "This is an other element created (Heading 1)"
  );
  const container = React.createElement("div", { id: "container" }, [
    heading1,
    heading2,
  ]);
  console.log(heading1);
  const root = ReactDOM.createRoot(document.getElementById("root"));

  //passing a react element inside the root
  root.render(container);