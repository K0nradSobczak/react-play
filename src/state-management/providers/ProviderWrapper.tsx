import React, { ReactNode } from 'react'
import TaskProvider from '../tasks/TaskProvider';
import AuthProvider from './AuthProvider';
interface Props{
  children: ReactNode;
}
function ProviderWrapper({children}: Props) {
  return (
    <TaskProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </TaskProvider>
  )
}

export default ProviderWrapper