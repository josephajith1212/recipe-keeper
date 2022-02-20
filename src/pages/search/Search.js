import React from 'react';
import {useLocation} from 'react-router-dom';
//styles
import "./Search.css"

export default function Search() {
  const queryString = useLocation();
  const queryParam = new URLSearchParams(queryString);
  const query = queryParam.get('q');

  return (
  <div>

  </div>
  )
}
