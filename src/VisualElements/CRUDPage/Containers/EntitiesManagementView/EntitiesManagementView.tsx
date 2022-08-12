/* eslint-disable @typescript-eslint/no-unused-vars */
import { once } from 'lodash'
import React, { useContext, useMemo, useState } from 'react'
import { EntityCard } from 'VisualElements/CRUDPage/Components/EntityCard/EntityCard'
import styles from './EntitiesManagementView.module.scss'
import { EntitiesManagementViewProps, IEntityManagementStore } from './EntitiesManagementView.types'

const contextFactory = once(
  <TEntityTypes, TEntity>() => React
    .createContext({} as IEntityManagementStore<TEntityTypes, TEntity>),
)

export function useEntitiesManagementContext<TEntityTypes, TEntity>() {
  return useContext(contextFactory<TEntityTypes, TEntity>())
}

function EntitiesManagementView<TEntityTypes, TEntity>({
  type,
  crudActionProvider,
  entityAdapter,
  entities,
  classNames,
  options,
} : EntitiesManagementViewProps<TEntityTypes, TEntity>) {
  const contextInfo : IEntityManagementStore<TEntityTypes, TEntity> = useMemo(() => ({
    entityAdapter,
    crudActionProvider,
    options,
    type,
    classNames,
  }), [])

  const [openModal, setOpenModal] = useState<boolean>(false)

  const EntitiesManagementContext = contextFactory<TEntityTypes, TEntity>()

  return (
    <EntitiesManagementContext.Provider value={contextInfo}>
      <section className={styles.container}>
          {entities.length
            ? (
              entities?.map((entity) => (
                <EntityCard
                  entity={entityAdapter.AdaptEntityToManagementView(entity)}
                />
              ))
            )
            : (
              <p>
                Você não tem nenhum registro nessa categoria
                ou não foram encontrados registros com o filtro selecionado.
              </p>
            )}
          {/* <Icon
            icon={generalIcons.ADD}
            className={styles.addIcon}
            size="20px"
            type="default"
            tooltipText="Novo"
            onClick={() => setOpenModal(true)}
          />
          <Modal
            isOpened={openModal}
            close={() => setOpenModal(false)}
            className={styles.addEntity}
          >
            <EditModal
              entity={createEntity}
              type={type}
              editRequest={createRequest}
            />
          </Modal> */}
        </section>
    </EntitiesManagementContext.Provider>

  )
}

// const EntitiesContainer = ({
//   entities,
//   type,
//   editRequest,
//   activate,
//   deactivate,
//   editEntities,
//   createEntity,
//   createRequest,
//   deleteRequest,
// }) => {
//   const [openModal, setOpenModal] = useState(false)
//   return (
//     <section className={styles.container}>
//       {entities.length
//         ? (
//           entities?.map((entity, index) => (
//             <EntityCard
//               entity={entity}
//               type={type}
//               editEntity={editEntities[index]}
//               editRequest={editRequest}
//               activate={activate}
//               deactivate={deactivate}
//               deleteRequest={deleteRequest}
//             />
//           ))
//         )
//         : (
//           <p>
//             Você não tem nenhum registro nessa categoria
//             ou não foram encontrados registros com o filtro selecionado.
//           </p>
//         )}
//       <Icon
//         icon={generalIcons.ADD}
//         className={styles.addIcon}
//         size="20px"
//         type="default"
//         tooltipText="Novo"
//         onClick={() => setOpenModal(true)}
//       />

//       <Modal
//         isOpened={openModal}
//         close={() => setOpenModal(false)}
//         className={styles.addEntity}
//       >
//         <EditModal
//           entity={createEntity}
//           type={type}
//           editRequest={createRequest}
//         />
//       </Modal>
//     </section>
//   )
// }

// EntitiesContainer.propTypes = {
//   entities: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   type: PropTypes.oneOf([...Object.values(entitiesTypes)]).isRequired,
//   editRequest: PropTypes.func.isRequired,
//   activate: PropTypes.func.isRequired,
//   deactivate: PropTypes.func.isRequired,
//   editEntities: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   createEntity: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
//   createRequest: PropTypes.func.isRequired,
//   deleteRequest: PropTypes.func,
// }

// EntitiesContainer.defaultProps = {
//   deleteRequest: null,
// }

export { EntitiesManagementView }
