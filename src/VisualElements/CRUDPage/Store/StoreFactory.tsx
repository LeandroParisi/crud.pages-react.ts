import React from 'react'
import { CustomId } from 'Typing'
import { EntitiesManagementViewProps } from '../Containers'

export function EntitiesManagementStoreFactory<TId extends CustomId, TEntityTypes, TEntity>(context: EntitiesManagementViewProps<TId, TEntityTypes, TEntity>) {
  const EntitiesManagementContext = React.createContext(context)

  return {
    EntitiesManagementContext,
  }
}
