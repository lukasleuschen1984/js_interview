import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { ChildrenChallenge } from './challenges/ChildrenChalllenge';
import { FetchDataChallenge } from './challenges/FetchDataChallenge';
import { ListingChallenge } from './challenges/ListingChallenge';


export default function App() {

  return (
    <>
    <ul>
      <li>
        <Link to="/">1: Listing</Link>
      </li>
      <li>
        <Link to="/ChildrenChallenge">2: Callback/ChildrenChallenge</Link>
      </li>
      <li>
        <Link to="/FetchDataChallenge">3: FetchDataChallenge</Link>
      </li>
    </ul>
    <Routes>
        <Route path="/" element={<ListingChallenge />} />
        <Route path="ChildrenChallenge" element={<ChildrenChallenge />} />
        <Route path="FetchDataChallenge" element={<FetchDataChallenge />} />
    </Routes>
    </>
  );
}
