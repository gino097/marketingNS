import React, { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState("");

  //Waits for a period of time then resolves
  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    let isCancelled = false;

    const handleChange = async () => {
      //const data = await getdata()
      await timeout(1000);

      if (!isCancelled) {
        alert(`A name was changed: ${value}`);
      }
    };

    handleChange();
    //Cleanup function is called when useEffect is called again or on unmount
    return () => {
      isCancelled = true;
    };
  }, [value]);

  return (
    <div className="App">
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;