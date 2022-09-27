/* eslint-disable no-use-before-define */
import { ICrudActions } from 'Typing/Interfaces/IActions/ICrudActions'
import { IBaseEntityAdapter } from 'Typing/Interfaces/IBaseEntityAdapter'

export interface EntitiesManagementViewProps<TEntity> {
  entityAdapter : IBaseEntityAdapter<TEntity>
  defaultCardHeaderImage : string
  entities : Array<TEntity>
  crudActionProvider : ICrudActions<TEntity>
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

export interface CustomFieldsData {
  
}

export interface IEntityManagementStore<TEntity> {
  entityAdapter : IBaseEntityAdapter<TEntity>
  defaultCardHeaderImage : string
  crudActionProvider : ICrudActions<TEntity>
  customFieldsData? : CustomFieldsData
  classNames? : EntityManagementCSSClasses
  options? : EntitiesManagementOptions
}
