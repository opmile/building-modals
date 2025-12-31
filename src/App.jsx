import React, { useState } from "react";
import "./index.css";
import Dialog from "./components/ui/Dialog";
import Form from "./components/Form";
import Button from "./components/ui/Button";

function App() {
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <div className="h-screen bg-gray-700 flex justify-center items-center font-primary">
      <Button onClick={() => setIsOpen(true)} className="bg-blue-600">
        open
      </Button>
      <Dialog 
        title="login:" 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Form />
      </Dialog>
    </div>
  );
}

export default App;
