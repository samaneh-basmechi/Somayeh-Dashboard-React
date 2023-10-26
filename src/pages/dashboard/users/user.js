import React from 'react';
import { httpService } from '../../../core/http-service';
import UserList from './users-list';

function Users () {

  return (
    <div>
      <UserList/>
    </div>
  );
}

export default Users;

export async function users ( {request} ) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const response = await httpService.post('/document', data);
  return response.status === 200;
}
