import React from "react";

import { Navbar,Hero,Footer,Feature } from "../components/index";

const App = () => {
  return (
    <div>

      <Navbar/>
      <Hero/>      
     <div className="mt-10">
       <Feature/>
     </div>
        <Footer/>
    </div>
 
  );
};

export default App;
