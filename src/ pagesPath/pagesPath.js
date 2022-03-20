import React from 'react';
import { Redirect } from 'react-router-dom';

import AddUsersTasks from '../component/add_user_task';
import EntranceAdmin from '../component/entrance_admin';

export const PagesLoad = () => <div>Loading...</div>;
export const PagesRedirect = () => <Redirect to="/Header" />;
export const PagesAddUsersTasks = () => <AddUsersTasks />;
export const PagesEntranceAdmin = () => <EntranceAdmin />;
