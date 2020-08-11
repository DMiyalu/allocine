import React, { Component } from 'react';
import { Pagination } from 'semantic-ui-react'
import { API_TOKEN } from '../../API/TMDBApi';
import Card from './Card';


const PaginationExamplePagination = () => (
  <Pagination defaultActivePage={1} totalPages={10} />
)

export default PaginationExamplePagination