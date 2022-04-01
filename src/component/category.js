import React from 'react'
import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom';

export default function Category() {
const {id} = useParams();
const [searchParam, setSearchParam] = useSearchParams();

    return (
    <div>Category - {id} - {searchParam.get('price')} - {searchParam.get('kg')}</div>
  )
}
