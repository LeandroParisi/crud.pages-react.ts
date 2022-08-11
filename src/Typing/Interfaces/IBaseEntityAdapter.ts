import { IEntityView } from 'Typing/Interfaces/EntitiesManagementPage/IEntityView'
import { IEntityEdit } from 'Typing/Interfaces/EntityEditModal/IEntityEdit'
import { CustomId } from 'Typing/Types/CustomId'

export interface IBaseEntityAdapter<TEntity, TId extends CustomId> {
  DefaultEntity : TEntity

  AdaptEntityToManagementView(entity : TEntity) : IEntityView<TId>

  AdaptEntityToEditView<TValue, TCustomFields>(entity : TEntity) : IEntityEdit<TId, TValue, TCustomFields>
}
