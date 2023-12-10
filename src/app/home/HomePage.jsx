import React from "react";
import {Link} from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl p-5">Hi, Welcome to Lettfaktura</h1>
      <h3 className="text-xl p-5">Please go to the following links:</h3>
      <ul className="p-5">
        <li>
          {/*<a href={"/terms"}>/terms</a>*/}
            <Link to={"/terms"}>/terms</Link>
        </li>
        <li>
          {/*<a href={"/us"}>/us</a>*/}
            <Link to={"/us"}>/us</Link>
        </li>
        <li>
          {/*<a href={"/pricelist"}>/pricelist</a>*/}
            <Link to={"/pricelist"}>/pricelist</Link>
        </li>
      </ul>
    </div>
  );
}
