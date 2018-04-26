import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/404.png';
import './notFound.css';
const NotFound = () => (
<div class = "notfound">
<img src={PageNotFound}/>
<center><Link to="/">Return to Home Page</Link></center>

</div>
);
export default NotFound;