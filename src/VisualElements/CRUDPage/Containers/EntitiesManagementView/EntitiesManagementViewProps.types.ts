/* eslint-disable no-use-before-define */
import { ICrudActions } from 'Typing/Interfaces/IActions/ICrudActions'
import { IBaseEntityAdapter } from 'Typing/Interfaces/IBaseEntityAdapter'
import { CustomId } from 'Typing/Types/CustomId'

export interface EntitiesManagementViewProps<TId extends CustomId, TEntityTypes, TEntity> {
  entityAdapter : IBaseEntityAdapter<TEntity, TId>
  type : keyof TEntityTypes
  entities : Array<TEntity>
  crudActionProvider : ICrudActions<TId, TEntity>
  classNames? : EntityManagementCSSClasses
  options? : EntitiesManagementOptions
}

export interface EntityManagementCSSClasses {
  containerClass? : string
  addIconClass? : string
  editModalClass? : string
}

export interface EntitiesManagementOptions {
  pagination? : {

  }
}
